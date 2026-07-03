export const motionConfig = {
  duration: {
    fast: 200,
    default: 400,
    medium: 600,
    luxury: 1200,
    verySlow: 1800,
  },
  easing: {
    default: 'ease-out',
    luxury: 'cubic-bezier(0.22, 1, 0.36, 1)',
    opacity: 'ease-in-out',
    scale: 'ease-out',
    scroll: 'linear',
  },
  distance: {
    xs: 4,
    sm: 8,
    md: 16,
    lg: 24,
    xl: 40,
  },
} as const

