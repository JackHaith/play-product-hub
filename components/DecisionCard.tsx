'use client'

import { useState } from 'react'
import type { Decision } from '@/types'
import { StatusBadge } from '@/components/ui/StatusBadge'
import { decisionStatusConfig } from '@/lib/utils'

interface DecisionCardProps {
  decision: Decision
}

export function DecisionCard({ decision }: DecisionCardProps) {
  const [expanded, setExpanded] = useState(false)
  const statusCfg = decisionStatusConfig[decision.status]

  return (
    <div className="bg-white rounded-xl border border-slate-200 overflow-hidden">
      <button
        className="w-full p-5 hover:bg-slate-50 transition-colors text-left"
        onClick={() => setExpanded(!expanded)}
      >
        <div className="flex items-start justify-between gap-3">
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 flex-wrap mb-1.5">
              <StatusBadge
                label={decision.status}
                bg={statusCfg.bg}
                text={statusCfg.text}
                size="sm"
              />
              <span className="text-xs text-slate-400">{decision.relatedPhase}</span>
            </div>
            <h3 className="text-sm font-semibold text-slate-900">{decision.title}</h3>
            <p className="text-xs text-slate-400 mt-0.5">Owner: {decision.owner}</p>
          </div>
          <div className="flex-shrink-0 text-slate-300 text-sm mt-1">
            {expanded ? '↑' : '↓'}
          </div>
        </div>
        <p className="mt-2.5 text-sm text-slate-600 leading-relaxed">{decision.whyItMatters}</p>
      </button>

      {expanded && (
        <div className="border-t border-slate-100 px-5 pb-6 pt-5 space-y-5">
          {decision.recommendation && (
            <div className="bg-brand-50 border border-brand-100 rounded-xl p-4">
              <p className="text-xs font-semibold text-brand-500 uppercase tracking-wider mb-1.5">
                Recommendation
              </p>
              <p className="text-sm text-brand-900 leading-relaxed">{decision.recommendation}</p>
            </div>
          )}

          {decision.options && decision.options.length > 0 && (
            <div>
              <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">
                Options
              </p>
              <div className="space-y-3">
                {decision.options.map((option) => (
                  <div
                    key={option.id}
                    className="border border-slate-200 rounded-xl p-4 bg-slate-50/50"
                  >
                    <h4 className="text-sm font-semibold text-slate-800 mb-1">{option.title}</h4>
                    <p className="text-xs text-slate-500 mb-2 leading-relaxed">{option.context}</p>
                    <p className="text-xs text-slate-600 mb-3">
                      <span className="font-medium text-slate-700">Rationale:</span>{' '}
                      {option.rationale}
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <p className="text-xs font-semibold text-emerald-700 mb-1.5">Benefits</p>
                        <ul className="space-y-1">
                          {option.benefits.map((b, i) => (
                            <li key={i} className="text-xs text-slate-600 flex gap-1.5">
                              <span className="text-emerald-500 flex-shrink-0 mt-0.5">+</span>
                              <span>{b}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-red-600 mb-1.5">Risks</p>
                        <ul className="space-y-1">
                          {option.risks.map((r, i) => (
                            <li key={i} className="text-xs text-slate-600 flex gap-1.5">
                              <span className="text-red-400 flex-shrink-0 mt-0.5">−</span>
                              <span>{r}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {decision.stakeholderQuestions.length > 0 && (
            <div>
              <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
                Key questions for stakeholders
              </p>
              <ul className="space-y-2">
                {decision.stakeholderQuestions.map((q, i) => (
                  <li
                    key={i}
                    className="text-sm text-slate-700 bg-slate-50 rounded-lg px-3 py-2.5 flex gap-2.5 border border-slate-100"
                  >
                    <span className="text-slate-400 flex-shrink-0 font-mono text-xs mt-0.5">
                      Q{i + 1}
                    </span>
                    <span>{q}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}
    </div>
  )
}
