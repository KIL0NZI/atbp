'use client'

import Link from 'next/link'
import { Facebook, Twitter, Linkedin, Instagram } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
            <div className="w-10 h-10 rounded-lg flex items-center justify-center overflow-hidden">
              <img src="/logo.jpeg" alt="Adlucem Logo" className="object-cover" />
            </div>
            <span className="font-bold text-white text-sm hidden sm:block">
              Adlucem Teambuilding Pros
            </span>
            </div>
            <p className="text-sm text-gray-400">
              Creating unforgettable team experiences since 2020.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-white mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/services" className="hover:text-indigo-400 transition-colors">
                  Indoor Activities
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-indigo-400 transition-colors">
                  Outdoor Adventures
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-indigo-400 transition-colors">
                  Virtual Events
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-indigo-400 transition-colors">
                  Executive Retreats
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="hover:text-indigo-400 transition-colors">
                  About Us
                </Link>
              </li>
              {/* <li>
                <Link href="#" className="hover:text-indigo-400 transition-colors">
                  Careers
                </Link>
              </li> */}
              {/* <li>
                <Link href="#" className="hover:text-indigo-400 transition-colors">
                  Blog
                </Link>
              </li> */}
              <li>
                <Link href="/contact" className="hover:text-indigo-400 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white mb-4">Connect</h4>
            <div className="flex gap-4">
              <Link href="https://www.facebook.com/share/1DBTD41ZGe/" target='_' className="hover:text-indigo-400 transition-colors">
                <Facebook size={20} />
              </Link>
              <Link href="https://www.facebook.com/share/1DBTD41ZGe/" target='_' className="hover:text-indigo-400 transition-colors">
                <Twitter size={20} />
              </Link>
              {/* <Link href="#" className="hover:text-indigo-400 transition-colors">
                <Linkedin size={20} />
              </Link> */}
              <Link href="https://www.threads.com/@adlucem_teambuilding_pros" target='_' className="hover:text-indigo-400 transition-colors">
                <Instagram size={20} />
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm">
          <p className="text-gray-400">
            &copy; 2026 Adlucem Teambuilding Pros. All rights reserved.
          </p>
          {/* <div className="flex gap-6 mt-4 md:mt-0">
            <Link href="#" className="hover:text-indigo-400 transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-indigo-400 transition-colors">
              Terms of Service
            </Link>
          </div> */}
        </div>
      </div>
    </footer>
  )
}
