'use client'

import Image from 'next/image'
import { Star, Quote } from 'lucide-react'

const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'Patient',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80',
    content: 'Dr. Matthew is an exceptional doctor who truly cares about his patients. His attention to detail and thorough approach to healthcare is remarkable.',
    rating: 5
  },
  {
    id: 2,
    name: 'Michael Brown',
    role: 'Patient',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e',
    content: "I've been a patient for over 5 years and the level of care has always been outstanding. The entire staff is professional and caring.",
    rating: 5
  },
  {
    id: 3,
    name: 'Emily Davis',
    role: 'Patient',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2',
    content: "The modern facility and advanced medical technology, combined with Dr. Matthew's expertise, make this practice stand out from others.",
    rating: 5
  }
]

export default function Testimonials() {
  return (
    <section className="py-20 px-6 bg-gradient-to-br from-[#0B6B5D]/5 via-white to-[#F5B195]/5">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-[#0B6B5D] font-semibold tracking-wide">
            PATIENT TESTIMONIALS
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-4 mb-6">
            What Our Patients Say
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Read about the experiences of our patients and their journey to better health with Dr. Matthew
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <Quote className="w-12 h-12 text-[#0B6B5D]/20 mb-6" />
              <div className="flex items-center space-x-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star 
                    key={i}
                    className="w-5 h-5 fill-[#F5B195] text-[#F5B195]"
                  />
                ))}
              </div>
              <p className="text-gray-600 mb-8 italic">
                &ldquo;{testimonial.content}&rdquo;
              </p>
              <div className="flex items-center space-x-4 pt-6 border-t">
                <Image
                  src={testimonial.image}
                  alt={testimonial.name}
                  width={56}
                  height={56}
                  className="rounded-full ring-4 ring-[#0B6B5D]/10"
                />
                <div>
                  <h4 className="font-bold text-gray-900">
                    {testimonial.name}
                  </h4>
                  <p className="text-[#0B6B5D]">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 