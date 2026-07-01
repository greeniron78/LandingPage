'use client'

import type { HTMLAttributes } from 'react'
import { useMemo, useRef } from 'react'
import { useCanvasSequence } from '@/hooks/use-canvas-sequence'
import { useReducedMotion } from '@/hooks/use-reduced-motion'

type CanvasEngineProps = HTMLAttributes<HTMLDivElement> & {
  frames: readonly string[]
  progress?: number
  maxDpr?: number
}

function clamp(value: number, min: number, max: number) {
  return Math.min(max, Math.max(min, value))
}

export function CanvasEngine({
  frames,
  progress = 0,
  maxDpr = 2,
  className = '',
  ...props
}: CanvasEngineProps) {
  const containerRef = useRef<HTMLDivElement | null>(null)
  const prefersReducedMotion = useReducedMotion()
  const normalizedProgress = useMemo(
    () => (prefersReducedMotion ? 0 : clamp(progress, 0, 1)),
    [prefersReducedMotion, progress],
  )
  const { canvasRef } = useCanvasSequence({
    frames,
    progress: normalizedProgress,
    containerRef,
    maxDpr,
  })

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
