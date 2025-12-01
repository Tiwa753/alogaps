export function ThreeColumnGrid() {
  const sections = [
    {
      title: "Nails & Lashes",
      subtitle: "Pearl Polish · Diamond Flutter",
      image: "/black-woman-beautiful-nails-and-lashes-luxury-salo.jpg",
      buttonText: "Explore",
      href: "#nails",
    },
    {
      title: "Makeup Artistry",
      subtitle: "Ruby Radiance · Moonstone Glow",
      image: "/beautiful-black-woman-professional-makeup-bridal-g.jpg",
      buttonText: "Explore",
      href: "#makeup",
    },
    {
      title: "Content Creation",
      subtitle: "Videography · Photography",
      image: "/professional-content-creation-studio-camera-setup-.jpg",
      buttonText: "Explore",
      href: "#content",
    },
  ]

  return (
    <section className="grid md:grid-cols-3">
      {sections.map((section, index) => (
        <a key={index} href={section.href} className="relative group aspect-[3/4] overflow-hidden cursor-pointer">
          <img
            src={section.image || "/placeholder.svg"}
            alt={section.title}
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#333333]/80 via-[#333333]/20 to-transparent" />

          <div className="absolute bottom-0 left-0 right-0 p-8 text-center">
            <h3 className="font-serif text-2xl lg:text-3xl text-white mb-2 tracking-wide uppercase">{section.title}</h3>
            <p className="text-sm text-[#D4AF37] mb-6 italic">{section.subtitle}</p>
            <button className="px-8 py-2.5 bg-[#D4AF37] text-[#333333] text-xs uppercase tracking-[0.15em] hover:bg-[#c5a028] transition-colors">
              {section.buttonText}
            </button>
          </div>
        </a>
      ))}
    </section>
  )
}
