import type { ElementType, ReactNode, ComponentPropsWithoutRef } from 'react'

type CardTone = 'background' | 'surface' | 'soft'
type CardRadius = 'lg' | 'xl'
type CardShadow = 'none' | 'sm' | 'md'

type CardProps<TElement extends ElementType = 'div'> = {
  as?: TElement
  children: ReactNode
  tone?: CardTone
  radius?: CardRadius
  shadow?: CardShadow
  className?: string
} & Omit<ComponentPropsWithoutRef<TElement>, 'as' | 'children' | 'className'>

const toneClasses: Record<CardTone, string> = {
  background: 'bg-[var(--color-background)]',
  surface: 'bg-[var(--color-surface)]',
  soft: 'bg-[var(--color-surface-soft)]',
}

const radiusClasses: Record<CardRadius, string> = {
  lg: 'rounded-[var(--radius-lg)]',
  xl: 'rounded-[var(--radius-xl)]',
}

const shadowClasses: Record<CardShadow, string> = {
  none: '',
  sm: 'shadow-[0_12px_30px_rgba(17,17,17,0.04)]',
  md: 'shadow-[0_16px_40px_rgba(17,17,17,0.05)]',
}

export function Card<TElement extends ElementType = 'div'>({
  as,
  children,
  tone = 'background',
  radius = 'lg',
  shadow = 'none',
  className = '',
  ...props
}: CardProps<TElement>) {
  const Component = as ?? 'div'

  return (
    <Component
      className={[
        'border border-[var(--color-border)]',
        toneClasses[tone],
        radiusClasses[radius],
        shadowClasses[shadow],
        className,
      ]
        .filter(Boolean)
        .join(' ')}
      {...props}
    >
      {children}
    </Component>
  )
}

