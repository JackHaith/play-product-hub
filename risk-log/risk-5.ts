import type { Risk } from '@/types'

export const risk5: Risk = {
  id: 'risk-5',
  title: 'Unclear content moderation response path',
  description:
    'If an editorial concern arises during a live experiment — whether from the game content itself or user responses — there is currently no defined escalation path or response protocol.',
  severity: 'Medium',
  likelihood: 'Medium',
  mitigation:
    'Define and document the content moderation escalation path as part of Phase 3 readiness. Ensure the relevant editorial, legal, and engineering stakeholders are aligned before going live.',
  relatedPhase: 'Phase 3',
}
