import { phases } from '@/data/phases'
import { PageHeader } from '@/components/ui/PageHeader'
import { PhaseCard } from '@/components/PhaseCard'
import { phaseStatusConfig } from '@/lib/utils'

export default function PhasesPage() {
  const statusCounts = {
    complete: phases.filter((p) => p.status === 'complete').length,
    inProgress: phases.filter((p) => p.status === 'in-progress').length,
    planned: phases.filter((p) => p.status === 'planned').length,
    notStarted: phases.filter((p) => p.status === 'not-started').length,
  }

  return (
    <div className="max-w-4xl">
      <PageHeader
        title="Phases"
        meta="Project structure"
        description="The project is structured into four sequential phases, each with specific objectives, required capabilities, and exit criteria. Click any phase to expand the full detail."
      />

      {/* Phase status summary */}
      <div className="flex items-center gap-3 flex-wrap mb-6">
        {(
          [
            { count: statusCounts.inProgress, cfg: phaseStatusConfig['in-progress'] },
            { count: statusCounts.planned,    cfg: phaseStatusConfig['planned'] },
            { count: statusCounts.notStarted, cfg: phaseStatusConfig['not-started'] },
            { count: statusCounts.complete,   cfg: phaseStatusConfig['complete'] },
          ]
        ).map((item) => (
          <div
            key={item.cfg.label}
            className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-medium ${item.cfg.bg} ${item.cfg.text}`}
          >
            <span>{item.count}</span>
            <span>{item.cfg.label}</span>
          </div>
        ))}
      </div>

      <div className="space-y-3">
        {phases.map((phase, index) => (
          <PhaseCard
            key={phase.id}
            phase={phase}
            defaultExpanded={index === 0}
          />
        ))}
      </div>
    </div>
  )
}
