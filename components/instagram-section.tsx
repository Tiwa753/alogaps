export function InstagramSection() {
  const instagramImages = [
    { src: "/luxury-nail-art-gold-accents-african-woman-hands.jpg", alt: "Luxury nail art" },
    { src: "/beautiful-lash-extensions-on-african-woman.jpg", alt: "Lash extensions" },
    { src: "/bridal-makeup-african-bride-glowing-skin.jpg", alt: "Bridal makeup" },
    { src: "/professional-photoshoot-setup-studio-lighting.jpg", alt: "Content creation" },
    { src: "/elegant-nail-design-emerald-green-gold.jpg", alt: "Emerald nail design" },
    { src: "/beauty-flatlay-makeup-products-luxury-gold.jpg", alt: "Beauty flatlay" },
  ]

  return (
    <section className="py-20 px-6 bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-serif text-3xl lg:text-4xl text-center text-[#333333] mb-4 tracking-wide uppercase">
          Styled By Us, Celebrated By You
        </h2>
        <p className="text-center text-sm tracking-[0.2em] text-[#333333]/60 mb-12">@ALOGAPS</p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {instagramImages.map((image, index) => (
            <a
              key={index}
              href="https://instagram.com/alogaps"
              target="_blank"
              rel="noopener noreferrer"
              className="aspect-square overflow-hidden group cursor-pointer"
            >
              <img
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
