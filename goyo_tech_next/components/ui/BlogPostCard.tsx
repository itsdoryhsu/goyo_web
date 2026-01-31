'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { BlogPost } from '../../lib/blogData'

interface BlogPostCardProps {
  post: BlogPost
}

export default function BlogPostCard({ post }: BlogPostCardProps) {
  const [imageError, setImageError] = useState(false)
  const [imageLoading, setImageLoading] = useState(true)

  const handleImageError = () => {
    setImageError(true)
    setImageLoading(false)
  }

  const handleImageLoad = () => {
    setImageLoading(false)
  }

  const defaultImage = 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400&auto=format&fit=crop'

  return (
    <article className="group flex flex-col overflow-hidden">
      {/* 文章圖片 */}
      <Link href={`/blog/${post.slug}`} className="block overflow-hidden rounded-2xl relative">
        <div className="relative h-64 w-full bg-gray-100">
          {imageLoading && (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-8 h-8 border-2 border-[#9980ff] border-t-transparent rounded-full animate-spin"></div>
            </div>
          )}
          <Image
            alt={post.title}
            src={imageError ? defaultImage : post.featuredImage}
            fill
            className="object-cover transition-transform duration-500 transition-transform"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            onError={handleImageError}
            onLoad={handleImageLoad}
            priority={false}
          />
        </div>
      </Link>

      {/* 文章內容 */}
      <div className="mt-6 flex flex-col">
        {/* 文章元信息 */}
        <div className="mb-3 flex items-center justify-between text-sm font-medium">
          <span className="text-gray-500">{post.publishedDate}</span>
          <span className="bg-[#9980ff]/10 text-[#9980ff] px-3 py-1 rounded-full">
            {post.category}
          </span>
        </div>

        {/* 文章標題 */}
        <h2 className="text-xl font-bold text-[#100c1d] group-hover:text-[#9980ff] transition-colors mb-3 line-clamp-2">
          <Link href={`/blog/${post.slug}`}>
            {post.title}
          </Link>
        </h2>

        {/* 文章摘要 */}
        <p className="text-base leading-relaxed text-gray-600 line-clamp-3 mb-4">
          {post.excerpt}
        </p>

        {/* 作者信息 */}
        <div className="flex items-center justify-between text-sm text-gray-500 mt-auto">
          <span>by {post.author}</span>
          <Link
            href={`/blog/${post.slug}`}
            className="text-[#9980ff] hover:text-[#7a66cc] font-medium transition-colors"
          >
            閱讀更多 →
          </Link>
        </div>
      </div>
    </article>
  )
}