import Image from "next/image"
import Link from "next/link"
import {
  ArrowRight,
  Atom,
  Brain,
  Cpu,
  ChevronRight,
  Lightbulb,
  GraduationCap,
  Award,
  Globe,
  ExternalLink,
} from "lucide-react"

export default function Home() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-[rgb(var(--primary))]/10 to-transparent opacity-30"></div>
          <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-t from-[rgb(var(--secondary))]/10 to-transparent opacity-30"></div>

          {/* Animated Particles - Reduced intensity */}
          <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-[rgb(var(--primary))]/5 blur-3xl animate-float"></div>
          <div className="absolute top-1/3 right-1/4 w-48 h-48 rounded-full bg-[rgb(var(--secondary))]/5 blur-3xl animate-float-delay-1"></div>
          <div className="absolute bottom-1/4 right-1/3 w-56 h-56 rounded-full bg-[rgb(var(--primary))]/5 blur-3xl animate-float-delay-2"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="inline-block px-4 py-1 rounded-full text-xs font-medium bg-[rgb(var(--muted))]/50 text-white mb-6">
                International High School Organization
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                <span className="gradient-text">Advancing</span> Science & Technology Education
              </h1>
              <p className="text-xl text-white/90 mb-8 max-w-xl leading-relaxed">
                An international high school club fostering innovation and collaboration in natural sciences and
                technology.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/join"
                  className="inline-flex items-center justify-center rounded-md bg-[rgb(var(--primary))] text-white px-8 py-3 text-base font-medium shadow-md hover:bg-[rgb(var(--primary-dark))] transition-colors"
                >
                  Join Our Community
                  <ArrowRight size={18} className="ml-2" />
                </Link>
                <Link
                  href="/programs"
                  className="inline-flex items-center justify-center rounded-md bg-white/10 backdrop-blur-sm border border-white/20 text-white px-8 py-3 text-base font-medium hover:bg-white/20 transition-colors"
                >
                  Explore Programs
                </Link>
              </div>

              <div className="mt-12 grid grid-cols-3 gap-4">
                <div className="text-center p-3 bg-[rgb(var(--card))]/50 rounded-lg">
                  <p className="text-3xl font-bold text-[rgb(var(--primary-light))] mb-1">108+</p>
                  <p className="text-sm text-white/80">Members</p>
                </div>
                <div className="text-center p-3 bg-[rgb(var(--card))]/50 rounded-lg">
                  <p className="text-3xl font-bold text-[rgb(var(--secondary-light))] mb-1">24</p>
                  <p className="text-sm text-white/80">Countries</p>
                </div>
                <div className="text-center p-3 bg-[rgb(var(--card))]/50 rounded-lg">
                  <p className="text-3xl font-bold text-[rgb(var(--primary-light))] mb-1">40+</p>
                  <p className="text-sm text-white/80">Projects</p>
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2 relative">
              <div className="relative h-[400px] w-full rounded-2xl overflow-hidden border border-white/10">
                <Image
                  src="/placeholder.svg?height=600&width=600"
                  alt="Students collaborating on science project"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a101e]/70 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-[#0a101e] to-transparent"></div>
      </section>

      {/* Featured Program Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <div className="inline-block px-4 py-1 rounded-full text-xs font-medium bg-[rgb(var(--muted))]/50 text-white mb-4">
              Featured Program
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">Blog Publication Contest</h2>
            <p className="text-white/90 text-lg">
              Join our exciting blog publication contest for secondary school students worldwide!
            </p>
          </div>

          <div className="bg-[rgb(var(--card))] rounded-xl overflow-hidden shadow-lg border border-[rgb(var(--border))]">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-0">
              <div className="lg:col-span-3 p-8 md:p-10">
                <div className="inline-block px-4 py-1 rounded-full text-xs font-medium bg-[rgb(var(--primary))]/20 text-[rgb(var(--primary-light))] mb-6">
                  Contest Now Open
                </div>
                <h3 className="text-2xl md:text-3xl font-bold mb-6 text-white">
                  The NatSciTech March Blog Publication Contest
                </h3>
                <p className="text-white/90 mb-8 leading-relaxed">
                  Choose any subject related to Physics, Neuroscience, Engineering, Psychology, or any combination of
                  these to show us what you as a student can do as a researcher in STEM!
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                  <div className="bg-[rgb(var(--muted))]/20 rounded-lg p-6 border border-[rgb(var(--border))]">
                    <div className="flex items-start space-x-4">
                      <div className="w-10 h-10 rounded-full bg-[rgb(var(--primary))]/20 flex items-center justify-center flex-shrink-0">
                        <Award className="text-[rgb(var(--primary-light))]" size={20} />
                      </div>
                      <div>
                        <h4 className="font-semibold text-white mb-2">1st Place</h4>
                        <p className="text-sm text-white/80">Blog featured as NatSciTech's Student Feature</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-[rgb(var(--muted))]/20 rounded-lg p-6 border border-[rgb(var(--border))]">
                    <div className="flex items-start space-x-4">
                      <div className="w-10 h-10 rounded-full bg-[rgb(var(--secondary))]/20 flex items-center justify-center flex-shrink-0">
                        <Award className="text-[rgb(var(--secondary-light))]" size={20} />
                      </div>
                      <div>
                        <h4 className="font-semibold text-white mb-2">2nd & 3rd Place</h4>
                        <p className="text-sm text-white/80">Blogs featured on NatSciTech's March Blog</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="text-white/80 text-sm">
                    <span className="text-[rgb(var(--primary-light))] font-semibold">Deadline:</span> March 15, 2025
                  </div>
                  <Link
                    href="/programs#blog-contest"
                    className="inline-flex items-center justify-center rounded-md bg-[rgb(var(--primary))] text-white px-6 py-2.5 text-sm font-medium hover:bg-[rgb(var(--primary-dark))] transition-colors"
                  >
                    Learn More & Apply
                    <ChevronRight size={16} className="ml-1" />
                  </Link>
                </div>
              </div>

              <div className="lg:col-span-2 relative min-h-[300px] lg:min-h-full">
                <Image src="/placeholder.svg?height=600&width=400" alt="Blog Contest" fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-r from-[rgb(var(--card))] to-transparent lg:bg-gradient-to-l"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Research Areas */}
      <section className="py-20 relative bg-[#0d1424]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <div className="inline-block px-4 py-1 rounded-full text-xs font-medium bg-[rgb(var(--muted))]/50 text-white mb-4">
              Research Areas
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">Explore Our Fields</h2>
            <p className="text-white/90 text-lg">Discover our diverse fields of study and scientific disciplines</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-[rgb(var(--card))] rounded-lg p-6 border border-[rgb(var(--border))] hover:border-[rgb(var(--primary))]/50 transition-colors">
              <div className="w-12 h-12 rounded-lg bg-[rgb(var(--primary))]/20 flex items-center justify-center mb-6">
                <Atom className="text-[rgb(var(--primary-light))]" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-white">Physics</h3>
              <p className="text-white/80 mb-6 leading-relaxed">
                Explore the fundamental laws that govern the universe, from quantum mechanics to astrophysics.
              </p>
              <Link
                href="/programs#physics"
                className="text-[rgb(var(--primary-light))] font-medium inline-flex items-center hover:underline"
              >
                Learn more <ChevronRight size={16} className="ml-1" />
              </Link>
            </div>

            <div className="bg-[rgb(var(--card))] rounded-lg p-6 border border-[rgb(var(--border))] hover:border-[rgb(var(--secondary))]/50 transition-colors">
              <div className="w-12 h-12 rounded-lg bg-[rgb(var(--secondary))]/20 flex items-center justify-center mb-6">
                <Brain className="text-[rgb(var(--secondary-light))]" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-white">Neuroscience</h3>
              <p className="text-white/80 mb-6 leading-relaxed">
                Study the nervous system, brain function, and cognitive processes that shape human behavior.
              </p>
              <Link
                href="/programs#neuroscience"
                className="text-[rgb(var(--secondary-light))] font-medium inline-flex items-center hover:underline"
              >
                Learn more <ChevronRight size={16} className="ml-1" />
              </Link>
            </div>

            <div className="bg-[rgb(var(--card))] rounded-lg p-6 border border-[rgb(var(--border))] hover:border-[rgb(var(--primary))]/50 transition-colors">
              <div className="w-12 h-12 rounded-lg bg-[rgb(var(--primary))]/20 flex items-center justify-center mb-6">
                <Cpu className="text-[rgb(var(--primary-light))]" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-white">Engineering</h3>
              <p className="text-white/80 mb-6 leading-relaxed">
                Design, build, and innovate with the application of scientific principles to solve real-world problems.
              </p>
              <Link
                href="/programs#engineering"
                className="text-[rgb(var(--primary-light))] font-medium inline-flex items-center hover:underline"
              >
                Learn more <ChevronRight size={16} className="ml-1" />
              </Link>
            </div>

            <div className="bg-[rgb(var(--card))] rounded-lg p-6 border border-[rgb(var(--border))] hover:border-[rgb(var(--secondary))]/50 transition-colors">
              <div className="w-12 h-12 rounded-lg bg-[rgb(var(--secondary))]/20 flex items-center justify-center mb-6">
                <Lightbulb className="text-[rgb(var(--secondary-light))]" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-white">Psychology</h3>
              <p className="text-white/80 mb-6 leading-relaxed">
                Investigate human behavior, cognitive processes, and psychological phenomena through scientific inquiry.
              </p>
              <Link
                href="/programs#psychology"
                className="text-[rgb(var(--secondary-light))] font-medium inline-flex items-center hover:underline"
              >
                Learn more <ChevronRight size={16} className="ml-1" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="py-20 relative bg-gradient-to-b from-[rgb(var(--primary))]/10 to-[rgb(var(--secondary))]/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <div className="inline-block px-4 py-1 rounded-full text-xs font-medium bg-white/10 text-white mb-4">
              Why Join NatSciTech?
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Become Part of Our Community</h2>
            <p className="text-white/90 text-lg">
              Join a global network dedicated to advancing science and technology education
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-[rgb(var(--card))]/80 backdrop-blur-sm rounded-lg p-8 border border-[rgb(var(--border))]">
              <div className="mx-auto w-14 h-14 rounded-lg bg-[rgb(var(--primary))]/20 flex items-center justify-center mb-6">
                <Globe className="text-[rgb(var(--primary-light))]" size={24} />
              </div>
              <h3 className="text-xl font-bold mb-4 text-white text-center">Global Network</h3>
              <p className="text-white/80 text-center leading-relaxed">
                Connect with like-minded students and mentors from around the world.
              </p>
            </div>

            <div className="bg-[rgb(var(--card))]/80 backdrop-blur-sm rounded-lg p-8 border border-[rgb(var(--border))]">
              <div className="mx-auto w-14 h-14 rounded-lg bg-[rgb(var(--secondary))]/20 flex items-center justify-center mb-6">
                <GraduationCap className="text-[rgb(var(--secondary-light))]" size={24} />
              </div>
              <h3 className="text-xl font-bold mb-4 text-white text-center">Academic Growth</h3>
              <p className="text-white/80 text-center leading-relaxed">
                Enhance your scientific knowledge beyond the traditional classroom setting.
              </p>
            </div>

            <div className="bg-[rgb(var(--card))]/80 backdrop-blur-sm rounded-lg p-8 border border-[rgb(var(--border))]">
              <div className="mx-auto w-14 h-14 rounded-lg bg-[rgb(var(--primary))]/20 flex items-center justify-center mb-6">
                <Award className="text-[rgb(var(--primary-light))]" size={24} />
              </div>
              <h3 className="text-xl font-bold mb-4 text-white text-center">Recognition</h3>
              <p className="text-white/80 text-center leading-relaxed">
                Showcase your research and writing through our publication platforms.
              </p>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/join"
              className="inline-flex items-center justify-center rounded-md bg-white text-[#0a101e] px-8 py-3 text-base font-medium hover:bg-[rgb(var(--primary-light))] hover:text-white transition-colors"
            >
              Become a Member
              <ArrowRight size={18} className="ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Latest Blog Posts */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <div className="inline-block px-4 py-1 rounded-full text-xs font-medium bg-[rgb(var(--muted))]/50 text-white mb-4">
                Latest Articles
              </div>
              <h2 className="text-3xl md:text-4xl font-bold gradient-text">From Our Blog</h2>
            </div>
            <Link
              href="/blog"
              className="mt-4 md:mt-0 text-[rgb(var(--primary-light))] font-medium inline-flex items-center hover:underline"
            >
              View all articles <ExternalLink size={16} className="ml-1" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Blog Post 1 */}
            <div className="bg-[rgb(var(--card))] rounded-lg overflow-hidden border border-[rgb(var(--border))]">
              <div className="relative h-48">
                <Image src="/placeholder.svg?height=300&width=500" alt="Blog Post" fill className="object-cover" />
              </div>
              <div className="p-6">
                <div className="flex items-center space-x-2 mb-3">
                  <span className="px-3 py-1 bg-[rgb(var(--primary))]/20 text-[rgb(var(--primary-light))] text-xs rounded-full">
                    Physics
                  </span>
                  <span className="text-white/60 text-xs">March 10, 2025</span>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-white">Exploring Quantum Computing Principles</h3>
                <p className="text-white/80 mb-4 line-clamp-2 leading-relaxed">
                  An introduction to the fascinating world of quantum computing and its potential applications in
                  solving complex problems.
                </p>
                <Link
                  href="/blog/quantum-computing"
                  className="text-[rgb(var(--primary-light))] font-medium inline-flex items-center hover:underline"
                >
                  Read more <ChevronRight size={16} className="ml-1" />
                </Link>
              </div>
            </div>

            {/* Blog Post 2 */}
            <div className="bg-[rgb(var(--card))] rounded-lg overflow-hidden border border-[rgb(var(--border))]">
              <div className="relative h-48">
                <Image src="/placeholder.svg?height=300&width=500" alt="Blog Post" fill className="object-cover" />
              </div>
              <div className="p-6">
                <div className="flex items-center space-x-2 mb-3">
                  <span className="px-3 py-1 bg-[rgb(var(--secondary))]/20 text-[rgb(var(--secondary-light))] text-xs rounded-full">
                    Neuroscience
                  </span>
                  <span className="text-white/60 text-xs">March 5, 2025</span>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-white">The Brain's Neural Plasticity</h3>
                <p className="text-white/80 mb-4 line-clamp-2 leading-relaxed">
                  Discover how our brains adapt and change throughout our lives, and what this means for learning and
                  recovery.
                </p>
                <Link
                  href="/blog/neural-plasticity"
                  className="text-[rgb(var(--secondary-light))] font-medium inline-flex items-center hover:underline"
                >
                  Read more <ChevronRight size={16} className="ml-1" />
                </Link>
              </div>
            </div>

            {/* Blog Post 3 */}
            <div className="bg-[rgb(var(--card))] rounded-lg overflow-hidden border border-[rgb(var(--border))]">
              <div className="relative h-48">
                <Image src="/placeholder.svg?height=300&width=500" alt="Blog Post" fill className="object-cover" />
              </div>
              <div className="p-6">
                <div className="flex items-center space-x-2 mb-3">
                  <span className="px-3 py-1 bg-[rgb(var(--primary))]/20 text-[rgb(var(--primary-light))] text-xs rounded-full">
                    Engineering
                  </span>
                  <span className="text-white/60 text-xs">February 28, 2025</span>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-white">Sustainable Energy Solutions</h3>
                <p className="text-white/80 mb-4 line-clamp-2 leading-relaxed">
                  Exploring innovative approaches to renewable energy that could help address climate change challenges.
                </p>
                <Link
                  href="/blog/sustainable-energy"
                  className="text-[rgb(var(--primary-light))] font-medium inline-flex items-center hover:underline"
                >
                  Read more <ChevronRight size={16} className="ml-1" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Join CTA */}
      <section className="py-20 relative bg-gradient-to-r from-[rgb(var(--primary))] to-[rgb(var(--secondary))]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Ready to Join Our Community?</h2>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Be part of a movement that's shaping the future of science and technology education.
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

