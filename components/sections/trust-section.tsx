import { Section } from '@/components/layout/section'
import { SectionTitle } from '@/components/layout/section-title'

const trustPoints = [
  {
    title: '맞춤 상담',
    description: '현재 피부 상태와 고민을 먼저 확인합니다.',
  },
  {
    title: '프리미엄 케어',
    description: '과한 연출보다 안정적인 관리 경험에 집중합니다.',
  },
  {
    title: '예약 중심',
    description: '상담에서 예약까지의 흐름을 간결하게 유지합니다.',
  },
]

export function TrustSection() {
  return (
    <Section id="trust" className="bg-[var(--color-surface)]">
      <div className="space-y-10">
        <SectionTitle
          eyebrow="Trust"
          title="피부를 이해하는 관리."
          description="사람을 생각하는 케어를 기준으로, 처음 방문하는 사용자도 편안하게 읽을 수 있는 구조로 정리합니다."
        />

        <ul className="grid gap-4 md:grid-cols-3">
          {trustPoints.map((point) => (
            <li
              key={point.title}
              className="rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-[var(--color-background)] p-6"
            >
              <h3 className="text-lg font-semibold text-[var(--color-text-primary)]">{point.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-[var(--color-text-secondary)]">
                {point.description}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  )
}
