"use client"

import { AnimatedSection } from "@/components/animated-section"
import { Heart, Users, TrendingUp, Shield } from "lucide-react"

const values = [
  {
    icon: Heart,
    title: "Patient-First Culture",
    description: "Every decision we make centers around providing the best possible care for our patients.",
  },
  {
    icon: Users,
    title: "Collaborative Team",
    description: "Work alongside experienced professionals in a supportive, team-oriented environment.",
  },
  {
    icon: TrendingUp,
    title: "Growth Opportunities",
    description: "Continuous learning and professional development to advance your career.",
  },
  {
    icon: Shield,
    title: "Comprehensive Benefits",
    description: "Competitive salary, health benefits, retirement plans, and work-life balance.",
  },
]

export function CareersCulture() {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4 text-balance">
            Why Work With Us?
          </h2>
          <p className="text-muted-foreground text-lg">
            We&apos;re more than just a medical centre - we&apos;re a family dedicated to serving 
            our community with excellence and compassion.
          </p>
        </AnimatedSection>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <AnimatedSection key={value.title} delay={index * 100}>
              <div className="bg-secondary rounded-2xl p-6 h-full text-center">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{value.title}</h3>
                <p className="text-muted-foreground text-sm">{value.description}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
