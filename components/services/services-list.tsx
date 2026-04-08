"use client"

import Link from "next/link"
import { useState } from "react"
import { AnimatedSection } from "@/components/animated-section"
import { Button } from "@/components/ui/button"
import { 
  Users, 
  Clock, 
  Activity, 
  Heart, 
  Stethoscope, 
  Baby,
  Brain,
  Pill,
  ChevronDown,
  ArrowRight
} from "lucide-react"
import { cn } from "@/lib/utils"

const services = [
  {
    icon: Users,
    title: "Family Medicine",
    description: "Comprehensive primary care for patients of all ages. Our family medicine physicians provide continuity of care throughout your life, from childhood through adulthood.",
    details: [
      "Annual physical examinations",
      "Acute illness treatment",
      "Chronic disease management",
      "Health screenings and immunizations",
      "Minor surgical procedures",
      "Health counseling and education",
    ],
  },
  {
    icon: Clock,
    title: "Walk-In Care",
    description: "Same-day appointments and walk-in services for urgent health concerns that require immediate attention but are not life-threatening emergencies.",
    details: [
      "Cold and flu symptoms",
      "Minor injuries and cuts",
      "Allergic reactions",
      "Urinary tract infections",
      "Skin rashes and infections",
      "Ear and eye infections",
    ],
  },
  {
    icon: Activity,
    title: "Preventative Health",
    description: "Proactive healthcare services designed to prevent illness and detect health issues early when they are most treatable.",
    details: [
      "Wellness exams and health assessments",
      "Cancer screenings",
      "Cardiovascular risk assessment",
      "Immunizations and vaccinations",
      "Lifestyle counseling",
      "Health risk evaluations",
    ],
  },
  {
    icon: Heart,
    title: "Chronic Care Management",
    description: "Comprehensive management of ongoing health conditions with personalized treatment plans and regular monitoring.",
    details: [
      "Diabetes management",
      "Hypertension control",
      "Asthma and COPD care",
      "Thyroid disorders",
      "Arthritis management",
      "Cholesterol management",
    ],
  },
  {
    icon: Stethoscope,
    title: "Diagnostic Services",
    description: "On-site diagnostic testing and laboratory services for accurate and timely diagnosis of medical conditions.",
    details: [
      "Blood work and lab testing",
      "EKG/ECG monitoring",
      "Spirometry testing",
      "Vision and hearing screenings",
      "Strep and flu testing",
      "Urinalysis",
    ],
  },
  {
    icon: Baby,
    title: "Pediatric Care",
    description: "Specialized healthcare for infants, children, and adolescents, focusing on growth, development, and age-specific health needs.",
    details: [
      "Well-child visits",
      "Childhood immunizations",
      "Developmental assessments",
      "School and sports physicals",
      "Behavioral health support",
      "Adolescent medicine",
    ],
  },
  {
    icon: Brain,
    title: "Mental Health Services",
    description: "Compassionate mental health support integrated with your primary care, addressing the connection between physical and mental wellness.",
    details: [
      "Depression and anxiety screening",
      "Stress management",
      "Medication management",
      "Referrals to specialists",
      "Behavioral health counseling",
      "Substance use support",
    ],
  },
  {
    icon: Pill,
    title: "Medication Management",
    description: "Comprehensive medication review and management to ensure your medications are working effectively and safely together.",
    details: [
      "Prescription management",
      "Drug interaction reviews",
      "Medication reconciliation",
      "Chronic medication monitoring",
      "Generic alternatives consultation",
      "Patient education",
    ],
  },
]

export function ServicesList() {
  const [expandedService, setExpandedService] = useState<string | null>(null)

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-6 max-w-4xl mx-auto">
          {services.map((service, index) => (
            <AnimatedSection key={service.title} delay={index * 50}>
              <div className="bg-secondary rounded-2xl overflow-hidden border border-border transition-all duration-300 hover:shadow-md">
                <button
                  onClick={() => setExpandedService(
                    expandedService === service.title ? null : service.title
                  )}
                  className="w-full text-left p-6 sm:p-8"
                >
                  <div className="flex items-start gap-6">
                    <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                      <service.icon className="w-7 h-7 text-primary" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-4">
                        <h3 className="font-semibold text-xl text-foreground">
                          {service.title}
                        </h3>
                        <ChevronDown 
                          className={cn(
                            "w-5 h-5 text-muted-foreground shrink-0 transition-transform duration-300",
                            expandedService === service.title && "rotate-180"
                          )} 
                        />
                      </div>
                      <p className="text-muted-foreground mt-2 leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </button>

                {/* Expanded Content */}
                <div 
                  className={cn(
                    "overflow-hidden transition-all duration-300 ease-in-out",
                    expandedService === service.title ? "max-h-96" : "max-h-0"
                  )}
                >
                  <div className="px-6 sm:px-8 pb-6 sm:pb-8 pt-0">
                    <div className="ml-20 border-t border-border pt-6">
                      <h4 className="font-medium text-foreground mb-4">What we offer:</h4>
                      <ul className="grid sm:grid-cols-2 gap-3 mb-6">
                        {service.details.map((detail) => (
                          <li key={detail} className="flex items-center gap-2 text-muted-foreground">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                            {detail}
                          </li>
                        ))}
                      </ul>
                      <Button 
                        asChild 
                        className="rounded-full shadow-lg shadow-primary/25"
                      >
                        <Link href="/contact">
                          Book Appointment
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
