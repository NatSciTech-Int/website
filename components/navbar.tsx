"use client"
import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeLink, setActiveLink] = useState("/")

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    // Set active link based on current path
    setActiveLink(window.location.pathname)

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/programs", label: "Programs" },
    { href: "/members", label: "Members" },
    { href: "/blog", label: "Blog" },
    { href: "/contact", label: "Contact" },
  ]

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-[#0a101e]/95 backdrop-blur-md" : "bg-[#0a101e]"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex items-center space-x-3">
              <div className="relative w-10 h-10 sm:w-12 sm:h-12">
                <Image src="/logo.png" alt="NatSciTech Logo" fill className="object-contain" />
              </div>
              <div className="hidden md:block">
                <h1 className="font-bold text-xl tracking-wide text-white">
                  <span className="text-[rgb(var(--primary-light))]">Nat</span>
                  <span className="text-white">Sci</span>
                  <span className="text-[rgb(var(--secondary-light))]">Tech</span>
                </h1>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center">
            <div className="flex bg-[#111827]/50 rounded-full p-2 mx-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-6 py-3 text-base font-medium rounded-full transition-colors ${
                    activeLink === link.href
                      ? "bg-gradient-to-r from-[rgb(var(--primary))] to-[rgb(var(--secondary))] text-white shadow-lg"
                      : "text-white/80 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <Link
              href="/join"
              className="inline-flex items-center justify-center rounded-full bg-white text-[#0a101e] px-6 py-3 text-base font-medium hover:bg-[rgb(var(--primary-light))] hover:text-white transition-colors duration-300"
            >
              Join Us
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-3 rounded-full bg-white/10 text-white/90 hover:text-white hover:bg-white/20 focus:outline-none"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-[#111827] absolute w-full">
          <div className="px-4 pt-4 pb-6 space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`block px-4 py-3 rounded-lg text-base font-medium ${
                  activeLink === link.href
                    ? "bg-gradient-to-r from-[rgb(var(--primary))] to-[rgb(var(--secondary))] text-white shadow-md"
                    : "text-white/80 hover:text-white hover:bg-[#1e2a40]"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/join"
              className="block px-4 py-3 rounded-lg text-base font-medium bg-white text-[#0a101e] hover:bg-[rgb(var(--primary-light))] hover:text-white mt-4 text-center"
              onClick={() => setIsMenuOpen(false)}
            >
              Join Us
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}

export default Navbar

