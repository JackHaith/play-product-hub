import type { ReactNode } from 'react'

interface PageHeaderProps {
  title: string
  description?: string
  actions?: ReactNode
  meta?: string
}

export function PageHeader({ title, description, actions, meta }: PageHeaderProps) {
  return (
    <div className="flex items-start justify-between gap-4 mb-8">
      <div>
        {meta && (
          <p className="text-xs font-medium text-slate-400 uppercase tracking-wider mb-1.5">
            {meta}
          </p>
        )}
        <h1 className="text-2xl font-semibold text-slate-900 tracking-tight">{title}</h1>
        {description && (
          <p className="mt-1.5 text-sm text-slate-500 max-w-2xl leading-relaxed">{description}</p>
        )}
      </div>
      {actions && <div className="flex-shrink-0">{actions}</div>}
    </div>
  )
}
