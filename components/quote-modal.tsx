'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import emailjs from '@emailjs/browser'
import { toast } from 'sonner'
import {
  Dialog, DialogContent, DialogHeader,
  DialogTitle, DialogDescription, DialogTrigger
} from '@/components/ui/dialog'
import {
  Select, SelectContent, SelectItem, SelectTrigger, SelectValue
} from "@/components/ui/select"
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Mail, Loader2 } from 'lucide-react'

const formSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Valid phone number is required"),
  company: z.string().min(2, "Company name is required"),
  teamSize: z.string().min(1, "Approximate size is needed"),
  location: z.string().min(1, "Please select a location"),
  eventDate: z.string().optional(),
  notes: z.string().optional(),
})

type FormData = z.infer<typeof formSchema>

export function QuoteModal({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false)
  const [isSending, setIsSending] = useState(false)
  
  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      company: "",
      teamSize: "",
      location: "",
      eventDate: "",
      notes: ""
    }
  })

  const WHATSAPP_NUMBER = "254701256008"

  const onSubmit = async (data: FormData, platform: 'whatsapp' | 'email') => {
    // WhatsApp Message Formatting
    const waMessage = `*New Quote Request*%0A` +
      `*Name:* ${data.name}%0A` +
      `*Email:* ${data.email}%0A` +
      `*Phone:* ${data.phone}%0A` +
      `*Company:* ${data.company}%0A` +
      `*Team Size:* ${data.teamSize}%0A` +
      `*Location:* ${data.location}%0A` +
      `*Date:* ${data.eventDate || 'TBD'}%0A` +
      `*Notes:* ${data.notes || 'None'}`

    if (platform === 'whatsapp') {
      window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${waMessage}`, '_blank')
      setOpen(false)
      form.reset()
    } else {
      setIsSending(true)
      try {
        await emailjs.send(
          process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
          process.env.NEXT_PUBLIC_EMAILJS_MODAL_TEMPLATE_ID!,
          {
            name: data.name,           // Maps to {{name}}
            email: data.email,         // Maps to {{email}}
            phone: data.phone,         // Maps to {{phone}}
            company: data.company,     // Maps to {{company}}
            team_size: data.teamSize,  // Maps to {{team_size}}
            location: data.location,   // Maps to {{location}}
            event_date: data.eventDate || 'TBD',
            message: data.notes || 'No extra notes provided',
          },
          process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
        )

        toast.success("Quote request sent to Joseph's inbox!")
        form.reset()
        setOpen(false)
      } catch (error) {
        toast.error("Failed to send email. Please use WhatsApp.")
        console.error("EmailJS Error:", error)
      } finally {
        setIsSending(false)
      }
    }
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px] rounded-[2rem] max-h-[90vh] overflow-y-auto border-none shadow-2xl">
        <DialogHeader>
          <DialogTitle className="text-3xl font-bold font-marker uppercase tracking-wide">
            Get a <span className="text-indigo-600">Quote</span>
          </DialogTitle>
          <DialogDescription className="text-gray-500">
            Fill in the details below. We'll help you plan a session that transforms your team.
          </DialogDescription>
        </DialogHeader>

        <form className="space-y-4 mt-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label className="text-xs font-bold uppercase tracking-widest text-gray-400" htmlFor="name">Full Name</Label>
              <Input id="name" placeholder="e.g. Jane Doe" className="rounded-xl h-11" {...form.register('name')} />
              {form.formState.errors.name && <p className="text-xs text-red-500">{form.formState.errors.name.message}</p>}
            </div>
            <div className="space-y-2">
              <Label className="text-xs font-bold uppercase tracking-widest text-gray-400" htmlFor="phone">Phone Number</Label>
              <Input id="phone" type="tel" placeholder="0712 345 678" className="rounded-xl h-11" {...form.register('phone')} />
              {form.formState.errors.phone && <p className="text-xs text-red-500">{form.formState.errors.phone.message}</p>}
            </div>
          </div>

          <div className="space-y-2">
            <Label className="text-xs font-bold uppercase tracking-widest text-gray-400" htmlFor="email">Work Email</Label>
            <Input id="email" type="email" placeholder="hr@company.co.ke" className="rounded-xl h-11" {...form.register('email')} />
            {form.formState.errors.email && <p className="text-xs text-red-500">{form.formState.errors.email.message}</p>}
          </div>

          <div className="space-y-2">
            <Label className="text-xs font-bold uppercase tracking-widest text-gray-400" htmlFor="company">Organization Name</Label>
            <Input id="company" placeholder="e.g. Safaricom PLC" className="rounded-xl h-11" {...form.register('company')} />
            {form.formState.errors.company && <p className="text-xs text-red-500">{form.formState.errors.company.message}</p>}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label className="text-xs font-bold uppercase tracking-widest text-gray-400" htmlFor="teamSize">Approx. Team Size</Label>
              <Input id="teamSize" type="number" placeholder="50" className="rounded-xl h-11" {...form.register('teamSize')} />
            </div>
            <div className="space-y-2">
              <Label className="text-xs font-bold uppercase tracking-widest text-gray-400" htmlFor="eventDate">Preferred Date</Label>
              <Input id="eventDate" type="date" className="rounded-xl h-11" {...form.register('eventDate')} />
            </div>
          </div>

          <div className="space-y-2">
            <Label className="text-xs font-bold uppercase tracking-widest text-gray-400">Preferred Location</Label>
            <Select onValueChange={(value) => form.setValue('location', value)}>
              <SelectTrigger className="w-full rounded-xl h-11">
                <SelectValue placeholder="Select a region" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Nairobi">Nairobi</SelectItem>
                <SelectItem value="Coast (Mombasa, Diani, Watamu)">Coast (Mombasa, Diani, Watamu)</SelectItem>
                <SelectItem value="Naivasha, Nakuru & Elementaita">Naivasha, Nakuru & Elementaita</SelectItem>
                <SelectItem value="Masai Mara & Amboseli">Masai Mara & Amboseli</SelectItem>
                <SelectItem value="Nanyuki, Nyeri & Central">Nanyuki, Nyeri & Central</SelectItem>
                <SelectItem value="Other / Virtual">Other / Virtual</SelectItem>
              </SelectContent>
            </Select>
            {form.formState.errors.location && <p className="text-xs text-red-500">{form.formState.errors.location.message}</p>}
          </div>

          <div className="space-y-2">
            <Label className="text-xs font-bold uppercase tracking-widest text-gray-400" htmlFor="notes">Specific Goals</Label>
            <Textarea id="notes" placeholder="e.g. Focus on leadership and mental wellness..." className="rounded-xl min-h-[80px]" {...form.register('notes')} />
          </div>

          <div className="flex flex-col gap-3 pt-4">
            <Button
              type="button"
              disabled={isSending}
              className="bg-[#25D366] hover:bg-[#1ebe57] text-white h-14 rounded-2xl font-bold gap-3 shadow-lg shadow-green-100 transition-all active:scale-95"
              onClick={form.handleSubmit((data) => onSubmit(data, 'whatsapp'))}
            >
              <img src="https://img.icons8.com/?size=100&id=uZWiLUyryScN&format=png&color=ffffff" alt="wa" className="w-6 h-6" />
              Request via WhatsApp
            </Button>
            
            <Button
              type="button"
              variant="outline"
              disabled={isSending}
              className="h-14 rounded-2xl font-bold gap-3 border-2 border-gray-100 hover:border-indigo-600 hover:text-indigo-600 transition-all"
              onClick={form.handleSubmit((data) => onSubmit(data, 'email'))}
            >
              {isSending ? (
                <Loader2 className="animate-spin" size={20} />
              ) : (
                <Mail size={20} />
              )}
              {isSending ? "Sending Quote..." : "Request via Email"}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  )
}