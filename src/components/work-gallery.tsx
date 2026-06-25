import fs from 'node:fs'
import path from 'node:path'
import { Camera, ArrowRight } from 'lucide-react'

// ---------------------------------------------------------------------------
// 👉 YOUR WORK GOES HERE.
// Drop job photos into  public/work/  (jpg / png / webp). They appear in this
// gallery automatically — the file name becomes the caption, so name them
// nicely (e.g. "bathroom-refit.jpg" -> "Bathroom Refit").
//
// Until you add photos, the example cards below are shown as placeholders.
// ---------------------------------------------------------------------------

const IMAGE_RE = /\.(jpe?g|png|webp|avif)$/i

function getPhotos(): string[] {
  try {
    const dir = path.join(process.cwd(), 'public', 'work')
    return fs.readdirSync(dir).filter((f) => IMAGE_RE.test(f)).sort()
  } catch {
    return []
  }
}

function captionFromFile(file: string): string {
  return file
    .replace(/\.[^.]+$/, '')
    .replace(/[-_]+/g, ' ')
    .replace(/\b\w/g, (c) => c.toUpperCase())
    .trim()
}

const placeholders = [
  { category: 'Boiler', title: 'New boiler installation', gradient: 'from-[#243C49] to-[#0f1f29]' },
  { category: 'Heating', title: 'Central heating upgrade', gradient: 'from-[#1b3a4a] to-[#0f1f29]' },
  { category: 'Boiler', title: 'Boiler service & repair', gradient: 'from-[#243C49] to-[#0f1f29]' },
  { category: 'Plumbing', title: 'Bathroom & wet room', gradient: 'from-[#1b3a4a] to-[#0f1f29]' },
  { category: 'Heating', title: 'Radiator replacement', gradient: 'from-[#243C49] to-[#0f1f29]' },
  { category: 'Plumbing', title: 'Leak repair', gradient: 'from-[#1b3a4a] to-[#0f1f29]' },
]

export function WorkGallery() {
  const photos = getPhotos()
  const hasPhotos = photos.length > 0

  return (
    <section id="work" className="py-20 bg-[#F7F4EF]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <p className="text-sm font-semibold uppercase tracking-wider text-[#E0701A] mb-2">Our work</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#14222B] mb-3">Recent jobs we&apos;re proud of</h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            A look at some of the work we&apos;ve completed for customers across the area. Quality you can see.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {hasPhotos
            ? photos.map((file) => (
                <article
                  key={file}
                  className="group rounded-2xl overflow-hidden border border-[#E8E2D9] bg-white shadow-sm hover:shadow-lg transition-shadow"
                >
                  <div className="aspect-[4/3] overflow-hidden bg-[#14222B]">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={`/work/${file}`}
                      alt={captionFromFile(file)}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="font-bold text-[#14222B]">{captionFromFile(file)}</h3>
                  </div>
                </article>
              ))
            : placeholders.map((p, i) => (
                <article key={i} className="rounded-2xl overflow-hidden border border-[#E8E2D9] bg-white shadow-sm">
                  <div className={`relative aspect-[4/3] bg-gradient-to-br ${p.gradient}`}>
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-white/70">
                      <Camera className="h-8 w-8 mb-2" />
                      <span className="text-xs uppercase tracking-wider">Photo coming soon</span>
                    </div>
                    <span className="absolute top-3 left-3 bg-[#E0701A] text-white text-xs font-semibold px-2.5 py-1 rounded-full">
                      {p.category}
                    </span>
                  </div>
                  <div className="p-5">
                    <h3 className="font-bold text-[#14222B]">{p.title}</h3>
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
