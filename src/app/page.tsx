'use client'

import Navigation from '@/components/layout/Navigation'
import Hero from '@/components/layout/Hero'
import Testimonials from '@/components/features/Testimonials'
import Footer from '@/components/layout/Footer'
import { Shield, Clock, UserCheck, Award, Star, Heart, Users, CheckCircle } from 'lucide-react'
import Image from 'next/image'
import Button from '@/components/shared/Button'

const features = [
  {
    icon: Shield,
    title: 'Quality Care',
    description: 'Highest standards of medical treatment and patient care'
  },
  {
    icon: Clock,
    title: 'Available 24/7',
    description: 'Emergency medical services available round the clock'
  },
  {
    icon: UserCheck,
    title: 'Expert Doctors',
    description: 'Team of highly qualified and experienced medical professionals'
  },
  {
    icon: Award,
    title: 'Certified Services',
    description: 'All medical services are certified and accredited'
  }
]

const stats = [
  { value: '15+', label: 'Years of Experience', icon: Clock },
  { value: '10k+', label: 'Patients Served', icon: Users },
  { value: '98%', label: 'Success Rate', icon: Star },
  { value: '24/7', label: 'Emergency Care', icon: Heart }
]

const services = [
  {
    icon: '🏥',
    title: 'Regular Check-up',
    description: 'Comprehensive health screenings',
    price: '$150'
  },
  {
    icon: '❤️',
    title: 'Cardiology',
    description: 'Heart health services',
    price: '$200'
  },
  {
    icon: '🩺',
    title: 'Internal Medicine',
    description: 'Complex medical conditions',
    price: '$180'
  },
  {
    icon: '👨‍👩‍👧‍👦',
    title: 'Family Medicine',
    description: 'Care for all ages',
    price: '$160'
  }
]

const whyChooseUs = [
  {
    title: 'Experienced Team',
    description: 'Our medical professionals have years of experience in their respective fields'
  },
  {
    title: 'Modern Technology',
    description: 'State-of-the-art medical equipment and facilities'
  },
  {
    title: 'Patient-Centered Care',
    description: 'Personalized treatment plans tailored to your needs'
  },
  {
    title: 'Affordable Pricing',
    description: 'Quality healthcare at competitive prices'
  }
]

export default function Home() {
  return (
    <main>
      <Navigation />
      <Hero />

      {/* Features Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-[#0B6B5D] font-semibold">WHY CHOOSE US</span>
            <h2 className="text-4xl font-bold text-gray-900 mt-2">Features That Set Us Apart</h2>
            <p className="text-xl text-gray-600 mt-4 max-w-2xl mx-auto">
              We combine modern technology with traditional care values to provide you with the best possible healthcare experience.
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="p-6 rounded-2xl bg-gradient-to-br from-[#0B6B5D]/5 to-white hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
              >
                <feature.icon className="w-12 h-12 text-[#0B6B5D] mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-6 bg-[#0B6B5D]">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <stat.icon className="w-12 h-12 text-white/80 mx-auto mb-4" />
                <div className="text-4xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-white/80">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Services */}
      <section className="py-20 px-6 bg-gradient-to-br from-[#0B6B5D]/5 via-white to-[#F5B195]/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-[#0B6B5D] font-semibold">OUR SERVICES</span>
            <h2 className="text-4xl font-bold text-gray-900 mt-2">Popular Medical Services</h2>
            <p className="text-xl text-gray-600 mt-4 max-w-2xl mx-auto">
              We offer a wide range of medical services to meet your healthcare needs.
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div 
                key={index}
                className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <div className="text-[#0B6B5D] font-bold">{service.price}</div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button 
              href="/services"
              className="bg-[#0B6B5D] text-white hover:bg-[#0B6B5D]/90"
            >
              View All Services
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-full h-full bg-[#0B6B5D]/10 rounded-2xl transform rotate-3" />
              <div className="absolute -bottom-4 -right-4 w-full h-full bg-[#F5B195]/20 rounded-2xl transform -rotate-3" />
              <Image
                src="https://images.unsplash.com/photo-1631815588090-d4bfec5b1ccb"
                alt="Medical Facility"
                width={600}
                height={400}
                className="relative z-10 rounded-2xl shadow-xl object-cover"
              />
            </div>
            <div>
              <span className="text-[#0B6B5D] font-semibold">WHY CHOOSE US</span>
              <h2 className="text-4xl font-bold text-gray-900 mt-2 mb-6">
                Providing Quality Healthcare Solutions
              </h2>
              <div className="space-y-6">
                {whyChooseUs.map((item, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="bg-[#0B6B5D]/10 rounded-lg p-2">
                      <CheckCircle className="w-6 h-6 text-[#0B6B5D]" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-1">{item.title}</h3>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Testimonials />

      {/* CTA Section */}
      <section className="py-20 px-6 bg-[#0B6B5D]">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Experience Better Healthcare?
          </h2>
          <p className="text-white/80 max-w-2xl mx-auto mb-8">
            Schedule your appointment today and take the first step towards better health
            with Dr. Matthew Anderson.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-white text-[#0B6B5D] hover:bg-gray-100"
              href="/book-appointment"
            >
              Book Appointment
            </Button>
            <Button 
              size="lg" 
              variant="secondary" 
              className="border-2 border-white text-white hover:bg-white/10"
              href="/contact"
            >
              Contact Us
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
