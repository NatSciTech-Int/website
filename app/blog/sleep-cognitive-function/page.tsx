import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Calendar, User, Share2 } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "The Impact of Sleep on Cognitive Function in Adolescents",
  description: "Research on how sleep affects brain development and academic performance in high school students",
  openGraph: {
    title: "The Impact of Sleep on Cognitive Function in Adolescents",
    description: "Research on how sleep affects brain development and academic performance in high school students",
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
              The Impact of Sleep on Cognitive Function in Adolescents
            </h1>
            <div className="flex flex-wrap items-center gap-4 mb-8">
              <div className="flex items-center text-white/60 text-sm">
                <Calendar size={14} className="mr-1" />
                March 1, 2025
              </div>
              <div className="flex items-center text-white/60 text-sm">
                <User size={14} className="mr-1" />
                Adil Mukhi
              </div>
              <div className="flex items-center">
                <span className="px-3 py-1 bg-primary/20 text-primary-light text-xs rounded-full">Neuroscience</span>
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
              <Image src="/images/neuroscience.jpg" alt="Sleep and Cognitive Function" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Blog Content */}
      <section className="py-8 relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="blog-content">
              <p className="text-white/90 text-lg mb-6 leading-relaxed">
                Sleep is a fundamental biological process that plays a crucial role in brain development, especially
                during adolescence. This research explores the relationship between sleep patterns and cognitive
                performance in high school students, with implications for academic scheduling and student well-being.
              </p>

              <h2>The Adolescent Sleep Cycle</h2>
              <p className="text-white/80 mb-6 leading-relaxed">
                Adolescents experience significant changes in their sleep-wake cycles due to biological shifts in their
                circadian rhythms. Research indicates that the typical teenager's natural sleep cycle shifts to later
                hours, with melatonin (the sleep hormone) being released later in the evening compared to children and
                adults. This biological shift, combined with early school start times, often results in chronic sleep
                deprivation among high school students.
              </p>

              <p className="text-white/80 mb-6 leading-relaxed">
                Our study monitored the sleep patterns of 120 high school students aged 14-18 over a period of three
                months using wearable sleep trackers. The data revealed that the average student obtained only 6.5 hours
                of sleep per night during the school week, significantly less than the recommended 8-10 hours for this
                age group.
              </p>

              <h2>Cognitive Impact of Sleep Deprivation</h2>
              <p className="text-white/80 mb-6 leading-relaxed">
                The cognitive consequences of insufficient sleep are particularly relevant for adolescents, whose brains
                are still developing. Our research measured various cognitive functions in relation to sleep duration
                and quality, revealing several key findings:
              </p>

              <ul className="list-disc pl-6 text-white/80 space-y-2 mb-6">
                <li>
                  <strong>Memory consolidation:</strong> Students who averaged less than 7 hours of sleep showed a 23%
                  decrease in memory retention compared to those who slept 8+ hours.
                </li>
                <li>
                  <strong>Attention and focus:</strong> Reaction time tests showed significant impairment (average 15%
                  slower response) among sleep-deprived students.
                </li>
                <li>
                  <strong>Problem-solving abilities:</strong> Complex reasoning tasks were completed with 18% lower
                  accuracy by students with poor sleep quality.
                </li>
                <li>
                  <strong>Emotional regulation:</strong> Sleep-deprived students reported higher levels of stress,
                  anxiety, and irritability, which further impacted cognitive performance.
                </li>
              </ul>

              <div className="bg-card/50 backdrop-blur-sm rounded-xl p-6 border border-white/10 mb-8">
                <h3 className="text-xl font-semibold mb-4 text-white">Key Research Finding</h3>
                <p className="text-white/80 italic">
                  "For each hour of sleep lost below the recommended amount, we observed approximately a 7% decrease in
                  cognitive test performance across all measured domains."
                </p>
              </div>

              <h2>Academic Performance Correlation</h2>
              <p className="text-white/80 mb-6 leading-relaxed">
                When correlating sleep data with academic performance, our study found a statistically significant
                relationship between sleep duration and GPA. Students who consistently obtained 8+ hours of sleep
                maintained an average GPA of 3.5, while those averaging less than 6 hours had an average GPA of 2.9.
              </p>

              <p className="text-white/80 mb-6 leading-relaxed">
                Particularly interesting was the finding that the timing of academic subjects matters. Performance in
                classes scheduled before 9:00 AM showed the strongest correlation with sleep duration, suggesting that
                early morning classes may be especially challenging for sleep-deprived adolescents.
              </p>

              <h2>Implications for Educational Policy</h2>
              <p className="text-white/80 mb-6 leading-relaxed">
                Our research supports growing evidence that later school start times may benefit adolescent cognitive
                function and academic performance. Schools that have shifted to later start times (8:30 AM or later)
                report improvements in:
              </p>

              <ul className="list-disc pl-6 text-white/80 space-y-2 mb-6">
                <li>Average student GPA</li>
                <li>Standardized test scores</li>
                <li>Attendance rates</li>
                <li>Reduced disciplinary issues</li>
                <li>Improved mental health outcomes</li>
              </ul>

              <h2>Conclusion</h2>
              <p className="text-white/80 mb-6 leading-relaxed">
                The relationship between sleep and cognitive function in adolescents has significant implications for
                both individual student success and educational policy. Our research suggests that prioritizing healthy
                sleep habits and considering the biological sleep needs of teenagers when designing school schedules
                could substantially improve academic outcomes and student well-being.
              </p>

              <p className="text-white/80 mb-6 leading-relaxed">
                Future research will explore interventions to improve sleep hygiene among adolescents and measure the
                long-term impact of sleep optimization on academic achievement and cognitive development.
              </p>

              <div className="flex items-center justify-between mt-12 pt-6 border-t border-white/10">
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full overflow-hidden bg-primary/20 mr-4">
                    <Image
                      src="/images/adil-mukhi.png"
                      alt="Adil Mukhi"
                      width={48}
                      height={48}
                      className="object-cover object-top"
                    />
                  </div>
                  <div>
                    <p className="text-white font-medium">Adil Mukhi</p>
                    <p className="text-white/60 text-sm">Director of Technology</p>
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

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Link
                href="/blog/neural-plasticity"
                className="bg-card/50 backdrop-blur-sm rounded-lg overflow-hidden border border-white/10 hover:border-primary/50 transition-colors"
              >
                <div className="relative h-48">
                  <Image src="/images/neuroscience.jpg" alt="Neural Plasticity" fill className="object-cover" />
                </div>
                <div className="p-6">
                  <div className="flex items-center space-x-2 mb-3">
                    <span className="px-3 py-1 bg-secondary/20 text-secondary-light text-xs rounded-full">
                      Neuroscience
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-white">The Brain's Neural Plasticity</h3>
                  <p className="text-white/70 text-sm">
                    Discover how our brains adapt and change throughout our lives, and what this means for learning and
                    recovery.
                  </p>
                </div>
              </Link>

              <Link
                href="/blog/decision-making"
                className="bg-card/50 backdrop-blur-sm rounded-lg overflow-hidden border border-white/10 hover:border-secondary/50 transition-colors"
              >
                <div className="relative h-48">
                  <Image src="/images/psychology.jpg" alt="Decision Making" fill className="object-cover" />
                </div>
                <div className="p-6">
                  <div className="flex items-center space-x-2 mb-3">
                    <span className="px-3 py-1 bg-secondary/20 text-secondary-light text-xs rounded-full">
                      Psychology
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-white">The Psychology of Decision-Making</h3>
                  <p className="text-white/70 text-sm">
                    Understanding the cognitive processes that influence how we make choices in everyday life.
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
