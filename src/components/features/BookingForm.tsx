'use client'

import { useState } from 'react'
import { Calendar, Clock, User, Phone, Mail, FileText } from 'lucide-react'
import Button from '@/components/shared/Button'

interface BookingData {
  service: string
  date: string
  time: string
  name: string
  phone: string
  email: string
  notes: string
}

const services = [
  {
    value: 'checkup',
    label: 'Regular Check-up',
    price: '$150',
    duration: '45 min',
    icon: '🏥'
  },
  {
    value: 'cardiology',
    label: 'Cardiology Consultation',
    price: '$200',
    duration: '60 min',
    icon: '❤️'
  },
  {
    value: 'internal',
    label: 'Internal Medicine',
    price: '$180',
    duration: '50 min',
    icon: '🩺'
  },
  {
    value: 'family',
    label: 'Family Medicine',
    price: '$160',
    duration: '45 min',
    icon: '👨‍👩‍👧‍👦'
  }
]

export default function BookingForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const today = new Date().toISOString().split('T')[0]
  
  const [bookingData, setBookingData] = useState<BookingData>({
    service: '',
    date: '',
    time: '',
    name: '',
    phone: '',
    email: '',
    notes: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setBookingData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      await new Promise(resolve => setTimeout(resolve, 1500))
      alert('Appointment scheduled successfully!')
      setBookingData({
        service: '',
        date: '',
        time: '',
        name: '',
        phone: '',
        email: '',
        notes: ''
      })
    } catch {
      alert('Failed to schedule appointment. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-8 shadow-xl">
      <div className="space-y-8">
        {/* Service Selection */}
        <div>
          <label className="block text-lg font-bold text-gray-900 mb-4">Select Service</label>
          <div className="grid gap-4">
            {services.map((service) => (
              <label
                key={service.value}
                className={`
                  relative flex items-center p-4 rounded-xl cursor-pointer
                  border-2 transition-all duration-200
                  ${bookingData.service === service.value 
                    ? 'border-[#0B6B5D] bg-[#0B6B5D]/5' 
                    : 'border-gray-200 hover:border-[#0B6B5D]/50'
                  }
                `}
              >
                <input
                  type="radio"
                  name="service"
                  value={service.value}
                  checked={bookingData.service === service.value}
                  onChange={handleChange}
                  className="hidden"
                />
                <span className="text-2xl mr-4">{service.icon}</span>
                <div className="flex-grow">
                  <div className="flex justify-between items-center mb-1">
                    <span className="font-semibold text-gray-900">{service.label}</span>
                    <span className="text-[#0B6B5D] font-bold">{service.price}</span>
                  </div>
                  <div className="text-sm text-gray-500">Duration: {service.duration}</div>
                </div>
                <div 
                  className={`
                    ml-4 w-6 h-6 rounded-full border-2 flex items-center justify-center
                    ${bookingData.service === service.value 
                      ? 'border-[#0B6B5D] bg-[#0B6B5D]' 
                      : 'border-gray-300'
                    }
                  `}
                >
                  {bookingData.service === service.value && (
                    <div className="w-2 h-2 bg-white rounded-full" />
                  )}
                </div>
              </label>
            ))}
          </div>
        </div>

        {/* Date and Time Selection */}
        <div>
          <label className="block text-lg font-bold text-gray-900 mb-4">Choose Date & Time</label>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="relative">
              <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
                <Calendar className="w-5 h-5 text-[#0B6B5D]" />
              </div>
              <input
                type="date"
                name="date"
                value={bookingData.date}
                onChange={handleChange}
                min={today}
                className="w-full pl-12 pr-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[#0B6B5D] focus:ring-2 focus:ring-[#0B6B5D]/20 outline-none transition-all duration-200"
                required
              />
            </div>

            <div className="relative">
              <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
                <Clock className="w-5 h-5 text-[#0B6B5D]" />
              </div>
              <input
                type="time"
                name="time"
                value={bookingData.time}
                onChange={handleChange}
                min="09:00"
                max="18:00"
                className="w-full pl-12 pr-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[#0B6B5D] focus:ring-2 focus:ring-[#0B6B5D]/20 outline-none transition-all duration-200"
                required
              />
            </div>
          </div>
        </div>

        {/* Personal Information */}
        <div>
          <label className="block text-lg font-bold text-gray-900 mb-4">Personal Information</label>
          <div className="space-y-6">
            <div className="relative">
              <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
                <User className="w-5 h-5 text-[#0B6B5D]" />
              </div>
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={bookingData.name}
                onChange={handleChange}
                className="w-full pl-12 pr-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[#0B6B5D] focus:ring-2 focus:ring-[#0B6B5D]/20 outline-none transition-all duration-200"
                required
              />
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="relative">
                <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
                  <Phone className="w-5 h-5 text-[#0B6B5D]" />
                </div>
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  value={bookingData.phone}
                  onChange={handleChange}
                  className="w-full pl-12 pr-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[#0B6B5D] focus:ring-2 focus:ring-[#0B6B5D]/20 outline-none transition-all duration-200"
                  required
                />
              </div>

              <div className="relative">
                <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
                  <Mail className="w-5 h-5 text-[#0B6B5D]" />
                </div>
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={bookingData.email}
                  onChange={handleChange}
                  className="w-full pl-12 pr-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[#0B6B5D] focus:ring-2 focus:ring-[#0B6B5D]/20 outline-none transition-all duration-200"
                  required
                />
              </div>
            </div>

            <div className="relative">
              <div className="absolute top-3 left-4">
                <FileText className="w-5 h-5 text-[#0B6B5D]" />
              </div>
              <textarea
                name="notes"
                placeholder="Additional Notes (Optional)"
                value={bookingData.notes}
                onChange={handleChange}
                rows={4}
                className="w-full pl-12 pr-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[#0B6B5D] focus:ring-2 focus:ring-[#0B6B5D]/20 outline-none transition-all duration-200 resize-none"
              />
            </div>
          </div>
        </div>

        <Button 
          type="submit" 
          size="lg" 
          className="
            w-full
            bg-gradient-to-r from-[#0B6B5D] to-[#0B6B5D]/90
            hover:from-[#0B6B5D]/90 hover:to-[#0B6B5D]
            text-white
            py-4
            rounded-xl
            text-lg
            font-semibold
            shadow-lg hover:shadow-xl
            transform hover:scale-[1.02]
            transition-all duration-200
          "
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <div className="flex items-center justify-center space-x-2">
              <div className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent" />
              <span>Scheduling...</span>
            </div>
          ) : (
            <div className="flex items-center justify-center space-x-2">
              <Calendar className="w-5 h-5" />
              <span>Schedule Appointment</span>
            </div>
          )}
        </Button>
      </div>
    </form>
  )
} 