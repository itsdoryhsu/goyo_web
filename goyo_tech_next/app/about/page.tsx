import type { Metadata } from 'next'
import Header from '@/components/ui/Header'
import Footer from '@/components/ui/Footer'
import AboutHeroSection from '@/components/ui/AboutHeroSection'
import MissionSection from '@/components/ui/MissionSection'
import ClientValueSection from '@/components/ui/ClientValueSection'
import CompanyValuesSection from '@/components/ui/CompanyValuesSection'
import WhyJoinUsSection from '@/components/ui/WhyJoinUsSection'
import EmployeeMessageSection from '@/components/ui/EmployeeMessageSection'
import CompanyBenefitsSection from '@/components/ui/CompanyBenefitsSection'
import ContactCTASection from '@/components/ui/ContactCTASection'

export const metadata: Metadata = {
  title: '關於我們 - 果友科技 Goyo Tech',
  description: '果友科技成立於 2024 年，致力於減少客戶導入 AI 的障礙，讓企業能夠專注於他們最擅長的事情。了解我們的使命、理念與團隊文化。',
  openGraph: {
    title: '關於我們 - 果友科技 Goyo Tech',
    description: '果友科技成立於 2024 年，致力於減少客戶導入 AI 的障礙，讓企業能夠專注於他們最擅長的事情。了解我們的使命、理念與團隊文化。',
    type: 'website',
    locale: 'zh_TW',
    siteName: '果友科技 Goyo Tech',
  },
  twitter: {
    card: 'summary_large_image',
    title: '關於我們 - 果友科技 Goyo Tech',
    description: '果友科技成立於 2024 年，致力於減少客戶導入 AI 的障礙，讓企業能夠專注於他們最擅長的事情。了解我們的使命、理念與團隊文化。',
  },
  keywords: ['果友科技', 'Goyo Tech', '關於我們', 'AI 解決方案', '企業數位轉型', 'SBIR', '人工智慧', '技術團隊'],
  authors: [{ name: '果友科技 Goyo Tech' }],
  creator: '果友科技 Goyo Tech',
  publisher: '果友科技 Goyo Tech',
}

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="flex flex-col min-h-screen">
        <Header />
        <AboutHeroSection />
        <MissionSection />
        <ClientValueSection />
        <CompanyValuesSection />
        <WhyJoinUsSection />
        <EmployeeMessageSection />
        <CompanyBenefitsSection />
        <ContactCTASection />
        <Footer />
      </div>
    </div>
  )
}