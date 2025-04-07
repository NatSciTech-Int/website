import Image from "next/image"
import Link from "next/link"
import { ArrowRight, MapPin, GraduationCap, Award, Globe, ExternalLink, Instagram } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Our Members",
  description:
    "Meet the members of the Natural Science & Technology Organization, a global community of high school students passionate about science and technology.",
  openGraph: {
    title: "NatSciTech Members",
    description:
      "Meet the members of the Natural Science & Technology Organization, a global community of high school students passionate about science and technology.",
  },
}

export default function Members() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-[rgb(var(--primary))]/10 to-transparent opacity-30"></div>
          <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-t from-[rgb(var(--secondary))]/10 to-transparent opacity-30"></div>

          {/* Animated Particles - Reduced intensity */}
          <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-[rgb(var(--primary))]/5 blur-3xl animate-float"></div>
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 rounded-full bg-[rgb(var(--secondary))]/5 blur-3xl animate-float-delay-2"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-block px-4 py-1 rounded-full text-xs font-medium bg-[rgb(var(--muted))]/50 text-white mb-6">
              Our Community
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">Our Global Network</h1>
            <p className="text-xl text-white/90 leading-relaxed">
              Meet our diverse members from across the world who are passionate about advancing science and technology.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-[rgb(var(--card))] rounded-lg p-8 text-center border border-[rgb(var(--border))]">
              <p className="text-4xl font-bold gradient-text mb-3">108+</p>
              <p className="text-white/80">Total Members</p>
            </div>
            <div className="bg-[rgb(var(--card))] rounded-lg p-8 text-center border border-[rgb(var(--border))]">
              <p className="text-4xl font-bold gradient-text mb-3">24</p>
              <p className="text-white/80">Countries Represented</p>
            </div>
            <div className="bg-[rgb(var(--card))] rounded-lg p-8 text-center border border-[rgb(var(--border))]">
              <p className="text-4xl font-bold gradient-text mb-3">4</p>
              <p className="text-white/80">Leadership Team</p>
            </div>
            <div className="bg-[rgb(var(--card))] rounded-lg p-8 text-center border border-[rgb(var(--border))]">
              <p className="text-4xl font-bold gradient-text mb-3">40+</p>
              <p className="text-white/80">Research Projects</p>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 right-1/4 w-64 h-64 rounded-full bg-[rgb(var(--primary))]/5 blur-3xl"></div>
          <div className="absolute bottom-1/3 left-1/4 w-64 h-64 rounded-full bg-[rgb(var(--secondary))]/5 blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h2 className="text-2xl font-bold mb-8 gradient-text">Leadership Team</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
            {/* Leadership Member 1 - Joshua Fung */}
            <div className="bg-[rgb(var(--card))] rounded-lg overflow-hidden border border-[rgb(var(--border))] hover:border-[rgb(var(--primary))]/50 transition-colors">
              <div className="relative h-48 w-full">
                <Image src="/images/student-1.jpg" alt="Joshua Fung" fill className="object-cover" />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-semibold text-white">Joshua Fung</h3>
                  <span className="px-3 py-1 bg-[rgb(var(--primary))]/20 text-[rgb(var(--primary-light))] text-xs rounded-md">
                    President
                  </span>
                </div>
                <div className="flex items-center text-white/60 text-sm mb-2">
                  <MapPin size={14} className="mr-1 text-[rgb(var(--primary-light))]" />
                  Mississauga, Canada
                </div>
                <div className="flex items-center text-white/60 text-sm mb-4">
                  <GraduationCap size={14} className="mr-1 text-[rgb(var(--primary-light))]" />
                  Mississauga High School, Senior
                </div>
                <p className="text-white/80 text-sm mb-4 leading-relaxed">
                  Leading the organization with a passion for scientific research and leadership. Committed to advancing
                  science and technology education globally.
                </p>
                <div className="flex items-center text-xs text-white/60">
                  <Award size={14} className="mr-1 text-[rgb(var(--secondary-light))]" />4 Research Publications
                </div>
              </div>
            </div>

            {/* Adil Mukhi - Director of Technology */}
            <div className="bg-[rgb(var(--card))] rounded-lg overflow-hidden border border-[rgb(var(--border))] hover:border-[rgb(var(--primary))]/50 transition-colors">
              <div className="relative h-48 w-full">
                <Image src="/images/adil-mukhi.png" alt="Adil Mukhi" fill className="object-cover object-top" />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-semibold text-white">Adil Mukhi</h3>
                  <span className="px-3 py-1 bg-[rgb(var(--primary))]/20 text-[rgb(var(--primary-light))] text-xs rounded-md">
                    Director of Technology
                  </span>
                </div>
                <div className="flex items-center text-white/60 text-sm mb-2">
                  <MapPin size={14} className="mr-1 text-[rgb(var(--primary-light))]" />
                  Mississauga, Canada
                </div>
                <div className="flex items-center text-white/60 text-sm mb-4">
                  <GraduationCap size={14} className="mr-1 text-[rgb(var(--primary-light))]" />
                  Aspiring Researcher
                </div>
                <p className="text-white/80 text-sm mb-4 leading-relaxed">
                  A passionate student and aspiring researcher with a strong interest in science, medicine, and
                  research. Enjoys exploring complex topics, conducting research, and creating engaging content.
                </p>
                <div className="flex flex-wrap gap-2 mt-3">
                  <a
                    href="https://linktr.ee/dr.interested"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs bg-[rgb(var(--primary))]/20 text-[rgb(var(--primary-light))] px-2 py-1 rounded-md flex items-center"
                  >
                    <Globe size={12} className="mr-1" />
                    My Club
                  </a>
                  <a
                    href="https://adilmukhi.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs bg-[rgb(var(--secondary))]/20 text-[rgb(var(--secondary-light))] px-2 py-1 rounded-md flex items-center"
                  >
                    <ExternalLink size={12} className="mr-1" />
                    Website
                  </a>
                  <a
                    href="https://www.instagram.com/adilm.0/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs bg-[rgb(var(--primary))]/20 text-[rgb(var(--primary-light))] px-2 py-1 rounded-md flex items-center"
                  >
                    <Instagram size={12} className="mr-1" />
                    Instagram
                  </a>
                </div>
              </div>
            </div>

            {/* Garima Pal - Technology Team */}
            <div className="bg-[rgb(var(--card))] rounded-lg overflow-hidden border border-[rgb(var(--border))] hover:border-[rgb(var(--secondary))]/50 transition-colors">
              <div className="relative h-48 w-full">
                <Image src="/images/student-3.jpg" alt="Garima Pal" fill className="object-cover" />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-semibold text-white">Garima Pal</h3>
                  <span className="px-3 py-1 bg-[rgb(var(--secondary))]/20 text-[rgb(var(--secondary-light))] text-xs rounded-md">
                    Technology Team
                  </span>
                </div>
                <div className="flex items-center text-white/60 text-sm mb-2">
                  <MapPin size={14} className="mr-1 text-[rgb(var(--secondary-light))]" />
                  Mississauga, Canada
                </div>
                <div className="flex items-center text-white/60 text-sm mb-4">
                  <GraduationCap size={14} className="mr-1 text-[rgb(var(--secondary-light))]" />
                  Mississauga STEM Academy, Junior
                </div>
                <p className="text-white/80 text-sm mb-4 leading-relaxed">
                  Specializing in computer science and web development. Passionate about creating technology solutions
                  for scientific research and education.
                </p>
                <div className="flex items-center text-xs text-white/60">
                  <Award size={14} className="mr-1 text-[rgb(var(--secondary-light))]" />2 Tech Projects
                </div>
              </div>
            </div>

            {/* Lucas - Technology Team */}
            <div className="bg-[rgb(var(--card))] rounded-lg overflow-hidden border border-[rgb(var(--border))] hover:border-[rgb(var(--primary))]/50 transition-colors">
              <div className="relative h-48 w-full">
                <Image src="/images/student-4.jpg" alt="Lucas" fill className="object-cover" />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-semibold text-white">Lucas</h3>
                  <span className="px-3 py-1 bg-[rgb(var(--primary))]/20 text-[rgb(var(--primary-light))] text-xs rounded-md">
                    Technology Team
                  </span>
                </div>
                <div className="flex items-center text-white/60 text-sm mb-2">
                  <MapPin size={14} className="mr-1 text-[rgb(var(--primary-light))]" />
                  Mississauga, Canada
                </div>
                <div className="flex items-center text-white/60 text-sm mb-4">
                  <GraduationCap size={14} className="mr-1 text-[rgb(var(--primary-light))]" />
                  Mississauga Tech Academy, Senior
                </div>
                <p className="text-white/80 text-sm mb-4 leading-relaxed">
                  Focused on software development and AI applications. Contributes to the organization's technical
                  infrastructure and digital presence.
                </p>
                <div className="flex items-center text-xs text-white/60">
                  <Award size={14} className="mr-1 text-[rgb(var(--primary-light))]" />3 Tech Projects
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Join CTA */}
      <section className="py-20 relative bg-gradient-to-r from-[rgb(var(--primary))] to-[rgb(var(--secondary))]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Join Our Global Community Today</h2>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Connect with students around the world who share your passion for science and technology.
            </p>
            <Link
              href="/join"
              className="inline-flex items-center justify-center rounded-md bg-white text-[#0a101e] px-8 py-3 text-base font-medium hover:bg-[rgb(var(--primary-light))] hover:text-white transition-colors"
            >
              Apply for Membership
              <ArrowRight size={18} className="ml-2" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

