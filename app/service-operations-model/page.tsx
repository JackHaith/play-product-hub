import { PageHeader } from '@/components/ui/PageHeader'
import { SectionHeading } from '@/components/ui/SectionHeading'

type SwimlaneKey = 'frontstage' | 'backstage' | 'technicalSystems' | 'dataAnalytics'

interface PhaseContent {
  title: string
  swimlanes: Record<SwimlaneKey, string[]>
  control: string[]
  risk?: string[]
  warning?: string
}

interface ModelSection {
  id: string
  title: string
  subtitle: string
  phases: PhaseContent[]
}

const swimlaneLabels: Record<SwimlaneKey, string> = {
  frontstage: 'Frontstage',
  backstage: 'Backstage (Editorial)',
  technicalSystems: 'Technical Systems',
  dataAnalytics: 'Data / Analytics',
}

const modelSections: ModelSection[] = [
  {
    id: 'embed-model',
    title: 'Section 1: Embed Model (AWS)',
    subtitle: 'AWS-hosted games embedded into BBC pages.',
    phases: [
      {
        title: 'Phase 1: Test (Private)',
        swimlanes: {
          frontstage: ['Game embedded in test page', 'Only internal users access'],
          backstage: ['Editorial not heavily involved', 'Internal coordination only'],
          technicalSystems: [
            'Game hosted on AWS',
            'Embedded via iframe / external embed',
            'Manual deploys by engineering',
          ],
          dataAnalytics: ['Basic tracking enabled', 'Used for validation'],
        },
        control: ['Engineering controls deploy path', 'Internal team controls visibility via test environment'],
      },
      {
        title: 'Phase 2: Low Volume Live',
        swimlanes: {
          frontstage: ['Game visible to limited audience'],
          backstage: ['Editorial aware but limited involvement'],
          technicalSystems: [
            'AWS hosted game',
            'Embed live on BBC page',
            'Kill switch available (game becomes non-routable)',
            'Content changes require engineering (code deploy)',
          ],
          dataAnalytics: ['Metrics actively monitored', 'Errors / performance tracked'],
        },
        control: ['Trio can trigger kill switch', 'Engineering required for fixes'],
        risk: ['Rollout control process is undefined before wider traffic expansion'],
        warning: 'Rollout control mechanism not yet defined',
      },
      {
        title: 'Phase 3: Full Live',
        swimlanes: {
          frontstage: ['Game available to full audience'],
          backstage: ['Standard editorial awareness'],
          technicalSystems: [
            'Stable AWS hosting',
            'Kill switch remains active',
            'Deployment pipeline required',
          ],
          dataAnalytics: ['Ongoing monitoring', 'Performance + engagement tracked'],
        },
        control: ['Trio retains full kill switch control', 'Engineering owns fixes'],
        risk: ['Operational dependency on engineering remains for all content fixes'],
      },
    ],
  },
  {
    id: 'article-model',
    title: 'Section 2: Article Model (Optimo)',
    subtitle: 'Game is managed directly inside BBC publishing workflows.',
    phases: [
      {
        title: 'Phase 1: Test (Private)',
        swimlanes: {
          frontstage: ['Game embedded in private article'],
          backstage: ['Editorial creates test article in Optimo'],
          technicalSystems: ['Game code inserted into BBC environment', 'Manual updates via Optimo'],
          dataAnalytics: ['Basic tracking validation'],
        },
        control: ['Trio and editorial coordinate publication decisions in Optimo'],
      },
      {
        title: 'Phase 2: Low Volume Live',
        swimlanes: {
          frontstage: ['Game visible in live article'],
          backstage: ['Editorial controls placement'],
          technicalSystems: [
            'Game embedded via Optimo',
            'No instant kill switch',
            'Removal requires article edit or takedown',
          ],
          dataAnalytics: ['Tracking active', 'Limited linkage validation'],
        },
        control: ['Trio decides', 'Editorial executes removal'],
        risk: ['Response to incidents depends on manual editorial intervention'],
        warning: 'No defined rollout control mechanism',
      },
      {
        title: 'Phase 3: Full Live',
        swimlanes: {
          frontstage: ['Game fully visible in article'],
          backstage: ['Editorial fully owns placement'],
          technicalSystems: ['Fully integrated into BBC system', 'Slower update cycle'],
          dataAnalytics: ['Full tracking expected'],
        },
        control: ['No instant kill switch', 'Dependent on editorial workflows'],
        risk: ['Recovery time is slower during live incidents without a direct kill switch'],
      },
    ],
  },
]

