import { Section } from '@/components/layout/section'
import { SectionTitle } from '@/components/layout/section-title'

export function CtaSection() {
  return (
    <Section id="cta">
      <div className="rounded-[var(--radius-xl)] border border-[var(--color-border)] bg-[var(--color-surface)] p-6 sm:p-8 lg:p-10">
        <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
          <SectionTitle
            eyebrow="Action"
            title="상담 예약을 위한 마지막 단계."
            description="예약 기능은 다음 단계에서 연결하고, 지금은 사용자가 다음 행동을 이해할 수 있는 구조만 둡니다."
            className="max-w-2xl"
          />

          <div className="flex flex-wrap gap-3">
            <a
              href="#concerns"
              className="inline-flex items-center justify-center rounded-full border border-[var(--color-border)] bg-[var(--color-background)] px-5 py-3 text-sm font-medium text-[var(--color-text-primary)]"
            >
              상담 보기
            </a>
            <a
              href="#trust"
              className="inline-flex items-center justify-center rounded-full bg-[var(--color-primary)] px-5 py-3 text-sm font-medium text-white"
            >
              예약 준비
            </a>
          </div>
        </div>
      </div>
    </Section>
  )
}
