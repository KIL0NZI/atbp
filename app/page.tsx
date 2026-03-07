import { Navbar } from '@/components/landing/navbar'
import { HeroSection } from '@/components/landing/hero-section'
import { ServicesGrid } from '@/components/landing/services-grid'
import { VenuesShowcase } from '@/components/landing/venues-showcase'
import { AboutSection } from '@/components/landing/about-section'
import { Testimonials } from '@/components/landing/testimonials'
import { TrustedBySection } from '@/components/landing/trusted-by-section'
import { Footer } from '@/components/landing/footer'

export default function Page() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <ServicesGrid />
      <VenuesShowcase />
      <TrustedBySection />
      <AboutSection />
      <Testimonials />
      {/* <Footer /> */}
    </div>
  )
}
