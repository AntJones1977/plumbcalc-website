import type { LucideIcon } from 'lucide-react'
import { Flame, Wrench, Thermometer, ShieldCheck, Droplets, Siren, CheckCircle2 } from 'lucide-react'

interface Service {
  icon: LucideIcon
  title: string
  description: string
  points: string[]
}

const services: Service[] = [
  {
    icon: Flame,
    title: 'Boiler Installation & Replacement',
    description: 'New boilers supplied and fitted — more reliable heating and lower running costs.',
    points: ['Combi, system & regular boilers', 'Boiler upgrades & swaps', 'Fixed-price quotes', 'Efficient, warranty-backed installs'],
  },
  {
    icon: Wrench,
    title: 'Boiler Servicing & Repairs',
    description: 'Annual servicing and fast fault-finding to keep your boiler safe and running.',
    points: ['Annual boiler service', 'Breakdown & fault finding', 'Manufacturer-approved parts', 'Keep your warranty valid'],
  },
  {
    icon: Thermometer,
    title: 'Central Heating',
    description: 'Full heating systems, radiators, smart controls and power flushing.',
    points: ['Full system installs', 'Radiators & smart controls', 'Power flushing & cleansing', 'Heating upgrades'],
  },
  {
    icon: ShieldCheck,
    title: 'Gas Safety & Landlord Certificates',
    description: 'Gas safety inspections and CP12 landlord certificates, done properly.',
    points: ['CP12 landlord gas certificates', 'Gas appliance safety checks', 'Cooker & hob installs', 'Gas leak detection'],
  },
  {
    icon: Droplets,
    title: 'General Plumbing',
    description: 'Leaks, taps, toilets, cylinders and bathrooms — fixed fast and done right first time.',
    points: ['Leaks & burst pipes', 'Taps, toilets & showers', 'Hot water cylinders', 'Bathrooms & wet rooms'],
  },
  {
    icon: Siren,
    title: 'Emergency Callouts',
    description: 'No heating? No hot water? Burst pipe? A fast, reliable response when it matters.',
    points: ['No heat / no hot water', 'Burst pipes & leaks', 'Rapid local response', 'Honest, upfront pricing'],
  },
]

export function Services() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <p className="text-sm font-semibold uppercase tracking-wider text-[#E0701A] mb-2">What we do</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#14222B] mb-3">Gas, heating &amp; plumbing, sorted</h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            From a new boiler or annual service to leaks and emergencies — friendly, reliable help
            that keeps your home warm, safe and running.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {services.map(s => (
            <div
              key={s.title}
              className="bg-[#F7F4EF] rounded-2xl border border-[#E8E2D9] p-7 hover:shadow-md transition-shadow"
            >
              <div className="h-12 w-12 rounded-xl bg-[#14222B] flex items-center justify-center mb-5">
                <s.icon className="h-6 w-6 text-[#E0701A]" />
              </div>
              <h3 className="text-xl font-bold text-[#14222B] mb-2">{s.title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed mb-4">{s.description}</p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2">
                {s.points.map(p => (
                  <li key={p} className="text-sm text-gray-700 flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-[#E0701A] shrink-0" /> {p}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
