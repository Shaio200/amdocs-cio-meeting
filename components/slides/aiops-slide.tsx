import {
  Activity,
  ArrowRight,
  BrainCircuit,
  Boxes,
  Cloud,
  Cpu,
  Database,
  GaugeCircle,
  Layers,
  Network,
  Radar,
  ScanSearch,
  Server,
  ShieldCheck,
  Sparkles,
  TrendingDown,
  TriangleAlert,
  Users2,
  Wand2,
  Workflow,
} from 'lucide-react'
import { SlideFrame } from '@/components/deck/slide-frame'

const sources = [
  { icon: Server, title: 'Servers & Infrastructure', sub: 'Physical · Virtual · Containers' },
  { icon: Boxes, title: 'Applications', sub: 'APM · Middleware · APIs' },
  { icon: Cloud, title: 'Cloud Services', sub: 'AWS · Azure · GCP · Serverless' },
  { icon: Network, title: 'Dependencies', sub: 'Service mapping · Topology' },
]

const engine = [
  { icon: Cpu, label: 'Machine Learning' },
  { icon: Radar, label: 'Anomaly Detection' },
  { icon: ScanSearch, label: 'Pattern Recognition' },
  { icon: Activity, label: 'Behavior Analysis' },
]

const outcomes = [
  {
    icon: Wand2,
    tone: 'green',
    title: 'Automated Remediation',
    items: ['Auto-heal & self-service', 'Runbook automation', 'Config drift correction'],
    tag: 'Actions executed automatically',
  },
  {
    icon: ScanSearch,
    tone: 'primary',
    title: 'Root Cause Analysis',
    items: ['AI-powered RCA', 'Correlation & causation', 'Dependency mapping'],
    tag: 'Root cause identified',
  },
  {
    icon: TriangleAlert,
    tone: 'red',
    title: 'Predictive Alerts',
    items: ['Anomaly prediction', 'Capacity forecasting', 'Proactive notifications'],
    tag: 'Issues predicted & prevented',
  },
]

const foundation = [
  { icon: ShieldCheck, title: 'Enterprise Security', sub: 'RBAC · Encryption' },
  { icon: Database, title: 'Data Lake', sub: 'Scalable · Governed' },
  { icon: Workflow, title: 'APIs & Integrations', sub: 'ITSM · DevOps' },
  { icon: Layers, title: 'Unified Dashboard', sub: 'Single pane of glass' },
  { icon: Users2, title: 'Collaboration', sub: 'Teams · ChatOps' },
]

const metrics = [
  { icon: TrendingDown, value: 'Up to 90%', label: 'MTTR reduced' },
  { icon: GaugeCircle, value: 'High', label: 'Precision' },
  { icon: ShieldCheck, value: 'Always-on', label: 'Availability' },
  { icon: Sparkles, value: 'Optimized', label: 'Cost savings' },
]

const toneMap: Record<string, string> = {
  green: 'border-[oklch(0.7_0.14_160/0.4)] bg-[oklch(0.7_0.14_160/0.10)] text-[oklch(0.8_0.14_160)]',
  primary: 'border-primary/40 bg-primary/10 text-primary',
  red: 'border-destructive/40 bg-destructive/10 text-destructive',
}

function FlowArrow({ label }: { label: string }) {
  return (
    <div className="hidden flex-col items-center justify-center gap-1 px-1 lg:flex">
      <span className="text-[0.55rem] font-medium uppercase tracking-wider text-muted-foreground [writing-mode:vertical-rl] rotate-180">
        {label}
      </span>
      <ArrowRight className="size-5 text-primary" />
    </div>
  )
}

