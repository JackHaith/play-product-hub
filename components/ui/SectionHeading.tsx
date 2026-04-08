interface SectionHeadingProps {
  title: string
  description?: string
  count?: number
}

export function SectionHeading({ title, description, count }: SectionHeadingProps) {
  return (
    <div className="mb-4">
      <div className="flex items-center gap-2">
        <h2 className="text-sm font-semibold text-slate-800">{title}</h2>
        {count !== undefined && (
          <span className="text-xs font-medium bg-slate-100 text-slate-500 px-2 py-0.5 rounded-full">
            {count}
          </span>
        )}
      </div>
      {description && (
        <p className="mt-1 text-xs text-slate-500 leading-relaxed">{description}</p>
      )}
    </div>
  )
}
