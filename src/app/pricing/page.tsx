'use client'

import { useState } from 'react'
import { PricingCard } from '@/components/pricing-card'
import { PricingToggle } from '@/components/pricing-toggle'
import { Faq } from '@/components/faq'
import { CtaSection } from '@/components/cta-section'
import { tiers, faqItems } from '@/lib/pricing-data'
import { Check } from 'lucide-react'

const detailedFeatures = [
  { feature: 'Users included', starter: '1', professional: 'Up to 3', business: 'Up to 10' },
  { feature: 'Estimates', starter: 'Unlimited', professional: 'Unlimited', business: 'Unlimited' },
  { feature: 'Job types', starter: '4 (Bath, CH, Kitchen, HW)', professional: 'All 5 + Full Refurb', business: 'All 5 + Full Refurb' },
  { feature: 'Parametric auto-calculation', starter: 'Yes', professional: 'Yes', business: 'Yes' },
  { feature: 'Price database', starter: '95 items (defaults)', professional: 'Full CRUD + import', business: 'Full CRUD + import' },
  { feature: 'Pipework calculator', starter: 'Yes', professional: 'Yes', business: 'Yes' },
  { feature: 'Heat loss calculator', starter: '-', professional: 'Yes', business: 'Yes' },
  { feature: 'Customer records', starter: '50', professional: 'Unlimited', business: 'Unlimited' },
  { feature: 'Shareable quotes', starter: '5/month', professional: 'Unlimited', business: 'Unlimited' },
  { feature: 'Quote email sending', starter: '-', professional: 'Yes', business: 'Yes' },
  { feature: 'Gas certificates (CP12/CP6/CD10/CD11)', starter: '-', professional: 'Yes', business: 'Yes' },
  { feature: 'Appliance registry', starter: '-', professional: 'Yes', business: 'Yes' },
  { feature: 'CP12 expiry email reminders', starter: '-', professional: '-', business: 'Yes' },
  { feature: 'Maintenance callouts', starter: '-', professional: '10/month', business: 'Unlimited' },
  { feature: 'Invoicing & payments', starter: '-', professional: 'Yes', business: 'Yes' },
  { feature: 'Job scheduling', starter: '-', professional: '-', business: 'Yes' },
  { feature: 'Survey wizard', starter: '-', professional: 'Yes', business: 'Yes' },
  { feature: 'Analytics dashboard', starter: 'Basic', professional: 'Full', business: 'Full + Advanced' },
  { feature: 'Offline/PWA mode', starter: 'Yes', professional: 'Yes', business: 'Yes' },
  { feature: 'Data backups', starter: 'Daily auto', professional: 'Daily + manual', business: 'Daily + manual + download' },
  { feature: 'Company branding on prints', starter: 'PlumbCalc watermark', professional: 'Your branding', business: 'Your branding' },
  { feature: 'Data encryption (AES-256)', starter: '-', professional: '-', business: 'Yes' },
  { feature: 'Audit logging', starter: '-', professional: '-', business: 'Yes' },
  { feature: 'GDPR data export', starter: '-', professional: '-', business: 'Yes' },
  { feature: 'Support', starter: 'Email (48h)', professional: 'Email (24h)', business: 'Priority (same day)' },
]

export default function PricingPage() {
  const [isAnnual, setIsAnnual] = useState(false)

  return (
    <>
      <section className="py-16 bg-gradient-to-b from-white to-[#F8F9FA]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-[#2C3E50] mb-3">Plans that grow with your business</h1>
            <p className="text-gray-500 mb-6">Start free for 14 days. No credit card required.</p>
            <PricingToggle isAnnual={isAnnual} onChange={setIsAnnual} />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            {tiers.map(tier => (
              <PricingCard key={tier.name} {...tier} isAnnual={isAnnual} />
            ))}
          </div>
        </div>
      </section>

      {/* Detailed comparison */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl font-bold text-[#2C3E50] text-center mb-8">Detailed feature comparison</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b-2 border-gray-200">
                  <th className="text-left p-3 font-medium text-gray-500 w-[300px]">Feature</th>
                  <th className="text-center p-3 font-semibold text-[#2C3E50]">Starter<br /><span className="text-xs font-normal text-gray-400">&pound;19/mo</span></th>
                  <th className="text-center p-3 font-semibold text-[#2C3E50] bg-green-50">Professional<br /><span className="text-xs font-normal text-[#27AE60]">&pound;39/mo</span></th>
                  <th className="text-center p-3 font-semibold text-[#2C3E50]">Business<br /><span className="text-xs font-normal text-gray-400">&pound;69/mo</span></th>
                </tr>
              </thead>
              <tbody>
                {detailedFeatures.map((row, i) => (
                  <tr key={i} className="border-b border-gray-100">
                    <td className="p-3 text-gray-700">{row.feature}</td>
                    <td className="p-3 text-center text-gray-600">{row.starter === 'Yes' ? <Check className="h-4 w-4 text-[#27AE60] mx-auto" /> : row.starter}</td>
                    <td className="p-3 text-center text-gray-600 bg-green-50/50">{row.professional === 'Yes' ? <Check className="h-4 w-4 text-[#27AE60] mx-auto" /> : row.professional}</td>
                    <td className="p-3 text-center text-gray-600">{row.business === 'Yes' ? <Check className="h-4 w-4 text-[#27AE60] mx-auto" /> : row.business}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-[#F8F9FA]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl font-bold text-[#2C3E50] text-center mb-8">Pricing FAQ</h2>
          <Faq items={faqItems} />
        </div>
      </section>

      <CtaSection headline="Try PlumbCalc free for 14 days" subheadline="Full access to all features. No credit card. Cancel anytime." />
    </>
  )
}
