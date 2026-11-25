'use client'
import { useT } from '@/i18n/LanguageProvider'
import { serviceData } from '../../appData'
import SectionHeading from '../SectionHeading/SectionHeading'
import ServiceCard from './ServiceCard'

const ServiceSection = () => {
  const { lang, t } = useT()
  return (
    <section id="services" className="my-14">
      <SectionHeading
        title={t.services.title}
        subtitle={t.services.subtitle}
      />

      <div className="mt-8 grid grid-cols-1 gap-x-8 gap-y-8 md:mt-[3.75rem] md:grid-cols-3">
        {serviceData.map((service, index) => (
          <ServiceCard
            key={index}
            icon={service.icon}
            title={service.title[lang]}
            shortDescription={service.shortDescription[lang]}
          />
        ))}
      </div>
    </section>
  )
}

export default ServiceSection
