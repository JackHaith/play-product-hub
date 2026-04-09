import type { Risk } from '@/types'
import Link from 'next/link'
import { StatusBadge } from '@/components/ui/StatusBadge'
import { phases } from '@/data/phases'
import { severityConfig } from '@/lib/utils'

interface RiskCardProps {
  risk: Risk
}

export function RiskCard({ risk }: RiskCardProps) {
  const severityCfg = severityConfig[risk.severity]
  const likelihoodCfg = severityConfig[risk.likelihood]
  const phaseNumber = Number(risk.relatedPhase.replace('Phase ', ''))
  const phase = phases.find((p) => p.number === phaseNumber)
  const phaseLabel = phase ? `${risk.relatedPhase} - ${phase.title}` : risk.relatedPhase
  const phaseHref = phase ? `/phases#${phase.id}` : '/phases'

  return (
    <div className="bg-white rounded-xl border border-slate-200 p-5">
      <div className="flex items-start justify-between gap-4 mb-2">
        <div className="flex-1 min-w-0">
          <h3 className="text-sm font-semibold text-slate-900 leading-snug">
            {risk.title}
          </h3>
          <Link
            href={phaseHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex text-xs text-brand-700 hover:text-brand-800 hover:underline mt-1"
          >
            {phaseLabel}
          </Link>
        </div>
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
    </div>
  )
}
