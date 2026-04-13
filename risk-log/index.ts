import type { Risk } from '@/types'
import { risk1 } from './risk-1'
import { risk4 } from './risk-4'
import { risk5 } from './risk-5'

// Single source of truth for risks surfaced across the app.
export const risks: Risk[] = [
  risk1,
  risk4,
  risk5,
].sort((a, b) => {
  const aNum = Number(a.id.replace('risk-', ''))
  const bNum = Number(b.id.replace('risk-', ''))
  return aNum - bNum
})
