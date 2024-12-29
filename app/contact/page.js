'use client'
import * as LucideIcons from 'lucide-react'

export default function Contact() {
  return (
    <div className="flex flex-col bg-white">
      {/* Contact Us Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-[#0e1525] mb-4">Contact Us</h2>
            <p className="text-gray-700 max-w-2xl mx-auto">
              Have questions or need more information? Reach out to us and we'll be happy to help.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <h3 className="text-xl font-bold text-[#0e1525] mb-4">Get in Touch</h3>
              <p className="text-gray-700 mb-6">
                Fill out the form below and we'll get back to you as soon as possible.
              </p>
              <form className="space-y-4">
                <div>
                  <label className="block text-gray-700 mb-2" htmlFor="name">Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full p-3 border border-gray-300 rounded-lg bg-white text-gray-900" 
                    placeholder="Your Name" 
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2" htmlFor="email">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full p-3 border border-gray-300 rounded-lg bg-white text-gray-900" 
                    placeholder="Your Email" 
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2" htmlFor="message">Message</label>
                  <textarea 
                    id="message" 
                    className="w-full p-3 border border-gray-300 rounded-lg bg-white text-gray-900" 
                    placeholder="Your Message" 
                    rows="5"
                  ></textarea>
                </div>
                <button 
                  type="submit" 
                  className="bg-[#319eae] px-8 py-3 rounded-lg text-white hover:bg-opacity-90 transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-[#319eae] p-3 rounded-lg">
                  <LucideIcons.MapPin size={24} className="text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#0e1525] mb-2">
                    Our Address
                  </h3>
                  <p className="text-gray-700">
                    123 Tech Street, Innovation City, TX 12345
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-[#319eae] p-3 rounded-lg">
                  <LucideIcons.Phone size={24} className="text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#0e1525] mb-2">
                    Call Us
                  </h3>
                  <p className="text-gray-700">
                  +1 (574) 397-3053 / +263783857780
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-[#319eae] p-3 rounded-lg">
                  <LucideIcons.Mail size={24} className="text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#0e1525] mb-2">
                    Email Us
                  </h3>
                  <p className="text-gray-700">
                    info@techfuture.com
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
