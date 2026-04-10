import type { Decision } from '@/types'

export const decisionGamesDistributionModel: Decision = {
  id: 'decision-games-distribution-model',
  title: 'Games distribution model',
  status: 'Decided',
  owner: 'Rheem Al-Adhami, Adam Flint, Bob Hamilton',
  relatedPhase: 'Phase 3',
  audience: ['Product', 'Design', 'Tech', 'Stakeholder'],
  whyItMatters:
    'This decision defines how users will encounter games within the BBC experience, and therefore shapes the product model, editorial integration approach, technical implementation, and experimentation strategy.',
  recommendation:
    'Use an article-embedded model for experimentation, where individual games are placed within BBC articles rather than launched through a standalone games hub or central destination.',
  options: [
    {
      id: 'games-hub-model',
      title: 'Standalone games hub',
      context:
        'Create a hosted destination where users can browse and choose between multiple BBC games in one central place.',
      rationale:
        'Would provide a clear home for multiple games and support direct discovery of a game portfolio.',
      benefits: [
        'Creates a single destination for game discovery',
        'Supports browsing across multiple game concepts',
        'Could establish a recognisable games proposition over time',
      ],
      risks: [
        'Requires a larger product and platform commitment',
        'Adds complexity beyond the current experimental scope',
        'Does not align with the current embedded-in-article test approach',
        'Would require separate consideration of navigation, ownership, and ongoing management',
      ],
    },
    {
      id: 'article-embedded-model',
      title: 'Article-embedded experiment model',
      context:
        'Place individual games within BBC articles so users encounter them in editorial contexts rather than through a central games destination.',
      rationale:
        'Supports a lower-risk experimental approach focused on testing playability, engagement, embedding, analytics, and editorial fit before considering a broader product model.',
      benefits: [
        'Aligns with the current phased experiment approach',
        'Allows testing in real editorial contexts',
        'Reduces scope compared with building a full hub experience',
        "Supports service-specific experiments such as BBC Sport or Children's & Education",
      ],
      risks: [
        'No central destination for users to discover all games',
        'Discovery depends on article placement and editorial context',
        'Cross-game engagement may be harder to test initially',
      ],
    },
  ],
  stakeholderQuestions: [
    'Do we want to validate editorial embedding before considering a broader games proposition?',
    'Is a standalone games destination in scope for this phase of work?',
    'What is the simplest viable route to learning whether games can work within BBC articles?',
  ],
}
