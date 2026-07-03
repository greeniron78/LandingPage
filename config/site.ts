import type { Metadata } from 'next'

export const siteConfig = {
  name: 'Premium Skin Care Landing Page',
  description:
    'A premium interactive skin care landing page designed to drive reservation conversion with a calm, elegant brand experience.',
  locale: 'ko_KR',
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000',
  keywords: [
    '피부관리',
    '스킨케어',
    '상담예약',
    '프리미엄 랜딩페이지',
    '피부샵',
    '홍조',
    '여드름',
    '모공',
    '피부톤 개선',
  ],
} as const

export const siteMetadata: Metadata = {
  metadataBase: new URL(siteConfig.siteUrl),
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
    url: new URL(siteConfig.siteUrl),
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
