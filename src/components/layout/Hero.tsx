'use client'

import Image from 'next/image'
import Button from '@/components/shared/Button'
import { Calendar, Clock, Award, Users, Heart, ArrowRight } from 'lucide-react'

export default function Hero() {
  return (
    <div className="relative pt-24 pb-16 px-6 overflow-hidden min-h-screen flex items-center">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0B6B5D]/5 via-white to-[#F5B195]/5" />
      <div className="absolute top-20 right-0 w-96 h-96 bg-[#0B6B5D]/5 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#F5B195]/5 rounded-full blur-3xl animate-pulse" />
      
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center relative">
        {/* Left column */}
        <div className="space-y-8 relative z-20">
          <div className="inline-block px-4 py-2 bg-[#0B6B5D]/10 rounded-full">
            <span className="text-[#0B6B5D] font-semibold tracking-wide">
              TRUSTED HEALTHCARE PROVIDER
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
            Your Health Is Our <span className="text-[#0B6B5D]">Top Priority</span>
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            With over 15 years of experience, Dr. Matthew Anderson provides exceptional 
            healthcare services with a focus on preventive care and personalized treatment plans.
          </p>
          
          {/* Quick Info Cards */}
          <div className="grid grid-cols-2 gap-4 mb-8">
            <div className="bg-white p-4 rounded-xl shadow-md">
              <Clock className="w-6 h-6 text-[#0B6B5D] mb-2" />
              <div className="font-semibold">Quick Appointments</div>
              <div className="text-sm text-gray-500">Same day available</div>
            </div>
            <div className="bg-white p-4 rounded-xl shadow-md">
              <Calendar className="w-6 h-6 text-[#0B6B5D] mb-2" />
              <div className="font-semibold">Flexible Schedule</div>
              <div className="text-sm text-gray-500">Mon-Sat: 9AM-6PM</div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              size="lg" 
              className="
                text-lg px-8 
                bg-gradient-to-r from-[#0B6B5D] to-[#0B6B5D]/90
                hover:from-[#0B6B5D]/90 hover:to-[#0B6B5D]
                transform hover:scale-105
                shadow-lg hover:shadow-xl
                transition-all duration-300
                flex items-center justify-center
                group
                relative
                overflow-hidden
              "
              href="/book-appointment"
            >
              <div className="absolute inset-0 bg-white/10 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
              <span className="relative flex items-center">
                Book Appointment
                <Calendar className="w-5 h-5 ml-2 group-hover:rotate-12 transition-transform duration-300" />
              </span>
            </Button>
            
            <Button 
              size="lg" 
              variant="secondary" 
              className="
                text-lg px-8
                bg-gradient-to-r from-transparent to-transparent
                hover:from-[#0B6B5D]/5 hover:to-[#0B6B5D]/10
                border-2 border-[#0B6B5D]
                transform hover:scale-105
                shadow-lg hover:shadow-xl
                transition-all duration-300
                flex items-center justify-center
                group
                relative
                overflow-hidden
              "
              href="/services"
            >
              <div className="absolute inset-0 bg-[#0B6B5D]/5 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
              <span className="relative flex items-center">
                View Services
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </span>
            </Button>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 pt-8 border-t">
            <div className="text-center">
              <div className="text-3xl font-bold text-[#0B6B5D] animate-count">15+</div>
              <div className="text-gray-600">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-[#0B6B5D] animate-count">10k+</div>
              <div className="text-gray-600">Patients Served</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-[#0B6B5D] animate-count">98%</div>
              <div className="text-gray-600">Success Rate</div>
            </div>
          </div>
        </div>

        {/* Right column with image */}
        <div className="relative z-10">
          {/* Floating badges */}
          <div className="absolute top-0 -translate-y-1/2 right-0 z-30 bg-white p-4 rounded-2xl shadow-xl animate-float hidden lg:flex items-center space-x-3">
            <Award className="w-8 h-8 text-[#0B6B5D]" />
            <div>
              <div className="font-bold text-gray-900">Certified Expert</div>
              <div className="text-sm text-gray-500">Board Certified MD</div>
            </div>
          </div>

          <div className="absolute bottom-0 translate-y-1/2 right-8 z-30 bg-white p-4 rounded-2xl shadow-xl animate-float-delayed hidden lg:flex items-center space-x-3">
            <Heart className="w-8 h-8 text-[#F5B195]" />
            <div>
              <div className="font-bold text-gray-900">Patient Care</div>
              <div className="text-sm text-gray-500">98% Satisfaction</div>
            </div>
          </div>

          {/* Decorative elements */}
          <div className="absolute -top-8 -left-8 w-full h-full bg-[#0B6B5D]/10 rounded-3xl transform rotate-6" />
          <div className="absolute -bottom-8 -right-8 w-full h-full bg-[#F5B195]/20 rounded-3xl transform -rotate-6" />
          
          {/* Main image container */}
          <div className="relative z-20 rounded-3xl overflow-hidden shadow-2xl">
            <Image
              src="https://images.unsplash.com/photo-1622253692010-333f2da6031d"
              alt="Dr. Matthew Anderson"
              width={800}
              height={1000}
              className="w-full object-cover transform hover:scale-105 transition-transform duration-500"
              priority
            />
            
            {/* Overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            
            {/* Experience badge */}
            <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full">
              <div className="flex items-center space-x-2">
                <Users className="w-5 h-5 text-[#0B6B5D]" />
                <span className="font-semibold text-gray-900">15+ Years of Experience</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 