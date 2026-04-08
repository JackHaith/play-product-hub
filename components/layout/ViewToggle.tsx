'use client'

import { useView, viewDescriptions } from '@/context/ViewContext'
import type { ViewType } from '@/types'
import { cn } from '@/lib/utils'

const views: ViewType[] = ['Product', 'Design', 'Tech', 'Stakeholder']

export function ViewToggle() {
  const { view, setView } = useView()

  return (
    <div className="flex items-center gap-3">
      <span className="text-xs text-slate-400 hidden sm:block">View</span>
      <div className="flex items-center bg-slate-100 rounded-lg p-0.5 gap-0.5">
        {views.map((v) => (
          <button
            key={v}
            onClick={() => setView(v)}
            title={viewDescriptions[v]}
            className={cn(
              'px-3 py-1.5 rounded-md text-xs font-medium transition-all',
              view === v
                ? 'bg-white text-slate-900 shadow-sm'
                : 'text-slate-500 hover:text-slate-700',
            )}
          >
            {v}
          </button>
        ))}
      </div>
      <span className="text-xs text-slate-400 hidden lg:block max-w-48 truncate">
        {viewDescriptions[view]}
      </span>
    </div>
  )
}
