export type NavigationItem = {
  label: string
  href: string
}

export const navigationItems = [
  { label: 'Trust', href: '#trust' },
  { label: 'Concerns', href: '#concerns' },
  { label: 'Story', href: '#story' },
  { label: 'Contact', href: '#contact' },
] satisfies readonly NavigationItem[]

