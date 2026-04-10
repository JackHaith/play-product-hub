/**
 * RACI matrix: workstreams × roles. Values use RACI letters or combined A/R; use "—" for empty.
 * Update this file to change ownership and collaboration patterns.
 */

export type RaciColumnId =
  | 'rheem'
  | 'adam'
  | 'bob'
  | 'jack'
  | 'caroline'
  | 'engineering'
  | 'design'

export interface RaciColumnGroup {
  id: string
  title: string
  columns: { id: RaciColumnId; label: string }[]
}

export interface RaciRow {
  workstream: string
  /** Keys must match RaciColumnId */
  assignments: Record<RaciColumnId, string>
}

export const raciColumnGroups: RaciColumnGroup[] = [
  {
    id: 'bbc-trio',
    title: 'BBC Trio',
    columns: [
      { id: 'rheem', label: 'Rheem' },
      { id: 'adam', label: 'Adam' },
      { id: 'bob', label: 'Bob' },
    ],
  },
  {
    id: 'hippo-delivery',
    title: 'Hippo Delivery Team',
    columns: [
      { id: 'jack', label: 'Jack' },
      { id: 'caroline', label: 'Caroline' },
      { id: 'engineering', label: 'Engineering' },
      { id: 'design', label: 'Design' },
    ],
  },
]

export const raciRows: RaciRow[] = [
  {
    workstream: 'Technical Feasibility',
    assignments: {
      rheem: 'I',
      adam: 'I',
      bob: 'I',
      jack: 'C',
      caroline: 'A',
      engineering: 'R',
      design: '—',
    },
  },
  {
    workstream: 'Stakeholder Engagement',
    assignments: {
      rheem: 'C',
      adam: 'A/R',
      bob: 'C',
      jack: 'I',
      caroline: 'I',
      engineering: 'I',
      design: 'I',
    },
  },
  {
    workstream: 'Game Design',
    assignments: {
      rheem: 'C',
      adam: 'I',
      bob: 'C',
      jack: 'I',
      caroline: 'A',
      engineering: 'C',
      design: 'R',
    },
  },
  {
    workstream: 'Product Ops & Service Design',
    assignments: {
      rheem: 'C',
      adam: 'C',
      bob: 'I',
      jack: 'R',
      caroline: 'A',
      engineering: 'C',
      design: 'I',
    },
  },
  {
    workstream: 'Analytics',
    assignments: {
      rheem: 'C',
      adam: 'C',
      bob: 'I',
      jack: 'R',
      caroline: 'A',
      engineering: 'R',
      design: 'I',
    },
  },
  {
    workstream: 'Qualitative User Research',
    assignments: {
      rheem: 'I',
      adam: 'I',
      bob: 'I',
      jack: 'I',
      caroline: 'A',
      engineering: 'I',
      design: 'I',
    },
  },
]

export const raciLegend = [
  { letter: 'R', label: 'Responsible' },
  { letter: 'A', label: 'Accountable' },
  { letter: 'C', label: 'Consulted' },
  { letter: 'I', label: 'Informed' },
] as const
