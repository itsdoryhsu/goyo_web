import Header from '../components/ui/Header'
import HeroSection from '../components/ui/HeroSection'
import ServicesSection from '../components/ui/ServicesSection'
import TestimonialsSection from '../components/ui/TestimonialsSection'
import FAQSection from '../components/ui/FAQSection'
import CTASection from '../components/ui/CTASection'
import Footer from '../components/ui/Footer'

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <div className="flex flex-col min-h-screen">
        <Header />
        <main>
          <HeroSection />
          <ServicesSection />
          <TestimonialsSection />
          <FAQSection />
          <CTASection />
        </main>
        <Footer />
      </div>
    </div>
  )
}