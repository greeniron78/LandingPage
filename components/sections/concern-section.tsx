import { Section } from '@/components/layout/section'
import { SectionTitle } from '@/components/layout/section-title'

const concerns = [
  '여드름',
  '여드름 자국',
  '홍조',
  '모공',
  '탄력 저하',
  '기미',
  '잡티',
  '피부톤 개선',
]

export function ConcernSection() {
  return (
    <Section id="concerns">
      <div className="space-y-10">
        <SectionTitle
          eyebrow="Concerns"
          title="자주 찾는 피부 고민을 한눈에 살펴봅니다."
          description="사용자가 스스로 상황을 확인하고, 다음 행동으로 자연스럽게 이동할 수 있도록 구성합니다."
        />

        <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {concerns.map((concern) => (
            <li
              key={concern}
              className="rounded-full border border-[var(--color-border)] bg-[var(--color-surface)] px-4 py-3 text-sm text-[var(--color-text-secondary)]"
            >
              {concern}
            </li>
          ))}
        </ul>
      </div>
    </Section>
  )
}
