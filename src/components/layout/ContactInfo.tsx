'use client'

import { Phone, Mail, MapPin, Clock } from 'lucide-react'

export default function ContactInfo() {
  return (
    <div className="bg-white rounded-2xl p-8 shadow-lg">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">
        Contact Information
      </h2>
      
      <div className="space-y-6">
        <div className="flex items-start space-x-4">
          <Phone className="w-6 h-6 text-[#0B6B5D] mt-1" />
          <div>
            <h3 className="font-semibold text-gray-900">Phone</h3>
            <a 
              href="tel:+1234567890" 
              className="text-gray-600 hover:text-[#0B6B5D] transition-colors"
            >
              (123) 456-7890
            </a>
          </div>
        </div>

        <div className="flex items-start space-x-4">
          <Mail className="w-6 h-6 text-[#0B6B5D] mt-1" />
          <div>
            <h3 className="font-semibold text-gray-900">Email</h3>
            <a 
              href="mailto:contact@drmatthew.com" 
              className="text-gray-600 hover:text-[#0B6B5D] transition-colors"
            >
              contact@drmatthew.com
            </a>
          </div>
        </div>

        <div className="flex items-start space-x-4">
          <MapPin className="w-6 h-6 text-[#0B6B5D] mt-1" />
          <div>
            <h3 className="font-semibold text-gray-900">Address</h3>
            <p className="text-gray-600">
              123 Medical Center Drive<br />
              Suite 456<br />
              New York, NY 10001
            </p>
          </div>
        </div>

        <div className="flex items-start space-x-4">
          <Clock className="w-6 h-6 text-[#0B6B5D] mt-1" />
          <div>
            <h3 className="font-semibold text-gray-900">Office Hours</h3>
            <div className="text-gray-600">
              <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
              <p>Saturday: 9:00 AM - 2:00 PM</p>
              <p>Sunday: Closed</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 