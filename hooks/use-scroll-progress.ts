'use client'

import { useEffect, useRef, useState, type RefObject } from 'react'

type UseScrollProgressOptions = {
  targetRef: RefObject<HTMLElement | null>
  offsetStart?: number
  offsetEnd?: number
}

function clamp(value: number, min: number, max: number) {
  return Math.min(max, Math.max(min, value))
}

export function useScrollProgress({
  targetRef,
  offsetStart = 0,
  offsetEnd = 1,
}: UseScrollProgressOptions) {
  const [progress, setProgress] = useState(0)
  const progressRef = useRef(0)

  useEffect(() => {
    const target = targetRef.current

    if (!target) {
      return undefined
    }

    let frameId = 0

    const updateProgress = () => {
      const rect = target.getBoundingClientRect()
      const viewportHeight = window.innerHeight || document.documentElement.clientHeight
      const totalRange = rect.height + viewportHeight
      const rawProgress = (viewportHeight - rect.top) / totalRange
      const normalized = clamp(rawProgress, 0, 1)
      const mapped = offsetStart + (offsetEnd - offsetStart) * normalized
      const nextProgress = clamp(mapped, 0, 1)

      if (Math.abs(progressRef.current - nextProgress) < 0.001) {
        return
      }

      progressRef.current = nextProgress
      setProgress(nextProgress)
    }

    const onScroll = () => {
      cancelAnimationFrame(frameId)
      frameId = window.requestAnimationFrame(updateProgress)
    }

    updateProgress()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)

    return () => {
      cancelAnimationFrame(frameId)
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [offsetEnd, offsetStart, targetRef])

  return progress
}
