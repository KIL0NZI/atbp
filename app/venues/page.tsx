'use client'

import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { MapPin, MessageCircle, ExternalLink } from 'lucide-react'
import { Button } from '@/components/ui/button'

const venueRegions = [
    {
        region: "Naivasha, Nakuru & Elementaita",
        venues: [
            { name: "Boffar Gardens Naivasha", location: "Naivasha", highlights: "Lush Gardens & Team Building Grounds", image: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?q=80&w=800" },
            { name: "Sentrim Elementaita", location: "Elementaita", highlights: "Lakeside View & Serene Environment", image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=800" },
            { name: "Serena Elementaita", location: "Elementaita", highlights: "Luxury Lakeside Experience", image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=800" },
            { name: "Pelican Lodge", location: "Elementaita", highlights: "Panoramic Lake Views", image: "https://images.unsplash.com/photo-1540541338287-41700207dee6?q=80&w=800" },
            { name: "Sopa Lodge Nakuru", location: "Nakuru", highlights: "Wildlife & Nature Trails", image: "https://images.unsplash.com/photo-1516422317582-c4a0946b9658?q=80&w=800" },
            { name: "Lake Naivasha Resort", location: "Naivasha", highlights: "Modern Conference & Team Building", image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=800" },
            { name: "Sawela Lodges", location: "Naivasha", highlights: "Award-winning Team Building Grounds", image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=800" },
        ]
    },
    {
        region: "Masai Mara & Amboseli",
        venues: [
            { name: "AA Lodge Mara", location: "Masai Mara", highlights: "Authentic Safari Experience", image: "https://images.unsplash.com/photo-1493246507139-91e8bef99c02?q=80&w=800" },
            { name: "Sentrim Mara", location: "Masai Mara", highlights: "Wilderness & Nature Walks", image: "https://images.unsplash.com/photo-1516422317582-c4a0946b9658?q=80&w=800" },
            { name: "Sarova Mara Game Camp", location: "Masai Mara", highlights: "Premium Safari Luxury", image: "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?q=80&w=800" },
            { name: "AA Lodge Amboseli", location: "Amboseli", highlights: "Kilimanjaro Views", image: "https://images.unsplash.com/photo-1511497584788-876760111969?q=80&w=800" },
            { name: "Tawi Lodge Amboseli", location: "Amboseli", highlights: "Eco-Friendly Private Conservency", image: "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?q=80&w=800" },
            { name: "Sentrim Amboseli", location: "Amboseli", highlights: "Modern Tented Camp", image: "https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?q=80&w=800" },
        ]
    },
    {
        region: "Nanyuki, Nyeri & Central",
        venues: [
            { name: "Mt Kenya Leisure Lodge", location: "Narumoru", highlights: "Mountain Climbing & Chill Vibes", image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=800" },
            { name: "Nanyuki Sportsman Arms", location: "Nanyuki", highlights: "Classic Heritage & Spacious Grounds", image: "https://images.unsplash.com/photo-1566665797739-1674de7a421a?q=80&w=800" },
            { name: "Sagana Getaway Resort", location: "Sagana", highlights: "Quiet & Serene Retreat", image: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?q=80&w=800" },
            { name: "Savage Wilderness Camp", location: "Sagana", highlights: "Rafting & Extreme Team Building", image: "https://images.unsplash.com/photo-1533512930330-4ac257c86793?q=80&w=800" },
            { name: "The Great Sagana Resort", location: "Sagana", highlights: "Large Group Capacity", image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=800" },
            { name: "Norkras Ravine Sagana", location: "Sagana", highlights: "Scenic Riverfront Views", image: "https://images.unsplash.com/photo-1437719417032-8595fd9e9dc6?q=80&w=800" },
        ]
    },
    {
        region: "Nairobi & Coast",
        venues: [
            { name: "Botanical Gardens", location: "Nairobi", highlights: "Lush Greenery in the City", image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=800" },
            { name: "Stedmark Gardens", location: "Nairobi", highlights: "Unique Floating Concept", image: "https://images.unsplash.com/photo-1519331379826-f10be5486c6f?q=80&w=800" },
            { name: "Oak Place", location: "Nairobi", highlights: "Executive & Corporate Focus", image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=800" },
            { name: "Voyager Beach Resort", location: "Mombasa", highlights: "Nautical Themed Beach Resort", image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=800" },
            { name: "Serena Beach Resort", location: "Mombasa", highlights: "Swahili Style Coastal Luxury", image: "https://images.unsplash.com/photo-1544124499-58912cbddada?q=80&w=800" },
            { name: "Nyali International Beach", location: "Mombasa", highlights: "Historic Beachfront Venue", image: "https://images.unsplash.com/photo-1506929199175-014bbc17ae41?q=80&w=800" },
        ]
    }
]

export default function VenuesPage() {
    const WHATSAPP_NUMBER = "254701256008"

    const openWhatsApp = (venueName: string) => {
        // 2. Create the message
        const message = `Hi Adlucem! I'm interested in booking ${venueName} for a team building event. Could you share more details?`

        // 3. Encode the message to handle spaces and special characters
        const encodedMessage = encodeURIComponent(message)

        // 4. Open the link
        window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`, '_blank')
    }
    return (
        <main className="pt-32 pb-20 px-4 max-w-7xl mx-auto min-h-screen">
            <div className="mb-16 text-center">
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                    Our Premium <span className="text-indigo-600">Venues</span>
                </h1>
                <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                    We’ve curated the best spots across Kenya—from the shores of the Indian Ocean to the slopes of Mt. Kenya.
                </p>
            </div>

            <div className="space-y-20">
                {venueRegions.map((section) => (
                    <div key={section.region} className="space-y-8">
                        <div className="flex items-center gap-6">
                            <h2 className="text-2xl font-bold text-gray-900 whitespace-nowrap">{section.region}</h2>
                            <div className="h-[2px] bg-gradient-to-r from-indigo-600 to-transparent w-full opacity-20" />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {section.venues.map((venue) => (
                                <Card key={venue.name} className="overflow-hidden border-none shadow-md hover:shadow-xl transition-all duration-300 flex flex-col group bg-white">
                                    <div className="h-56 overflow-hidden relative">
                                        <img
                                            src={venue.image}
                                            alt={venue.name}
                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                        />
                                        <div className="absolute top-4 right-4">
                                            <Badge className="bg-white/95 text-indigo-700 font-semibold shadow-sm border-none">
                                                {venue.location}
                                            </Badge>
                                        </div>
                                    </div>

                                    <CardContent className="p-6 flex flex-col flex-1">
                                        <div className="flex-1 mb-6">
                                            <h3 className="font-bold text-gray-900 text-xl mb-2 group-hover:text-indigo-600 transition-colors">
                                                {venue.name}
                                            </h3>
                                            <div className="flex items-start gap-2 text-gray-500 text-sm">
                                                <MapPin size={16} className="text-indigo-500 shrink-0 mt-0.5" />
                                                <p>{venue.highlights}</p>
                                            </div>
                                        </div>

                                        <Button
                                            onClick={() => openWhatsApp(venue.name)}
                                            className="w-full bg-white border-2 hover:border-[#1ebe57] border-indigo-500 hover:bg-[#1ebe57] text-indigo-600 hover:text-white font-bold h-12 gap-2 shadow-sm rounded-xl transform transition-transform active:scale-95"
                                        >
                                            <img src="https://img.icons8.com/?size=100&id=uZWiLUyryScN&format=png&color=000000" alt="whatsapp_icon" className="w-6 h-6" />
                                            Inquire about venue
                                        </Button>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>
                ))}
            </div>

            {/* Quick Contact Footer */}
            <div className="mt-24 border-t pt-12 text-center">
                <p className="text-gray-500 mb-4">Don't see your preferred venue?</p>
                <Button variant="outline" className="border-indigo-600 text-indigo-600 hover:bg-indigo-50 px-8 py-6 rounded-2xl font-bold">
                    Request a Custom Location Inquiry
                </Button>
            </div>
        </main>
    )
}