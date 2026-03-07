'use client'

import Link from 'next/link'
import { useState } from 'react'
import { usePathname } from 'next/navigation' // Added this
import { Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils' // Useful for conditional classes


export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname() // Get current path

  // Helper to check if a link is active
  const isActive = (path: string) => pathname === path

  const navLinks = [
    { name: 'Services', href: '/services' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Venues', href: '/venues' },
    { name: 'About', href: '/#about' },
    { name: 'Testimonials', href: '/#testimonials' },
    { name: 'Contact US', href: '/contact' },

  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-lg flex items-center justify-center overflow-hidden">
              <img src="/logo.jpeg" alt="Adlucem Logo" className="object-cover" />
            </div>
            <span className="font-marker font-bold text-gray-900 hover:text-blue-800 text-sm hidden sm:block">
              Adlucem Teambuilding Pros
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-indigo-600",
                  isActive(link.href) 
                    ? "text-indigo-600 border-b-2 border-indigo-600 pb-1 mt-1" 
                    : "text-gray-600"
                )}
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-3">
            <Button className="bg-indigo-600 hover:bg-indigo-700">
              Request a Quote
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-gray-600 hover:text-gray-900"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-3 border-t border-gray-200 bg-white">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={cn(
                  "block px-4 py-2 text-base font-medium rounded-lg",
                  isActive(link.href)
                    ? "text-indigo-600 bg-indigo-50"
                    : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                )}
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <div className="flex gap-2 px-4 pt-2">
              {/* <Link href="/dashboard" className="flex-1" onClick={() => setIsOpen(false)}>
                <Button variant="outline" className="w-full border-gray-300">
                  Dashboard
                </Button>
              </Link> */}
              <Button className="flex-1 bg-indigo-600 hover:bg-indigo-700">
                Quote
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}