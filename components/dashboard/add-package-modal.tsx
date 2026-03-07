'use client'

import { useState, useEffect } from 'react'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Textarea } from '@/components/ui/textarea'
import { X } from 'lucide-react'

interface Package {
  id?: number
  name: string
  type: 'Indoor' | 'Outdoor' | 'Virtual' | 'Executive'
  price: number
  capacity: { min: number; max: number }
  description?: string
  features: string[]
}

interface AddPackageModalProps {
  isOpen: boolean
  onClose: () => void
  onSubmit: (package: Omit<Package, 'id'>) => void
  initialData?: Package
}

export function AddPackageModal({
  isOpen,
  onClose,
  onSubmit,
  initialData,
}: AddPackageModalProps) {
  const [formData, setFormData] = useState<Omit<Package, 'id'>>({
    name: '',
    type: 'Indoor',
    price: 0,
    capacity: { min: 10, max: 100 },
    description: '',
    features: [],
  })
  const [featureInput, setFeatureInput] = useState('')

  useEffect(() => {
    if (initialData) {
      setFormData({
        name: initialData.name,
        type: initialData.type,
        price: initialData.price,
        capacity: initialData.capacity,
        description: initialData.description || '',
        features: initialData.features,
      })
    } else {
      setFormData({
        name: '',
        type: 'Indoor',
        price: 0,
        capacity: { min: 10, max: 100 },
        description: '',
        features: [],
      })
    }
    setFeatureInput('')
  }, [initialData, isOpen])

  const handleAddFeature = () => {
    if (featureInput.trim()) {
      setFormData(prev => ({
        ...prev,
        features: [...prev.features, featureInput.trim()],
      }))
      setFeatureInput('')
    }
  }

  const handleRemoveFeature = (index: number) => {
    setFormData(prev => ({
      ...prev,
      features: prev.features.filter((_, i) => i !== index),
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (formData.name && formData.price >= 0 && formData.features.length > 0) {
      onSubmit(formData)
    }
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>
            {initialData ? 'Edit Package' : 'Add New Package'}
          </DialogTitle>
          <DialogDescription>
            {initialData
              ? 'Update the package details below'
              : 'Create a new team building package'}
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Package Name */}
          <div>
            <Label htmlFor="name" className="text-gray-900 font-medium">
              Package Name
            </Label>
            <Input
              id="name"
              value={formData.name}
              onChange={(e) =>
                setFormData(prev => ({ ...prev, name: e.target.value }))
              }
              placeholder="e.g., Indoor Team Building"
              className="mt-2 border-gray-300"
            />
          </div>

          {/* Type and Price Row */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="type" className="text-gray-900 font-medium">
                Type
              </Label>
              <Select
                value={formData.type}
                onValueChange={(value) =>
                  setFormData(prev => ({
                    ...prev,
                    type: value as 'Indoor' | 'Outdoor' | 'Virtual' | 'Executive',
                  }))
                }
              >
                <SelectTrigger className="mt-2 border-gray-300">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Indoor">Indoor</SelectItem>
                  <SelectItem value="Outdoor">Outdoor</SelectItem>
                  <SelectItem value="Virtual">Virtual</SelectItem>
                  <SelectItem value="Executive">Executive</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label htmlFor="price" className="text-gray-900 font-medium">
                Price ($)
              </Label>
              <Input
                id="price"
                type="number"
                value={formData.price}
                onChange={(e) =>
                  setFormData(prev => ({ ...prev, price: parseFloat(e.target.value) }))
                }
                placeholder="1500"
                className="mt-2 border-gray-300"
              />
            </div>
          </div>

          {/* Capacity Row */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="min-capacity" className="text-gray-900 font-medium">
                Min Capacity
              </Label>
              <Input
                id="min-capacity"
                type="number"
                value={formData.capacity.min}
                onChange={(e) =>
                  setFormData(prev => ({
                    ...prev,
                    capacity: { ...prev.capacity, min: parseInt(e.target.value) },
                  }))
                }
                placeholder="10"
                className="mt-2 border-gray-300"
              />
            </div>

            <div>
              <Label htmlFor="max-capacity" className="text-gray-900 font-medium">
                Max Capacity
              </Label>
              <Input
                id="max-capacity"
                type="number"
                value={formData.capacity.max}
                onChange={(e) =>
                  setFormData(prev => ({
                    ...prev,
                    capacity: { ...prev.capacity, max: parseInt(e.target.value) },
                  }))
                }
                placeholder="100"
                className="mt-2 border-gray-300"
              />
            </div>
          </div>

          {/* Description */}
          <div>
            <Label htmlFor="description" className="text-gray-900 font-medium">
              Description (Optional)
            </Label>
            <Textarea
              id="description"
              value={formData.description}
              onChange={(e) =>
                setFormData(prev => ({ ...prev, description: e.target.value }))
              }
              placeholder="Describe this package..."
              className="mt-2 border-gray-300 resize-none"
              rows={3}
            />
          </div>

          {/* Features */}
          <div>
            <Label className="text-gray-900 font-medium block mb-2">Features</Label>
            <div className="flex gap-2 mb-3">
              <Input
                value={featureInput}
                onChange={(e) => setFeatureInput(e.target.value)}
                onKeyPress={(e) => {
                  if (e.key === 'Enter') {
                    e.preventDefault()
                    handleAddFeature()
                  }
                }}
                placeholder="Add a feature and press Enter"
                className="flex-1 border-gray-300"
              />
              <Button
                type="button"
                onClick={handleAddFeature}
                className="bg-gray-200 hover:bg-gray-300 text-gray-900"
              >
                Add
              </Button>
            </div>

            {formData.features.length > 0 && (
              <div className="bg-gray-50 rounded-lg p-3 space-y-2">
                {formData.features.map((feature, idx) => (
                  <div
                    key={idx}
                    className="flex items-center justify-between bg-white p-2 rounded border border-gray-200"
                  >
                    <span className="text-sm text-gray-700">{feature}</span>
                    <button
                      type="button"
                      onClick={() => handleRemoveFeature(idx)}
                      className="text-red-600 hover:text-red-700"
                    >
                      <X size={16} />
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Actions */}
          <div className="flex gap-3 pt-4">
            <Button
              type="button"
              onClick={onClose}
              variant="outline"
              className="flex-1 border-gray-300"
            >
              Cancel
            </Button>
            <Button
              type="submit"
              className="flex-1 bg-indigo-600 hover:bg-indigo-700 text-white"
            >
              {initialData ? 'Update Package' : 'Create Package'}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  )
}
