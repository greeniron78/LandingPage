import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import './globals.css'
import { siteMetadata } from '@/config/site'
import { Providers } from './providers'
import { Footer } from '@/components/layout/footer'
import { Navigation } from '@/components/layout/navigation'

export const metadata: Metadata = siteMetadata

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode
}>) {
  return (
    <html lang="ko">
      <body className="flex min-h-screen flex-col">
        <Navigation />
        <Providers>{children}</Providers>
        <Footer />
      </body>
    </html>
  )
}
