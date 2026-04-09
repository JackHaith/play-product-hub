import type { Decision } from '@/types'

export const decision5: Decision = {
  id: 'decision-5',
  title: 'Game selection',
  status: 'Open',
  owner: 'Rheem Al-Adhami, Adam Flint',
  relatedPhase: 'Phase 3',
  audience: ['Product', 'Design', 'Stakeholder'],
  whyItMatters:
    'The specific game chosen for the live experiment affects the audience segment, content risk, editorial framing, and what we can learn. Selection criteria should be agreed before any content work begins.',
  recommendation: undefined,
  options: [],
  stakeholderQuestions: [
    'What criteria should we use to select the first game?',
    'Does the game need to be editorially connected to the article it sits in?',
    'How do we shortlist and make a final selection decision?',
    'Who has editorial sign-off on the chosen game?',
  ],
}
