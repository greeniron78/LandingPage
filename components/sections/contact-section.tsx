import { Card } from '@/components/layout/card'
import { Section } from '@/components/layout/section'
import { SectionTitle } from '@/components/layout/section-title'
import { ContactCards } from '@/components/sections/contact-cards'
import { contactContent } from '@/content/contact'
import { contactConfig } from '@/config/contact'

export function ContactSection() {
  return (
    <Section id="contact" className="bg-[var(--color-background)]">
      <div className="space-y-10">
        <SectionTitle
          title={contactContent.sectionTitle}
          description={contactContent.sectionSubtitle}
          className="max-w-2xl"
        />

        <ContactCards
          cards={contactConfig.cards}
          telephoneNumber={contactConfig.telephoneNumber}
        />

        {contactConfig.businessHours || contactConfig.consultationMessage ? (
          <Card as="div" tone="surface" radius="xl" shadow="sm" className="grid gap-4 p-6 sm:p-8 lg:grid-cols-2">
            {contactConfig.businessHours ? (
              <div className="space-y-2">
                <p className="text-xs font-medium uppercase tracking-[0.24em] text-[var(--color-text-light)]">
                  {contactContent.businessHoursLabel}
                </p>
                <p className="text-sm leading-7 text-[var(--color-text-primary)]">
                  {contactConfig.businessHours}
                </p>
              </div>
            ) : null}

            {contactConfig.consultationMessage ? (
              <div className="space-y-2">
                <p className="text-xs font-medium uppercase tracking-[0.24em] text-[var(--color-text-light)]">
                  {contactContent.consultationMessageLabel}
                </p>
                <p className="text-sm leading-7 text-[var(--color-text-primary)]">
                  {contactConfig.consultationMessage}
                </p>
              </div>
            ) : null}
          </Card>
        ) : null}
      </div>
    </Section>
  )
}
