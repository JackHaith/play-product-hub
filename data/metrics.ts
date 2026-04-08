import type { Metric } from '@/types'

export const metrics: Metric[] = [
  {
    id: 'metric-1',
    name: 'Click-through rate (CTR)',
    whyItMatters:
      'Measures how many users who encounter the embedded game choose to interact with it. A baseline indicator of discoverability and initial appeal.',
    status: 'proposed',
    relatedPhase: 'Phase 3',
    notes:
      'Requires reliable linkage between article-level and game-level analytics to measure accurately.',
  },
  {
    id: 'metric-2',
    name: 'Daily active users (DAU)',
    whyItMatters:
      'Tracks how many unique users engage with the game on a daily basis. Indicates whether the experience is driving habitual or repeat engagement.',
    status: 'proposed',
    relatedPhase: 'Phase 3',
    notes:
      'Dependent on user identification approach — may require sign-in or cookie-based tracking.',
  },
  {
    id: 'metric-3',
    name: 'Completion rate',
    whyItMatters:
      'Measures how many users who start the game complete it. Low completion rates may indicate poor UX, difficulty calibration, or insufficient engagement.',
    status: 'proposed',
    relatedPhase: 'Phase 3',
    notes: 'Definition of "completion" needs to be agreed per game type before tracking is set up.',
  },
  {
    id: 'metric-4',
    name: 'Time on site',
    whyItMatters:
      'Indicates whether the embedded game increases the overall time a user spends on the BBC article or site. Relevant to editorial value proposition.',
    status: 'proposed',
    relatedPhase: 'Phase 3',
    notes: 'Needs to be compared against a baseline for the same article without the game.',
  },
  {
    id: 'metric-5',
    name: 'Number of games per session',
    whyItMatters:
      'Measures breadth of engagement — are users playing more than one game in a session? Relevant once multiple games are available.',
    status: 'proposed',
    relatedPhase: 'Phase 4',
    notes: 'More relevant once multiple games are available. Track from Phase 3 as a baseline.',
  },
  {
    id: 'metric-6',
    name: 'Drop-off points',
    whyItMatters:
      'Identifies where in the game experience users stop engaging. Critical for understanding UX failures and prioritising improvements.',
    status: 'proposed',
    relatedPhase: 'Phase 3',
    notes:
      'Requires granular event tracking within the game experience. Must be defined in Phase 1 analytics setup.',
  },
  {
    id: 'metric-7',
    name: 'Repeat usage',
    whyItMatters:
      'Tracks whether users return to play the same game again, or return to the BBC to play games more broadly. Key indicator of sustained engagement value.',
    status: 'proposed',
    relatedPhase: 'Phase 3',
    notes: 'Dependent on user identification. Cookie-based tracking may be sufficient for v1.',
  },
]
