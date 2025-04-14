import Link from "next/link"
import { Mail, Instagram, Globe, MapPin, ArrowRight } from "lucide-react"
import Image from "next/image"
import type { Metadata } from "next"

// Update the metadata
export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with the Library of Science. We'd love to hear from you!",
  openGraph: {
    title: "Contact LibSci",
    description: "Get in touch with the Library of Science. We'd love to hear from you!",
  },
}

export default function Contact() {
  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-primary/20 to-transparent opacity-30"></div>
          <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-t from-secondary/20 to-transparent opacity-30"></div>

          {/* Animated Particles */}
          <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-primary/10 blur-3xl animate-float"></div>
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 rounded-full bg-secondary/10 blur-3xl animate-float-delay-2"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-block px-4 py-1 rounded-full text-xs font-medium bg-muted text-white/90 mb-6">
              Get in Touch
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">Contact Us</h1>
            <p className="text-xl text-white/80">
              Have questions or want to learn more about our organization? We'd love to hear from you.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image src="/images/team-bg.jpg" alt="Contact Background" fill className="object-cover opacity-10" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a101e] via-transparent to-[#0a101e]"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="bg-card/50 backdrop-blur-sm rounded-xl p-8 border border-white/10 shadow-lg">
                <h2 className="text-3xl font-bold mb-8 gradient-text">Connect With Us</h2>
                <p className="text-white/80 mb-8">
                  The Library of Science is a global community of high school students passionate about science and
                  technology. We're always looking to connect with students, educators, and organizations who share our
                  mission.
                </p>

                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                      <Mail className="text-primary-light" size={24} />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-1">Email</h3>
                      <a
                        href="mailto:contact@libsci.org"
                        className="text-white/80 hover:text-primary-light transition-colors"
                      >
                        contact@libsci.org
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-lg bg-secondary/20 flex items-center justify-center flex-shrink-0">
                      <Instagram className="text-secondary-light" size={24} />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-1">Instagram</h3>
                      <a
                        href="https://www.instagram.com/libsci/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white/80 hover:text-secondary-light transition-colors"
                      >
                        @libsci
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                      <Globe className="text-primary-light" size={24} />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-1">Website</h3>
                      <a
                        href="https://libsci.vercel.app"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white/80 hover:text-primary-light transition-colors"
                      >
                        libsci.vercel.app
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-lg bg-secondary/20 flex items-center justify-center flex-shrink-0">
                      <MapPin className="text-secondary-light" size={24} />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-1">Location</h3>
                      <p className="text-white/80">Mississauga, Canada (Online)</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-card/50 backdrop-blur-sm rounded-xl overflow-hidden border border-white/10 shadow-lg">
                <div className="p-8">
                  <h2 className="text-2xl font-bold mb-6 text-white">Get Involved</h2>
                  <p className="text-white/80 mb-8">
                    There are many ways to get involved with NatSciTech. Whether you're interested in joining as a
                    member, participating in our programs, or collaborating with us, we'd love to hear from you.
                  </p>

                  <div className="space-y-6">
                    <div className="bg-muted/20 rounded-lg p-6 border border-white/10">
                      <h3 className="text-lg font-semibold text-white mb-3">Join as a Member</h3>
                      <p className="text-white/80 mb-4">
                        Become part of our global community of students passionate about science and technology.
                      </p>
                      <Link
                        href="/join"
                        className="inline-flex items-center text-primary-light font-medium hover:underline"
                      >
                        Learn more <ArrowRight size={16} className="ml-1" />
                      </Link>
                    </div>

                    <div className="bg-muted/20 rounded-lg p-6 border border-white/10">
                      <h3 className="text-lg font-semibold text-white mb-3">Participate in Programs</h3>
                      <p className="text-white/80 mb-4">
                        Explore our various programs, including the Blog Publication Contest, mentorship opportunities,
                        and more.
                      </p>
                      <Link
                        href="/programs"
                        className="inline-flex items-center text-secondary-light font-medium hover:underline"
                      >
                        View programs <ArrowRight size={16} className="ml-1" />
                      </Link>
                    </div>

                    <div className="bg-muted/20 rounded-lg p-6 border border-white/10">
                      <h3 className="text-lg font-semibold text-white mb-3">Follow Our Blog</h3>
                      <p className="text-white/80 mb-4">
                        Stay updated with the latest articles, research highlights, and student features.
                      </p>
                      <Link
                        href="/blog"
                        className="inline-flex items-center text-primary-light font-medium hover:underline"
                      >
                        Read our blog <ArrowRight size={16} className="ml-1" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 relative overflow-hidden bg-[#0d1424]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold mb-8 text-white text-center">Frequently Asked Questions</h2>

            <div className="space-y-6">
              <div className="bg-card/50 backdrop-blur-sm rounded-lg p-6 border border-white/10">
                <h3 className="text-lg font-semibold text-white mb-2">How can I join NatSciTech?</h3>
                <p className="text-white/80">
                  You can join our organization by visiting our Join page and following the instructions there. We
                  welcome high school students from around the world who are passionate about science and technology.
                </p>
              </div>

              <div className="bg-card/50 backdrop-blur-sm rounded-lg p-6 border border-white/10">
                <h3 className="text-lg font-semibold text-white mb-2">What programs do you offer?</h3>
                <p className="text-white/80">
                  We offer various programs including our Blog Publication Contest, mentorship opportunities, research
                  collaborations, and workshops. Visit our Programs page to learn more about each initiative.
                </p>
              </div>

              <div className="bg-card/50 backdrop-blur-sm rounded-lg p-6 border border-white/10">
                <h3 className="text-lg font-semibold text-white mb-2">How can I participate in the Blog Contest?</h3>
                <p className="text-white/80">
                  You can participate in our Blog Publication Contest by submitting your entry through the Google Form
                  linked on our Programs page. The contest is open to secondary school students worldwide.
                </p>
              </div>

              <div className="bg-card/50 backdrop-blur-sm rounded-lg p-6 border border-white/10">
                <h3 className="text-lg font-semibold text-white mb-2">
                  Is NatSciTech only for students interested in certain fields?
                </h3>
                <p className="text-white/80">
                  While we focus on Physics, Neuroscience, Engineering, and Psychology, we welcome students interested
                  in any area of science and technology. Our goal is to foster interdisciplinary collaboration and
                  learning.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Join CTA */}
      <section className="py-20 relative bg-gradient-to-r from-primary to-secondary clip-wave">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Join Our Community Today</h2>
            <p className="text-xl text-white/90 mb-8">
              Connect with like-minded students and be part of a global movement advancing science and technology
              education.
            </p>
            <Link
              href="/join"
              className="inline-flex items-center justify-center rounded-full bg-white text-primary px-8 py-3 text-base font-medium shadow-lg hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] transition-all"
            >
              Become a Member
              <ArrowRight size={18} className="ml-2" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
