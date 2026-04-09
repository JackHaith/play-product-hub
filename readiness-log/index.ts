import type { ReadinessCheck } from '@/types'
import { readiness1 } from './readiness-1'
import { readiness2 } from './readiness-2'
import { readiness3 } from './readiness-3'
import { readiness4 } from './readiness-4'
import { readiness5 } from './readiness-5'
import { readiness6 } from './readiness-6'
import { readiness7 } from './readiness-7'
import { readiness_design_game_generation } from './readiness-design-game-generation'
import { readiness_design_game_shortlist } from './readiness-design-game-shortlist'
import { readiness_design_game_validation } from './readiness-design-game-validation'
import { readiness_design_sudoku_rebuild } from './readiness-design-sudoku-rebuild'
import { readiness_design_drop_the_pin_world_cup } from './readiness-design-drop-the-pin-world-cup'

export const readinesslog: ReadinessCheck[] = [
  readiness1,
  readiness2,
  readiness3,
  readiness4,
  readiness5,
  readiness6,
  readiness7,
  readiness_design_game_generation,
  readiness_design_game_shortlist,
  readiness_design_game_validation,
  readiness_design_sudoku_rebuild,
  readiness_design_drop_the_pin_world_cup,
]
