import type { ReadinessCheck } from '@/types'
import { readinessStatusConfig } from '@/lib/utils'

interface ReadinessCardProps {
  check: ReadinessCheck
}

export function ReadinessCard({ check }: ReadinessCardProps) {
  const statusCfg = readinessStatusConfig[check.status]

  return (
    <div className={`rounded-xl border p-4 ${statusCfg.bg} ${statusCfg.border}`}>
      <div className="flex items-start justify-between gap-2 mb-2">
        <h3 className="text-sm font-semibold text-slate-800 leading-snug">{check.title}</h3>
        <div className="flex-shrink-0 flex flex-col items-end gap-1">
          <span
            className={`inline-flex items-center gap-1.5 rounded-full px-2 py-0.5 text-xs font-medium ${statusCfg.text}`}
          >
            <span className={`w-2 h-2 rounded-full ${statusCfg.dot}`} />
            {check.status}
          </span>
          <span className="inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium bg-white/80 text-slate-600 border border-slate-200">
            {check.phase}
          </span>
        </div>
      </div>
      <p className="text-xs text-slate-600 leading-relaxed mb-2">{check.description}</p>

      {check.notes && (
        <p className="text-xs text-slate-500 italic border-t border-black/5 pt-2 mt-2">
          {check.notes}
        </p>
      )}
    </div>
  )
}
