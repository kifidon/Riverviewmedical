"use client"

import { AnimatedSection } from "@/components/animated-section"
import { MapPin, Phone, Mail } from "lucide-react"
import {
  SITE_ADDRESS_LINES,
  SITE_EMAIL,
  SITE_EMAIL_RESPONSE_TIME,
  SITE_FAX_DISPLAY,
  SITE_FAX_URI,
  SITE_MAPS_EMBED_URL,
  SITE_MAPS_URL,
  SITE_PHONE_DISPLAY,
  SITE_PHONE_EXT_NOTE,
  SITE_PHONE_TEL,
  SITE_HOURS_WEEKDAY,
  SITE_HOURS_WEEKEND,
} from "@/lib/site-contact"

export function ContactInfo() {
  return (
    <div className="space-y-8">
      <AnimatedSection delay={100}>
        <div className="space-y-6">
          {/* Address */}
          <div className="flex items-start gap-4 p-6 bg-secondary rounded-2xl">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
              <MapPin className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-1">Address</h3>
              <p className="text-muted-foreground text-sm mb-2">
                {SITE_ADDRESS_LINES.map((line) => (
                  <span key={line}>
                    {line}
                    <br />
                  </span>
                ))}
              </p>
              <a
                href={SITE_MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary text-sm font-medium hover:underline"
              >
                Get Directions
              </a>
            </div>
          </div>

          {/* Phone / fax / hours */}
          <div className="flex items-start gap-4 p-6 bg-secondary rounded-2xl">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
              <Phone className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-1">Phone</h3>
              <p className="text-muted-foreground text-sm mb-2 space-y-1">
                <span className="block">
                  <a href={`tel:${SITE_PHONE_TEL}`} className="text-foreground font-medium hover:underline">
                    {SITE_PHONE_DISPLAY}
                  </a>{" "}
                  {SITE_PHONE_EXT_NOTE}
                </span>
                <span className="block">
                  Fax:{" "}
                  <a href={SITE_FAX_URI} className="hover:underline">
                    {SITE_FAX_DISPLAY}
                  </a>
                </span>
                <span className="block">{SITE_HOURS_WEEKDAY}</span>
                <span className="block">{SITE_HOURS_WEEKEND}</span>
              </p>
              <a
                href={`tel:${SITE_PHONE_TEL}`}
                className="text-primary text-sm font-medium hover:underline"
              >
                Call Now
              </a>
            </div>
          </div>

          {/* Email */}
          <div className="flex items-start gap-4 p-6 bg-secondary rounded-2xl">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
              <Mail className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-1">Email</h3>
              <p className="text-muted-foreground text-sm mb-2">
                <a href={`mailto:${SITE_EMAIL}`} className="text-foreground font-medium hover:underline break-all">
                  {SITE_EMAIL}
                </a>
                <br />
                <span className="text-muted-foreground mt-1 inline-block">{SITE_EMAIL_RESPONSE_TIME}</span>
              </p>
              <a href={`mailto:${SITE_EMAIL}`} className="text-primary text-sm font-medium hover:underline">
                Send Email
              </a>
            </div>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection delay={300}>
        <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-secondary relative">
          <iframe
            src={SITE_MAPS_EMBED_URL}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Riverview Medical Centre Location"
            className="grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
          />
        </div>
      </AnimatedSection>
    </div>
  )
}
