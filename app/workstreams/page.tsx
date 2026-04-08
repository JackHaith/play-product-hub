'use client'

import { workstreams } from '@/data/workstreams'
import { WorkstreamCard } from '@/components/WorkstreamCard'
import { PageHeader } from '@/components/ui/PageHeader'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { useView } from '@/context/ViewContext'
import { filterByView } from '@/lib/audience'

export default function WorkstreamsPage() {
  const { view } = useView()
  const visibleWorkstreams = filterByView(workstreams, view)
  const activeWorkstreams = visibleWorkstreams.filter((w) => w.status === 'active')
  const plannedWorkstreams = visibleWorkstreams.filter((w) => w.status === 'planned')
  const blockedWorkstreams = visibleWorkstreams.filter((w) => w.status === 'blocked')

  return (
    <div className="max-w-5xl">
      <PageHeader
        title="Workstreams"
        meta="Cross-functional coordination"
        description="The major workstreams running in parallel. This view makes cross-functional dependencies, blockers, and next steps visible in one place."
      />

      {visibleWorkstreams.length === 0 && (
        <div className="mb-8 rounded-xl border border-slate-200 bg-white p-6">
          <p className="text-sm text-slate-600">
            No workstreams are tagged for the <span className="font-semibold">{view}</span> view yet.
          </p>
        </div>
      )}

      {activeWorkstreams.length > 0 && (
        <section className="mb-8">
          <SectionHeading
            title="Active"
            count={activeWorkstreams.length}
          />
          <div className="space-y-4">
            {activeWorkstreams.map((ws) => (
              <WorkstreamCard key={ws.id} workstream={ws} />
            ))}
          </div>
        </section>
      )}

      {plannedWorkstreams.length > 0 && (
        <section className="mb-8">
          <SectionHeading
            title="Planned"
            description="Not yet active — pending decisions or dependencies."
            count={plannedWorkstreams.length}
          />
          <div className="space-y-4">
            {plannedWorkstreams.map((ws) => (
              <WorkstreamCard key={ws.id} workstream={ws} />
            ))}
          </div>
        </section>
      )}

      {blockedWorkstreams.length > 0 && (
        <section>
          <SectionHeading
            title="Blocked"
            description="Workstreams that cannot progress without resolution of a dependency or decision."
            count={blockedWorkstreams.length}
          />
          <div className="space-y-4">
            {blockedWorkstreams.map((ws) => (
              <WorkstreamCard key={ws.id} workstream={ws} />
            ))}
          </div>
        </section>
      )}
    </div>
  )
}
