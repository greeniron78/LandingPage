import Hero from '@/components/hero/hero'
import { CtaSection } from '@/components/sections/cta-section'
import { ConcernSection } from '@/components/sections/concern-section'
import { ReservationSection } from '@/components/sections/reservation-section'
import { StorySection } from '@/components/sections/story-section'
import { TrustSection } from '@/components/sections/trust-section'

export default function HomePage() {
  return (
    <main className="flex-1">
      <Hero />
      <TrustSection />
      <ConcernSection />
      <StorySection />
      <ReservationSection />
      <CtaSection />
    </main>
  )
}
