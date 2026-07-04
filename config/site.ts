import type { Metadata } from 'next'

const siteName = '프리미엄 스킨케어 상담 예약'
const openGraphImage = {
  url: '/images/hero/sequence/frame0001.webp',
  alt: siteName,
  width: 1288,
  height: 1608,
  type: 'image/webp',
} as const

export const siteConfig = {
  name: siteName,
  brandLabel: '프리미엄 스킨케어',
  description:
    '피부 상태를 세심하게 살펴보고 현재의 고민에 맞는 프리미엄 스킨케어 프로그램을 제안합니다.',
  locale: 'ko_KR',
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000',
  keywords: [
    '프리미엄 스킨케어',
    '피부관리',
    '피부상담',
    '스킨케어',
    '상담예약',
    '카카오톡상담',
    '여드름',
    '홍조',
    '모공',
    '피부톤 개선',
  ],
} as const

export const siteMetadata: Metadata = {
  metadataBase: new URL(siteConfig.siteUrl),
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.brandLabel}`,
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  keywords: [...siteConfig.keywords],
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  category: 'beauty',
  formatDetection: {
    telephone: false,
    email: false,
    address: false,
  },
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
    images: [openGraphImage],
  },
  twitter: {
    card: 'summary_large_image',
    site: siteConfig.brandLabel,
    creator: siteConfig.brandLabel,
    title: siteConfig.name,
    description: siteConfig.description,
    images: [openGraphImage],
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
