import type { ReadinessCheck } from '@/types'

export const readiness_design_sudoku_rebuild: ReadinessCheck = {
  id: 'readiness-design-sudoku-rebuild',
  title: 'Sudoku rebuild prepared',
  description:
    'A rebuilt version of Sudoku was prepared so it can be used as a lower-risk replacement test for an existing BBC game experience.',
  status: 'Green',
  audience: ['Design', 'Stakeholder'],
  notes:
    'This supports the potential experiment path of replacing an existing BBC game with a new implementation while minimising concept risk.',
}
