"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { AnimatedSection } from "@/components/animated-section"
import { ArrowRight, Phone } from "lucide-react"
import { SITE_PHONE_DISPLAY, SITE_PHONE_TEL } from "@/lib/site-contact"

export function BottomCta() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-accent" />
      
      {/* Pattern overlay */}
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
        backgroundSize: '40px 40px'
      }} />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <AnimatedSection className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6 text-balance">
            Your Health Starts Here
          </h2>
          <p className="text-primary-foreground/80 text-lg mb-10 max-w-2xl mx-auto">
            Take the first step towards better health. Our caring team is ready to provide 
            you with the personalized attention and expert care you deserve.
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
                {SITE_PHONE_DISPLAY}
              </a>
            </Button>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
