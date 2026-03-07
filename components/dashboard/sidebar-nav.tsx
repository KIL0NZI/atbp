'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { LayoutDashboard, Package, Inbox, LogOut } from 'lucide-react'
import { cn } from '@/lib/utils'

const navItems = [
  {
    label: 'Overview',
    href: '/dashboard',
    icon: LayoutDashboard,
  },
  {
    label: 'Packages',
    href: '/dashboard/packages',
    icon: Package,
  },
  {
    label: 'Inquiries',
    href: '/dashboard/inquiries',
    icon: Inbox,
  },
]

export function SidebarNav() {
  const pathname = usePathname()

  return (
    <aside className="hidden md:flex fixed left-0 top-0 h-screen w-64 bg-gray-900 text-gray-100 flex-col border-r border-gray-800">
      <div className="p-6 border-b border-gray-800">
        <Link href="/dashboard" className="flex items-center gap-3">
          <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm">TB</span>
          </div>
          <div>
            <p className="font-bold text-white">Team Build</p>
            <p className="text-xs text-gray-400">Admin Panel</p>
          </div>
        </Link>
      </div>

      <nav className="flex-1 overflow-y-auto px-4 py-6 space-y-2">
        {navItems.map((item) => {
          const Icon = item.icon
          const isActive = pathname === item.href
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                'flex items-center gap-3 px-4 py-3 rounded-lg transition-colors',
                isActive
                  ? 'bg-indigo-600 text-white'
                  : 'text-gray-400 hover:text-gray-200 hover:bg-gray-800'
              )}
            >
              <Icon size={20} />
              <span className="font-medium">{item.label}</span>
            </Link>
          )
        })}
      </nav>

      <div className="p-4 border-t border-gray-800">
        <Link
          href="/"
          className="flex items-center gap-3 px-4 py-3 text-gray-400 hover:text-gray-200 hover:bg-gray-800 rounded-lg transition-colors"
        >
          <LogOut size={20} />
          <span className="font-medium">Back to Website</span>
        </Link>
      </div>
    </aside>
  )
}
