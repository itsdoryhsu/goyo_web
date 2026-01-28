import { Metadata } from 'next'
import Header from '../../components/ui/Header'
import BlogHeroSection from '../../components/ui/BlogHeroSection'
import BlogPostsGrid from '../../components/ui/BlogPostsGrid'
import Footer from '../../components/ui/Footer'
import { LoadingEnhancementsProvider, FadeInOnScroll } from '../../components/ui/LoadingEnhancements'

export const metadata: Metadata = {
  title: 'Blog - Goyo Tech | 果友科技的技術分享與創業心得',
  description: '果友科技團隊的技術分享、創業心得與營運經驗分享。深入探討 AI 自動化、企業數位轉型等前沿技術趨勢。',
  keywords: '果友科技, AI 自動化, 企業數位轉型, 技術分享, 創業心得, 系統整合',
  openGraph: {
    title: 'Blog - Goyo Tech | 果友科技的技術分享與創業心得',
    description: '果友科技團隊的技術分享、創業心得與營運經驗分享。深入探討 AI 自動化、企業數位轉型等前沿技術趨勢。',
    type: 'website',
    locale: 'zh_TW',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Blog - Goyo Tech | 果友科技的技術分享與創業心得',
    description: '果友科技團隊的技術分享、創業心得與營運經驗分享。',
  }
}

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-white">
      <LoadingEnhancementsProvider>
        <Header />
        <main>
          <FadeInOnScroll>
            <BlogHeroSection />
          </FadeInOnScroll>

          <FadeInOnScroll delay={200}>
            <BlogPostsGrid />
          </FadeInOnScroll>
        </main>
        <Footer />
      </LoadingEnhancementsProvider>
    </div>
  )
}