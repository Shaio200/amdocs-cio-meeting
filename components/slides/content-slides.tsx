import { Fragment } from 'react'
import Image from 'next/image'
import {
  Activity,
  AlertTriangle,
  ArrowRight,
  BotMessageSquare,
  Boxes,
  CalendarClock,
  CheckCircle2,
  Cloud,
  Cpu,
  Database,
  FileSearch,
  GitBranch,
  Handshake,
  LineChart,
  ListChecks,
  Lock,
  Network,
  Radar,
  Rocket,
  ServerCog,
  ShieldCheck,
  Sparkles,
  Target,
  Users,
  Users2,
  Workflow,
} from 'lucide-react'
import matrixLogo from '../../images/LOGO-MATRIX-1024x430.png'
import bmcHelixLogo from '../../images/BMCHelix Logo Medium Transparent.png'
import { SlideFrame } from '@/components/deck/slide-frame'

/* ------------------------------------------------------------------ */
/* 00 — Title                                                          */
/* ------------------------------------------------------------------ */
const heroStats = [
  { value: '80K+', label: 'Devices in scope' },
  { value: '14+ yrs', label: 'UTS is powered by with BMC Helix ITSM' },
  { value: '50K Devices', label: 'Configured by BMC Helix Server Automation' },
  { value: '9+ yrs', label: 'Polaris is powered by BMC Helix CMDB' },
]

export function TitleSlide() {
  return (
    <section className="relative flex h-full w-full flex-col justify-center overflow-hidden px-6 sm:px-10 lg:px-16">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            'radial-gradient(55% 50% at 80% 12%, oklch(0.74 0.166 52 / 0.18), transparent 60%), radial-gradient(45% 40% at 10% 80%, oklch(0.78 0.13 210 / 0.12), transparent 60%)',
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 opacity-30"
        style={{
          backgroundImage:
            'linear-gradient(to right, oklch(0.98 0 0 / 0.05) 1px, transparent 1px), linear-gradient(to bottom, oklch(0.98 0 0 / 0.05) 1px, transparent 1px)',
          backgroundSize: '56px 56px',
          maskImage: 'radial-gradient(70% 65% at 50% 40%, black, transparent 82%)',
        }}
      />
      <div className="inline-flex w-fit items-center gap-2 rounded-full border border-border bg-secondary/60 px-4 py-1.5">
        <Sparkles className="size-3.5 text-primary" />
        <span className="text-xs font-medium text-muted-foreground">
          Executive briefing · Prepared for the Amdocs CIO
        </span>
      </div>
      <h1 className="mt-6 max-w-4xl text-balance font-display text-4xl font-semibold leading-[1.04] tracking-tight text-foreground sm:text-6xl lg:text-7xl">
        Modernize discovery for{' '}
        <span className="text-primary">scale, cloud, and AI.</span>
      </h1>
      <p className="mt-5 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
        Replace fragmented, agent-based legacy discovery with one BMC Helix
        platform — unifying 80K devices, every cloud, and full service mapping
        into a single governed CMDB. The foundation your AI strategy runs on.
      </p>
      <dl className="mt-10 grid max-w-3xl grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border bg-border lg:grid-cols-4">
        {heroStats.map((s) => (
          <div key={s.label} className="bg-card p-5">
            <dt className="font-display text-2xl font-semibold text-foreground sm:text-3xl">
              {s.value}
            </dt>
            <dd className="mt-1 text-xs leading-relaxed text-muted-foreground sm:text-sm">
              {s.label}
            </dd>
          </div>
        ))}
      </dl>
      <p className="mt-10 flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
        Use arrow keys or scroll to advance
        <ArrowRight className="size-3.5 text-primary" />
      </p>
      <footer className="pointer-events-none absolute bottom-5 left-6 flex items-center gap-2 sm:left-10 lg:left-16">
        <span className="font-display text-sm font-semibold text-foreground">Matrix</span>
        <span className="text-muted-foreground">·</span>
        <span className="text-sm text-muted-foreground">BMC Helix</span>
      </footer>
    </section>
  )
}

