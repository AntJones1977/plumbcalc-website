import { Phone, ClipboardList, Hammer, ThumbsUp } from 'lucide-react'

const steps = [
  { icon: Phone, title: 'Get in touch', text: 'Call us or send a quick message with what you need doing.' },
  { icon: ClipboardList, title: 'Free quote', text: 'We assess the job and give you a clear, no-obligation price.' },
  { icon: Hammer, title: 'We do the work', text: 'Tidy, professional workmanship, completed to a high standard.' },
  { icon: ThumbsUp, title: 'Job done', text: 'We clear up, walk you through everything, and make sure you are delighted with the result.' },
]

export function Process() {
  return (
    <section className="py-20 bg-[#14222B]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <p className="text-sm font-semibold uppercase tracking-wider text-[#E0701A] mb-2">How it works</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3">Simple from start to finish</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((s, i) => (
            <div key={s.title} className="relative rounded-2xl bg-white/5 ring-1 ring-white/10 p-6 text-center">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 h-7 w-7 rounded-full bg-[#E0701A] text-white text-sm font-bold flex items-center justify-center">
                {i + 1}
              </div>
              <div className="h-14 w-14 mx-auto rounded-2xl bg-white/10 flex items-center justify-center mb-4 mt-2">
                <s.icon className="h-7 w-7 text-[#E0701A]" />
              </div>
              <h3 className="font-bold text-white mb-1.5">{s.title}</h3>
              <p className="text-sm text-white/60 leading-relaxed">{s.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
