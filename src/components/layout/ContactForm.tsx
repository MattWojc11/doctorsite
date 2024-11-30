'use client'

import { useState } from 'react'
import { User, Mail, Phone, MessageSquare } from 'lucide-react'
import Button from '@/components/shared/Button'

interface ContactFormData {
  name: string
  email: string
  phone: string
  subject: string
  message: string
}

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Symulacja wysyłania
      await new Promise(resolve => setTimeout(resolve, 1000))
      alert('Message sent successfully!')
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      })
    } catch {
      alert('Failed to send message. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-8 shadow-lg">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h2>
      
      <div className="space-y-6">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="relative">
            <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
              <User className="w-5 h-5 text-gray-400" />
            </div>
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full pl-12 pr-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#0B6B5D] focus:border-transparent outline-none"
              required
            />
          </div>

          <div className="relative">
            <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
              <Phone className="w-5 h-5 text-gray-400" />
            </div>
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              className="w-full pl-12 pr-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#0B6B5D] focus:border-transparent outline-none"
              required
            />
          </div>
        </div>

        <div className="relative">
          <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
            <Mail className="w-5 h-5 text-gray-400" />
          </div>
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            className="w-full pl-12 pr-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#0B6B5D] focus:border-transparent outline-none"
            required
          />
        </div>

        <div className="relative">
          <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
            <MessageSquare className="w-5 h-5 text-gray-400" />
          </div>
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            value={formData.subject}
            onChange={handleChange}
            className="w-full pl-12 pr-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#0B6B5D] focus:border-transparent outline-none"
            required
          />
        </div>

        <div>
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            rows={6}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#0B6B5D] focus:border-transparent outline-none resize-none"
            required
          />
        </div>

        <Button 
          type="submit" 
          size="lg" 
          className="w-full"
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </Button>
      </div>
    </form>
  )
} 