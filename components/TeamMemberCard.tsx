import Image from 'next/image'
import type { TeamMember } from '@/types'

interface TeamMemberCardProps {
  member: TeamMember
}

export function TeamMemberCard({ member }: TeamMemberCardProps) {
  return (
    <div className="bg-white rounded-xl border border-slate-200 p-4 h-full">
      <div className="flex items-start gap-3 mb-3">
        <div className="h-12 w-12 rounded-lg overflow-hidden bg-slate-100 border border-slate-200 flex-shrink-0">
          <Image
            src={member.profileImage}
            alt={`${member.name} profile`}
            width={96}
            height={96}
            className="h-full w-full object-cover"
          />
        </div>
        <div className="min-w-0">
          <p className="text-sm font-semibold text-slate-900 leading-tight">{member.name}</p>
          <p className="text-xs text-slate-500 mt-0.5">{member.roleTitle}</p>
        </div>
      </div>

      <div className="mb-3">
        <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">
          Project role
        </p>
        <p className="text-sm text-slate-700 leading-relaxed">{member.projectRole}</p>
      </div>

      <div>
        <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1.5">
          Responsibilities
        </p>
        <ul className="space-y-1.5">
          {member.responsibilities.map((responsibility, idx) => (
            <li key={idx} className="text-xs text-slate-600 flex gap-1.5">
              <span className="text-slate-300 flex-shrink-0 mt-0.5">—</span>
              <span>{responsibility}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
