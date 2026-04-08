'use client'

import { useState } from 'react'
import { decisions } from '@/data/decisions'
import { DecisionCard } from '@/components/DecisionCard'
import { PageHeader } from '@/components/ui/PageHeader'
import type { DecisionStatus } from '@/types'
import { cn, decisionStatusConfig } from '@/lib/utils'

type FilterValue = DecisionStatus | 'All'

const statusFilters: { label: string; value: FilterValue }[] = [
  { label: 'All', value: 'All' },
  { label: 'Open', value: 'Open' },
  { label: 'Recommended', value: 'Recommended' },
  { label: 'Decided', value: 'Decided' },
  { label: 'Revisit', value: 'Revisit' },
]

export default function DecisionsPage() {
  const [activeFilter, setActiveFilter] = useState<FilterValue>('All')
  const [search, setSearch] = useState('')

  const filtered = decisions.filter((d) => {
    const matchesFilter = activeFilter === 'All' || d.status === activeFilter
    const q = search.toLowerCase()
    const matchesSearch =
      !q ||
      d.title.toLowerCase().includes(q) ||
      d.whyItMatters.toLowerCase().includes(q) ||
      d.owner.toLowerCase().includes(q)
    return matchesFilter && matchesSearch
  })

  const counts: Record<DecisionStatus, number> = {
    Open: decisions.filter((d) => d.status === 'Open').length,
    Recommended: decisions.filter((d) => d.status === 'Recommended').length,
    Decided: decisions.filter((d) => d.status === 'Decided').length,
    Revisit: decisions.filter((d) => d.status === 'Revisit').length,
  }

  return (
    <div className="max-w-4xl">
      <PageHeader
        title="Decisions"
        meta="Decision register"
        description="Key decisions that need to be made for the project to progress. Click any card to expand the full detail, including options, rationale, and stakeholder questions."
      />

      {/* Filters */}
      <div className="flex items-center gap-3 mb-6 flex-wrap">
        <div className="flex items-center bg-slate-100 rounded-lg p-0.5 gap-0.5">
          {statusFilters.map((filter) => {
            const count =
              filter.value === 'All'
                ? decisions.length
                : counts[filter.value as DecisionStatus]
            const statusCfg =
              filter.value !== 'All' ? decisionStatusConfig[filter.value as DecisionStatus] : null
            return (
              <button
                key={filter.value}
                onClick={() => setActiveFilter(filter.value)}
                className={cn(
                  'px-3 py-1.5 rounded-md text-xs font-medium transition-all flex items-center gap-1.5',
                  activeFilter === filter.value
                    ? 'bg-white text-slate-900 shadow-sm'
                    : 'text-slate-500 hover:text-slate-700',
                )}
              >
                {filter.value !== 'All' && statusCfg && activeFilter === filter.value && (
                  <span
                    className={`w-1.5 h-1.5 rounded-full ${statusCfg.text.replace('text-', 'bg-')}`}
                  />
                )}
                {filter.label}
                <span
                  className={cn(
                    'text-xs rounded-full px-1.5 py-0 min-w-[18px] text-center',
                    activeFilter === filter.value
                      ? 'bg-slate-100 text-slate-600'
                      : 'text-slate-400',
                  )}
                >
                  {count}
                </span>
              </button>
            )
          })}
        </div>

        <input
          type="text"
          placeholder="Search decisions…"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="px-3 py-1.5 text-sm border border-slate-200 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-brand-200 focus:border-brand-300 placeholder:text-slate-400 w-52"
        />
      </div>

      {filtered.length === 0 ? (
        <div className="text-center py-16 text-slate-400">
          <p className="text-sm">No decisions match your current filter.</p>
          <button
            onClick={() => { setActiveFilter('All'); setSearch('') }}
            className="mt-2 text-xs text-brand-600 hover:text-brand-700"
          >
            Clear filters
          </button>
        </div>
      ) : (
        <div className="space-y-3">
          {filtered.map((decision) => (
            <DecisionCard key={decision.id} decision={decision} />
          ))}
        </div>
      )}
    </div>
  )
}
