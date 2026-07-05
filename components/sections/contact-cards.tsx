'use client'

import { useEffect, useRef, useState } from 'react'
import { Card } from '@/components/layout/card'
import { contactContent } from '@/content/contact'
import type { ContactCardConfig, ContactIconName } from '@/config/contact'
import { useReducedMotion } from '@/hooks/use-reduced-motion'

type ContactCardsProps = {
  cards: readonly ContactCardConfig[]
  telephoneNumber: string
}

function stripTelephoneNumber(value: string) {
  return value.replace(/[^\d+]/g, '')
}

function ContactIcon({ icon }: { icon: ContactIconName }) {
  const sharedClassName = 'h-6 w-6 text-[var(--color-text-primary)]'

  if (icon === 'kakao') {
    return (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className={sharedClassName}>
        <path
          d="M12 4.5c-4.418 0-8 2.92-8 6.525 0 2.278 1.53 4.282 3.84 5.458l-.796 2.913c-.064.236.193.421.399.288l3.494-2.258c.35.046.71.072 1.063.072 4.418 0 8-2.92 8-6.523C20 7.42 16.418 4.5 12 4.5Z"
          fill="currentColor"
          fillOpacity=".12"
        />
        <path
          d="M8.8 9.6h2.1v4.7H9.7v-1.6l-1.3 1.6H6.8l1.8-2.2-1.7-2.5h1.6l1.1 1.7V9.6Zm4.2 0h1.5v3.6h2.2v1.1H13V9.6Z"
          fill="currentColor"
        />
      </svg>
    )
  }

  if (icon === 'phone') {
    return (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className={sharedClassName}>
        <path
          d="M7.5 4.5h2.8l1.2 3.2-1.8 1.5c.9 1.8 2.3 3.2 4.1 4.1l1.5-1.8 3.2 1.2v2.8c0 .8-.7 1.5-1.5 1.5C10.3 17 7 13.7 7 9.6V6c0-.8.7-1.5 1.5-1.5Z"
          fill="currentColor"
          fillOpacity=".12"
        />
        <path
          d="M10.7 7.2c1.7.5 3 1.8 3.5 3.5"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
      </svg>
    )
  }

  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className={sharedClassName}>
      <path
        d="M12 3.75c3.45 0 6.25 2.66 6.25 5.94 0 4.58-6.25 10.56-6.25 10.56S5.75 14.27 5.75 9.69c0-3.28 2.8-5.94 6.25-5.94Z"
        fill="currentColor"
        fillOpacity=".12"
      />
      <path
        d="M12 8.3a1.9 1.9 0 1 0 0 3.8 1.9 1.9 0 0 0 0-3.8Z"
        fill="currentColor"
      />
    </svg>
  )
}

function ContactCard({
  card,
  telephoneNumber,
  isVisible,
  prefersReducedMotion,
}: {
  card: ContactCardConfig
  telephoneNumber: string
  isVisible: boolean
  prefersReducedMotion: boolean
}) {
  const href =
    card.icon === 'phone'
      ? `tel:${stripTelephoneNumber(telephoneNumber)}`
      : card.href ?? '#'

  return (
    <Card
      as="article"
      tone="surface"
      radius="xl"
      shadow="md"
      className={[
        'flex h-full flex-col p-6 sm:p-7',
        prefersReducedMotion
          ? 'transition-none'
          : 'transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-[0_22px_60px_rgba(17,17,17,0.08)]',
      ].join(' ')}
    >
      <div className="flex items-start gap-4">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-[var(--color-border)] bg-[var(--color-background)]">
          <ContactIcon icon={card.icon} />
        </div>

        <div className="min-w-0 flex-1">
          <h3 className="text-xl font-semibold tracking-[-0.03em] text-[var(--color-text-primary)]">
            {card.title}
          </h3>
          <p className="mt-3 whitespace-pre-line text-sm leading-7 text-[var(--color-text-secondary)]">
            {card.description.join('\n')}
          </p>
        </div>
      </div>

      {card.address ? (
        <Card as="div" className="mt-6 p-4">
          <p className="text-xs font-medium uppercase tracking-[0.24em] text-[var(--color-text-light)]">
            {contactContent.businessAddressLabel}
          </p>
          <p className="mt-2 text-sm leading-6 text-[var(--color-text-primary)]">{card.address}</p>
        </Card>
      ) : null}

      <div className="mt-auto pt-6">
        <a
          href={href}
          target={card.external ? '_blank' : undefined}
          rel={card.external ? 'noreferrer' : undefined}
          tabIndex={isVisible ? 0 : -1}
          className={[
            'inline-flex items-center justify-center rounded-full border border-[var(--color-border)] bg-[var(--color-background)] px-5 py-3 text-sm font-medium text-[var(--color-text-primary)]',
            prefersReducedMotion
              ? 'transition-none'
              : 'transition-colors duration-300 hover:border-[rgba(16,16,16,0.12)] hover:bg-[var(--color-surface-soft)]',
          ].join(' ')}
        >
          {card.actionLabel}
        </a>
      </div>
    </Card>
  )
}

export function ContactCards({ cards, telephoneNumber }: ContactCardsProps) {
  const prefersReducedMotion = useReducedMotion()
  const [visible, setVisible] = useState(() => cards.map(() => false))
  const cardRefs = useRef<(HTMLLIElement | null)[]>([])

  useEffect(() => {
    if (prefersReducedMotion) {
      setVisible(cards.map(() => true))
      cardRefs.current = cardRefs.current.slice(0, cards.length)
      return
    }

    setVisible(cards.map(() => false))
    cardRefs.current = cardRefs.current.slice(0, cards.length)
  }, [cards, prefersReducedMotion])

  useEffect(() => {
    const elements = cardRefs.current.filter((element): element is HTMLLIElement => Boolean(element))

    if (elements.length === 0) {
      return undefined
    }

    if (prefersReducedMotion) {
      setVisible(cards.map(() => true))
      return undefined
    }

    if (typeof IntersectionObserver === 'undefined') {
      setVisible(cards.map(() => true))
      return undefined
    }

    const observer = new IntersectionObserver(
      (entries) => {
        setVisible((current) => {
          const next = [...current]

          for (const entry of entries) {
            if (!entry.isIntersecting) {
              continue
            }

            const index = Number((entry.target as HTMLElement).dataset.index)

            if (Number.isNaN(index)) {
              continue
            }

            next[index] = true
          }

          return next
        })
      },
      {
        threshold: 0.2,
        rootMargin: '0px 0px -10% 0px',
      },
    )

    elements.forEach((element) => {
      observer.observe(element)
    })

    return () => {
      observer.disconnect()
    }
  }, [cards, prefersReducedMotion])

  return (
    <ul className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
      {cards.map((card, index) => (
        <li
          key={card.id}
          ref={(element) => {
            cardRefs.current[index] = element
          }}
          data-index={index}
          className={[
            'transition-all duration-700 ease-out',
            visible[index] ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0',
          ].join(' ')}
          style={{ transitionDelay: `${index * 90}ms` }}
        >
          <ContactCard
            card={card}
            telephoneNumber={telephoneNumber}
            isVisible={visible[index]}
            prefersReducedMotion={prefersReducedMotion}
          />
        </li>
      ))}
    </ul>
  )
}
