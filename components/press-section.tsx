"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

const reviews = [
  {
    quote: "Alogaps gave me the most stunning bridal makeup. My photos are everything!",
    author: "Adaeze O.",
    service: "Bridal Glam",
  },
  {
    quote: "Finally found a nail artist who understands luxury. My Emerald Glow set gets compliments everywhere.",
    author: "Chisom N.",
    service: "Nail Art",
  },
  {
    quote: "The content they created for my brand launch was pure magic. Worth every naira.",
    author: "Funke A.",
    service: "Content Creation",
  },
  {
    quote: "My lashes look so natural yet so glamorous. The Diamond Flutter is my signature now.",
    author: "Blessing E.",
    service: "Lash Extensions",
  },
]

export function PressSection() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextReview = () => {
    setCurrentIndex((prev) => (prev + 1) % reviews.length)
  }

  const prevReview = () => {
    setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length)
  }

  return (
    <section className="py-20 lg:py-28 px-6 bg-[#FAF8F5]">
      <div className="max-w-5xl mx-auto">
        <h2 className="font-serif text-3xl lg:text-4xl text-center text-[#333333] mb-16 tracking-wide uppercase">
          What Our Gems Say
        </h2>

        <div className="relative">
          {/* Review Content */}
          <div className="text-center px-12 lg:px-20 min-h-[200px] flex flex-col items-center justify-center">
            <p className="font-serif text-xl lg:text-2xl text-[#333333] mb-6 italic leading-relaxed max-w-3xl">
              "{reviews[currentIndex].quote}"
            </p>
            <p className="text-sm uppercase tracking-[0.2em] text-[#D4AF37] mb-1">{reviews[currentIndex].author}</p>
            <p className="text-xs uppercase tracking-[0.15em] text-[#333333]/50">{reviews[currentIndex].service}</p>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevReview}
            className="absolute left-0 top-1/2 -translate-y-1/2 p-2 hover:text-[#D4AF37] transition-colors text-[#333333]"
            aria-label="Previous review"
          >
            <ChevronLeft size={32} />
          </button>
          <button
            onClick={nextReview}
            className="absolute right-0 top-1/2 -translate-y-1/2 p-2 hover:text-[#D4AF37] transition-colors text-[#333333]"
            aria-label="Next review"
          >
            <ChevronRight size={32} />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {reviews.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentIndex ? "bg-[#D4AF37] w-8" : "bg-[#C8B8A6]"
                }`}
                aria-label={`Go to review ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
