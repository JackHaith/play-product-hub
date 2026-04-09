import type { Decision } from '@/types'

export const decision1: Decision = {
  id: 'decision-1',
  title: 'First live experiment approach',
  status: 'Open',
  owner: 'Rheem Al-Adhami, Adam Flint',
  relatedPhase: 'Phase 3',
  audience: ['Product', 'Stakeholder'],
  whyItMatters:
    'The choice of experiment type has a significant impact on risk, learning potential, and organisational complexity. This decision needs to be owned collectively by the trio before Phase 3 can begin.',
  recommendation: undefined,
  options: [
      {
        id: 'option-a',
        title: 'Replace an existing game',
        context:
          'Replace a known, existing BBC game (e.g. Sudoku or Cooler Than Me) with the new embedded implementation.',
        rationale:
          'Focuses on technical validation rather than testing a new game concept. Provides a direct comparison with existing performance data.',
        benefits: [
          'Clear benchmark — we can compare performance against the existing game',
          'No risk of introducing unfamiliar or sensitive content',
          'Simpler editorial framing — the game already has an audience',
          'Lower content complexity overall',
        ],
        risks: [
          'Reputational risk if the new implementation underperforms or breaks',
          'No learning about new game concepts or audience appetite for new formats',
          'Existing audience expectations may make failure more visible',
        ],
      },
      {
        id: 'option-b',
        title: 'Launch a new game in an article',
        context:
          'Introduce a new game within an article environment, exposed to a defined and controlled set of users.',
        rationale:
          'Tests the full stack — embedding, analytics, content concept, and audience response simultaneously. Lower reputational risk if exposure is controlled.',
        benefits: [
          'Tests both the game concept and the technical embedding approach together',
          'Controlled exposure limits reputational risk',
          'Generates richer learning about new formats',
          'More directly tests the audience proposition',
        ],
        risks: [
          'More variables in a single experiment makes it harder to isolate learnings',
          'Requires more upfront decision-making (game selection, article placement, editorial framing)',
          'Needs a technically reliable rollout control mechanism',
        ],
      },
  ],
  stakeholderQuestions: [
    'Are we comfortable exposing this test to an existing BBC audience?',
    'What level of failure risk is acceptable for the first live experiment?',
    'Do we have sufficient confidence in technical stability to go live?',
    'Who owns the decision if something goes wrong during the experiment?',
  ],
}
