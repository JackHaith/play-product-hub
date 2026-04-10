import type { Decision } from '@/types'
import { decision1 } from './decision-1'
import { decision2 } from './decision-2'
import { decision3 } from './decision-3'
import { decision4 } from './decision-4'
import { decision5 } from './decision-5'
import { decision6 } from './decision-6'
import { decisionGamesDistributionModel } from './decision-games-distribution-model'

export const decisionlog: Decision[] = [
  decision1,
  decision2,
  decision3,
  decision4,
  decision5,
  decision6,
  decisionGamesDistributionModel,
]
