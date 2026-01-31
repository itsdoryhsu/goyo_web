import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Header from '../../../components/ui/Header'
import Footer from '../../../components/ui/Footer'
import { LoadingEnhancementsProvider, FadeInOnScroll } from '../../../components/ui/LoadingEnhancements'
import { blogPosts, getBlogPostById } from '../../../lib/blogData'
import BlogArticleContent from '../../../components/ui/BlogArticleContent'

interface BlogArticlePageProps {
  params: {
    slug: string
  }
}

// 動態生成 metadata
export async function generateMetadata(
  { params }: BlogArticlePageProps
): Promise<Metadata> {
  const post = blogPosts.find(post => post.slug === params.slug)

  if (!post) {
    return {
      title: '文章未找到 - Goyo Tech',
      description: '您要查看的文章不存在或已被移除。'
    }
  }

  return {
    title: `${post.title} - Goyo Tech Blog`,
    description: post.excerpt,
    keywords: `${post.category}, ${post.author}, AI 自動化, 果友科技`,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      locale: 'zh_TW',
      publishedTime: post.publishedDate,
      authors: [post.author],
      images: [
        {
          url: post.featuredImage,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
      images: [post.featuredImage],
    }
  }
}

// 靜態路由生成
export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }))
}

export default function BlogArticlePage({ params }: BlogArticlePageProps) {
  const post = blogPosts.find(post => post.slug === params.slug)

  if (!post) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-white">
      <LoadingEnhancementsProvider>
        <Header />
        <main>
          <FadeInOnScroll>
            <BlogArticleContent post={post} />
          </FadeInOnScroll>
        </main>
        <Footer />
      </LoadingEnhancementsProvider>
    </div>
  )
}