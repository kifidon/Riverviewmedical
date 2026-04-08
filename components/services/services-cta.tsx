"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { AnimatedSection } from "@/components/animated-section"
import { ArrowRight, Phone } from "lucide-react"
import { SITE_PHONE_TEL } from "@/lib/site-contact"

export function ServicesCta() {
  return (
    <section className="py-16 bg-primary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center max-w-2xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-primary-foreground mb-4 text-balance">
            Have Questions About Our Services?
          </h2>
          <p className="text-primary-foreground/80 text-lg mb-8">
            Our team is here to help you understand which services are right for you. 
            Contact us today to learn more or schedule an appointment.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              asChild 
              size="lg" 
              variant="secondary"
              className="rounded-full px-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] text-foreground"
            >
              <Link href="/contact">
                Book an Appointment
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
            <Button 
              asChild 
              size="lg" 
              variant="outline"
              className="rounded-full px-8 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground transition-all duration-300"
            >
              <a href={`tel:${SITE_PHONE_TEL}`}>
                <Phone className="w-4 h-4 mr-2" />
                Call Us
              </a>
            </Button>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
