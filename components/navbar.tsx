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
        scrolled ? "bg-[#0a101e]/95 backdrop-blur-md border-b border-[#1e2a40]" : "bg-[#0a101e]"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex items-center space-x-3">
              <div className="relative w-8 h-8 sm:w-9 sm:h-9">
                <Image src="/logo.png" alt="NatSciTech Logo" fill className="object-contain" />
              </div>
              <div className="hidden md:block">
                <h1 className="font-bold text-lg tracking-wide text-white">
                  <span className="text-[rgb(var(--primary-light))]">Nat</span>
                  <span className="text-white">Sci</span>
                  <span className="text-[rgb(var(--secondary-light))]">Tech</span>
                </h1>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center">
            <div className="flex bg-[#111827]/50 rounded-full p-1 mx-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-4 py-2 text-sm font-medium rounded-full transition-colors ${
                    activeLink === link.href
                      ? "bg-gradient-to-r from-[rgb(var(--primary))] to-[rgb(var(--secondary))] text-white"
                      : "text-white/80 hover:text-white"
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
              className="inline-flex items-center justify-center rounded-full bg-white text-[#0a101e] px-5 py-2 text-sm font-medium hover:bg-[rgb(var(--primary-light))] hover:text-white transition-colors duration-300"
            >
              Join Us
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-white/90 hover:text-white focus:outline-none"
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
        <div className="md:hidden bg-[#111827] border-t border-[#1e2a40]">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                  activeLink === link.href
                    ? "bg-gradient-to-r from-[rgb(var(--primary))] to-[rgb(var(--secondary))] text-white"
                    : "text-white/80 hover:text-white hover:bg-[#1e2a40]"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/join"
              className="block px-3 py-2 rounded-md text-base font-medium bg-white text-[#0a101e] hover:bg-[rgb(var(--primary-light))] hover:text-white mt-3"
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

