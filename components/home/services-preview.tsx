"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { AnimatedSection } from "@/components/animated-section"
import { ArrowRight, Users, Clock, Activity } from "lucide-react"

const services = [
  {
    icon: Users,
    title: "Family Medicine",
    description: "Comprehensive care for patients of all ages, from routine checkups to managing chronic conditions.",
  },
  {
    icon: Clock,
    title: "Walk-In Care",
    description: "Same-day appointments for urgent health concerns. No appointment needed for minor illnesses and injuries.",
  },
  {
    icon: Activity,
    title: "Preventative Health",
    description: "Proactive health screenings, vaccinations, and wellness programs to keep you healthy long-term.",
  },
]

export function ServicesPreview() {
  return (
    <section className="py-24 bg-secondary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <AnimatedSection className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-primary font-medium text-sm uppercase tracking-wider">
            What We Offer
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mt-3 mb-4 text-balance">
            Our Services
          </h2>
          <p className="text-muted-foreground text-lg">
            We provide a wide range of medical services to meet all your healthcare needs 
            under one roof.
          </p>
        </AnimatedSection>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <AnimatedSection key={service.title} delay={index * 100}>
              <div className="bg-background rounded-2xl p-8 shadow-sm border border-border h-full transition-all duration-300 hover:shadow-lg hover:-translate-y-1 group">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-semibold text-xl text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* CTA */}
        <AnimatedSection className="text-center">
          <Button 
            asChild 
            size="lg" 
            className="rounded-full px-8 shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all duration-300 hover:scale-[1.02]"
          >
            <Link href="/services">
              View All Services
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </Button>
        </AnimatedSection>
      </div>
    </section>
  )
}
