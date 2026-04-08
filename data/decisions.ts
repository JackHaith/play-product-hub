import type { Decision } from '@/types'

export const decisions: Decision[] = [
  {
    id: 'decision-1',
    title: 'First live experiment approach',
    status: 'Open',
    owner: 'Product Trio (Product, Engineering, Editorial)',
    relatedPhase: 'Phase 3',
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
  },
  {
    id: 'decision-2',
    title: 'Rollout and distribution strategy',
    status: 'Open',
    owner: 'Steady + Product',
    relatedPhase: 'Phase 3',
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
  },
  {
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
  },
  {
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
  },
  {
    id: 'decision-5',
    title: 'Game selection',
    status: 'Open',
    owner: 'Editorial + Game Design',
    relatedPhase: 'Phase 3',
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
  },
  {
    id: 'decision-6',
    title: 'Article placement and editorial framing',
    status: 'Open',
    owner: 'Editorial + Product',
    relatedPhase: 'Phase 3',
    whyItMatters:
      'Where the game is placed within the article — and how it is framed editorially — affects user discovery, engagement, and the perception of the BBC brand.',
    recommendation: undefined,
    options: [],
    stakeholderQuestions: [
      'Should the game sit inline within article content, at the end, or in a sidebar?',
      'Does it need editorial framing or introduction copy?',
      'Which article type and service is most appropriate for the first experiment?',
      'How much prominence should the game have on the page?',
    ],
  },
  {
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
  },
]
