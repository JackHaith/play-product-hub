import type { Decision } from '@/types'

export const decision2: Decision = {
  id: 'decision-2',
  title: 'Rollout and distribution strategy',
  status: 'Open',
  owner: 'Rheem Al-Adhami, Adam Flint',
  relatedPhase: 'Phase 3',
  audience: ['Product', 'Tech', 'Stakeholder'],
  whyItMatters:
    'The way we limit exposure to a subset of users is a critical safety mechanism for the first live experiment. Without this, any issues affect the full audience immediately.',
  recommendation:
    'Recommend a phased or percentage-based rollout approach to limit initial exposure before widening.',
  options: [
      {
        id: 'rollout-full',
        title: 'Full release',
        context: 'Publish the embedded game to the full article audience from day one.',
        rationale: 'Simpler to implement. Generates data faster.',
        benefits: ['Faster data collection', 'No rollout complexity'],
        risks: ['Maximum risk exposure if experience fails', 'No safety net for issues'],
      },
      {
        id: 'rollout-phased',
        title: 'Phased / controlled exposure',
        context: 'Release to a defined percentage of users, with the ability to widen over time.',
        rationale: 'Limits risk while still generating real-world data.',
        benefits: ['Limits blast radius of any issues', 'Allows gradual confidence-building'],
        risks: [
          'Requires technical mechanism to limit exposure',
          'Smaller initial sample may slow data collection',
        ],
      },
  ],
  stakeholderQuestions: [
    'What is the technically reliable method for limiting exposure to a subset of users?',
    'What percentage of users is acceptable for the initial launch?',
    'What are the criteria for widening rollout?',
  ],
}
