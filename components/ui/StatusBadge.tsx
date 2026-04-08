import { cn } from '@/lib/utils'

interface StatusBadgeProps {
  label: string
  bg: string
  text: string
  dot?: string
  size?: 'sm' | 'md'
}

export function StatusBadge({ label, bg, text, dot, size = 'md' }: StatusBadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 rounded-full font-medium whitespace-nowrap',
        size === 'sm' ? 'px-2 py-0.5 text-xs' : 'px-2.5 py-1 text-xs',
        bg,
        text,
      )}
    >
      {dot && <span className={cn('w-1.5 h-1.5 rounded-full flex-shrink-0', dot)} />}
      {label}
    </span>
  )
}
