'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import { ChevronUp, ChevronDown } from 'lucide-react'

export type DeckSlide = {
  id: string
  label: string
  node: React.ReactNode
}

export function Deck({ slides }: { slides: DeckSlide[] }) {
  const [index, setIndex] = useState(0)
  const count = slides.length
  const lockRef = useRef(false)
  const touchY = useRef<number | null>(null)

  const go = useCallback(
    (next: number) => {
      setIndex((prev) => {
        const clamped = Math.max(0, Math.min(count - 1, next))
        return clamped
      })
    },
    [count],
  )

  const step = useCallback(
    (dir: number) => {
      if (lockRef.current) return
      lockRef.current = true
      setIndex((prev) => Math.max(0, Math.min(count - 1, prev + dir)))
      window.setTimeout(() => {
        lockRef.current = false
      }, 700)
    },
    [count],
  )

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (['ArrowDown', 'ArrowRight', 'PageDown', ' '].includes(e.key)) {
        e.preventDefault()
        step(1)
      } else if (['ArrowUp', 'ArrowLeft', 'PageUp'].includes(e.key)) {
        e.preventDefault()
        step(-1)
      } else if (e.key === 'Home') {
        e.preventDefault()
        go(0)
      } else if (e.key === 'End') {
        e.preventDefault()
        go(count - 1)
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [step, go, count])

  const onWheel = useCallback(
    (e: React.WheelEvent) => {
      if (Math.abs(e.deltaY) < 24) return
      step(e.deltaY > 0 ? 1 : -1)
    },
    [step],
  )

  const onTouchStart = (e: React.TouchEvent) => {
    touchY.current = e.touches[0].clientY
  }
  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchY.current === null) return
    const diff = touchY.current - e.changedTouches[0].clientY
    if (Math.abs(diff) > 50) step(diff > 0 ? 1 : -1)
    touchY.current = null
  }

  return (
    <div
      className="relative h-[100dvh] w-full overflow-hidden bg-background"
      onWheel={onWheel}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      {/* progress bar */}
      <div className="absolute inset-x-0 top-0 z-40 h-1 bg-secondary/60">
        <div
          className="h-full bg-primary transition-[width] duration-500 ease-out"
          style={{ width: `${((index + 1) / count) * 100}%` }}
        />
      </div>

      {/* slide track */}
      <div
        className="h-full w-full transition-transform duration-[600ms] ease-[cubic-bezier(0.65,0,0.35,1)]"
        style={{ transform: `translateY(-${index * 100}dvh)` }}
      >
        {slides.map((s) => (
          <div key={s.id} className="h-[100dvh] w-full">
            {s.node}
          </div>
        ))}
      </div>

      {/* nav rail (right) */}
      <nav
        aria-label="Slide navigation"
        className="absolute right-4 top-1/2 z-40 hidden -translate-y-1/2 flex-col items-end gap-3 lg:flex"
      >
        {slides.map((s, i) => (
          <button
            key={s.id}
            onClick={() => go(i)}
            className="group flex items-center gap-2"
            aria-label={`Go to ${s.label}`}
            aria-current={i === index}
          >
            <span
              className={`whitespace-nowrap rounded-md px-2 py-1 text-xs font-medium transition-all ${
                i === index
                  ? 'bg-secondary text-foreground opacity-100'
                  : 'text-muted-foreground opacity-0 group-hover:opacity-100'
              }`}
            >
              {s.label}
            </span>
            <span
              className={`h-2 rounded-full transition-all ${
                i === index
                  ? 'h-6 w-2 bg-primary'
                  : 'w-2 bg-muted-foreground/40 group-hover:bg-muted-foreground'
              }`}
            />
          </button>
        ))}
      </nav>

      {/* prev / next + counter (bottom right) */}
      <div className="absolute bottom-5 right-5 z-40 flex items-center gap-3">
        <span className="font-mono text-xs text-muted-foreground">
          {String(index + 1).padStart(2, '0')} / {String(count).padStart(2, '0')}
        </span>
        <div className="flex gap-1.5">
          <button
            onClick={() => step(-1)}
            disabled={index === 0}
            aria-label="Previous slide"
            className="grid size-9 place-items-center rounded-lg border border-border bg-secondary/60 text-foreground transition-colors hover:bg-secondary disabled:cursor-not-allowed disabled:opacity-30"
          >
            <ChevronUp className="size-4" />
          </button>
          <button
            onClick={() => step(1)}
            disabled={index === count - 1}
            aria-label="Next slide"
            className="grid size-9 place-items-center rounded-lg border border-border bg-secondary/60 text-foreground transition-colors hover:bg-secondary disabled:cursor-not-allowed disabled:opacity-30"
          >
            <ChevronDown className="size-4" />
          </button>
        </div>
      </div>
    </div>
  )
}
