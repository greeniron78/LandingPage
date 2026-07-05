import type { ReactNode } from 'react'

type SectionTitleProps = {
  eyebrow?: string
  title: string
  description?: ReactNode
  className?: string
}

export function SectionTitle({
  eyebrow,
  title,
  description,
  className = '',
}: SectionTitleProps) {
  return (
    <header className={['max-w-3xl space-y-4', className].filter(Boolean).join(' ')}>
      {eyebrow ? (
        <p className="text-sm font-medium tracking-[0.24em] text-[var(--color-text-light)] uppercase">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="text-3xl font-semibold tracking-tight text-[var(--color-text-primary)] sm:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="text-base leading-relaxed text-[var(--color-text-secondary)]">
          {description}
        </p>
      ) : null}
    </header>
  )
}
