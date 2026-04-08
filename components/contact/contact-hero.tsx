"use client"

import { AnimatedSection } from "@/components/animated-section"

export function ContactHero() {
  return (
    <section className="pt-32 pb-16 bg-gradient-to-b from-secondary to-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center max-w-3xl mx-auto">
          <span className="text-primary font-medium text-sm uppercase tracking-wider">
            Get In Touch
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground mt-3 mb-6 text-balance">
            Contact Us
          </h1>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Ready to schedule an appointment or have questions about our services? 
            Fill out the form below and our team will get back to you promptly.
          </p>
        </AnimatedSection>
      </div>
    </section>
  )
}
