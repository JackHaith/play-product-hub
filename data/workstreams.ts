import type { Workstream } from '@/types'

export const workstreams: Workstream[] = [
  {
    id: 'workstream-1',
    name: 'Technical feasibility',
    owner: 'Steady',
    currentFocus:
      'Validating the embedding approach and implementing the analytics event schema within the BBC article environment.',
    dependencies: [
      'Access to BBC article development environment',
      'Agreement on analytics data structure',
    ],
    risksBlockers: [
      'Embedding approach may require BBC platform team support',
      'Analytics linkage between article and game layers is currently unresolved',
    ],
    nextSteps: [
      'Complete embed prototype in test environment',
      'Validate analytics event firing end-to-end',
      'Document and test content removal process',
    ],
    status: 'active',
    audience: ['Tech'],
  },
  {
    id: 'workstream-2',
    name: 'Stakeholder engagement',
    owner: 'Adam Flint, Rheem Al-Adhami',
    currentFocus:
      'Engaging BBC editorial stakeholders to secure buy-in for live experimentation opportunities across relevant BBC services.',
    dependencies: [
      'Engagement with editorial stakeholders in BBC Sport and other interested services',
      'Agreement on suitable editorial/article placement opportunities',
      'Alignment on game concepts relevant to each service audience',
    ],
    risksBlockers: [
      'Editorial stakeholders may not support experimentation in their service',
      'No suitable article placement made available for testing',
      'Delays in stakeholder decisions could impact live experiment timeline',
    ],
    nextSteps: [
      'Secure agreement with BBC Sport on World Cup variation of Drop the Pin',
      'Finalise suitable article placement for BBC Sport experiment',
      'If approved, embed game in BBC Sport article for controlled user test',
    ],
    status: 'active',
    audience: ['Stakeholder'],
  },
  {
    id: 'workstream-3',
    name: 'Game design',
    owner: 'Jon Maher, Joe Worthington',
    currentFocus:
      'Maintaining and validating the set of games already designed and built, while preparing the shortlist for first live selection.',
    dependencies: [
      'Decision on experiment type (Option A vs Option B)',
      'Editorial guidance on content and tone',
    ],
    risksBlockers: [
      'First live game selection is still open, which delays final go-live prioritisation',
      'Editorial framing and placement decisions still affect which built game is selected first',
    ],
    nextSteps: [
      'Confirm shortlist from games already designed and built',
      'Agree selection criteria with editorial and product',
      'Finalise go-live candidate once experiment type decision is made',
    ],
    status: 'active',
    audience: ['Design'],
  },
  {
    id: 'workstream-4',
    name: 'Product ops and service design',
    owner: 'Jack Haith',
    currentFocus:
      'Mapping the end-to-end service model, documenting open decisions, and ensuring the operational model is ready for a live experiment.',
    dependencies: [
      'Input from all workstream leads',
      'Access to stakeholder context and constraints',
    ],
    risksBlockers: [
      'Some decisions require engineering and editorial input before they can be closed',
    ],
    nextSteps: [
      'Complete service map documentation',
      'Plan for emergency content removal',
    ],
    status: 'active',
    audience: ['Product'],
  },
  {
    id: 'workstream-5',
    name: 'Analytics',
    owner: 'Steady, Jack Haith',
    currentFocus:
      'Defining the metrics framework and ensuring the tracking infrastructure is ready to capture the right data in Phase 3.',
    dependencies: [
      'Agreement on success metrics across stakeholders',
      'Analytics event schema from the technical workstream',
    ],
    risksBlockers: [
      'Success metrics not yet agreed across stakeholders',
      'Analytics linkage between article and game layers is unresolved',
    ],
    nextSteps: [
      'Facilitate metrics agreement session',
      'Validate analytics linkage approach with engineering',
      'Define reporting and review cadence for Phase 3',
    ],
    status: 'planned',
    audience: ['Tech'],
  },
  {
    id: 'workstream-6',
    name: 'Qualitative user research',
    owner: 'Jack Haith, Steady, Lauren Gorton',
    currentFocus:
      'Planning additional moderated qualitative user research on game playability and engagement to further validate game concepts beyond the current core six. This workstream can run independently of embedding and technical readiness, and provides an opportunity to continue de-risking game quality while technical work progresses.',
    dependencies: [
      'Trio decision on which game concepts or variations provide highest learning value for further testing',
      'Recruitment of additional participants (likely internal Hippo or BBC employees)',
      'Availability of UR and delivery team resource to plan and run sessions',
      'Selection and preparation of prototype game variations or backlog concepts for testing',
    ],
    risksBlockers: [
      'Agreement on which games are highest priority for further testing',
      'Limited UR capacity may constrain pace of research',
    ],
    nextSteps: [
      'Confirm with Trio which game concepts or variations should be prioritised for further testing',
      'Identify suitable backlog games or alternative variations for research',
      'Recruit internal participants for moderated sessions',
      'Schedule and run moderated playability and engagement testing',
      'Synthesise findings and feed recommendations into game prioritisation and design decisions',
    ],
    status: 'planned',
    audience: ['Design'],
  },
]
