import Hero from '@/components/hero/hero'
import { ContactSection } from '@/components/sections/contact-section'
import { ConcernSection } from '@/components/sections/concern-section'
import { StorySection } from '@/components/sections/story-section'
import { TrustSection } from '@/components/sections/trust-section'

export default function HomePage() {
  return (
    <main className="flex-1">
      <Hero />
      <TrustSection />
      <ConcernSection />
      <StorySection />
      <ContactSection />
    </main>
  )
}
