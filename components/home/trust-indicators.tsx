"use client"

import { AnimatedSection } from "@/components/animated-section"
import { Award, Clock, Heart, Shield } from "lucide-react"

const indicators = [
  {
    icon: Award,
    title: "Experienced Physicians",
    description: "Board-certified doctors",
  },
  {
    icon: Clock,
    title: "Same-Day Appointments",
    description: "Walk-ins welcome",
  },
  {
    icon: Heart,
    title: "Patient-Centered Care",
    description: "Your health, our priority",
  },
  {
    icon: Shield,
    title: "Insurance Accepted",
    description: "Most major plans",
  },
]

export function TrustIndicators() {
  return (
    <section className="py-8 bg-primary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {indicators.map((item, index) => (
            <AnimatedSection key={item.title} delay={index * 100}>
              <div className="flex items-center gap-4 text-primary-foreground">
                <div className="w-12 h-12 rounded-xl bg-primary-foreground/10 flex items-center justify-center shrink-0">
                  <item.icon className="w-6 h-6" />
                </div>
                <div>
                  <p className="font-semibold text-sm lg:text-base">{item.title}</p>
                  <p className="text-primary-foreground/70 text-xs lg:text-sm">{item.description}</p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
