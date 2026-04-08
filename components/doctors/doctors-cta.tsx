"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { AnimatedSection } from "@/components/animated-section"
import { ArrowRight } from "lucide-react"

export function DoctorsCta() {
  return (
    <section className="py-16 bg-secondary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center max-w-2xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4 text-balance">
            Ready to Schedule Your Visit?
          </h2>
          <p className="text-muted-foreground text-lg mb-8">
            Our team is ready to provide you with the personalized care you deserve. 
            Book an appointment today.
          </p>
          <Button 
            asChild 
            size="lg" 
            className="rounded-full px-8 shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all duration-300 hover:scale-[1.02]"
          >
            <Link href="/contact">
              Book an Appointment
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </Button>
        </AnimatedSection>
      </div>
    </section>
  )
}
