import Link from 'next/link'
import { Container } from './container'

const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Programs', href: '#programs' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'FAQ', href: '#faq' },
]

export function Navigation() {
  return (
    <header className="border-b border-[var(--color-border)] bg-[var(--color-background)]">
      <Container>
        <div className="flex h-16 items-center justify-between gap-6 sm:h-20">
          <Link href="/" className="text-sm font-semibold tracking-[0.2em] uppercase">
            Premium Skin Care
          </Link>

          <nav aria-label="Primary" className="hidden md:block">
            <ul className="flex items-center gap-8">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-[var(--color-text-secondary)] transition-colors hover:text-[var(--color-text-primary)]"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </Container>
    </header>
  )
}
