'use client'

import { Card } from '@/components/ui/card'
import { CheckCircle, Heart, Shield } from 'lucide-react'

const reasons = [
  {
    icon: CheckCircle,
    title: '7+ Years of Experience',
    description: 'Trusted by Fortune 500 companies and startups alike to create memorable team experiences.',
  },
  {
    icon: Heart,
    title: 'Employee Engagement Focus',
    description: 'We design activities that boost morale, strengthen relationships, and increase productivity.',
  },
  {
    icon: Shield,
    title: 'Safety & Quality Assured',
    description: 'All activities are professionally managed with comprehensive insurance and safety protocols.',
  },
]

export function AboutSection() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Why Choose Us?
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              We're not just event planners—we're team transformation experts. Every activity is carefully designed to address your specific team challenges and goals, ensuring maximum impact and lasting results.
            </p>

            <div className="space-y-4">
              {reasons.map((reason, idx) => {
                const Icon = reason.icon
                return (
                  <Card key={idx} className="p-4 border-gray-200">
                    <div className="flex gap-4">
                      <div className="flex-shrink-0">
                        <Icon size={24} className="text-indigo-600 mt-1" />
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-900 mb-1">
                          {reason.title}
                        </h3>
                        <p className="text-sm text-gray-600">
                          {reason.description}
                        </p>
                      </div>
                    </div>
                  </Card>
                )
              })}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="bg-gradient-to-br from-indigo-400 to-indigo-600 rounded-xl p-6 text-white flex flex-col justify-center">
              <p className="text-4xl font-bold mb-2">100+</p>
              <p className="text-indigo-100">Events Hosted</p>
            </div>
            <div className="bg-gradient-to-br from-blue-400 to-blue-600 rounded-xl p-6 text-white flex flex-col justify-center">
              <p className="text-4xl font-bold mb-2">1K+</p>
              <p className="text-blue-100">Happy Teams</p>
            </div>
            <div className="bg-gradient-to-br from-purple-400 to-purple-600 rounded-xl p-6 text-white flex flex-col justify-center">
              <p className="text-4xl font-bold mb-2">4.9★</p>
              <p className="text-purple-100">Average Rating</p>
            </div>
            <div className="bg-gradient-to-br from-pink-400 to-pink-600 rounded-xl p-6 text-white flex flex-col justify-center">
              <p className="text-4xl font-bold mb-2">15+</p>
              <p className="text-pink-100">Locations</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
