import type { LucideIcon } from 'lucide-react'

interface FeatureCardProps {
  icon: LucideIcon
  title: string
  description: string
  highlights?: string[]
}

export function FeatureCard({ icon: Icon, title, description, highlights }: FeatureCardProps) {
  return (
    <div className="bg-white rounded-xl border border-gray-100 p-6 hover:shadow-md transition-shadow">
      <div className="h-11 w-11 rounded-lg bg-[#2C3E50]/5 flex items-center justify-center mb-4">
        <Icon className="h-5 w-5 text-[#2C3E50]" />
      </div>
      <h3 className="text-lg font-bold text-[#2C3E50] mb-2">{title}</h3>
      <p className="text-sm text-gray-600 leading-relaxed mb-3">{description}</p>
      {highlights && (
        <ul className="space-y-1">
          {highlights.map((h, i) => (
            <li key={i} className="text-xs text-gray-500 flex items-center gap-1.5">
              <span className="h-1 w-1 rounded-full bg-[#27AE60]" />
              {h}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
