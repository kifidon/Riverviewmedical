"use client"

import { useCallback, useEffect, useState } from "react"
import { AnimatedSection } from "@/components/animated-section"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { X, Mail, Languages } from "lucide-react"
import { cn } from "@/lib/utils"
import { doctors, type Doctor } from "@/lib/doctors-data"
import { DoctorPlaceholder } from "@/components/doctor-placeholder"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel"
import { CarouselEdgeFades } from "@/components/carousel-edge-fades"
import Link from "next/link"

export function DoctorsGrid() {
  const [selectedDoctor, setSelectedDoctor] = useState<Doctor | null>(null)
  const [api, setApi] = useState<CarouselApi>()
  const [currentSlide, setCurrentSlide] = useState(0)

  const scrollTo = useCallback(
    (index: number) => {
      api?.scrollTo(index)
    },
    [api],
  )

  useEffect(() => {
    if (!api) return
    setCurrentSlide(api.selectedScrollSnap())
    const onSelect = () => setCurrentSlide(api.selectedScrollSnap())
    api.on("select", onSelect)
    return () => {
      api.off("select", onSelect)
    }
  }, [api])

  useEffect(() => {
    if (!api) return
    const interval = setInterval(() => {
      if (api.canScrollNext()) api.scrollNext()
      else api.scrollTo(0)
    }, 7000)
    return () => clearInterval(interval)
  }, [api])

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="mb-10 text-center max-w-2xl mx-auto">
          <p className="text-muted-foreground">
            Swipe or use arrows to explore each physician. Select a card for full details.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={80} className="relative px-2 sm:px-14 lg:px-16">
          <Carousel
            setApi={setApi}
            opts={{ align: "center", loop: true, skipSnaps: false }}
            className="w-full"
          >
            <CarouselContent className="-ml-3 md:-ml-4 py-4">
              {doctors.map((doctor) => (
                <CarouselItem
                  key={doctor.id}
                  className="pl-3 md:pl-4 basis-full md:basis-[88%] lg:basis-[72%] xl:basis-[52%]"
                >
                  <button
                    type="button"
                    onClick={() => setSelectedDoctor(doctor)}
                    className="w-full text-left rounded-3xl border border-border/80 bg-card shadow-sm transition-all duration-500 hover:shadow-xl hover:border-primary/25 hover:-translate-y-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  >
                    <div className="grid md:grid-cols-[minmax(0,280px)_1fr] gap-0 md:gap-0 overflow-hidden rounded-3xl">
                      <div className="relative aspect-[4/3] md:aspect-auto md:min-h-[280px]">
                        <DoctorPlaceholder
                          name={doctor.name}
                          size="lg"
                          showIcon
                          className="h-full w-full min-h-[220px] rounded-none md:rounded-l-3xl md:rounded-r-none"
                        />
                      </div>
                      <div className="p-6 md:p-8 flex flex-col justify-center">
                        <div className="flex flex-wrap gap-2 mb-3">
                          {doctor.takingNewPatients && (
                            <Badge className="rounded-full font-medium">Taking New Patients</Badge>
                          )}
                          {doctor.walkInsWelcome && (
                            <Badge variant="secondary" className="rounded-full font-medium">
                              Walk-Ins Welcome
                            </Badge>
                          )}
                          <Badge variant="outline" className="rounded-full font-medium">
                            {doctor.category}
                          </Badge>
                        </div>
                        <h3 className="font-bold text-xl md:text-2xl text-foreground mb-1">{doctor.name}</h3>
                        <p className="text-primary font-semibold mb-3">{doctor.specialty}</p>
                        <p className="text-sm text-muted-foreground mb-4 flex items-center gap-2">
                          <Languages className="w-4 h-4 shrink-0 text-primary" />
                          Languages: {doctor.languages}
                        </p>
                        <p className="text-muted-foreground text-sm leading-relaxed line-clamp-4 mb-4">
                          {doctor.bio}
                        </p>
                        <span className="text-primary text-sm font-semibold">View Profile →</span>
                      </div>
                    </div>
                  </button>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselEdgeFades />
            <CarouselPrevious className="z-20 border-border bg-background/95 shadow-md" />
            <CarouselNext className="z-20 border-border bg-background/95 shadow-md" />
          </Carousel>

          <div className="flex justify-center gap-1.5 mt-8 flex-wrap">
            {doctors.map((_, i) => (
              <button
                key={i}
                type="button"
                aria-label={`Go to slide ${i + 1}`}
                aria-current={currentSlide === i ? "true" : undefined}
                className={cn(
                  "h-2 rounded-full transition-all duration-300",
                  currentSlide === i
                    ? "w-8 bg-primary"
                    : "w-2 bg-primary/20 hover:bg-primary/40",
                )}
                onClick={() => scrollTo(i)}
              />
            ))}
          </div>
        </AnimatedSection>

        {selectedDoctor && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedDoctor(null)}
          >
            <div className="absolute inset-0 bg-foreground/50 backdrop-blur-sm" />

            <div
              className={cn(
                "relative bg-background rounded-3xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto",
                "animate-in fade-in zoom-in-95 duration-300",
              )}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                onClick={() => setSelectedDoctor(null)}
                className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center hover:bg-secondary transition-colors"
              >
                <X className="w-5 h-5 text-foreground" />
              </button>

              <div className="relative aspect-[16/9]">
                <DoctorPlaceholder
                  name={selectedDoctor.name}
                  size="lg"
                  showIcon
                  className="h-full w-full min-h-[200px] rounded-none rounded-t-3xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent rounded-t-3xl" />
              </div>

              <div className="p-8 -mt-12 relative">
                <div className="flex flex-wrap gap-2 mb-4">
                  {selectedDoctor.takingNewPatients && (
                    <Badge className="rounded-full">Taking New Patients</Badge>
                  )}
                  {selectedDoctor.walkInsWelcome && (
                    <Badge variant="secondary" className="rounded-full">
                      Walk-Ins Welcome
                    </Badge>
                  )}
                </div>
                <h2 className="font-bold text-2xl text-foreground mb-1">{selectedDoctor.name}</h2>
                <p className="text-primary font-semibold text-lg mb-2">{selectedDoctor.specialty}</p>
                <p className="text-sm text-muted-foreground mb-6 flex items-center gap-2">
                  <Languages className="w-4 h-4 text-primary shrink-0" />
                  {selectedDoctor.languages}
                </p>

                <p className="text-muted-foreground leading-relaxed mb-8">{selectedDoctor.bio}</p>

                <div className="flex items-start gap-3 mb-8">
                  <Mail className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium text-foreground text-sm">Contact</p>
                    <Link href="/contact" className="text-primary text-sm hover:underline">
                      Reach us through our contact form
                    </Link>
                  </div>
                </div>

                <Button asChild className="w-full rounded-full shadow-lg shadow-primary/25">
                  <Link href="/contact">Book an appointment</Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
