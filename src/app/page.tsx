import { skillList } from '@/appData'
import ContactSection from '@/components/Contact/ContactSection'
import Hero from '@/components/Hero/Hero'
import ProjectSection from '@/components/Projects/ProjectSection'
import ServiceSection from '@/components/Services/ServiceSection'
import Skills from '@/components/Skills/Skills'
import DecorCircles from '@/components/UI/DecorCircles'
import { getAllProjects, } from '@/services'

export default async function Home() {
  const projects = await getAllProjects()

  return (
    <main className="overflow-x-clip">
      {/* the glow spans hero + skills band, then fades into the page background */}
      <div className="bg-small-glow bg-small-glow-position md:bg-large-glow-position lg:bg-large-glow relative bg-no-repeat">
        <div className="to-primary pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-linear-to-b from-transparent" />
        <Hero />
        <Skills skills={skillList} />
      </div>
      <div className="relative">
        <DecorCircles />
        <div className="relative mx-auto my-8 max-w-[1200px] px-4 md:my-[3.75rem]">
          <ProjectSection projects={projects} />
          <ServiceSection />
          <ContactSection />
        </div>
      </div>
    </main>
  )
}
