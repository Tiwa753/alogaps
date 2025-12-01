export function FounderSection() {
  return (
    <section className="py-20 lg:py-28 px-6 bg-[#F1EAE2]">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Column - Founder Image */}
          <div className="relative max-w-lg mx-auto">
            <img src="/elegant-nigerian-woman-entrepreneur-portrait-warm-.jpg" alt="Founder" className="w-full h-auto" />
            <div className="mt-6 text-center">
              <p className="font-serif italic text-2xl text-[#333333]">— The Founder</p>
            </div>
          </div>

          {/* Right Column - Text Content */}
          <div className="max-w-lg">
            <h2 className="font-serif text-4xl lg:text-5xl text-[#333333] mb-6 leading-tight tracking-wide uppercase">
              You're In Safe Hands
            </h2>
            <p className="text-base lg:text-lg text-[#333333]/80 leading-relaxed mb-4">
              Alogaps was born from a vision: to create a sanctuary where Nigerian women can discover and celebrate the
              rare gem within them.
            </p>
            <p className="text-base lg:text-lg text-[#333333]/80 leading-relaxed mb-4">
              From nails that speak to your soul, lashes that frame your story, makeup that reveals your radiance, to
              content that captures your essence — every service is crafted with intention.
            </p>
            <p className="text-base lg:text-lg text-[#333333]/80 leading-relaxed">
              Because at Alogaps, you are not just styled. You are honoured.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