/* ------------------------------------------------------------------ */
/* 01 — Pain points                                                    */
/* ------------------------------------------------------------------ */
const pains = [
  { title: 'Discovery islands', body: 'Multiple OpenText agent-based installations to cover 80K devices — costly, fragile, hard to maintain.' },
  { title: 'No service mapping', body: 'Legacy tooling discovers assets but cannot map business services and applications — a primary driver for replacement.' },
  { title: 'Fragmented cloud', body: 'AWS, Azure and GCP live outside the core discovery model, leaving blind spots across the modern estate.' },
  { title: 'Point tools everywhere', body: 'SolarWinds sees network, SCOM sees servers — data stays siloed with no single source of truth.' },
]

export function PainSlide() {
  return (
    <SlideFrame
      index="01"
      eyebrow="The Solution & Its Value"
      title={<>The current state: <span className="text-primary">discovery islands, not a system.</span></>}
    >
      <p className="max-w-3xl text-sm leading-relaxed text-muted-foreground sm:text-base">
        Amdocs has spent years planning to retire aging, agent-based OpenText
        discovery. Four structural problems make replacement urgent.
      </p>
      <div className="mt-6 grid flex-1 grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {pains.map((p) => (
          <div key={p.title} className="flex flex-col rounded-2xl border border-border bg-card p-5">
            <div className="grid size-10 place-items-center rounded-lg bg-destructive/12 text-destructive">
              <AlertTriangle className="size-5" />
            </div>
            <h3 className="mt-4 font-display text-base font-semibold text-foreground">{p.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.body}</p>
          </div>
        ))}
      </div>
    </SlideFrame>
  )
}

/* ------------------------------------------------------------------ */
/* 02 — Current vs Unified diagram                                     */
/* ------------------------------------------------------------------ */
export function DiagramSlide() {
  const legacy = ['OpenText Island 1', 'OpenText Island 2', 'OpenText Island 3', 'Universal Discovery']
  const sources = ['SolarWinds (network)', 'SCOM (servers)', 'Flexera (normalize)', 'ServiceNow']
  return (
    <SlideFrame
      index="01"
      eyebrow="The Solution & Its Value"
      title={<>One platform to replace the islands — <span className="text-primary">discover, map, enforce.</span></>}
    >
      <div className="grid min-h-0 flex-1 items-center gap-4 rounded-2xl border border-border bg-card p-4 sm:p-6 lg:grid-cols-[1fr_auto_1.25fr]">
        {/* fragmented */}
        <div>
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-destructive">Today · Fragmented</span>
          <p className="mt-1 text-sm text-muted-foreground">Disconnected tools & discovery islands</p>
          <div className="mt-4 grid grid-cols-2 gap-2.5">
            {legacy.map((l) => (
              <div key={l} className="rounded-lg border border-destructive/30 bg-destructive/10 px-3 py-2 text-center text-xs font-medium text-foreground/90">{l}</div>
            ))}
            {sources.map((s) => (
              <div key={s} className="rounded-lg border border-border bg-secondary/50 px-3 py-2 text-center text-xs font-medium text-foreground/90">{s}</div>
            ))}
          </div>
        </div>
        {/* arrow */}
        <div className="flex items-center justify-center text-primary">
          <div className="flex items-center gap-2">
            <span className="hidden text-xs font-medium uppercase tracking-widest lg:[writing-mode:vertical-rl] lg:rotate-180">Consolidate</span>
            <ArrowRight className="size-7 lg:size-9" />
          </div>
        </div>
        {/* unified */}
        <div>
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-primary">With BMC Helix · Unified</span>
          <p className="mt-1 text-sm text-muted-foreground">One hub ingests every source, then feeds governance & AI</p>
          <div className="mt-4 space-y-2.5">
            <div className="glow-primary flex items-center gap-3 rounded-xl border border-primary/40 bg-primary/10 p-3.5">
              <Database className="size-5 shrink-0 text-primary" />
              <div>
                <p className="text-sm font-semibold text-foreground">Helix Discovery + Client Management + BHII</p>
                <p className="text-xs text-muted-foreground">Agent · agentless · 3rd-party ingestion</p>
              </div>
            </div>
            <div className="flex justify-center"><ArrowRight className="size-4 rotate-90 text-muted-foreground" /></div>
            <div className="rounded-xl border border-accent/40 bg-accent/10 p-3.5">
              <p className="text-sm font-semibold text-foreground">BMC Helix CMDB</p>
              <p className="text-xs text-muted-foreground">Normalized · single source of truth (Polaris + UTS)</p>
            </div>
            <div className="grid grid-cols-2 gap-2.5">
              <div className="rounded-lg border border-border bg-secondary/50 p-2.5 text-center text-xs font-medium text-foreground/90">Helix ITOM · AIOps</div>
              <div className="rounded-lg border border-border bg-secondary/50 p-2.5 text-center text-xs font-medium text-foreground/90">ServiceNow & ITSM</div>
            </div>
          </div>
        </div>
      </div>
    </SlideFrame>
  )
}

