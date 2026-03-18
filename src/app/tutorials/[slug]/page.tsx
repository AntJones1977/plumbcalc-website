import { notFound } from 'next/navigation'
import Link from 'next/link'
import { TutorialPlayer } from '@/components/tutorials'
import { tutorials } from '@/lib/tutorials-data'
import { CtaSection } from '@/components/cta-section'

interface Props {
  params: Promise<{ slug: string }>
}

export function generateStaticParams() {
  return tutorials.map((t) => ({ slug: t.slug }))
}

export default async function TutorialPage({ params }: Props) {
  const { slug } = await params
  const tutorial = tutorials.find((t) => t.slug === slug)

  if (!tutorial) {
    notFound()
  }

  return (
    <>
      {/* Breadcrumb */}
      <section className="bg-[#F8F9FA] border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-3">
          <nav className="text-sm text-gray-500">
            <Link href="/tutorials" className="hover:text-[#2C3E50] transition-colors">
              Tutorials
            </Link>
            <span className="mx-2">›</span>
            <span className="text-[#2C3E50] font-medium">{tutorial.title}</span>
          </nav>
        </div>
      </section>

      {/* Tutorial header */}
      <section className="py-10 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-[#27AE60]/10 text-[#27AE60] mb-3">
            {tutorial.category}
          </span>
          <h1 className="text-3xl sm:text-4xl font-bold text-[#2C3E50] mb-2">
            {tutorial.title}
          </h1>
          <p className="text-gray-600 max-w-xl mx-auto">
            {tutorial.description}
          </p>
          <p className="text-xs text-gray-400 mt-2">
            {tutorial.steps.length} steps · About {tutorial.estimatedMinutes} minutes
          </p>
        </div>
      </section>

      {/* Tutorial Player */}
      <section className="py-8 bg-[#F8F9FA]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <TutorialPlayer tutorial={tutorial} />
        </div>
      </section>

      {/* CTA */}
      {tutorial.ctaLabel && tutorial.ctaHref && (
        <section className="py-12 bg-white">
          <div className="max-w-2xl mx-auto px-4 text-center">
            <h2 className="text-2xl font-bold text-[#2C3E50] mb-3">
              Ready to try it yourself?
            </h2>
            <p className="text-gray-600 mb-6">
              Follow along with a free trial account — no credit card required.
            </p>
            <Link
              href={tutorial.ctaHref}
              className="inline-block bg-[#27AE60] hover:bg-[#219A52] text-white px-8 py-3.5 rounded-lg font-semibold transition-colors"
            >
              {tutorial.ctaLabel}
            </Link>
          </div>
        </section>
      )}

      <CtaSection />
    </>
  )
}
