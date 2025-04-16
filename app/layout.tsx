import type React from "react"
import { Montserrat } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { JsonLd } from "@/components/json-ld"

const montserrat = Montserrat({ subsets: ["latin"], variable: "--font-montserrat" })

export const metadata = {
  title: {
    default: "Liberation Science",
    template: "%s | LibSci",
  },
  description:
    "International high school organization promoting science and technology education for students worldwide",
  keywords: [
    "science",
    "technology",
    "education",
    "high school",
    "research",
    "STEM",
    "international",
    "students",
    "Joshua Fung",
    "Adil Mukhi",
    "Liberation Science",
    "LibSci",
  ],
  authors: [
    { name: "Joshua Fung", url: "https://libsci.tech/members" },
    { name: "Adil Mukhi", url: "https://libsci.tech/members" },
  ],
  creator: "Liberation Science",
  publisher: "Liberation Science",
  metadataBase: new URL("https://libsci.tech"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://libsci.tech",
    siteName: "Liberation Science",
    title: "Liberation Science",
    description: "International high school organization promoting science and technology education",
    images: [
      {
        url: "https://libsci.tech/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "LibSci",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Liberation Science",
    description: "International high school organization promoting science and technology education",
    images: ["https://libsci.tech/og-image.jpg"],
    creator: "@libsci",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "verification_token",
  },
  generator: "Next.js",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${montserrat.variable} font-sans`}>
        <div className="flex min-h-screen flex-col bg-midnight">
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
        <JsonLd
          data={{
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Liberation Science",
            url: "https://libsci.tech",
            logo: "https://libsci.tech/logo.png",
            sameAs: ["https://www.instagram.com/libsci/"],
            founder: [
              {
                "@type": "Person",
                name: "Joshua Fung",
                jobTitle: "President",
                url: "https://libsci.tech/members",
              },
              {
                "@type": "Person",
                name: "Adil Mukhi",
                jobTitle: "Director of Technology",
                url: "https://libsci.tech/members",
              },
            ],
            description:
              "International high school organization promoting science and technology education for students worldwide",
          }}
        />
      </body>
    </html>
  )
}

import "./globals.css"
