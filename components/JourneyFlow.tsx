import type { JourneyStep } from '@/types'

interface JourneyFlowProps {
  steps: JourneyStep[]
  variant?: 'user' | 'operational'
}

const variantStyles = {
  user: {
    card: 'bg-brand-50 border-brand-100',
    num: 'text-brand-400',
  },
  operational: {
    card: 'bg-slate-50 border-slate-200',
    num: 'text-slate-400',
  },
}

export function JourneyFlow({ steps, variant = 'user' }: JourneyFlowProps) {
  const styles = variantStyles[variant]

  return (
    <div className="overflow-x-auto -mx-1 px-1 pb-3">
      <div className="flex items-stretch gap-0 min-w-max">
        {steps.map((step, index) => (
          <div key={step.id} className="flex items-stretch">
            <div
              className={`rounded-xl border p-3.5 w-44 flex flex-col ${styles.card}`}
            >
              <p className={`text-xs font-mono font-semibold mb-1.5 ${styles.num}`}>
                {String(index + 1).padStart(2, '0')}
              </p>
              <p className="text-sm font-semibold text-slate-800 mb-1 leading-tight">
                {step.title}
              </p>
              <p className="text-xs text-slate-500 leading-relaxed flex-1">
                {step.description}
              </p>
            </div>
            {index < steps.length - 1 && (
              <div className="flex items-center px-2 flex-shrink-0">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  className="text-slate-300"
                >
                  <path
                    d="M3 8h10M9 4l4 4-4 4"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
