import type { Decision } from '@/types'

export const decision3: Decision = {
    id: 'decision-3',
    title: 'Content removal method',
    status: 'Recommended',
    owner: 'Engineering + Editorial ops',
    relatedPhase: 'Phase 3',
    whyItMatters:
      'If something goes wrong during a live experiment, the team needs a clear, fast, and editorially-appropriate way to remove or amend the content.',
    recommendation:
      'Use Optimo to remove or amend the article embed as the primary method. AWS console access as a technical fallback for game-level changes.',
    options: [
      {
        id: 'remove-optimo-embed',
        title: 'Remove game from article via Optimo',
        context: 'Use existing editorial tooling (Optimo) to remove the game embed from the article.',
        rationale: 'Uses existing editorial workflow. Does not require engineering involvement.',
        benefits: ['No engineering required', 'Fast turnaround', 'Within editorial team control'],
        risks: [
          'Only removes the embed, not the game itself',
          'May not help if the game URL is shared directly',
        ],
      },
      {
        id: 'remove-optimo-article',
        title: 'Remove full article via Optimo',
        context: 'Remove the entire article from publication if necessary.',
        rationale: 'Nuclear option — removes all access to the game via the article.',
        benefits: ['Complete removal of exposure', 'Within editorial control'],
        risks: [
          'Removes legitimate article content too',
          'May not be proportionate in most scenarios',
        ],
      },
      {
        id: 'remove-aws',
        title: 'Amend game content via AWS console',
        context:
          'Use AWS console to update or take down the game at the infrastructure level.',
        rationale: 'Provides direct control at the game level, independent of article publishing.',
        benefits: ['Direct game-level control', 'Does not affect article content'],
        risks: [
          'Requires engineering involvement',
          'Slower than editorial options',
          'Not available out-of-hours without on-call',
        ],
      },
    ],
    stakeholderQuestions: [
      'Is Optimo removal reliable enough to be the primary mechanism?',
      'Who is responsible for triggering removal if something goes wrong?',
      'What are the out-of-hours escalation paths?',
    ],
  }
