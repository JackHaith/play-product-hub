import type { ReadinessCheck } from '@/types'
import { readiness1 } from './readiness-1'
import { readiness2 } from './readiness-2'
import { readiness3 } from './readiness-3'
import { readiness4 } from './readiness-4'
import { readiness5 } from './readiness-5'
import { readiness6 } from './readiness-6'
import { readiness7 } from './readiness-7'

export const readinesslog: ReadinessCheck[] = [
  readiness1,
  readiness2,
  readiness3,
  readiness4,
  readiness5,
  readiness6,
  readiness7,
]
