import type { Metric } from '@/types'
import { StatusBadge } from '@/components/ui/StatusBadge'
import { metricStatusConfig } from '@/lib/utils'

interface MetricCardProps {
  metric: Metric
}

export function MetricCard({ metric }: MetricCardProps) {
  const statusCfg = metricStatusConfig[metric.status]

  return (
    <div className="bg-white rounded-xl border border-slate-200 p-5 flex flex-col">
      <div className="flex items-start justify-between gap-3 mb-2.5">
        <h3 className="text-sm font-semibold text-slate-900 leading-snug">{metric.name}</h3>
        <StatusBadge
          label={metric.status}
          bg={statusCfg.bg}
          text={statusCfg.text}
          size="sm"
        />
      </div>

      <p className="text-sm text-slate-600 leading-relaxed flex-1">{metric.whyItMatters}</p>

      <div className="mt-3 pt-3 border-t border-slate-100 flex items-start justify-between gap-2">
        <span className="text-xs text-slate-400">{metric.relatedPhase}</span>
      </div>

      {metric.notes && (
        <p className="mt-2 text-xs text-slate-500 italic leading-relaxed">{metric.notes}</p>
      )}
    </div>
  )
}
