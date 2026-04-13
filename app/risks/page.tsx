'use client'

import { useState } from 'react'
import { risks } from '@/risk-log'
import { RiskCard } from '@/components/RiskCard'
import { PageHeader } from '@/components/ui/PageHeader'
import { SectionHeading } from '@/components/ui/SectionHeading'
import type { RiskSeverity } from '@/types'
import { cn } from '@/lib/utils'
import { useView } from '@/context/ViewContext'
import { filterByView } from '@/lib/audience'

type RiskFilter = RiskSeverity | 'All'

export default function RisksPage() {
  const { view } = useView()
  const [riskFilter, setRiskFilter] = useState<RiskFilter>('All')
  const severityPriority: Record<RiskSeverity, number> = {
    High: 0,
    Medium: 1,
    Low: 2,
  }
  const visibleRisks = filterByView(risks, view)

  const filteredRisks =
    riskFilter === 'All'
      ? [...visibleRisks].sort((a, b) => {
          const bySeverity = severityPriority[a.severity] - severityPriority[b.severity]
          if (bySeverity !== 0) return bySeverity
          return a.id.localeCompare(b.id)
        })
      : visibleRisks.filter((r) => r.severity === riskFilter)
  const riskCounts: Record<RiskSeverity, number> = {
    High:   visibleRisks.filter((r) => r.severity === 'High').length,
    Medium: visibleRisks.filter((r) => r.severity === 'Medium').length,
    Low:    visibleRisks.filter((r) => r.severity === 'Low').length,
  }

  return (
    <div className="max-w-5xl">
      <PageHeader
        title="Risks"
        meta="Risk view"
        description="Tracks known project risks, with severity, likelihood, and mitigation coverage before the live experiment."
      />

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
                f === 'All' ? visibleRisks.length : riskCounts[f as RiskSeverity]
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
