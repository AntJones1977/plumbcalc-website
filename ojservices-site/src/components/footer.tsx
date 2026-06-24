import { Phone, Mail, MapPin, ShieldCheck } from 'lucide-react'
import { site } from '@/lib/site-config'

const services = ['General plumbing', 'Bathrooms & renovations', 'Landscaping & build-outs', 'Emergency callouts']
const navLinks = [
  { href: '#services', label: 'Services' },
  { href: '#work', label: 'Our Work' },
  { href: '#why', label: 'Why Us' },
  { href: '#areas', label: 'Areas Covered' },
  { href: '#contact', label: 'Get a Quote' },
]

export function Footer() {
  return (
    <footer className="bg-[#14222B] text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-14">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="md:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="h-9 w-9 rounded-lg bg-[#E0701A] flex items-center justify-center">
                <span className="text-sm font-extrabold tracking-tight text-white">OJ</span>
              </div>
              <span className="text-lg font-bold">{site.name}</span>
            </div>
            <p className="text-sm text-white/60 leading-relaxed">{site.tagline}.</p>
            <p className="mt-4 inline-flex items-center gap-1.5 text-xs text-white/50">
              <ShieldCheck className="h-4 w-4 text-[#E0701A]" /> Fully insured &amp; qualified
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-sm uppercase tracking-wide mb-3 text-white/80">Services</h3>
            <ul className="space-y-2 text-sm text-white/60">
              {services.map(s => (
                <li key={s}>{s}</li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-sm uppercase tracking-wide mb-3 text-white/80">Explore</h3>
            <ul className="space-y-2 text-sm text-white/60">
              {navLinks.map(l => (
                <li key={l.href}>
                  <a href={l.href} className="hover:text-white transition-colors">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-sm uppercase tracking-wide mb-3 text-white/80">Get in touch</h3>
            <ul className="space-y-2.5 text-sm text-white/60">
              <li>
                <a href={site.phoneHref} className="inline-flex items-center gap-2 hover:text-white transition-colors">
                  <Phone className="h-4 w-4 text-[#E0701A]" /> {site.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${site.email}`} className="inline-flex items-center gap-2 hover:text-white transition-colors">
                  <Mail className="h-4 w-4 text-[#E0701A]" /> {site.email}
                </a>
              </li>
              <li className="inline-flex items-center gap-2">
                <MapPin className="h-4 w-4 text-[#E0701A]" /> {site.area}
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-10 pt-6 text-center text-xs text-white/40">
          <p>&copy; {new Date().getFullYear()} {site.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
