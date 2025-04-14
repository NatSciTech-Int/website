import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy for the Natural Science & Technology Organization website and programs.",
  openGraph: {
    title: "Privacy Policy | NatSciTech",
    description: "Privacy Policy for the Natural Science & Technology Organization website and programs.",
  },
}

export default function Privacy() {
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
            <h1 className="text-3xl md:text-4xl font-bold mb-6 gradient-text">Privacy Policy</h1>
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
                The Natural Science & Technology Organization ("NatSciTech," "we," "us," or "our") is committed to
                protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your
                information when you visit our website or participate in our programs.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4 text-white">Information We Collect</h2>
              <p className="text-white/80">
                We may collect personal information that you voluntarily provide to us when you participate in our
                programs, follow us on social media, or contact us. This information may include:
              </p>
              <ul className="list-disc pl-6 text-white/80 space-y-2 mt-4">
                <li>Name</li>
                <li>Email address</li>
                <li>School information</li>
                <li>Location (country/city)</li>
                <li>Social media handles</li>
                <li>Content you submit for our programs</li>
              </ul>

              <h2 className="text-2xl font-bold mt-8 mb-4 text-white">How We Use Your Information</h2>
              <p className="text-white/80">We may use the information we collect for various purposes, including:</p>
              <ul className="list-disc pl-6 text-white/80 space-y-2 mt-4">
                <li>To provide and maintain our services</li>
                <li>To notify you about changes to our programs</li>
                <li>To allow you to participate in interactive features of our programs</li>
                <li>To provide customer support</li>
                <li>To gather analysis or valuable information so that we can improve our services</li>
                <li>To monitor the usage of our services</li>
                <li>To detect, prevent and address technical issues</li>
              </ul>

              <h2 className="text-2xl font-bold mt-8 mb-4 text-white">Data Security</h2>
              <p className="text-white/80">
                The security of your data is important to us, but remember that no method of transmission over the
                Internet or method of electronic storage is 100% secure. While we strive to use commercially acceptable
                means to protect your personal information, we cannot guarantee its absolute security.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4 text-white">Third-Party Services</h2>
              <p className="text-white/80">
                We may use third-party services such as Google Forms and social media platforms to collect and process
                information. These third-party services have their own privacy policies, and we recommend that you
                review their policies as well.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4 text-white">Your Rights</h2>
              <p className="text-white/80">
                Depending on your location, you may have certain rights regarding your personal information, such as:
              </p>
              <ul className="list-disc pl-6 text-white/80 space-y-2 mt-4">
                <li>The right to access the personal information we have about you</li>
                <li>The right to request correction of inaccurate information</li>
                <li>The right to request deletion of your personal information</li>
                <li>The right to object to processing of your personal information</li>
                <li>The right to data portability</li>
              </ul>

              <h2 className="text-2xl font-bold mt-8 mb-4 text-white">Changes to This Privacy Policy</h2>
              <p className="text-white/80">
                We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new
                Privacy Policy on this page and updating the "Last updated" date at the top of this Privacy Policy.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4 text-white">Contact Us</h2>
              <p className="text-white/80">
                If you have any questions about this Privacy Policy, please contact us at contact@natscitech.org.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
