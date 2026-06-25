import fs from 'node:fs'
import path from 'node:path'

// ---------------------------------------------------------------------------
// 👉 JOB VIDEOS.
// Drop web-ready .mp4 files into  public/videos/  and they appear here
// automatically. If a matching poster image (same name, .jpg) sits alongside,
// it's used as the thumbnail. The whole section hides itself if there are none.
// ---------------------------------------------------------------------------

function getVideos(): { src: string; poster?: string }[] {
  try {
    const dir = path.join(process.cwd(), 'public', 'videos')
    const files = fs.readdirSync(dir)
    return files
      .filter((f) => /\.mp4$/i.test(f))
      .sort()
      .map((f) => {
        const poster = `${f.replace(/\.mp4$/i, '')}.jpg`
        return {
          src: `/videos/${f}`,
          poster: files.includes(poster) ? `/videos/${poster}` : undefined,
        }
      })
  } catch {
    return []
  }
}

export function Videos() {
  const videos = getVideos()
  if (videos.length === 0) return null

  return (
    <section id="videos" className="py-20 bg-[#14222B]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <p className="text-sm font-semibold uppercase tracking-wider text-[#E0701A] mb-2">In action</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3">See our work in action</h2>
          <p className="text-white/60 max-w-2xl mx-auto">Short clips from recent jobs.</p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {videos.map((v, i) => (
            <div key={i} className="rounded-2xl overflow-hidden ring-1 ring-white/10 shadow-lg bg-black">
              <video
                className="w-full aspect-[9/16] object-cover"
                controls
                preload="metadata"
                playsInline
                poster={v.poster}
              >
                <source src={v.src} type="video/mp4" />
              </video>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
