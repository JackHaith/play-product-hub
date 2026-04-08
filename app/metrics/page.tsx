'use client'

import { useState } from 'react'
import { metrics } from '@/data/metrics'
import { MetricCard } from '@/components/MetricCard'
import { PageHeader } from '@/components/ui/PageHeader'
import type { MetricStatus } from '@/types'
import { cn } from '@/lib/utils'

type MetricFilter = MetricStatus | 'All'

const filters: { label: string; value: MetricFilter }[] = [
  { label: 'All', value: 'All' },
  { label: 'Proposed', value: 'proposed' },
  { label: 'Validated', value: 'validated' },
  { label: 'Blocked', value: 'blocked' },
]

export default function MetricsPage() {
  const [filter, setFilter] = useState<MetricFilter>('All')

  const filtered =
    filter === 'All' ? metrics : metrics.filter((m) => m.status === filter)

  const counts: Record<MetricStatus, number> = {
    proposed:  metrics.filter((m) => m.status === 'proposed').length,
    validated: metrics.filter((m) => m.status === 'validated').length,
    blocked:   metrics.filter((m) => m.status === 'blocked').length,
  }

  return (
    <div className="max-w-5xl">
      <PageHeader
        title="Metrics"
        meta="Measurement framework"
        description="This is a metrics definition page — not a live analytics dashboard. It documents what the team intends to measure and why, so that success criteria are explicit before the experiment begins."
      />

      {/* Context note */}
      <div className="bg-brand-50 border border-brand-100 rounded-xl p-4 mb-6">
        <p className="text-sm text-brand-800 leading-relaxed">
          <span className="font-semibold">Status note:</span> All metrics are currently in
          &ldquo;proposed&rdquo; status. They need to be validated and agreed across product,
          editorial, and analytics teams before Phase 2 concludes — so that tracking can be set up
          and confirmed during private article testing.
        </p>
      </div>

      {/* Filters */}
      <div className="flex items-center gap-3 mb-6">
        <div className="flex items-center bg-slate-100 rounded-lg p-0.5 gap-0.5">
          {filters.map((f) => {
            const count = f.value === 'All' ? metrics.length : counts[f.value as MetricStatus]
            return (
              <button
                key={f.value}
                onClick={() => setFilter(f.value)}
                className={cn(
                  'px-3 py-1.5 rounded-md text-xs font-medium transition-all flex items-center gap-1.5',
                  filter === f.value
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
