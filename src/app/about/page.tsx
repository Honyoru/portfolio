import AboutSection from '@/components/About/AboutSection'
import type { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: 'About | Romain Viala',
  description:
    "Learn more about me.",
  alternates: {
    canonical: '/about',
  },
}
 
export default function AboutPage() {
  return (
    <main>
      <div className="mx-auto my-8 max-w-[1200px] px-4 md:my-[3.75rem]">
        <AboutSection />
      </div>
    </main>
  )
}
 
