import type { Risk } from '@/types'

export const risk2: Risk = {
  id: 'risk-2',
  title: 'Analytics linkage between article and game is unclear',
  description:
    'It may not be technically straightforward to connect user journey data from the BBC article layer with game-level interaction data. Without this linkage, key metrics like CTR and session context cannot be accurately measured.',
  severity: 'Medium',
  likelihood: 'Medium',
  mitigation:
    'Validate analytics linkage during Phase 2 private testing before committing to live. Define the data structure and identifiers in Phase 1 as a prerequisite.',
  relatedPhase: 'Phase 2',
  audience: ['Tech', 'Stakeholder'],
}
