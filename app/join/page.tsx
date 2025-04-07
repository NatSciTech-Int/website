import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Check, Users, Award, Globe, Instagram } from "lucide-react"

export default function Join() {
  return (
    <div className="pt-20">
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
              Join Our Community
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">Become a Member</h1>
            <p className="text-xl text-white/80">
              Join a global network of high school students passionate about advancing science and technology education.
            </p>
          </div>
        </div>
      </section>

      {/* Why Join Section */}
      <section className="py-16 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image src="/images/team-bg.jpg" alt="Team Background" fill className="object-cover opacity-15" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a101e] via-transparent to-[#0a101e]"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="inline-block px-4 py-1 rounded-full text-xs font-medium bg-primary/20 text-primary-light mb-4">
              Why Join NatSciTech?
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">Benefits of Membership</h2>
            <p className="text-white/80">Discover the advantages of being part of our global scientific community</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-card/50 backdrop-blur-sm rounded-xl p-8 border border-white/10 shadow-lg hover:shadow-primary/20 transition-all duration-300 transform hover:-translate-y-1">
              <div className="w-14 h-14 hexagon bg-primary/20 flex items-center justify-center mb-6">
                <Globe className="text-primary-light" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-white">Global Network</h3>
              <p className="text-white/70 mb-6">
                Connect with like-minded students from around the world who share your passion for science and
                technology.
              </p>
              <ul className="space-y-3 text-white/70">
                <li className="flex items-start">
                  <Check size={16} className="text-primary-light mt-1 mr-2 flex-shrink-0" />
                  <span>Access to international community</span>
                </li>
                <li className="flex items-start">
                  <Check size={16} className="text-primary-light mt-1 mr-2 flex-shrink-0" />
                  <span>Collaborative opportunities</span>
                </li>
                <li className="flex items-start">
                  <Check size={16} className="text-primary-light mt-1 mr-2 flex-shrink-0" />
                  <span>Cross-cultural scientific exchange</span>
                </li>
              </ul>
            </div>

            <div className="bg-card/50 backdrop-blur-sm rounded-xl p-8 border border-white/10 shadow-lg hover:shadow-secondary/20 transition-all duration-300 transform hover:-translate-y-1">
              <div className="w-14 h-14 hexagon bg-secondary/20 flex items-center justify-center mb-6">
                <Users className="text-secondary-light" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-white">Program Access</h3>
              <p className="text-white/70 mb-6">
                Participate in exclusive programs designed to enhance your scientific knowledge and research skills.
              </p>
              <ul className="space-y-3 text-white/70">
                <li className="flex items-start">
                  <Check size={16} className="text-secondary-light mt-1 mr-2 flex-shrink-0" />
                  <span>Blog publication opportunities</span>
                </li>
                <li className="flex items-start">
                  <Check size={16} className="text-secondary-light mt-1 mr-2 flex-shrink-0" />
                  <span>Mentorship connections</span>
                </li>
                <li className="flex items-start">
                  <Check size={16} className="text-secondary-light mt-1 mr-2 flex-shrink-0" />
                  <span>Research collaboration</span>
                </li>
              </ul>
            </div>

            <div className="bg-card/50 backdrop-blur-sm rounded-xl p-8 border border-white/10 shadow-lg hover:shadow-primary/20 transition-all duration-300 transform hover:-translate-y-1">
              <div className="w-14 h-14 hexagon bg-primary/20 flex items-center justify-center mb-6">
                <Award className="text-primary-light" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-white">Recognition</h3>
              <p className="text-white/70 mb-6">
                Gain recognition for your scientific achievements and contributions to the community.
              </p>
              <ul className="space-y-3 text-white/70">
                <li className="flex items-start">
                  <Check size={16} className="text-primary-light mt-1 mr-2 flex-shrink-0" />
                  <span>Featured student opportunities</span>
                </li>
                <li className="flex items-start">
                  <Check size={16} className="text-primary-light mt-1 mr-2 flex-shrink-0" />
                  <span>Publication credits</span>
                </li>
                <li className="flex items-start">
                  <Check size={16} className="text-primary-light mt-1 mr-2 flex-shrink-0" />
                  <span>Volunteer hours certification</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* How to Join */}
      <section className="py-16 relative overflow-hidden bg-[#0d1424]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="inline-block px-4 py-1 rounded-full text-xs font-medium bg-white/10 text-white/90 mb-4">
              Getting Started
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white text-glow">How to Join</h2>
            <p className="text-white/80">Follow these simple steps to become a member of NatSciTech</p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-primary/0 hidden md:block"></div>

              <div className="space-y-12">
                <div className="relative flex flex-col md:flex-row">
                  <div className="md:w-8 md:mr-8 flex-shrink-0 flex md:block justify-center">
                    <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white font-bold relative z-10">
                      1
                    </div>
                  </div>
                  <div className="bg-card/50 backdrop-blur-sm rounded-xl p-6 border border-white/10 mt-4 md:mt-0 flex-grow">
                    <h3 className="text-xl font-semibold mb-4 text-white">Follow Us on Instagram</h3>
                    <p className="text-white/80 mb-4">
                      Start by following our Instagram account to stay updated with our latest announcements, programs,
                      and opportunities.
                    </p>
                    <a
                      href="https://www.instagram.com/natscitech/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-primary-light font-medium hover:underline"
                    >
                      Follow @natscitech <Instagram size={16} className="ml-1" />
                    </a>
                  </div>
                </div>

                <div className="relative flex flex-col md:flex-row">
                  <div className="md:w-8 md:mr-8 flex-shrink-0 flex md:block justify-center">
                    <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center text-white font-bold relative z-10">
                      2
                    </div>
                  </div>
                  <div className="bg-card/50 backdrop-blur-sm rounded-xl p-6 border border-white/10 mt-4 md:mt-0 flex-grow">
                    <h3 className="text-xl font-semibold mb-4 text-white">Participate in Our Programs</h3>
                    <p className="text-white/80 mb-4">
                      Engage with our community by participating in our programs, such as the Blog Publication Contest,
                      mentorship opportunities, or research collaborations.
                    </p>
                    <Link
                      href="/programs"
                      className="inline-flex items-center text-secondary-light font-medium hover:underline"
                    >
                      Explore our programs <ArrowRight size={16} className="ml-1" />
                    </Link>
                  </div>
                </div>

                <div className="relative flex flex-col md:flex-row">
                  <div className="md:w-8 md:mr-8 flex-shrink-0 flex md:block justify-center">
                    <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white font-bold relative z-10">
                      3
                    </div>
                  </div>
                  <div className="bg-card/50 backdrop-blur-sm rounded-xl p-6 border border-white/10 mt-4 md:mt-0 flex-grow">
                    <h3 className="text-xl font-semibold mb-4 text-white">Connect with Our Community</h3>
                    <p className="text-white/80 mb-4">
                      Engage with our content, interact with other members, and share your own scientific interests and
                      achievements.
                    </p>
                    <Link
                      href="/contact"
                      className="inline-flex items-center text-primary-light font-medium hover:underline"
                    >
                      Contact us <ArrowRight size={16} className="ml-1" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/3 right-1/4 w-64 h-64 rounded-full bg-primary/5 blur-3xl"></div>
          <div className="absolute bottom-1/3 left-1/4 w-64 h-64 rounded-full bg-secondary/5 blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="inline-block px-4 py-1 rounded-full text-xs font-medium bg-muted text-white/90 mb-4">
              Member Stories
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">What Our Members Say</h2>
            <p className="text-white/80">Hear from students who have joined our global scientific community</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-card rounded-xl p-8 border border-white/10 relative">
              <div className="absolute top-0 right-0 w-20 h-20 bg-primary/10 rounded-full blur-xl -mr-10 -mt-10 z-0"></div>
              <div className="relative z-10">
                <p className="text-white/80 mb-6 italic">
                  "Joining NatSciTech has been a transformative experience for me. I've connected with students from
                  around the world who share my passion for neuroscience, and I've had the opportunity to publish my
                  research through the blog contest."
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full overflow-hidden bg-primary/20 mr-4">
                    <Image
                      src="/placeholder.svg?height=100&width=100"
                      alt="Member"
                      width={48}
                      height={48}
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="text-white font-medium">Emma Chen</p>
                    <p className="text-white/60 text-sm">Senior, International High School</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-card rounded-xl p-8 border border-white/10 relative">
              <div className="absolute top-0 right-0 w-20 h-20 bg-secondary/10 rounded-full blur-xl -mr-10 -mt-10 z-0"></div>
              <div className="relative z-10">
                <p className="text-white/80 mb-6 italic">
                  "The mentorship program at NatSciTech has been invaluable for my development as a young researcher. My
                  mentor has guided me through my first engineering project, and I've gained skills that will help me
                  throughout my academic career."
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full overflow-hidden bg-secondary/20 mr-4">
                    <Image
                      src="/placeholder.svg?height=100&width=100"
                      alt="Member"
                      width={48}
                      height={48}
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="text-white font-medium">Rahim Patel</p>
                    <p className="text-white/60 text-sm">Junior, Global Academy</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Join CTA */}
      <section className="py-20 relative bg-gradient-to-r from-primary to-secondary clip-wave">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Ready to Join Our Community?</h2>
            <p className="text-xl text-white/90 mb-8">
              Follow us on Instagram to stay updated with our latest programs and opportunities.
            </p>
            <a
              href="https://www.instagram.com/natscitech/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-white text-primary px-8 py-3 text-base font-medium shadow-lg hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] transition-all"
            >
              Follow @natscitech
              <ArrowRight size={18} className="ml-2" />
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

