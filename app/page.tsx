import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Calendar, ChevronRight } from "lucide-react"
import type { Metadata } from "next"

// Update the metadata
export const metadata: Metadata = {
  title: "Blog",
  description:
    "Explore articles, research highlights, and student features from our global community of high school scientists and researchers.",
  openGraph: {
    title: "LibSci Blog",
    description:
      "Explore articles, research highlights, and student features from our global community of high school scientists and researchers.",
  },
}

export default function Blog() {
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
                <Image src="/images/physics.jpg" alt="Featured Post" fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-card lg:bg-gradient-to-l"></div>
              </div>
              <div className="p-8 md:p-10">
                <div className="flex items-center space-x-4 mb-4">
                  <span className="px-3 py-1 bg-primary/20 text-primary-light text-xs rounded-full">Physics</span>
                  <span className="text-white/60 text-xs flex items-center">
                    <Calendar size={12} className="mr-1" />
                    March 10, 2025
                  </span>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white">
                  Ronald Mallett: The Physicist's Quest for Time Travel
                </h3>
                <p className="text-white/80 mb-6">
                  Exploring the theories and work of physicist Ronald Mallett on time travel through circulating light
                  beams and closed timelike curves.
                </p>
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-10 h-10 rounded-full overflow-hidden bg-primary/20">
                    <Image src="/images/student-1.jpg" alt="Author" width={40} height={40} className="object-cover" />
                  </div>
                  <div>
                    <p className="text-white font-medium">Joshua Fung</p>
                    <p className="text-white/60 text-sm">President</p>
                  </div>
                </div>
                <Link
                  href="/blog/ronald-mallett-time-travel"
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

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Blog Post 1 - Ronald Mallett */}
            <div className="bg-card rounded-lg overflow-hidden border border-white/10">
              <div className="relative h-48">
                <Image src="/images/physics.jpg" alt="Blog Post" fill className="object-cover" />
              </div>
              <div className="p-6">
                <div className="flex items-center space-x-2 mb-3">
                  <span className="px-3 py-1 bg-primary/20 text-primary-light text-xs rounded-full">Physics</span>
                  <span className="text-white/60 text-xs">March 10, 2025</span>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-white">
                  Ronald Mallett: The Physicist's Quest for Time Travel
                </h3>
                <p className="text-white/80 mb-4 line-clamp-2">
                  Exploring the theories and work of physicist Ronald Mallett on time travel through circulating light
                  beams and closed timelike curves.
                </p>
                <Link
                  href="/blog/ronald-mallett-time-travel"
                  className="text-primary-light font-medium inline-flex items-center hover:underline"
                >
                  Read more <ChevronRight size={16} className="ml-1" />
                </Link>
              </div>
            </div>

            {/* Blog Post 2 - Sleep Cognitive Function */}
            <div className="bg-card rounded-lg overflow-hidden border border-white/10">
              <div className="relative h-48">
                <Image src="/images/neuroscience.jpg" alt="Blog Post" fill className="object-cover" />
              </div>
              <div className="p-6">
                <div className="flex items-center space-x-2 mb-3">
                  <span className="px-3 py-1 bg-secondary/20 text-secondary-light text-xs rounded-full">
                    Neuroscience
                  </span>
                  <span className="text-white/60 text-xs">March 1, 2025</span>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-white">
                  The Impact of Sleep on Cognitive Function in Adolescents
                </h3>
                <p className="text-white/80 mb-4 line-clamp-2">
                  Research on how sleep affects brain development and academic performance in high school students.
                </p>
                <Link
                  href="/blog/sleep-cognitive-function"
                  className="text-secondary-light font-medium inline-flex items-center hover:underline"
                >
                  Read more <ChevronRight size={16} className="ml-1" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 relative overflow-hidden bg-[#0d1424]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold mb-8 text-white">Categories</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Link
              href="/blog/category/physics"
              className="bg-card/50 backdrop-blur-sm rounded-lg p-6 border border-white/10 hover:border-primary/50 transition-colors"
            >
              <h3 className="text-xl font-bold mb-2 text-white">Physics</h3>
              <p className="text-white/60 text-sm">1 article</p>
            </Link>
            <Link
              href="/blog/category/neuroscience"
              className="bg-card/50 backdrop-blur-sm rounded-lg p-6 border border-white/10 hover:border-secondary/50 transition-colors"
            >
              <h3 className="text-xl font-bold mb-2 text-white">Neuroscience</h3>
              <p className="text-white/60 text-sm">1 article</p>
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
