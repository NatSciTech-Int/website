import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Calendar, ChevronRight } from "lucide-react"

export default function Blog() {
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
              Our Blog
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">Scientific Insights</h1>
            <p className="text-xl text-white/80">
              Explore articles, research highlights, and student features from our global community
            </p>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-16 relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <div className="inline-block px-4 py-1 rounded-full text-xs font-medium bg-primary/20 text-primary-light mb-4">
              Featured Article
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">Student Feature</h2>
          </div>

          <div className="bg-card rounded-xl overflow-hidden border border-white/10 shadow-lg">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              <div className="relative h-64 lg:h-auto">
                <Image src="/images/neuroscience.jpg" alt="Featured Post" fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-card lg:bg-gradient-to-l"></div>
              </div>
              <div className="p-8 md:p-10">
                <div className="flex items-center space-x-4 mb-4">
                  <span className="px-3 py-1 bg-primary/20 text-primary-light text-xs rounded-full">Neuroscience</span>
                  <span className="text-white/60 text-xs flex items-center">
                    <Calendar size={12} className="mr-1" />
                    March 1, 2025
                  </span>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white">
                  The Impact of Sleep on Cognitive Function in Adolescents
                </h3>
                <p className="text-white/80 mb-6">
                  This month's student feature explores the relationship between sleep patterns and cognitive
                  performance in high school students, with implications for academic scheduling and student well-being.
                </p>
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-10 h-10 rounded-full overflow-hidden bg-primary/20">
                    <Image
                      src="/placeholder.svg?height=100&width=100"
                      alt="Author"
                      width={40}
                      height={40}
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="text-white font-medium">Emma Chen</p>
                    <p className="text-white/60 text-sm">Student Researcher</p>
                  </div>
                </div>
                <Link
                  href="/blog/sleep-cognitive-function"
                  className="inline-flex items-center justify-center rounded-md bg-primary text-white px-6 py-3 text-base font-medium hover:bg-primary-dark transition-colors"
                >
                  Read Full Article
                  <ArrowRight size={18} className="ml-2" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Contest Promotion */}
      <section className="py-16 relative overflow-hidden bg-gradient-to-br from-primary/10 to-secondary/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-card/50 backdrop-blur-sm rounded-xl p-8 border border-white/10">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <h3 className="text-2xl font-bold mb-2 text-white">March Blog Publication Contest</h3>
                <p className="text-white/80 mb-4">
                  Submit your research article for a chance to be featured as our next Student Feature!
                </p>
                <div className="text-white/60 text-sm">
                  <span className="text-primary-light font-medium">Deadline:</span> March 15, 2025
                </div>
              </div>
              <Link
                href="/programs#blog-contest"
                className="inline-flex items-center justify-center rounded-md bg-primary text-white px-6 py-3 text-base font-medium hover:bg-primary-dark transition-colors whitespace-nowrap"
              >
                Learn More
                <ArrowRight size={18} className="ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Recent Posts */}
      <section className="py-16 relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold mb-8 gradient-text">Recent Articles</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Blog Post 1 */}
            <div className="bg-card rounded-lg overflow-hidden border border-white/10">
              <div className="relative h-48">
                <Image src="/images/physics.jpg" alt="Blog Post" fill className="object-cover" />
              </div>
              <div className="p-6">
                <div className="flex items-center space-x-2 mb-3">
                  <span className="px-3 py-1 bg-primary/20 text-primary-light text-xs rounded-full">Physics</span>
                  <span className="text-white/60 text-xs">March 10, 2025</span>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-white">Exploring Quantum Computing Principles</h3>
                <p className="text-white/80 mb-4 line-clamp-2">
                  An introduction to the fascinating world of quantum computing and its potential applications in
                  solving complex problems.
                </p>
                <Link
                  href="/blog/quantum-computing"
                  className="text-primary-light font-medium inline-flex items-center hover:underline"
                >
                  Read more <ChevronRight size={16} className="ml-1" />
                </Link>
              </div>
            </div>

            {/* Blog Post 2 */}
            <div className="bg-card rounded-lg overflow-hidden border border-white/10">
              <div className="relative h-48">
                <Image src="/images/neuroscience.jpg" alt="Blog Post" fill className="object-cover" />
              </div>
              <div className="p-6">
                <div className="flex items-center space-x-2 mb-3">
                  <span className="px-3 py-1 bg-secondary/20 text-secondary-light text-xs rounded-full">
                    Neuroscience
                  </span>
                  <span className="text-white/60 text-xs">March 5, 2025</span>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-white">The Brain's Neural Plasticity</h3>
                <p className="text-white/80 mb-4 line-clamp-2">
                  Discover how our brains adapt and change throughout our lives, and what this means for learning and
                  recovery.
                </p>
                <Link
                  href="/blog/neural-plasticity"
                  className="text-secondary-light font-medium inline-flex items-center hover:underline"
                >
                  Read more <ChevronRight size={16} className="ml-1" />
                </Link>
              </div>
            </div>

            {/* Blog Post 3 */}
            <div className="bg-card rounded-lg overflow-hidden border border-white/10">
              <div className="relative h-48">
                <Image src="/images/engineering.jpg" alt="Blog Post" fill className="object-cover" />
              </div>
              <div className="p-6">
                <div className="flex items-center space-x-2 mb-3">
                  <span className="px-3 py-1 bg-primary/20 text-primary-light text-xs rounded-full">Engineering</span>
                  <span className="text-white/60 text-xs">February 28, 2025</span>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-white">Sustainable Energy Solutions</h3>
                <p className="text-white/80 mb-4 line-clamp-2">
                  Exploring innovative approaches to renewable energy that could help address climate change challenges.
                </p>
                <Link
                  href="/blog/sustainable-energy"
                  className="text-primary-light font-medium inline-flex items-center hover:underline"
                >
                  Read more <ChevronRight size={16} className="ml-1" />
                </Link>
              </div>
            </div>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Blog Post 4 */}
            <div className="bg-card rounded-lg overflow-hidden border border-white/10">
              <div className="flex flex-col md:flex-row">
                <div className="relative h-48 md:h-auto md:w-1/3">
                  <Image src="/images/psychology.jpg" alt="Blog Post" fill className="object-cover" />
                </div>
                <div className="p-6 md:w-2/3">
                  <div className="flex items-center space-x-2 mb-3">
                    <span className="px-3 py-1 bg-secondary/20 text-secondary-light text-xs rounded-full">
                      Psychology
                    </span>
                    <span className="text-white/60 text-xs">February 20, 2025</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-white">The Psychology of Decision-Making</h3>
                  <p className="text-white/80 mb-4 line-clamp-2">
                    Understanding the cognitive processes that influence how we make choices in everyday life.
                  </p>
                  <Link
                    href="/blog/decision-making"
                    className="text-secondary-light font-medium inline-flex items-center hover:underline"
                  >
                    Read more <ChevronRight size={16} className="ml-1" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Blog Post 5 */}
            <div className="bg-card rounded-lg overflow-hidden border border-white/10">
              <div className="flex flex-col md:flex-row">
                <div className="relative h-48 md:h-auto md:w-1/3">
                  <Image src="/images/physics.jpg" alt="Blog Post" fill className="object-cover" />
                </div>
                <div className="p-6 md:w-2/3">
                  <div className="flex items-center space-x-2 mb-3">
                    <span className="px-3 py-1 bg-primary/20 text-primary-light text-xs rounded-full">Physics</span>
                    <span className="text-white/60 text-xs">February 15, 2025</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-white">Exploring Dark Matter Theories</h3>
                  <p className="text-white/80 mb-4 line-clamp-2">
                    A look at current theories about dark matter and its role in the universe.
                  </p>
                  <Link
                    href="/blog/dark-matter"
                    className="text-primary-light font-medium inline-flex items-center hover:underline"
                  >
                    Read more <ChevronRight size={16} className="ml-1" />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 flex justify-center">
            <nav className="inline-flex rounded-lg overflow-hidden bg-card/50 p-1 border border-white/10">
              <button className="px-3 py-1 text-white/50 hover:text-white transition-colors">Previous</button>
              <button className="px-3 py-1 rounded-md bg-primary text-white">1</button>
              <button className="px-3 py-1 text-white/50 hover:text-white transition-colors">2</button>
              <button className="px-3 py-1 text-white/50 hover:text-white transition-colors">3</button>
              <button className="px-3 py-1 text-white/50 hover:text-white transition-colors">Next</button>
            </nav>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 relative overflow-hidden bg-[#0d1424]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold mb-8 text-white">Categories</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            <Link
              href="/blog/category/physics"
              className="bg-card/50 backdrop-blur-sm rounded-lg p-6 border border-white/10 hover:border-primary/50 transition-colors"
            >
              <h3 className="text-xl font-bold mb-2 text-white">Physics</h3>
              <p className="text-white/60 text-sm">12 articles</p>
            </Link>
            <Link
              href="/blog/category/neuroscience"
              className="bg-card/50 backdrop-blur-sm rounded-lg p-6 border border-white/10 hover:border-secondary/50 transition-colors"
            >
              <h3 className="text-xl font-bold mb-2 text-white">Neuroscience</h3>
              <p className="text-white/60 text-sm">8 articles</p>
            </Link>
            <Link
              href="/blog/category/engineering"
              className="bg-card/50 backdrop-blur-sm rounded-lg p-6 border border-white/10 hover:border-primary/50 transition-colors"
            >
              <h3 className="text-xl font-bold mb-2 text-white">Engineering</h3>
              <p className="text-white/60 text-sm">10 articles</p>
            </Link>
            <Link
              href="/blog/category/psychology"
              className="bg-card/50 backdrop-blur-sm rounded-lg p-6 border border-white/10 hover:border-secondary/50 transition-colors"
            >
              <h3 className="text-xl font-bold mb-2 text-white">Psychology</h3>
              <p className="text-white/60 text-sm">7 articles</p>
            </Link>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-primary/20 to-secondary/20 rounded-xl p-8 md:p-10 border border-white/10">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white">Stay Updated</h2>
              <p className="text-white/80 mb-6">
                Follow us on Instagram to receive the latest articles, research highlights, and program updates.
              </p>
              <a
                href="https://www.instagram.com/natscitech/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-md bg-white text-[#0a101e] px-8 py-3 text-base font-medium hover:bg-primary-light hover:text-white transition-colors"
              >
                Follow @natscitech
                <ArrowRight size={18} className="ml-2" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

