import { Section } from '@/components/layout/section'
import { SectionTitle } from '@/components/layout/section-title'

const storySteps = [
  {
    step: '01',
    title: '관심',
    description: '첫 화면에서 브랜드의 분위기와 톤을 빠르게 이해합니다.',
  },
  {
    step: '02',
    title: '공감',
    description: '내 피부 고민과 닮은 지점을 찾으며 읽기를 이어갑니다.',
  },
  {
    step: '03',
    title: '신뢰',
    description: '과장 없는 정보와 구조로 안심할 수 있게 만듭니다.',
  },
  {
    step: '04',
    title: '행동',
    description: '상담 또는 예약으로 이어지는 흐름을 준비합니다.',
  },
]

export function StorySection() {
  return (
    <Section id="story" className="bg-[var(--color-surface-soft)]">
      <div className="space-y-10">
        <SectionTitle
          eyebrow="Story"
          title="스크롤할수록 자연스럽게 이어지는 이야기."
          description="복잡한 정보보다 감정의 흐름을 먼저 정리해서, 다음 섹션으로 이동하는 이유를 만듭니다."
        />

        <ol className="grid gap-4 lg:grid-cols-4">
          {storySteps.map((item) => (
            <li
              key={item.step}
              className="rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-[var(--color-background)] p-6"
            >
              <p className="text-sm font-medium tracking-[0.24em] text-[var(--color-text-light)] uppercase">
                {item.step}
              </p>
              <h3 className="mt-4 text-lg font-semibold text-[var(--color-text-primary)]">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-[var(--color-text-secondary)]">
                {item.description}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </Section>
  )
}
