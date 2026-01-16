/**
 * Notion API 代理版本
 * 透過本地伺服器代理，解決CORS問題
 */

class NotionBlogAPIProxy {
    constructor() {
        this.baseUrl = window.location.origin; // 使用當前網域
        this.cache = new Map();
        this.cacheTime = 5 * 60 * 1000; // 5分鐘快取
    }

    /**
     * 取得所有發布的文章
     */
    async getPosts(filter = {}) {
        const cacheKey = 'posts_' + JSON.stringify(filter);

        // 檢查快取
        if (this.cache.has(cacheKey)) {
            const cached = this.cache.get(cacheKey);
            if (Date.now() - cached.timestamp < this.cacheTime) {
                return cached.data;
            }
        }

        try {
            const response = await fetch(`${this.baseUrl}/api/notion/query`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    filter: {
                        and: [
                            {
                                property: 'Status',
                                status: {
                                    equals: 'Published'
                                }
                            },
                            ...Object.entries(filter).map(([key, value]) => ({
                                property: key,
                                ...value
                            }))
                        ]
                    },
                    sorts: [
                        {
                            property: 'Published Date',
                            direction: 'descending'
                        }
                    ]
                })
            });

            if (!response.ok) {
                const errorText = await response.text();
                throw new Error(`API錯誤 (${response.status}): ${errorText}`);
            }

            const data = await response.json();
            const posts = data.results.map(page => this.formatPost(page));

            // 儲存快取
            this.cache.set(cacheKey, {
                data: posts,
                timestamp: Date.now()
            });

            return posts;

        } catch (error) {
            console.error('載入文章失敗:', error);
            return this.getFallbackPosts();
        }
    }

    /**
     * 取得單篇文章內容
     */
    async getPost(pageId) {
        const cacheKey = 'post_' + pageId;

        // 檢查快取
        if (this.cache.has(cacheKey)) {
            const cached = this.cache.get(cacheKey);
            if (Date.now() - cached.timestamp < this.cacheTime) {
                return cached.data;
            }
        }

        try {
            const response = await fetch(`${this.baseUrl}/api/notion/page/${pageId}`);

            if (!response.ok) {
                throw new Error(`取得文章失敗 (${response.status})`);
            }

            const data = await response.json();

            const post = {
                ...this.formatPost(data.page),
                content: this.formatBlocks(data.blocks.results)
            };

            // 儲存快取
            this.cache.set(cacheKey, {
                data: post,
                timestamp: Date.now()
            });

            return post;

        } catch (error) {
            console.error('載入文章內容失敗:', error);
            return this.getFallbackPost(pageId);
        }
    }

    /**
     * 格式化文章資訊
     */
    formatPost(page) {
        const properties = page.properties;

        return {
            id: page.id,
            title: this.extractText(properties.Title || properties.Name),
            excerpt: this.extractText(properties.Excerpt),
            category: this.extractSelect(properties.Category),
            tags: this.extractMultiSelect(properties.Tags),
            publishedDate: this.extractDate(properties['Published Date']),
            author: this.extractPeople(properties.Author),
            featuredImage: this.extractFile(properties['Featured Image']),
            slug: this.extractText(properties.Slug) || this.generateSlug(this.extractText(properties.Title)),
            status: this.extractSelect(properties.Status),
            readTime: this.extractNumber(properties['Read Time']) || 5,
            url: `article.html?id=${page.id}`
        };
    }

    /**
     * 格式化Notion blocks為HTML
     */
    formatBlocks(blocks) {
        return blocks.map(block => this.formatBlock(block)).join('');
    }

    formatBlock(block) {
        const { type } = block;
        const content = block[type];

        switch (type) {
            case 'heading_1':
                return `<h1>${this.formatRichText(content.rich_text)}</h1>`;
            case 'heading_2':
                return `<h2>${this.formatRichText(content.rich_text)}</h2>`;
            case 'heading_3':
                return `<h3>${this.formatRichText(content.rich_text)}</h3>`;
            case 'paragraph':
                const text = this.formatRichText(content.rich_text);
                return text ? `<p>${text}</p>` : '<br>';
            case 'bulleted_list_item':
                return `<li>${this.formatRichText(content.rich_text)}</li>`;
            case 'numbered_list_item':
                return `<li>${this.formatRichText(content.rich_text)}</li>`;
            case 'quote':
                return `<blockquote>${this.formatRichText(content.rich_text)}</blockquote>`;
            case 'code':
                const language = content.language || 'text';
                return `<pre><code class="language-${language}">${this.formatRichText(content.rich_text)}</code></pre>`;
            case 'image':
                const imageUrl = content.external?.url || content.file?.url;
                const caption = content.caption ? this.formatRichText(content.caption) : '';
                return `<img src="${imageUrl}" alt="${caption}" />`;
            case 'divider':
                return '<hr>';
            default:
                return '';
        }
    }

    /**
     * 格式化Rich Text
     */
    formatRichText(richText) {
        if (!richText || !Array.isArray(richText)) return '';

        return richText.map(text => {
            let content = text.plain_text;

            if (text.annotations.bold) content = `<strong>${content}</strong>`;
            if (text.annotations.italic) content = `<em>${content}</em>`;
            if (text.annotations.underline) content = `<u>${content}</u>`;
            if (text.annotations.strikethrough) content = `<s>${content}</s>`;
            if (text.annotations.code) content = `<code>${content}</code>`;

            if (text.href) content = `<a href="${text.href}" target="_blank">${content}</a>`;

            return content;
        }).join('');
    }

    /**
     * 輔助函數：提取各種類型的屬性值
     */
    extractText(property) {
        if (!property) return '';
        if (property.type === 'title') return property.title.map(t => t.plain_text).join('');
        if (property.type === 'rich_text') return property.rich_text.map(t => t.plain_text).join('');
        return '';
    }

    extractSelect(property) {
        if (!property) return '';
        if (property.type === 'select') return property.select?.name || '';
        if (property.type === 'status') return property.status?.name || '';
        return '';
    }

    extractMultiSelect(property) {
        if (!property || property.type !== 'multi_select') return [];
        return property.multi_select.map(item => item.name);
    }

    extractDate(property) {
        if (!property || property.type !== 'date') return '';
        return property.date?.start || '';
    }

    extractPeople(property) {
        if (!property || property.type !== 'people') return '';
        return property.people.map(person => person.name).join(', ');
    }

    extractFile(property) {
        if (!property) return '';
        if (property.type === 'files' && property.files.length > 0) {
            return property.files[0].external?.url || property.files[0].file?.url || '';
        }
        return '';
    }

    extractNumber(property) {
        if (!property || property.type !== 'number') return 0;
        return property.number || 0;
    }

    generateSlug(title) {
        return title.toLowerCase()
            .replace(/[^a-z0-9\u4e00-\u9fff]/g, '-')
            .replace(/-+/g, '-')
            .replace(/^-|-$/g, '');
    }

    /**
     * 取得分類列表
     */
    async getCategories() {
        try {
            const posts = await this.getPosts();
            const categories = {};

            posts.forEach(post => {
                if (post.category) {
                    categories[post.category] = (categories[post.category] || 0) + 1;
                }
            });

            return Object.entries(categories).map(([name, count]) => ({
                name,
                count
            }));

        } catch (error) {
            console.error('載入分類失敗:', error);
            return [];
        }
    }

    /**
     * 搜尋文章
     */
    async searchPosts(query) {
        try {
            const allPosts = await this.getPosts();
            const searchTerm = query.toLowerCase();

            return allPosts.filter(post =>
                post.title.toLowerCase().includes(searchTerm) ||
                post.excerpt.toLowerCase().includes(searchTerm) ||
                post.tags.some(tag => tag.toLowerCase().includes(searchTerm))
            );

        } catch (error) {
            console.error('搜尋失敗:', error);
            return [];
        }
    }

    /**
     * 失敗時的備用內容
     */
    getFallbackPosts() {
        return [
            {
                id: 'fallback-1',
                title: '載入文章時發生錯誤',
                excerpt: '請確保伺服器正在運行，或聯繫網站管理員。',
                category: '系統訊息',
                publishedDate: new Date().toISOString().split('T')[0],
                featuredImage: '',
                url: '#'
            }
        ];
    }

    getFallbackPost(pageId) {
        return {
            id: pageId,
            title: '載入文章內容時發生錯誤',
            excerpt: '請確保伺服器正在運行，或聯繫網站管理員。',
            category: '系統訊息',
            publishedDate: new Date().toISOString().split('T')[0],
            content: '<p>很抱歉，無法載入文章內容。請稍後再試。</p>',
            featuredImage: '',
            readTime: 1
        };
    }
}

// 全域可用
window.NotionBlogAPIProxy = NotionBlogAPIProxy;