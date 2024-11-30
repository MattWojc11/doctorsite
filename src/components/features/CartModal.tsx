'use client'

import { X } from 'lucide-react'
import Button from '@/components/shared/Button'

interface CartModalProps {
  isOpen: boolean
  onClose: () => void
}

const cartItems = [
  {
    id: 1,
    name: 'Regular Check-up',
    price: '$150',
    quantity: 1
  }
]

export default function CartModal({ isOpen, onClose }: CartModalProps) {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-end">
      <div className="bg-white w-full max-w-md h-full">
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-900">Your Cart</h2>
            <button onClick={onClose}>
              <X className="w-6 h-6 text-gray-500 hover:text-gray-700" />
            </button>
          </div>

          {cartItems.length > 0 ? (
            <>
              <div className="space-y-6 mb-8">
                {cartItems.map((item) => (
                  <div key={item.id} className="flex justify-between items-center border-b pb-4">
                    <div>
                      <h3 className="font-semibold text-gray-900">{item.name}</h3>
                      <p className="text-gray-600">Quantity: {item.quantity}</p>
                    </div>
                    <p className="font-bold text-[#0B6B5D]">{item.price}</p>
                  </div>
                ))}
              </div>

              <div className="border-t pt-4 mb-6">
                <div className="flex justify-between items-center mb-4">
                  <span className="font-semibold text-gray-900">Total</span>
                  <span className="font-bold text-[#0B6B5D] text-xl">$150</span>
                </div>
              </div>

              <div className="space-y-3">
                <Button className="w-full">Proceed to Checkout</Button>
                <Button variant="secondary" className="w-full" onClick={onClose}>
                  Continue Shopping
                </Button>
              </div>
            </>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-600 mb-6">Your cart is empty</p>
              <Button variant="secondary" onClick={onClose}>
                Continue Shopping
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
} 