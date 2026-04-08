import type { Risk } from '@/types'

export const risk3: Risk = {
  id: 'risk-3',
  title: 'Too many variables in the first live experiment',
  description:
    'If the experiment combines a new game concept, new embedding approach, and new analytics setup simultaneously, it will be difficult to isolate which variables drove the outcomes.',
  severity: 'Medium',
  likelihood: 'High',
  mitigation:
    'Be deliberate about what the experiment is designed to test. Preferably test one major variable at a time. Consider replacing an existing game (Option A) to remove content risk from the first experiment.',
  relatedPhase: 'Phase 3',
}
