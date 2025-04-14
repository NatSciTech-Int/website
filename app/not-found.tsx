"use client"

import Link from "next/link"
import Image from "next/image"
import { Home, ArrowLeft } from "lucide-react"

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0a101e] px-4">
      <div className="max-w-md w-full text-center">
        <div className="relative w-24 h-24 mx-auto mb-6">
          <Image src="/logo.png" alt="NatSciTech Logo" fill className="object-contain" />
        </div>

        <h1 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">404</h1>
        <h2 className="text-2xl font-semibold text-white mb-6">Page Not Found</h2>

        <p className="text-white/80 mb-8">The page you're looking for doesn't exist or has been moved.</p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-md bg-gradient-to-r from-primary to-secondary text-white px-6 py-3 text-base font-medium hover:shadow-lg hover:shadow-primary/20 transition-all"
          >
            <Home size={18} className="mr-2" />
            Back to Home
          </Link>

          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center justify-center rounded-md bg-white/10 backdrop-blur-sm border border-white/20 text-white px-6 py-3 text-base font-medium hover:bg-white/20 transition-colors"
          >
            <ArrowLeft size={18} className="mr-2" />
            Go Back
          </button>
        </div>
      </div>
    </div>
  )
}
