import { ImageResponse } from 'next/og'
import { site } from '@/lib/site-config'

export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'
export const alt = `${site.name} — gas, heating & plumbing services`

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          background: 'linear-gradient(135deg, #14222B, #243C49)',
          color: 'white',
          padding: 80,
          fontFamily: 'sans-serif',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 24, marginBottom: 36 }}>
          <div
            style={{
              width: 96,
              height: 96,
              borderRadius: 22,
              background: '#E0701A',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: 46,
              fontWeight: 800,
            }}
          >
            OJ
          </div>
          <div style={{ fontSize: 56, fontWeight: 800 }}>{site.name}</div>
        </div>
        <div style={{ display: 'flex', fontSize: 66, fontWeight: 800, lineHeight: 1.1, maxWidth: 940 }}>
          Gas, heating & plumbing, done properly
        </div>
        <div style={{ display: 'flex', fontSize: 30, color: '#F2A461', marginTop: 36 }}>
          Boilers · Central heating · Gas safety · Emergency callouts
        </div>
      </div>
    ),
    { ...size },
  )
}
