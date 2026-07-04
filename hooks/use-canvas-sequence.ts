'use client'

import { useCallback, useEffect, useRef, useState, type RefObject } from 'react'

type UseCanvasSequenceOptions = {
  frames: readonly string[]
  progress: number
  containerRef: RefObject<HTMLDivElement | null>
  maxDpr?: number
}

type UseCanvasSequenceResult = {
  canvasRef: RefObject<HTMLCanvasElement | null>
  isReady: boolean
}

type FrameSlot = HTMLImageElement | null

const HERO_PRELOAD_FRAME_COUNT = 5

function clamp(value: number, min: number, max: number) {
  return Math.min(max, Math.max(min, value))
}

function getRenderableFrame(images: readonly FrameSlot[], targetIndex: number) {
  const boundedIndex = clamp(targetIndex, 0, Math.max(images.length - 1, 0))

  for (let index = boundedIndex; index >= 0; index -= 1) {
    const image = images[index]

    if (image) {
      return { image, frameIndex: index }
    }
  }

  for (let index = boundedIndex + 1; index < images.length; index += 1) {
    const image = images[index]

    if (image) {
      return { image, frameIndex: index }
    }
  }

  return null
}

function drawCoverFrame(
  context: CanvasRenderingContext2D,
  image: HTMLImageElement,
  width: number,
  height: number,
) {
  const imageWidth = image.naturalWidth
  const imageHeight = image.naturalHeight

  if (imageWidth === 0 || imageHeight === 0) {
    return
  }

  const scale = Math.max(width / imageWidth, height / imageHeight)
  const drawWidth = imageWidth * scale
  const drawHeight = imageHeight * scale
  const offsetX = (width - drawWidth) / 2
  const offsetY = (height - drawHeight) / 2

  context.clearRect(0, 0, width, height)
  context.drawImage(image, offsetX, offsetY, drawWidth, drawHeight)
}

function loadImage(source: string) {
  return new Promise<HTMLImageElement>((resolve, reject) => {
    const image = new Image()
    image.decoding = 'async'
    image.loading = 'eager'
    image.onload = () => {
      resolve(image)
    }
    image.onerror = () => reject(new Error(`Failed to load image: ${source}`))
    image.src = source
  })
}

function decodeImage(image: HTMLImageElement) {
  const decoded = typeof image.decode === 'function' ? image.decode() : undefined

  if (decoded) {
    return decoded.then(() => image).catch(() => image)
  }

  return Promise.resolve(image)
}

function waitForNextFrame() {
  return new Promise<void>((resolve) => {
    window.requestAnimationFrame(() => {
      resolve()
    })
  })
}

export function useCanvasSequence({
  frames,
  progress,
  containerRef,
  maxDpr = 2,
}: UseCanvasSequenceOptions): UseCanvasSequenceResult {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  const imagesRef = useRef<FrameSlot[]>([])
  const progressRef = useRef(0)
  const renderSnapshotRef = useRef('')
  const rafIdRef = useRef<number | null>(null)
  const decodeQueueRef = useRef(Promise.resolve())
  const [isReady, setIsReady] = useState(false)

  const drawFrame = useCallback(() => {
    rafIdRef.current = null

    const canvas = canvasRef.current
    const container = containerRef.current
    const images = imagesRef.current

    if (!canvas || !container || images.length === 0) {
      return
    }

    const context = canvas.getContext('2d')

    if (!context) {
      return
    }

    const rect = container.getBoundingClientRect()
    const width = Math.max(1, Math.floor(rect.width))
    const height = Math.max(1, Math.floor(rect.height))
    const dpr = clamp(window.devicePixelRatio || 1, 1, maxDpr)
    const targetWidth = Math.round(width * dpr)
    const targetHeight = Math.round(height * dpr)
    const frameIndex = clamp(
      Math.round(progressRef.current * Math.max(images.length - 1, 0)),
      0,
      images.length - 1,
    )
    const renderableFrame = getRenderableFrame(images, frameIndex)

    if (!renderableFrame) {
      return
    }

    const renderSnapshot = `${renderableFrame.frameIndex}:${targetWidth}:${targetHeight}:${dpr}`

    if (renderSnapshotRef.current === renderSnapshot) {
      return
    }

    renderSnapshotRef.current = renderSnapshot

    if (canvas.width !== targetWidth) {
      canvas.width = targetWidth
    }

    if (canvas.height !== targetHeight) {
      canvas.height = targetHeight
    }

    canvas.style.width = `${width}px`
    canvas.style.height = `${height}px`

    context.setTransform(dpr, 0, 0, dpr, 0, 0)

    drawCoverFrame(context, renderableFrame.image, width, height)
  }, [containerRef, maxDpr])

  const scheduleDraw = useCallback(() => {
    if (rafIdRef.current !== null) {
      return
    }

    rafIdRef.current = window.requestAnimationFrame(drawFrame)
  }, [drawFrame])

  useEffect(() => {
    let isMounted = true
    const initialFrameCount = Math.min(HERO_PRELOAD_FRAME_COUNT, frames.length)
    const initialFrames = frames.slice(0, initialFrameCount)
    const backgroundFrames = frames.slice(initialFrameCount)

    if (frames.length === 0) {
      imagesRef.current = []
      setIsReady(false)
      renderSnapshotRef.current = ''
      return undefined
    }

    setIsReady(false)
    imagesRef.current = Array.from({ length: frames.length }, () => null)
    renderSnapshotRef.current = ''
    decodeQueueRef.current = Promise.resolve()

    Promise.all(initialFrames.map((frame) => loadImage(frame).then((image) => decodeImage(image))))
      .then((images) => {
        if (!isMounted) {
          return
        }

        images.forEach((image, index) => {
          imagesRef.current[index] = image
        })

        setIsReady(true)
        scheduleDraw()

        backgroundFrames.forEach((frame, index) => {
          void loadImage(frame)
            .then((image) => {
              if (!isMounted) {
                return
              }

              decodeQueueRef.current = decodeQueueRef.current
                .then(() => waitForNextFrame())
                .then(() => decodeImage(image))
                .then((decodedImage) => {
                  if (!isMounted) {
                    return
                  }

                  imagesRef.current[initialFrameCount + index] = decodedImage
                  scheduleDraw()
                })
                .catch(() => {
                  if (!isMounted) {
                    return
                  }

                  imagesRef.current[initialFrameCount + index] = null
                })
            })
            .catch(() => {
              if (!isMounted) {
                return
              }

              imagesRef.current[initialFrameCount + index] = null
            })
        })
      })
      .catch(() => {
        if (!isMounted) {
          return
        }

        imagesRef.current = []
        renderSnapshotRef.current = ''
        setIsReady(false)
      })

    return () => {
      isMounted = false
    }
  }, [frames, scheduleDraw])

  useEffect(() => {
    progressRef.current = clamp(progress, 0, 1)

    if (isReady) {
      scheduleDraw()
    }
  }, [isReady, progress, scheduleDraw])

  useEffect(() => {
    const container = containerRef.current

    if (!container || typeof ResizeObserver === 'undefined') {
      return undefined
    }

    const observer = new ResizeObserver(() => {
      scheduleDraw()
    })

    observer.observe(container)

    return () => {
      observer.disconnect()
    }
  }, [containerRef, scheduleDraw])

  useEffect(() => {
    return () => {
      if (rafIdRef.current !== null) {
        window.cancelAnimationFrame(rafIdRef.current)
      }
    }
  }, [])

  return {
    canvasRef,
    isReady,
  }
}
