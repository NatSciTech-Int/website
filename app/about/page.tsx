import Image from "next/image"
import Link from "next/link"
import { Check, ArrowRight, BookOpen, Lightbulb, Target } from "lucide-react"

export default function About() {
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
              About Us
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">About NatSciTech</h1>
            <p className="text-xl text-white/80">
              The Natural Science & Technology Organization is a non-profit working for the academic development of
              natural sciences and technologies on an international scale.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/3 right-1/4 w-64 h-64 rounded-full bg-primary/5 blur-3xl"></div>
          <div className="absolute bottom-1/3 left-1/4 w-64 h-64 rounded-full bg-secondary/5 blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="relative h-[400px] w-full blob-shape-alt overflow-hidden border-2 border-white/10 glow-effect">
                <Image src="/placeholder.svg?height=600&width=600" alt="Our story" fill className="object-cover" />
              </div>

              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-card rounded-2xl shadow-lg p-4 flex items-center justify-center border border-white/10">
                <div className="text-center">
                  <p className="text-3xl font-bold gradient-text">108+</p>
                  <p className="text-xs text-white/70">Members</p>
                </div>
              </div>
            </div>

            <div>
              <div className="inline-block px-4 py-1 rounded-full text-xs font-medium bg-muted text-white/90 mb-6">
                Our Journey
              </div>
              <h2 className="text-3xl font-bold mb-6 gradient-text">Our Story</h2>
              <p className="text-white/80 mb-6">
                Founded by passionate high school students with a shared interest in scientific exploration and
                technological innovation, NatSciTech began as a small online forum for exchanging ideas and research
                findings.
              </p>
              <p className="text-white/80 mb-6">
                Today, we've grown into an international community of young scientists, researchers, and innovators
                spanning multiple continents. Our mission remains centered on fostering scientific literacy, critical
                thinking, and collaborative research among secondary school students worldwide.
              </p>
              <p className="text-white/80 mb-8">
                Through our various programs, contests, and mentorship opportunities, we continue to build bridges
                between young minds passionate about science and technology.
              </p>
              <Link href="/join" className="inline-flex items-center text-primary-light font-medium hover:underline">
                Join our community <ArrowRight size={16} className="ml-1" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-24 relative overflow-hidden clip-diagonal bg-gradient-to-br from-primary/20 to-secondary/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="inline-block px-4 py-1 rounded-full text-xs font-medium bg-white/10 text-white/90 mb-4">
              Our Principles
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white text-glow">Our Mission, Vision & Values</h2>
            <p className="text-white/80">Guiding principles that drive our organization forward</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-card/50 backdrop-blur-sm rounded-3xl p-8 border border-white/10">
              <div className="w-14 h-14 hexagon bg-primary/20 flex items-center justify-center mb-6">
                <Target className="text-primary-light" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-white">Our Mission</h3>
              <p className="text-white/70">
                To promote and advance scientific and technological education among high school students globally,
                creating opportunities for research, collaboration, and academic growth.
              </p>
            </div>

            <div className="bg-card/50 backdrop-blur-sm rounded-3xl p-8 border border-white/10">
              <div className="w-14 h-14 hexagon bg-secondary/20 flex items-center justify-center mb-6">
                <Lightbulb className="text-secondary-light" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-white">Our Vision</h3>
              <p className="text-white/70">
                To build a global community where every high school student with a passion for science and technology
                has access to quality resources, mentorship, and platforms to showcase their talents and research.
              </p>
            </div>

            <div className="bg-card/50 backdrop-blur-sm rounded-3xl p-8 border border-white/10">
              <div className="w-14 h-14 hexagon bg-primary/20 flex items-center justify-center mb-6">
                <BookOpen className="text-primary-light" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-white">Our Values</h3>
              <ul className="space-y-3 text-white/70">
                <li className="flex items-start">
                  <Check size={16} className="text-primary-light mt-1 mr-2 flex-shrink-0" />
                  <span>Academic excellence and scientific integrity</span>
                </li>
                <li className="flex items-start">
                  <Check size={16} className="text-primary-light mt-1 mr-2 flex-shrink-0" />
                  <span>Inclusivity and global collaboration</span>
                </li>
                <li className="flex items-start">
                  <Check size={16} className="text-primary-light mt-1 mr-2 flex-shrink-0" />
                  <span>Innovation and creative problem-solving</span>
                </li>
                <li className="flex items-start">
                  <Check size={16} className="text-primary-light mt-1 mr-2 flex-shrink-0" />
                  <span>Mentorship and knowledge sharing</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-primary/5 blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 rounded-full bg-secondary/5 blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="inline-block px-4 py-1 rounded-full text-xs font-medium bg-muted text-white/90 mb-4">
              Our Team
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">Leadership Team</h2>
            <p className="text-white/80">Meet the dedicated students behind NatSciTech</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Team Member 1 */}
            <div className="bg-card rounded-3xl overflow-hidden card-hover border border-white/5">
              <div className="relative h-64 w-full">
                <Image src="/placeholder.svg?height=300&width=300" alt="Team Member" fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent"></div>
              </div>
              <div className="p-6 relative -mt-20">
                <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-card mx-auto mb-4">
                  <Image
                    src="/placeholder.svg?height=100&width=100"
                    alt="Team Member"
                    width={80}
                    height={80}
                    className="object-cover"
                  />
                </div>
                <div className="text-center">
                  <h3 className="text-xl font-semibold text-white">Emma Chen</h3>
                  <p className="text-primary-light font-medium mb-3">President</p>
                  <p className="text-sm text-white/70">
                    Senior at International High School, passionate about neuroscience and AI research.
                  </p>
                </div>
              </div>
            </div>

            {/* Team Member 2 */}
            <div className="bg-card rounded-3xl overflow-hidden card-hover border border-white/5">
              <div className="relative h-64 w-full">
                <Image src="/placeholder.svg?height=300&width=300" alt="Team Member" fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent"></div>
              </div>
              <div className="p-6 relative -mt-20">
                <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-card mx-auto mb-4">
                  <Image
                    src="/placeholder.svg?height=100&width=100"
                    alt="Team Member"
                    width={80}
                    height={80}
                    className="object-cover"
                  />
                </div>
                <div className="text-center">
                  <h3 className="text-xl font-semibold text-white">Rahim Patel</h3>
                  <p className="text-secondary-light font-medium mb-3">Vice President</p>
                  <p className="text-sm text-white/70">
                    Junior at Global Academy, focused on renewable energy engineering and sustainability.
                  </p>
                </div>
              </div>
            </div>

            {/* Team Member 3 */}
            <div className="bg-card rounded-3xl overflow-hidden card-hover border border-white/5">
              <div className="relative h-64 w-full">
                <Image src="/placeholder.svg?height=300&width=300" alt="Team Member" fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent"></div>
              </div>
              <div className="p-6 relative -mt-20">
                <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-card mx-auto mb-4">
                  <Image
                    src="/placeholder.svg?height=100&width=100"
                    alt="Team Member"
                    width={80}
                    height={80}
                    className="object-cover"
                  />
                </div>
                <div className="text-center">
                  <h3 className="text-xl font-semibold text-white">Sofia Rodriguez</h3>
                  <p className="text-primary-light font-medium mb-3">Programs Director</p>
                  <p className="text-sm text-white/70">
                    Senior at Science Academy, researching astrophysics and quantum computing.
                  </p>
                </div>
              </div>
            </div>

            {/* Team Member 4 */}
            <div className="bg-card rounded-3xl overflow-hidden card-hover border border-white/5">
              <div className="relative h-64 w-full">
                <Image src="/placeholder.svg?height=300&width=300" alt="Team Member" fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent"></div>
              </div>
              <div className="p-6 relative -mt-20">
                <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-card mx-auto mb-4">
                  <Image
                    src="/placeholder.svg?height=100&width=100"
                    alt="Team Member"
                    width={80}
                    height={80}
                    className="object-cover"
                  />
                </div>
                <div className="text-center">
                  <h3 className="text-xl font-semibold text-white">David Kim</h3>
                  <p className="text-secondary-light font-medium mb-3">Communications Lead</p>
                  <p className="text-sm text-white/70">
                    Junior at STEM High School, specializing in psychology and cognitive science.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/members"
              className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-primary to-secondary text-white px-6 py-3 text-base font-medium shadow-lg hover:shadow-[0_0_20px_rgba(var(--primary),0.5)] transition-all"
            >
              View All Members
              <ArrowRight size={18} className="ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Join Us CTA */}
      <section className="py-24 relative overflow-hidden bg-gradient-to-r from-primary to-secondary clip-wave">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Join Our Growing Community</h2>
            <p className="text-xl text-white/90 mb-8">
              Be part of a movement that's shaping the future of science and technology education.
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

