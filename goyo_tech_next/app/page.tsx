'use client'

import { useState } from 'react'
import Header from '../components/ui/Header'
import HeroSection from '../components/ui/HeroSection'
import ServicesSection from '../components/ui/ServicesSection'
// import TestimonialsSection from '../components/ui/TestimonialsSection' // 暫時隱藏，有客戶見證後再啟用
import FAQSection from '../components/ui/FAQSection'
import CTASection from '../components/ui/CTASection'
import Footer from '../components/ui/Footer'
import ContactModal from '../components/ui/ContactModal'

export default function Home() {
  const [contactModalOpen, setContactModalOpen] = useState(false)

  return (
    <div className="min-h-screen bg-white">
      <div className="flex flex-col min-h-screen">
        <Header onContactClick={() => setContactModalOpen(true)} />
        <main>
          <HeroSection />
          <ServicesSection />
          {/* <TestimonialsSection /> */}
          <FAQSection />
          <CTASection />
        </main>
        <Footer />
      </div>

      {/* Contact Modal - 在最高層級 */}
      <ContactModal
        isOpen={contactModalOpen}
        onClose={() => setContactModalOpen(false)}
      />
    </div>
  )
}