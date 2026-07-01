import type { HTMLAttributes, ReactNode } from 'react'
import { Container } from './container'

type SectionProps = HTMLAttributes<HTMLElement> & {
  children: ReactNode
  containerClassName?: string
}

export function Section({
  children,
  className = '',
  containerClassName = '',
  ...props
}: SectionProps) {
  return (
    <section
      className={[
        'py-[var(--section-spacing-mobile)]',
        'sm:py-[var(--section-spacing-tablet)]',
        'lg:py-[var(--section-spacing-desktop)]',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
      {...props}
    >
      <Container className={containerClassName}>{children}</Container>
    </section>
  )
}
