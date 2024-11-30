import Navigation from '@/components/layout/Navigation'
import ContactForm from '@/components/layout/ContactForm'
import ContactInfo from '@/components/layout/ContactInfo'
import Footer from '@/components/layout/Footer'
import { MapPin, Clock, Phone, Mail } from 'lucide-react'

const contactMethods = [
  {
    icon: Phone,
    title: 'Phone',
    description: '24/7 Emergency Line',
    info: '(123) 456-7890',
    color: 'bg-blue-50'
  },
  {
    icon: Mail,
    title: 'Email',
    description: 'Response within 24h',
    info: 'contact@drmatthew.com',
    color: 'bg-green-50'
  },
  {
    icon: Clock,
    title: 'Hours',
    description: 'Working Hours',
    info: 'Mon-Sat: 9:00 AM - 6:00 PM',
    color: 'bg-purple-50'
  },
  {
    icon: MapPin,
    title: 'Location',
    description: 'Visit Our Office',
    info: '123 Medical Center Drive, NY',
    color: 'bg-orange-50'
  }
]

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-[#0B6B5D]/5 via-white to-[#F5B195]/5">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-[#0B6B5D]/10 rounded-full text-[#0B6B5D] font-semibold mb-4">
              GET IN TOUCH
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Contact Our Medical Office
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We re here to help and answer any questions you might have. 
              Feel free to reach out to us through any of the following methods.
            </p>
          </div>

          {/* Contact Methods Grid */}
          <div className="grid md:grid-cols-4 gap-8 mb-16">
            {contactMethods.map((method, index) => (
              <div 
                key={index} 
                className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className={`w-12 h-12 ${method.color} rounded-full flex items-center justify-center mb-4`}>
                  <method.icon className="w-6 h-6 text-[#0B6B5D]" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-1">{method.title}</h3>
                <p className="text-sm text-gray-500 mb-3">{method.description}</p>
                <p className="text-[#0B6B5D] font-semibold">{method.info}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="relative h-[600px] w-full mb-16">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.15830869428!2d-74.119763973046!3d40.69766374874431!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2spl!4v1647043099272!5m2!1sen!2spl"
          className="absolute inset-0 w-full h-full"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
        />
        
        {/* Location Card */}
        <div className="absolute top-8 left-8 bg-white p-8 rounded-2xl shadow-xl max-w-md">
          <div className="flex items-center space-x-4 text-[#0B6B5D] mb-6">
            <MapPin className="w-8 h-8" />
            <div>
              <h3 className="text-2xl font-bold">Visit Our Office</h3>
              <p className="text-gray-600">Find us at our convenient location</p>
            </div>
          </div>
          <div className="space-y-4">
            <div>
              <h4 className="font-semibold text-gray-900 mb-1">Dr. Matthew Medical Center</h4>
              <p className="text-gray-600">123 Medical Center Drive</p>
              <p className="text-gray-600">New York, NY 10001</p>
            </div>
            <div className="pt-4 border-t">
              <a 
                href="https://goo.gl/maps/your-location-link" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 text-[#0B6B5D] font-semibold hover:text-[#0B6B5D]/80 transition-colors"
              >
                <span>Get Directions</span>
                <MapPin className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="max-w-7xl mx-auto px-6 pb-16">
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <ContactForm />
          </div>
          <div className="space-y-8">
            <ContactInfo />
            
            {/* Emergency Contact */}
            <div className="bg-red-50 p-6 rounded-2xl border border-red-100">
              <h3 className="text-xl font-bold text-red-600 mb-2">24/7 Emergency Line</h3>
              <p className="text-gray-600 mb-4">
                For medical emergencies, please call our emergency hotline immediately:
              </p>
              <div className="flex items-center space-x-3 text-red-600 font-bold">
                <Phone className="w-5 h-5" />
                <span>(123) 456-7890</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
} 