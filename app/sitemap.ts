import type { MetadataRoute } from 'next'
import { siteConfig } from '@/lib/seo/site'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: new URL('/', siteConfig.siteUrl).toString(),
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
  ]
}
