'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Wrench, Menu, X } from 'lucide-react'

const navLinks = [
  { href: '/features', label: 'Features' },
  { href: '/pricing', label: 'Pricing' },
  { href: '/tutorials', label: 'Tutorials' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
]

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2.5">
            <div className="h-9 w-9 rounded-lg bg-[#2C3E50] flex items-center justify-center">
              <Wrench className="h-5 w-5 text-white" />
            </div>
            <span className="text-xl font-bold text-[#2C3E50]">PlumbCalc</span>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map(link => (
              <Link key={link.href} href={link.href} className="text-sm font-medium text-gray-600 hover:text-[#2C3E50] transition-colors">
                {link.label}
              </Link>
            ))}
            <Link href="https://app.plumbcalc.com" className="bg-[#27AE60] hover:bg-[#219A52] text-white px-5 py-2.5 rounded-lg text-sm font-semibold transition-colors">
              Start Free Trial
            </Link>
          </nav>

          <button className="md:hidden p-2" onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {mobileOpen && (
          <div className="md:hidden pb-4 space-y-2">
            {navLinks.map(link => (
              <Link key={link.href} href={link.href} onClick={() => setMobileOpen(false)} className="block px-3 py-2 text-sm font-medium text-gray-600 hover:bg-gray-50 rounded-lg">
                {link.label}
              </Link>
            ))}
            <Link href="https://app.plumbcalc.com" className="block text-center bg-[#27AE60] text-white px-5 py-2.5 rounded-lg text-sm font-semibold">
              Start Free Trial
            </Link>
          </div>
        )}
      </div>
    </header>
  )
}
