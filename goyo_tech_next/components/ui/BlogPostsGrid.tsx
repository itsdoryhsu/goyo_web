'use client'

import { useState, useEffect } from 'react'
import BlogPostCard from './BlogPostCard'
import { BlogPost, blogPosts, getAllCategories } from '../../lib/blogData'

export default function BlogPostsGrid() {
  const [posts, setPosts] = useState<BlogPost[]>([])
  const [loading, setLoading] = useState(true)
  const [selectedCategory, setSelectedCategory] = useState<string>('all')
  const [categories, setCategories] = useState<string[]>([])

  useEffect(() => {
    // 模擬載入延遲
    const timer = setTimeout(() => {
      setPosts(blogPosts)
      setCategories(getAllCategories())
      setLoading(false)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  // 過濾文章
  const filteredPosts = selectedCategory === 'all'
    ? posts
    : posts.filter(post => post.category === selectedCategory)

  if (loading) {
    return (
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3">
            <div className="col-span-full flex justify-center py-16">
              <div className="flex items-center gap-3 text-gray-500">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
                <span>載入文章中...</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }

  if (!posts || posts.length === 0) {
    return (
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center py-16">
            <div className="text-6xl mb-4">📝</div>
            <h3 className="text-xl font-semibold text-[#100c1d] mb-2">還沒有文章</h3>
            <p className="text-gray-600">請稍後再來查看最新內容。</p>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* 分類篩選器 */}
        {categories.length > 1 && (
          <div className="mb-12 flex justify-center">
            <div className="flex flex-wrap gap-3">
              <button
                onClick={() => setSelectedCategory('all')}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  selectedCategory === 'all'
                    ? 'bg-primary text-white shadow-lg'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                全部文章
              </button>
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    selectedCategory === category
                      ? 'bg-primary text-white shadow-lg'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* 文章統計 */}
        <div className="mb-8 text-center">
          <p className="text-gray-600">
            {selectedCategory === 'all' ? (
              `共 ${posts.length} 篇文章`
            ) : (
              `「${selectedCategory}」分類下共 ${filteredPosts.length} 篇文章`
            )}
          </p>
        </div>

        {/* 文章網格 */}
        {filteredPosts.length > 0 ? (
          <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3">
            {filteredPosts.map((post) => (
              <BlogPostCard key={post.id} post={post} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <div className="text-4xl mb-4">🔍</div>
            <h3 className="text-xl font-semibold text-[#100c1d] mb-2">該分類暫無文章</h3>
            <p className="text-gray-600">請嘗試查看其他分類的內容。</p>
          </div>
        )}
      </div>
    </section>
  )
}