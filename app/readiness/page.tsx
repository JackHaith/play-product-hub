'use client'

import { useState } from 'react'
import { readinessChecks } from '@/data/readiness'
import { ReadinessCard } from '@/components/ReadinessCard'
import { PageHeader } from '@/components/ui/PageHeader'
import { SectionHeading } from '@/components/ui/SectionHeading'
import type { ReadinessPhase, ReadinessStatus } from '@/types'
import { cn } from '@/lib/utils'
import { useView } from '@/context/ViewContext'
import { filterByView } from '@/lib/audience'

type ReadinessPhaseFilter = ReadinessPhase | 'All'
type ReadinessStatusFilter = ReadinessStatus | 'All'

export default function ReadinessPage() {
  const { view } = useView()
  const [phaseFilter, setPhaseFilter] = useState<ReadinessPhaseFilter>('All')
  const [statusFilter, setStatusFilter] = useState<ReadinessStatusFilter>('All')
  const visibleReadinessChecks = filterByView(readinessChecks, view)

  const filteredReadiness = visibleReadinessChecks.filter((check) => {
    const matchesPhase = phaseFilter === 'All' || check.phase === phaseFilter
    const matchesStatus = statusFilter === 'All' || check.status === statusFilter
    return matchesPhase && matchesStatus
  })

  return (
    <div className="max-w-5xl">
      <PageHeader
        title="Readiness"
        meta="Operational readiness dashboard"
        description="Track operational, technical, and design readiness by status and phase before scaling the experiment."
      />

      <section>
        <div className="flex items-start justify-between gap-4 mb-4 flex-wrap">
          <SectionHeading
            title="Readiness checks"
            description="Each item reflects a capability required to progress safely through the project phases."
            count={filteredReadiness.length}
          />
        </div>

        <div className="flex flex-wrap items-center gap-2 mb-4">
          <div className="flex items-center bg-slate-100 rounded-lg p-0.5 gap-0.5">
            {(['All', 'Phase 1', 'Phase 2', 'Phase 3', 'Phase 4'] as ReadinessPhaseFilter[]).map((f) => {
              return (
                <button
                  key={f}
                  onClick={() => setPhaseFilter(f)}
                  className={cn(
                    'px-3 py-1.5 rounded-md text-xs font-medium transition-all flex items-center gap-1.5',
                    phaseFilter === f
                      ? 'bg-white text-slate-900 shadow-sm'
                      : 'text-slate-500 hover:text-slate-700',
                  )}
                >
                  {f}
                </button>
              )
            })}
          </div>

          <div className="flex items-center bg-slate-100 rounded-lg p-0.5 gap-0.5">
            {(['All', 'Not started', 'In progress', 'Completed'] as ReadinessStatusFilter[]).map((f) => (
              <button
                key={f}
                onClick={() => setStatusFilter(f)}
                className={cn(
                  'px-3 py-1.5 rounded-md text-xs font-medium transition-all',
                  statusFilter === f
                    ? 'bg-white text-slate-900 shadow-sm'
                    : 'text-slate-500 hover:text-slate-700',
                )}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          {filteredReadiness.map((check) => (
            <ReadinessCard key={check.id} check={check} />
          ))}
        </div>
      </section>
    </div>
  )
}
