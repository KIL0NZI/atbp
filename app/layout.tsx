import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Navbar } from '@/components/landing/navbar'
import { Footer } from '@/components/landing/footer'
import { Permanent_Marker } from 'next/font/google'

import './globals.css'

const geistSans = Geist({ 
  subsets: ['latin'],
  variable: '--font-geist-sans',
})
const geistMono = Geist_Mono({ 
  subsets: ['latin'],
  variable: '--font-geist-mono',
})
const permanentMarker = Permanent_Marker({ 
  weight: '400',
  subsets: ['latin'],
  variable: '--font-marker',
})

export const metadata: Metadata = {
  title: 'Team Building Service - Unforgettable Experiences',
  description: 'Premium team building activities and corporate events tailored to energize your team and boost collaboration.',
  generator: 'v0.app',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${geistSans.variable} ${geistMono.variable} ${permanentMarker.variable} font-sans antialiased`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}