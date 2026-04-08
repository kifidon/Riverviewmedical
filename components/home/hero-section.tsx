"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Play } from "lucide-react"
import { AnimatedSection } from "@/components/animated-section"
import { DoctorPlaceholder } from "@/components/doctor-placeholder"
import { doctors } from "@/lib/doctors-data"

const previewTeam = doctors.slice(0, 4)

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-secondary via-background to-background" />

      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)`,
          backgroundSize: "40px 40px",
        }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="space-y-8">
            <AnimatedSection delay={0}>
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                Now Accepting New Patients
              </span>
            </AnimatedSection>

            <AnimatedSection delay={100}>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight text-balance">
                Professional Healthcare{" "}
                <span className="text-primary">You Can Trust</span>
              </h1>
            </AnimatedSection>

            <AnimatedSection delay={200}>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
                At Riverview Medical Centre, we believe in providing compassionate,
                comprehensive care for you and your family. Our experienced team of
                physicians is dedicated to your health and well-being.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={300}>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  asChild
                  size="lg"
                  className="rounded-full px-8 shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all duration-300 hover:scale-[1.02]"
                >
                  <Link href="/contact">
                    Book an Appointment
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="rounded-full px-8 hover:bg-secondary transition-all duration-300"
                >
                  <Link href="/services">View Our Services</Link>
                </Button>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={400}>
              <div className="flex items-center gap-6 pt-4">
                <div className="flex -space-x-3">
                  {previewTeam.map((doc) => (
                    <div
                      key={doc.id}
                      className="w-10 h-10 rounded-full border-2 border-background overflow-hidden shrink-0"
                    >
                      <DoctorPlaceholder name={doc.name} size="sm" className="min-h-10 min-w-10 rounded-full" />
                    </div>
                  ))}
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">
                    {doctors.length}+ physicians & specialists
                  </p>
                  <p className="text-sm text-muted-foreground">Ready to care for you</p>
                </div>
              </div>
            </AnimatedSection>
          </div>

          <AnimatedSection animation="fade-left" delay={200} className="relative">
            <div className="relative aspect-[4/3] lg:aspect-square rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="/images/hero-clinic.jpg"
                alt="Riverview Medical Centre - Modern clinic interior"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 via-transparent to-transparent" />
            </div>

            <div className="absolute -bottom-6 -left-6 bg-background rounded-2xl p-6 shadow-xl border border-border">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center">
                  <Play className="w-5 h-5 text-accent fill-accent" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">Virtual Tours</p>
                  <p className="text-sm text-muted-foreground">Explore our facility</p>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
