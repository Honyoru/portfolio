import Cv from '@/components/CV/Cv'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'CV | Romain Viala',
  description: "CV Romain Viala",
  alternates: {
    canonical: '/cv',
  },
}

export default function CvPage() {
  return (
    <main>
      <Cv />
    </main>
  )
}
