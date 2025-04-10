import type React from "react"
import { Montserrat } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

const montserrat = Montserrat({ subsets: ["latin"], variable: "--font-montserrat" })

export const metadata = {
  title: {
    default: "Natural Science & Technology Organization",
    template: "%s | NatSciTech",
  },
  description: "International high school club promoting science and technology education for students worldwide",
  keywords: ["science", "technology", "education", "high school", "research", "STEM", "international", "students"],
  authors: [{ name: "NatSciTech" }],
  creator: "NatSciTech",
  publisher: "NatSciTech",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://natscitech.vercel.app",
    siteName: "Natural Science & Technology Organization",
    title: "Natural Science & Technology Organization",
    description: "International high school club promoting science and technology education",
    images: [
      {
        url: "https://natscitech.vercel.app/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "NatSciTech",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Natural Science & Technology Organization",
    description: "International high school club promoting science and technology education",
    images: ["https://natscitech.vercel.app/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
    generator: 'v0.dev'
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
      </body>
    </html>
  )
}



import './globals.css'