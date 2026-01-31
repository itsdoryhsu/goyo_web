import Header from '../../components/ui/Header'
import ProductShowcaseSection from '../../components/ui/ProductShowcaseSection'
import ProductFeaturesSection from '../../components/ui/ProductFeaturesSection'
import ProductCTASection from '../../components/ui/ProductCTASection'
import Footer from '../../components/ui/Footer'
import { LoadingEnhancementsProvider, FadeInOnScroll } from '../../components/ui/LoadingEnhancements'

export default function ProductsPage() {
  return (
    <div className="min-h-screen bg-white">
      <LoadingEnhancementsProvider>
        <Header />
        <main>
          <FadeInOnScroll>
            <ProductShowcaseSection />
          </FadeInOnScroll>

          <FadeInOnScroll delay={200}>
            <ProductFeaturesSection />
          </FadeInOnScroll>

          <FadeInOnScroll delay={400}>
            <ProductCTASection />
          </FadeInOnScroll>
        </main>
        <Footer />
      </LoadingEnhancementsProvider>
    </div>
  )
}