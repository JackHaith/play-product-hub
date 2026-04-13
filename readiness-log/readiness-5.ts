import type { ReadinessCheck } from '@/types'

export const readiness5: ReadinessCheck = {
    id: 'readiness-5',
    title: 'Controlled rollout capability',
    description:
      'A technical mechanism exists to limit the live experiment to a defined percentage of users.',
    status: 'In progress',
    phase: 'Phase 3',
    audience: ['Tech', 'Stakeholder'],
  notes: 'Not yet defined or implemented. A blocker for Phase 3.',
  }
