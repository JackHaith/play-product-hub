'use client'

import { useState } from 'react'
import type { Phase } from '@/types'
import { StatusBadge } from '@/components/ui/StatusBadge'
import { phaseStatusConfig } from '@/lib/utils'

interface PhaseCardProps {
  phase: Phase
  defaultExpanded?: boolean
}

export function PhaseCard({ phase, defaultExpanded = false }: PhaseCardProps) {
  const [expanded, setExpanded] = useState(defaultExpanded)
  const statusCfg = phaseStatusConfig[phase.status]

  return (
    <div className="bg-white rounded-xl border border-slate-200 overflow-hidden">
      <button
        className="w-full flex items-start gap-4 p-5 hover:bg-slate-50 transition-colors text-left"
        onClick={() => setExpanded(!expanded)}
      >
        <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-slate-100 flex items-center justify-center text-sm font-semibold text-slate-600">
          {phase.number}
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-3 flex-wrap mb-1">
            <h3 className="text-sm font-semibold text-slate-900">{phase.title}</h3>
            <StatusBadge
              label={statusCfg.label}
              bg={statusCfg.bg}
              text={statusCfg.text}
              size="sm"
            />
          </div>
          <p className="text-sm text-slate-500 leading-relaxed">{phase.summary}</p>
        </div>
        <div className="flex-shrink-0 text-slate-300 text-sm mt-0.5">
          {expanded ? '↑' : '↓'}
        </div>
      </button>

      {expanded && (
        <div className="border-t border-slate-100 px-5 pb-6 pt-5 space-y-5">
          <div>
            <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
              Objective
            </p>
            <p className="text-sm text-slate-700 leading-relaxed">{phase.objective}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
              <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
                Required capabilities
              </p>
              <ul className="space-y-1.5">
                {phase.capabilities.map((cap, i) => (
                  <li key={i} className="text-sm text-slate-600 flex gap-2">
                    <span className="text-slate-300 flex-shrink-0 mt-0.5">—</span>
                    <span>{cap}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
                Key activities
              </p>
              <ul className="space-y-1.5">
                {phase.activities.map((act, i) => (
                  <li key={i} className="text-sm text-slate-600 flex gap-2">
                    <span className="text-slate-300 flex-shrink-0 mt-0.5">—</span>
                    <span>{act}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {phase.considerations.length > 0 && (
            <div>
              <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
                Considerations
              </p>
              <ul className="space-y-2">
                {phase.considerations.map((c, i) => (
                  <li
                    key={i}
                    className="text-sm text-amber-800 bg-amber-50 rounded-lg px-3 py-2 flex gap-2.5 border border-amber-100"
                  >
                    <span className="flex-shrink-0 text-amber-400">!</span>
                    <span>{c}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div>
            <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
              Exit criteria
            </p>
            <ul className="space-y-1.5">
              {phase.exitCriteria.map((ec, i) => (
                <li key={i} className="text-sm text-slate-600 flex gap-2">
                  <span className="text-emerald-500 flex-shrink-0 mt-0.5">✓</span>
                  <span>{ec}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  )
}
