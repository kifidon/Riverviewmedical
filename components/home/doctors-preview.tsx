"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { AnimatedSection } from "@/components/animated-section"
import { ArrowRight } from "lucide-react"
import { doctors } from "@/lib/doctors-data"
import { DoctorPlaceholder } from "@/components/doctor-placeholder"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { CarouselEdgeFades } from "@/components/carousel-edge-fades"

export function DoctorsPreview() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-primary font-medium text-sm uppercase tracking-wider">
            Meet Our Team
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mt-3 mb-4 text-balance">
            Our Doctors
          </h2>
          <p className="text-muted-foreground text-lg">
            Our team of experienced, compassionate physicians is dedicated to providing the highest
            quality care for you and your family.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={100} className="relative mb-12 px-2 sm:px-12">
          <Carousel
            opts={{
              align: "start",
              loop: true,
              skipSnaps: false,
              dragFree: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-3 md:-ml-4">
              {doctors.map((doctor) => (
                <CarouselItem
                  key={doctor.id}
                  className="pl-3 md:pl-4 basis-full sm:basis-1/2 lg:basis-1/3 xl:basis-1/4"
                >
                  <Link href="/doctors" className="group block h-full">
                    <div className="relative aspect-[3/4] rounded-2xl overflow-hidden mb-4 border border-border/60 bg-secondary/30 transition-all duration-500 group-hover:border-primary/30 group-hover:shadow-lg">
                      <DoctorPlaceholder
                        name={doctor.name}
                        size="lg"
                        showIcon
                        className="h-full w-full min-h-0 rounded-2xl"
                      />
                      <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/5 transition-colors duration-300" />
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <span className="bg-background/95 backdrop-blur-sm text-foreground px-4 py-2 rounded-full text-sm font-medium shadow-md">
                          View team
                        </span>
                      </div>
                    </div>
                    <h3 className="font-semibold text-foreground text-lg group-hover:text-primary transition-colors line-clamp-2">
                      {doctor.name}
                    </h3>
                    <p className="text-muted-foreground text-sm">{doctor.specialty}</p>
                  </Link>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselEdgeFades />
            <CarouselPrevious className="z-20 left-0 sm:-left-2 border-border bg-background/90 shadow-md" />
            <CarouselNext className="z-20 right-0 sm:-right-2 border-border bg-background/90 shadow-md" />
          </Carousel>
        </AnimatedSection>

        <AnimatedSection className="text-center">
          <Button
            asChild
            variant="outline"
            size="lg"
            className="rounded-full px-8 hover:bg-secondary transition-all duration-300"
          >
            <Link href="/doctors">
              Meet Our Doctors
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </Button>
        </AnimatedSection>
      </div>
    </section>
  )
}
