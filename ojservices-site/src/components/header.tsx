'use client'

import { useState } from 'react'
import { Menu, X, Phone } from 'lucide-react'
import { site } from '@/lib/site-config'

const navLinks = [
  { href: '#services', label: 'Services' },
  { href: '#work', label: 'Our Work' },
  { href: '#why', label: 'Why Us' },
  { href: '#areas', label: 'Areas' },
  { href: '#contact', label: 'Contact' },
]

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-[#E8E2D9] shadow-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          <a href="#top" className="flex items-center gap-2.5">
            <div className="h-9 w-9 rounded-lg bg-[#14222B] flex items-center justify-center">
              <span className="text-sm font-extrabold tracking-tight text-white">OJ</span>
            </div>
            <span className="text-xl font-bold text-[#14222B]">{site.name}</span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map(link => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-gray-600 hover:text-[#14222B] transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href={site.phoneHref}
              className="hidden lg:inline-flex items-center gap-1.5 text-sm font-semibold text-[#14222B]"
            >
              <Phone className="h-4 w-4 text-[#E0701A]" /> {site.phone}
            </a>
            <a
              href="#contact"
              className="bg-[#E0701A] hover:bg-[#C45F12] text-white px-5 py-2.5 rounded-lg text-sm font-semibold transition-colors"
            >
              Get a quote
            </a>
          </nav>

          <button
            className="md:hidden p-2 text-[#14222B]"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {mobileOpen && (
          <div className="md:hidden pb-4 space-y-1">
            {navLinks.map(link => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="block px-3 py-2 text-sm font-medium text-gray-700 hover:bg-[#F7F4EF] rounded-lg"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setMobileOpen(false)}
              className="block text-center bg-[#E0701A] text-white px-5 py-2.5 rounded-lg text-sm font-semibold mt-2"
            >
              Get a free quote
            </a>
          </div>
        )}
      </div>
    </header>
  )
}
