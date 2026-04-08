"use client"

import { useState } from "react"
import { AnimatedSection } from "@/components/animated-section"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { CheckCircle2, Loader2 } from "lucide-react"
import { cn } from "@/lib/utils"
import { SITE_PHONE_DISPLAY } from "@/lib/site-contact"

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))
    
    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  if (isSubmitted) {
    return (
      <AnimatedSection animation="scale">
        <div className="bg-secondary rounded-3xl p-8 sm:p-12 text-center">
          <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 className="w-8 h-8 text-accent" />
          </div>
          <h3 className="text-2xl font-bold text-foreground mb-3">
            Thank You!
          </h3>
          <p className="text-muted-foreground mb-6">
            Your message has been received. Our team will contact you within 24 hours 
            to confirm your appointment or answer your questions.
          </p>
          <Button 
            onClick={() => setIsSubmitted(false)}
            variant="outline"
            className="rounded-full"
          >
            Submit Another Request
          </Button>
        </div>
      </AnimatedSection>
    )
  }

  return (
    <AnimatedSection>
      <div className="bg-secondary rounded-3xl p-8 sm:p-12">
        <h2 className="text-2xl font-bold text-foreground mb-2">
          Book an Appointment
        </h2>
        <p className="text-muted-foreground mb-8">
          Fill out the form below and we&apos;ll get back to you within 24 hours.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name and Email */}
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="name">Full Name *</Label>
              <Input
                id="name"
                name="name"
                placeholder="John Smith"
                required
                className="h-12 rounded-xl bg-background border-border"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email Address *</Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="your.email@example.com"
                required
                className="h-12 rounded-xl bg-background border-border"
              />
            </div>
          </div>

          {/* Phone and Appointment Type */}
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="phone">Phone Number *</Label>
              <Input
                id="phone"
                name="phone"
                type="tel"
                placeholder={SITE_PHONE_DISPLAY}
                required
                className="h-12 rounded-xl bg-background border-border"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="appointmentType">Appointment Type *</Label>
              <Select name="appointmentType" required>
                <SelectTrigger className="h-12 rounded-xl bg-background border-border">
                  <SelectValue placeholder="Select type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="general">General Checkup</SelectItem>
                  <SelectItem value="urgent">Urgent Care</SelectItem>
                  <SelectItem value="followup">Follow-up Visit</SelectItem>
                  <SelectItem value="preventive">Preventive Care</SelectItem>
                  <SelectItem value="chronic">Chronic Care Management</SelectItem>
                  <SelectItem value="other">Other / General Inquiry</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Patient Type */}
          <div className="space-y-3">
            <Label>Patient Type *</Label>
            <RadioGroup defaultValue="new" className="flex gap-6">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="new" id="new" />
                <Label htmlFor="new" className="font-normal cursor-pointer">
                  New Patient
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="existing" id="existing" />
                <Label htmlFor="existing" className="font-normal cursor-pointer">
                  Existing Patient
                </Label>
              </div>
            </RadioGroup>
          </div>

          {/* Gender and Age */}
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="gender">Gender</Label>
              <Select name="gender">
                <SelectTrigger className="h-12 rounded-xl bg-background border-border">
                  <SelectValue placeholder="Select gender" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="male">Male</SelectItem>
                  <SelectItem value="female">Female</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                  <SelectItem value="prefer-not">Prefer not to say</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="age">Age</Label>
              <Input
                id="age"
                name="age"
                type="number"
                min="0"
                max="120"
                placeholder="Enter your age"
                className="h-12 rounded-xl bg-background border-border"
              />
            </div>
          </div>

          {/* Reason for Visit */}
          <div className="space-y-2">
            <Label htmlFor="reason">Reason for Visit / Main Concern *</Label>
            <Textarea
              id="reason"
              name="reason"
              placeholder="Please describe your symptoms, concerns, or the reason for your visit..."
              required
              rows={4}
              className="rounded-xl bg-background border-border resize-none"
            />
          </div>

          {/* Submit Button */}
          <Button
            type="submit"
            size="lg"
            className={cn(
              "w-full rounded-full shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all duration-300",
              !isSubmitting && "hover:scale-[1.02]"
            )}
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <>
                <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                Submitting...
              </>
            ) : (
              "Submit Request"
            )}
          </Button>

          <p className="text-xs text-muted-foreground text-center">
            By submitting this form, you agree to our privacy policy. 
            We&apos;ll only use your information to process your request.
          </p>
        </form>
      </div>
    </AnimatedSection>
  )
}
