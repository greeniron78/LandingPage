'use client'

import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import { CanvasEngine } from '@/components/canvas/canvas-engine'

gsap.registerPlugin(ScrollTrigger)

type HeroCanvasProps = {
  frames: readonly string[]
}

function clamp(value: number, min: number, max: number) {
  return Math.min(max, Math.max(min, value))
}

function progressBetween(progress: number, start: number, end: number) {
  if (end === start) {
    return progress >= end ? 1 : 0
  }

  return clamp((progress - start) / (end - start), 0, 1)
}

function enterStyle(progress: number, start: number, end: number, offsetY: number) {
  const entered = progressBetween(progress, start, end)
  const exiting = progressBetween(progress, 0.9, 1)

  return {
    opacity: entered * (1 - exiting),
    transform: `translate3d(0, ${offsetY * (1 - entered) - 30 * exiting}px, 0)`,
  }
}

export function HeroCanvas({ frames }: HeroCanvasProps) {
  const heroRef = useRef<HTMLElement | null>(null)
  const [progress, setProgress] = useState(0)

  const premiumLabelStyle = enterStyle(progress, 0.1, 0.25, 20)
  const headlineStyle = enterStyle(progress, 0.25, 0.5, 24)
  const descriptionStyle = enterStyle(progress, 0.5, 0.75, 18)
  const ctaStyle = enterStyle(progress, 0.75, 0.9, 16)

  useEffect(() => {
    const hero = heroRef.current

    if (!hero) {
      return undefined
    }

    const instance = ScrollTrigger.create({
      trigger: hero,
      start: 'top top',
      end: '+=2400',
      pin: true,
      pinSpacing: true,
      scrub: true,
      invalidateOnRefresh: true,
      onUpdate: (self) => {
        setProgress(self.progress)
      },
      onRefresh: (self) => {
        setProgress(self.progress)
      },
    })

    return () => {
      instance.kill()
    }
  }, [])

  return (
    <section ref={heroRef} className="relative isolate min-h-[100svh] overflow-hidden bg-[var(--color-background)]">
      <div className="relative h-[100svh] overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(248,246,243,0.32)_0%,rgba(255,252,250,0.08)_42%,rgba(244,239,233,0.32)_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_34%,rgba(255,255,255,0)_0%,rgba(255,252,249,0.08)_46%,rgba(10,10,10,0.16)_100%)]" />

        <CanvasEngine frames={frames} progress={progress} className="absolute inset-0" />

        <div className="absolute inset-0 z-20 flex items-end px-6 pb-[calc(24px+env(safe-area-inset-bottom))] sm:px-8 lg:px-12">
          <div className="max-w-3xl space-y-6 text-left">
            <p
              className="text-[0.7rem] font-medium uppercase tracking-[0.42em] text-[rgba(255,255,255,0.88)] sm:text-[0.75rem]"
              style={premiumLabelStyle}
            >
              Premium Skin Care
            </p>

            <div className="space-y-5">
              <h1
                className="max-w-2xl text-4xl font-semibold tracking-[-0.04em] text-white sm:text-5xl lg:text-7xl"
                style={headlineStyle}
              >
                당신의 피부가
                <span className="block">조금 더 편안해질 수 있도록.</span>
              </h1>

              <p
                className="max-w-xl text-[15px] leading-[1.95] text-[rgba(255,255,255,0.72)] sm:text-base lg:text-lg"
                style={descriptionStyle}
              >
                피부가 편안해지는 과정이 곧 브랜드를 경험하는 순간이 되도록,
                가장 자연스러운 흐름으로 섬세하게 이어집니다.
              </p>
            </div>

            <div style={ctaStyle} className="pointer-events-auto">
              <button
                type="button"
                className="inline-flex items-center rounded-full border border-[rgba(255,255,255,0.18)] bg-[rgba(255,255,255,0.10)] px-5 py-3 text-sm font-medium tracking-[-0.01em] text-[rgba(255,255,255,0.92)]"
              >
                상담 예약하기
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
