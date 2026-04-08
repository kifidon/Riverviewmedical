/** Site-wide contact details — Riverview Medical Centre, Edmonton */

export const SITE_ADDRESS_LINES = [
  "#135 3210 118 Ave NW",
  "Edmonton, AB T5W 4W1",
  "Canada",
] as const

export const SITE_ADDRESS_ONE_LINE =
  "#135 3210 118 Ave NW, Edmonton, AB T5W 4W1, Canada"

export const SITE_MAPS_URL =
  "https://www.google.com/maps/search/?api=1&query=" +
  encodeURIComponent(SITE_ADDRESS_ONE_LINE)

/** Google Maps embed (search query; no API key required for embed) */
export const SITE_MAPS_EMBED_URL =
  "https://maps.google.com/maps?q=" +
  encodeURIComponent(SITE_ADDRESS_ONE_LINE) +
  "&z=15&output=embed"

export const SITE_PHONE_DISPLAY = "1-780-249-8911"
export const SITE_PHONE_EXT_NOTE = "EXT"
export const SITE_PHONE_TEL = "+17802498911"

export const SITE_FAX_DISPLAY = "1-780-249-8912"
export const SITE_FAX_URI = "fax:+17802498912"

export const SITE_EMAIL = "riverviewmedicalcentreedmonton@gmail.com"
export const SITE_EMAIL_RESPONSE_TIME = "We reply within 24 hours"

export const SITE_HOURS_WEEKDAY = "Mon-Fri: 8AM - 9PM"
export const SITE_HOURS_WEEKEND = "Sat-Sun: 9AM - 9PM"
