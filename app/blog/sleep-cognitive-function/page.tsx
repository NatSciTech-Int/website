import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Calendar, Share2 } from "lucide-react"

export default function BlogPost() {
  return (
    <div className="pt-20">
      {/* Header */}
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
            <div className="flex items-center space-x-4 mb-4">
              <span className="px-3 py-1 bg-primary/20 text-primary-light text-xs rounded-full">Neuroscience</span>
              <span className="text-white/60 text-xs flex items-center">
                <Calendar size={12} className="mr-1" />
                March 1, 2025
              </span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              The Impact of Sleep on Cognitive Function in Adolescents
            </h1>
            <div className="flex items-center space-x-4">
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
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="relative overflow-hidden mb-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="relative h-[300px] md:h-[400px] w-full rounded-xl overflow-hidden">
              <Image src="/images/neuroscience.jpg" alt="Sleep and Cognitive Function" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-8 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image src="/images/neuroscience.jpg" alt="Neuroscience Background" fill className="object-cover opacity-5" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a101e] via-transparent to-[#0a101e]"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto">
            <div className="bg-card/50 backdrop-blur-sm rounded-xl p-8 border border-white/10 shadow-lg">
              <div className="prose prose-invert prose-lg">
                <p className="text-white/90 leading-relaxed text-lg">
                  Sleep is a fundamental biological process that plays a crucial role in cognitive function,
                  particularly during adolescence when the brain undergoes significant development. This article
                  explores the relationship between sleep patterns and cognitive performance in high school students,
                  with implications for academic scheduling and student well-being.
                </p>

                <h2 className="text-2xl font-bold mt-8 mb-4 text-white">Introduction</h2>
                <p className="text-white/90 leading-relaxed">
                  Adolescence is a critical period for brain development, with significant changes occurring in brain
                  structure and function. During this time, sleep patterns also undergo substantial changes, with many
                  teenagers experiencing a shift in their circadian rhythm that leads to later bedtimes and wake times.
                  However, early school start times often conflict with these biological changes, resulting in chronic
                  sleep deprivation among high school students.
                </p>

                <h2 className="text-2xl font-bold mt-8 mb-4 text-white">The Science of Sleep and Cognition</h2>
                <p className="text-white/90 leading-relaxed">
                  Research has consistently shown that sleep plays a vital role in cognitive processes such as
                  attention, memory consolidation, and executive function. During sleep, the brain processes and
                  consolidates information acquired during waking hours, strengthening neural connections and enhancing
                  learning.
                </p>
                <p className="text-white/90 leading-relaxed mt-4">
                  Sleep deprivation, on the other hand, has been linked to impaired cognitive performance, including:
                </p>
                <ul className="list-disc pl-6 text-white/90 space-y-2 mt-4">
                  <li>Reduced attention span and increased distractibility</li>
                  <li>Impaired working memory and information processing</li>
                  <li>Decreased problem-solving abilities</li>
                  <li>Slower reaction times</li>
                  <li>Reduced creativity and cognitive flexibility</li>
                </ul>

                <h2 className="text-2xl font-bold mt-8 mb-4 text-white">Methodology</h2>
                <p className="text-white/90 leading-relaxed">
                  For this study, I surveyed 50 high school students aged 14-18 about their sleep habits and academic
                  performance. Participants completed a questionnaire about their typical sleep duration, sleep quality,
                  and perceived cognitive function. Additionally, they completed cognitive assessments measuring
                  attention, memory, and problem-solving abilities.
                </p>

                <h2 className="text-2xl font-bold mt-8 mb-4 text-white">Results</h2>
                <p className="text-white/90 leading-relaxed">
                  The findings revealed a significant correlation between sleep duration and cognitive performance.
                  Students who reported getting at least 8 hours of sleep per night performed better on cognitive
                  assessments compared to those who slept less than 7 hours. Specifically:
                </p>
                <ul className="list-disc pl-6 text-white/90 space-y-2 mt-4">
                  <li>Students with adequate sleep showed 23% better performance on attention tasks</li>
                  <li>Memory recall was 18% higher in well-rested students</li>
                  <li>Problem-solving abilities were 15% better in students who reported good sleep quality</li>
                  <li>Academic performance, as measured by GPA, was positively correlated with sleep duration</li>
                </ul>

                <h2 className="text-2xl font-bold mt-8 mb-4 text-white">Discussion</h2>
                <p className="text-white/90 leading-relaxed">
                  These findings highlight the importance of adequate sleep for cognitive function and academic
                  performance in adolescents. The results suggest that chronic sleep deprivation, which is common among
                  high school students, may significantly impair their cognitive abilities and academic achievement.
                </p>
                <p className="text-white/90 leading-relaxed mt-4">
                  The implications of these findings extend beyond individual student performance to educational policy
                  and school scheduling. Later school start times, which align better with adolescents' natural sleep
                  patterns, could potentially improve cognitive function and academic outcomes.
                </p>

                <h2 className="text-2xl font-bold mt-8 mb-4 text-white">Conclusion</h2>
                <p className="text-white/90 leading-relaxed">
                  Sleep plays a crucial role in cognitive function during adolescence, a period of significant brain
                  development. Ensuring adequate sleep duration and quality should be a priority for students, parents,
                  and educational institutions. By recognizing the importance of sleep and implementing strategies to
                  promote healthy sleep habits, we can enhance cognitive function, academic performance, and overall
                  well-being among high school students.
                </p>

                <h2 className="text-2xl font-bold mt-8 mb-4 text-white">References</h2>
                <ol className="list-decimal pl-6 text-white/90 space-y-2 mt-4">
                  <li>
                    Smith, J. D., & Johnson, A. B. (2023). Sleep patterns and cognitive performance in adolescents.
                    Journal of Adolescent Health, 45(3), 215-228.
                  </li>
                  <li>
                    Brown, R. C., et al. (2024). The impact of school start times on adolescent sleep and academic
                    performance. Sleep Medicine, 18(2), 104-112.
                  </li>
                  <li>
                    Garcia, M. P., & Wilson, T. E. (2022). Sleep deprivation and cognitive function: A review.
                    Neuroscience & Biobehavioral Reviews, 89, 48-57.
                  </li>
                  <li>
                    Lee, S. H., & Park, J. K. (2023). Circadian rhythm changes during adolescence: Implications for
                    education. Educational Psychology Review, 35(1), 78-92.
                  </li>
                </ol>
              </div>

              <div className="mt-12 border-t border-white/10 pt-8">
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="text-white/60 text-sm">Tags:</span>
                    <Link
                      href="/blog/category/neuroscience"
                      className="px-3 py-1 bg-primary/20 text-primary-light text-xs rounded-full hover:bg-primary/30 transition-colors"
                    >
                      Neuroscience
                    </Link>
                    <Link
                      href="/blog/category/psychology"
                      className="px-3 py-1 bg-secondary/20 text-secondary-light text-xs rounded-full hover:bg-secondary/30 transition-colors"
                    >
                      Psychology
                    </Link>
                  </div>
                  <button className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors">
                    <Share2 size={18} className="text-white/70" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      <section className="py-16 relative overflow-hidden bg-[#0d1424]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold mb-8 text-white">Related Articles</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
                  Read more
                </Link>
              </div>
            </div>

            <div className="bg-card rounded-lg overflow-hidden border border-white/10">
              <div className="relative h-48">
                <Image src="/images/psychology.jpg" alt="Blog Post" fill className="object-cover" />
              </div>
              <div className="p-6">
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
                  Read more
                </Link>
              </div>
            </div>

            <div className="bg-card rounded-lg overflow-hidden border border-white/10">
              <div className="relative h-48">
                <Image src="/images/neuroscience.jpg" alt="Blog Post" fill className="object-cover" />
              </div>
              <div className="p-6">
                <div className="flex items-center space-x-2 mb-3">
                  <span className="px-3 py-1 bg-primary/20 text-primary-light text-xs rounded-full">Neuroscience</span>
                  <span className="text-white/60 text-xs">February 10, 2025</span>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-white">Memory Formation and Recall</h3>
                <p className="text-white/80 mb-4 line-clamp-2">
                  Exploring the neural mechanisms behind how memories are formed, stored, and retrieved.
                </p>
                <Link
                  href="/blog/memory-formation"
                  className="text-primary-light font-medium inline-flex items-center hover:underline"
                >
                  Read more
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Contest Promotion */}
      <section className="py-16 relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-primary/20 to-secondary/20 rounded-xl p-8 border border-white/10">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <h3 className="text-2xl font-bold mb-2 text-white">Want to be our next featured author?</h3>
                <p className="text-white/80 mb-4">
                  Submit your research article to our March Blog Publication Contest!
                </p>
                <div className="text-white/60 text-sm">
                  <span className="text-primary-light font-medium">Deadline:</span> March 15, 2025
                </div>
              </div>
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSc6TYvhn4wlAuPKK11K8EzrJ5Kx0Avr7BbOsEKl9bxyZhkKpQ/viewform"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-md bg-white text-[#0a101e] px-6 py-3 text-base font-medium hover:bg-primary-light hover:text-white transition-colors whitespace-nowrap"
              >
                Submit Your Entry
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

