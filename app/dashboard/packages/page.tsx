'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Trash2, Edit2, Plus } from 'lucide-react'
import { AddPackageModal } from '@/components/dashboard/add-package-modal'

interface Package {
  id: number
  name: string
  type: 'Indoor' | 'Outdoor' | 'Virtual' | 'Executive'
  price: number
  capacity: { min: number; max: number }
  description?: string
  features: string[]
}

const initialPackages: Package[] = [
  {
    id: 1,
    name: 'Indoor Team Building',
    type: 'Indoor',
    price: 1500,
    capacity: { min: 10, max: 100 },
    description: 'Engaging activities in climate-controlled spaces',
    features: ['Icebreaker games', 'Problem-solving challenges', 'Team competitions', 'Catering'],
  },
  {
    id: 2,
    name: 'Outdoor Adventures',
    type: 'Outdoor',
    price: 2000,
    capacity: { min: 15, max: 200 },
    description: 'High-energy outdoor experiences',
    features: ['Scavenger hunts', 'Obstacle courses', 'Adventure races', 'Campfire activities'],
  },
  {
    id: 3,
    name: 'Virtual Team Building',
    type: 'Virtual',
    price: 500,
    capacity: { min: 1, max: 1000 },
    description: 'Engaging remote activities for distributed teams',
    features: ['Online games & trivia', 'Virtual escape rooms', 'Wellness sessions', 'Interactive workshops'],
  },
  {
    id: 4,
    name: 'Executive Retreats',
    type: 'Executive',
    price: 5000,
    capacity: { min: 20, max: 300 },
    description: 'Customized multi-day experiences for leadership',
    features: ['Luxury accommodations', 'Leadership coaching', 'Custom activities', 'Full logistics'],
  },
]

