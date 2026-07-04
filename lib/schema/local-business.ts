import { contactConfig } from '@/config/contact'
import { siteConfig } from '@/config/site'

import { createJsonLd, serializeJsonLd } from './json-ld'

export const localBusinessSchema = createJsonLd({
  '@type': 'LocalBusiness',
  name: contactConfig.businessName,
  description: siteConfig.description,
  url: siteConfig.siteUrl,
  telephone: contactConfig.telephoneNumber,
  address: contactConfig.businessAddress,
  ...(contactConfig.businessHours ? { openingHours: contactConfig.businessHours } : {}),
})

export const localBusinessJsonLd = serializeJsonLd(localBusinessSchema)
