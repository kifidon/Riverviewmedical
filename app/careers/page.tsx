import type { Metadata } from "next"
import { CareersHero } from "@/components/careers/careers-hero"
import { CareersCulture } from "@/components/careers/careers-culture"
import { JobListings } from "@/components/careers/job-listings"

export const metadata: Metadata = {
  title: "Careers | Riverview Medical Centre",
  description: "Join our team at Riverview Medical Centre. Explore healthcare career opportunities and become part of a compassionate, patient-centered medical team.",
}

export default function CareersPage() {
  return (
    <>
      <CareersHero />
      <CareersCulture />
      <JobListings />
    </>
  )
}
