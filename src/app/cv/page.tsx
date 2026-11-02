import Cv from '@/components/CV/Cv'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'CV | Romain Viala',
  description: "CV de Romain Viala, étudiant à Epitech en recherche d'alternance.",
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
