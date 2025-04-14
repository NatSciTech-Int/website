import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Calendar, User, Share2 } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Ronald Mallett: The Physicist's Quest for Time Travel",
  description:
    "Exploring the theories and work of physicist Ronald Mallett on time travel through circulating light beams and closed timelike curves.",
  openGraph: {
    title: "Ronald Mallett: The Physicist's Quest for Time Travel",
    description:
      "Exploring the theories and work of physicist Ronald Mallett on time travel through circulating light beams and closed timelike curves.",
  },
}

export default function BlogPost() {
  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="relative py-16 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-primary/20 to-transparent opacity-30"></div>
          <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-t from-secondary/20 to-transparent opacity-30"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto">
            <Link href="/blog" className="inline-flex items-center text-white/70 hover:text-white mb-6">
              <ArrowLeft size={16} className="mr-2" />
              Back to Blog
            </Link>
            <h1 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Ronald Mallett: The Physicist's Quest for Time Travel
            </h1>
            <div className="flex flex-wrap items-center gap-4 mb-8">
              <div className="flex items-center text-white/60 text-sm">
                <Calendar size={14} className="mr-1" />
                March 10, 2025
              </div>
              <div className="flex items-center text-white/60 text-sm">
                <User size={14} className="mr-1" />
                Joshua Fung
              </div>
              <div className="flex items-center">
                <span className="px-3 py-1 bg-primary/20 text-primary-light text-xs rounded-full">Physics</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="py-8 relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="relative h-[400px] w-full rounded-xl overflow-hidden mb-8">
              <Image src="/images/physics.jpg" alt="Time Travel Physics" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Blog Content */}
      <section className="py-8 relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="blog-content">
              <h2>Introduction</h2>
              <p className="text-white/90 text-lg mb-6 leading-relaxed">
                In 1973, a 28 year old Ronald Mallett would receive his Ph.D. in physics from Pennsylvania State. Since
                then, he has been one of the few physicists leading the development of time travel. Ronald Mallett's
                fascination with time travel began in childhood, after the death of his father in 1955. At the age of
                11, he discovered a comic adaptation of H.G. Wells' The Time Machine, which sparked a lifelong obsession
                with the idea of traveling back in time to save his father. His passion carried through 4 years of
                service in the air-force and eventually as we know him today in academic study.
              </p>

              <h2>Mallett's Device and Theory</h2>
              <p className="text-white/80 mb-6 leading-relaxed">
                However, it was only in 2006 when Mallett would publish his work through his autobiography— Time
                Traveler, co-authored with Bruce Henderson. In the book, Mallett proposed a time machine based on his
                theory that circulating beams of light—specifically, a ring laser—could warp spacetime. According to
                Einstein's General Relativity, not just mass, but energy, can curve spacetime. Mallett theorized that a
                continuously circulating unidirectional light beam could produce a gravitational field, predicting that
                a neutral spinning particle placed inside the ring would experience frame-dragging—a twisting of
                spacetime that would slowly drag the particle around.
              </p>

              <p className="text-white/80 mb-6 leading-relaxed">
                Taking this a step further, he argued that under strong gravitational conditions, such a setup might
                generate closed timelike curves (CTCs), in theory, allowing for time travel into a fixed point in the
                past. Mallett also built a prototype to demonstrate the twisting effect of a circulating beam of light
                and claimed to have derived an equation supporting his theory.
              </p>

              <div className="bg-card/50 backdrop-blur-sm rounded-xl p-6 border border-white/10 mb-8">
                <h3 className="text-xl font-semibold mb-4 text-white">Key Concept</h3>
                <p className="text-white/80 italic">
                  "If you can bend space, there's a possibility of you twisting space. In Einstein's theory, what we
                  call space and time, in reality, are components of a larger reality called space-time. If you twist
                  space, you also twist time." — Ronald Mallett
                </p>
              </div>

              <h2>What are CTCs (Closed Time Loops)?</h2>
              <p className="text-white/80 mb-6 leading-relaxed">
                Closed timelike curves (CTCs) are theoretical loops in spacetime that allow an object to return to its
                own past. In physics terms, a CTC is a worldline that returns to its starting point in spacetime.
                Mallett believes that the combination of a circulating beam of light and the geometry it produces could
                form a real-world version of a CTC.
              </p>

              <div className="relative h-[300px] w-full rounded-xl overflow-hidden my-8">
                <Image
                  src="/placeholder.svg?height=600&width=800"
                  alt="Conceptual illustration of a closed timelike curve"
                  fill
                  className="object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                  <p className="text-white/90 text-sm">
                    Conceptual illustration of a closed timelike curve (CTC) in spacetime
                  </p>
                </div>
              </div>

              <h2>Criticism of Mallett's Work</h2>
              <p className="text-white/80 mb-6 leading-relaxed">
                Physicists Ken Olum and Allen Everett have raised several strong objections. They pointed out that the
                spacetime geometry used in his model contained a singularity even when the laser was turned
                off—essentially requiring the conditions that the laws of our universe could not and cannot meet.
                Similarly, Stephen Hawking's Chronology Protection Conjecture (1992) asserts that CTCs cannot form in
                any finite region of spacetime that follows the weak energy condition (i.e., no exotic matter).
                Mallett's infinite line source avoids this limit only in theory. Any real-world, finite version would
                likely not allow time loops.
              </p>

              <h2>Conclusion</h2>
              <p className="text-white/80 mb-6 leading-relaxed">
                Next year on the 30th of March, 2026, Mallett turns 81. Until then he will continue working to complete
                his theory and one day potentially a functioning prototype of his device. In a 2018 interview with NBC,
                Mallet stated "People ask me all the time, 'When it's time travel going to happen?' And my answer to
                them is when we decide that we want to give it adequate funding. It's not going to be done with a
                DeLorean in a garage, it's going to require teamwork, scientific advances, it's gonna require funding on
                a large scale."
              </p>

              <p className="text-white/80 mb-6 leading-relaxed">
                Perhaps neither us nor Mallett may ever live to witness the creation of his device, but when the time
                comes that such an event occurs, Mallett's work might just be the key to bringing the once fictional
                time machine into fruition.
              </p>

              <div className="flex items-center justify-between mt-12 pt-6 border-t border-white/10">
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full overflow-hidden bg-primary/20 mr-4">
                    <Image
                      src="/images/student-1.jpg"
                      alt="Joshua Fung"
                      width={48}
                      height={48}
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="text-white font-medium">Joshua Fung</p>
                    <p className="text-white/60 text-sm">President</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <button className="p-2 rounded-full bg-white/10 text-white/80 hover:bg-white/20 transition-colors">
                    <Share2 size={18} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Articles */}
      <section className="py-16 relative overflow-hidden bg-[#0d1424]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold mb-8 text-white">Related Articles</h2>

            <div className="grid grid-cols-1 md:grid-cols-1 gap-6">
              <Link
                href="/blog/sleep-cognitive-function"
                className="bg-card/50 backdrop-blur-sm rounded-lg overflow-hidden border border-white/10 hover:border-secondary/50 transition-colors"
              >
                <div className="relative h-48">
                  <Image
                    src="/images/neuroscience.jpg"
                    alt="Sleep and Cognitive Function"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center space-x-2 mb-3">
                    <span className="px-3 py-1 bg-secondary/20 text-secondary-light text-xs rounded-full">
                      Neuroscience
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-white">
                    The Impact of Sleep on Cognitive Function in Adolescents
                  </h3>
                  <p className="text-white/70 text-sm">
                    Research on how sleep affects brain development and academic performance in high school students.
                  </p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
