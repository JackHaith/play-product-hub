import type { ReadinessCheck } from '@/types'

export const readinessChecks: ReadinessCheck[] = [
  {
    id: 'readiness-1',
    title: 'Embed capability',
    description:
      'A clear and tested method exists for embedding interactive games within BBC articles.',
    status: 'Amber',
    notes: 'Approach defined but not yet fully validated in a BBC article environment.',
  },
  {
    id: 'readiness-2',
    title: 'Analytics tracking',
    description:
      'Analytics events are defined, implemented, and validated for game interactions.',
    status: 'Amber',
    notes: 'Event schema defined. Full end-to-end validation pending Phase 2 testing.',
  },
  {
    id: 'readiness-3',
    title: 'Content removal controls',
    description:
      'A reliable and tested method exists to remove or amend the embedded game from an article quickly.',
    status: 'Red',
    notes: 'Method not yet agreed or tested. Required before Phase 3.',
  },
  {
    id: 'readiness-4',
    title: 'Stability and performance confidence',
    description:
      'The embedded game experience has been tested for performance and stability under realistic conditions.',
    status: 'Amber',
    notes: 'Initial performance testing done. Load testing under real traffic conditions not yet complete.',
  },
  {
    id: 'readiness-5',
    title: 'Controlled rollout capability',
    description:
      'A technical mechanism exists to limit the live experiment to a defined percentage of users.',
    status: 'Red',
    notes: 'Not yet defined or implemented. A blocker for Phase 3.',
  },
  {
    id: 'readiness-6',
    title: 'Success metrics agreed',
    description:
      'The team has agreed on what success looks like and what metrics will be used to evaluate the experiment.',
    status: 'Red',
    notes: 'Metrics proposed but not yet agreed across product, editorial, and analytics stakeholders.',
  },
  {
    id: 'readiness-7',
    title: 'Data structure readiness',
    description:
      'A consistent data structure and unique identifier system is in place for tracking across games and articles.',
    status: 'Amber',
    notes: 'Draft data structure exists. Needs final sign-off from analytics team.',
  },
]
