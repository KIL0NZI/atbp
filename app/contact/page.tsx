'use client'

import { useState } from 'react'
import emailjs from '@emailjs/browser'
import { toast } from 'sonner'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Card } from '@/components/ui/card'
import { Mail, Phone, MapPin, Send, MessageCircle } from 'lucide-react'

export default function ContactPage() {
  const [loading, setLoading] = useState(false)

  const WHATSAPP_NUMBER = "254701256008" //

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setLoading(true)

    // 1. Capture the form reference immediately before any "await"
    const form = e.currentTarget
    const formData = new FormData(form)

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        {
          name: formData.get('user_name'),
          email: formData.get('user_email'),
          title: formData.get('subject'),
          message: formData.get('message'),
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      )

      toast.success("Message sent! Joseph will get back to you soon.")

      // 2. Use the captured reference to reset the form
      form.reset()
    } catch (error) {
      toast.error("Failed to send. Please try calling or WhatsApp.")
      console.error("Contact Error:", error)
    } finally {
      setLoading(false)
    }
  }
  const openWhatsApp = () => {
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=Hi Adlucem! I have an inquiry...`, '_blank')
  }

  return (
    <main className="pt-32 pb-20 px-4 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

        {/* Left Side: Contact Info */}
        <div className="space-y-8">
          <div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4 font-marker uppercase">Get in <span className="text-indigo-600">Touch</span></h1>
            <p className="text-lg text-gray-600">
              Have questions about our team building packages? We're here to help you plan the perfect event.
            </p>
          </div>

          <div className="space-y-6">
            <div className="flex items-start gap-4 p-4 rounded-2xl hover:bg-gray-50 transition-colors group">
              <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center shrink-0 group-hover:bg-indigo-600 transition-colors">
                <Phone className="text-indigo-600 group-hover:text-white" size={24} />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Call Us</h3>
                <p className="text-gray-600">+254 713 036 523</p>
                <p className="text-gray-600">+254 750 272 602</p>
                <p className="text-sm text-gray-500">Mon-Sat, 8am - 5pm</p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 rounded-2xl hover:bg-gray-50 transition-colors group">
              <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center shrink-0 group-hover:bg-indigo-600 transition-colors">
                <Mail className="text-indigo-600 group-hover:text-white" size={24} />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Email Us</h3>
                <p className="text-gray-600">adlucemteambuildingpros@gmail.com</p>
                <p className="text-sm text-gray-500">We respond within 24 hours</p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 rounded-2xl hover:bg-gray-50 transition-colors group">
              <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center shrink-0 group-hover:bg-indigo-600 transition-colors">
                <MapPin className="text-indigo-600 group-hover:text-white" size={24} />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Office</h3>
                <p className="text-gray-600 uppercase font-bold text-sm tracking-widest">Ruiru, Nairobi, Kenya</p>
              </div>
            </div>
          </div>

          <div className="pt-6">
            <Button
              onClick={openWhatsApp}
              className="bg-[#25D366] hover:bg-[#1ebe57] text-white rounded-2xl px-8 h-14 font-bold gap-2 shadow-lg shadow-green-100"
            >
              <img
                src="https://img.icons8.com/?size=100&id=uZWiLUyryScN&format=png&color=25D366"
                alt="wa"
                className="w-5 h-5 transition-transform group-hover/wa:scale-110"
              />

              Chat on WhatsApp
            </Button>
          </div>
        </div>

        {/* Right Side: Contact Form */}
        <Card className="p-6 md:p-8 border-none shadow-[0_20px_50px_rgba(0,0,0,0.05)] rounded-[2rem]">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-gray-400">Full Name</label>
                <Input name="user_name" placeholder="John Doe" className="h-12 rounded-xl" required />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-gray-400">Email Address</label>
                <Input name="user_email" type="email" placeholder="john@company.com" className="h-12 rounded-xl" required />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-gray-400">Subject</label>
              <Input name="subject" placeholder="e.g. Corporate Training Inquiry" className="h-12 rounded-xl" />
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-gray-400">Message</label>
              <Textarea
                name="message"
                placeholder="How can we help you?"
                className="min-h-[150px] rounded-xl pt-4"
                required
              />
            </div>

            <Button
              type="submit"
              className="w-full bg-indigo-600 hover:bg-indigo-700 h-14 text-lg font-bold rounded-2xl shadow-lg shadow-indigo-100 transition-all active:scale-95"
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