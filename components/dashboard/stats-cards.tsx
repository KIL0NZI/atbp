'use client'

import { Card } from '@/components/ui/card'
import { TrendingUp, MessageSquare, Package, Award } from 'lucide-react'

export function StatsCards({ inquiries, packages }: { inquiries: any[], packages: any[] }) {
  const totalInquiries = inquiries.length
  const pendingInquiries = inquiries.filter(i => i.status === 'Pending').length
  const totalPackages = packages.length
  const bookedCount = inquiries.filter(i => i.status === 'Booked').length

  const stats = [
    {
      label: 'Total Inquiries',
      value: totalInquiries,
      icon: MessageSquare,
      color: 'bg-blue-100',
      textColor: 'text-blue-600',
    },
    {
      label: 'Pending Review',
      value: pendingInquiries,
      icon: TrendingUp,
      color: 'bg-yellow-100',
      textColor: 'text-yellow-600',
    },
    {
      label: 'Active Packages',
      value: totalPackages,
      icon: Package,
      color: 'bg-indigo-100',
      textColor: 'text-indigo-600',
    },
    {
      label: 'Confirmed Bookings',
      value: bookedCount,
      icon: Award,
      color: 'bg-green-100',
      textColor: 'text-green-600',
    },
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat, idx) => {
        const Icon = stat.icon
        return (
          <Card key={idx} className="p-6 border-gray-200">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">{stat.label}</p>
                <p className="text-3xl font-bold text-gray-900 mt-2">
                  {stat.value}
                </p>
              </div>
              <div className={`${stat.color} p-3 rounded-lg`}>
                <Icon size={24} className={stat.textColor} />
              </div>
            </div>
          </Card>
        )
      })}
    </div>
  )
}
