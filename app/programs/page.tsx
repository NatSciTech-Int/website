import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Calendar, Users, Award, BookOpen, Lightbulb, ExternalLink } from "lucide-react"

export default function Programs() {
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
              Our Programs
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">Educational Initiatives</h1>
            <p className="text-xl text-white/80">
              Discover our range of programs designed to foster scientific exploration and technological innovation
              among high school students worldwide.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Program - Blog Contest */}
      <section id="blog-contest" className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/blog-contest.jpg"
            alt="Blog Contest Background"
            fill
            className="object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a101e] via-transparent to-[#0a101e]"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="inline-block px-4 py-1 rounded-full text-xs font-medium bg-primary/20 text-primary-light mb-4">
              Featured Program
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">March Blog Publication Contest</h2>
            <p className="text-white/80 text-lg">
              An exciting opportunity for secondary school students to showcase their research and writing skills
            </p>
          </div>

          <div className="bg-card/80 backdrop-blur-sm rounded-xl overflow-hidden border border-white/10 shadow-lg">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              <div className="p-8 md:p-10">
                <div className="inline-block px-4 py-1 rounded-full text-xs font-medium bg-primary/20 text-primary-light mb-6">
                  Deadline Extended: March 15, 2025 at 12:30 ET
                </div>
                <h3 className="text-2xl md:text-3xl font-bold mb-6 text-white">
                  Show Us What You Can Do as a Researcher in STEM!
                </h3>
                <p className="text-white/80 mb-6">
                  The Natural Science and Technology Organization is hosting a blog publication writing contest for
                  secondary school students worldwide!
                </p>
                <p className="text-white/80 mb-6">
                  Choose any subject related to Physics, Neuroscience, Engineering, Psychology, or any combination of
                  these to show us what you as a student can do as a researcher in STEM!
                </p>

                <div className="space-y-6 mb-8">
                  <div className="bg-muted/20 rounded-lg p-6 border border-white/10">
                    <div className="flex items-start space-x-4">
                      <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                        <Award className="text-primary-light" size={20} />
                      </div>
                      <div>
                        <h4 className="font-semibold text-white mb-2">1st Place</h4>
                        <p className="text-sm text-white/80">
                          The winning finalist will be credited on NatSciTech; the winning blog is featured as
                          NatSciTech's March Student Feature Blog
                        </p>
                        <p className="text-xs text-primary-light mt-1">8 volunteer hours</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-muted/20 rounded-lg p-6 border border-white/10">
                    <div className="flex items-start space-x-4">
                      <div className="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center flex-shrink-0">
                        <Award className="text-secondary-light" size={20} />
                      </div>
                      <div>
                        <h4 className="font-semibold text-white mb-2">2nd & 3rd Place</h4>
                        <p className="text-sm text-white/80">
                          2nd and 3rd place finalists will be credited on NatSciTech; your blogs may be featured on
                          NatSciTech's March blog
                        </p>
                        <p className="text-xs text-secondary-light mt-1">6 volunteer hours</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-muted/20 rounded-lg p-6 border border-white/10">
                    <div className="flex items-start space-x-4">
                      <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                        <Users className="text-primary-light" size={20} />
                      </div>
                      <div>
                        <h4 className="font-semibold text-white mb-2">Participation</h4>
                        <p className="text-sm text-white/80">
                          All participants will receive recognition for their efforts
                        </p>
                        <p className="text-xs text-primary-light mt-1">3 volunteer hours</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <a
                    href="https://docs.google.com/forms/d/e/1FAIpQLSc6TYvhn4wlAuPKK11K8EzrJ5Kx0Avr7BbOsEKl9bxyZhkKpQ/viewform"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center rounded-md bg-gradient-to-r from-primary to-secondary text-white px-6 py-3 text-base font-medium hover:shadow-lg hover:shadow-primary/20 transition-all w-full sm:w-auto"
                  >
                    Submit Your Entry
                    <ExternalLink size={18} className="ml-2" />
                  </a>
                  <a
                    href="https://www.instagram.com/natscitech/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center rounded-md bg-white/10 backdrop-blur-sm border border-white/20 text-white px-6 py-3 text-base font-medium hover:bg-white/20 transition-colors w-full sm:w-auto"
                  >
                    Follow on Instagram
                    <ArrowRight size={18} className="ml-2" />
                  </a>
                </div>
              </div>

              <div className="relative">
                <div className="h-full w-full bg-gradient-to-br from-primary/20 to-secondary/20 p-8 md:p-10 flex flex-col justify-center">
                  <div className="bg-card/50 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                    <h4 className="text-xl font-bold mb-4 text-white">Key Information</h4>
                    <ul className="space-y-4">
                      <li className="flex items-start">
                        <Calendar className="text-primary-light mt-1 mr-3 flex-shrink-0" size={18} />
                        <div>
                          <p className="text-white font-medium">Deadline</p>
                          <p className="text-white/70 text-sm">March 15, 2025 at 12:30 ET</p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <Users className="text-secondary-light mt-1 mr-3 flex-shrink-0" size={18} />
                        <div>
                          <p className="text-white font-medium">Eligibility</p>
                          <p className="text-white/70 text-sm">Secondary school students worldwide</p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <BookOpen className="text-primary-light mt-1 mr-3 flex-shrink-0" size={18} />
                        <div>
                          <p className="text-white font-medium">Topics</p>
                          <p className="text-white/70 text-sm">
                            Physics, Neuroscience, Engineering, Psychology, or any combination
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <Lightbulb className="text-secondary-light mt-1 mr-3 flex-shrink-0" size={18} />
                        <div>
                          <p className="text-white font-medium">Goal</p>
                          <p className="text-white/70 text-sm">Show what you can do as a student researcher in STEM</p>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Research Areas */}
      <section id="research" className="py-24 relative overflow-hidden bg-[#0d1424]">
        <div className="absolute inset-0 z-0">
          <Image src="/images/research-bg.jpg" alt="Research Background" fill className="object-cover opacity-5" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="inline-block px-4 py-1 rounded-full text-xs font-medium bg-white/10 text-white/90 mb-4">
              Research Opportunities
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white text-glow">Research Areas</h2>
            <p className="text-white/80">Explore our diverse fields of study and find your research passion</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div id="physics" className="bg-card/50 backdrop-blur-sm rounded-xl overflow-hidden border border-white/10">
              <div className="relative h-48 w-full">
                <Image src="/images/physics.jpg" alt="Physics" fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/80 to-transparent"></div>
                <div className="absolute bottom-4 left-6 right-6">
                  <h3 className="text-2xl font-bold text-white">Physics</h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-white/80 mb-6">
                  Explore the fundamental laws that govern the universe, from quantum mechanics to astrophysics. Our
                  physics research program encourages students to investigate the physical world through experimentation
                  and theoretical analysis.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <div className="w-2 h-2 rounded-full bg-primary-light mt-2 mr-2"></div>
                    <span className="text-white/80">Quantum mechanics and particle physics</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 rounded-full bg-primary-light mt-2 mr-2"></div>
                    <span className="text-white/80">Astrophysics and cosmology</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 rounded-full bg-primary-light mt-2 mr-2"></div>
                    <span className="text-white/80">Thermodynamics and statistical mechanics</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 rounded-full bg-primary-light mt-2 mr-2"></div>
                    <span className="text-white/80">Optics and electromagnetic phenomena</span>
                  </li>
                </ul>
              </div>
            </div>

            <div
              id="neuroscience"
              className="bg-card/50 backdrop-blur-sm rounded-xl overflow-hidden border border-white/10"
            >
              <div className="relative h-48 w-full">
                <Image src="/images/neuroscience.jpg" alt="Neuroscience" fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/80 to-transparent"></div>
                <div className="absolute bottom-4 left-6 right-6">
                  <h3 className="text-2xl font-bold text-white">Neuroscience</h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-white/80 mb-6">
                  Study the nervous system, brain function, and cognitive processes that shape human behavior. Our
                  neuroscience program focuses on understanding the brain and its impact on behavior, cognition, and
                  health.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <div className="w-2 h-2 rounded-full bg-secondary-light mt-2 mr-2"></div>
                    <span className="text-white/80">Cognitive neuroscience and brain mapping</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 rounded-full bg-secondary-light mt-2 mr-2"></div>
                    <span className="text-white/80">Neuroplasticity and learning</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 rounded-full bg-secondary-light mt-2 mr-2"></div>
                    <span className="text-white/80">Neurological disorders and treatments</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 rounded-full bg-secondary-light mt-2 mr-2"></div>
                    <span className="text-white/80">Computational neuroscience</span>
                  </li>
                </ul>
              </div>
            </div>

            <div
              id="engineering"
              className="bg-card/50 backdrop-blur-sm rounded-xl overflow-hidden border border-white/10"
            >
              <div className="relative h-48 w-full">
                <Image src="/images/engineering.jpg" alt="Engineering" fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/80 to-transparent"></div>
                <div className="absolute bottom-4 left-6 right-6">
                  <h3 className="text-2xl font-bold text-white">Engineering</h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-white/80 mb-6">
                  Design, build, and innovate with the application of scientific principles to solve real-world
                  problems. Our engineering program encourages students to develop practical solutions to complex
                  challenges.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <div className="w-2 h-2 rounded-full bg-primary-light mt-2 mr-2"></div>
                    <span className="text-white/80">Renewable energy and sustainable technologies</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 rounded-full bg-primary-light mt-2 mr-2"></div>
                    <span className="text-white/80">Robotics and automation</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 rounded-full bg-primary-light mt-2 mr-2"></div>
                    <span className="text-white/80">Biomedical engineering</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 rounded-full bg-primary-light mt-2 mr-2"></div>
                    <span className="text-white/80">Aerospace and mechanical engineering</span>
                  </li>
                </ul>
              </div>
            </div>

            <div
              id="psychology"
              className="bg-card/50 backdrop-blur-sm rounded-xl overflow-hidden border border-white/10"
            >
              <div className="relative h-48 w-full">
                <Image src="/images/psychology.jpg" alt="Psychology" fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/80 to-transparent"></div>
                <div className="absolute bottom-4 left-6 right-6">
                  <h3 className="text-2xl font-bold text-white">Psychology</h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-white/80 mb-6">
                  Investigate human behavior, cognitive processes, and psychological phenomena through scientific
                  inquiry. Our psychology program focuses on understanding the mind and behavior through research and
                  analysis.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <div className="w-2 h-2 rounded-full bg-secondary-light mt-2 mr-2"></div>
                    <span className="text-white/80">Cognitive psychology and decision-making</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 rounded-full bg-secondary-light mt-2 mr-2"></div>
                    <span className="text-white/80">Social psychology and group dynamics</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 rounded-full bg-secondary-light mt-2 mr-2"></div>
                    <span className="text-white/80">Developmental psychology</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 rounded-full bg-secondary-light mt-2 mr-2"></div>
                    <span className="text-white/80">Clinical and abnormal psychology</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mentorship Program */}
      <section id="mentorship" className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/3 right-1/4 w-64 h-64 rounded-full bg-primary/5 blur-3xl"></div>
          <div className="absolute bottom-1/3 left-1/4 w-64 h-64 rounded-full bg-secondary/5 blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="inline-block px-4 py-1 rounded-full text-xs font-medium bg-muted text-white/90 mb-4">
              Guidance & Support
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">Mentorship Program</h2>
            <p className="text-white/80">Connect with experienced mentors who can guide your scientific journey</p>
          </div>

          <div className="bg-card rounded-xl overflow-hidden border border-white/10 shadow-lg">
            <div className="p-8 md:p-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-bold mb-6 text-white">Program Overview</h3>
                  <p className="text-white/80 mb-6">
                    Our mentorship program pairs high school students with experienced mentors in their fields of
                    interest. Mentors provide guidance, feedback, and support to help students develop their research
                    skills and scientific knowledge.
                  </p>
                  <p className="text-white/80 mb-6">
                    Through regular meetings and structured activities, mentors help students define research questions,
                    design experiments, analyze data, and communicate findings effectively.
                  </p>
                  <div className="bg-muted/20 rounded-lg p-6 border border-white/10 mb-6">
                    <h4 className="font-semibold text-white mb-3">Benefits of Mentorship</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <div className="w-2 h-2 rounded-full bg-primary-light mt-2 mr-2"></div>
                        <span className="text-white/80">Personalized guidance from experts in your field</span>
                      </li>
                      <li className="flex items-start">
                        <div className="w-2 h-2 rounded-full bg-primary-light mt-2 mr-2"></div>
                        <span className="text-white/80">Feedback on research projects and writing</span>
                      </li>
                      <li className="flex items-start">
                        <div className="w-2 h-2 rounded-full bg-primary-light mt-2 mr-2"></div>
                        <span className="text-white/80">Networking opportunities with professionals</span>
                      </li>
                      <li className="flex items-start">
                        <div className="w-2 h-2 rounded-full bg-primary-light mt-2 mr-2"></div>
                        <span className="text-white/80">Development of critical thinking and research skills</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-bold mb-6 text-white">How It Works</h3>
                  <div className="space-y-6">
                    <div className="flex items-start">
                      <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mr-4">
                        <span className="text-primary-light font-bold">1</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-white mb-2">Application</h4>
                        <p className="text-white/80 text-sm">
                          Submit your application indicating your research interests and goals.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mr-4">
                        <span className="text-primary-light font-bold">2</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-white mb-2">Matching</h4>
                        <p className="text-white/80 text-sm">
                          We match you with a mentor based on your interests and goals.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mr-4">
                        <span className="text-primary-light font-bold">3</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-white mb-2">Initial Meeting</h4>
                        <p className="text-white/80 text-sm">
                          Meet your mentor and establish goals and expectations for the mentorship.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mr-4">
                        <span className="text-primary-light font-bold">4</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-white mb-2">Regular Sessions</h4>
                        <p className="text-white/80 text-sm">
                          Engage in regular mentoring sessions to develop your research project.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mr-4">
                        <span className="text-primary-light font-bold">5</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-white mb-2">Project Completion</h4>
                        <p className="text-white/80 text-sm">
                          Complete your research project with guidance from your mentor.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8">
                    <a
                      href="https://www.instagram.com/natscitech/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center rounded-md bg-primary text-white px-6 py-3 text-base font-medium hover:bg-primary-dark transition-colors"
                    >
                      Follow for Updates
                      <ArrowRight size={18} className="ml-2" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Workshops */}
      <section
        id="workshops"
        className="py-24 relative overflow-hidden bg-gradient-to-br from-primary/10 to-secondary/10"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="inline-block px-4 py-1 rounded-full text-xs font-medium bg-white/10 text-white/90 mb-4">
              Skill Development
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white text-glow">Workshops & Webinars</h2>
            <p className="text-white/80">Enhance your knowledge and skills through interactive learning experiences</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-card/50 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center mb-6">
                <Calendar className="text-primary-light" size={24} />
              </div>
              <h3 className="text-xl font-bold mb-4 text-white">Research Methodology</h3>
              <p className="text-white/80 mb-6">
                Learn the fundamentals of scientific research, including experimental design, data collection, and
                analysis techniques.
              </p>
              <div className="text-sm text-white/60">Upcoming sessions will be announced on our Instagram</div>
            </div>

            <div className="bg-card/50 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <div className="w-12 h-12 rounded-lg bg-secondary/20 flex items-center justify-center mb-6">
                <BookOpen className="text-secondary-light" size={24} />
              </div>
              <h3 className="text-xl font-bold mb-4 text-white">Scientific Writing</h3>
              <p className="text-white/80 mb-6">
                Develop your ability to communicate scientific ideas effectively through clear, concise, and compelling
                writing.
              </p>
              <div className="text-sm text-white/60">Upcoming sessions will be announced on our Instagram</div>
            </div>

            <div className="bg-card/50 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center mb-6">
                <Lightbulb className="text-primary-light" size={24} />
              </div>
              <h3 className="text-xl font-bold mb-4 text-white">Innovation & Problem-Solving</h3>
              <p className="text-white/80 mb-6">
                Explore creative approaches to scientific and technological challenges through design thinking and
                innovation.
              </p>
              <div className="text-sm text-white/60">Upcoming sessions will be announced on our Instagram</div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <a
              href="https://www.instagram.com/natscitech/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-md bg-white text-[#0a101e] px-8 py-3 text-base font-medium hover:bg-primary-light hover:text-white transition-colors"
            >
              Follow for Workshop Updates
              <ArrowRight size={18} className="ml-2" />
            </a>
          </div>
        </div>
      </section>

      {/* Join CTA */}
      <section className="py-24 relative overflow-hidden bg-gradient-to-r from-primary to-secondary clip-wave">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Ready to Participate?</h2>
            <p className="text-xl text-white/90 mb-8">
              Join our programs and be part of a global community dedicated to advancing science and technology
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

