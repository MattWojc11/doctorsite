'use client'

import Link from 'next/link'
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-[#0B6B5D] text-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-12">
          {/* About Section */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold mb-4">Dr. Matthew</h3>
            <p className="text-gray-300">
              Providing exceptional healthcare services with a personal touch for over 15 years.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-[#F5B195] transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="hover:text-[#F5B195] transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="hover:text-[#F5B195] transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="hover:text-[#F5B195] transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {[
                { label: 'About Us', href: '/about' },
                { label: 'Our Services', href: '/services' },
                { label: 'Book Appointment', href: '/book-appointment' },
                { label: 'Contact Us', href: '/contact' }
              ].map((link) => (
                <li key={link.label}>
                  <Link 
                    href={link.href} 
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-bold mb-4">Services</h3>
            <ul className="space-y-3">
              <li className="text-gray-300">Regular Check-ups</li>
              <li className="text-gray-300">Cardiology Services</li>
              <li className="text-gray-300">Internal Medicine</li>
              <li className="text-gray-300">Family Medicine</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-3 text-gray-300">
                <Phone size={20} />
                <span>(123) 456-7890</span>
              </li>
              <li className="flex items-center space-x-3 text-gray-300">
                <Mail size={20} />
                <span>contact@drmatthew.com</span>
              </li>
              <li className="flex items-center space-x-3 text-gray-300">
                <MapPin size={20} />
                <span>123 Medical Center Drive, NY</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-300">
          <p>&copy; {currentYear} Dr. Matthew Medical Practice. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
} 