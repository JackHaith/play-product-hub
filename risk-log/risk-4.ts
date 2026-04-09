import type { Risk } from '@/types'

export const risk4: Risk = {
  id: 'risk-4',
  title: 'No agreed mechanism to limit exposure to small user volumes',
  description:
    'Without a technically reliable way to limit the experiment to a percentage of users, the first live experiment would immediately reach the full article audience, significantly increasing the risk of exposing potential issues to a large number of usets.',
  severity: 'High',
  likelihood: 'Medium',
  mitigation:
    'Confirm the technical rollout control mechanism as part of Phase 1 capabilities. Do not proceed to Phase 3 without this in place.',
  relatedPhase: 'Phase 3',
}
