import Link from 'next/link'

interface CtaSectionProps {
  headline?: string
  subheadline?: string
}

export function CtaSection({ headline = 'Ready to estimate smarter?', subheadline = 'Join hundreds of UK plumbers who save hours every week with PlumbCalc.' }: CtaSectionProps) {
  return (
    <section className="bg-[#2C3E50] py-16">
      <div className="max-w-3xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-white mb-3">{headline}</h2>
        <p className="text-white/70 mb-8">{subheadline}</p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="https://app.plumbcalc.com" className="bg-[#27AE60] hover:bg-[#219A52] text-white px-8 py-3.5 rounded-lg font-semibold transition-colors">
            Start Your 14-Day Free Trial
          </Link>
          <Link href="/pricing" className="text-white/80 hover:text-white border border-white/30 px-8 py-3.5 rounded-lg font-medium transition-colors">
            View Pricing
          </Link>
        </div>
        <p className="text-white/40 text-xs mt-4">No credit card required. Cancel anytime.</p>
      </div>
    </section>
  )
}
