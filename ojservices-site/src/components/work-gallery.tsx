import { Camera, ArrowRight } from 'lucide-react'

// ---------------------------------------------------------------------------
// 👉 YOUR WORK GOES HERE.
// Replace these example projects with your real jobs. To show a photo, drop
// the image into  public/work/  and set `image` to e.g. '/work/bathroom-1.jpg'.
// Until an image is set, a tidy branded placeholder is shown instead.
// ---------------------------------------------------------------------------

interface Project {
  category: 'Bathroom' | 'Plumbing' | 'Landscaping' | 'Renovation'
  title: string
  description: string
  image?: string // e.g. '/work/bathroom-1.jpg'
}

const projects: Project[] = [
  { category: 'Bathroom', title: 'Full bathroom refit', description: 'Stripped back to brick and rebuilt — new suite, tiling and lighting.' },
  { category: 'Landscaping', title: 'Garden transformation', description: 'Clearance, new patio, fencing and planting from start to finish.' },
  { category: 'Plumbing', title: 'Kitchen re-plumb', description: 'New pipework, sink and appliance connections, fully tested.' },
  { category: 'Renovation', title: 'Internal build-out', description: 'Reconfigured layout with new walls, flooring and finishing.' },
  { category: 'Bathroom', title: 'Walk-in wet room', description: 'Modern, accessible wet room with full tanking and tiling.' },
  { category: 'Landscaping', title: 'Patio & decking', description: 'Raised decking and paved patio built for year-round use.' },
]

const categoryGradient: Record<Project['category'], string> = {
  Bathroom: 'from-[#243C49] to-[#0f1f29]',
  Plumbing: 'from-[#1b3a4a] to-[#0f1f29]',
  Landscaping: 'from-[#2f4a36] to-[#16261b]',
  Renovation: 'from-[#4a3a24] to-[#241b10]',
}

export function WorkGallery() {
  return (
    <section id="work" className="py-20 bg-[#F7F4EF]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <p className="text-sm font-semibold uppercase tracking-wider text-[#E0701A] mb-2">Our work</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#14222B] mb-3">Recent jobs we&apos;re proud of</h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            A look at some of the work we&apos;ve completed for customers across {''}
            the area. Quality you can see.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <article
              key={i}
              className="group rounded-2xl overflow-hidden border border-[#E8E2D9] bg-white shadow-sm hover:shadow-lg transition-shadow"
            >
              <div className={`relative aspect-[4/3] bg-gradient-to-br ${categoryGradient[p.category]}`}>
                {p.image ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={p.image} alt={p.title} className="h-full w-full object-cover" />
                ) : (
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-white/70">
                    <Camera className="h-8 w-8 mb-2" />
                    <span className="text-xs uppercase tracking-wider">Photo coming soon</span>
                  </div>
                )}
                <span className="absolute top-3 left-3 bg-[#E0701A] text-white text-xs font-semibold px-2.5 py-1 rounded-full">
                  {p.category}
                </span>
              </div>
              <div className="p-5">
                <h3 className="font-bold text-[#14222B] mb-1">{p.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{p.description}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-10">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-[#14222B] font-semibold hover:text-[#E0701A] transition-colors"
          >
            Want something similar? Get a free quote <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  )
}
