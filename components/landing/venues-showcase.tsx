'use client'

import Link from 'next/link'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { MapPin, ArrowRight, Mail } from 'lucide-react'

const showcaseVenues = [
  {
    id: 1,
    name: "Boffar Gardens Naivasha",
    location: "Naivasha",
    highlights: "Lush Gardens & Team Building Grounds",
    image: "/11.jpg",
    whatsappMsg: "Hi Adlucem! I'm interested in booking Boffar Gardens Naivasha for a team building event. Could you share more details?",
    emailDetails: {
      subject: "Inquiry: Boffar Gardens Naivasha",
      body: "Hello Adlucem,\n\nI am interested in booking Boffar Gardens for an upcoming team building event. Please provide details on availability and packages.\n\nThank you!"
    }
  },
  {
    id: 2,
    name: "Sentrim Elementaita",
    location: "Elementaita",
    highlights: "Lakeside View & Serene Environment",
    image: "/33.jpg",
    whatsappMsg: "Hi Adlucem! I'm interested in booking Sentrim Elementaita. Do you have any open dates for next month?",
    emailDetails: {
      subject: "Inquiry: Sentrim Elementaita Venue",
      body: "Hi Team,\n\nWe are considering Sentrim Elementaita for our next corporate retreat. Could you share your current rates?\n\nBest regards,"
    }
  },
  {
    id: 3,
    name: "Nairobi Botanic Gardens",
    location: "Nairobi",
    highlights: "Unique Botanical Setting for Team Building",
    image: "/37.jpg",
    whatsappMsg: "Hi Adlucem! I'm interested in booking Nairobi Botanic Gardens for our team. What are the logistics for a group of 50?",
    emailDetails: {
      subject: "Inquiry: Nairobi Botanic Gardens",
      body: "Hello Adlucem Team,\n\nWe are looking at Nairobi Botanic Gardens for our annual team getaway. Please provide a quote for 50 people.\n\nRegards,"
    }
  }
]

export function VenuesShowcase() {
  const WHATSAPP_NUMBER = "254750272602"
  const CONTACT_EMAIL = "adlucemteambuildingpros@gmail.com"

  const openWhatsApp = (msg: string) => {
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`, '_blank')
  }

  const openEmail = (details: { subject: string; body: string }) => {
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(details.subject)}&body=${encodeURIComponent(details.body)}`
  }

  return (
    <section id="venues" className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Premium <span className="text-indigo-600">Venues</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Experience the best of Kenya. We've vetted the most inspiring locations to ensure your team has the perfect environment to grow.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {showcaseVenues.map((venue) => (
            <div
              key={venue.id}
              className="group rounded-2xl overflow-hidden border border-gray-100 shadow-md hover:shadow-xl transition-all duration-300 bg-white flex flex-col"
            >
              <div className="h-60 overflow-hidden relative">
                <img
                  src={venue.image}
                  alt={venue.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-4 right-4">
                  <Badge className="bg-white/95 text-indigo-700 font-bold border-none shadow-sm">
                    {venue.location}
                  </Badge>
                </div>
              </div>

              <div className="p-6 flex flex-col flex-1">
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-indigo-600 transition-colors">
                    {venue.name}
                  </h3>
                  <div className="flex items-start gap-2 text-gray-500 text-sm mb-6">
                    <MapPin size={16} className="text-indigo-500 shrink-0 mt-0.5" />
                    <p>{venue.highlights}</p>
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <Button
                    onClick={() => openWhatsApp(venue.name)}
                    className="w-full bg-white border-2 hover:border-[#1ebe57] border-indigo-500 hover:bg-[#1ebe57] text-indigo-600 hover:text-white font-bold h-12 gap-2 shadow-sm rounded-xl transform transition-transform active:scale-95"
                  >
                    <img src="https://img.icons8.com/?size=100&id=uZWiLUyryScN&format=png&color=000000" alt="whatsapp_icon" className="w-6 h-6" />
                    Inquire about venue
                  </Button>

                  <Button
                    variant="ghost"
                    onClick={() => openEmail(venue.emailDetails)}
                    className="text-gray-500 hover:text-indigo-600 hover:bg-indigo-50 h-10 gap-2 font-semibold transition-all"
                  >
                    <Mail size={18} />
                    Send Email Inquiry
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center">
          <Link href="/venues">
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-indigo-600 text-indigo-600 hover:bg-indigo-600 hover:text-white px-10 py-7 text-lg rounded-full font-bold transition-all group"
            >
              Explore All 30+ Venues
              <ArrowRight className="ml-2 group-hover:translate-x-2 transition-transform" size={20} />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}