export default function PackagesPage() {
  const [packages, setPackages] = useState<Package[]>(initialPackages)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [editingId, setEditingId] = useState<number | null>(null)

  const handleAddPackage = (newPackage: Omit<Package, 'id'>) => {
    if (editingId !== null) {
      setPackages(packages.map(pkg =>
        pkg.id === editingId ? { ...newPackage, id: editingId } : pkg
      ))
      setEditingId(null)
    } else {
      const id = Math.max(...packages.map(p => p.id), 0) + 1
      setPackages([...packages, { ...newPackage, id }])
    }
    setIsModalOpen(false)
  }

  const handleEdit = (id: number) => {
    setEditingId(id)
    setIsModalOpen(true)
  }

  const handleDelete = (id: number) => {
    setPackages(packages.filter(pkg => pkg.id !== id))
  }

  const typeColors = {
    Indoor: 'bg-blue-100 text-blue-800',
    Outdoor: 'bg-green-100 text-green-800',
    Virtual: 'bg-purple-100 text-purple-800',
    Executive: 'bg-indigo-100 text-indigo-800',
  }

  const editingPackage = editingId ? packages.find(p => p.id === editingId) : undefined

  return (
    <div className="p-4 md:p-8">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-8 gap-4">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">Packages</h1>
          <p className="text-gray-600 text-sm md:text-base">Manage your team building service packages</p>
        </div>
        <Button
          onClick={() => {
            setEditingId(null)
            setIsModalOpen(true)
          }}
          className="bg-indigo-600 hover:bg-indigo-700 text-white"
        >
          <Plus size={20} className="mr-2" />
          Add Package
        </Button>
      </div>

      {/* Packages Table - Hidden on mobile, shown on md and up */}
      <div className="hidden md:block bg-white rounded-lg border border-gray-200 overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-50 border-b border-gray-200">
            <tr>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Name</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Type</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Price</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Capacity</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Features</th>
              <th className="px-6 py-3 text-right text-sm font-semibold text-gray-900">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {packages.map((pkg) => (
              <tr key={pkg.id} className="hover:bg-gray-50 transition-colors">
                <td className="px-6 py-4">
                  <p className="font-medium text-gray-900">{pkg.name}</p>
                </td>
                <td className="px-6 py-4">
                  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${typeColors[pkg.type]}`}>
                    {pkg.type}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <p className="font-medium text-gray-900">${pkg.price.toLocaleString()}</p>
                </td>
                <td className="px-6 py-4 text-sm text-gray-600">
                  {pkg.capacity.min}-{pkg.capacity.max} people
                </td>
                <td className="px-6 py-4">
                  <p className="text-sm text-gray-600">{pkg.features.length} features</p>
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center justify-end gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleEdit(pkg.id)}
                      className="border-gray-300"
                    >
                      <Edit2 size={16} />
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleDelete(pkg.id)}
                      className="border-red-300 text-red-600 hover:text-red-700 hover:bg-red-50"
                    >
                      <Trash2 size={16} />
                    </Button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Package Grid View for mobile and tablet */}
      <div className="md:hidden grid grid-cols-1 gap-4 mt-8">
        {packages.map((pkg) => (
          <Card key={pkg.id} className="p-4 border-gray-200">
            <div className="flex items-start justify-between mb-3">
              <h3 className="text-base font-bold text-gray-900">{pkg.name}</h3>
              <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${typeColors[pkg.type]}`}>
                {pkg.type}
              </span>
            </div>
            <p className="text-xl font-bold text-indigo-600 mb-3">${pkg.price.toLocaleString()}</p>
            <p className="text-xs text-gray-600 mb-3">
              Capacity: {pkg.capacity.min}-{pkg.capacity.max}
            </p>
            <ul className="space-y-1 mb-4">
              {pkg.features.slice(0, 2).map((feature, idx) => (
                <li key={idx} className="flex items-center text-xs text-gray-700">
                  <span className="w-1 h-1 bg-indigo-600 rounded-full mr-2" />
                  {feature}
                </li>
              ))}
              {pkg.features.length > 2 && (
                <li className="text-xs text-gray-500">+{pkg.features.length - 2} more</li>
              )}
            </ul>
            <div className="flex gap-2">
              <Button
                onClick={() => handleEdit(pkg.id)}
                size="sm"
                className="flex-1 bg-indigo-600 hover:bg-indigo-700 text-white text-xs"
              >
                Edit
              </Button>
              <Button
                onClick={() => handleDelete(pkg.id)}
                variant="outline"
                size="sm"
                className="flex-1 border-red-300 text-red-600 hover:text-red-700 text-xs"
              >
                Delete
              </Button>
            </div>
          </Card>
        ))}
      </div>

      {/* Package Grid View for larger screens */}
      <div className="hidden lg:grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 mt-8">
        {packages.map((pkg) => (
          <Card key={pkg.id} className="p-6 border-gray-200 hover:shadow-lg transition-shadow">
            <div className="flex items-start justify-between mb-4">
              <h3 className="text-lg font-bold text-gray-900">{pkg.name}</h3>
              <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${typeColors[pkg.type]}`}>
                {pkg.type}
              </span>
            </div>
            <p className="text-2xl font-bold text-indigo-600 mb-4">${pkg.price.toLocaleString()}</p>
            <p className="text-sm text-gray-600 mb-4">
              Capacity: {pkg.capacity.min}-{pkg.capacity.max} people
            </p>
            <ul className="space-y-2 mb-6">
              {pkg.features.map((feature, idx) => (
                <li key={idx} className="flex items-center text-sm text-gray-700">
                  <span className="w-1.5 h-1.5 bg-indigo-600 rounded-full mr-2" />
                  {feature}
                </li>
              ))}
            </ul>
            <div className="flex gap-2">
              <Button
                onClick={() => handleEdit(pkg.id)}
                className="flex-1 bg-indigo-600 hover:bg-indigo-700 text-white"
              >
                Edit
              </Button>
              <Button
                onClick={() => handleDelete(pkg.id)}
                variant="outline"
                className="flex-1 border-red-300 text-red-600 hover:text-red-700"
              >
                Delete
              </Button>
            </div>
          </Card>
        ))}
      </div>

      {/* Add/Edit Modal */}
      <AddPackageModal
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false)
          setEditingId(null)
        }}
        onSubmit={handleAddPackage}
        initialData={editingPackage}
      />
    </div>
  )
}
