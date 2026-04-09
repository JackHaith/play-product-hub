import type { Metric } from '@/types'

export const metric3: Metric = {
    id: 'metric-3',
    name: 'Completion rate',
    whyItMatters:
      'Measures how many users who start the game complete it. Low completion rates may indicate poor UX, difficulty calibration, or insufficient engagement.',
    status: 'proposed',
    relatedPhase: 'Phase 3',
    notes: 'Definition of "completion" needs to be agreed per game type before tracking is set up.',
  }
