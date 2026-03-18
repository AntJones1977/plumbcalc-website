'use client'

interface StepIndicatorProps {
  totalSteps: number
  currentStep: number
  /** CSS color for active/completed dots — defaults to var(--color-accent) */
  accentColor?: string
}

export function StepIndicator({ totalSteps, currentStep, accentColor }: StepIndicatorProps) {
  const accent = accentColor || 'var(--color-accent, #27AE60)'

  return (
    <div className="flex items-center justify-center gap-2">
      {Array.from({ length: totalSteps }, (_, i) => {
        const isActive = i === currentStep
        const isCompleted = i < currentStep

        return (
          <div
            key={i}
            className="transition-all duration-300"
            style={{
              width: isActive ? 24 : 10,
              height: 10,
              borderRadius: 5,
              backgroundColor: isActive || isCompleted ? accent : undefined,
              border: !isActive && !isCompleted ? `2px solid ${accent}40` : 'none',
              opacity: isActive ? 1 : isCompleted ? 0.6 : 0.3,
            }}
            aria-label={`Step ${i + 1}${isActive ? ' (current)' : isCompleted ? ' (completed)' : ''}`}
          />
        )
      })}
    </div>
  )
}
