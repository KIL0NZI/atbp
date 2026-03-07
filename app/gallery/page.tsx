'use client'

'use client'

import { useState } from 'react'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button' // Import Button component
import { ChevronDown } from 'lucide-react'
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
  const [visibleItems, setVisibleItems] = useState(12)

  const filteredItems = filter === 'All' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === filter)

  const loadMore = () => setVisibleItems(prev => prev + 12)

  const handleFilterChange = (cat: string) => {
    setFilter(cat)
    setVisibleItems(12)
  }

  return (
    <main className="pt-24 md:pt-32 pb-20 px-4 max-w-7xl mx-auto min-h-screen">
      <div className="text-center mb-10 md:mb-16">
        <h1 className="text-3xl md:text-6xl font-bold mb-4 font-marker uppercase tracking-wide">
          Our <span className="text-indigo-600">Memories</span>
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto text-base md:text-lg px-2">
          A glimpse into the energy and transformation we bring to teams across Kenya.
        </p>
        
        {/* Scrollable filter for better mobile UX */}
        <div className="flex overflow-x-auto pb-4 md:pb-0 md:flex-wrap justify-start md:justify-center gap-2 mt-8 no-scrollbar">
          {categories.map(cat => (
            <Badge 
              key={cat}
              className={`cursor-pointer whitespace-nowrap px-5 py-2 text-sm transition-all shadow-sm border-none shrink-0 ${
                filter === cat 
                  ? 'bg-indigo-600 text-white' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
              onClick={() => handleFilterChange(cat)}
            >
              {cat}
            </Badge>
          ))}
        </div>
      </div>

      {/* Grid Fix: Using Grid instead of Columns for more stability on mobile */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        {filteredItems.slice(0, visibleItems).map((item) => (
          <Card key={item.id} className="overflow-hidden group relative border-none rounded-2xl shadow-md aspect-[4/5] sm:aspect-square lg:aspect-[4/5]">
            <img 
              src={item.image} 
              alt={item.title} 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              loading="lazy"
            />
            
            {/* Mobile-Friendly Badge: Always visible on small screens, part of hover on large */}
            <div className="absolute top-3 left-3 md:hidden">
                <Badge className="bg-black/50 backdrop-blur-md text-white border-none text-[10px] uppercase tracking-widest">
                    {item.category}
                </Badge>
            </div>

            {/* Desktop Hover Overlay */}
            <div className="hidden md:flex absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex-col justify-end p-6">
              <p className="text-white font-marker text-xl">Adlucem Experience</p>
              <Badge className="w-fit bg-indigo-500 text-white border-none mt-2">
                {item.category}
              </Badge>
            </div>
          </Card>
        ))}
      </div>

      {/* Load More Section */}
      {visibleItems < filteredItems.length && (
        <div className="mt-12 md:mt-20 text-center">
          <Button 
            onClick={loadMore}
            className="w-full md:w-auto bg-white border-2 border-indigo-600 text-indigo-600 hover:bg-indigo-600 hover:text-white px-10 py-7 rounded-2xl md:rounded-full font-bold text-lg transition-all group shadow-md"
          >
            See More Memories
            <ChevronDown className="ml-2 group-hover:translate-y-1 transition-transform" size={20} />
          </Button>
          <p className="mt-4 text-xs md:text-sm text-gray-400">
            Showing {Math.min(visibleItems, filteredItems.length)} of {filteredItems.length} photos
          </p>
        </div>
      )}
    </main>
  )
}