'use client'

import { Badge } from '@/components/ui/badge'
import { MapPin, Mail, Building2, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

const venueRegions = [
    {
        region: "Nairobi & Coast",
        regionImage: "/l3.jpg",
        venues: [
            { name: "Botanical Gardens", location: "Nairobi", highlights: "Lush Greenery in the City" },
            { name: "Stedmark Gardens", location: "Nairobi", highlights: "Unique Floating Concept" },
            { name: "Oak Place", location: "Nairobi", highlights: "Executive & Corporate Focus" },
            { name: "Voyager Beach Resort", location: "Mombasa", highlights: "Nautical Themed Beach Resort" },
            { name: "Serena Beach Resort", location: "Mombasa", highlights: "Swahili Style Coastal Luxury" },
            { name: "Nyali International Beach", location: "Mombasa", highlights: "Historic Beachfront Venue" },
        ]
    },

    {
        region: "Naivasha, Nakuru & Elementaita",
        regionImage: "/l1.jpg",
        venues: [
            { name: "Boffar Gardens Naivasha", location: "Naivasha", highlights: "Lush Gardens & Team Building Grounds" },
            { name: "Sentrim Elementaita", location: "Elementaita", highlights: "Lakeside View & Serene Environment" },
            { name: "Serena Elementaita", location: "Elementaita", highlights: "Luxury Lakeside Experience" },
            { name: "Pelican Lodge", location: "Elementaita", highlights: "Panoramic Lake Views" },
            { name: "Sopa Lodge Nakuru", location: "Nakuru", highlights: "Wildlife & Nature Trails" },
            { name: "Lake Naivasha Resort", location: "Naivasha", highlights: "Modern Conference & Team Building" },
            { name: "Sawela Lodges", location: "Naivasha", highlights: "Award-winning Team Building Grounds" },
        ]
    },
    {
        region: "Masai Mara & Amboseli",
        regionImage: "/l4.jpg",
        venues: [
            { name: "AA Lodge Mara", location: "Masai Mara", highlights: "Authentic Safari Experience" },
            { name: "Sentrim Mara", location: "Masai Mara", highlights: "Wilderness & Nature Walks" },
            { name: "Sarova Mara Game Camp", location: "Masai Mara", highlights: "Premium Safari Luxury" },
            { name: "AA Lodge Amboseli", location: "Amboseli", highlights: "Kilimanjaro Views" },
            { name: "Tawi Lodge Amboseli", location: "Amboseli", highlights: "Eco-Friendly Private Conservency" },
            { name: "Sentrim Amboseli", location: "Amboseli", highlights: "Modern Tented Camp" },
        ]
    },
    {
        region: "Nanyuki, Nyeri & Central",
        regionImage: "/l2.jpg",
        venues: [
            { name: "Mt Kenya Leisure Lodge", location: "Narumoru", highlights: "Mountain Climbing & Chill Vibes" },
            { name: "Nanyuki Sportsman Arms", location: "Nanyuki", highlights: "Classic Heritage & Spacious Grounds" },
            { name: "Sagana Getaway Resort", location: "Sagana", highlights: "Quiet & Serene Retreat" },
            { name: "Savage Wilderness Camp", location: "Sagana", highlights: "Rafting & Extreme Team Building" },
            { name: "The Great Sagana Resort", location: "Sagana", highlights: "Large Group Capacity" },
            { name: "Norkras Ravine Sagana", location: "Sagana", highlights: "Scenic Riverfront Views" },
        ]
    },
]

export default function VenuesPage() {
    const WHATSAPP_NUMBER = "254750272602"

    const handleInquiry = (venueName: string, type: 'whatsapp' | 'email') => {
        const message = `Hi Adlucem! I'm interested in booking ${venueName} for a team building event. Could you share more details?`
        if (type === 'whatsapp') {
            window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`, '_blank')
        } else {
            window.location.href = `mailto:hello@adlucem.com?subject=Venue Inquiry: ${venueName}&body=${message}`
        }
    }

    const customInquiry = () => {
        const message = `Hi Adlucem! I'm interested in booking a custom venue for our team building event. Could you share more details?`
        window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`, '_blank')
    }

    return (
        <main className="pt-32 pb-20 px-4 max-w-7xl mx-auto min-h-screen">
            <div className="mb-16 text-center">
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 font-marker uppercase">
                    Partner <span className="text-indigo-600">Venues</span>
                </h1>
                <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                    We partner with over 30 premium locations across Kenya to ensure your team building event is hosted in the perfect environment.
                </p>
            </div>

            <div className="space-y-24">
                {venueRegions.map((section) => (
                    <div key={section.region}>
                        {/* Region Header with Background Image */}
                        <div className="relative h-48 md:h-64 w-full rounded-3xl overflow-hidden mb-8 shadow-md">
                            <img
                                src={section.regionImage}
                                alt={section.region}
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-black/50 flex items-center p-8 md:p-12">
                                <h2 className="text-white text-3xl md:text-4xl font-bold">
                                    {section.region}
                                </h2>
                            </div>
                        </div>

                        {/* Venue List */}
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                            {section.venues.map((venue) => (
                                <div
                                    key={venue.name}
                                    className="p-6 rounded-2xl border border-gray-100 bg-white shadow-sm hover:shadow-md transition-all flex flex-col md:flex-row md:items-center justify-between gap-6"
                                >
                                    <div className="flex gap-4 items-start">
                                        <div className="w-12 h-12 rounded-xl bg-indigo-50 flex items-center justify-center shrink-0">
                                            <Building2 size={24} className="text-indigo-600" />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-gray-900 text-xl">{venue.name}</h3>
                                            <div className="flex items-center gap-2 text-gray-500 text-sm mt-1">
                                                <MapPin size={16} className="text-indigo-400" />
                                                <p>{venue.highlights}</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex flex-col gap-4 w-full md:w-auto md:items-end">
                                        {/* Modern Label with a subtle separator */}
                                        <div className="flex items-center gap-2 md:justify-end">
                                            <span className="h-px w-4 bg-indigo-200 hidden md:block" />
                                            <p className="text-[11px] uppercase tracking-[0.2em] font-bold text-gray-400">
                                                Quick Inquiry
                                            </p>
                                        </div>

                                        <div className="flex gap-3 w-full sm:w-auto">
                                            <Button
                                                onClick={() => handleInquiry(venue.name, 'whatsapp')}
                                                className="flex-1 md:flex-none h-12 px-6 rounded-2xl bg-white border-[1.5px] border-indigo-100 text-gray-700 shadow-sm hover:border-[#25D366] hover:bg-[#25D366]/5 hover:text-[#128c7e] transition-all duration-300 group/wa"
                                            >
                                                <img
                                                    src="https://img.icons8.com/?size=100&id=uZWiLUyryScN&format=png&color=25D366"
                                                    alt="wa"
                                                    className="w-5 h-5 transition-transform group-hover/wa:scale-110"
                                                />
                                                <span className="font-bold">WhatsApp</span>
                                            </Button>

                                            <Button
                                                onClick={() => handleInquiry(venue.name, 'email')}
                                                variant="outline"
                                                className="flex-1 md:flex-none h-12 px-6 rounded-2xl border-[1.5px] border-gray-100 text-gray-700 shadow-sm hover:border-indigo-600 hover:bg-indigo-50 hover:text-indigo-700 transition-all duration-300 group/mail"
                                            >
                                                <Mail size={18} className="text-gray-400 group-hover/mail:text-indigo-600 transition-colors" />
                                                <span className="font-bold">Email</span>
                                            </Button>
                                        </div>
                                    </div>                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>

            {/* Custom Inquiry Footer */}
            <div className="mt-24 text-center bg-gray-50 rounded-[2.5rem] py-16 px-6">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Don't see your preferred location?</h2>
                <p className="text-gray-600 mb-8 max-w-xl mx-auto">
                    We can facilitate events at any venue of your choice across the country.
                </p>
                <Button
                onClick={()=>customInquiry()}
                className="bg-indigo-600 hover:bg-indigo-700 text-white px-10 py-7 text-lg rounded-full font-bold shadow-lg shadow-indigo-200">
                    Request Custom Location
                </Button>
            </div>
        </main>
    )
}