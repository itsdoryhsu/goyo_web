#!/bin/bash

echo "🚀 啟動Goyo Tech網站本地伺服器..."

# 檢查Python版本
if command -v python3 &> /dev/null; then
    echo "使用Python3啟動伺服器..."
    echo "網站地址: http://localhost:8000"
    echo "按Ctrl+C停止伺服器"
    echo ""
    python3 -m http.server 8000
elif command -v python &> /dev/null; then
    echo "使用Python2啟動伺服器..."
    echo "網站地址: http://localhost:8000"
    echo "按Ctrl+C停止伺服器"
    echo ""
    python -m SimpleHTTPServer 8000
else
    echo "❌ 未找到Python，請安裝Python後再試"
    echo "或者使用其他方式啟動本地伺服器"
fi