import type {
  DecisionStatus,
  PhaseStatus,
  ReadinessStatus,
  RiskSeverity,
  MetricStatus,
  WorkstreamStatus,
} from '@/types'

export function cn(...classes: (string | undefined | false | null)[]): string {
  return classes.filter(Boolean).join(' ')
}

export const phaseStatusConfig: Record<PhaseStatus, { label: string; bg: string; text: string }> = {
  'not-started': { label: 'Not Started', bg: 'bg-slate-100', text: 'text-slate-600' },
  'in-progress': { label: 'In Progress', bg: 'bg-brand-50', text: 'text-brand-700' },
  'complete':    { label: 'Complete',    bg: 'bg-emerald-50', text: 'text-emerald-700' },
  'planned':     { label: 'Planned',     bg: 'bg-brand-100',  text: 'text-brand-800' },
}

export const decisionStatusConfig: Record<DecisionStatus, { bg: string; text: string }> = {
  Open:        { bg: 'bg-blue-50',    text: 'text-blue-700' },
  Recommended: { bg: 'bg-brand-100',  text: 'text-brand-800' },
  Decided:     { bg: 'bg-emerald-50', text: 'text-emerald-700' },
  Revisit:     { bg: 'bg-amber-50',   text: 'text-amber-700' },
}

export const readinessStatusConfig: Record<ReadinessStatus, { bg: string; text: string; dot: string; border: string }> = {
  Green: { bg: 'bg-brand-100', text: 'text-brand-800', dot: 'bg-brand-600', border: 'border-brand-200' },
  Amber: { bg: 'bg-brand-50',  text: 'text-brand-700', dot: 'bg-brand-400', border: 'border-brand-100' },
  Red:   { bg: 'bg-slate-50',  text: 'text-slate-600', dot: 'bg-slate-400', border: 'border-slate-200' },
}

export const severityConfig: Record<RiskSeverity, { bg: string; text: string }> = {
  Low:    { bg: 'bg-slate-100', text: 'text-slate-600' },
  Medium: { bg: 'bg-amber-50',  text: 'text-amber-700' },
  High:   { bg: 'bg-red-50',    text: 'text-red-700' },
}

export const metricStatusConfig: Record<MetricStatus, { bg: string; text: string }> = {
  proposed:  { bg: 'bg-blue-50',    text: 'text-blue-700' },
  validated: { bg: 'bg-emerald-50', text: 'text-emerald-700' },
  blocked:   { bg: 'bg-red-50',     text: 'text-red-700' },
}

export const workstreamStatusConfig: Record<WorkstreamStatus, { bg: string; text: string }> = {
  active:  { bg: 'bg-brand-50', text: 'text-brand-700' },
  planned: { bg: 'bg-slate-100', text: 'text-slate-600' },
  blocked: { bg: 'bg-red-50',    text: 'text-red-700' },
}
