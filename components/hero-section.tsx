"use client"

import { useState, useEffect } from "react"
import Link from "next/link"

const slides = [
  {
    image: "/luxury-nail-set-press-on-nails-gold-packaging-eleg.jpg",
    badge: "NEW",
    badgeText: "Press-On Sets",
    headline: "Pearl Polish Collection",
    subtitle: "Luxury press-on nails, handcrafted with precision",
    price: "₦25,000",
    cta: "Shop Now",
    ctaLink: "#shop",
  },
  {
    image: "/african-woman-gorgeous-lash-extensions-dramatic-ey.jpg",
    badge: "SALE",
    badgeText: "20% Off",
    headline: "Diamond Flutter Lashes",
    subtitle: "Volume lash extensions that last 3-4 weeks",
    price: "₦45,000",
    originalPrice: "₦55,000",
    cta: "Book Lashes",
    ctaLink: "#book",
  },
  {
    image: "/bridal-makeup-african-bride-glam-glowing-skin-prof.jpg",
    badge: "BRIDAL",
    badgeText: "Package",
    headline: "Moonstone Bridal Glam",
    subtitle: "Complete bridal makeup, lashes & nails package",
    price: "₦150,000",
    cta: "Enquire Now",
    ctaLink: "#contact",
  },
  {
    image: "/professional-photoshoot-content-creation-studio-li.jpg",
    badge: "CONTENT",
    badgeText: "Creation",
    headline: "Capture Your Beauty",
    subtitle: "Professional videography & content for your brand",
    price: "From ₦80,000",
    cta: "Learn More",
    ctaLink: "#services",
  },
  {
    image: "/emerald-green-gold-nail-art-luxury-manicure-africa.jpg",
    badge: "HOT",
    badgeText: "This Week",
    headline: "Emerald Glow Mani",
    subtitle: "Signature gel manicure with gem accents",
    price: "₦18,000",
    cta: "Book Nails",
    ctaLink: "#book",
  },
]

export function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  const slide = slides[currentSlide]

  return (
    <section className="relative h-[600px] lg:h-[700px] flex items-center justify-center pt-20 overflow-hidden">
      {/* Background slides */}
      {slides.map((s, index) => (
        <div
          key={index}
          className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
          style={{
            backgroundImage: `url('${s.image}')`,
          }}
        />
      ))}
      <div className="absolute inset-0 bg-[#333333]/50" />

      {/* Circular badge */}
      <div className="absolute top-28 right-6 lg:right-12 w-24 h-24 lg:w-32 lg:h-32 rounded-full bg-[#FAF8F5] border-2 border-[#D4AF37] flex flex-col items-center justify-center shadow-lg z-20">
        <div className="text-center">
          <div className="text-[10px] lg:text-xs uppercase tracking-wider text-[#046C4E] font-semibold">
            {slide.badge}
          </div>
          <div className="text-[10px] lg:text-xs uppercase tracking-wider text-[#333333]">{slide.badgeText}</div>
          <div className="text-lg lg:text-xl font-serif text-[#D4AF37] mt-1">{slide.price}</div>
          {slide.originalPrice && <div className="text-[10px] text-[#C8B8A6] line-through">{slide.originalPrice}</div>}
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <p className="font-serif text-lg lg:text-xl text-[#D4AF37] mb-4 italic">Pour le rare en vous</p>
        <h1
          key={currentSlide}
          className="font-serif text-4xl md:text-5xl lg:text-6xl tracking-wider text-white mb-4 leading-tight text-balance animate-fade-in"
        >
          {slide.headline}
        </h1>
        <p className="text-lg lg:text-xl text-white/90 mb-10 max-w-2xl mx-auto">{slide.subtitle}</p>

        <Link
          href={slide.ctaLink}
          className="inline-block px-10 py-3 bg-[#046C4E] text-white text-sm uppercase tracking-[0.2em] hover:bg-[#174F3F] transition-colors"
        >
          {slide.cta}
        </Link>
      </div>

      {/* Slide indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentSlide ? "bg-[#D4AF37] w-8" : "bg-white/50 hover:bg-white/80"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Arrow navigation */}
      <button
        onClick={() => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)}
        className="absolute left-4 lg:left-8 top-1/2 -translate-y-1/2 z-20 w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
        aria-label="Previous slide"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        onClick={() => setCurrentSlide((prev) => (prev + 1) % slides.length)}
        className="absolute right-4 lg:right-8 top-1/2 -translate-y-1/2 z-20 w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
        aria-label="Next slide"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </section>
  )
}
