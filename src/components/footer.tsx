import Link from 'next/link'
import { Wrench } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-[#2C3E50] text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <div className="h-8 w-8 rounded-lg bg-white/10 flex items-center justify-center">
                <Wrench className="h-4 w-4 text-white" />
              </div>
              <span className="text-lg font-bold">PlumbCalc</span>
            </div>
            <p className="text-sm text-white/60 leading-relaxed">
              Professional estimating software for UK plumbing and heating contractors.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-sm uppercase tracking-wide mb-3 text-white/80">Product</h3>
            <ul className="space-y-2 text-sm text-white/60">
              <li><Link href="/features" className="hover:text-white transition-colors">Features</Link></li>
              <li><Link href="/pricing" className="hover:text-white transition-colors">Pricing</Link></li>
              <li><Link href="/tutorials" className="hover:text-white transition-colors">Tutorials</Link></li>
              <li><Link href="https://app.plumbcalc.com" className="hover:text-white transition-colors">Sign In</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-sm uppercase tracking-wide mb-3 text-white/80">Company</h3>
            <ul className="space-y-2 text-sm text-white/60">
              <li><Link href="/about" className="hover:text-white transition-colors">About</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-sm uppercase tracking-wide mb-3 text-white/80">Legal</h3>
            <ul className="space-y-2 text-sm text-white/60">
              <li><Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-10 pt-6 text-center text-xs text-white/40">
          <p>&copy; {new Date().getFullYear()} PlumbCalc. All rights reserved. UK Trade Estimating Software.</p>
        </div>
      </div>
    </footer>
  )
}
