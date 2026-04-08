import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface InfoCardProps {
  title: string
  children: ReactNode
  className?: string
  accent?: boolean
}

export function InfoCard({ title, children, className, accent }: InfoCardProps) {
  return (
    <div
      className={cn(
        'bg-white rounded-xl border border-slate-200 p-5 h-full',
        accent && 'border-brand-100 bg-brand-50/20',
        className,
      )}
    >
      <h3 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">
        {title}
      </h3>
      {children}
    </div>
  )
}