/* ------------------------------------------------------------------ */
/* 03 — Capabilities                                                   */
/* ------------------------------------------------------------------ */
const capabilities = [
  { icon: Cpu, title: 'Agent-based discovery', body: 'BMC Helix Client Management tracks servers & clients at massive scale, including internet-connected endpoints.' },
  { icon: Cloud, title: 'Agentless cloud & serverless', body: 'BMC Helix Discovery covers PaaS, storage, network, pods & containers across AWS, Azure and GCP.' },
  { icon: Network, title: 'Service mapping', body: 'Blueprint technology maps business services in minutes and keeps them current as the environment changes.' },
  { icon: Boxes, title: 'CMDB consolidation', body: 'All sources normalized and consolidated into the BMC Helix CMDB already used by the Polaris project.' },
  { icon: Workflow, title: 'OOTB ingestion (BHII)', body: 'BMC Helix Intelligent Integration ingests topology & assets from SolarWinds, SCOM and dozens more.' },
  { icon: ShieldCheck, title: 'Optional : Enforcement & Compliance', body: 'Install/remove software, block unapproved usage, track last-used, and decommission before audits.' },
]

export function CapabilitiesSlide() {
  return (
    <SlideFrame
      index="01"
      eyebrow="The Solution & Its Value"
      title={<>Core capabilities the incumbent <span className="text-primary">can&apos;t match.</span></>}
    >
      <div className="grid min-h-0 flex-1 grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {capabilities.map((c) => (
          <div key={c.title} className="flex flex-col rounded-2xl border border-border bg-card p-4 transition-colors hover:border-primary/40 lg:p-5">
            <div className="grid size-10 place-items-center rounded-lg bg-primary/12 text-primary">
              <c.icon className="size-5" />
            </div>
            <h3 className="mt-3 font-display text-base font-semibold text-foreground">{c.title}</h3>
            <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{c.body}</p>
          </div>
        ))}
      </div>
    </SlideFrame>
  )
}

/* ------------------------------------------------------------------ */
/* 04 — Value ladder                                                   */
/* ------------------------------------------------------------------ */
const layers = [
  { step: 'Foundation', icon: Radar, title: 'Discovery & CMDB', body: 'Accurate, current asset & service data — the fuel every downstream AI use case depends on.', primary: true },
  { step: 'Extend', icon: Activity, title: 'Helix ITOM · AIOps & Observability', body: 'Turn topology into event correlation, anomaly detection and automated, probable-cause incident resolution.', primary: false },
  { step: 'Elevate', icon: GitBranch, title: 'ServiceOps initiatives', body: 'AI-driven RCA of change-related issues and Best Action Recommendation (BAR) grounded in documented changes.', primary: false },
]

