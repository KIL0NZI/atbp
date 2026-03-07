'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Card } from '@/components/ui/card'
import { Mail, Phone, MapPin, Send, MessageSquare } from 'lucide-react'

export default function ContactPage() {
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    // We will plug in the Supabase logic here next!
    setTimeout(() => setLoading(false), 1000)
  }

  return (
    <main className="pt-32 pb-20 px-4 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        
        {/* Left Side: Contact Info */}
        <div className="space-y-8">
          <div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Get in Touch</h1>
            <p className="text-lg text-gray-600">
              Have questions about our team building packages? We're here to help you plan the perfect event.
            </p>
          </div>

          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center shrink-0">
                <Phone className="text-indigo-600" size={24} />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Call Us</h3>
                <p className="text-gray-600">+254 750 272602</p>
                <p className="text-sm text-gray-500">Mon-Fri, 8am - 5pm</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center shrink-0">
                <Mail className="text-indigo-600" size={24} />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Email Us</h3>
                <p className="text-gray-600">info@adlucem.com</p>
                <p className="text-sm text-gray-500">We respond within 24 hours</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center shrink-0">
                <MapPin className="text-indigo-600" size={24} />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Office</h3>
                <p className="text-gray-600">Nairobi, Kenya</p>
                <p className="text-sm text-gray-500">Westlands Business District</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Contact Form */}
        <Card className="p-6 md:p-8 border-gray-200 shadow-lg">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">Full Name</label>
                <Input placeholder="John Doe" required />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Email Address</label>
                <Input type="email" placeholder="john@company.com" required />
              </div>
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-medium">Subject</label>
              <Input placeholder="How can we help?" />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Message</label>
              <Textarea 
                placeholder="Tell us a bit about your team or your inquiry..." 
                className="min-h-[150px]"
                required
              />
            </div>

            <Button 
              type="submit" 
              className="w-full bg-indigo-600 hover:bg-indigo-700 h-12 text-lg"
              disabled={loading}
            >
              {loading ? "Sending..." : "Send Message"}
              <Send size={18} className="ml-2" />
            </Button>
          </form>
        </Card>

      </div>
    </main>
  )
}