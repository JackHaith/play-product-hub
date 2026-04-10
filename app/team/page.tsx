'use client'

import { PageHeader } from '@/components/ui/PageHeader'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { RaciMatrix } from '@/components/RaciMatrix'
import { TeamMemberCard } from '@/components/TeamMemberCard'
import { bbcTrio, hippoDeliveryTeam } from '@/data/team'
import { useView } from '@/context/ViewContext'
import { filterByView } from '@/lib/audience'

export default function TeamPage() {
  const { view } = useView()
  const visibleBbcTrio = filterByView(bbcTrio, view)
  const visibleHippoDeliveryTeam = filterByView(hippoDeliveryTeam, view)

  return (
    <div className="max-w-6xl">
      <PageHeader
        title="Team"
        meta="Project structure and ownership"
        description="Project team structure, governance, and responsibilities across BBC and Hippo."
      />

      <div className="space-y-10">
        {/* BBC Trio */}
        <section>
          <SectionHeading title="BBC Trio" count={visibleBbcTrio.length} />
          <p className="text-sm text-slate-600 leading-relaxed mb-4">
            Strategic leadership and decision-making group responsible for product direction,
            experiment approval, and major delivery decisions.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
            {visibleBbcTrio.map((member) => (
              <TeamMemberCard key={member.id} member={member} />
            ))}
          </div>
        </section>

        {/* Hippo Delivery Team */}
        <section>
          <SectionHeading title="Hippo Delivery Team" count={visibleHippoDeliveryTeam.length} />
          <p className="text-sm text-slate-600 leading-relaxed mb-4">
            Cross-functional delivery team responsible for execution, design, engineering,
            service operations, and implementation.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
            {visibleHippoDeliveryTeam.map((member) => (
              <TeamMemberCard key={member.id} member={member} />
            ))}
          </div>
        </section>

        {/* RACI matrix */}
        <section>
          <SectionHeading
            title="RACI matrix"
            description="Responsibility and accountability across workstreams and team members (R = deliver, A = owns outcome, C = consulted, I = informed)."
          />
          <RaciMatrix />
        </section>

        {/* Decision-making model */}
        <section>
          <SectionHeading
            title="Decision-making model"
            description="How strategic, delivery, and implementation decisions are handled."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white rounded-xl border border-slate-200 p-4">
              <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1.5">
                Strategic decisions
              </p>
              <p className="text-sm text-slate-700">Owned by BBC Trio.</p>
            </div>
            <div className="bg-white rounded-xl border border-slate-200 p-4">
              <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1.5">
                Delivery recommendations
              </p>
              <p className="text-sm text-slate-700">Prepared by Hippo Team.</p>
            </div>
            <div className="bg-white rounded-xl border border-slate-200 p-4">
              <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1.5">
                Implementation decisions
              </p>
              <p className="text-sm text-slate-700">
                Led by Delivery / Engineering / Design with Trio oversight where needed.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
