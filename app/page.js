'use client'
import Image from 'next/image'
import Link from 'next/link'
import * as LucideIcons from 'lucide-react'

function ServiceCard({ title, description, features, iconName, imageUrl }) {
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
      {imageUrl && (
        <div className="mb-4">
          <Image src={imageUrl} alt={title} width={600} height={400} className="rounded-lg shadow-xl" />
        </div>
      )}
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

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-[#0e1525] text-white py-20">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Shape the Future with Technology
              </h1>
              <p className="text-xl mb-8">
                Empowering the next generation through hands-on technology education
                and entrepreneurship guidance.
              </p>
              <div className="flex gap-4">
                <Link 
                  href="/services" 
                  className="bg-[#319eae] px-8 py-3 rounded-lg hover:bg-opacity-90 transition-colors inline-flex items-center"
                >
                  Explore Our Programs <LucideIcons.ArrowRight className="ml-2" size={20} />
                </Link>
                <Link 
                  href="/contact" 
                  className="border border-white px-8 py-3 rounded-lg hover:bg-white hover:text-[#0e1525] transition-colors"
                >
                  Contact Us
                </Link>
              </div>
            </div>
            <div className="hidden md:block">
              {/* <img 
                src="/api/placeholder/600/400"
                alt="Technology Education"
                className="rounded-lg shadow-xl"
              /> */}
                
                  <iframe 
                    title="" 
                    frameBorder="0" 
                    allowFullScreen 
                    mozallowfullscreen="true" 
                    webkitallowfullscreen="true" 
                    allow="autoplay; fullscreen; xr-spatial-tracking" 
                    src="https://sketchfab.com/models/53e7eeb0f69540d2892ad6aa5f47bd39/embed?autospin=1&autostart=1&transparent=1&ui_infos=0&ui_watermark_link=0&ui_watermark=0" 
                    className="rounded-lg shadow-xl" 
                    style={{ width: '600px', height: '400px' }}
                  ></iframe>
      
            </div>
          </div>
        </div>
      </section>

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
              imageUrl="/technology.jpg"
            />

            <ServiceCard
              iconName="Bot"
              title="Robotics Training"
              description="Master robotics fundamentals and advanced concepts through practical experience."
              features={["Robot Programming", "Sensor Integration", "AI & Automation"]}
              imageUrl="/robotics.jpg"
            />

            <ServiceCard
              iconName="Lightbulb"
              title="Entrepreneurship"
              description="Transform your tech ideas into successful business ventures with our mentorship."
              features={["Business Planning", "Market Research", "Pitch Development"]}
              imageUrl="/entrepreneur.jpg"
            />
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="bg-[#f5fdfc] py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-[#0e1525] mb-4">Why Choose Us</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We combine technical expertise with entrepreneurial insight to provide
              a unique learning experience.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6">
  <div className="flex items-start space-x-4">
    <div className="bg-[#319eae] p-3 rounded-lg">
      <LucideIcons.Users size={24} className="text-white" />
    </div>
    <div>
      <h3 className="text-xl font-bold text-[#0e1525] mb-2">
        Expert Mentorship
      </h3>
      <p className="text-gray-600">
        Learn from industry professionals with years of experience in
        technology and entrepreneurship.
      </p>
    </div>
  </div>

  <div className="flex items-start space-x-4">
    <div className="bg-[#319eae] p-3 rounded-lg">
      <LucideIcons.Code size={24} className="text-white" />
    </div>
    <div>
      <h3 className="text-xl font-bold text-[#0e1525] mb-2">
        Hands-on Learning
      </h3>
      <p className="text-gray-600">
        Build real projects and gain practical experience that you can
        apply immediately.
      </p>
    </div>
  </div>

  <div className="flex items-start space-x-4">
    <div className="bg-[#319eae] p-3 rounded-lg">
      <LucideIcons.Globe size={24} className="text-white" />
    </div>
    <div>
      <h3 className="text-xl font-bold text-[#0e1525] mb-2">
        Global Network
      </h3>
      <p className="text-gray-600">
        Connect with peers and mentors from around the world to expand your
        professional network.
      </p>
    </div>
  </div>

  <div className="flex items-start space-x-4">
    <div className="bg-[#319eae] p-3 rounded-lg">
      <LucideIcons.TrendingUp size={24} className="text-white" />
    </div>
    <div>
      <h3 className="text-xl font-bold text-[#0e1525] mb-2">
        Career Growth
      </h3>
      <p className="text-gray-600">
        Gain the skills and knowledge needed to advance your career in the
        tech industry.
      </p>
    </div>
  </div>

  {/* <div className="flex items-start space-x-4">
    <div className="bg-[#319eae] p-3 rounded-lg">
      <LucideIcons.BookOpen size={24} className="text-white" />
    </div>
    <div>
      <h3 className="text-xl font-bold text-[#0e1525] mb-2">
        Comprehensive Curriculum
      </h3>
      <p className="text-gray-600">
        Our curriculum covers a wide range of topics to ensure you have a
        well-rounded education.
      </p>
    </div>
  </div> */}
</div>

            <div className="hidden md:block">
              <img 
                src="/learning.jpg"
                alt="Learning Experience"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#0e1525] text-white py-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Start Your Journey?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join us and develop the skills you need to succeed in the rapidly
            evolving world of technology and entrepreneurship.
          </p>
          <Link 
            href="/contact"
            className="bg-[#319eae] px-8 py-3 rounded-lg hover:bg-opacity-90 transition-colors inline-flex items-center"
          >
            Get Started Today <LucideIcons.ArrowRight className="ml-2" size={20} />
          </Link>
        </div>
      </section>
    </div>
  )
}