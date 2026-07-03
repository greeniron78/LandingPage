import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import './globals.css'
import { siteConfig } from '@/config/site'
import { Providers } from './providers'
import { Footer } from '@/components/layout/footer'
import { Navigation } from '@/components/layout/navigation'

const siteUrl = new URL(siteConfig.siteUrl)

export const metadata: Metadata = {
  metadataBase: siteUrl,
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  keywords: [...siteConfig.keywords],
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: siteConfig.locale,
    url: siteUrl,
    siteName: siteConfig.name,
    title: siteConfig.name,
    description: siteConfig.description,
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.name,
    description: siteConfig.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
}

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
