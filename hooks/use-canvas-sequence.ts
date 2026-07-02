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

function clamp(value: number, min: number, max: number) {
  return Math.min(max, Math.max(min, value))
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
      const decoded = typeof image.decode === 'function' ? image.decode() : undefined

      if (decoded) {
        decoded.then(() => resolve(image)).catch(() => resolve(image))
        return
      }

      resolve(image)
    }
    image.onerror = () => reject(new Error(`Failed to load image: ${source}`))
    image.src = source
  })
}

export function useCanvasSequence({
  frames,
  progress,
  containerRef,
  maxDpr = 2,
}: UseCanvasSequenceOptions): UseCanvasSequenceResult {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  const imagesRef = useRef<HTMLImageElement[]>([])
  const progressRef = useRef(0)
  const renderSnapshotRef = useRef('')
  const rafIdRef = useRef<number | null>(null)
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
    const renderSnapshot = `${frameIndex}:${targetWidth}:${targetHeight}:${dpr}`

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

    drawCoverFrame(context, images[frameIndex], width, height)
  }, [containerRef, maxDpr])

  const scheduleDraw = useCallback(() => {
    if (rafIdRef.current !== null) {
      return
    }

    rafIdRef.current = window.requestAnimationFrame(drawFrame)
  }, [drawFrame])

  useEffect(() => {
    let isMounted = true

    if (frames.length === 0) {
      imagesRef.current = []
      setIsReady(false)
      renderSnapshotRef.current = ''
      return undefined
    }

    setIsReady(false)
    imagesRef.current = []
    renderSnapshotRef.current = ''

    Promise.all(frames.map((frame) => loadImage(frame)))
      .then((images) => {
        if (!isMounted) {
          return
        }

        imagesRef.current = images
        setIsReady(true)
        scheduleDraw()
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
