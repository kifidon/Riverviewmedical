"use client"

import { AnimatedSection } from "@/components/animated-section"

export function CareersHero() {
  return (
    <section className="pt-32 pb-16 bg-gradient-to-b from-secondary to-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center max-w-3xl mx-auto">
          <span className="text-primary font-medium text-sm uppercase tracking-wider">
            Join Our Team
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground mt-3 mb-6 text-balance">
            Careers at Riverview
          </h1>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Join a team dedicated to making a difference in our community. At Riverview 
            Medical Centre, we offer rewarding careers in a supportive environment where 
            your skills and compassion can truly shine.
          </p>
        </AnimatedSection>
      </div>
    </section>
  )
}
