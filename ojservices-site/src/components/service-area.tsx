import { MapPin } from 'lucide-react'
import { site } from '@/lib/site-config'

export function ServiceArea() {
  return (
    <section id="areas" className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center">
        <p className="text-sm font-semibold uppercase tracking-wider text-[#E0701A] mb-2">Areas covered</p>
        <h2 className="text-3xl sm:text-4xl font-bold text-[#14222B] mb-3">Proudly serving {site.area}</h2>
        <p className="text-gray-500 max-w-2xl mx-auto mb-8">
          We cover a wide local area. Not sure if we reach you? Just ask — if we can help, we will.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          {site.areaList.map(a => (
            <span
              key={a}
              className="inline-flex items-center gap-1.5 bg-[#F7F4EF] border border-[#E8E2D9] text-[#14222B] text-sm font-medium px-4 py-2 rounded-full"
            >
              <MapPin className="h-4 w-4 text-[#E0701A]" /> {a}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
