'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Phone, Mail, Calendar } from 'lucide-react'

interface Inquiry {
  id: number
  name: string
  email: string
  phone: string
  packageInterest: string
  teamSize: number
  eventDate?: string
  status: 'Pending' | 'Contacted' | 'Booked'
  submittedAt: Date
  notes?: string
}

const initialInquiries: Inquiry[] = [
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
    notes: 'Interested in multi-day event for company retreat',
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
    notes: 'Already sent proposal',
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
    notes: 'Deposit received',
  },
  {
    id: 4,
    name: 'Sarah Davis',
    email: 'sarah@finance.com',
    phone: '(555) 234-5678',
    packageInterest: 'Virtual Team Building',
    teamSize: 75,
    eventDate: '2025-03-01',
    status: 'Pending',
    submittedAt: new Date('2025-02-11'),
  },
  {
    id: 5,
    name: 'Tom Wilson',
    email: 'tom@marketing.co',
    phone: '(555) 345-6789',
    packageInterest: 'Indoor Team Building',
    teamSize: 30,
    eventDate: '2025-03-25',
    status: 'Contacted',
    submittedAt: new Date('2025-02-09'),
  },
]

export default function InquiriesPage() {
  const [inquiries, setInquiries] = useState<Inquiry[]>(initialInquiries)
  const [searchTerm, setSearchTerm] = useState('')
  const [filterStatus, setFilterStatus] = useState<'All' | 'Pending' | 'Contacted' | 'Booked'>('All')
  const [selectedInquiry, setSelectedInquiry] = useState<Inquiry | null>(null)

  const filtered = inquiries.filter(inquiry => {
    const matchesSearch =
      inquiry.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      inquiry.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      inquiry.phone.includes(searchTerm)
    const matchesStatus = filterStatus === 'All' || inquiry.status === filterStatus
    return matchesSearch && matchesStatus
  })

  const handleStatusChange = (id: number, newStatus: 'Pending' | 'Contacted' | 'Booked') => {
    setInquiries(
      inquiries.map(inq =>
        inq.id === id ? { ...inq, status: newStatus } : inq
      )
    )
  }

  const statusOptions = ['Pending', 'Contacted', 'Booked'] as const

  const statusColors = {
    Pending: 'bg-yellow-100 text-yellow-800',
    Contacted: 'bg-blue-100 text-blue-800',
    Booked: 'bg-green-100 text-green-800',
  }

  return (
    <div className="p-4 md:p-8">
      <div className="mb-8">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">Inquiries</h1>
        <p className="text-gray-600 text-sm md:text-base">Manage and track all lead submissions</p>
      </div>

      {/* Filters */}
      <div className="flex flex-col gap-4 mb-6">
        <Input
          type="text"
          placeholder="Search by name, email, or phone..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="border-gray-300"
        />
        <div className="flex gap-2 flex-wrap">
          {(['All', 'Pending', 'Contacted', 'Booked'] as const).map(status => (
            <Button
              key={status}
              onClick={() => setFilterStatus(status)}
              variant={filterStatus === status ? 'default' : 'outline'}
              className={`text-xs md:text-sm ${filterStatus === status ? 'bg-indigo-600 hover:bg-indigo-700' : 'border-gray-300'}`}
            >
              {status}
            </Button>
          ))}
        </div>
      </div>

      {/* Inquiries List */}
      <div className="space-y-4">
        {filtered.length === 0 ? (
          <Card className="p-6 border-gray-200 text-center">
            <p className="text-gray-600">No inquiries found matching your criteria</p>
          </Card>
        ) : (
          filtered.map(inquiry => (
            <Card
              key={inquiry.id}
              className="p-4 md:p-6 border-gray-200 hover:shadow-lg transition-shadow cursor-pointer"
              onClick={() => setSelectedInquiry(selectedInquiry?.id === inquiry.id ? null : inquiry)}
            >
              <div className="flex items-start justify-between mb-4 flex-col md:flex-row gap-2">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2 flex-wrap">
                    <h3 className="text-base md:text-lg font-bold text-gray-900">{inquiry.name}</h3>
                    <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium ${statusColors[inquiry.status]}`}>
                      {inquiry.status}
                    </span>
                  </div>
                  <p className="text-xs md:text-sm text-gray-600">{inquiry.packageInterest}</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4 mb-4">
                <div className="flex items-center gap-2 text-xs md:text-sm text-gray-600 overflow-hidden">
                  <Mail size={14} className="flex-shrink-0" />
                  <span className="truncate">{inquiry.email}</span>
                </div>
                <div className="flex items-center gap-2 text-xs md:text-sm text-gray-600">
                  <Phone size={14} className="flex-shrink-0" />
                  {inquiry.phone}
                </div>
                {inquiry.eventDate && (
                  <div className="flex items-center gap-2 text-xs md:text-sm text-gray-600">
                    <Calendar size={14} className="flex-shrink-0" />
                    {new Date(inquiry.eventDate).toLocaleDateString()}
                  </div>
                )}
              </div>

              <div className="flex items-center justify-between flex-col md:flex-row gap-2 md:gap-0">
                <p className="text-xs md:text-sm text-gray-500">
                  Team size: <span className="font-semibold text-gray-900">{inquiry.teamSize} people</span>
                </p>
                <p className="text-xs text-gray-500">
                  Submitted: {inquiry.submittedAt.toLocaleDateString()}
                </p>
              </div>

              {/* Expanded Details */}
              {selectedInquiry?.id === inquiry.id && (
                <div className="mt-4 md:mt-6 pt-4 md:pt-6 border-t border-gray-200">
                  {inquiry.notes && (
                    <div className="mb-4">
                      <label className="text-xs md:text-sm font-semibold text-gray-900 block mb-2">Notes</label>
                      <p className="text-xs md:text-sm text-gray-600 bg-gray-50 p-2 md:p-3 rounded">{inquiry.notes}</p>
                    </div>
                  )}

                  <div className="flex gap-2 flex-wrap">
                    {statusOptions.map(status => (
                      <Button
                        key={status}
                        onClick={(e) => {
                          e.stopPropagation()
                          handleStatusChange(inquiry.id, status)
                        }}
                        variant={inquiry.status === status ? 'default' : 'outline'}
                        className={`text-xs md:text-sm ${
                          inquiry.status === status
                            ? 'bg-indigo-600 hover:bg-indigo-700'
                            : 'border-gray-300 hover:bg-gray-50'
                        }`}
                      >
                        {status}
                      </Button>
                    ))}
                  </div>
                </div>
              )}
            </Card>
          ))
        )}
      </div>

      {/* Summary Stats */}
      <div className="mt-8 md:mt-12 grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
        <Card className="p-4 md:p-6 border-gray-200">
          <p className="text-xs md:text-sm text-gray-600 mb-2">Total Inquiries</p>
          <p className="text-2xl md:text-3xl font-bold text-gray-900">{inquiries.length}</p>
        </Card>
        <Card className="p-4 md:p-6 border-gray-200">
          <p className="text-xs md:text-sm text-gray-600 mb-2">Pending Review</p>
          <p className="text-2xl md:text-3xl font-bold text-yellow-600">
            {inquiries.filter(i => i.status === 'Pending').length}
          </p>
        </Card>
        <Card className="p-4 md:p-6 border-gray-200">
          <p className="text-xs md:text-sm text-gray-600 mb-2">Booked Events</p>
          <p className="text-2xl md:text-3xl font-bold text-green-600">
            {inquiries.filter(i => i.status === 'Booked').length}
          </p>
        </Card>
      </div>
    </div>
  )
}
