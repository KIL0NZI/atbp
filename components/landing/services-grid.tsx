'use client'

import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Users, Zap, Globe, Crown, ArrowRight } from 'lucide-react'

const services = [
  {
    id: 1,
    icon: Users,
    name: 'Indoor Team Building',
    capacity: '10-100 people',
    image: '/1.jpg',
    description: 'Engaging activities in climate-controlled spaces perfect for corporate offices or conference venues.',
    features: ['Icebreaker games', 'Problem-solving challenges', 'Team competitions', 'Catering packages available'],
    whatsappMsg: "Hi Adlucem! I'm interested in the Indoor Team Building package. Could you provide a quote for our team?",
    emailDetails: {
      subject: "Inquiry: Indoor Team Building Package",
      body: "Hello Adlucem Team,\n\nI am writing to inquire about your Indoor Team Building services. We are looking to host an event for our team and would like to receive more information regarding pricing and availability.\n\nThank you!"
    }
  },
  {
    id: 2,
    icon: Zap,
    name: 'Outdoor Adventures',
    capacity: 'Unlimited',
    image: '/9.jpg',
    description: 'High-energy outdoor experiences that build lasting bonds and unforgettable memories.',
    features: ['Scavenger hunts', 'Obstacle courses', 'Adventure races', 'Campfire activities'],
    whatsappMsg: "Hi Adlucem! Our team is ready for an Outdoor Adventure. Can you share more details on the activities included?",
    emailDetails: {
      subject: "Inquiry: Outdoor Adventures Package",
      body: "Hello Adlucem Team,\n\nWe are interested in your Outdoor Adventures package for an upcoming team outing. Could you please share the itinerary options and safety protocols?\n\nBest regards,"
    }
  },
  {
    id: 3,
    icon: Globe,
    name: 'Virtual Team Building',
    capacity: 'Unlimited',
    image: 'https://images.unsplash.com/photo-1588196749597-9ff075ee6b5b?auto=format&fit=crop&q=80&w=800',
    description: 'Engaging remote activities perfect for distributed teams and hybrid workplaces.',
    features: ['Online games & trivia', 'Virtual escapes rooms', 'Wellness sessions', 'Interactive workshops'],
    whatsappMsg: "Hi Adlucem! I'd like to book a Virtual Team Building session for our remote staff. How do we get started?",
    emailDetails: {
      subject: "Inquiry: Virtual Team Building",
      body: "Hello,\n\nOur distributed team is looking for a way to connect virtually. Could you provide details on the platforms you use and the types of interactive workshops available?\n\nCheers,"
    }
  },
  {
    id: 4,
    icon: Crown,
    name: 'Executive Retreats',
    capacity: '20-300 people',
    image: '/8.jpg',
    description: 'Customized multi-day experiences designed for leadership development and strategic planning.',
    features: ['Luxury accommodations', 'Leadership coaching', 'Custom activities', 'Full logistics support'],
    whatsappMsg: "Hi Adlucem! We are planning an Executive Retreat. I'd like to discuss a customized itinerary for our leadership team.",
    emailDetails: {
      subject: "Inquiry: Executive Retreat Planning",
      body: "To the Adlucem Team,\n\nWe are interested in your Executive Retreat services for our leadership development program. We would like to schedule a consultation to discuss our strategic goals and customization options.\n\nSincerely,"
    }
  },
]

export function ServicesGrid() {
  const WHATSAPP_NUMBER = "254750272602"
  const CONTACT_EMAIL = "hello@adlucem.com"

  const handleInquiry = (service: typeof services[0]) => {
    // You can choose to default to WhatsApp or create a selection logic here
    const encodedMsg = encodeURIComponent(service.whatsappMsg)
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMsg}`, '_blank')
  }

  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
          <p className="text-lg text-gray-600">Choose the perfect team building experience for your organization</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service) => {
            const Icon = service.icon
            return (
              <Card key={service.id} className="overflow-hidden flex flex-col hover:shadow-xl transition-all duration-300 border-gray-200 group">
                <div className="h-56 relative overflow-hidden">
                  <img src={service.image} alt={service.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute top-4 left-4 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-lg flex items-center justify-center shadow-sm">
                    <Icon size={24} className="text-indigo-600" />
                  </div>
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-indigo-600 text-white border-none">{service.capacity}</Badge>
                  </div>
                </div>

                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{service.name}</h3>
                  <p className="text-gray-600 mb-6 text-sm leading-relaxed">{service.description}</p>
                  <ul className="space-y-2 mb-8 flex-1">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-700">
                        <span className="w-1.5 h-1.5 bg-indigo-600 rounded-full mr-3 shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <button 
                    onClick={() => handleInquiry(service)}
                    className="w-full py-3 px-4 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors font-bold text-sm flex items-center justify-center gap-2 group/btn"
                  >
                    Inquire on WhatsApp
                    <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}