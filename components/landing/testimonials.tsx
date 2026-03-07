'use client'

import { Card } from '@/components/ui/card'
import { Star } from 'lucide-react'

const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'HR Director, Tech Corp',
    content:
      'Our team was skeptical about team building activities, but this experience changed everything. The energy and positive momentum lasted for weeks after the event. Highly recommended!',
    rating: 5,
  },
  {
    id: 2,
    name: 'Marcus Chen',
    role: 'CEO, Growth Industries',
    content:
      'Professional execution from start to finish. The custom activities were perfectly aligned with our team challenges. Our employee engagement scores improved significantly.',
    rating: 5,
  },
  {
    id: 3,
    name: 'Elena Rodriguez',
    role: 'Operations Manager, StartUp Co',
    content:
      'The outdoor adventure package was incredible. My team felt genuinely connected for the first time. The safety protocols were impeccable, and everyone had a blast.',
    rating: 5,
  },
]

export function Testimonials() {
  return (
    <section id="testimonials" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            What Our Clients Say
          </h2>
          <p className="text-lg text-gray-600">
            Real feedback from teams that experienced transformation
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <Card
              key={testimonial.id}
              className="p-6 border-gray-200 hover:shadow-lg transition-shadow"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    size={18}
                    className="fill-indigo-600 text-indigo-600"
                  />
                ))}
              </div>

              <p className="text-gray-700 mb-6 leading-relaxed italic">
                "{testimonial.content}"
              </p>

              <div className="border-t border-gray-200 pt-4">
                <p className="font-bold text-gray-900">{testimonial.name}</p>
                <p className="text-sm text-gray-600">{testimonial.role}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
