'use client'

import { useState, useEffect, useCallback } from 'react'
import type { Tutorial } from './types'
import { StepIndicator } from './step-indicator'
import { MediaEmbed } from './media-embed'

interface TutorialPlayerProps {
  tutorial: Tutorial
  /** Accent colour override — defaults to CSS var(--color-accent) */
  accentColor?: string
  /** Primary colour override — defaults to CSS var(--color-primary) */
  primaryColor?: string
}

export function TutorialPlayer({ tutorial, accentColor, primaryColor }: TutorialPlayerProps) {
  const [currentStep, setCurrentStep] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(false)
  const [fadeKey, setFadeKey] = useState(0)

  const accent = accentColor || 'var(--color-accent, #27AE60)'
  const primary = primaryColor || 'var(--color-primary, #2C3E50)'
  const step = tutorial.steps[currentStep]
  const isFirst = currentStep === 0
  const isLast = currentStep === tutorial.steps.length - 1

  const goNext = useCallback(() => {
    if (!isLast) {
      setCurrentStep((s) => s + 1)
      setFadeKey((k) => k + 1)
    } else {
      setIsAutoPlaying(false)
    }
  }, [isLast])

  const goPrev = useCallback(() => {
    if (!isFirst) {
      setCurrentStep((s) => s - 1)
      setFadeKey((k) => k + 1)
    }
  }, [isFirst])

  // Auto-play timer for non-video media
  useEffect(() => {
    if (!isAutoPlaying) return
    if (step.mediaType === 'mp4') return // video uses onMediaEnd instead

    const duration = (step.durationSeconds || 5) * 1000
    const timer = setTimeout(goNext, duration)
    return () => clearTimeout(timer)
  }, [isAutoPlaying, currentStep, step, goNext])

  // Keyboard navigation
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === ' ') {
        e.preventDefault()
        goNext()
      }
      if (e.key === 'ArrowLeft') {
        e.preventDefault()
        goPrev()
      }
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [goNext, goPrev])

  const handleMediaEnd = useCallback(() => {
    if (isAutoPlaying) goNext()
  }, [isAutoPlaying, goNext])

  return (
    <div className="w-full border border-gray-200 rounded-xl overflow-hidden bg-white shadow-sm">
      {/* Header with step indicator */}
      <div className="px-6 pt-6 pb-4">
        <div className="flex items-center justify-between mb-4">
          <span className="text-sm font-medium" style={{ color: primary }}>
            Step {currentStep + 1} of {tutorial.steps.length}
          </span>
          <button
            onClick={() => setIsAutoPlaying(!isAutoPlaying)}
            className="flex items-center gap-1.5 text-sm px-3 py-1.5 rounded-full border transition-colors"
            style={{
              borderColor: isAutoPlaying ? accent : '#e5e7eb',
              color: isAutoPlaying ? accent : '#6b7280',
              backgroundColor: isAutoPlaying ? `${accent}10` : 'transparent',
            }}
          >
            {isAutoPlaying ? (
              <>
                <svg className="h-3.5 w-3.5" fill="currentColor" viewBox="0 0 24 24">
                  <rect x="6" y="4" width="4" height="16" rx="1" />
                  <rect x="14" y="4" width="4" height="16" rx="1" />
                </svg>
                Pause
              </>
            ) : (
              <>
                <svg className="h-3.5 w-3.5" fill="currentColor" viewBox="0 0 24 24">
                  <polygon points="5,3 19,12 5,21" />
                </svg>
                Auto-play
              </>
            )}
          </button>
        </div>
        <StepIndicator
          totalSteps={tutorial.steps.length}
          currentStep={currentStep}
          accentColor={accent}
        />
      </div>

      {/* Media area */}
      <div key={fadeKey} className="px-4 sm:px-6 animate-fadeIn">
        <MediaEmbed
          src={step.mediaPath}
          mediaType={step.mediaType}
          alt={step.title}
          onMediaEnd={handleMediaEnd}
        />
      </div>

      {/* Step content */}
      <div className="px-6 pt-4 pb-2">
        <h3 className="text-lg font-bold mb-1" style={{ color: primary }}>
          {step.title}
        </h3>
        <p className="text-sm text-gray-600 leading-relaxed">
          {step.description}
        </p>

        {step.annotation && (
          <div
            className="mt-3 flex items-start gap-2 p-3 rounded-lg text-sm"
            style={{ backgroundColor: `${accent}10`, color: accent }}
          >
            <svg className="h-4 w-4 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
              <circle cx="12" cy="12" r="10" />
              <path d="M12 16v-4M12 8h.01" />
            </svg>
            <span>{step.annotation}</span>
          </div>
        )}
      </div>

      {/* Navigation */}
      <div className="px-6 pb-6 pt-3 flex items-center justify-between">
        <button
          onClick={goPrev}
          disabled={isFirst}
          className="px-5 py-2.5 rounded-lg text-sm font-medium border transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
          style={{
            borderColor: `${primary}30`,
            color: primary,
          }}
        >
          ← Previous
        </button>

        <span className="text-xs text-gray-400 hidden sm:block">
          Use arrow keys to navigate
        </span>

        <button
          onClick={goNext}
          disabled={isLast}
          className="px-5 py-2.5 rounded-lg text-sm font-medium text-white transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
          style={{ backgroundColor: accent }}
        >
          {isLast ? 'Complete ✓' : 'Next →'}
        </button>
      </div>
    </div>
  )
}
