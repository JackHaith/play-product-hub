'use client'

import Link from 'next/link'
import { phases } from '@/data/phases'
import { decisions } from '@/data/decisions'
import { risks } from '@/risk-log'
import { readinessChecks } from '@/data/readiness'
import { workstreams } from '@/data/workstreams'
import { metrics } from '@/data/metrics'
import { InfoCard } from '@/components/ui/InfoCard'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { StatusBadge } from '@/components/ui/StatusBadge'
import { useView } from '@/context/ViewContext'
import { filterByView } from '@/lib/audience'
import {
  phaseStatusConfig,
  decisionStatusConfig,
  severityConfig,
  metricStatusConfig,
} from '@/lib/utils'

export default function OverviewPage() {
  const { view } = useView()
  const currentPhase = phases.find((p) => p.status === 'in-progress') ?? phases[0]
  const visibleDecisions = filterByView(decisions, view)
  const openDecisions = visibleDecisions.filter((d) => d.status === 'Open')
  const visibleRisks = filterByView(risks, view)
  const highRisks = visibleRisks.filter((r) => r.severity === 'High')
  const visibleReadinessChecks = filterByView(readinessChecks, view)
  const greenChecks = visibleReadinessChecks.filter((r) => r.status === 'Green')
  const amberChecks = visibleReadinessChecks.filter((r) => r.status === 'Amber')
  const redChecks = visibleReadinessChecks.filter((r) => r.status === 'Red')
  const visibleWorkstreams = filterByView(workstreams, view)
  const activeWorkstreams = visibleWorkstreams.filter((w) => w.status === 'active')

  const phaseStatusCfg = phaseStatusConfig[currentPhase.status]

  return (
    <div className="max-w-6xl">
      {/* Page title */}
      <div className="mb-8">
        <p className="text-xs font-medium text-slate-400 uppercase tracking-wider mb-1.5">
          BBC Internal · Product Hub
        </p>
        <h1 className="text-3xl font-semibold text-slate-900 tracking-tight mb-2">
          Games in Articles
        </h1>
        <p className="text-base text-slate-500 max-w-2xl leading-relaxed">
          A phased experiment to embed interactive games within BBC articles — validating analytics,
          technical feasibility, and operational readiness before scaling.
        </p>
      </div>

      {/* Status bar */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-8">
        <div className="bg-white rounded-xl border border-slate-200 p-4">
          <p className="text-2xl font-semibold text-slate-900">{openDecisions.length}</p>
          <p className="text-xs text-slate-500 mt-0.5">Open decisions</p>
        </div>
        <div className="bg-white rounded-xl border border-slate-200 p-4">
          <p className="text-2xl font-semibold text-slate-900">{visibleRisks.length}</p>
          <p className="text-xs text-slate-500 mt-0.5">Tracked risks</p>
        </div>
        <div className="bg-white rounded-xl border border-slate-200 bg-slate-50/70 p-4">
          <p className="text-2xl font-semibold text-slate-700">{redChecks.length}</p>
          <p className="text-xs text-slate-500 mt-0.5">Not started readiness items</p>
        </div>
        <div className="bg-white rounded-xl border border-slate-200 p-4">
          <p className="text-xs font-medium text-slate-400 uppercase tracking-wider mb-1.5">
            Current phase
          </p>
          <div className="flex items-center gap-2 flex-wrap">
            <span className="text-sm font-semibold text-slate-900">
              Phase {currentPhase.number}
            </span>
            <StatusBadge
              label={phaseStatusCfg.label}
              bg={phaseStatusCfg.bg}
              text={phaseStatusCfg.text}
              size="sm"
            />
          </div>
        </div>
      </div>

      {/* First row */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mb-5">
        <div className="lg:col-span-2">
          <InfoCard title="What we're trying to prove">
            <p className="text-sm text-slate-700 leading-relaxed mb-4">
              We can embed engaging, playable interactive games within BBC articles in a way that is technically
              reliable, analytically trackable, and operationally manageable.
            </p>
            <ul className="space-y-2">
              {[
                'We have created a set of fun, engaging and playable interactive games',
                'The embedding approach works reliably across BBC article environments',
                'Analytics can be tracked end-to-end, linking article and game interactions',
                'The operational model is ready, so content can be managed and removed safely',
                'Games can drive meaningful audience engagement when placed in articles',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2.5">
                  <span className="text-brand-400 flex-shrink-0 text-xs mt-0.5">✓</span>
                  <p className="text-sm text-slate-600">{item}</p>
                </li>
              ))}
            </ul>
          </InfoCard>
        </div>

        <div>
          <InfoCard title="Current phase">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-base font-semibold text-slate-900">
                {currentPhase.title}
              </span>
            </div>
            <StatusBadge
              label={phaseStatusCfg.label}
              bg={phaseStatusCfg.bg}
              text={phaseStatusCfg.text}
            />
            <p className="mt-3 text-sm text-slate-600 leading-relaxed">
              {currentPhase.objective}
            </p>

            {/* Phase progress indicators */}
            <div className="mt-4 flex items-center gap-1.5">
              {phases.map((p) => {
                const cfg = phaseStatusConfig[p.status]
                return (
                  <div
                    key={p.id}
                    title={p.title}
                    className={`h-1.5 flex-1 rounded-full ${cfg.bg} ${p.status === 'in-progress' ? 'ring-1 ring-brand-300' : ''}`}
                  />
                )
              })}
            </div>
            <p className="mt-1.5 text-xs text-slate-400">
              Phase {currentPhase.number} of {phases.length}
            </p>

            <Link
              href="/phases"
              className="mt-4 inline-block text-xs font-medium text-brand-600 hover:text-brand-700"
            >
              View all phases →
            </Link>
          </InfoCard>
        </div>
      </div>

      {/* Second row */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mb-5">
        {/* Open decisions */}
        <div>
          <div className="flex items-center justify-between mb-3">
            <SectionHeading title="Open decisions" count={openDecisions.length} />
            <Link
              href="/decisions"
              className="text-xs font-medium text-brand-600 hover:text-brand-700"
            >
              View all →
            </Link>
          </div>
          <div className="space-y-2">
            {openDecisions.slice(0, 5).map((decision) => {
              const cfg = decisionStatusConfig[decision.status]
              return (
                <Link key={decision.id} href="/decisions">
                  <div className="bg-white rounded-lg border border-slate-200 p-3 hover:border-brand-200 hover:bg-brand-50/20 transition-colors group cursor-pointer">
                    <p className="text-sm font-medium text-slate-800 leading-snug group-hover:text-brand-900">
                      {decision.title}
                    </p>
                    <div className="flex items-center gap-2 mt-1.5">
                      <StatusBadge
                        label={decision.status}
                        bg={cfg.bg}
                        text={cfg.text}
                        size="sm"
                      />
                      <span className="text-xs text-slate-400">{decision.relatedPhase}</span>
                    </div>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>

        {/* Top risks */}
        <div>
          <div className="flex items-center justify-between mb-3">
            <SectionHeading title="High severity risks" count={highRisks.length} />
            <Link
              href="/risks"
              className="text-xs font-medium text-brand-600 hover:text-brand-700"
            >
              View all →
            </Link>
          </div>
          <div className="space-y-2">
            {highRisks.map((risk) => {
              const cfg = severityConfig[risk.severity]
              return (
                <div
                  key={risk.id}
                  className="bg-white rounded-lg border border-slate-200 p-3"
                >
                  <div className="flex items-center gap-2 mb-1.5">
                    <StatusBadge
                      label={risk.severity}
                      bg={cfg.bg}
                      text={cfg.text}
                      size="sm"
                    />
                    <span className="text-xs text-slate-400">{risk.relatedPhase}</span>
                  </div>
                  <p className="text-sm text-slate-700 leading-snug">{risk.title}</p>
                </div>
              )
            })}
          </div>
        </div>

        {/* Readiness snapshot */}
        <div>
          <div className="flex items-center justify-between mb-3">
            <SectionHeading title="Readiness snapshot" />
            <Link
              href="/risks"
              className="text-xs font-medium text-brand-600 hover:text-brand-700"
            >
              Full view →
            </Link>
          </div>
          <div className="bg-white rounded-xl border border-slate-200 p-4">
            <div className="flex items-center gap-5 mb-4 pb-4 border-b border-slate-100">
              <div className="text-center">
                <p className="text-2xl font-semibold text-brand-700">{greenChecks.length}</p>
                <p className="text-xs text-slate-400 mt-0.5">Completed</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-semibold text-brand-500">{amberChecks.length}</p>
                <p className="text-xs text-slate-400 mt-0.5">In progress</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-semibold text-slate-600">{redChecks.length}</p>
                <p className="text-xs text-slate-400 mt-0.5">Not started</p>
              </div>
            </div>
            <div className="space-y-2">
              {redChecks.map((check) => (
                <div key={check.id} className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-slate-400 flex-shrink-0" />
                  <p className="text-xs text-slate-600">{check.title}</p>
                </div>
              ))}
              {amberChecks.slice(0, 2).map((check) => (
                <div key={check.id} className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-brand-400 flex-shrink-0" />
                  <p className="text-xs text-slate-400">{check.title}</p>
                </div>
              ))}
              {amberChecks.length > 2 && (
                <p className="text-xs text-slate-400 pl-4">
                  +{amberChecks.length - 2} amber items
                </p>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Active workstreams */}
      <div className="mb-5">
        <div className="flex items-center justify-between mb-3">
          <SectionHeading title="Active workstreams" count={activeWorkstreams.length} />
          <Link
            href="/workstreams"
            className="text-xs font-medium text-brand-600 hover:text-brand-700"
          >
            View all →
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {activeWorkstreams.map((ws) => (
            <div
              key={ws.id}
              className="bg-white rounded-xl border border-slate-200 p-4"
            >
              <p className="text-sm font-semibold text-slate-900 mb-0.5">{ws.name}</p>
              <p className="text-xs text-slate-400 mb-2">{ws.owner}</p>
              <p className="text-xs text-slate-600 leading-relaxed">{ws.currentFocus}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Metrics */}
      <div>
        <div className="flex items-center justify-between mb-3">
          <SectionHeading
            title="Metrics being explored"
            count={metrics.length}
          />
          <Link
            href="/metrics"
            className="text-xs font-medium text-brand-600 hover:text-brand-700"
          >
            Full definition →
          </Link>
        </div>
        <div className="flex flex-wrap gap-2">
          {metrics.map((metric) => {
            const cfg = metricStatusConfig[metric.status]
            return (
              <span
                key={metric.id}
                className={`inline-flex items-center px-3 py-1.5 rounded-lg text-xs font-medium ${cfg.bg} ${cfg.text}`}
              >
                {metric.name}
              </span>
            )
          })}
        </div>
      </div>
    </div>
  )
}
