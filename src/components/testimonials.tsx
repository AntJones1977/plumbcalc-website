import { Quote, Star } from 'lucide-react'

// ---------------------------------------------------------------------------
// 👉 PLACEHOLDER REVIEWS — replace with real customer feedback before going
//    live. (Don't publish made-up reviews.) Once you're on Google, you can
//    paste in genuine Google reviews here.
// ---------------------------------------------------------------------------

const testimonials = [
  { quote: 'Fitted a new combi boiler for us — turned up on time, tidy work and talked us through everything. Our heating has never been better.', name: 'Customer name', place: 'Your Town' },
  { quote: 'Came out the same day when our heating packed in. Diagnosed and fixed it quickly at a fair price. Highly recommend.', name: 'Customer name', place: 'Nearby Town' },
  { quote: 'Annual boiler service and a landlord gas certificate sorted with no fuss. Friendly, professional and reliable.', name: 'Customer name', place: 'Wider County' },
]

export function Testimonials() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <p className="text-sm font-semibold uppercase tracking-wider text-[#E0701A] mb-2">Testimonials</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#14222B] mb-3">What our customers say</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <figure key={i} className="bg-[#F7F4EF] rounded-2xl border border-[#E8E2D9] p-6 flex flex-col">
              <Quote className="h-7 w-7 text-[#E0701A] mb-3" />
              <blockquote className="text-sm text-gray-700 leading-relaxed mb-4 flex-1">&ldquo;{t.quote}&rdquo;</blockquote>
              <div className="flex items-center gap-0.5 mb-2 text-[#E0701A]">
                {Array.from({ length: 5 }).map((_, s) => (
                  <Star key={s} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <figcaption className="text-sm">
                <span className="font-semibold text-[#14222B]">{t.name}</span>
                <span className="text-gray-400"> — {t.place}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
