"use client"

import { AnimatedSection } from "@/components/animated-section"

export function ServicesHero() {
  return (
    <section className="pt-32 pb-16 bg-gradient-to-b from-secondary to-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center max-w-3xl mx-auto">
          <span className="text-primary font-medium text-sm uppercase tracking-wider">
            Comprehensive Care
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground mt-3 mb-6 text-balance">
            Our Services
          </h1>
          <p className="text-muted-foreground text-lg leading-relaxed">
            From routine checkups to specialized care, we offer a comprehensive range of 
            medical services designed to meet all your healthcare needs. Our state-of-the-art 
            facility and experienced team ensure you receive the highest quality care.
          </p>
        </AnimatedSection>
      </div>
    </section>
  )
}
