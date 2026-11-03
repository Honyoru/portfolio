import Image from 'next/image'
import { aboutSections } from '@/appData'
import SectionHeading from '../SectionHeading/SectionHeading'

const AboutSection = () => {
  return (
    <section id="about" className="my-14">
      <SectionHeading
        title="// About me"
        subtitle="A bit more about who I am."
      />

      <div className="mt-8 flex flex-col gap-12 md:mt-[3.75rem] md:gap-16">
        {aboutSections.map(({ title, text, image, alt }, index) => {
          // Odd items flip the layout on md+ screens: picture on the right
          const pictureOnRight = index % 2 === 1

          return (
            <article
              key={title}
              className="bg-secondary border-border grid grid-cols-1 items-center gap-6 rounded-[14px] border p-5 md:grid-cols-2 md:gap-12 md:p-8">
              <figure
                className={`relative aspect-[4/3] w-full overflow-hidden rounded-xl ${
                  pictureOnRight ? 'md:order-2' : 'md:order-1'
                }`}>
                <Image
                  src={image}
                  alt={alt}
                  fill
                  sizes="(min-width: 768px) 560px, 100vw"
                  className="object-cover"
                />
              </figure>

              <div className={pictureOnRight ? 'md:order-1' : 'md:order-2'}>
                <h3 className="text-accent mb-4 text-xl font-bold md:text-2xl">{title}</h3>
                <p className="text-neutral leading-7 text-pretty">{text}</p>
              </div>
            </article>
          )
        })}
      </div>
    </section>
  )
}

export default AboutSection