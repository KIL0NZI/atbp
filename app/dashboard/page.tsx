'use client'

import { useState } from 'react'
import { StatsCards } from '@/components/dashboard/stats-cards'

// Mock data
const mockInquiries = [
  {
    id: 1,
    name: 'John Smith',
    email: 'john@acme.com',
    phone: '(555) 123-4567',
    packageInterest: 'Outdoor Adventures',
    teamSize: 50,
    eventDate: '2025-03-15',
    status: 'Pending',
    submittedAt: new Date('2025-02-10'),
  },
  {
    id: 2,
    name: 'Lisa Wang',
    email: 'lisa@techcorp.com',
    phone: '(555) 987-6543',
    packageInterest: 'Indoor Team Building',
    teamSize: 25,
    eventDate: '2025-03-20',
    status: 'Contacted',
    submittedAt: new Date('2025-02-08'),
  },
  {
    id: 3,
    name: 'Mike Johnson',
    email: 'mike@startupco.com',
    phone: '(555) 456-7890',
    packageInterest: 'Executive Retreats',
    teamSize: 100,
    eventDate: '2025-04-10',
    status: 'Booked',
    submittedAt: new Date('2025-02-05'),
  },
]

const mockPackages = [
  {
    id: 1,
    name: 'Indoor Team Building',
    type: 'Indoor',
    price: 1500,
    capacity: { min: 10, max: 100 },
    features: ['Icebreaker games', 'Problem-solving challenges', 'Team competitions', 'Catering'],
  },
  {
    id: 2,
    name: 'Outdoor Adventures',
    type: 'Outdoor',
    price: 2000,
    capacity: { min: 15, max: 200 },
    features: ['Scavenger hunts', 'Obstacle courses', 'Adventure races', 'Campfire activities'],
  },
  {
    id: 3,
    name: 'Virtual Team Building',
    type: 'Virtual',
    price: 500,
    capacity: { min: 1, max: 1000 },
    features: ['Online games', 'Virtual escape rooms', 'Wellness sessions', 'Interactive workshops'],
  },
  {
    id: 4,
    name: 'Executive Retreats',
    type: 'Executive',
    price: 5000,
    capacity: { min: 20, max: 300 },
    features: ['Luxury accommodations', 'Leadership coaching', 'Custom activities', 'Full logistics'],
  },
]

export default function DashboardPage() {
  const [inquiries] = useState(mockInquiries)
  const [packages] = useState(mockPackages)

  const recentInquiries = inquiries.slice(0, 5)

  return (
    <div className="p-4 md:p-8">
      <div className="mb-8">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">Dashboard</h1>
        <p className="text-gray-600 text-sm md:text-base">Welcome back! Here's an overview of your team building business.</p>
      </div>

      {/* Stats */}
      <StatsCards inquiries={inquiries} packages={packages} />

      {/* Recent Inquiries */}
      <div className="mt-12">
        <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6">Recent Inquiries</h2>
        <div className="bg-white rounded-lg border border-gray-200 overflow-x-auto">
          <table className="w-full min-w-max">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-3 md:px-6 py-3 text-left text-xs md:text-sm font-semibold text-gray-900">Name</th>
                <th className="px-3 md:px-6 py-3 text-left text-xs md:text-sm font-semibold text-gray-900">Package</th>
                <th className="px-3 md:px-6 py-3 text-left text-xs md:text-sm font-semibold text-gray-900">Team Size</th>
                <th className="px-3 md:px-6 py-3 text-left text-xs md:text-sm font-semibold text-gray-900">Status</th>
                <th className="px-3 md:px-6 py-3 text-left text-xs md:text-sm font-semibold text-gray-900">Date</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {recentInquiries.map((inquiry) => (
                <tr key={inquiry.id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-3 md:px-6 py-4">
                    <div>
                      <p className="font-medium text-gray-900 text-xs md:text-sm">{inquiry.name}</p>
                      <p className="text-xs text-gray-600 hidden md:block">{inquiry.email}</p>
                    </div>
                  </td>
                  <td className="px-3 md:px-6 py-4 text-xs md:text-sm text-gray-600">
                    {inquiry.packageInterest}
                  </td>
                  <td className="px-3 md:px-6 py-4 text-xs md:text-sm text-gray-600">
                    {inquiry.teamSize}
                  </td>
                  <td className="px-3 md:px-6 py-4">
                    <span
                      className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                        inquiry.status === 'Pending'
                          ? 'bg-yellow-100 text-yellow-800'
                          : inquiry.status === 'Contacted'
                          ? 'bg-blue-100 text-blue-800'
                          : 'bg-green-100 text-green-800'
                      }`}
                    >
                      {inquiry.status}
                    </span>
                  </td>
                  <td className="px-3 md:px-6 py-4 text-xs md:text-sm text-gray-600">
                    {inquiry.submittedAt.toLocaleDateString()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg border border-gray-200">
          <p className="text-sm text-gray-600 mb-2">Conversion Rate</p>
          <p className="text-3xl font-bold text-gray-900">33%</p>
          <p className="text-xs text-gray-500 mt-2">1 out of 3 inquiries booked</p>
        </div>
        <div className="bg-white p-6 rounded-lg border border-gray-200">
          <p className="text-sm text-gray-600 mb-2">Revenue This Month</p>
          <p className="text-3xl font-bold text-gray-900">$8,500</p>
          <p className="text-xs text-gray-500 mt-2">+12% from last month</p>
        </div>
        <div className="bg-white p-6 rounded-lg border border-gray-200">
          <p className="text-sm text-gray-600 mb-2">Avg Team Size</p>
          <p className="text-3xl font-bold text-gray-900">58</p>
          <p className="text-xs text-gray-500 mt-2">Across all bookings</p>
        </div>
      </div>
    </div>
  )
}
