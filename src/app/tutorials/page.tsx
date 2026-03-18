import Link from 'next/link'
import { Calculator, List, ShieldCheck } from 'lucide-react'
import { TutorialCard } from 'tutorial-components'
import { tutorials } from '@/lib/tutorials-data'
import { CtaSection } from '@/components/cta-section'

const iconMap: Record<string, React.ReactNode> = {
  Calculator: <Calculator className="h-5 w-5" style={{ color: 'var(--color-primary)' }} />,
  List: <List className="h-5 w-5" style={{ color: 'var(--color-primary)' }} />,
  ShieldCheck: <ShieldCheck className="h-5 w-5" style={{ color: 'var(--color-primary)' }} />,
}

export default function TutorialsPage() {
  return (
    <>
      {/* Hero */}
      <section className="py-16 bg-gradient-to-b from-white to-[#F8F9FA]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-[#27AE60]/10 text-[#27AE60] mb-4">
            Step-by-Step Guides
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold text-[#2C3E50] mb-4">
            Tutorials
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Learn how to get the most out of PlumbCalc with interactive walkthroughs.
            Each tutorial shows you the exact steps with real app footage.
          </p>
        </div>
      </section>

      {/* Tutorial Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tutorials.map((tutorial) => (
              <TutorialCard
                key={tutorial.slug}
                tutorial={tutorial}
                href={`/tutorials/${tutorial.slug}`}
                renderIcon={(name) => iconMap[name] || null}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Coming Soon hint */}
      <section className="py-12 bg-[#F8F9FA]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-sm text-gray-500">
            More tutorials coming soon — including Heat Loss Calculations, Pipework Estimation, and Job Management.
          </p>
        </div>
      </section>

      <CtaSection
        headline="Ready to try it yourself?"
        subheadline="Start your free trial and follow along with any tutorial."
      />
    </>
  )
}
