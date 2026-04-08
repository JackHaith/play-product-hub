import { serviceMap } from '@/data/service-map'
import { PageHeader } from '@/components/ui/PageHeader'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { JourneyFlow } from '@/components/JourneyFlow'

const systemCategoryStyles: Record<
  string,
  { bg: string; text: string; border: string; label: string }
> = {
  content:        { bg: 'bg-brand-50',  text: 'text-brand-700',  border: 'border-brand-100',  label: 'Content' },
  analytics:      { bg: 'bg-brand-100', text: 'text-brand-800', border: 'border-brand-200', label: 'Analytics' },
  infrastructure: { bg: 'bg-slate-50',   text: 'text-slate-600',   border: 'border-slate-200',   label: 'Infrastructure' },
  tooling:        { bg: 'bg-emerald-50', text: 'text-emerald-700', border: 'border-emerald-100', label: 'Tooling' },
}

export default function ServiceMapPage() {
  return (
    <div className="max-w-5xl">
      <PageHeader
        title="Service Map"
        meta="End-to-end view"
        description="The service from the user's perspective, the operational journey behind it, and the systems involved. Read left-to-right in each section."
      />

      <div className="space-y-10">
        {/* User Journey */}
        <section>
          <SectionHeading
            title="User journey"
            description="How a user encounters and interacts with an embedded game in a BBC article."
            count={serviceMap.userJourney.length}
          />
          <JourneyFlow steps={serviceMap.userJourney} variant="user" />
        </section>

        <div className="border-t border-slate-100" />

        {/* Operational Journey */}
        <section>
          <SectionHeading
            title="Operational journey"
            description="The behind-the-scenes steps the team takes to select, prepare, publish, and manage the embedded game."
            count={serviceMap.operationalJourney.length}
          />
          <JourneyFlow steps={serviceMap.operationalJourney} variant="operational" />
        </section>

        <div className="border-t border-slate-100" />

        {/* Systems */}
        <section>
          <SectionHeading
            title="Systems involved"
            description="The key systems, tools, and environments that make up the end-to-end service."
            count={serviceMap.systems.length}
          />

          {/* Category legend */}
          <div className="flex items-center gap-2 flex-wrap mb-4">
            {Object.entries(systemCategoryStyles).map(([key, styles]) => (
              <span
                key={key}
                className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium ${styles.bg} ${styles.text}`}
              >
                {styles.label}
              </span>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {serviceMap.systems.map((system) => {
              const styles = systemCategoryStyles[system.category] ?? systemCategoryStyles.tooling
              return (
                <div
                  key={system.id}
                  className={`rounded-xl border p-4 ${styles.bg} ${styles.border}`}
                >
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <h3 className="text-sm font-semibold text-slate-800 leading-snug">
                      {system.name}
                    </h3>
                    <span
                      className={`flex-shrink-0 text-xs font-medium px-2 py-0.5 rounded-full ${styles.text}`}
                    >
                      {styles.label}
                    </span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">{system.description}</p>
                </div>
              )
            })}
          </div>
        </section>
      </div>
    </div>
  )
}
