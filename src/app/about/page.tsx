import { Wrench, Table, Smartphone, Globe } from 'lucide-react'
import { CtaSection } from '@/components/cta-section'

const timeline = [
  { icon: Table, year: '2024', title: 'Excel Workbook', description: 'PlumbEstimate started as a spreadsheet — 95-item price list, VLOOKUP formulas, manual data entry. It worked, but it was slow and error-prone.' },
  { icon: Smartphone, year: '2025', title: 'iOS Prototype', description: 'We rebuilt the estimating engine in Swift for iPhone. The business logic was proven, but iOS-only meant most plumbers couldn\'t use it.' },
  { icon: Globe, year: '2026', title: 'Web App (Current)', description: 'PlumbCalc became a Next.js Progressive Web App — same parametric engine, now running on any device, online or offline. Gas certificates, heat loss, quotes, invoices, and job management all built in.' },
]

const values = [
  { title: 'Built for the trade', description: 'Every feature exists because a plumber needed it. We don\'t build generic tools and hope they fit — we start from the van, the boiler room, and the customer\'s kitchen.' },
  { title: 'UK-first', description: 'GBP pricing, 20% VAT, Gas Safe compliance, BS EN 12831 heat loss, UK merchant price lists. This isn\'t an American app with a currency swap.' },
  { title: 'Honest pricing', description: 'No per-user fees that punish growth. No hidden charges for gas certificates or heat loss. What you see on the pricing page is what you pay.' },
  { title: 'Offline by default', description: 'Plumbers work in basements, lofts, and rural properties. PlumbCalc works without internet because that\'s where the work happens.' },
]

export default function AboutPage() {
  return (
    <>
      <section className="py-16 bg-gradient-to-b from-white to-[#F8F9FA]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h1 className="text-4xl font-bold text-[#2C3E50] mb-4">From spreadsheet to the smartest estimating app in UK plumbing</h1>
          <p className="text-lg text-gray-500">PlumbCalc started because no existing tool could auto-calculate a bathroom estimate. So we built one.</p>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl font-bold text-[#2C3E50] text-center mb-12">Our journey</h2>
          <div className="space-y-8">
            {timeline.map((item, i) => (
              <div key={i} className="flex gap-6 items-start">
                <div className="shrink-0">
                  <div className="h-12 w-12 rounded-xl bg-[#2C3E50] flex items-center justify-center">
                    <item.icon className="h-6 w-6 text-white" />
                  </div>
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-1">
                    <span className="text-sm font-bold text-[#27AE60]">{item.year}</span>
                    <h3 className="text-lg font-bold text-[#2C3E50]">{item.title}</h3>
                  </div>
                  <p className="text-sm text-gray-600 leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-[#F8F9FA]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl font-bold text-[#2C3E50] text-center mb-10">What we believe</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((v, i) => (
              <div key={i} className="bg-white rounded-xl border border-gray-100 p-6">
                <h3 className="text-lg font-bold text-[#2C3E50] mb-2">{v.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{v.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech stack */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-2xl font-bold text-[#2C3E50] mb-4">Built with modern technology</h2>
          <p className="text-sm text-gray-500 mb-8">PlumbCalc is built with the same technology used by the world&apos;s leading web applications.</p>
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-gray-600">
            {['Next.js 15', 'React 19', 'TypeScript', 'Tailwind CSS', 'AES-256 Encryption', '749+ Automated Tests'].map(tech => (
              <span key={tech} className="bg-[#F8F9FA] px-4 py-2 rounded-lg border border-gray-100 font-medium">{tech}</span>
            ))}
          </div>
        </div>
      </section>

      <CtaSection headline="Join the UK plumbers using PlumbCalc" subheadline="Start your 14-day free trial today." />
    </>
  )
}
