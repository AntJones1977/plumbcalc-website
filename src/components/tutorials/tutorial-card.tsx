import type { Tutorial } from './types'

interface TutorialCardProps {
  tutorial: Tutorial
  /** Render function for the icon — consuming site resolves iconName to a component */
  renderIcon?: (iconName: string) => React.ReactNode
  /** Link wrapper — consuming site provides its Link component */
  href?: string
}

export function TutorialCard({ tutorial, renderIcon, href }: TutorialCardProps) {
  const primary = 'var(--color-primary, #2C3E50)'
  const accent = 'var(--color-accent, #27AE60)'

  const content = (
    <div className="group flex flex-col h-full border border-gray-100 rounded-xl p-6 hover:shadow-md hover:border-gray-200 transition-all bg-white cursor-pointer">
      {/* Icon and category */}
      <div className="flex items-center justify-between mb-4">
        <div
          className="h-11 w-11 rounded-lg flex items-center justify-center"
          style={{ backgroundColor: `${primary}08` }}
        >
          {renderIcon ? (
            renderIcon(tutorial.iconName)
          ) : (
            <svg className="h-5 w-5" style={{ color: primary }} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
              <polygon points="5,3 19,12 5,21" />
            </svg>
          )}
        </div>
        <span
          className="text-xs font-medium px-2.5 py-1 rounded-full"
          style={{ backgroundColor: `${accent}15`, color: accent }}
        >
          {tutorial.category}
        </span>
      </div>

      {/* Title and description */}
      <h3
        className="text-lg font-bold mb-2 group-hover:opacity-80 transition-opacity"
        style={{ color: primary }}
      >
        {tutorial.title}
      </h3>
      <p className="text-sm text-gray-600 leading-relaxed flex-1">
        {tutorial.description}
      </p>

      {/* Footer */}
      <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-100">
        <span className="text-xs text-gray-400">
          {tutorial.steps.length} steps · {tutorial.estimatedMinutes} min
        </span>
        <span className="text-sm font-medium" style={{ color: accent }}>
          Start →
        </span>
      </div>
    </div>
  )

  if (href) {
    return <a href={href} className="block">{content}</a>
  }

  return content
}
