#!/usr/bin/env python3
"""
Goyo Tech Blog Server
提供Notion API代理和靜態檔案服務
"""

import http.server
import socketserver
import urllib.request
import urllib.parse
import json
import os
from urllib.parse import urlparse, parse_qs
from dotenv import load_dotenv

# 載入環境變數
load_dotenv()

PORT = 8000

class BlogHandler(http.server.SimpleHTTPRequestHandler):
    def end_headers(self):
        # 添加CORS headers
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')
        self.send_header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Notion-Version')
        super().end_headers()

    def do_OPTIONS(self):
        self.send_response(200)
        self.end_headers()

    def do_GET(self):
        parsed_path = urlparse(self.path)

        # Notion API代理
        if parsed_path.path == '/api/notion/database':
            self.handle_notion_database()
        elif parsed_path.path == '/api/notion/query':
            self.handle_notion_query()
        elif parsed_path.path.startswith('/api/notion/page/'):
            page_id = parsed_path.path.split('/')[-1]
            self.handle_notion_page(page_id)
        else:
            # 靜態檔案
            super().do_GET()

    def do_POST(self):
        parsed_path = urlparse(self.path)

        if parsed_path.path == '/api/notion/query':
            self.handle_notion_query_post()
        else:
            self.send_error(404)

    def handle_notion_database(self):
        """取得Database資訊"""
        try:
            database_id = os.getenv('NOTION_DATABASE_ID')
            api_key = os.getenv('NOTION_API_KEY')

            url = f'https://api.notion.com/v1/databases/{database_id}'

            req = urllib.request.Request(url)
            req.add_header('Authorization', f'Bearer {api_key}')
            req.add_header('Content-Type', 'application/json')
            req.add_header('Notion-Version', '2022-06-28')

            with urllib.request.urlopen(req) as response:
                data = response.read()

            self.send_response(200)
            self.send_header('Content-Type', 'application/json')
            self.end_headers()
            self.wfile.write(data)

        except Exception as e:
            print(f'Database API錯誤: {e}')
            self.send_error(500, f'Notion API錯誤: {str(e)}')

    def handle_notion_query(self):
        """查詢Database內容 (GET)"""
        try:
            self.handle_notion_query_post()
        except Exception as e:
            print(f'Query錯誤: {e}')
            self.send_error(500)

    def handle_notion_query_post(self):
        """查詢Database內容 (POST)"""
        try:
            database_id = os.getenv('NOTION_DATABASE_ID')
            api_key = os.getenv('NOTION_API_KEY')

            # 預設查詢條件 (取已發布的文章)
            query_data = {
                "filter": {
                    "property": "Status",
                    "status": {
                        "equals": "Published"
                    }
                },
                "sorts": [
                    {
                        "property": "Published Date",
                        "direction": "descending"
                    }
                ]
            }

            # 如果是POST請求，讀取請求body
            if self.command == 'POST':
                content_length = int(self.headers.get('Content-Length', 0))
                if content_length > 0:
                    post_data = self.rfile.read(content_length).decode('utf-8')
                    try:
                        query_data = json.loads(post_data)
                    except:
                        pass  # 使用預設查詢

            url = f'https://api.notion.com/v1/databases/{database_id}/query'

            req = urllib.request.Request(url,
                                       data=json.dumps(query_data).encode('utf-8'),
                                       method='POST')
            req.add_header('Authorization', f'Bearer {api_key}')
            req.add_header('Content-Type', 'application/json')
            req.add_header('Notion-Version', '2022-06-28')

            with urllib.request.urlopen(req) as response:
                data = response.read()

            self.send_response(200)
            self.send_header('Content-Type', 'application/json')
            self.end_headers()
            self.wfile.write(data)

        except urllib.error.HTTPError as e:
            error_data = e.read().decode('utf-8')
            print(f'Notion API HTTP錯誤 {e.code}: {error_data}')
            self.send_response(e.code)
            self.send_header('Content-Type', 'application/json')
            self.end_headers()
            self.wfile.write(error_data.encode('utf-8'))

        except Exception as e:
            print(f'Query錯誤: {e}')
            self.send_error(500, f'代理錯誤: {str(e)}')

    def handle_notion_page(self, page_id):
        """取得頁面內容"""
        try:
            api_key = os.getenv('NOTION_API_KEY')

            # 先取得頁面資訊
            page_url = f'https://api.notion.com/v1/pages/{page_id}'
            page_req = urllib.request.Request(page_url)
            page_req.add_header('Authorization', f'Bearer {api_key}')
            page_req.add_header('Notion-Version', '2022-06-28')

            with urllib.request.urlopen(page_req) as response:
                page_data = json.loads(response.read())

            # 取得頁面內容
            blocks_url = f'https://api.notion.com/v1/blocks/{page_id}/children'
            blocks_req = urllib.request.Request(blocks_url)
            blocks_req.add_header('Authorization', f'Bearer {api_key}')
            blocks_req.add_header('Notion-Version', '2022-06-28')

            with urllib.request.urlopen(blocks_req) as response:
                blocks_data = json.loads(response.read())

            # 組合結果
            result = {
                'page': page_data,
                'blocks': blocks_data
            }

            self.send_response(200)
            self.send_header('Content-Type', 'application/json')
            self.end_headers()
            self.wfile.write(json.dumps(result).encode('utf-8'))

        except Exception as e:
            print(f'頁面API錯誤: {e}')
            self.send_error(500, f'取得頁面失敗: {str(e)}')

if __name__ == "__main__":
    try:
        with socketserver.TCPServer(("", PORT), BlogHandler) as httpd:
            print("🚀 Goyo Tech Blog Server 已啟動！")
            print(f"📍 訪問地址: http://localhost:{PORT}")
            print(f"📄 Blog頁面: http://localhost:{PORT}/blog.html")
            print("⚡ 支援Notion API代理，解決CORS問題")
            print("📡 API端點:")
            print(f"   - Database資訊: http://localhost:{PORT}/api/notion/database")
            print(f"   - 查詢文章: http://localhost:{PORT}/api/notion/query")
            print(f"   - 取得頁面: http://localhost:{PORT}/api/notion/page/{{page_id}}")
            print("\n按 Ctrl+C 停止伺服器")

            httpd.serve_forever()

    except KeyboardInterrupt:
        print("\n👋 伺服器已停止")
    except Exception as e:
        print(f"❌ 伺服器啟動失敗: {e}")