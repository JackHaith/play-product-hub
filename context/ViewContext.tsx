'use client'

import { createContext, useContext, useState, type ReactNode } from 'react'
import type { ViewType } from '@/types'

interface ViewContextType {
  view: ViewType
  setView: (view: ViewType) => void
}

const ViewContext = createContext<ViewContextType>({
  view: 'Product',
  setView: () => {},
})

export function ViewProvider({ children }: { children: ReactNode }) {
  const [view, setViewState] = useState<ViewType>(() => {
    if (typeof window === 'undefined') return 'Product'
    const stored = localStorage.getItem('hub-view')
    if (stored && ['Product', 'Design', 'Tech', 'Stakeholder'].includes(stored)) {
      return stored as ViewType
    }
    return 'Product'
  })

  const setView = (v: ViewType) => {
    setViewState(v)
    localStorage.setItem('hub-view', v)
  }

  return (
    <ViewContext.Provider value={{ view, setView }}>
      {children}
    </ViewContext.Provider>
  )
}

export function useView() {
  return useContext(ViewContext)
}

export const viewDescriptions: Record<ViewType, string> = {
  Product:     'Balanced cross-functional view',
  Design:      'Service map, user journey, placement',
  Tech:        'Phases, systems, readiness, risks',
  Stakeholder: 'Overview, decisions, readiness, metrics',
}

export const viewFocusMessages: Record<string, Partial<Record<ViewType, string>>> = {
  overview: {
    Stakeholder: 'Stakeholder view — this page is a priority. It covers project goals, open decisions, and current readiness.',
    Tech: 'Tech view — review the readiness snapshot and phase status. Technical risks are summarised here.',
    Design: 'Design view — scroll down for active workstreams including game design and the service map entry point.',
  },
  phases: {
    Tech: 'Tech view — review capability requirements and exit criteria. Phase 1 is the current blocker for Phase 3.',
    Stakeholder: 'Stakeholder view — focus on the current phase status and what decisions are blocking progress.',
  },
  decisions: {
    Stakeholder: 'Stakeholder view — open decisions need resolution. These are the primary blockers for Phase 3.',
    Design: 'Design view — game selection and article placement decisions are most relevant here.',
    Tech: 'Tech view — focus on the rollout strategy and content removal method decisions.',
  },
  'service-map': {
    Design: 'Design view — this page is a priority. It maps the full user and operational journey.',
    Tech: 'Tech view — review the systems section to understand technical dependencies.',
    Stakeholder: 'Stakeholder view — the operational journey shows how the team manages the live experience.',
  },
  risks: {
    Tech: 'Tech view — this page is a priority. Review readiness gaps and technical risks before Phase 3.',
    Stakeholder: 'Stakeholder view — red readiness items are blockers for Phase 3 and need owner action.',
  },
  readiness: {
    Tech: 'Tech view — review readiness by phase to confirm what blocks progression to the live experiment.',
    Stakeholder: 'Stakeholder view — focus on operational readiness gaps that still need owner alignment.',
    Design: 'Design view — track design readiness items mapped to Phase 1 and Phase 2.',
  },
  metrics: {
    Stakeholder: 'Stakeholder view — these metrics define what success looks like. None are yet agreed.',
    Product: 'Product view — metrics need to be validated and agreed before Phase 2 concludes.',
    Tech: 'Tech view — note the analytics tracking dependencies listed in the metric notes.',
  },
  workstreams: {
    Product: 'Product view — cross-functional dependencies are visible here. Note what is blocking each stream.',
    Stakeholder: 'Stakeholder view — the stakeholder engagement workstream is most relevant here.',
    Design: 'Design view — the game design workstream is partially blocked pending a decision.',
  },
}
