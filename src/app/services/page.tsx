import Navigation from '@/components/layout/Navigation'
import Footer from '@/components/layout/Footer'
import ServiceCard from '@/components/features/ServiceCard'
import { Shield, Clock, Star, Users } from 'lucide-react'
import Image from 'next/image'
import Button from '@/components/shared/Button'

const services = [
  {
    iconName: '🏥',
    title: 'Regular Check-up',
    description: 'Comprehensive health screenings and preventive care to maintain your wellbeing.',
    price: '$150',
    features: ['Full Body Check-up', 'Blood Tests', 'Health Report', 'Doctor Consultation']
  },
  {
    iconName: '❤️',
    title: 'Cardiology',
    description: 'Expert heart health services including ECG, stress tests, and consultations.',
    price: '$200',
    features: ['ECG Test', 'Stress Test', 'Heart Monitoring', 'Expert Consultation']
  },
  {
    iconName: '🩺',
    title: 'Internal Medicine',
    description: 'Specialized care for complex medical conditions and chronic diseases.',
    price: '$180',
    features: ['Disease Management', 'Lab Tests', 'Treatment Plans', 'Follow-up Care']
  },
  {
    iconName: '👨‍👩‍👧‍👦',
    title: 'Family Medicine',
    description: 'Comprehensive healthcare services for all family members, of all ages.',
    price: '$160',
    features: ['Family Check-ups', 'Vaccinations', 'Pediatric Care', 'Senior Care']
  }
]

const stats = [
  { icon: Users, value: '10k+', label: 'Satisfied Patients' },
  { icon: Clock, value: '15+', label: 'Years Experience' },
  { icon: Star, value: '98%', label: 'Success Rate' },
  { icon: Shield, value: '100%', label: 'Quality Care' }
]

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-[#0B6B5D]/5 via-white to-[#F5B195]/5">
      <Navigation />
      <div className="pt-32 pb-16 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-[#0B6B5D]/10 rounded-full text-[#0B6B5D] font-semibold mb-4">
              OUR SERVICES
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Healthcare Services
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive medical services tailored to your needs with a focus on quality and patient care
            </p>
          </div>

          {/* Stats Section */}
          <div className="grid md:grid-cols-4 gap-8 mb-20">
            {stats.map((stat, index) => (
              <div key={index} className="bg-white p-6 rounded-2xl shadow-lg text-center">
                <stat.icon className="w-8 h-8 text-[#0B6B5D] mx-auto mb-4" />
                <div className="text-3xl font-bold text-[#0B6B5D] mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>

          {/* Why Choose Us Section */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
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
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-gray-900">Why Choose Our Services?</h2>
              <p className="text-gray-600">
                We combine state-of-the-art medical technology with compassionate care to provide 
                the best possible healthcare experience for our patients.
              </p>
              <ul className="space-y-4">
                {[
                  'Advanced Medical Equipment',
                  'Experienced Medical Team',
                  'Patient-Centered Approach',
                  'Convenient Location & Hours'
                ].map((item, index) => (
                  <li key={index} className="flex items-center space-x-3">
                    <span className="w-2 h-2 bg-[#0B6B5D] rounded-full" />
                    <span className="text-gray-600">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center bg-[#0B6B5D] rounded-2xl p-12">
            <h2 className="text-3xl font-bold text-white mb-6">
              Ready to Experience Better Healthcare?
            </h2>
            <p className="text-white/80 max-w-2xl mx-auto mb-8">
              Schedule your appointment today and take the first step towards better health.
            </p>
            <Button 
              size="lg" 
              className="bg-white text-[#0B6B5D] hover:bg-gray-100"
              href="/book-appointment"
            >
              Book Appointment
            </Button>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
} 