export default function ServiceOperationsModelPage() {
  return (
    <div className="max-w-[1280px]">
      <PageHeader
        title="Service & Operations Model"
        meta="Delivery and operational control"
        description="Comparison of how games are delivered, controlled, and monitored across the Embed model (AWS) and Article model (Optimo/BBC)."
      />

      <div className="flex flex-wrap items-center gap-2 mb-6">
        <span className="inline-flex items-center rounded-full bg-brand-50 px-2.5 py-1 text-xs font-medium text-brand-700">
          Control
        </span>
        <span className="inline-flex items-center rounded-full bg-amber-50 px-2.5 py-1 text-xs font-medium text-amber-800">
          Risk / Gap
        </span>
        <span className="inline-flex items-center rounded-full bg-red-50 px-2.5 py-1 text-xs font-medium text-red-700">
          Warning
        </span>
      </div>

      <div className="space-y-10">
        {modelSections.map((section) => (
          <section key={section.id}>
            <SectionHeading title={section.title} description={section.subtitle} />

            <div className="mt-4 overflow-x-auto">
              <div className="grid min-w-[960px] grid-cols-3 gap-4">
                {section.phases.map((phase) => (
                  <article key={phase.title} className="rounded-xl border border-slate-200 bg-white p-4">
                    <h3 className="text-sm font-semibold text-slate-900">{phase.title}</h3>

                    <div className="mt-3 space-y-3">
                      {(Object.keys(swimlaneLabels) as SwimlaneKey[]).map((lane) => (
                        <div key={lane} className="rounded-lg border border-slate-200 bg-slate-50/70 p-3">
                          <p className="text-xs font-semibold tracking-wide text-slate-500 uppercase">
                            {swimlaneLabels[lane]}
                          </p>
                          <ul className="mt-1.5 space-y-1.5">
                            {phase.swimlanes[lane].map((item) => (
                              <li key={item} className="flex items-start gap-2 text-xs text-slate-700">
                                <span className="mt-[5px] h-1.5 w-1.5 flex-shrink-0 rounded-full bg-slate-400" />
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}

                      <div className="rounded-lg border border-brand-200 bg-brand-50 p-3">
                        <p className="text-xs font-semibold tracking-wide text-brand-700 uppercase">Control</p>
                        <ul className="mt-1.5 space-y-1.5">
                          {phase.control.map((item) => (
                            <li key={item} className="flex items-start gap-2 text-xs text-brand-800">
                              <span className="mt-[5px] h-1.5 w-1.5 flex-shrink-0 rounded-full bg-brand-500" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {phase.risk && (
                        <div className="rounded-lg border border-amber-200 bg-amber-50 p-3">
                          <p className="text-xs font-semibold tracking-wide text-amber-800 uppercase">Risk</p>
                          <ul className="mt-1.5 space-y-1.5">
                            {phase.risk.map((item) => (
                              <li key={item} className="flex items-start gap-2 text-xs text-amber-900">
                                <span className="mt-[5px] h-1.5 w-1.5 flex-shrink-0 rounded-full bg-amber-500" />
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {phase.warning && (
                        <div className="rounded-lg border border-red-200 bg-red-50 p-3">
                          <p className="text-xs font-semibold tracking-wide text-red-700 uppercase">Warning</p>
                          <p className="mt-1 text-xs font-medium text-red-900">{phase.warning}</p>
                        </div>
                      )}
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </section>
        ))}
      </div>
    </div>
  )
}
