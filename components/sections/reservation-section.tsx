import { Section } from '@/components/layout/section'
import { SectionTitle } from '@/components/layout/section-title'

const reservationSteps = [
  {
    step: '01',
    title: '상담 방식 선택',
    description: '카카오톡, 전화, 방문 중 편한 방식을 먼저 선택합니다.',
  },
  {
    step: '02',
    title: '현재 상태 확인',
    description: '피부 고민과 원하는 일정만 간단히 전달합니다.',
  },
  {
    step: '03',
    title: '예약 확정',
    description: '안내된 시간에 맞춰 상담 또는 예약을 이어갑니다.',
  },
]

export function ReservationSection() {
  return (
    <Section id="reservation" className="bg-[var(--color-background)]">
      <div className="space-y-10">
        <SectionTitle
          eyebrow="Reservation"
          title="예약은 간단하게, 확인은 명확하게."
          description="과한 입력 없이 다음 행동이 자연스럽게 이어지도록, 예약 전 확인해야 할 항목만 정리합니다."
        />

        <div className="grid gap-4 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-[var(--radius-xl)] border border-[var(--color-border)] bg-[var(--color-surface)] p-6 sm:p-8">
            <h3 className="text-lg font-semibold text-[var(--color-text-primary)]">예약 안내</h3>
            <p className="mt-3 text-sm leading-relaxed text-[var(--color-text-secondary)]">
              상담 전에는 아래 항목만 확인해도 충분합니다. 다음 단계에서 실제 예약 폼이나
              연결 수단을 추가할 수 있습니다.
            </p>

            <dl className="mt-6 grid gap-4 sm:grid-cols-3">
              <div className="rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-[var(--color-background)] p-5">
                <dt className="text-sm font-medium text-[var(--color-text-light)]">상담 시간</dt>
                <dd className="mt-2 text-base font-semibold text-[var(--color-text-primary)]">
                  30분 내외
                </dd>
              </div>
              <div className="rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-[var(--color-background)] p-5">
                <dt className="text-sm font-medium text-[var(--color-text-light)]">예약 방식</dt>
                <dd className="mt-2 text-base font-semibold text-[var(--color-text-primary)]">
                  상담 우선
                </dd>
              </div>
              <div className="rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-[var(--color-background)] p-5">
                <dt className="text-sm font-medium text-[var(--color-text-light)]">안내 항목</dt>
                <dd className="mt-2 text-base font-semibold text-[var(--color-text-primary)]">
                  고민 / 일정 / 연락처
                </dd>
              </div>
            </dl>
          </div>

          <div className="rounded-[var(--radius-xl)] border border-[var(--color-border)] bg-[var(--color-surface-soft)] p-6 sm:p-8">
            <h3 className="text-lg font-semibold text-[var(--color-text-primary)]">예약 절차</h3>
            <ol className="mt-6 space-y-4">
              {reservationSteps.map((item) => (
                <li
                  key={item.step}
                  className="rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-[var(--color-background)] p-5"
                >
                  <p className="text-sm font-medium tracking-[0.24em] text-[var(--color-text-light)] uppercase">
                    {item.step}
                  </p>
                  <h4 className="mt-3 text-base font-semibold text-[var(--color-text-primary)]">
                    {item.title}
                  </h4>
                  <p className="mt-2 text-sm leading-relaxed text-[var(--color-text-secondary)]">
                    {item.description}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </Section>
  )
}
