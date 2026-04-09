import type { Risk } from '@/types'

export const risk5: Risk = {
  id: 'risk-5',
  title: 'Sensitive or offensive game content',
  description:
    'If offensive or sentitive content is displayed in our game it could cause backlast and reputational damage to the BBC.',
  severity: 'High',
  likelihood: 'Low',
  mitigation:
    'Develop emergency kill switch to remove the game, game content or article at a moments notice.',
  relatedPhase: 'Phase 3',
}
