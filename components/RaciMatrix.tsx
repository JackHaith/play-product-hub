import {
  raciColumnGroups,
  raciLegend,
  raciRows,
  type RaciColumnId,
} from '@/data/raciMatrix'

function raciPillClass(raw: string): string {
  const base =
    'inline-flex items-center justify-center min-w-[1.75rem] px-1.5 py-0.5 rounded-md text-xs font-semibold tabular-nums border'
  if (raw === '—' || raw === '-') {
    return 'text-slate-400 font-normal'
  }
  if (raw === 'A/R') {
    return `${base} bg-violet-50 text-violet-800 border-violet-200`
  }
  if (raw === 'R') {
    return `${base} bg-sky-50 text-sky-900 border-sky-200`
  }
  if (raw === 'A') {
    return `${base} bg-violet-50 text-violet-900 border-violet-200`
  }
  if (raw === 'C') {
    return `${base} bg-amber-50 text-amber-900 border-amber-200`
  }
  if (raw === 'I') {
    return `${base} bg-slate-100 text-slate-700 border-slate-200`
  }
  return `${base} bg-slate-50 text-slate-700 border-slate-200`
}

function RaciCell({ value }: { value: string }) {
  if (value === '—' || value === '-') {
    return <span className="text-slate-400 select-none">—</span>
  }
  return <span className={raciPillClass(value)}>{value}</span>
}

function LegendPill({ letter }: { letter: string }) {
  return <span className={raciPillClass(letter)}>{letter}</span>
}

const flatColumns = raciColumnGroups.flatMap((g) => g.columns)

export function RaciMatrix() {
  return (
    <div className="space-y-4">
      <div
        className="flex flex-wrap gap-x-6 gap-y-2 text-xs text-slate-600"
        aria-label="RACI legend"
      >
        {raciLegend.map(({ letter, label }) => (
          <span key={letter} className="inline-flex items-center gap-2">
            <LegendPill letter={letter} />
            <span className="text-slate-700">
              = {label}
            </span>
          </span>
        ))}
      </div>

      <div className="overflow-x-auto -mx-1 px-1 pb-1 rounded-xl border border-slate-200 bg-white shadow-sm">
        <table className="w-full min-w-[640px] text-sm border-collapse">
          <thead>
            <tr>
              <th
                scope="col"
                className="sticky left-0 z-20 bg-slate-50 border-b border-r border-slate-200 p-3 text-left text-xs font-semibold text-slate-500 uppercase tracking-wider w-[min(28vw,220px)]"
              >
                Workstream
              </th>
              {raciColumnGroups.map((group) => (
                <th
                  key={group.id}
                  colSpan={group.columns.length}
                  scope="colgroup"
                  className="border-b border-slate-200 bg-slate-100/80 p-2 text-center text-xs font-semibold text-slate-700"
                >
                  {group.title}
                </th>
              ))}
            </tr>
            <tr>
              <th
                scope="col"
                className="sticky left-0 z-20 bg-slate-50 border-b border-r border-slate-200 p-2"
              />
              {flatColumns.map((col) => (
                <th
                  key={col.id}
                  scope="col"
                  className="border-b border-slate-200 bg-white p-2 text-center text-xs font-semibold text-slate-800 whitespace-nowrap"
                >
                  {col.label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {raciRows.map((row) => (
              <tr key={row.workstream} className="group hover:bg-slate-50/80">
                <th
                  scope="row"
                  className="sticky left-0 z-10 bg-white group-hover:bg-slate-50/80 border-b border-r border-slate-200 p-3 text-left text-xs font-medium text-slate-800 align-middle shadow-[4px_0_8px_-4px_rgba(15,23,42,0.08)]"
                >
                  {row.workstream}
                </th>
                {flatColumns.map((col) => (
                  <td
                    key={col.id}
                    className="border-b border-slate-100 p-2 text-center align-middle"
                  >
                    <RaciCell value={row.assignments[col.id as RaciColumnId]} />
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p className="text-xs text-slate-500 leading-relaxed border-l-2 border-amber-200 pl-3 py-0.5">
        Responsible owner for Qualitative User Research to be confirmed.
      </p>
    </div>
  )
}
