import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms of Service for the Natural Science & Technology Organization website and programs.",
  openGraph: {
    title: "Terms of Service | NatSciTech",
    description: "Terms of Service for the Natural Science & Technology Organization website and programs.",
  },
}

export default function Terms() {
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
            <Link href="/" className="inline-flex items-center text-white/70 hover:text-white mb-6">
              <ArrowLeft size={16} className="mr-2" />
              Back to Home
            </Link>
            <h1 className="text-3xl md:text-4xl font-bold mb-6 gradient-text">Terms of Service</h1>
            <p className="text-white/80">Last updated: April 6, 2025</p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-8 relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="prose prose-invert prose-lg">
              <p className="text-white/80">
                Please read these Terms of Service ("Terms") carefully before using the Natural Science & Technology
                Organization website and participating in our programs.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4 text-white">Agreement to Terms</h2>
              <p className="text-white/80">
                By accessing our website and participating in our programs, you agree to be bound by these Terms. If you
                disagree with any part of the terms, then you may not access our services.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4 text-white">Intellectual Property</h2>
              <p className="text-white/80">
                The website and its original content, features, and functionality are owned by the Natural Science &
                Technology Organization and are protected by international copyright, trademark, patent, trade secret,
                and other intellectual property or proprietary rights laws.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4 text-white">User Content</h2>
              <p className="text-white/80">
                When you submit content for our programs, such as blog posts or research articles, you grant us a
                non-exclusive, worldwide, royalty-free license to use, reproduce, modify, adapt, publish, translate, and
                distribute your content in any existing or future media.
              </p>
              <p className="text-white/80 mt-4">You represent and warrant that:</p>
              <ul className="list-disc pl-6 text-white/80 space-y-2 mt-4">
                <li>
                  The content is yours or you have the right to use it and grant us the rights and license as provided
                  in these Terms.
                </li>
                <li>
                  The content does not violate the privacy rights, publicity rights, copyrights, contract rights, or any
                  other rights of any person or entity.
                </li>
                <li>The content does not contain material that is false, intentionally misleading, or defamatory.</li>
              </ul>

              <h2 className="text-2xl font-bold mt-8 mb-4 text-white">Program Participation</h2>
              <p className="text-white/80">
                Participation in our programs is subject to eligibility requirements as specified for each program. We
                reserve the right to modify, suspend, or discontinue any of our programs at any time without notice.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4 text-white">Limitation of Liability</h2>
              <p className="text-white/80">
                In no event shall the Natural Science & Technology Organization, nor its directors, employees, partners,
                agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential, or
                punitive damages, including without limitation, loss of profits, data, use, goodwill, or other
                intangible losses, resulting from:
              </p>
              <ol className="list-decimal pl-6 text-white/80 space-y-2 mt-4">
                <li>Your use or inability to use our services</li>
                <li>Any unauthorized access to or use of our servers and/or any personal information stored therein</li>
                <li>Any interruption or cessation of transmission to or from our services</li>
                <li>
                  Any bugs, viruses, trojan horses, or the like, which may be transmitted to or through our services
                </li>
                <li>
                  Any errors or omissions in any content or for any loss or damage incurred as a result of the use of
                  any content posted, emailed, transmitted, or otherwise made available through our services
                </li>
              </ol>

              <h2 className="text-2xl font-bold mt-8 mb-4 text-white">Governing Law</h2>
              <p className="text-white/80">
                These Terms shall be governed and construed in accordance with the laws applicable to international
                organizations, without regard to its conflict of law provisions.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4 text-white">Changes to Terms</h2>
              <p className="text-white/80">
                We reserve the right to modify or replace these Terms at any time. If a revision is material, we will
                provide at least 30 days' notice prior to any new terms taking effect. What constitutes a material
                change will be determined at our sole discretion.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4 text-white">Contact Us</h2>
              <p className="text-white/80">
                If you have any questions about these Terms, please contact us at contact@natscitech.org.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

