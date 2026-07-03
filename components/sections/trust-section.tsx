import { Card } from '@/components/layout/card'
import { Section } from '@/components/layout/section'
import { SectionTitle } from '@/components/layout/section-title'
import { trustContent } from '@/content/trust'

export function TrustSection() {
  const { eyebrow, title, description, points } = trustContent

  return (
    <Section id="trust" className="bg-[var(--color-surface)]">
      <div className="space-y-10">
        <SectionTitle
          eyebrow={eyebrow}
          title={title}
          description={description}
        />

        <ul className="grid gap-4 md:grid-cols-3">
          {points.map((point) => (
            <Card as="li" key={point.title} className="p-6">
              <h3 className="text-lg font-semibold text-[var(--color-text-primary)]">{point.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-[var(--color-text-secondary)]">
                {point.description}
              </p>
            </Card>
          ))}
        </ul>
      </div>
    </Section>
  )
}
