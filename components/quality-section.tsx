import Link from "next/link"

export function QualitySection() {
  return (
    <section className="py-20 lg:py-28 px-6 bg-[#F1EAE2]">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Column - Text Content */}
          <div className="max-w-lg">
            <h2 className="font-serif text-4xl lg:text-5xl text-[#333333] mb-6 leading-tight tracking-wide uppercase">
              Look Rare. Feel Precious.
            </h2>
            <p className="text-base lg:text-lg text-[#333333]/80 leading-relaxed mb-4">
              At Alogaps, we use only the highest quality products — from premium nail polishes and lash materials to
              professional-grade makeup and state-of-the-art camera equipment.
            </p>
            <p className="text-base lg:text-lg text-[#333333]/80 leading-relaxed mb-4">
              Hygiene is non-negotiable. All tools are sterilised to medical standards, and we maintain the pristine
              environment you deserve.
            </p>
            <p className="text-base lg:text-lg text-[#333333]/80 leading-relaxed mb-8">
              Your comfort. Your safety. Your rare moment — all protected.
            </p>
            <Link
              href="#book"
              className="inline-block px-8 py-3 bg-[#046C4E] text-white text-sm uppercase tracking-[0.15em] hover:bg-[#174F3F] transition-colors"
            >
              Book Your Experience
            </Link>
          </div>

          {/* Right Column - Image */}
          <div className="relative max-w-lg mx-auto">
            <img src="/luxury-beauty-studio-interior-modern-clean-elegant.jpg" alt="Alogaps Studio" className="w-full h-auto" />
          </div>
        </div>
      </div>
    </section>
  )
}
