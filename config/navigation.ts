export type NavigationItem = {
  label: string
  href: string
}

export const navigationItems = [
  { label: 'About', href: '#about' },
  { label: 'Programs', href: '#programs' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'FAQ', href: '#faq' },
] satisfies readonly NavigationItem[]

