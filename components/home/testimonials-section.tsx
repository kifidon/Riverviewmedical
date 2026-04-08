"use client"

import { AnimatedSection } from "@/components/animated-section"
import { Star, Quote } from "lucide-react"

const testimonials = [
  {
    id: 1,
    quote: "The staff at Riverview Medical Centre made me feel comfortable from the moment I walked in. My doctor took the time to really listen to my concerns and explain everything clearly.",
    name: "Jennifer M.",
    rating: 5,
  },
  {
    id: 2,
    quote: "I've been bringing my family here for years. The doctors are knowledgeable, the facility is clean and modern, and they always fit us in when we need urgent care.",
    name: "Robert T.",
    rating: 5,
  },
  {
    id: 3,
    quote: "Best healthcare experience I've had. The online booking is convenient, wait times are minimal, and the care is top-notch. Highly recommend to anyone looking for a new family doctor.",
    name: "Amanda K.",
    rating: 5,
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-24 bg-secondary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <AnimatedSection className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-primary font-medium text-sm uppercase tracking-wider">
            Patient Stories
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mt-3 mb-4 text-balance">
            What Our Patients Say
          </h2>
          <p className="text-muted-foreground text-lg">
            Don&apos;t just take our word for it. Here&apos;s what our patients have to say 
            about their experience at Riverview Medical Centre.
          </p>
        </AnimatedSection>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <AnimatedSection key={testimonial.id} delay={index * 100}>
              <div className="bg-background rounded-2xl p-8 shadow-sm border border-border h-full relative">
                {/* Quote icon */}
                <div className="absolute -top-4 left-8">
                  <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                    <Quote className="w-4 h-4 text-primary-foreground" />
                  </div>
                </div>

                {/* Rating */}
                <div className="flex gap-1 mb-4 pt-2">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-muted-foreground leading-relaxed mb-6">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>

                {/* Author */}
                <p className="font-semibold text-foreground">{testimonial.name}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
