'use client'

import { useRef, useEffect, useState } from 'react'
import type { MediaType } from './types'

interface MediaEmbedProps {
  src: string
  mediaType: MediaType
  alt?: string
  /** Called when video finishes playing (for auto-advance) */
  onMediaEnd?: () => void
}

export function MediaEmbed({ src, mediaType, alt = 'Tutorial step', onMediaEnd }: MediaEmbedProps) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(false)
  }, [src])

  if (mediaType === 'mp4') {
    return (
      <div className="relative w-full overflow-hidden rounded-lg bg-gray-900" style={{ aspectRatio: '16/9' }}>
        {!isLoaded && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div
              className="h-8 w-8 rounded-full border-2 border-t-transparent animate-spin"
              style={{ borderColor: 'var(--color-accent, #27AE60)', borderTopColor: 'transparent' }}
            />
          </div>
        )}
        <video
          ref={videoRef}
          src={src}
          muted
          autoPlay
          loop
          playsInline
          onLoadedData={() => setIsLoaded(true)}
          onEnded={onMediaEnd}
          className={`w-full h-full object-contain transition-opacity duration-500 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
        />
      </div>
    )
  }

  return (
    <div className="relative w-full overflow-hidden rounded-lg bg-gray-100" style={{ aspectRatio: '16/9' }}>
      {!isLoaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
          <div className="h-6 w-6 rounded-full border-2 border-gray-300 border-t-transparent animate-spin" />
        </div>
      )}
      <img
        src={src}
        alt={alt}
        onLoad={() => setIsLoaded(true)}
        className={`w-full h-full object-contain transition-opacity duration-500 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
      />
    </div>
  )
}
