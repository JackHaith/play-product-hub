import type { Workstream } from '@/types'
import { StatusBadge } from '@/components/ui/StatusBadge'
import { workstreamStatusConfig } from '@/lib/utils'

interface WorkstreamCardProps {
  workstream: Workstream
}

export function WorkstreamCard({ workstream }: WorkstreamCardProps) {
  const statusCfg = workstreamStatusConfig[workstream.status]

  return (
    <div className="bg-white rounded-xl border border-slate-200 p-5">
      <div className="flex items-start justify-between gap-3 mb-4">
        <div>
          <h3 className="text-sm font-semibold text-slate-900">{workstream.name}</h3>
          <p className="text-xs text-slate-400 mt-0.5">Owner: {workstream.owner}</p>
        </div>
        <StatusBadge
          label={workstream.status}
          bg={statusCfg.bg}
          text={statusCfg.text}
          size="sm"
        />
      </div>

      <div className="mb-4">
        <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1.5">
          Current focus
        </p>
        <p className="text-sm text-slate-700 leading-relaxed">{workstream.currentFocus}</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-slate-100">
        <div>
          <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
            Dependencies
          </p>
          <ul className="space-y-1.5">
            {workstream.dependencies.map((dep, i) => (
              <li key={i} className="text-xs text-slate-600 flex gap-1.5">
                <span className="text-slate-300 flex-shrink-0 mt-0.5">—</span>
                <span>{dep}</span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-xs font-semibold text-red-500 uppercase tracking-wider mb-2">
            Risks / blockers
          </p>
          <ul className="space-y-1.5">
            {workstream.risksBlockers.map((risk, i) => (
              <li key={i} className="text-xs text-slate-600 flex gap-1.5">
                <span className="text-red-300 flex-shrink-0 mt-0.5">!</span>
                <span>{risk}</span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-xs font-semibold text-brand-500 uppercase tracking-wider mb-2">
            Next steps
          </p>
          <ul className="space-y-1.5">
            {workstream.nextSteps.map((step, i) => (
              <li key={i} className="text-xs text-slate-600 flex gap-1.5">
                <span className="text-brand-300 flex-shrink-0 mt-0.5">→</span>
                <span>{step}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
