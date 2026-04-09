import type { Decision } from '@/types'

export const decision7: Decision = {
    id: 'decision-7',
    title: 'Content moderation approach',
    status: 'Open',
    owner: 'Editorial + Engineering + Legal',
    relatedPhase: 'Phase 3',
    whyItMatters:
      'If a game generates or surfaces user-influenced content, there needs to be a clear moderation path. Even for non-UGC games, a clear escalation process is required for editorial concerns.',
    recommendation: undefined,
    options: [],
    stakeholderQuestions: [
      'Does the selected game involve any user-generated or user-influenced content?',
      'What is the escalation path if a moderation concern is raised?',
      'Who is responsible for monitoring during the live experiment?',
      'Is existing BBC moderation infrastructure sufficient, or does it need extending?',
    ],
  }
