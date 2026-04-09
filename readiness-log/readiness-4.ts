import type { ReadinessCheck } from '@/types'

export const readiness4: ReadinessCheck = {
    id: 'readiness-4',
    title: 'Stability and performance confidence',
    description:
      'The embedded game experience has been tested for performance and stability under realistic conditions.',
    status: 'Amber',
    audience: ['Tech'],
  notes: 'Initial performance testing done. Load testing under real traffic conditions not yet complete.',
  }
