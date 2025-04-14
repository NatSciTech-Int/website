import Link from "next/link"
import Image from "next/image"
import { Facebook, Twitter, Instagram, Linkedin, Mail, MapPin, Globe, Calendar, Users } from "lucide-react"

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-[#0a101e]">
      <div className="bg-gradient-to-r from-[rgb(var(--primary))]/20 to-[rgb(var(--secondary))]/20 py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <div className="relative w-12 h-12 bg-white/10 rounded-lg p-2">
                  <Image src="/logo.png" alt="NatSciTech Logo" fill className="object-contain" />
                </div>
                <div>
                  <h2 className="font-bold text-2xl tracking-wide">
                    <span className="text-[rgb(var(--primary-light))]">Lib</span>
                    <span className="text-white">Sci</span>
                  </h2>
                  <p className="text-white/60 text-sm">International High School Organization</p>
                </div>
              </div>

              <p className="text-white/80 mb-8 max-w-lg leading-relaxed">
                The Library of Science is a non-profit working for the academic development of natural sciences and
                technologies on an international scale, connecting high school students from around the world.
              </p>

              <div className="flex flex-wrap gap-3">
                <Link
                  href="#"
                  className="px-4 py-2 bg-white/10 hover:bg-[rgb(var(--primary))]/20 rounded-md text-white/80 hover:text-white transition-colors flex items-center space-x-2"
                >
                  <Facebook size={18} />
                  <span>Facebook</span>
                </Link>
                <Link
                  href="#"
                  className="px-4 py-2 bg-white/10 hover:bg-[rgb(var(--primary))]/20 rounded-md text-white/80 hover:text-white transition-colors flex items-center space-x-2"
                >
                  <Twitter size={18} />
                  <span>Twitter</span>
                </Link>
                <a
                  href="https://www.instagram.com/libsci/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-white/10 hover:bg-[rgb(var(--primary))]/20 rounded-md text-white/80 hover:text-white transition-colors flex items-center space-x-2"
                >
                  <Instagram size={18} />
                  <span>Instagram</span>
                </a>
                <Link
                  href="#"
                  className="px-4 py-2 bg-white/10 hover:bg-[rgb(var(--primary))]/20 rounded-md text-white/80 hover:text-white transition-colors flex items-center space-x-2"
                >
                  <Linkedin size={18} />
                  <span>LinkedIn</span>
                </Link>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-white font-semibold text-lg mb-4 flex items-center">
                  <Globe className="mr-2 text-[rgb(var(--primary-light))]" size={20} />
                  Navigation
                </h3>
                <ul className="space-y-2">
                  <li>
                    <Link href="/" className="text-white/70 hover:text-[rgb(var(--primary-light))] transition-colors">
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/about"
                      className="text-white/70 hover:text-[rgb(var(--primary-light))] transition-colors"
                    >
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/programs"
                      className="text-white/70 hover:text-[rgb(var(--primary-light))] transition-colors"
                    >
                      Programs
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/members"
                      className="text-white/70 hover:text-[rgb(var(--primary-light))] transition-colors"
                    >
                      Members
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/blog"
                      className="text-white/70 hover:text-[rgb(var(--primary-light))] transition-colors"
                    >
                      Blog
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/contact"
                      className="text-white/70 hover:text-[rgb(var(--primary-light))] transition-colors"
                    >
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-white font-semibold text-lg mb-4 flex items-center">
                  <Calendar className="mr-2 text-[rgb(var(--secondary-light))]" size={20} />
                  Programs
                </h3>
                <ul className="space-y-2">
                  <li>
                    <Link
                      href="/programs#blog-contest"
                      className="text-white/70 hover:text-[rgb(var(--secondary-light))] transition-colors"
                    >
                      Blog Contest
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/programs#mentorship"
                      className="text-white/70 hover:text-[rgb(var(--secondary-light))] transition-colors"
                    >
                      Mentorship
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/programs#research"
                      className="text-white/70 hover:text-[rgb(var(--secondary-light))] transition-colors"
                    >
                      Research
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/programs#workshops"
                      className="text-white/70 hover:text-[rgb(var(--secondary-light))] transition-colors"
                    >
                      Workshops
                    </Link>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-white font-semibold text-lg mb-4 flex items-center">
                  <Users className="mr-2 text-[rgb(var(--primary-light))]" size={20} />
                  Connect
                </h3>
                <ul className="space-y-2">
                  <li>
                    <a
                      href="mailto:contact@libsci.org"
                      className="text-white/70 hover:text-[rgb(var(--primary-light))] transition-colors flex items-center"
                    >
                      <Mail size={14} className="mr-2" />
                      contact@libsci.org
                    </a>
                  </li>
                  <li className="flex items-start">
                    <MapPin size={14} className="text-[rgb(var(--primary-light))] mt-1 mr-2 flex-shrink-0" />
                    <span className="text-white/70">International Organization (Online)</span>
                  </li>
                  <li>
                    <a
                      href="https://libsci.vercel.app"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white/70 hover:text-[rgb(var(--primary-light))] transition-colors flex items-center"
                    >
                      <Globe size={14} className="mr-2" />
                      libsci.vercel.app
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-[#1e2a40] py-6">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-white/60 text-sm mb-4 md:mb-0">
              © {currentYear} Library of Science. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link href="/privacy" className="text-white/60 hover:text-white text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-white/60 hover:text-white text-sm transition-colors">
                Terms of Service
              </Link>
              <Link
                href="/join"
                className="text-[rgb(var(--primary-light))] hover:text-white text-sm transition-colors"
              >
                Join Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
