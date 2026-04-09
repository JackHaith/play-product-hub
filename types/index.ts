export type PhaseStatus = 'not-started' | 'in-progress' | 'complete' | 'planned'
export type DecisionStatus = 'Open' | 'Recommended' | 'Decided' | 'Revisit'
export type RiskSeverity = 'Low' | 'Medium' | 'High'
export type RiskLikelihood = 'Low' | 'Medium' | 'High'
export type ReadinessStatus = 'Red' | 'Amber' | 'Green'
export type MetricStatus = 'proposed' | 'validated' | 'blocked'
export type WorkstreamStatus = 'active' | 'planned' | 'blocked'
export type ViewType = 'Product' | 'Design' | 'Tech' | 'Stakeholder'
export type Audience = ViewType | 'All'
export type SystemCategory = 'content' | 'analytics' | 'infrastructure' | 'tooling'

export interface Phase {
  id: string
  number: number
  title: string
  summary: string
  objective: string
  status: PhaseStatus
  capabilities: string[]
  activities: string[]
  considerations: string[]
  exitCriteria: string[]
  linkedDecisions: string[]
  linkedRisks: string[]
  audience?: Audience[]
}

export interface DecisionOption {
  id: string
  title: string
  context: string
  rationale: string
  benefits: string[]
  risks: string[]
}

export interface Decision {
  id: string
  title: string
  status: DecisionStatus
  owner: string
  relatedPhase: string
  whyItMatters: string
  recommendation?: string
  options?: DecisionOption[]
  stakeholderQuestions: string[]
  audience?: Audience[]
}

export interface Risk {
  id: string
  title: string
  description: string
  severity: RiskSeverity
  likelihood: RiskLikelihood
  mitigation: string
  relatedPhase: string
  audience?: Audience[]
}

export interface ReadinessCheck {
  id: string
  title: string
  description: string
  status: ReadinessStatus
  notes?: string
  audience?: Audience[]
}

export interface Metric {
  id: string
  name: string
  whyItMatters: string
  status: MetricStatus
  relatedPhase: string
  notes?: string
  audience?: Audience[]
}

export interface Workstream {
  id: string
  name: string
  owner: string
  currentFocus: string
  dependencies: string[]
  risksBlockers: string[]
  nextSteps: string[]
  status: WorkstreamStatus
  audience?: Audience[]
}

export interface JourneyStep {
  id: string
  title: string
  description: string
  audience?: Audience[]
}

export interface SystemItem {
  id: string
  name: string
  description: string
  category: SystemCategory
  audience?: Audience[]
}

export interface ServiceMap {
  userJourney: JourneyStep[]
  operationalJourney: JourneyStep[]
  systems: SystemItem[]
}

export type TeamGroup = 'BBC Trio' | 'Hippo Delivery Team'

export interface TeamMember {
  id: string
  name: string
  roleTitle: string
  group: TeamGroup
  profileImage: string
  projectRole: string
  responsibilities: string[]
}
