'use client'

import { useState } from 'react'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

const categories = ['All', 'Outdoor', 'Corporate', 'Indoor', 'Kids']

const galleryItems = [
  { id: 1, category: 'Indoor', title: 'adlucem team building', image: '/1.jpg' },
  { id: 2, category: 'Outdoor', title: 'adlucem team building', image: '/2.jpg' },
  { id: 3, category: 'Outdoor', title: 'adlucem team building', image: '/3.jpg' },
  { id: 4, category: 'Outdoor', title: 'adlucem team building', image: '/4.jpg' },
  { id: 5, category: 'Outdoor', title: 'adlucem team building', image: '/5.jpg' },
  { id: 6, category: 'Indoor', title: 'adlucem team building', image: '/6.jpg' },
  { id: 7, category: 'Indoor', title: 'adlucem team building', image: '/7.jpg' },
  { id: 8, category: 'Corporate', title: 'adlucem team building', image: '/8.jpg' },
  { id: 9, category: 'Outdoor', title: 'adlucem team building', image: '/9.jpg' },
  { id: 10, category: 'Outdoor', title: 'adlucem team building', image: '/10.jpg' },
  { id: 11, category: 'Outdoor', title: 'adlucem team building', image: '/11.jpg' },
  { id: 12, category: 'Outdoor', title: 'adlucem team building', image: '/12.jpg' },
  { id: 13, category: 'Outdoor', title: 'adlucem team building', image: '/13.jpg' },
  { id: 14, category: 'Outdoor', title: 'adlucem team building', image: '/14.jpg' },
  { id: 15, category: 'Outdoor', title: 'adlucem team building', image: '/15.jpg' },
  { id: 16, category: 'Outdoor', title: 'adlucem team building', image: '/16.jpg' },
  { id: 17, category: 'Outdoor', title: 'adlucem team building', image: '/17.jpg' },
  { id: 18, category: 'Outdoor', title: 'adlucem team building', image: '/18.jpg' },
  { id: 19, category: 'Outdoor', title: 'adlucem team building', image: '/19.jpg' },
  { id: 20, category: 'Outdoor', title: 'adlucem team building', image: '/20.jpg' },
  { id: 21, category: 'Outdoor', title: 'adlucem team building', image: '/21.jpg' },
  { id: 22, category: 'Outdoor', title: 'adlucem team building', image: '/22.jpg' },
  { id: 23, category: 'Outdoor', title: 'adlucem team building', image: '/23.jpg' },
  { id: 24, category: 'Outdoor', title: 'adlucem team building', image: '/24.jpg' },
  { id: 25, category: 'Outdoor', title: 'adlucem team building', image: '/25.jpg' },
  { id: 26, category: 'Outdoor', title: 'adlucem team building', image: '/26.jpg' },
  { id: 27, category: 'Outdoor', title: 'adlucem team building', image: '/27.jpg' },
  { id: 28, category: 'Outdoor', title: 'adlucem team building', image: '/28.jpg' },
  { id: 29, category: 'Outdoor', title: 'adlucem team building', image: '/29.jpg' },
  { id: 30, category: 'Outdoor', title: 'adlucem team building', image: '/30.jpg' },
  { id: 31, category: 'Kids', title: 'adlucem team building', image: '/31.jpg' },
  { id: 32, category: 'Outdoor', title: 'adlucem team building', image: '/32.jpg' },
  { id: 33, category: 'Outdoor', title: 'adlucem team building', image: '/33.jpg' },
  { id: 34, category: 'Outdoor', title: 'adlucem team building', image: '/34.jpg' },
  { id: 35, category: 'Outdoor', title: 'adlucem team building', image: '/35.jpg' },
  { id: 36, category: 'Outdoor', title: 'adlucem team building', image: '/36.jpg' },
  { id: 37, category: 'Outdoor', title: 'adlucem team building', image: '/37.jpg' },
  { id: 38, category: 'Outdoor', title: 'adlucem team building', image: '/38.jpg' },
  { id: 39, category: 'Outdoor', title: 'adlucem team building', image: '/39.jpg' },
  { id: 40, category: 'Outdoor', title: 'adlucem team building', image: '/40.jpg' },
  { id: 41, category: 'Outdoor', title: 'adlucem team building', image: '/41.jpg' },
  { id: 42, category: 'Outdoor', title: 'adlucem team building', image: '/42.jpg' },
  { id: 43, category: 'Outdoor', title: 'adlucem team building', image: '/43.jpg' },
  { id: 44, category: 'Outdoor', title: 'adlucem team building', image: '/44.jpg' },
  { id: 45, category: 'Outdoor', title: 'adlucem team building', image: '/45.jpg' },

]

export default function GalleryPage() {
  const [filter, setFilter] = useState('All')

  const filteredItems = filter === 'All' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === filter)

  return (
    <main className="pt-32 pb-20 px-4 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Our Memories</h1>
        <p className="text-gray-600">See how we've helped teams grow across the country.</p>
        
        <div className="flex flex-wrap justify-center gap-2 mt-8">
          {categories.map(cat => (
            <Badge 
              key={cat}
              className={`cursor-pointer px-4 py-1.5 text-sm ${filter === cat ? 'bg-indigo-600' : 'bg-gray-100 text-gray-700'}`}
              onClick={() => setFilter(cat)}
            >
              {cat}
            </Badge>
          ))}
        </div>
      </div>

      <div className="columns-1 md:columns-2 lg:columns-3 gap-4 space-y-4">
        {filteredItems.map((item) => (
          <Card key={item.id} className="break-inside-avoid overflow-hidden group relative border-none">
            <img 
              src={item.image} 
              alt={item.title} 
              className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
              <p className="text-white font-medium">{item.id.toString()}</p>
            </div>
          </Card>
        ))}
      </div>
    </main>
  )
}