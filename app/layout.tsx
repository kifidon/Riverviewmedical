import type { Metadata } from 'next'
import { Manrope } from 'next/font/google'
import './globals.css'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-manrope',
  weight: ['400', '500', '600', '700', '800'],
})

export const metadata: Metadata = {
  title: 'Riverview Medical Centre | Professional Healthcare You Can Trust',
  description: 'Riverview Medical Centre offers compassionate, comprehensive healthcare services including family medicine, walk-in care, and preventative health. Book your appointment today.',
  keywords: 'medical centre, healthcare, family medicine, walk-in clinic, doctors, preventative health',
  icons: {
    icon: [{ url: '/icon.svg', type: 'image/svg+xml' }],
    apple: [{ url: '/icon.svg', type: 'image/svg+xml' }],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${manrope.variable} font-sans antialiased`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
