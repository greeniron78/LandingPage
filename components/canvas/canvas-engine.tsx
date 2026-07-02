'use client'

import type { HTMLAttributes, RefObject } from 'react'
import { useEffect, useMemo, useRef, useState } from 'react'
import { useCanvasSequence } from '@/hooks/use-canvas-sequence'
import { useReducedMotion } from '@/hooks/use-reduced-motion'

type CanvasEngineProps = HTMLAttributes<HTMLDivElement> & {
  frames: readonly string[]
  progress?: number
  triggerRef?: RefObject<HTMLElement | null>
  maxDpr?: number
}

function clamp(value: number, min: number, max: number) {
  return Math.min(max, Math.max(min, value))
}

export function CanvasEngine({
  frames,
  progress = 0,
  triggerRef,
  maxDpr = 2,
  className = '',
  ...props
}: CanvasEngineProps) {
  const containerRef = useRef<HTMLDivElement | null>(null)
  const [scrollTriggerProgress, setScrollTriggerProgress] = useState<number | null>(null)
  const prefersReducedMotion = useReducedMotion()
  const effectiveProgress = scrollTriggerProgress ?? progress
  const normalizedProgress = useMemo(
    () => (prefersReducedMotion ? 0 : clamp(effectiveProgress, 0, 1)),
    [effectiveProgress, prefersReducedMotion],
  )
  const { canvasRef } = useCanvasSequence({
    frames,
    progress: normalizedProgress,
    containerRef,
    maxDpr,
  })

  useEffect(() => {
    if (!triggerRef?.current || typeof window === 'undefined') {
      return undefined
    }

    const globalWindow = window as Window & {
      gsap?: {
        ScrollTrigger?: {
          create: (options: {
            trigger: HTMLElement
            start?: string
            end?: string
            scrub?: boolean | number
            onUpdate?: (self: { progress: number }) => void
            onRefresh?: (self: { progress: number }) => void
          }) => { kill: () => void }
        }
      }
      ScrollTrigger?: {
        create: (options: {
          trigger: HTMLElement
          start?: string
          end?: string
          scrub?: boolean | number
          onUpdate?: (self: { progress: number }) => void
          onRefresh?: (self: { progress: number }) => void
        }) => { kill: () => void }
      }
    }

    const ScrollTrigger = globalWindow.ScrollTrigger ?? globalWindow.gsap?.ScrollTrigger

    if (!ScrollTrigger) {
      return undefined
    }

    const trigger = triggerRef.current

    const instance = ScrollTrigger.create({
      trigger,
      start: 'top top',
      end: 'bottom bottom',
      scrub: true,
      onUpdate: (self) => {
        setScrollTriggerProgress(self.progress)
      },
      onRefresh: (self) => {
        setScrollTriggerProgress(self.progress)
      },
    })

    return () => {
      instance.kill()
    }
  }, [triggerRef])

  return (
    <div
      ref={containerRef}
      className={['relative h-full w-full overflow-hidden', className].filter(Boolean).join(' ')}
      {...props}
    >
      <canvas ref={canvasRef} aria-hidden="true" className="block h-full w-full" />
    </div>
  )
}
