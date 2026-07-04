import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import './globals.css'
import { heroSequencePreloadFrames, siteMetadata } from '@/config/site'
import { localBusinessJsonLd } from '@/lib/schema/local-business'
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
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: localBusinessJsonLd }}
        />
        {heroSequencePreloadFrames.map((href) => (
          <link key={href} rel="preload" as="image" href={href} type="image/webp" />
        ))}
      </head>
      <body className="flex min-h-screen flex-col">
        <Navigation />
        <Providers>{children}</Providers>
        <Footer />
      </body>
    </html>
  )
}
