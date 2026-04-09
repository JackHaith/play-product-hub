import type { Risk } from '@/types'

export const risk1: Risk = {
  id: 'risk-1',
  title: 'Reputational risk if live experience fails publicly',
  description:
    'If the embedded game experience breaks, underperforms, or creates a poor user experience during a live experiment, this could reflect negatively on BBC editorial quality and audience trust.',
  severity: 'Medium',
  likelihood: 'Medium',
  mitigation:
    'Use a controlled rollout to limit initial exposure. Ensure content removal processes are tested and rehearsed before going live. Have a clear incident response plan agreed by the team.',
  relatedPhase: 'Phase 3',
}
