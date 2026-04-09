'use client'

import { useView, viewDescriptions } from '@/context/ViewContext'
import type { ViewType } from '@/types'
import { cn } from '@/lib/utils'
import { usePathname } from 'next/navigation'

const views: ViewType[] = ['Product', 'Design', 'Tech', 'Stakeholder']
const viewDisabledPaths = new Set(['/metrics', '/phases'])

export function ViewToggle() {
  const { view, setView } = useView()
  const pathname = usePathname()
  const isDisabledForPage = viewDisabledPaths.has(pathname)

  return (
    <div
      className={cn(
        'flex items-center gap-3',
        isDisabledForPage && 'opacity-55',
      )}
    >
      <span className="text-xs text-slate-400 hidden sm:block">
        View{isDisabledForPage ? ' (unavailable)' : ''}
      </span>
      <div className="flex items-center bg-slate-100 rounded-lg p-0.5 gap-0.5">
        {views.map((v) => (
          <button
            key={v}
            onClick={() => {
              if (!isDisabledForPage) setView(v)
            }}
            title={viewDescriptions[v]}
            disabled={isDisabledForPage}
            className={cn(
              'px-3 py-1.5 rounded-md text-xs font-medium transition-all',
              isDisabledForPage && 'cursor-not-allowed',
              view === v
                ? 'bg-white text-slate-900 shadow-sm'
                : 'text-slate-500 hover:text-slate-700',
            )}
          >
            {v}
          </button>
        ))}
      </div>
    </div>
  )
}
