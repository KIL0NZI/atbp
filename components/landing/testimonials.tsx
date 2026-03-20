'use client'

import { Card } from '@/components/ui/card'
import { Star, Quote } from 'lucide-react'

const testimonials = [
  {
    id: 1,
    name: 'Ben',
    role: 'Unaitas',
    content:
      'Happy New Year... Our team is happy. They were patiently waiting for this special moment. Wishing you a year full of God’s Grace, Love, favor, and Heroism!',
    rating: 5,
  },
  {
    id: 2,
    name: 'Valentine',
    role: 'Economics & Social Rights, Haki Jamii',
    content:
      "We'd definitely love to partner more after the good job done. The execution was professional and hit all our objectives.",
    rating: 5,
  },
  {
    id: 3,
    name: 'Team Lead',
    role: 'Superfoam Ltd',
    content:
      'Kazi safi sana! Kila mtu alifurahia na kujivinjari vilivyo. Team building ilikuwa ya kipekee na ya kusisimua. Tunashukuru kwa huduma yenu nzuri!',
    rating: 5,
  },
]

export function Testimonials() {
  return (
    <section id="testimonials" className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <Badge className="bg-indigo-100 text-indigo-700 mb-4 px-4 py-1">Success Stories</Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 font-marker uppercase">
            What Our <span className="text-indigo-600">Clients</span> Say
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Real feedback from teams that experienced transformation through Adlucem.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <Card
              key={testimonial.id}
              className="p-8 border-none shadow-sm hover:shadow-xl transition-all duration-300 bg-white relative group"
            >
              <Quote className="absolute top-6 right-6 text-indigo-50 group-hover:text-indigo-100 transition-colors" size={40} />
              
              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className="fill-indigo-600 text-indigo-600"
                  />
                ))}
              </div>

              <p className="text-gray-700 mb-8 leading-relaxed italic relative z-10">
                "{testimonial.content}"
              </p>

              <div className="flex items-center gap-4 border-t border-gray-100 pt-6">
                <div className="w-12 h-12 rounded-full bg-indigo-100 flex items-center justify-center font-bold text-indigo-600">
                    {testimonial.name[0]}
                </div>
                <div>
                  <p className="font-bold text-gray-900">{testimonial.name}</p>
                  <p className="text-xs text-indigo-600 uppercase tracking-widest font-semibold">{testimonial.role}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

// Small helper for the Badge since it's used in the header
function Badge({ children, className }: { children: React.ReactNode, className: string }) {
    return (
        <span className={`inline-block rounded-full text-xs font-bold uppercase tracking-widest ${className}`}>
            {children}
        </span>
    )
}