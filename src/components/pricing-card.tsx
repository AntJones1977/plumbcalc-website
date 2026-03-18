import { Check, X } from 'lucide-react'
import Link from 'next/link'

interface PricingCardProps {
  name: string
  monthly: number
  annual: number
  isAnnual: boolean
  popular?: boolean
  description: string
  features: { label: string; included: boolean }[]
}

export function PricingCard({ name, monthly, annual, isAnnual, popular, description, features }: PricingCardProps) {
  const price = isAnnual ? annual : monthly
  const period = isAnnual ? '/yr' : '/mo'
  const saving = isAnnual ? (monthly * 12) - annual : 0

  return (
    <div className={`relative rounded-2xl border-2 p-6 flex flex-col ${popular ? 'border-[#27AE60] shadow-lg shadow-green-100' : 'border-gray-200'}`}>
      {popular && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#27AE60] text-white text-xs font-bold px-4 py-1 rounded-full">
          Most Popular
        </div>
      )}

      <h3 className="text-xl font-bold text-[#2C3E50]">{name}</h3>
      <p className="text-sm text-gray-500 mt-1">{description}</p>

      <div className="mt-4 mb-6">
        <span className="text-4xl font-bold text-[#2C3E50]">&pound;{price}</span>
        <span className="text-gray-500 text-sm">{period}</span>
        {isAnnual && saving > 0 && (
          <p className="text-xs text-[#27AE60] font-medium mt-1">Save &pound;{saving}/year</p>
        )}
      </div>

      <ul className="space-y-2.5 flex-1 mb-6">
        {features.map((f, i) => (
          <li key={i} className="flex items-start gap-2 text-sm">
            {f.included ? (
              <Check className="h-4 w-4 text-[#27AE60] mt-0.5 shrink-0" />
            ) : (
              <X className="h-4 w-4 text-gray-300 mt-0.5 shrink-0" />
            )}
            <span className={f.included ? 'text-gray-700' : 'text-gray-400'}>{f.label}</span>
          </li>
        ))}
      </ul>

      <Link
        href="https://app.plumbcalc.com"
        className={`block text-center py-3 rounded-lg font-semibold text-sm transition-colors ${
          popular
            ? 'bg-[#27AE60] hover:bg-[#219A52] text-white'
            : 'bg-[#2C3E50] hover:bg-[#34495E] text-white'
        }`}
      >
        Start 14-Day Free Trial
      </Link>
      <p className="text-center text-xs text-gray-400 mt-2">No credit card required</p>
    </div>
  )
}
