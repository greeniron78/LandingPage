import { Section } from '@/components/layout/section'
import { SectionTitle } from '@/components/layout/section-title'
import { ContactCards } from '@/components/sections/contact-cards'
import { contactConfig } from '@/config/contact'

export function ContactSection() {
  return (
    <Section id="contact" className="bg-[var(--color-background)]">
      <div className="space-y-10">
        <SectionTitle
          title={contactConfig.sectionTitle}
          description={contactConfig.sectionSubtitle}
          className="max-w-2xl"
        />

        <ContactCards
          cards={contactConfig.cards}
          telephoneNumber={contactConfig.telephoneNumber}
        />

        {contactConfig.businessHours || contactConfig.consultationMessage ? (
          <div className="grid gap-4 rounded-[var(--radius-xl)] border border-[var(--color-border)] bg-[var(--color-surface)] p-6 shadow-[0_12px_30px_rgba(17,17,17,0.04)] sm:p-8 lg:grid-cols-2">
            {contactConfig.businessHours ? (
              <div className="space-y-2">
                <p className="text-xs font-medium uppercase tracking-[0.24em] text-[var(--color-text-light)]">
                  Business Hours
                </p>
                <p className="text-sm leading-7 text-[var(--color-text-primary)]">
                  {contactConfig.businessHours}
                </p>
              </div>
            ) : null}

            {contactConfig.consultationMessage ? (
              <div className="space-y-2">
                <p className="text-xs font-medium uppercase tracking-[0.24em] text-[var(--color-text-light)]">
                  Consultation Message
                </p>
                <p className="text-sm leading-7 text-[var(--color-text-primary)]">
                  {contactConfig.consultationMessage}
                </p>
              </div>
            ) : null}
          </div>
        ) : null}
      </div>
    </Section>
  )
}
