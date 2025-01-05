// app/about/page.js
'use client'
import Image from 'next/image'
import * as LucideIcons from 'lucide-react'

export default function About() {
  const teamMembers = [
    {
      name: "Francois Mavunila",
      position: "Co-Founder",
      description: "Tech enthusiast with 7+ years of experience in education, entrepreneurship, AI and robotics.",
      imageUrl: "/francois_mavunila.jpg"
    },
    // {
    //   name: "Jane Smith",
    //   position: "Head of Technology",
    //   description: "Robotics expert and former tech lead at major tech companies.",
    //   imageUrl: "/images/jane.jpg"
    // },
    {
      name: "Devotion Chikutuva",
      position: "Co-Founder",
      description: "Passionate Entrepreneur with 7+ years of expertise in web development, AI, and robotics.",
      imageUrl: "/devotion_chikutuva.jpg"
    }
  ]

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-[#0e1525] text-white py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              About Próxima Generación
            </h1>
            <p className="text-xl">
              Empowering individuals with the skills and knowledge to lead the next
              generation of technological innovation.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-[#0e1525] mb-6">Our Mission</h2>
              <p className="text-gray-600 mb-4">
                At Próxima Generación, we believe in empowering individuals with the
                skills and mindset needed to thrive in the digital age. Our mission
                is to bridge the gap between traditional education and real-world
                technology applications.
              </p>
              <p className="text-gray-600">
                We focus on providing hands-on experience in cutting-edge technologies
                while fostering an entrepreneurial spirit that enables our students
                to become innovators and leaders in their fields.
              </p>
            </div>
            <div className="hidden md:block">
              <img 
                src="/goal.jpg"
                alt="Our Mission"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="bg-[#f5fdfc] py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-[#0e1525] mb-12 text-center">
            Meet Our Team
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {teamMembers.map((member, index) => (
                <div key={index} className="text-center">
                <div className="w-24 h-24 rounded-full mx-auto mb-4 overflow-hidden flex items-center justify-center">
                    <Image src={member.imageUrl} alt={member.name} width={120} height={120} className="object-cover" />
                </div>
                <h3 className="text-xl font-bold text-[#0e1525] mb-2">{member.name}</h3>
                <p className="text-[#319eae] font-medium mb-2">{member.position}</p>
                <p className="text-gray-600">{member.description}</p>
                </div>
            ))}
            </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-[#0e1525] mb-12 text-center">
            Our Values
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="bg-[#319eae] w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <LucideIcons.Star size={24} className="text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#0e1525] mb-2">Excellence</h3>
              <p className="text-gray-600">
                We strive for excellence in everything we do, from curriculum
                development to student support.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="bg-[#319eae] w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <LucideIcons.Heart size={24} className="text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#0e1525] mb-2">Passion</h3>
              <p className="text-gray-600">
                Our passion for technology and education drives us to create
                exceptional learning experiences.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="bg-[#319eae] w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <LucideIcons.Target size={24} className="text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#0e1525] mb-2">Innovation</h3>
              <p className="text-gray-600">
                We embrace innovation and encourage our students to think
                creatively and push boundaries.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}