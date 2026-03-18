'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Calculator, ShieldCheck, Wifi, WifiOff, FileText, Flame, Bath, Droplets, ChefHat, Wrench, Thermometer, ClipboardList, BarChart3, Receipt, CalendarDays, AlertTriangle, Users } from 'lucide-react'
import { FeatureCard } from '@/components/feature-card'
import { PricingCard } from '@/components/pricing-card'
import { PricingToggle } from '@/components/pricing-toggle'
import { ComparisonTable } from '@/components/comparison-table'
import { Faq } from '@/components/faq'
import { CtaSection } from '@/components/cta-section'
import { tiers, faqItems } from '@/lib/pricing-data'

export default function HomePage() {
  const [isAnnual, setIsAnnual] = useState(false)

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-b from-white to-[#F8F9FA] py-20 lg:py-28">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
          <div className="inline-flex items-center gap-2 bg-[#27AE60]/10 text-[#27AE60] text-xs font-semibold px-3 py-1.5 rounded-full mb-6">
            <span className="h-1.5 w-1.5 rounded-full bg-[#27AE60]" />
            Built for UK plumbers and heating engineers
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#2C3E50] leading-tight mb-6">
            Estimate jobs in minutes,<br className="hidden sm:block" />
            not hours
          </h1>

          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8 leading-relaxed">
            The only estimating software that auto-calculates quantities, fittings, and labour from your job parameters. Gas certificates, heat loss, quotes, invoices — all in one app that works offline.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <Link href="https://app.plumbcalc.com" className="bg-[#27AE60] hover:bg-[#219A52] text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors shadow-lg shadow-green-200">
              Start Your 14-Day Free Trial
            </Link>
            <Link href="/features" className="text-[#2C3E50] hover:text-[#34495E] border-2 border-[#2C3E50]/20 px-8 py-4 rounded-lg text-lg font-medium transition-colors">
              See All Features
            </Link>
          </div>

          <p className="text-sm text-gray-400">No credit card required. Plans from &pound;19/month.</p>
        </div>
      </section>

      {/* Social proof */}
      <section className="bg-white py-8 border-y border-gray-100">
        <div className="max-w-4xl mx-auto px-4 flex flex-wrap items-center justify-center gap-8 text-sm text-gray-500">
          <div className="flex items-center gap-2">
            <Users className="h-4 w-4" />
            <span>Trusted by UK trade professionals</span>
          </div>
          <div className="flex items-center gap-2">
            <ShieldCheck className="h-4 w-4" />
            <span>Gas Safe compliant certificates</span>
          </div>
          <div className="flex items-center gap-2">
            <WifiOff className="h-4 w-4" />
            <span>Works offline on any device</span>
          </div>
        </div>
      </section>

      {/* 3 Key Benefits */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#2C3E50] mb-3">Why plumbers choose PlumbCalc</h2>
            <p className="text-gray-500">Three things that set us apart from every competitor</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="h-16 w-16 rounded-2xl bg-[#2C3E50]/5 flex items-center justify-center mx-auto mb-4">
                <Calculator className="h-8 w-8 text-[#2C3E50]" />
              </div>
              <h3 className="text-lg font-bold text-[#2C3E50] mb-2">Auto-Calculates Everything</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Select a bath type and pipe material — PlumbCalc calculates every fitting, elbow, clip, metre of pipe, and labour hour automatically. No spreadsheets, no guessing.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="h-16 w-16 rounded-2xl bg-[#27AE60]/5 flex items-center justify-center mx-auto mb-4">
                <ShieldCheck className="h-8 w-8 text-[#27AE60]" />
              </div>
              <h3 className="text-lg font-bold text-[#2C3E50] mb-2">Gas Certificates Built In</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                CP12 landlord safety, CP6 warning notices, CD10 commissioning, CD11 unsafe situations. Issue, print, email — with automatic expiry reminders.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="h-16 w-16 rounded-2xl bg-blue-50 flex items-center justify-center mx-auto mb-4">
                <WifiOff className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-bold text-[#2C3E50] mb-2">Works Offline, Everywhere</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Install on your phone, tablet, or laptop. Create estimates in a basement with no signal. Everything syncs when you reconnect. No app store needed.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Feature showcase */}
      <section className="py-16 bg-[#F8F9FA]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#2C3E50] mb-3">Everything you need to run your business</h2>
            <p className="text-gray-500">From first quote to final invoice — one app for the entire job lifecycle</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <FeatureCard icon={Bath} title="5 Specialist Estimators" description="Bathroom, Central Heating, Kitchen, Hot Water, and Full Refurbishment — each with parametric auto-calculation." highlights={['Live recalculation as you change inputs', 'Grade tiers (Basic/Mid/Premium)', 'Conditional items auto-include/exclude']} />
            <FeatureCard icon={ShieldCheck} title="Gas Certificates" description="All 4 Gas Safe certificate types with appliance inspections, edit-in-draft, and print-to-PDF." highlights={['CP12, CP6, CD10, CD11', 'Expiry tracking + email reminders', 'Encrypted PII storage']} />
            <FeatureCard icon={Thermometer} title="Heat Loss Calculator" description="Room-by-room heat loss analysis to BS EN 12831 with radiator sizing and boiler recommendations." highlights={['UK construction U-values', '35-spec radiator database', 'Auto-feeds central heating estimator']} />
            <FeatureCard icon={FileText} title="Quotes & Invoicing" description="Share professional quotes via unique links. Customers accept online — no login needed." highlights={['Email notifications on send/response', 'Auto-expiry with configurable validity', 'Quote-to-invoice conversion']} />
            <FeatureCard icon={AlertTriangle} title="Maintenance Callouts" description="Log faults, diagnose, quote, and track reactive maintenance from phone call to payment." highlights={['11 fault categories with urgency levels', '9-step status workflow', 'Escalate to full estimate']} />
            <FeatureCard icon={BarChart3} title="Analytics & Dashboard" description="Revenue tracking, conversion funnels, job type breakdowns, and monthly trends at a glance." highlights={['Open callout alerts', 'Overdue invoice warnings', 'Expiring CP12 dashboard cards']} />
          </div>
        </div>
      </section>

      {/* Competitor comparison */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#2C3E50] mb-3">How we compare</h2>
            <p className="text-gray-500">PlumbCalc vs the competition — feature by feature</p>
          </div>
          <ComparisonTable />
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16 bg-[#F8F9FA]" id="pricing">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-[#2C3E50] mb-3">Simple, transparent pricing</h2>
            <p className="text-gray-500 mb-6">No hidden fees. No long contracts. Cancel anytime.</p>
            <PricingToggle isAnnual={isAnnual} onChange={setIsAnnual} />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            {tiers.map(tier => (
              <PricingCard key={tier.name} {...tier} isAnnual={isAnnual} />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials placeholder */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-[#2C3E50] mb-3">What plumbers say</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { quote: 'I used to spend an hour on every bathroom quote. Now it takes 10 minutes and the customer gets a professional PDF on the spot.', name: 'Dave M.', role: 'Sole Trader, London' },
              { quote: 'The heat loss calculator alone is worth it. I can size radiators on-site and feed it straight into the central heating estimate.', name: 'Mark T.', role: 'Heating Engineer, Manchester' },
              { quote: 'Gas certificates, estimates, invoices, and it works offline in basements. This is everything I need in one app.', name: 'Sarah K.', role: 'Gas Safe Engineer, Birmingham' },
            ].map((t, i) => (
              <div key={i} className="bg-[#F8F9FA] rounded-xl p-6">
                <p className="text-sm text-gray-600 leading-relaxed mb-4 italic">&ldquo;{t.quote}&rdquo;</p>
                <p className="text-sm font-semibold text-[#2C3E50]">{t.name}</p>
                <p className="text-xs text-gray-400">{t.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-[#F8F9FA]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-[#2C3E50] mb-3">Frequently asked questions</h2>
          </div>
          <Faq items={faqItems} />
        </div>
      </section>

      {/* Final CTA */}
      <CtaSection />
    </>
  )
}
