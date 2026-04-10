import type { Metric } from '@/types'

export const metric11: Metric = {
  id: 'metric-11',
  name: 'Return rate after progressive engagement',
  whyItMatters:
    'Tracks whether users exposed to progressive mechanics are more likely to return for repeat sessions. Helps test if progression contributes to sustained usage.',
  status: 'proposed',
  phase: 'Phase 4',
  notes:
    'Requires a consistent return window definition and a stable user/session identification approach for repeat-visit measurement.',
}
