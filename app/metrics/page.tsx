'use client'

import { useState } from 'react'
import { metrics } from '@/data/metrics'
import { MetricCard } from '@/components/MetricCard'
import { PageHeader } from '@/components/ui/PageHeader'
import type { MetricPhase, MetricStatus } from '@/types'
import { cn } from '@/lib/utils'

type MetricFilter = MetricStatus | 'All'
type PhaseFilter = MetricPhase | 'All'

const filters: { label: string; value: MetricFilter }[] = [
  { label: 'All', value: 'All' },
  { label: 'Proposed', value: 'proposed' },
  { label: 'Validated', value: 'validated' },
  { label: 'Blocked', value: 'blocked' },
]

const phaseFilters: { label: string; value: PhaseFilter }[] = [
  { label: 'All', value: 'All' },
  { label: 'Phase 3', value: 'Phase 3' },
  { label: 'Phase 4', value: 'Phase 4' },
]

export default function MetricsPage() {
  const [statusFilter, setStatusFilter] = useState<MetricFilter>('All')
  const [phaseFilter, setPhaseFilter] = useState<PhaseFilter>('All')

  const filtered = metrics.filter((m) => {
    const matchesStatus = statusFilter === 'All' || m.status === statusFilter
    const matchesPhase = phaseFilter === 'All' || m.phase === phaseFilter
    return matchesStatus && matchesPhase
  })

  const statusCounts: Record<MetricStatus, number> = {
    proposed:  metrics.filter((m) => m.status === 'proposed').length,
    validated: metrics.filter((m) => m.status === 'validated').length,
    blocked:   metrics.filter((m) => m.status === 'blocked').length,
  }

  const phaseCounts: Record<MetricPhase, number> = {
    'Phase 3': metrics.filter((m) => m.phase === 'Phase 3').length,
    'Phase 4': metrics.filter((m) => m.phase === 'Phase 4').length,
  }

  return (
    <div className="max-w-5xl">
      <PageHeader
        title="Metrics"
        meta="Measurement framework"
        description="This is a metrics definition page — not a live analytics dashboard. It documents what the team intends to measure and why, so that success criteria are explicit before the experiment begins."
      />

      {/* Filters */}
      <div className="flex items-center gap-3 mb-6 flex-wrap">
        <div className="flex items-center bg-slate-100 rounded-lg p-0.5 gap-0.5">
          {filters.map((f) => {
            const count = f.value === 'All' ? metrics.length : statusCounts[f.value as MetricStatus]
            return (
              <button
                key={f.value}
                onClick={() => setStatusFilter(f.value)}
                className={cn(
                  'px-3 py-1.5 rounded-md text-xs font-medium transition-all flex items-center gap-1.5',
                  statusFilter === f.value
                    ? 'bg-white text-slate-900 shadow-sm'
                    : 'text-slate-500 hover:text-slate-700',
                )}
              >
                {f.label}
                <span className="text-xs text-slate-400">{count}</span>
              </button>
            )
          })}
        </div>
        <div className="flex items-center bg-slate-100 rounded-lg p-0.5 gap-0.5">
          {phaseFilters.map((f) => {
            const count = f.value === 'All' ? metrics.length : phaseCounts[f.value as MetricPhase]
            return (
              <button
                key={f.value}
                onClick={() => setPhaseFilter(f.value)}
                className={cn(
                  'px-3 py-1.5 rounded-md text-xs font-medium transition-all flex items-center gap-1.5',
                  phaseFilter === f.value
                    ? 'bg-white text-slate-900 shadow-sm'
                    : 'text-slate-500 hover:text-slate-700',
                )}
              >
                {f.label}
                <span className="text-xs text-slate-400">{count}</span>
              </button>
            )
          })}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filtered.map((metric) => (
          <MetricCard key={metric.id} metric={metric} />
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="text-center py-16 text-slate-400">
          <p className="text-sm">No metrics match this filter.</p>
        </div>
      )}
    </div>
  )
}
