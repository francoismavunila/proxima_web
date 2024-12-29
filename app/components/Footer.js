import Link from 'next/link'
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-primary text-white">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold mb-4">Próxima Generación</h3>
            <p className="text-gray-300">
              Empowering the next generation with technology and entrepreneurship skills.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-300 hover:text-secondary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-300 hover:text-secondary transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-secondary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <div className="space-y-2">
              <p className="flex items-center text-gray-300">
                <Mail size={16} className="mr-2" />
                info@proximagen.tech
              </p>
              <p className="flex items-center text-gray-300">
                <Phone size={16} className="mr-2" />
                +1 (574) 397-3053 / +263783857780
              </p>
              <p className="flex items-center text-gray-300">
                <MapPin size={16} className="mr-2" />
                123 Tech Street, Innovation City
              </p>
            </div>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="https://www.linkedin.com/company/proxima-generacion-technologies/?viewAsMember=true" className="text-gray-300 hover:text-secondary transition-colors">
                <Linkedin size={24} />
              </a>
              <a href="#" className="text-gray-300 hover:text-secondary transition-colors">
                <Twitter size={24} />
              </a>
              <a href="#" className="text-gray-300 hover:text-secondary transition-colors">
                <Facebook size={24} />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-300">
          <p>© {new Date().getFullYear()} Próxima Generación Technologies. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}