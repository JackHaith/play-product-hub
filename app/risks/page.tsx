'use client'

import { useState } from 'react'
import { risks } from '@/risk-log'
import { readinessChecks } from '@/data/readiness'
import { RiskCard } from '@/components/RiskCard'
import { ReadinessCard } from '@/components/ReadinessCard'
import { PageHeader } from '@/components/ui/PageHeader'
import { SectionHeading } from '@/components/ui/SectionHeading'
import type { RiskSeverity, ReadinessStatus } from '@/types'
import { cn } from '@/lib/utils'

type RiskFilter = RiskSeverity | 'All'
type ReadinessFilter = ReadinessStatus | 'All'
const readinessStatusLabel: Record<ReadinessStatus, string> = {
  Green: 'Completed',
  Amber: 'In progress',
  Red: 'Not started',
}
const readinessStatusDotClass: Record<ReadinessStatus, string> = {
  Green: 'bg-brand-600',
  Amber: 'bg-brand-400',
  Red: 'bg-slate-400',
}

export default function RisksPage() {
  const [riskFilter, setRiskFilter] = useState<RiskFilter>('All')
  const [readinessFilter, setReadinessFilter] = useState<ReadinessFilter>('All')
  const severityPriority: Record<RiskSeverity, number> = {
    High: 0,
    Medium: 1,
    Low: 2,
  }

  const filteredRisks =
    riskFilter === 'All'
      ? [...risks].sort((a, b) => {
          const bySeverity = severityPriority[a.severity] - severityPriority[b.severity]
          if (bySeverity !== 0) return bySeverity
          return a.id.localeCompare(b.id)
        })
      : risks.filter((r) => r.severity === riskFilter)
  const filteredReadiness =
    readinessFilter === 'All'
      ? readinessChecks
      : readinessChecks.filter((r) => r.status === readinessFilter)

  const readinessCounts: Record<ReadinessStatus, number> = {
    Red:   readinessChecks.filter((r) => r.status === 'Red').length,
    Amber: readinessChecks.filter((r) => r.status === 'Amber').length,
    Green: readinessChecks.filter((r) => r.status === 'Green').length,
  }
  const riskCounts: Record<RiskSeverity, number> = {
    High:   risks.filter((r) => r.severity === 'High').length,
    Medium: risks.filter((r) => r.severity === 'Medium').length,
    Low:    risks.filter((r) => r.severity === 'Low').length,
  }

  return (
    <div className="max-w-5xl">
      <PageHeader
        title="Risks & Readiness"
        meta="Risk and readiness view"
        description="Tracks known risks and operational readiness gaps that must be addressed before the project can progress safely into a live experiment."
      />

      {/* Readiness section */}
      <section className="mb-10">
        <div className="flex items-start justify-between gap-4 mb-4 flex-wrap">
          <SectionHeading
            title="Readiness checks"
            description="Operational and technical readiness across key capability areas."
            count={filteredReadiness.length}
          />
          <div className="flex items-center bg-slate-100 rounded-lg p-0.5 gap-0.5">
            {(['All', 'Green', 'Amber', 'Red'] as ReadinessFilter[]).map((f) => {
              const count =
                f === 'All'
                  ? readinessChecks.length
                  : readinessCounts[f as ReadinessStatus]
              return (
                <button
                  key={f}
                  onClick={() => setReadinessFilter(f)}
                  className={cn(
                    'px-3 py-1.5 rounded-md text-xs font-medium transition-all flex items-center gap-1.5',
                    readinessFilter === f
                      ? 'bg-white text-slate-900 shadow-sm'
                      : 'text-slate-500 hover:text-slate-700',
                  )}
                >
                  {f !== 'All' && (
                    <span
                      className={cn(
                        'w-1.5 h-1.5 rounded-full',
                        readinessStatusDotClass[f as ReadinessStatus],
                      )}
                    />
                  )}
                  {f === 'All' ? 'All' : readinessStatusLabel[f as ReadinessStatus]}
                  <span className="text-xs text-slate-400">{count}</span>
                </button>
              )
            })}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          {filteredReadiness.map((check) => (
            <ReadinessCard key={check.id} check={check} />
          ))}
        </div>
      </section>

      {/* Risks section */}
      <section>
        <div className="flex items-start justify-between gap-4 mb-4 flex-wrap">
          <SectionHeading
            title="Risks"
            description="Known risks with their severity, likelihood, and current mitigation approach."
            count={filteredRisks.length}
          />
          <div className="flex items-center bg-slate-100 rounded-lg p-0.5 gap-0.5">
            {(['All', 'High', 'Medium', 'Low'] as RiskFilter[]).map((f) => {
              const count =
                f === 'All' ? risks.length : riskCounts[f as RiskSeverity]
              return (
                <button
                  key={f}
                  onClick={() => setRiskFilter(f)}
                  className={cn(
                    'px-3 py-1.5 rounded-md text-xs font-medium transition-all flex items-center gap-1.5',
                    riskFilter === f
                      ? 'bg-white text-slate-900 shadow-sm'
                      : 'text-slate-500 hover:text-slate-700',
                  )}
                >
                  {f}
                  <span className="text-xs text-slate-400">{count}</span>
                </button>
              )
            })}
          </div>
        </div>

        <div className="space-y-3">
          {filteredRisks.map((risk) => (
            <RiskCard key={risk.id} risk={risk} />
          ))}
        </div>
      </section>
    </div>
  )
}
