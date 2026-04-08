"use client"

import Link from "next/link"
import { useState } from "react"
import { AnimatedSection } from "@/components/animated-section"
import { Button } from "@/components/ui/button"
import { ChevronDown, MapPin, Clock, Briefcase, ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"

const jobs = [
  {
    id: 1,
    title: "Family Medicine Physician",
    type: "Full-time",
    location: "Riverview, CA",
    department: "Medical",
    overview: "We are seeking a compassionate, board-certified Family Medicine Physician to join our growing practice. The ideal candidate will provide comprehensive primary care services to patients of all ages.",
    responsibilities: [
      "Provide comprehensive primary care to patients across the lifespan",
      "Diagnose and treat acute and chronic medical conditions",
      "Perform routine health screenings and preventive care",
      "Collaborate with specialists and healthcare team members",
      "Maintain accurate and timely medical records",
    ],
    requirements: [
      "MD or DO from an accredited medical school",
      "Board certification in Family Medicine",
      "Valid California medical license",
      "Minimum 2 years of clinical experience preferred",
      "Excellent communication and interpersonal skills",
    ],
  },
  {
    id: 2,
    title: "Registered Nurse (RN)",
    type: "Full-time",
    location: "Riverview, CA",
    department: "Nursing",
    overview: "Join our nursing team and provide exceptional patient care in a supportive, patient-centered environment. We value nurses who are dedicated to making a difference in patients' lives.",
    responsibilities: [
      "Assist physicians with patient examinations and procedures",
      "Administer medications and vaccinations",
      "Educate patients on health conditions and treatment plans",
      "Perform vital signs and basic diagnostic tests",
      "Coordinate patient care and follow-up",
    ],
    requirements: [
      "Active RN license in California",
      "BSN preferred, ADN considered",
      "BLS and ACLS certification",
      "Primary care experience preferred",
      "Strong organizational and multitasking skills",
    ],
  },
  {
    id: 3,
    title: "Medical Receptionist",
    type: "Full-time",
    location: "Riverview, CA",
    department: "Administration",
    overview: "Be the welcoming face of our practice! We're looking for a friendly, organized medical receptionist to create a positive first impression for our patients.",
    responsibilities: [
      "Greet patients and visitors in a professional manner",
      "Schedule appointments and manage physician calendars",
      "Verify insurance information and process payments",
      "Answer phones and respond to patient inquiries",
      "Maintain organized front desk operations",
    ],
    requirements: [
      "High school diploma or equivalent",
      "1+ years of medical office experience preferred",
      "Proficiency in electronic health records (EHR)",
      "Excellent customer service and communication skills",
      "Ability to multitask in a fast-paced environment",
    ],
  },
  {
    id: 4,
    title: "Medical Assistant",
    type: "Part-time",
    location: "Riverview, CA",
    department: "Clinical Support",
    overview: "We're seeking a certified Medical Assistant to support our clinical team and ensure smooth patient flow. This is a great opportunity for someone who enjoys both clinical and administrative duties.",
    responsibilities: [
      "Prepare patients for examinations and procedures",
      "Take vital signs and document medical history",
      "Assist physicians during examinations",
      "Perform basic laboratory tests",
      "Manage patient records and documentation",
    ],
    requirements: [
      "Certified Medical Assistant (CMA) or equivalent",
      "Completion of an accredited MA program",
      "CPR certification",
      "Strong attention to detail",
      "Team-oriented with excellent communication skills",
    ],
  },
]

export function JobListings() {
  const [expandedJob, setExpandedJob] = useState<number | null>(null)

  return (
    <section className="py-16 bg-secondary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4 text-balance">
            Open Positions
          </h2>
          <p className="text-muted-foreground text-lg">
            Explore current opportunities to join our team. We&apos;re always looking for 
            talented individuals who share our commitment to excellent patient care.
          </p>
        </AnimatedSection>

        <div className="space-y-4 max-w-4xl mx-auto">
          {jobs.map((job, index) => (
            <AnimatedSection key={job.id} delay={index * 50}>
              <div className="bg-background rounded-2xl overflow-hidden border border-border">
                <button
                  onClick={() => setExpandedJob(expandedJob === job.id ? null : job.id)}
                  className="w-full text-left p-6"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div>
                      <h3 className="font-semibold text-xl text-foreground">
                        {job.title}
                      </h3>
                      <div className="flex flex-wrap items-center gap-4 mt-2 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Briefcase className="w-4 h-4" />
                          {job.department}
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          {job.location}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {job.type}
                        </span>
                      </div>
                    </div>
                    <ChevronDown 
                      className={cn(
                        "w-5 h-5 text-muted-foreground shrink-0 transition-transform duration-300",
                        expandedJob === job.id && "rotate-180"
                      )} 
                    />
                  </div>
                </button>

                {/* Expanded Content */}
                <div 
                  className={cn(
                    "overflow-hidden transition-all duration-300 ease-in-out",
                    expandedJob === job.id ? "max-h-[800px]" : "max-h-0"
                  )}
                >
                  <div className="px-6 pb-6 pt-0 border-t border-border">
                    <div className="pt-6 space-y-6">
                      {/* Overview */}
                      <div>
                        <h4 className="font-semibold text-foreground mb-2">Overview</h4>
                        <p className="text-muted-foreground">{job.overview}</p>
                      </div>

                      {/* Responsibilities */}
                      <div>
                        <h4 className="font-semibold text-foreground mb-2">Responsibilities</h4>
                        <ul className="space-y-2">
                          {job.responsibilities.map((item) => (
                            <li key={item} className="flex items-start gap-2 text-muted-foreground">
                              <div className="w-1.5 h-1.5 rounded-full bg-primary shrink-0 mt-2" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Requirements */}
                      <div>
                        <h4 className="font-semibold text-foreground mb-2">Requirements</h4>
                        <ul className="space-y-2">
                          {job.requirements.map((item) => (
                            <li key={item} className="flex items-start gap-2 text-muted-foreground">
                              <div className="w-1.5 h-1.5 rounded-full bg-primary shrink-0 mt-2" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <Button 
                        asChild 
                        className="rounded-full shadow-lg shadow-primary/25"
                      >
                        <Link href="/contact">
                          Apply Now
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

        {/* No positions notice */}
        <AnimatedSection className="text-center mt-12">
          <p className="text-muted-foreground">
            Don&apos;t see a position that fits?{" "}
            <Link href="/contact" className="text-primary hover:underline">
              Send us your resume
            </Link>{" "}
            and we&apos;ll keep you in mind for future opportunities.
          </p>
        </AnimatedSection>
      </div>
    </section>
  )
}
