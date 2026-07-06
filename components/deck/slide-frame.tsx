import type { ReactNode } from 'react'

export function SlideFrame({
  index,
  eyebrow,
  title,
  children,
  tint,
}: {
  index: string
  eyebrow: string
  title: ReactNode
  children: ReactNode
  tint?: 'primary' | 'accent'
}) {
  return (
    <section className="relative flex h-full w-full flex-col overflow-hidden px-6 pb-14 pt-8 sm:px-10 lg:px-16 lg:pb-12 lg:pt-10">
      {/* backdrop glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            tint === 'accent'
              ? 'radial-gradient(50% 45% at 85% 6%, oklch(0.78 0.13 210 / 0.14), transparent 60%)'
              : 'radial-gradient(50% 45% at 85% 6%, oklch(0.74 0.166 52 / 0.14), transparent 60%)',
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.25]"
        style={{
          backgroundImage:
            'linear-gradient(to right, oklch(0.98 0 0 / 0.05) 1px, transparent 1px), linear-gradient(to bottom, oklch(0.98 0 0 / 0.05) 1px, transparent 1px)',
          backgroundSize: '56px 56px',
          maskImage: 'radial-gradient(80% 70% at 60% 10%, black, transparent 85%)',
        }}
      />

      {/* header */}
      <header className="shrink-0">
        <div className="flex items-center gap-3">
          <span className="font-mono text-xs uppercase tracking-[0.25em] text-primary">
            {index}
          </span>
          <span className="h-px flex-1 max-w-24 bg-border" />
          <span className="font-mono text-[0.7rem] uppercase tracking-[0.2em] text-muted-foreground">
            {eyebrow}
          </span>
        </div>
        <h2 className="mt-3 max-w-4xl text-balance font-display text-2xl font-semibold leading-tight tracking-tight text-foreground sm:text-3xl lg:text-4xl">
          {title}
        </h2>
      </header>

      {/* body */}
      <div className="mt-5 flex min-h-0 flex-1 flex-col lg:mt-7">{children}</div>

      {/* footer brand */}
      <footer className="pointer-events-none absolute bottom-4 left-6 flex items-center gap-2 sm:left-10 lg:left-16">
        <span className="font-display text-sm font-semibold text-foreground">
          Matrix
        </span>
        <span className="text-muted-foreground">·</span>
        <span className="text-sm text-muted-foreground">BMC Helix</span>
      </footer>
    </section>
  )
}