export function LadderSlide() {
  return (
    <SlideFrame
      index="02"
      eyebrow="The AI Roadmap"
      title={<>Discovery isn&apos;t the destination — <span className="text-primary">it&apos;s the launchpad for AI.</span></>}
      tint="accent"
    >
      <p className="max-w-3xl text-sm leading-relaxed text-muted-foreground sm:text-base">
        The same platform that fixes discovery becomes the data foundation for
        Amdocs&apos; AI ambitions. Clean, connected configuration data is what
        makes AIOps and ServiceOps actually work.
      </p>
      <div className="mt-6 grid min-h-0 flex-1 grid-cols-1 items-stretch gap-3 lg:grid-cols-[1fr_auto_1fr_auto_1fr]">
        {layers.map((l, i) => (
          <Fragment key={l.title}>
            <div
              className={`flex flex-col rounded-2xl border p-5 ${l.primary ? 'glow-primary border-primary/40 bg-primary/10' : 'border-border bg-card'}`}
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">{l.step}</span>
                <span className="font-mono text-xs text-muted-foreground">0{i + 1}</span>
              </div>
              <div className={`mt-4 grid size-11 place-items-center rounded-lg ${l.primary ? 'bg-primary/20 text-primary' : 'bg-accent/15 text-accent'}`}>
                <l.icon className="size-5" />
              </div>
              <h3 className="mt-4 font-display text-lg font-semibold text-foreground">{l.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{l.body}</p>
            </div>
            {i < layers.length - 1 && (
              <div className="hidden items-center justify-center lg:flex">
                <ArrowRight className="size-6 text-primary" />
              </div>
            )}
          </Fragment>
        ))}
      </div>
    </SlideFrame>
  )
}

/* ------------------------------------------------------------------ */
/* 05 — What this unlocks                                              */
/* ------------------------------------------------------------------ */
const amplifiers = [
  { icon: LineChart, title: 'Grafana-powered dashboards', body: 'BMC Helix Dashboards embed Grafana for the most flexible reporting Amdocs has — no rip-and-replace.' },
  { icon: BotMessageSquare, title: 'Agentic GenAI dashboards', body: 'Build dashboards through a GenAI chat — a direct fit for the CIO\u2019s AI-everywhere mandate.' },
  { icon: ServerCog, title: 'CMDB elevation for Helix ITSM (UTS) and for ServiceNow', body: 'Feed BMC Helix CMDB as well as ServiceNow CMDB via Discovery so ITSM becomes configuration-data-driven — transforming Change, Problem & Incident.' },
  { icon: Lock, title: 'Enforcement & license control', body: 'Enforce configuration, keep licenses on approved assets only, and decommission cleanly ahead of software audits.' },
]

export function UnlockSlide() {
  return (
    <SlideFrame
      index="02"
      eyebrow="The AI Roadmap"
      title={<>What this unlocks for <span className="text-primary">the AI agenda.</span></>}
      tint="accent"
    >
      <div className="grid min-h-0 flex-1 grid-cols-1 items-stretch gap-4 sm:grid-cols-2">
        {amplifiers.map((a) => (
          <div key={a.title} className="flex items-center gap-4 rounded-2xl border border-border bg-card p-5 lg:p-6">
            <div className="grid size-12 shrink-0 place-items-center rounded-xl bg-primary/12 text-primary">
              <a.icon className="size-6" />
            </div>
            <div>
              <h3 className="font-display text-lg font-semibold text-foreground">{a.title}</h3>
              <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{a.body}</p>
            </div>
          </div>
        ))}
      </div>
    </SlideFrame>
  )
}

/* ------------------------------------------------------------------ */
/* 06 — Journey                                                        */
/* ------------------------------------------------------------------ */
const milestones = [
  { year: '2018', title: 'Initiative begins', body: 'Amdocs first explores modernizing legacy asset discovery at scale.', done: true },
  { year: '2022', title: 'RFI round', body: 'Formal market evaluation of discovery & service mapping platforms.', done: true },
  { year: '2025', title: 'RFI round', body: 'Renewed evaluation confirms the need to replace the incumbent.', done: true },
  { year: 'Now', title: 'Use cases defined', body: 'The widest asset-discovery use-case document we have ever seen.', done: true },
  { year: 'Next', title: 'POC kickoff', body: 'Aligning expectations toward a proof of concept starting in weeks.', done: false },
]
const trust = [
  { icon: Handshake, stat: '20+ years', label: 'Continuous Matrix & BMC partnership with Amdocs' },
  { icon: Users, stat: 'Trusted teams', label: 'CMDB (Polaris), TrueSight & Helix ITSM (UTS) already live' },
  { icon: FileSearch, stat: 'Widest ever', label: 'The most comprehensive discovery POC scope we have run' },
]

export function JourneySlide() {
  return (
    <SlideFrame
      index="03"
      eyebrow="What Has Been Done"
      title={<>A partnership <span className="text-primary">built over years,</span> not a cold pitch.</>}
    >
      <div className="flex min-h-0 flex-1 flex-col justify-center gap-8">
        {/* timeline */}
        <div className="relative">
          <div className="absolute left-0 right-0 top-5 hidden h-px bg-border md:block" aria-hidden="true" />
          <ol className="grid gap-6 md:grid-cols-5 md:gap-4">
            {milestones.map((m) => (
              <li key={m.year + m.title} className="relative">
                <div className="flex items-center gap-4 md:block">
                  <span className={`relative z-10 grid size-10 shrink-0 place-items-center rounded-full border-2 ${m.done ? 'border-primary bg-primary/15 text-primary' : 'border-accent bg-accent/15 text-accent'}`}>
                    {m.done ? <CheckCircle2 className="size-5" /> : <Rocket className="size-5" />}
                  </span>
                  <span className="font-mono text-sm font-semibold text-foreground md:mt-4 md:block">{m.year}</span>
                </div>
                <h3 className="mt-2 font-display text-sm font-semibold text-foreground">{m.title}</h3>
                <p className="mt-1 text-xs leading-relaxed text-muted-foreground">{m.body}</p>
              </li>
            ))}
          </ol>
        </div>
        {/* trust */}
        <div className="grid gap-4 sm:grid-cols-3">
          {trust.map((t) => (
            <div key={t.label} className="rounded-2xl border border-border bg-card p-5">
              <div className="flex items-center gap-3">
                <div className="grid size-10 place-items-center rounded-lg bg-primary/12 text-primary">
                  <t.icon className="size-5" />
                </div>
                <p className="font-display text-xl font-semibold text-foreground">{t.stat}</p>
              </div>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{t.label}</p>
            </div>
          ))}
        </div>
      </div>
    </SlideFrame>
  )
}

/* ------------------------------------------------------------------ */
/* 07 — POC                                                            */
/* ------------------------------------------------------------------ */
const timing = [
  { icon: CalendarClock, label: 'Start', value: '2–4 weeks', note: 'Pending Amdocs go-ahead' },
  { icon: Target, label: 'Duration', value: '2–3 months', note: 'Amdocs team estimate' },
  { icon: ListChecks, label: 'Scope', value: 'Widest ever', note: 'Deep, wide use-case set' },
]
const objectives = [
  'Validate agent-based and agetnless discovery at amdocs and "customer" network',
  'Prove agentless coverage for cloud & serverless',
  'Demonstrate service mapping with Blueprints',
  'Prove Discovery flexibility and extensibility',
  'Consolidate & normalize into BMC Helix CMDB',
  'Preview dashboards, enforcement & AIOps readiness',
]

export function PocSlide() {
  return (
    <SlideFrame
      index="04"
      eyebrow="The Proof of Concept"
      title={<>A focused POC to <span className="text-primary">retire the fear factor.</span></>}
    >
      <div className="grid shrink-0 gap-3 sm:grid-cols-3">
        {timing.map((t) => (
          <div key={t.label} className="rounded-2xl border border-border bg-card p-4">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <t.icon className="size-4 text-primary" />
              {t.label}
            </div>
            <p className="mt-2 font-display text-2xl font-semibold text-foreground">{t.value}</p>
            <p className="mt-0.5 text-xs text-muted-foreground">{t.note}</p>
          </div>
        ))}
      </div>
      <div className="mt-3 grid min-h-0 flex-1 gap-3 lg:grid-cols-[1.4fr_1fr]">
        <div className="flex flex-col rounded-2xl border border-border bg-card p-5 lg:p-6">
          <h3 className="font-display text-lg font-semibold text-foreground">POC objectives & success criteria</h3>
          <ul className="mt-4 grid flex-1 content-center gap-3 sm:grid-cols-2">
            {objectives.map((o) => (
              <li key={o} className="flex items-start gap-3">
                <span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-primary/15 text-primary">
                  <ListChecks className="size-3" />
                </span>
                <span className="text-sm leading-relaxed text-foreground/90">{o}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="glow-primary flex flex-col justify-between rounded-2xl border border-primary/40 bg-primary/10 p-5 lg:p-6">
          <div>
            <div className="grid size-11 place-items-center rounded-lg bg-primary/20 text-primary">
              <Users2 className="size-5" />
            </div>
            <h3 className="mt-4 font-display text-lg font-semibold text-foreground">Team & alignment</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              Expectations are being set jointly with the Amdocs discovery team.
              We bring proven implementation capability and a shared history — so
              the POC starts on solid ground, not from scratch.
            </p>
          </div>
          <p className="mt-5 font-mono text-xs uppercase tracking-[0.2em] text-primary">Ready when Amdocs is</p>
        </div>
      </div>
    </SlideFrame>
  )
}

/* ------------------------------------------------------------------ */
/* 08 — Project                                                        */
/* ------------------------------------------------------------------ */
const phases = [
  { phase: 'Phase 0', window: 'Months 0–3', title: 'Architecture & Security', items: ['Architecture design', 'Security approval', 'Deployment planning'] },
  { phase: 'Phase 1', window: 'Months 3–6', title: 'Foundation & Deployment', items: ['Deploy in Amdocs network', 'Deploy in customer networks', 'Agent-based discovery'] },
  { phase: 'Phase 2', window: 'Months 6–12', title: 'Cloud & Integration', items: ['Serverless discovery', 'Custom discovery', 'CMDB integration & normalization'] },
  { phase: 'Phase 3', window: 'Months 12–18', title: 'Intelligence & Go-Live', items: ['Reporting & dashboards', 'Training', 'Go-live & hypercare'] },
  { phase: 'Phase 4', window: 'Months 18–24', title: 'Optimization & Support', items: ['On-going support', 'Continuous improvement', 'AIOps expansion'] },
]

export function ProjectSlide() {
  return (
    <SlideFrame
      index="05"
      eyebrow="The Delivery Roadmap"
      title={<>An <span className="text-primary">18–24 month</span> program, phased for confidence.</>}
    >
      <div className="grid min-h-0 flex-1 grid-cols-2 items-stretch gap-3 md:grid-cols-3 lg:grid-cols-5">
        {phases.map((p, i) => (
          <div key={p.phase} className={`flex flex-col rounded-2xl border p-4 ${i === 0 ? 'glow-primary border-primary/40 bg-primary/10' : 'border-border bg-card'}`}>
            <span className="font-mono text-xs uppercase tracking-[0.15em] text-primary">{p.phase}</span>
            <span className="mt-0.5 text-xs text-muted-foreground">{p.window}</span>
            <h3 className="mt-3 font-display text-sm font-semibold text-foreground">{p.title}</h3>
            <ul className="mt-3 space-y-2">
              {p.items.map((it) => (
                <li key={it} className="flex items-start gap-2 text-xs leading-relaxed text-muted-foreground">
                  <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-primary" />
                  {it}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="mt-4 flex shrink-0 items-center gap-2" aria-hidden="true">
        {phases.map((p, i) => (
          <div key={p.phase} className="flex-1">
            <div className={`h-1.5 rounded-full ${i === 0 ? 'bg-primary' : 'bg-secondary'}`} />
          </div>
        ))}
      </div>
    </SlideFrame>
  )
}

/* ------------------------------------------------------------------ */
/* 09 — Close                                                          */
/* ------------------------------------------------------------------ */
export function CloseSlide() {
  return (
    <section className="relative flex h-full w-full flex-col items-center justify-center overflow-hidden px-6 text-center sm:px-10">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            'radial-gradient(55% 55% at 50% 40%, oklch(0.74 0.166 52 / 0.16), transparent 65%)',
        }}
      />
      <div className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/60 px-4 py-1.5">
        <Sparkles className="size-3.5 text-primary" />
        <span className="text-xs font-medium text-muted-foreground">The next step</span>
      </div>
      <h2 className="mt-6 max-w-3xl text-balance font-display text-3xl font-semibold leading-tight tracking-tight text-foreground sm:text-5xl">
        Let&apos;s start the POC and <span className="text-primary">prove it on your terms.</span>
      </h2>
      <p className="mt-5 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
        The scope is defined, the team is aligned, and the partnership is proven.
        All that&apos;s left is your go-ahead.
      </p>
      <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
        <span className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground">
          Approve the POC kickoff
          <ArrowRight className="size-4" />
        </span>
        <div className="inline-flex items-center gap-2 rounded-lg border border-border bg-secondary/40 px-4 py-2">
          <div className="relative h-4 w-[4.5rem] sm:w-[5rem] lg:w-[5.5rem]">
            <Image
              src={matrixLogo}
              alt="Matrix logo"
              fill
              style={{ objectFit: 'contain' }}
              priority={false}
            />
          </div>
          <div className="relative h-4 w-[5rem] sm:w-[5.5rem] lg:w-[6rem]">
            <Image
              src={bmcHelixLogo}
              alt="BMC Helix logo"
              fill
              style={{ objectFit: 'contain' }}
              priority={false}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
