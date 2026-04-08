import type { Risk } from '@/types'
import { risk1 } from './risk-1'
import { risk2 } from './risk-2'
import { risk3 } from './risk-3'
import { risk4 } from './risk-4'
import { risk5 } from './risk-5'

// Single source of truth for risks surfaced across the app.
export const risks: Risk[] = [risk1, risk2, risk3, risk4, risk5]
