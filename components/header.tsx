"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#FAF8F5]/95 backdrop-blur-sm border-b border-[#C8B8A6]/10">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <nav className="flex items-center justify-between">
          <div className="hidden lg:flex items-center gap-8 flex-1">
            {["Nails", "Lashes", "Makeup", "Content"].map((item) => (
              <Link
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-xs uppercase tracking-[0.15em] text-[#333333] hover:text-[#D4AF37] transition-colors"
              >
                {item}
              </Link>
            ))}
          </div>

          <Link href="/" className="flex flex-col items-center px-8">
            <span className="font-serif text-2xl lg:text-3xl tracking-[0.3em] text-[#333333]">ALOGAPS</span>
          </Link>

          <div className="hidden lg:flex items-center gap-8 flex-1 justify-end">
            {["About", "Contact"].map((item) => (
              <Link
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-xs uppercase tracking-[0.15em] text-[#333333] hover:text-[#D4AF37] transition-colors"
              >
                {item}
              </Link>
            ))}
            <Link
              href="#book"
              className="px-5 py-2 bg-[#D4AF37] text-[#333333] text-xs uppercase tracking-[0.15em] hover:bg-[#c5a028] transition-colors"
            >
              Book
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button className="lg:hidden text-[#333333]" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {isOpen && (
          <div className="lg:hidden pt-6 pb-4 border-t border-[#C8B8A6]/20 mt-4">
            <div className="flex flex-col gap-4">
              {["Nails", "Lashes", "Makeup", "Content", "About", "Contact"].map((item) => (
                <Link
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-xs uppercase tracking-[0.15em] text-[#333333] hover:text-[#D4AF37] transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {item}
                </Link>
              ))}
              <Link
                href="#book"
                className="px-5 py-2.5 bg-[#D4AF37] text-[#333333] text-xs uppercase tracking-[0.15em] text-center hover:bg-[#c5a028] transition-colors mt-2"
                onClick={() => setIsOpen(false)}
              >
                Book Now
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
