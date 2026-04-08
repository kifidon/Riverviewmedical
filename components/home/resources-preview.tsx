"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { AnimatedSection } from "@/components/animated-section"
import { ArrowRight, FileText, CreditCard, HelpCircle, Download } from "lucide-react"

const resources = [
  {
    icon: FileText,
    title: "Patient Forms",
    description: "Download and complete forms before your visit",
  },
  {
    icon: CreditCard,
    title: "Insurance Information",
    description: "View accepted insurance plans and billing",
  },
  {
    icon: HelpCircle,
    title: "FAQs",
    description: "Find answers to common questions",
  },
  {
    icon: Download,
    title: "Medical Records",
    description: "Request copies of your records",
  },
]

export function ResourcesPreview() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <AnimatedSection>
            <span className="text-primary font-medium text-sm uppercase tracking-wider">
              Patient Resources
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mt-3 mb-4 text-balance">
              Everything You Need
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Access important information and resources to make your visit as smooth 
              as possible. We believe in transparency and making healthcare accessible.
            </p>
            <Button 
              asChild 
              variant="outline" 
              size="lg" 
              className="rounded-full px-8 hover:bg-secondary transition-all duration-300"
            >
              <Link href="/contact">
                View Resources
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </AnimatedSection>

          {/* Resources Grid */}
          <div className="grid grid-cols-2 gap-4">
            {resources.map((resource, index) => (
              <AnimatedSection key={resource.title} delay={index * 100}>
                <Link 
                  href="/contact" 
                  className="bg-secondary rounded-2xl p-6 block transition-all duration-300 hover:shadow-md hover:-translate-y-1 group h-full"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <resource.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-1">
                    {resource.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {resource.description}
                  </p>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
