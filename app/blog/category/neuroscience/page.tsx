import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, ChevronRight } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Neuroscience Articles",
  description:
    "Explore our collection of neuroscience articles covering brain development, cognitive function, and more.",
  openGraph: {
    title: "Neuroscience Articles | NatSciTech Blog",
    description:
      "Explore our collection of neuroscience articles covering brain development, cognitive function, and more.",
  },
}

export default function NeuroscienceCategory() {
  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="relative py-16 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-secondary/20 to-transparent opacity-30"></div>
          <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-t from-primary/20 to-transparent opacity-30"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto">
            <Link href="/blog" className="inline-flex items-center text-white/70 hover:text-white mb-6">
              <ArrowLeft size={16} className="mr-2" />
              Back to Blog
            </Link>
            <h1 className="text-3xl md:text-4xl font-bold mb-6 text-white">Neuroscience Articles</h1>
            <p className="text-white/80 text-lg">
              Explore the fascinating world of neuroscience, from brain development to cognitive function and neural
              processes.
            </p>
          </div>
        </div>
      </section>

      {/* Articles List */}
      <section className="py-16 relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 gap-8">
              {/* Sleep Cognitive Function Article */}
              <div className="bg-card rounded-lg overflow-hidden border border-white/10">
                <div className="flex flex-col md:flex-row">
                  <div className="relative h-48 md:h-auto md:w-1/3">
                    <Image
                      src="/images/neuroscience.jpg"
                      alt="Sleep and Cognitive Function"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6 md:w-2/3">
                    <div className="flex items-center space-x-2 mb-3">
                      <span className="px-3 py-1 bg-secondary/20 text-secondary-light text-xs rounded-full">
                        Neuroscience
                      </span>
                      <span className="text-white/60 text-xs">March 1, 2025</span>
                    </div>
                    <h3 className="text-xl font-semibold mb-3 text-white">
                      The Impact of Sleep on Cognitive Function in Adolescents
                    </h3>
                    <p className="text-white/80 mb-4">
                      Research on how sleep affects brain development and academic performance in high school students.
                    </p>
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="w-8 h-8 rounded-full overflow-hidden bg-secondary/20">
                        <Image
                          src="/images/student-5.jpg"
                          alt="Emma Chen"
                          width={32}
                          height={32}
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <p className="text-white/80 text-sm">Emma Chen</p>
                      </div>
                    </div>
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
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 relative overflow-hidden bg-[#0d1424]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold mb-8 text-white">Other Categories</h2>

          <div className="grid grid-cols-1 sm:grid-cols-1 gap-4">
            <Link
              href="/blog/category/physics"
              className="bg-card/50 backdrop-blur-sm rounded-lg p-6 border border-white/10 hover:border-primary/50 transition-colors"
            >
              <h3 className="text-xl font-bold mb-2 text-white">Physics</h3>
              <p className="text-white/60 text-sm">1 article</p>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
