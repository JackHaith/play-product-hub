import type { ReadinessCheck } from '@/types'
import { readinessStatusConfig } from '@/lib/utils'

interface ReadinessCardProps {
  check: ReadinessCheck
}

const readinessStatusLabel: Record<ReadinessCheck['status'], string> = {
  Green: 'Completed',
  Amber: 'In progress',
  Red: 'Not started',
}

export function ReadinessCard({ check }: ReadinessCardProps) {
  const statusCfg = readinessStatusConfig[check.status]

  return (
    <div className={`rounded-xl border p-4 ${statusCfg.bg} ${statusCfg.border}`}>
      <div className="flex items-start justify-between gap-2 mb-2">
        <h3 className="text-sm font-semibold text-slate-800 leading-snug">{check.title}</h3>
        <span
          className={`flex-shrink-0 inline-flex items-center gap-1.5 rounded-full px-2 py-0.5 text-xs font-medium ${statusCfg.text}`}
        >
          <span className={`w-2 h-2 rounded-full ${statusCfg.dot}`} />
          {readinessStatusLabel[check.status]}
        </span>
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
