import Link from "next/link"

export function ExpertsSection() {
  return (
    <section className="py-20 lg:py-28 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Column - Text Content */}
          <div className="max-w-lg">
            <h2 className="font-serif text-4xl lg:text-5xl text-[#333333] mb-6 leading-tight tracking-wide">
              Crafted By Experts
            </h2>
            <p className="text-base lg:text-lg text-[#333333]/80 leading-relaxed mb-4">
              Our artists are trained in <span className="italic">The Alogaps Way</span> — a signature approach to
              beauty that honours your unique essence.
            </p>
            <p className="text-base lg:text-lg text-[#333333]/80 leading-relaxed mb-4">
              From flawless nails and lush lashes to stunning makeup and captivating content — we don't just style you,
              we help you own who you are.
            </p>
            <p className="text-base lg:text-lg text-[#333333]/80 leading-relaxed mb-8">Which gem are you today?</p>
            <Link
              href="#book"
              className="inline-block px-8 py-3 bg-[#046C4E] text-white text-sm uppercase tracking-[0.15em] hover:bg-[#174F3F] transition-colors"
            >
              Book Your Session
            </Link>
          </div>

          {/* Right Column - Image with Circular Badge */}
          <div className="relative">
            <div className="relative aspect-square max-w-md mx-auto">
              <img src="/elegant-black-woman-hands-with-luxury-nail-art-gol.jpg" alt="Expert nail artistry" className="w-full h-full object-cover" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-36 h-36 rounded-full bg-[#FAF8F5] border-2 border-[#D4AF37] flex flex-col items-center justify-center shadow-lg">
                <div className="text-center px-4">
                  <div className="text-xs uppercase tracking-wider text-[#333333] mb-1">Precious</div>
                  <div className="text-xs uppercase tracking-wider text-[#333333]">Finish</div>
                  <div className="text-sm font-serif text-[#D4AF37] mt-2">Guaranteed</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
