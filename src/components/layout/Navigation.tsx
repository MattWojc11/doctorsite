'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { ShoppingCart } from 'lucide-react'
import Button from '@/components/shared/Button'
import CartModal from '@/components/features/CartModal'

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isCartOpen, setIsCartOpen] = useState(false)
  const router = useRouter()

  const navItems = [
    { label: 'HOME', href: '/' },
    { label: 'ABOUT', href: '/about' },
    { label: 'SERVICES', href: '/services' },
    { label: 'CONTACT', href: '/contact' }
  ]

  const handleBookNow = () => {
    router.push('/book-appointment')
  }

  return (
    <>
      <nav className="bg-white py-4 px-6 fixed w-full top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold text-[#0B6B5D]">
            Dr. Matthew
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-gray-600 hover:text-[#0B6B5D] transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <button 
              className="relative"
              onClick={() => setIsCartOpen(true)}
            >
              <ShoppingCart className="w-6 h-6 text-gray-600" />
              <span className="absolute -top-2 -right-2 bg-[#F5B195] text-white rounded-full w-5 h-5 text-xs flex items-center justify-center">
                1
              </span>
            </button>
            <Button 
              onClick={handleBookNow}
              className="
                bg-[#0B6B5D] text-white
                hover:bg-[#0B6B5D]/90
                transform hover:scale-105
                transition-all duration-300
                shadow-lg hover:shadow-xl
              "
            >
              BOOK NOW
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden w-10 h-10 flex flex-col justify-center items-center group relative"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div className="relative w-6 h-5">
              <span className={`
                absolute w-full h-0.5 bg-black transform transition-all duration-300 ease-in-out
                ${isMenuOpen ? 'rotate-45 translate-y-2' : '-translate-y-2'}
              `} />
              <span className={`
                absolute w-full h-0.5 bg-black transform transition-all duration-300 ease-in-out
                ${isMenuOpen ? 'opacity-0' : 'opacity-100'}
              `} />
              <span className={`
                absolute w-full h-0.5 bg-black transform transition-all duration-300 ease-in-out
                ${isMenuOpen ? '-rotate-45 translate-y-2' : 'translate-y-2'}
              `} />
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`
          md:hidden fixed left-0 right-0 top-[73px] bg-white/95 backdrop-blur-sm shadow-lg
          transform transition-all duration-300 ease-in-out
          ${isMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'}
        `}>
          <div className="p-6 space-y-6 max-h-[calc(100vh-73px)] overflow-y-auto">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="block text-gray-900 hover:text-[#0B6B5D] transition-colors font-semibold"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Button 
              onClick={() => {
                handleBookNow()
                setIsMenuOpen(false)
              }}
              className="
                w-full mt-4
                bg-[#0B6B5D] text-white
                hover:bg-[#0B6B5D]/90
                transform hover:scale-105
                transition-all duration-300
                shadow-lg hover:shadow-xl
              "
            >
              BOOK NOW
            </Button>
          </div>
        </div>
      </nav>

      <CartModal isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </>
  )
} 