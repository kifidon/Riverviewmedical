import type { Metadata } from "next"
import { DoctorsHero } from "@/components/doctors/doctors-hero"
import { DoctorsGrid } from "@/components/doctors/doctors-grid"
import { DoctorsCta } from "@/components/doctors/doctors-cta"

export const metadata: Metadata = {
  title: "Our Doctors | Riverview Medical Centre",
  description: "Meet our team of experienced, board-certified physicians dedicated to providing exceptional healthcare at Riverview Medical Centre.",
}

export default function DoctorsPage() {
  return (
    <>
      <DoctorsHero />
      <DoctorsGrid />
      <DoctorsCta />
    </>
  )
}
