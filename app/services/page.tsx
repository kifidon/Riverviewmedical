import type { Metadata } from "next"
import { ServicesHero } from "@/components/services/services-hero"
import { ServicesList } from "@/components/services/services-list"
import { ServicesCta } from "@/components/services/services-cta"

export const metadata: Metadata = {
  title: "Our Services | Riverview Medical Centre",
  description: "Comprehensive healthcare services including family medicine, walk-in care, preventative health, chronic care management, and more at Riverview Medical Centre.",
}

export default function ServicesPage() {
  return (
    <>
      <ServicesHero />
      <ServicesList />
      <ServicesCta />
    </>
  )
}
