import Link from 'next/link'
import { Container } from './container'

export function Footer() {
  return (
    <footer className="border-t border-[var(--color-border)] bg-[var(--color-surface)]">
      <Container>
        <div className="flex flex-col gap-4 py-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-[var(--color-text-secondary)]">
            Premium Skin Care Landing Page
          </p>
          <Link
            href="/"
            className="text-sm text-[var(--color-text-secondary)] transition-colors hover:text-[var(--color-text-primary)]"
          >
            Home
          </Link>
        </div>
      </Container>
    </footer>
  )
}
