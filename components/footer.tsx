import Link from "next/link"
import { Phone, Mail, MapPin, Clock } from "lucide-react"
import {
  SITE_ADDRESS_LINES,
  SITE_EMAIL,
  SITE_FAX_DISPLAY,
  SITE_HOURS_WEEKDAY,
  SITE_HOURS_WEEKEND,
  SITE_PHONE_DISPLAY,
  SITE_PHONE_TEL,
} from "@/lib/site-contact"

const quickLinks = [
  { href: "/doctors", label: "Our Doctors" },
  { href: "/services", label: "Services" },
  { href: "/careers", label: "Careers" },
  { href: "/contact", label: "Contact" },
]

const services = [
  { href: "/services", label: "Family Medicine" },
  { href: "/services", label: "Walk-In Care" },
  { href: "/services", label: "Preventative Health" },
  { href: "/services", label: "Chronic Care" },
]

export function Footer() {
  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">R</span>
              </div>
              <div>
                <span className="font-semibold text-background text-lg">Riverview</span>
                <span className="text-background/70 text-sm block -mt-1">Medical Centre</span>
              </div>
            </div>
            <p className="text-background/70 text-sm leading-relaxed">
              Providing compassionate, comprehensive healthcare for you and your family. Your health is our priority.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-background mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href + link.label}>
                  <Link
                    href={link.href}
                    className="text-background/70 hover:text-background transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-background mb-4">Services</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.label}>
                  <Link
                    href={service.href}
                    className="text-background/70 hover:text-background transition-colors text-sm"
                  >
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-background mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span className="text-background/70 text-sm">
                  {SITE_ADDRESS_LINES.map((line) => (
                    <span key={line}>
                      {line}
                      <br />
                    </span>
                  ))}
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span className="text-background/70 text-sm">
                  <a href={`tel:${SITE_PHONE_TEL}`} className="hover:text-background transition-colors">
                    {SITE_PHONE_DISPLAY}
                  </a>
                  <br />
                  Fax: {SITE_FAX_DISPLAY}
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary shrink-0" />
                <a
                  href={`mailto:${SITE_EMAIL}`}
                  className="text-background/70 hover:text-background transition-colors text-sm break-all"
                >
                  {SITE_EMAIL}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span className="text-background/70 text-sm">
                  {SITE_HOURS_WEEKDAY}
                  <br />
                  {SITE_HOURS_WEEKEND}
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-background/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-background/50 text-sm">
              &copy; {new Date().getFullYear()} Riverview Medical Centre. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link href="/contact" className="text-background/50 hover:text-background transition-colors text-sm">
                Privacy Policy
              </Link>
              <Link href="/contact" className="text-background/50 hover:text-background transition-colors text-sm">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
