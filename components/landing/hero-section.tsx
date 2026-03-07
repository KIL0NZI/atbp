'use client'

import { Button } from '@/components/ui/button'
import { ArrowRight, Sparkles } from 'lucide-react'
import Link from 'next/link'

export function HeroSection() {
  return (
    // Changed pt-40 to relative and h-screen/min-h-screen to ensure background coverage
    <section className="relative min-h-screen flex items-center justify-center py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="/hero-image.jpg"
          alt="Team Building Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-white/90 md:bg-white/80 backdrop-blur-[2px]" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center px-4">
        <div className="inline-flex items-center gap-2 bg-indigo-100 text-indigo-700 px-4 py-2 rounded-full mb-6">
          <Sparkles size={16} />
          <span className="text-sm font-medium">Now Booking 2026 Events</span>
        </div>

        <h1 className="text-4xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight tracking-tight">
          Unforgettable Team
          <span className="text-indigo-600 block md:inline"> Building Experiences</span>
        </h1>

        <p className="text-lg md:text-xl text-gray-600 mb-10 leading-relaxed max-w-2xl mx-auto">
          Transform your team with engaging, customizable activities designed to boost collaboration, trust, and morale. Indoor, outdoor, or virtual—we've got the perfect solution for your group.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <Button
            size="lg"
            className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-6 text-lg shadow-xl"
            onClick={() => window.open('https://wa.me/254700000000?text=Inquiry', '_blank')}
          >
            Request a Quote
            <ArrowRight className="ml-2" size={20} />
          </Button>
          <Link href="/services">
            <Button
              size="lg"
              variant="outline"
              className="border-gray-300 bg-white/50 backdrop-blur-sm text-gray-900 px-8 py-6 text-lg"
            >
              Explore Services
            </Button>
          </Link>
        </div>

        {/* Updated Grid: grid-cols-1 for mobile, md:grid-cols-3 for desktop */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 text-center max-w-2xl mx-auto pt-8 border-t border-gray-200/50">
          <div className="flex flex-col items-center">
            <p className="text-2xl md:text-3xl font-bold text-gray-900">100+</p>
            <p className="text-xs md:text-sm font-medium text-gray-500 uppercase tracking-wider">Events Hosted</p>
          </div>
          <div className="flex flex-col items-center">
            <p className="text-2xl md:text-3xl font-bold text-gray-900">4.9★</p>
            <p className="text-xs md:text-sm font-medium text-gray-500 uppercase tracking-wider">Rating</p>
          </div>
          <div className="flex flex-col items-center">
            <p className="text-2xl md:text-3xl font-bold text-gray-900">1K+</p>
            <p className="text-xs md:text-sm font-medium text-gray-500 uppercase tracking-wider">Happy Teams</p>
          </div>
        </div>
      </div>
    </section>
  )
}