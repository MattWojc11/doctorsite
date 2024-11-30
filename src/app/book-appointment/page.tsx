import Navigation from '@/components/layout/Navigation'
import BookingForm from '@/components/features/BookingForm'
import Footer from '@/components/layout/Footer'

export default function BookAppointmentPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-[#0B6B5D]/5 via-white to-[#F5B195]/5">
      <Navigation />
      <div className="pt-32 pb-16">
        <div className="max-w-3xl mx-auto px-6">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-2 bg-[#0B6B5D]/10 rounded-full text-[#0B6B5D] font-semibold mb-4">
              SCHEDULE AN APPOINTMENT
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Book Your Visit Today
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Take the first step towards better health. Choose your preferred time and date for a consultation.
            </p>
          </div>

          {/* Booking Form */}
          <BookingForm />
        </div>
      </div>
      <Footer />
    </main>
  )
} 