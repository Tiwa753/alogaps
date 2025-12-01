"use client"

import Link from "next/link"
import { useState } from "react"
import { Instagram, Phone, Mail, MapPin } from "lucide-react"

export function Footer() {
  const [email, setEmail] = useState("")
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")

  return (
    <footer className="bg-[#FAF8F5] border-t border-[#C8B8A6]/20">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Logo */}
          <div>
            <Link href="/" className="inline-block mb-6">
              <span className="font-serif text-2xl tracking-[0.3em] text-[#333333]">ALOGAPS</span>
            </Link>
            <p className="font-serif text-sm italic text-[#333333]/60 mb-1">Pour le rare en vous</p>
            <p className="text-xs text-[#333333]/60 mb-6">For the rare in you</p>

            <div className="flex items-start gap-2 text-sm text-[#333333]/60">
              <MapPin size={16} className="mt-0.5 shrink-0" />
              <span>Lagos, Nigeria</span>
            </div>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-[0.15em] text-[#333333] mb-6 font-medium">Our Services</h4>
            <ul className="space-y-3">
              {["Nail Artistry", "Lash Extensions", "Makeup", "Videography", "Content Creation"].map((item) => (
                <li key={item}>
                  <Link
                    href={`#${item.toLowerCase().replace(/ /g, "-")}`}
                    className="text-sm text-[#333333]/60 hover:text-[#D4AF37] transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-[0.15em] text-[#333333] mb-6 font-medium">Quick Links</h4>
            <ul className="space-y-3">
              {["About Us", "Our Work", "Book Now", "Contact", "FAQs"].map((item) => (
                <li key={item}>
                  <Link
                    href={`#${item.toLowerCase().replace(/ /g, "-")}`}
                    className="text-sm text-[#333333]/60 hover:text-[#D4AF37] transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Stay In Touch - Newsletter */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.15em] text-[#333333] mb-6 font-medium">Stay In Touch</h4>
            <div className="space-y-3">
              <div className="grid grid-cols-2 gap-2">
                <input
                  type="text"
                  placeholder="First Name"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  className="w-full px-3 py-2 text-sm bg-white border border-[#C8B8A6]/30 focus:border-[#D4AF37] focus:outline-none text-[#333333] placeholder:text-[#333333]/40"
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  className="w-full px-3 py-2 text-sm bg-white border border-[#C8B8A6]/30 focus:border-[#D4AF37] focus:outline-none text-[#333333] placeholder:text-[#333333]/40"
                />
              </div>
              <input
                type="email"
                placeholder="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-3 py-2 text-sm bg-white border border-[#C8B8A6]/30 focus:border-[#D4AF37] focus:outline-none text-[#333333] placeholder:text-[#333333]/40"
              />
              <button className="w-full px-4 py-2 bg-[#046C4E] text-white text-xs uppercase tracking-[0.15em] hover:bg-[#174F3F] transition-colors">
                Subscribe
              </button>
            </div>

            <div className="flex items-center gap-4 mt-6">
              <a
                href="https://instagram.com/alogaps"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[#333333] flex items-center justify-center text-white hover:bg-[#D4AF37] hover:text-[#333333] transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
              <a
                href="https://wa.me/234"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[#333333] flex items-center justify-center text-white hover:bg-[#D4AF37] hover:text-[#333333] transition-colors"
                aria-label="WhatsApp"
              >
                <Phone size={18} />
              </a>
              <a
                href="mailto:hello@alogaps.com"
                className="w-10 h-10 rounded-full bg-[#333333] flex items-center justify-center text-white hover:bg-[#D4AF37] hover:text-[#333333] transition-colors"
                aria-label="Email"
              >
                <Mail size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-[#C8B8A6]/20 pt-8 text-center">
          <p className="text-xs text-[#333333]/40">© 2025 Alogaps. All rights reserved. Lagos, Nigeria.</p>
        </div>
      </div>
    </footer>
  )
}
