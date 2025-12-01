export function AsSeenInSection() {
  const publications = ["BELLANAIJA", "GENEVIEVE", "THIS DAY STYLE", "GUARDIAN LIFE", "PULSE NG", "ACCELERATE TV"]

  return (
    <section className="py-16 px-6 bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto">
        <h3 className="text-center text-sm uppercase tracking-[0.2em] text-[#333333]/60 mb-8">Featured In</h3>
        <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-12">
          {publications.map((pub, index) => (
            <div key={index} className="text-[#333333]/40 font-serif text-sm lg:text-base tracking-wider uppercase">
              {pub}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
