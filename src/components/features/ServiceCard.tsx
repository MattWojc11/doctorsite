'use client'

import { useRouter } from 'next/navigation'
import Button from '@/components/shared/Button'
import { Check } from 'lucide-react'

interface ServiceCardProps {
  iconName: string
  title: string
  description: string
  price: string
  features: string[]
}

export default function ServiceCard({ iconName, title, description, price, features }: ServiceCardProps) {
  const router = useRouter()

  const handleBookNow = () => {
    router.push('/book-appointment')
  }

  return (
    <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
      <div className="w-16 h-16 bg-gradient-to-br from-[#0B6B5D]/10 to-[#0B6B5D]/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
        <span className="text-2xl">{iconName}</span>
      </div>
      <h3 className="text-2xl font-bold text-gray-900 mb-4">{title}</h3>
      <p className="text-gray-600 mb-6">{description}</p>
      
      {/* Features List */}
      <ul className="space-y-3 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center space-x-3 text-gray-600">
            <Check className="w-5 h-5 text-[#0B6B5D]" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      <div className="flex items-center justify-between pt-6 border-t">
        <div>
          <span className="text-sm text-gray-500">Starting from</span>
          <div className="text-2xl font-bold text-[#0B6B5D]">{price}</div>
        </div>
        <Button 
          variant="secondary" 
          size="lg"
          onClick={handleBookNow}
          className="
            hover:scale-105 
            transition-transform
            bg-gradient-to-r 
            from-[#0B6B5D] 
            to-[#0B6B5D]/90
            text-white
            border-none
          "
        >
          Book Now
        </Button>
      </div>
    </div>
  )
} 