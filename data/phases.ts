import type { Phase } from '@/types'

export const phases: Phase[] = [
  {
    id: 'phase-1',
    number: 1,
    title: 'Technical Foundations',
    summary:
      'Establish the core technical capability to embed games within BBC articles, set up analytics tracking, and build the operational controls needed for safe experimentation.',
    objective:
      'Prove that the embedding approach works, analytics can be tracked, and the team has sufficient control to manage the experience safely.',
    status: 'in-progress',
    capabilities: [
      'Clear method for embedding interactive games within BBC articles',
      'Defined events and tracking for user interaction',
      'Methods for removing or updating embedded games quickly',
      'Unique identifiers for interactive experiences',
      'Consistent tracking approach across game variations',
      'Ability to embed multiple variations of a game',
      'Data structure readiness for analytics',
    ],
    activities: [
      'Define and test the embedding approach for BBC articles',
      'Set up analytics event tracking for game interactions',
      'Establish content management controls (remove/update capability)',
      'Define data structure and unique identifiers',
      'Document method for supporting multiple game variations',
    ],
    considerations: [
      'Embedding method must work within existing BBC article architecture',
      'Analytics must be able to link article-level and game-level data',
      'Content removal must be operable without engineering involvement',
    ],
    exitCriteria: [
      'Game can be embedded in an article environment',
      'Analytics events are firing and being captured',
      'Content can be removed or updated without an engineering deploy',
      'Data structure is agreed and documented',
    ],
    linkedDecisions: ['decision-7'],
    linkedRisks: ['risk-2'],
  },
  {
    id: 'phase-2',
    number: 2,
    title: 'Private Article Testing',
    summary:
      'Validate the embedding approach and analytics end-to-end using a private or test article environment before any exposure to real users.',
    objective:
      'Understand what data can realistically be captured, identify any technical or performance issues early, and build confidence in the setup before going live.',
    status: 'planned',
    capabilities: [
      'Access to a private or unlisted BBC article environment',
      'Ability to run analytics in a test context',
      'Performance monitoring tooling',
    ],
    activities: [
      'Embed game in private or test article',
      'Use article as internal test bed with team members',
      'Validate analytics are capturing the right events',
      'Assess performance and stability under light load',
      'Document any issues found before live phase',
    ],
    considerations: [
      'Can analytics from the article and the game be linked effectively?',
      'A full kill switch is not required at this stage',
      'Performance issues found here are far cheaper to fix than in production',
    ],
    exitCriteria: [
      'Analytics are validated end-to-end in the private article',
      'No critical performance or stability issues identified',
      'Team has sufficient confidence to proceed to live experiment',
    ],
    linkedDecisions: ['decision-4'],
    linkedRisks: ['risk-2'],
  },
  {
    id: 'phase-3',
    number: 3,
    title: 'First Live Experiment',
    summary:
      'Run the first live experiment with real BBC users. A key decision is pending on whether to replace an existing game or launch a new game in an article.',
    objective:
      'Validate the embedding approach, analytics, and operational model with real user traffic. Generate the first meaningful data about engagement and experience quality.',
    status: 'not-started',
    capabilities: [
      'All Phase 1 and Phase 2 capabilities confirmed',
      'Agreed rollout or distribution strategy',
      'Agreed content moderation response path',
      'Game selected and ready for publication',
      'Article placement agreed',
      'Editorial framing defined',
      'Analytics metrics agreed',
    ],
    activities: [
      'Select game from shortlist',
      'Choose article location, service and content context',
      'Define editorial framing for the embedded game',
      'Agree and implement distribution / rollout approach',
      'Define content moderation process',
      'Agree success metrics and data capture approach',
      'Publish and monitor live experiment',
    ],
    considerations: [
      'More variables in a live experiment vs private testing',
      'Need a clear approach on how to limit user exposure volumes',
      'Reputational risk if the experience fails publicly',
      'Decision on experiment type must be made before this phase begins',
    ],
    exitCriteria: [
      'Live experiment has run for agreed duration',
      'Analytics data captured and reviewed',
      'No significant reputational or technical incidents',
      'Team has learnings to feed into Phase 4',
    ],
    linkedDecisions: ['decision-1', 'decision-2', 'decision-3', 'decision-4', 'decision-5', 'decision-6'],
    linkedRisks: ['risk-1', 'risk-3', 'risk-4', 'risk-5'],
  },
  {
    id: 'phase-4',
    number: 4,
    title: 'Further Experiments',
    summary:
      'Build on learnings from Phase 3 to run more sophisticated experiments exploring deeper engagement, sign-in gating, and onward journeys.',
    objective:
      'Test more advanced engagement patterns and understand the potential for games to drive deeper audience relationships.',
    status: 'not-started',
    capabilities: [
      'Sign-in or authentication gating capability',
      'Progressive engagement mechanics',
      'Onward journey / content recommendation after game',
      'A/B testing infrastructure',
    ],
    activities: [
      'Design and test sign-in gating for game access',
      'Explore progressive engagement patterns (streaks, rewards)',
      'Test onward journey flows and additional content recommendations',
      'Run A/B experiments on game placement and framing',
    ],
    considerations: [
      'Dependent on Phase 3 learnings and organisational appetite',
      'Sign-in gating adds editorial and privacy considerations',
      'Onward journeys require closer collaboration with editorial teams',
    ],
    exitCriteria: [
      'Defined by learnings from Phase 3',
      'At least one further experiment completed',
      'Clear recommendations for scaling or stopping',
    ],
    linkedDecisions: [],
    linkedRisks: [],
  },
]
