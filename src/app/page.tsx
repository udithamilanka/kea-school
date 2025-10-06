import Link from 'next/link';

interface Program {
  id: number;
  title: string;
  description: string;
  icon: string;
}

interface Event {
  id: number;
  title: string;
  date: string;
  location: string;
}

interface Stat {
  id: number;
  value: string;
  label: string;
}

interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
  avatar: string;
}

const programs: Program[] = [
  {
    id: 1,
    title: "Primary Education",
    description: "Foundation years focusing on core subjects and creative development",
    icon: "📚"
  },
  {
    id: 2,
    title: "Secondary Education",
    description: "Comprehensive curriculum preparing students for higher education",
    icon: "🎓"
  },
  {
    id: 3,
    title: "STEM Programs",
    description: "Advanced science, technology, engineering, and mathematics courses",
    icon: "🔬"
  },
  {
    id: 4,
    title: "Arts & Culture",
    description: "Music, drama, visual arts, and cultural enrichment programs",
    icon: "🎨"
  }
];

const events: Event[] = [
  {
    id: 1,
    title: "Annual Science Fair",
    date: "March 15, 2025",
    location: "Main Auditorium"
  },
  {
    id: 2,
    title: "Parent-Teacher Conference",
    date: "March 22, 2025",
    location: "School Campus"
  },
  {
    id: 3,
    title: "Spring Sports Day",
    date: "April 5, 2025",
    location: "Athletic Field"
  }
];

const stats: Stat[] = [
  { id: 1, value: "1200+", label: "Students" },
  { id: 2, value: "85+", label: "Teachers" },
  { id: 3, value: "98%", label: "Success Rate" },
  { id: 4, value: "30+", label: "Years Experience" }
];

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Parent",
    content: "Excellent faculty and wonderful learning environment. My children have flourished here!",
    avatar: "👩"
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Alumni",
    content: "The education I received here prepared me perfectly for university and beyond.",
    avatar: "👨"
  },
  {
    id: 3,
    name: "Emma Davis",
    role: "Parent",
    content: "Outstanding extracurricular activities and dedicated staff. Highly recommended!",
    avatar: "👩‍🦰"
  }
];

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-blue-900 text-white shadow-lg sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <span className="text-3xl">🏫</span>
              <span className="text-2xl font-bold">KEA</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <Link href="#home" className="hover:text-blue-300 transition">Home</Link>
              <Link href="#programs" className="hover:text-blue-300 transition">Programs</Link>
              <Link href="#events" className="hover:text-blue-300 transition">Events</Link>
              <Link href="#about" className="hover:text-blue-300 transition">About</Link>
              <Link href="#contact" className="hover:text-blue-300 transition">Contact</Link>
            </div>
            <button className="bg-yellow-500 text-blue-900 px-6 py-2 rounded-lg font-semibold hover:bg-yellow-400 transition">
              Enroll Now
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-24">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Welcome to KEA, Prod
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Empowering minds, building futures. Quality education for every child.
            Join us today!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-yellow-500 text-blue-900 px-8 py-3 rounded-lg font-semibold text-lg hover:bg-yellow-400 transition">
              Schedule a Tour
            </button>
            <button className="bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold text-lg hover:bg-gray-100 transition">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.id} className="text-center">
                <div className="text-4xl font-bold text-blue-900 mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section id="programs" className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-blue-900 mb-4">
            Our Programs
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Comprehensive educational programs designed to nurture every aspect of student development
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {programs.map((program) => (
              <div 
                key={program.id}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100"
              >
                <div className="text-5xl mb-4">{program.icon}</div>
                <h3 className="text-xl font-bold text-blue-900 mb-3">
                  {program.title}
                </h3>
                <p className="text-gray-600">{program.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section id="events" className="py-20 bg-blue-50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-blue-900 mb-4">
            Upcoming Events
          </h2>
          <p className="text-center text-gray-600 mb-12">
            Join us for these exciting upcoming events
          </p>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {events.map((event) => (
              <div 
                key={event.id}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="text-yellow-500 text-2xl mb-3">📅</div>
                <h3 className="text-xl font-bold text-blue-900 mb-2">
                  {event.title}
                </h3>
                <p className="text-gray-600 mb-1">📍 {event.location}</p>
                <p className="text-blue-600 font-semibold">{event.date}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-blue-900 mb-6">
                About KEA
              </h2>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Founded in 1995, KEA has been a cornerstone of educational excellence in our community. We are committed to providing a nurturing environment where students can thrive academically, socially, and emotionally.
              </p>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Our experienced faculty combines traditional values with innovative teaching methods to prepare students for success in an ever-changing world.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center text-gray-700">
                  <span className="text-green-500 mr-3 text-xl">✓</span>
                  Accredited curriculum and certified teachers
                </li>
                <li className="flex items-center text-gray-700">
                  <span className="text-green-500 mr-3 text-xl">✓</span>
                  Small class sizes for personalized attention
                </li>
                <li className="flex items-center text-gray-700">
                  <span className="text-green-500 mr-3 text-xl">✓</span>
                  State-of-the-art facilities and resources
                </li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl p-12 text-center">
              <div className="text-8xl mb-4">🎓</div>
              <h3 className="text-2xl font-bold text-blue-900 mb-2">
                Excellence in Education
              </h3>
              <p className="text-gray-700">
                Nurturing minds, inspiring futures
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-blue-900 mb-4">
            What Parents Say
          </h2>
          <p className="text-center text-gray-600 mb-12">
            Hear from our community members
          </p>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial) => (
              <div 
                key={testimonial.id}
                className="bg-white p-6 rounded-lg shadow-md"
              >
                <div className="text-4xl mb-4">{testimonial.avatar}</div>
                <p className="text-gray-600 mb-4 italic">&quot;{testimonial.content}&quot;</p>
                <div className="border-t pt-4">
                  <p className="font-bold text-blue-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-blue-900 text-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-4xl font-bold mb-6">Get in Touch</h2>
              <p className="mb-8 text-blue-100">
                Have questions? We&apos;d love to hear from you. Send us a message and we&apos;ll respond as soon as possible.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <span className="text-2xl mr-4">📍</span>
                  <div>
                    <p className="font-semibold">Address</p>
                    <p className="text-blue-100">123 Education Street, Learning City, LC 12345</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="text-2xl mr-4">📞</span>
                  <div>
                    <p className="font-semibold">Phone</p>
                    <p className="text-blue-100">+1 (555) 123-4567</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="text-2xl mr-4">✉️</span>
                  <div>
                    <p className="font-semibold">Email</p>
                    <p className="text-blue-100">info@oakwoodacademy.edu</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg p-8 text-gray-800">
              <form className="space-y-4">
                <div>
                  <label className="block font-semibold mb-2">Name</label>
                  <input 
                    type="text"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block font-semibold mb-2">Email</label>
                  <input 
                    type="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label className="block font-semibold mb-2">Message</label>
                  <textarea 
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                    placeholder="How can we help you?"
                  ></textarea>
                </div>
                <button 
                  type="submit"
                  className="w-full bg-yellow-500 text-blue-900 py-3 rounded-lg font-semibold hover:bg-yellow-400 transition"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-6 text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <span className="text-3xl">🏫</span>
            <span className="text-2xl font-bold">KEA</span>
          </div>
          <p className="text-gray-400 mb-4">
            Empowering minds, building futures since 1995
          </p>
          <p className="text-gray-500 text-sm">
            © 2025 KEA. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}