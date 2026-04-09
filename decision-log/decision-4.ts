import type { Decision } from '@/types'

export const decision4: Decision = {
    id: 'decision-4',
    title: 'Success metrics and analytics approach',
    status: 'Open',
    owner: 'Product + Analytics',
    relatedPhase: 'Phase 2',
    whyItMatters:
      'Without agreed metrics, the team cannot determine whether the experiment succeeded. This needs to be defined before Phase 2 ends so that tracking is validated before going live.',
    recommendation: undefined,
    options: [],
    stakeholderQuestions: [
      'What does success look like for Phase 3?',
      'Which metrics are most important to the editorial team?',
      'How do we link article-level analytics to game-level analytics?',
      'What is the minimum viable analytics setup to make a decision?',
    ],
  }
