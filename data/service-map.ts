import type { ServiceMap } from '@/types'

export const serviceMap: ServiceMap = {
  userJourney: [
    {
      id: 'uj-1',
      title: 'Encounter article',
      description:
        'User arrives at a BBC article through search, social media, homepage, or direct navigation.',
    },
    {
      id: 'uj-2',
      title: 'See embedded game',
      description:
        'User encounters the game embed within the article. It may sit inline, at the bottom, or with editorial framing.',
    },
    {
      id: 'uj-3',
      title: 'Interact with game',
      description:
        'User chooses to engage. First interaction may be a click or tap to start. Game loads and play begins.',
    },
    {
      id: 'uj-4',
      title: 'Complete or drop off',
      description:
        'User either completes the game or exits at a drop-off point. Both outcomes are tracked as distinct events.',
    },
    {
      id: 'uj-5',
      title: 'Continue or exit',
      description:
        'User continues reading the article, navigates to other BBC content, or exits the site entirely. Onward journey tracked where possible.',
    },
  ],
  operationalJourney: [
    {
      id: 'oj-1',
      title: 'Select game',
      description:
        'Editorial and product teams select the game from the agreed shortlist, applying criteria aligned to phase objectives.',
    },
    {
      id: 'oj-2',
      title: 'Prepare content',
      description:
        'Game content is prepared and tested in staging. Editorial framing copy is drafted. Embed code is generated.',
    },
    {
      id: 'oj-3',
      title: 'Choose placement',
      description:
        'Editorial team selects the target article, section, and position within the page. Rollout percentage is configured.',
    },
    {
      id: 'oj-4',
      title: 'Publish embed',
      description:
        'Game is embedded in the article via Optimo. Rollout is activated at the agreed exposure percentage.',
    },
    {
      id: 'oj-5',
      title: 'Monitor analytics',
      description:
        'Analytics reviewed at agreed intervals. Key metrics tracked against targets. Alerts configured for anomalies.',
    },
    {
      id: 'oj-6',
      title: 'Detect issues',
      description:
        'Technical, performance, or editorial issues identified through monitoring, user feedback, or internal escalation.',
    },
    {
      id: 'oj-7',
      title: 'Amend or remove',
      description:
        'If needed, game is amended via AWS console or removed from the article via Optimo. Incident is documented.',
    },
  ],
  systems: [
    {
      id: 'sys-1',
      name: 'BBC article environment / Optimo',
      description:
        'The primary publishing environment for BBC articles. Used to embed game content, manage placement, and remove or amend content when needed.',
      category: 'content',
    },
    {
      id: 'sys-2',
      name: 'Embedded game experience',
      description:
        'The interactive game itself, served as an embeddable experience. Hosted independently and rendered within the article via an embed URL.',
      category: 'content',
    },
    {
      id: 'sys-3',
      name: 'Analytics layer',
      description:
        'Tracks user interactions at both the article and game level. Must link events across layers using consistent identifiers.',
      category: 'analytics',
    },
    {
      id: 'sys-4',
      name: 'AWS console',
      description:
        'Infrastructure control layer for the game hosting environment. Used for game-level content updates and as a technical fallback for content removal.',
      category: 'infrastructure',
    },
    {
      id: 'sys-5',
      name: 'Reporting and dashboards',
      description:
        'Aggregated view of experiment data. Used by product, analytics, and editorial stakeholders to review outcomes.',
      category: 'analytics',
    },
  ],
}
