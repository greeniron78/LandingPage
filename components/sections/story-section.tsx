import { Card } from '@/components/layout/card'
import { Section } from '@/components/layout/section'
import { SectionTitle } from '@/components/layout/section-title'
import { storyContent } from '@/content/story'

export function StorySection() {
  const { eyebrow, title, description, steps } = storyContent

  return (
    <Section id="story" className="bg-[var(--color-surface-soft)]">
      <div className="space-y-10">
        <SectionTitle
          eyebrow={eyebrow}
          title={title}
          description={description}
        />

        <ol className="grid gap-4 lg:grid-cols-4">
          {steps.map((item) => (
            <Card as="li" key={item.step} className="p-6">
              <p className="text-sm font-medium tracking-[0.24em] text-[var(--color-text-light)] uppercase">
                {item.step}
              </p>
              <h3 className="mt-4 text-lg font-semibold text-[var(--color-text-primary)]">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-[var(--color-text-secondary)]">
                {item.description}
              </p>
            </Card>
          ))}
        </ol>
      </div>
    </Section>
  )
}
