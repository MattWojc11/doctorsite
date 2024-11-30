import Navigation from '@/components/layout/Navigation'
import Image from 'next/image'
import Button from '@/components/shared/Button'
import Footer from '@/components/layout/Footer'

// Dane o kamieniach milowych
const timeline = [
  {
    year: '2008',
    title: 'Started Medical Practice',
    description: 'Opened first medical office in New York'
  },
  {
    year: '2012',
    title: 'Expanded Services',
    description: 'Added specialized cardiology department'
  },
  {
    year: '2015',
    title: 'Medical Center Opening',
    description: 'Launched state-of-the-art medical center'
  },
  {
    year: '2020',
    title: 'Telemedicine Integration',
    description: 'Introduced virtual consultations'
  }
]

// Dane o zespole
const team = [
  {
    name: 'Dr. Sarah Wilson',
    role: 'Cardiologist',
    image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2'
  },
  {
    name: 'Dr. James Chen',
    role: 'Internal Medicine',
    image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d'
  },
  {
    name: 'Dr. Emily Brown',
    role: 'Pediatrician',
    image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f'
  }
]

// Dane o technologiach
const technologies = [
  {
    name: 'Advanced MRI Scanner',
    description: 'Latest magnetic resonance imaging technology',
    icon: '🔬'
  },
  {
    name: 'Digital X-Ray',
    description: 'High-resolution digital radiography',
    icon: '📱'
  },
  {
    name: 'ECG System',
    description: 'State-of-the-art cardiac monitoring',
    icon: '❤️'
  }
]

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-[#0B6B5D]/5 via-white to-[#F5B195]/5">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block px-4 py-2 bg-[#0B6B5D]/10 rounded-full text-[#0B6B5D] font-semibold mb-4">
                ABOUT DR. MATTHEW
              </span>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Dedicated to Your Health & Wellbeing
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                With over 15 years of experience, we provide comprehensive healthcare 
                solutions using the latest medical technologies and evidence-based practices.
              </p>
              <div className="grid grid-cols-3 gap-6">
                <div className="text-center p-4 bg-white rounded-xl shadow-md">
                  <div className="text-3xl font-bold text-[#0B6B5D]">15+</div>
                  <div className="text-sm text-gray-600">Years Experience</div>
                </div>
                <div className="text-center p-4 bg-white rounded-xl shadow-md">
                  <div className="text-3xl font-bold text-[#0B6B5D]">10k+</div>
                  <div className="text-sm text-gray-600">Patients Served</div>
                </div>
                <div className="text-center p-4 bg-white rounded-xl shadow-md">
                  <div className="text-3xl font-bold text-[#0B6B5D]">98%</div>
                  <div className="text-sm text-gray-600">Success Rate</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-full h-full bg-[#0B6B5D]/10 rounded-2xl transform rotate-3" />
              <div className="absolute -bottom-4 -right-4 w-full h-full bg-[#F5B195]/20 rounded-2xl transform -rotate-3" />
              <Image
                src="https://images.unsplash.com/photo-1582750433449-648ed127bb54"
                alt="Dr. Matthew Anderson"
                width={500}
                height={600}
                className="relative z-10 rounded-2xl shadow-xl object-cover w-full h-[500px]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-[#0B6B5D] font-semibold">OUR JOURNEY</span>
            <h2 className="text-3xl font-bold text-gray-900 mt-2">Milestones & Achievements</h2>
          </div>
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-[#0B6B5D]/20" />
            
            {/* Timeline Items */}
            <div className="space-y-12">
              {timeline.map((item, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  <div className="flex-1 p-6">
                    <div className={`bg-white p-6 rounded-xl shadow-lg ${index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'}`}>
                      <div className="text-[#0B6B5D] font-bold mb-2">{item.year}</div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </div>
                  <div className="w-4 h-4 bg-[#0B6B5D] rounded-full z-10" />
                  <div className="flex-1" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-[#0B6B5D] font-semibold">OUR TEAM</span>
            <h2 className="text-3xl font-bold text-gray-900 mt-2">Meet Our Specialists</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-white p-6 rounded-2xl shadow-lg">
                <div className="relative mb-6 rounded-xl overflow-hidden h-64">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                <p className="text-[#0B6B5D]">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-[#0B6B5D] font-semibold">OUR EQUIPMENT</span>
            <h2 className="text-3xl font-bold text-gray-900 mt-2">Advanced Medical Technology</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {technologies.map((tech, index) => (
              <div key={index} className="bg-gradient-to-br from-[#0B6B5D]/5 to-white p-6 rounded-2xl">
                <div className="text-4xl mb-4">{tech.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{tech.name}</h3>
                <p className="text-gray-600">{tech.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <div className="bg-[#0B6B5D] rounded-2xl p-12">
            <h2 className="text-3xl font-bold text-white mb-6">
              Ready to Experience Our Care?
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
      </section>

      <Footer />
    </main>
  )
} 