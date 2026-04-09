'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'

const navItems = [
  { href: '/',            label: 'Overview',          description: 'Project at a glance' },
  { href: '/phases',      label: 'Phases',             description: 'Phased approach' },
  { href: '/workstreams', label: 'Workstreams',        description: 'Cross-functional view' },
  { href: '/decisions',   label: 'Decisions',          description: 'Open and made' },
  { href: '/risks',       label: 'Risks & Readiness',  description: 'Gaps and blockers' },
  { href: '/service-map', label: 'Service Map',        description: 'End-to-end flow' },
  { href: '/metrics',     label: 'Metrics',            description: "What we're measuring" },
  { href: '/team',        label: 'Team',               description: 'People and governance' },
]

const disabledNavPaths = new Set(['/service-map'])

export function Sidebar() {
  const pathname = usePathname()

  return (
    <aside className="w-56 flex-shrink-0 bg-white border-r border-slate-200 flex flex-col min-h-screen sticky top-0">
      {/* Logo */}
      <div className="p-4 border-b border-slate-100">
        <div className="flex items-center gap-2.5">
          <div className="h-8 w-8 flex-shrink-0">
            <img
              src="/logos/bbc-play-icon.svg"
              alt="BBC Play logo"
              width={32}
              height={32}
              className="h-8 w-8 object-contain"
              decoding="async"
              fetchPriority="high"
            />
          </div>
          <div>
            <p className="text-sm font-semibold text-slate-900 leading-tight">BBC Play</p>
            <p className="text-xs text-slate-400 leading-tight">Product hub</p>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-2.5">
        <ul className="space-y-0.5">
          {navItems.map((item) => {
            const isDisabled = disabledNavPaths.has(item.href)
            const isActive =
              !isDisabled && (item.href === '/' ? pathname === '/' : pathname.startsWith(item.href))
            return (
              <li key={item.href}>
                {isDisabled ? (
                  <span
                    aria-disabled="true"
                    className="flex items-center px-3 py-2 rounded-lg text-sm text-slate-400 cursor-not-allowed"
                  >
                    {item.label}
                  </span>
                ) : (
                  <Link
                    href={item.href}
                    className={cn(
                      'flex items-center px-3 py-2 rounded-lg text-sm transition-colors',
                      isActive
                        ? 'bg-brand-50 text-brand-700 font-medium'
                        : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900',
                    )}
                  >
                    {item.label}
                  </Link>
                )}
              </li>
            )
          })}
        </ul>
      </nav>

      {/* Footer */}
      <div className="p-3 border-t border-slate-100">
        <div className="px-3 py-1.5">
          <p className="text-xs text-slate-400">Internal prototype · v1</p>
          <p className="text-xs text-slate-300 mt-0.5">Not for external sharing</p>
        </div>
      </div>
    </aside>
  )
}
