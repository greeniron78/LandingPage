'use client'

type ErrorPageProps = {
  error: Error & { digest?: string }
  reset: () => void
}

export default function ErrorPage({ error, reset }: ErrorPageProps) {
  void error

  return (
    <main>
      <p>Something went wrong.</p>
      <button type="button" onClick={reset}>
        Try again
      </button>
    </main>
  )
}