export function AiopsSlide() {
  return (
    <SlideFrame
      index="AIOps"
      eyebrow="Discovery → Intelligent Operations"
      title={
        <>
          AIOps Integration Architecture —{' '}
          <span className="text-primary">from discovery to autonomous ops.</span>
        </>
      }
      tint="accent"
    >
      <div className="flex min-h-0 flex-1 flex-col rounded-2xl border border-border bg-card/60 p-3 sm:p-4 lg:p-5">
        {/* flow label */}
        <div className="mb-3 flex shrink-0 items-center justify-center gap-2 text-center text-[0.7rem] font-semibold uppercase tracking-wider sm:gap-3 sm:text-xs">
          <span className="text-accent">Intelligent Discovery</span>
          <ArrowRight className="size-3.5 text-primary" />
          <span className="text-foreground">AI/ML Processing</span>
          <ArrowRight className="size-3.5 text-primary" />
          <span className="text-primary">Autonomous Operations</span>
        </div>

        {/* three columns */}
        <div className="grid min-h-0 flex-1 gap-3 lg:grid-cols-[1fr_auto_0.9fr_auto_1.1fr] lg:gap-0">
          {/* col 1 — discovery */}
          <div className="flex min-h-0 flex-col rounded-xl border border-accent/30 bg-accent/[0.06] p-3">
            <div className="mb-2 flex items-center gap-2">
              <div className="grid size-7 place-items-center rounded-md bg-accent/15 text-accent">
                <Radar className="size-4" />
              </div>
              <div className="leading-tight">
                <p className="font-display text-xs font-semibold text-foreground">BMC Helix Discovery</p>
                <p className="text-[0.62rem] text-muted-foreground">Continuous · Agentless</p>
              </div>
            </div>
            <div className="flex flex-1 flex-col justify-between gap-1.5">
              {sources.map((s) => (
                <div key={s.title} className="flex items-center gap-2 rounded-lg border border-border bg-secondary/40 px-2.5 py-1.5">
                  <s.icon className="size-4 shrink-0 text-accent" />
                  <div className="leading-tight">
                    <p className="text-[0.72rem] font-medium text-foreground">{s.title}</p>
                    <p className="text-[0.6rem] text-muted-foreground">{s.sub}</p>
                  </div>
                </div>
              ))}
              <div className="mt-1 grid grid-cols-3 gap-1.5 text-center">
                {['80K+ Devices', 'Real-time', 'Rich Context'].map((c) => (
                  <span key={c} className="rounded-md bg-secondary/60 px-1 py-1 text-[0.58rem] font-medium text-muted-foreground">
                    {c}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <FlowArrow label="Data stream" />

          {/* col 2 — engine */}
          <div className="flex min-h-0 flex-col items-center rounded-xl border border-border bg-secondary/30 p-3">
            <div className="relative mb-2 grid place-items-center">
              <div className="glow-primary grid size-16 place-items-center rounded-full border border-primary/40 bg-primary/10 text-primary">
                <BrainCircuit className="size-8" />
              </div>
            </div>
            <p className="font-display text-xs font-semibold text-foreground">AI / ML Engine</p>
            <p className="mb-2 text-center text-[0.6rem] text-muted-foreground">Intelligent processing & analysis</p>
            <div className="grid w-full flex-1 grid-cols-2 gap-1.5">
              {engine.map((e) => (
                <div key={e.label} className="flex flex-col items-center justify-center gap-1 rounded-lg border border-border bg-card/70 px-1 py-2 text-center">
                  <e.icon className="size-4 text-accent" />
                  <span className="text-[0.6rem] font-medium leading-tight text-foreground">{e.label}</span>
                </div>
              ))}
            </div>
            <div className="mt-1.5 w-full rounded-lg border border-primary/30 bg-primary/[0.08] px-2 py-1.5 text-center">
              <p className="text-[0.62rem] font-semibold text-foreground">AI Insights & Correlation</p>
              <p className="text-[0.56rem] text-muted-foreground">Reduces noise · predicts impact</p>
            </div>
          </div>

          <FlowArrow label="Intelligence" />

          {/* col 3 — outcomes */}
          <div className="flex min-h-0 flex-col gap-1.5">
            {outcomes.map((o) => (
              <div key={o.title} className={`flex flex-1 flex-col justify-center rounded-xl border p-2.5 ${toneMap[o.tone]}`}>
                <div className="flex items-center gap-2">
                  <o.icon className="size-4 shrink-0" />
                  <p className="font-display text-xs font-semibold text-foreground">{o.title}</p>
                </div>
                <div className="mt-1 flex flex-wrap gap-x-3 gap-y-0.5 pl-6">
                  {o.items.map((it) => (
                    <span key={it} className="text-[0.6rem] text-muted-foreground">
                      • {it}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* metrics */}
        <div className="mt-3 grid shrink-0 grid-cols-4 gap-2">
          {metrics.map((m) => (
            <div key={m.label} className="flex items-center gap-2 rounded-lg border border-border bg-secondary/40 px-2.5 py-1.5">
              <m.icon className="size-4 shrink-0 text-primary" />
              <div className="leading-tight">
                <p className="text-[0.72rem] font-semibold text-foreground">{m.value}</p>
                <p className="text-[0.58rem] text-muted-foreground">{m.label}</p>
              </div>
            </div>
          ))}
        </div>

        {/* foundation bar */}
        <div className="mt-2 grid shrink-0 grid-cols-2 gap-2 rounded-xl border border-border bg-secondary/30 p-2 sm:grid-cols-5">
          {foundation.map((f) => (
            <div key={f.title} className="flex items-center gap-2">
              <f.icon className="size-4 shrink-0 text-accent" />
              <div className="leading-tight">
                <p className="text-[0.66rem] font-semibold text-foreground">{f.title}</p>
                <p className="text-[0.56rem] text-muted-foreground">{f.sub}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </SlideFrame>
  )
}
