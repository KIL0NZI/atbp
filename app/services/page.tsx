'use client'

import { useState } from 'react'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { 
  Dialog, 
  DialogContent, 
  DialogHeader, 
  DialogTitle, 
  DialogTrigger 
} from '@/components/ui/dialog'
import { 
  Users, Zap, Globe, Crown, CheckCircle2, 
  Trophy, Target, Mail, MessageCircle 
} from 'lucide-react'

const serviceCategories = [
  {
    category: "Classic Experiences",
    subtitle: "Our most popular formats for corporate teams.",
    items: [
      {
        id: 1,
        icon: Users,
        name: 'Indoor Team Building',
        capacity: '10-100 people',
        image: '/1.jpg',
        description: 'Engaging activities in climate-controlled spaces perfect for corporate offices or conference venues.',
        features: ['Icebreaker games', 'Problem-solving challenges', 'Team competitions', 'Expert facilitators'],
        whatsappMsg: "Hi Adlucem! I'm interested in the Indoor Team Building package. Could you provide a quote for our team?",
        emailSubject: "Inquiry: Indoor Team Building Package",
      },
      {
        id: 2,
        icon: Zap,
        name: 'Outdoor Adventures',
        capacity: '15-200 people',
        image: '/9.jpg',
        description: 'High-energy outdoor experiences that build lasting bonds and unforgettable memories.',
        features: ['Scavenger hunts', 'Obstacle courses', 'Adventure races', 'Safety gear included'],
        whatsappMsg: "Hi Adlucem! Our team is ready for an Outdoor Adventure. Can you share more details on the activities included?",
        emailSubject: "Inquiry: Outdoor Adventures Package",
      }
    ]
  },
  {
    category: "Specialized & Executive",
    subtitle: "High-impact sessions for specific leadership or remote needs.",
    items: [
      {
        id: 3,
        icon: Globe,
        name: 'Virtual Team Building',
        capacity: 'Unlimited',
        image: 'https://images.unsplash.com/photo-1588196749597-9ff075ee6b5b?auto=format&fit=crop&q=80&w=800',
        description: 'Engaging remote activities perfect for distributed teams and hybrid workplaces.',
        features: ['Online games & trivia', 'Virtual escape rooms', 'Wellness sessions', 'Interactive platform'],
        whatsappMsg: "Hi Adlucem! I'd like to book a Virtual Team Building session for our remote staff. How do we get started?",
        emailSubject: "Inquiry: Virtual Team Building Support",
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
        emailSubject: "Inquiry: Executive Retreat Planning",
      }
    ]
  }
]

export default function ServicesPage() {
  const [selectedPackage, setSelectedPackage] = useState<any>(null)
  const WHATSAPP_NUMBER = "254701256008" // Updated to your client's number

  const handleInquiry = (type: 'whatsapp' | 'email', pkg: any) => {
    const encodedMsg = encodeURIComponent(pkg.whatsappMsg)
    
    if (type === 'whatsapp') {
      window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMsg}`, '_blank')
    } else {
      const subject = encodeURIComponent(pkg.emailSubject)
      const body = encodeURIComponent(pkg.whatsappMsg) // Reusing the message for consistency
      window.location.href = `mailto:martinkilonzi748@gmail.com?subject=${subject}&body=${body}`
    }
  }

  return (
    <main className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-white min-h-screen">
      {/* ... Header stays the same ... */}
      <div className="max-w-4xl mx-auto text-center mb-20">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 font-marker tracking-wide uppercase">
          Tailored <span className="text-indigo-600">Solutions</span> for Every Team
        </h1>
        <p className="text-xl text-gray-600 leading-relaxed">
          Whether you’re looking to break the ice with new hires or sharpen the leadership skills of your C-suite, 
          we have a package designed to meet your goals.
        </p>
      </div>

      <div className="max-w-7xl mx-auto space-y-24">
        {serviceCategories.map((section) => (
          <div key={section.category}>
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4 border-b border-gray-100 pb-6">
              <div>
                <h2 className="text-3xl font-bold text-gray-900">{section.category}</h2>
                <p className="text-gray-500 mt-2">{section.subtitle}</p>
              </div>
              <div className="hidden sm:flex gap-4 text-sm font-medium text-indigo-600">
                <span className="flex items-center gap-1"><Trophy size={16}/> Professional Facilitators</span>
                <span className="flex items-center gap-1"><Target size={16}/> Goal-Oriented</span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {section.items.map((service) => {
                const Icon = service.icon
                return (
                  <Card key={service.id} className="overflow-hidden hover:shadow-2xl transition-all border-gray-100 bg-white group flex flex-col">
                    <div className="h-56 relative overflow-hidden">
                      <img src={service.image} alt={service.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                      <div className="absolute top-4 left-4 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-lg flex items-center justify-center shadow-sm">
                        <Icon size={24} className="text-indigo-600" />
                      </div>
                    </div>

                    <div className="p-8 flex-1 flex flex-col">
                      <div className="flex justify-between items-start mb-4">
                        <h3 className="text-2xl font-bold text-gray-900">{service.name}</h3>
                        <Badge variant="secondary" className="bg-indigo-50 text-indigo-700">{service.capacity}</Badge>
                      </div>
                      <p className="text-gray-600 mb-8 line-clamp-2 flex-1">{service.description}</p>

                      <Dialog>
                        <DialogTrigger asChild>
                          <Button 
                            className="w-full h-12 bg-indigo-600 hover:bg-indigo-700 text-white font-bold"
                            onClick={() => setSelectedPackage(service)}
                          >
                            View This Package
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="max-w-2xl p-0 overflow-hidden rounded-2xl border-none">
                          {selectedPackage && (
                            <>
                              <div className="h-64 w-full">
                                <img src={selectedPackage.image} className="w-full h-full object-cover" alt={selectedPackage.name} />
                              </div>
                              <div className="p-8">
                                <DialogHeader className="mb-6">
                                  <DialogTitle className="text-3xl font-bold mb-2">{selectedPackage.name}</DialogTitle>
                                  <p className="text-gray-600">{selectedPackage.description}</p>
                                </DialogHeader>

                                <div className="space-y-6">
                                  <div>
                                    <h4 className="font-bold text-gray-900 mb-3 uppercase text-xs tracking-widest">What's Included</h4>
                                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                      {selectedPackage.features.map((feat: string, i: number) => (
                                        <li key={i} className="flex items-center text-sm text-gray-700">
                                          <CheckCircle2 size={18} className="text-green-500 mr-2" />
                                          {feat}
                                        </li>
                                      ))}
                                    </ul>
                                  </div>

                                  <div className="flex flex-col sm:flex-row gap-4 pt-4">
                                    <Button 
                                      className="flex-1 bg-[#25D366] hover:bg-[#1ebe57] gap-2 h-14 text-lg font-bold shadow-lg"
                                      onClick={() => handleInquiry('whatsapp', selectedPackage)}
                                    >
                                      <MessageCircle size={22} /> Inquire via WhatsApp
                                    </Button>
                                    <Button 
                                      variant="outline"
                                      className="flex-1 border-gray-300 gap-2 h-14 text-lg font-bold"
                                      onClick={() => handleInquiry('email', selectedPackage)}
                                    >
                                      <Mail size={22} /> Email Inquiry
                                    </Button>
                                  </div>
                                </div>
                              </div>
                            </>
                          )}
                        </DialogContent>
                      </Dialog>
                    </div>
                  </Card>
                )
              })}
            </div>
          </div>
        ))}
      </div>
      {/* ... Custom CTA stays the same ... */}
    </main>
  )
}