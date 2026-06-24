import type { LucideIcon } from 'lucide-react'
import { ShieldCheck, BadgeCheck, Sparkles, Wallet, Clock, MapPin } from 'lucide-react'

interface Reason {
  icon: LucideIcon
  title: string
  text: string
}

const reasons: Reason[] = [
  { icon: ShieldCheck, title: 'Fully insured & qualified', text: 'Work carried out to a high standard, fully insured for your peace of mind.' },
  { icon: Wallet, title: 'Free, honest quotes', text: 'Clear, no-obligation pricing up front. No hidden costs, no nasty surprises.' },
  { icon: Sparkles, title: 'Clean & tidy', text: 'We respect your home, protect your floors and clear up properly when we finish.' },
  { icon: BadgeCheck, title: 'One team, many trades', text: 'Plumbing, bathrooms, landscaping and building — all handled under one roof.' },
  { icon: Clock, title: 'Reliable & on time', text: 'We turn up when we say we will and keep you updated throughout the job.' },
  { icon: MapPin, title: 'Local & trusted', text: 'A familiar local name, building a reputation one happy customer at a time.' },
]

export function WhyUs() {
  return (
    <section id="why" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <p className="text-sm font-semibold uppercase tracking-wider text-[#E0701A] mb-2">Why choose us</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#14222B] mb-3">Work you can rely on</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map(r => (
            <div key={r.title} className="flex gap-4 p-6 rounded-2xl border border-[#E8E2D9] hover:border-[#E0701A]/40 transition-colors">
              <div className="h-11 w-11 shrink-0 rounded-xl bg-[#E0701A]/10 flex items-center justify-center">
                <r.icon className="h-5 w-5 text-[#E0701A]" />
              </div>
              <div>
                <h3 className="font-bold text-[#14222B] mb-1">{r.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{r.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
