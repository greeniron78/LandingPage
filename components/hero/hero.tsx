import path from 'node:path'
import { readdir } from 'node:fs/promises'
import { HeroCanvas } from '@/components/hero/hero-canvas'

const sequenceDirectory = path.join(process.cwd(), 'public/images/hero/sequence')

function getFrameNumber(fileName: string) {
  const match = fileName.match(/^frame(\d{4})\.(webp|png|jpe?g|avif)$/i)

  return match ? Number.parseInt(match[1], 10) : null
}

async function getHeroFrames() {
  const entries = await readdir(sequenceDirectory)

  return entries
    .map((fileName) => {
      const frameNumber = getFrameNumber(fileName)

      return frameNumber === null ? null : { fileName, frameNumber }
    })
    .filter((entry): entry is { fileName: string; frameNumber: number } => entry !== null)
    .sort((left, right) => left.frameNumber - right.frameNumber)
    .map(({ fileName }) => `/images/hero/sequence/${fileName}`)
}

export default async function Hero() {
  const frames = await getHeroFrames()

  return <HeroCanvas frames={frames} />
}
