import { HeroSection } from "@/components/home/hero-section"
import { TrustIndicators } from "@/components/home/trust-indicators"
import { DoctorsPreview } from "@/components/home/doctors-preview"
import { ServicesPreview } from "@/components/home/services-preview"
import { ResourcesPreview } from "@/components/home/resources-preview"
import { TestimonialsSection } from "@/components/home/testimonials-section"
import { BottomCta } from "@/components/home/bottom-cta"

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <TrustIndicators />
      <DoctorsPreview />
      <ServicesPreview />
      <ResourcesPreview />
      <TestimonialsSection />
      <BottomCta />
    </>
  )
}
