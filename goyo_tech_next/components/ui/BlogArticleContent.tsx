'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import ReactMarkdown from 'react-markdown'
import { BlogPost, blogPosts } from '../../lib/blogData'

interface BlogArticleContentProps {
  post: BlogPost
}

export default function BlogArticleContent({ post }: BlogArticleContentProps) {
  const [imageError, setImageError] = useState(false)
  const [imageLoading, setImageLoading] = useState(true)

  const handleImageError = () => {
    setImageError(true)
    setImageLoading(false)
  }

  const handleImageLoad = () => {
    setImageLoading(false)
  }

  const defaultImage = 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&auto=format&fit=crop'

  // 判斷內容是否為 HTML（向後相容）
  const isHtmlContent = post.content.trim().startsWith('<')

  // 獲取相關文章 (同分類的其他文章)
  const relatedPosts = blogPosts
    .filter(p => p.id !== post.id && p.category === post.category)
    .slice(0, 3)

  return (
    <div className="bg-white">
      {/* 文章頭部 */}
      <div className="relative pt-32 pb-16 lg:pt-48 lg:pb-20">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white"></div>
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-b from-primary/10 to-transparent rounded-full blur-3xl opacity-50"></div>
        </div>

        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          {/* 返回連結 */}
          <div className="mb-8">
            <Link
              href="/blog"
              className="text-primary hover:text-primary-dark font-medium transition-colors text-sm"
            >
              ← 返回文章列表
            </Link>
          </div>

          {/* 文章標題 */}
          <h1 className="text-4xl font-black leading-tight tracking-tight text-[#100c1d] sm:text-5xl lg:text-6xl mb-6">
            {post.title}
          </h1>

          {/* 文章摘要 */}
          <p className="text-xl text-gray-600 leading-relaxed mb-8 max-w-3xl">
            {post.excerpt}
          </p>

          {/* 作者信息 */}
          <div className="flex items-center gap-4 text-sm text-gray-500">
            <span>作者：{post.author}</span>
            <span>•</span>
            <span>發布於 {post.publishedDate}</span>
            <span>•</span>
            <span className="bg-primary/10 text-primary px-3 py-1 rounded-full font-medium">
              {post.category}
            </span>
          </div>
        </div>
      </div>

      {/* 特色圖片 */}
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 mb-16">
        <div className="relative aspect-[16/9] rounded-2xl overflow-hidden shadow-2xl">
          {imageLoading && (
            <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
              <div className="w-12 h-12 border-2 border-primary border-t-transparent rounded-full animate-spin"></div>
            </div>
          )}
          <Image
            alt={post.title}
            src={imageError ? defaultImage : post.featuredImage}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 80vw"
            onError={handleImageError}
            onLoad={handleImageLoad}
            priority
          />
        </div>
      </div>

      {/* 文章內容 */}
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="prose prose-lg prose-gray max-w-none mb-16 prose-headings:text-[#100c1d] prose-headings:font-bold prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-6 prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-4 prose-p:text-gray-700 prose-p:leading-relaxed prose-p:mb-6 prose-a:text-primary prose-a:no-underline hover:prose-a:text-primary-dark prose-strong:text-[#100c1d] prose-strong:font-semibold prose-ul:my-6 prose-li:mb-2 prose-li:text-gray-700 prose-blockquote:border-l-4 prose-blockquote:border-primary prose-blockquote:bg-white prose-blockquote:py-4 prose-blockquote:px-6 prose-blockquote:italic prose-blockquote:text-gray-700 prose-code:bg-gray-100 prose-code:px-2 prose-code:py-1 prose-code:rounded prose-pre:bg-gray-900 prose-pre:text-gray-100">
          {isHtmlContent ? (
            <div dangerouslySetInnerHTML={{ __html: post.content }} />
          ) : (
            <ReactMarkdown>{post.content}</ReactMarkdown>
          )}
        </div>

        {/* 返回按鈕 */}
        <div className="border-t border-gray-200 pt-8 mb-16">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-full hover:bg-primary-dark transition-colors font-medium"
          >
            ← 瀏覽更多文章
          </Link>
        </div>

        {/* 相關文章 */}
        {relatedPosts.length > 0 && (
          <div className="border-t border-gray-200 pt-16 mb-16">
            <h3 className="text-2xl font-bold text-[#100c1d] mb-8">相關文章</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedPosts.map((relatedPost) => (
                <Link key={relatedPost.id} href={`/blog/${relatedPost.slug}`} className="group">
                  <article className="space-y-4">
                    <div className="relative aspect-[16/9] rounded-lg overflow-hidden bg-gray-100">
                      <Image
                        alt={relatedPost.title}
                        src={relatedPost.featuredImage}
                        fill
                        className="object-cover transition-transform transition-transform duration-300"
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#100c1d] group-hover:text-primary transition-colors line-clamp-2 mb-2">
                        {relatedPost.title}
                      </h4>
                      <p className="text-sm text-gray-600 line-clamp-2">
                        {relatedPost.excerpt}
                      </p>
                      <div className="flex items-center gap-2 mt-3 text-xs text-gray-500">
                        <span>{relatedPost.publishedDate}</span>
                        <span>•</span>
                        <span>{relatedPost.readTime} 分鐘</span>
                      </div>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* 底部間距 */}
        <div className="pb-16"></div>
      </div>
    </div>
  )
}