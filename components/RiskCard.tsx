import type { Risk } from '@/types'
import { StatusBadge } from '@/components/ui/StatusBadge'
import { severityConfig } from '@/lib/utils'

interface RiskCardProps {
  risk: Risk
}

export function RiskCard({ risk }: RiskCardProps) {
  const severityCfg = severityConfig[risk.severity]
  const likelihoodCfg = severityConfig[risk.likelihood]

  return (
    <div className="bg-white rounded-xl border border-slate-200 p-5">
      <div className="flex items-start justify-between gap-4 mb-3">
        <h3 className="text-sm font-semibold text-slate-900 leading-snug flex-1">
          {risk.title}
        </h3>
        <div className="flex items-start gap-3 flex-shrink-0">
          <div className="text-right">
            <p className="text-xs text-slate-400 mb-1">Severity</p>
            <StatusBadge
              label={risk.severity}
              bg={severityCfg.bg}
              text={severityCfg.text}
              size="sm"
            />
          </div>
          <div className="text-right">
            <p className="text-xs text-slate-400 mb-1">Likelihood</p>
            <StatusBadge
              label={risk.likelihood}
              bg={likelihoodCfg.bg}
              text={likelihoodCfg.text}
              size="sm"
            />
          </div>
        </div>
      </div>

      <p className="text-sm text-slate-600 leading-relaxed mb-3">{risk.description}</p>

      <div className="bg-slate-50 rounded-lg px-3.5 py-3 border border-slate-100">
        <p className="text-xs font-semibold text-slate-500 mb-1">Mitigation</p>
        <p className="text-sm text-slate-700 leading-relaxed">{risk.mitigation}</p>
      </div>

      <p className="mt-3 text-xs text-slate-400">{risk.relatedPhase}</p>
    </div>
  )
}
