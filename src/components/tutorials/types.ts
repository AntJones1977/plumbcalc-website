export type MediaType = 'mp4' | 'gif' | 'image'

export interface TutorialStep {
  /** Step number, 1-indexed */
  step: number
  /** Short title shown in the step header */
  title: string
  /** 1-2 sentence description of what the user sees */
  description: string
  /** Path relative to /public (e.g. "/tutorials/e-signature/step-1.mp4") */
  mediaPath: string
  /** Type of embedded media */
  mediaType: MediaType
  /** Optional annotation shown in a callout box below the description */
  annotation?: string
  /** Duration hint in seconds — used for auto-play pacing (defaults to 5) */
  durationSeconds?: number
}

export interface Tutorial {
  /** URL slug (e.g. "e-signature-workflow") */
  slug: string
  /** Display title */
  title: string
  /** Short description for listing cards */
  description: string
  /** Category for grouping/filtering */
  category: string
  /** Estimated time to complete in minutes */
  estimatedMinutes: number
  /** lucide-react icon name (e.g. "PenLine", "FileText") — resolved by consuming site */
  iconName: string
  /** Ordered steps */
  steps: TutorialStep[]
  /** Optional CTA button label */
  ctaLabel?: string
  /** Optional CTA button link */
  ctaHref?: string
}
