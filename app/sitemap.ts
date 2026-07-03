import type { MetadataRoute } from 'next'
import { siteConfig } from '@/config/site'

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
