import type { ReactNode } from 'react'

type ContainerProps = {
  children: ReactNode
  className?: string
}

export function Container({ children, className = '' }: ContainerProps) {
  return (
    <div
      className={[
        'mx-auto w-full max-w-[var(--container-max-width)]',
        'px-[var(--container-padding-mobile)]',
        'sm:px-[var(--container-padding-tablet)]',
        'lg:px-[var(--container-padding-desktop)]',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
    >
      {children}
    </div>
  )
}
