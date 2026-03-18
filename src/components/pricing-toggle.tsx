'use client'

interface PricingToggleProps {
  isAnnual: boolean
  onChange: (annual: boolean) => void
}

export function PricingToggle({ isAnnual, onChange }: PricingToggleProps) {
  return (
    <div className="flex items-center justify-center gap-3">
      <span className={`text-sm font-medium ${!isAnnual ? 'text-[#2C3E50]' : 'text-gray-400'}`}>Monthly</span>
      <button
        onClick={() => onChange(!isAnnual)}
        className={`relative w-14 h-7 rounded-full transition-colors ${isAnnual ? 'bg-[#27AE60]' : 'bg-gray-300'}`}
      >
        <span className={`absolute top-0.5 w-6 h-6 bg-white rounded-full shadow transition-transform ${isAnnual ? 'translate-x-7' : 'translate-x-0.5'}`} />
      </button>
      <span className={`text-sm font-medium ${isAnnual ? 'text-[#2C3E50]' : 'text-gray-400'}`}>
        Annual <span className="text-[#27AE60] text-xs font-bold">Save 17%</span>
      </span>
    </div>
  )
}
