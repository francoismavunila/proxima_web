'use client'
import * as LucideIcons from 'lucide-react'
import Image from 'next/image'

function ServiceCard({ title, description, features, iconName }) {
  const Icon = LucideIcons[iconName]
  return (
    <div className="bg-[#f5fdfc] p-8 rounded-lg">
      <div className="text-[#319eae] mb-4">
        <Icon size={40} />
      </div>
      <h3 className="text-xl font-bold text-[#0e1525] mb-3">
        {title}
      </h3>
      <p className="text-gray-600 mb-4">
        {description}
      </p>
      <ul className="space-y-2">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center text-gray-600">
            <LucideIcons.CheckCircle size={16} className="text-[#319eae] mr-2" />
            {feature}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default function Services() {
  return (
    <div className="flex flex-col">
      {/* Services Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-[#0e1525] mb-4">Our Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We offer comprehensive programs in technology and entrepreneurship, designed
              to give you practical skills and real-world experience.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <ServiceCard
              iconName="Code"
              title="Technology Education"
              description="Learn cutting-edge technologies through hands-on projects and expert guidance."
              features={["Web Development", "Mobile Apps", "Cloud Computing"]}
            />

            <ServiceCard
              iconName="Bot"
              title="Robotics Training"
              description="Master robotics fundamentals and advanced concepts through practical experience."
              features={["Robot Programming", "Sensor Integration", "AI & Automation"]}
            />

            <ServiceCard
              iconName="Lightbulb"
              title="Entrepreneurship"
              description="Transform your tech ideas into successful business ventures with our mentorship."
              features={["Business Planning", "Market Research", "Pitch Development"]}
            />
          </div>
        </div>
      </section>

      {/* Robotics Club Section */}
      <section className="py-20 bg-[#f5fdfc]">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-[#0e1525] mb-12 text-center">
            Robotics Club at Local Schools
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            <div className="rounded-lg overflow-hidden">
              <Image src="/robotics/1.jpg" alt="Robotics Club 1" width={300} height={200} className="object-cover" />
            </div>
            <div className="rounded-lg overflow-hidden">
              <Image src="/robotics/2.jpg" alt="Robotics Club 2" width={300} height={200} className="object-cover" />
            </div>
            <div className="rounded-lg overflow-hidden">
              <Image src="/robotics/3.jpg" alt="Robotics Club 3" width={300} height={200} className="object-cover" />
            </div>
            <div className="rounded-lg overflow-hidden">
              <Image src="/robotics/4.jpeg" alt="Robotics Club 4" width={300} height={200} className="object-cover" />
            </div>
          </div>
          <p className="text-gray-600 text-center text-lg font-semibold">
            We are making a significant impact on local schools such as Pumula High and Msiteli High by providing comprehensive robotics training. Our programs are designed to inspire and equip students with the skills needed to excel in the field of robotics, entrepreneurship and technology.
          </p>
        </div>
      </section>
    </div>
  )
}
