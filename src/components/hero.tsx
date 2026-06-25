import { ArrowRight, Phone, ShieldCheck } from 'lucide-react'
import { site } from '@/lib/site-config'

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-gradient-to-br from-[#14222B] via-[#1b3340] to-[#243C49]"
    >
      {/* subtle dotted texture */}
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, #fff 1px, transparent 0)',
          backgroundSize: '28px 28px',
        }}
      />
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 py-20 lg:py-28">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 bg-[#E0701A]/15 text-[#F2A461] text-xs font-semibold px-3 py-1.5 rounded-full mb-6 ring-1 ring-[#E0701A]/30">
            <ShieldCheck className="h-3.5 w-3.5" />
            {site.gasSafeRegistered ? 'Gas Safe registered engineer' : 'Trusted local engineer'}
            {site.gasSafeRegistered && site.gasSafeNumber ? ` · No. ${site.gasSafeNumber}` : ''}
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            Gas, heating &amp; plumbing,{' '}
            <span className="text-[#E0701A]">done properly</span>
          </h1>

          <p className="text-lg text-white/70 mb-8 leading-relaxed">
            New boiler installations, servicing &amp; repairs, central heating, gas safety
            checks and emergency no-heat callouts — plus trusted local plumbing. {site.name}{' '}
            keeps your home warm, safe and running across {site.area}. Honest prices, no surprises.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 bg-[#E0701A] hover:bg-[#C45F12] text-white px-7 py-4 rounded-lg text-lg font-semibold transition-colors shadow-lg shadow-black/20"
            >
              Get a free quote <ArrowRight className="h-5 w-5" />
            </a>
            <a
              href={site.phoneHref}
              className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/15 text-white px-7 py-4 rounded-lg text-lg font-medium transition-colors ring-1 ring-white/20"
            >
              <Phone className="h-5 w-5" /> {site.phone}
            </a>
          </div>

          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 mt-8 text-sm text-white/60">
            {site.gasSafeRegistered && (
              <span className="inline-flex items-center gap-1.5">
                <ShieldCheck className="h-4 w-4 text-[#E0701A]" /> Gas Safe registered
              </span>
            )}
            <span className="inline-flex items-center gap-1.5">
              <ShieldCheck className="h-4 w-4 text-[#E0701A]" /> Fully insured
            </span>
            <span className="inline-flex items-center gap-1.5">
              <ShieldCheck className="h-4 w-4 text-[#E0701A]" /> Free, no-obligation quotes
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
