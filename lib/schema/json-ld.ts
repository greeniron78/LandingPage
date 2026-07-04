export const schemaContext = 'https://schema.org' as const

type JsonLdPrimitive = string | number | boolean | null

export type JsonLdValue =
  | JsonLdPrimitive
  | readonly JsonLdValue[]
  | {
      [key: string]: JsonLdValue
    }

export type JsonLdObject = {
  '@type': string | readonly string[]
  [key: string]: JsonLdValue
}

export type JsonLdSchema = JsonLdObject & {
  '@context'?: typeof schemaContext
}

export const createJsonLd = <T extends JsonLdObject>(
  schema: T,
): T & { '@context': typeof schemaContext } => ({
  '@context': schemaContext,
  ...schema,
})

export const serializeJsonLd = (
  schema: JsonLdSchema | readonly JsonLdSchema[],
): string => JSON.stringify(schema).replace(/</g, '\\u003c')
