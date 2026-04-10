import type { Metric } from '@/types'

export const metric8: Metric = {
  id: 'metric-8',
  name: 'Sign-in conversion rate',
  whyItMatters:
    'Tracks how many users choose to sign in when prompted to access additional game content. Indicates whether sign-in gating supports engagement without creating excessive friction.',
  status: 'proposed',
  phase: 'Phase 4',
  notes:
    'Requires a clear event model for prompt views, sign-in starts, and completed sign-ins across article and game contexts.',
}
