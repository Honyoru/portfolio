'use client'
import { footerLinks } from '@/appData'
import { socials } from '@/appData/personal'
import { useT } from '@/i18n/LanguageProvider'
import LanguageSwitch from '@/i18n/LanguageSwitch'


const Footer = () => {
  const { t } = useT()
  return (
    <footer className="bg-secondary relative flex min-h-[560px] flex-col justify-between gap-16 overflow-hidden px-4 py-14 md:p-14 print:hidden">
      <div className="relative z-20 flex flex-col gap-12">
        {/*<div>
          <h5 className="mb-8 flex items-center gap-2">
            <Logo width={30} height={24} />
            <span className="text-neutral text-lg font-medium">Logoipsum</span>
          </h5>
          <p className="text-tertiary-content max-w-xl">
            The first free end-to-end analytics service for the site, designed to work with
            enterprises of various levels and business segments.
          </p>
          <a
            href="#"
            className="text-neutral mt-4 inline-flex items-center gap-2 text-xs hover:underline">
            More about me <span className="bg-neutral inline-block size-[10px] rounded-full" />
          </a>
        </div>*/}

        <div className="flex flex-wrap gap-8">
          {footerLinks.map((link) => (
            <a
              href={link.href}
              key={link.href}
              className="text-tertiary-content hover:text-neutral transition-colors duration-300 hover:underline">
              {t.footer.links[link.key]}.
            </a>
          ))}
        </div>

        <div className="flex flex-col gap-10">
          <div className="flex flex-col">
            <h5 className="text-neutral mb-4 text-lg font-medium">{t.footer.contact}</h5>
            <a
              href="mailto:romain.vialapro@gmail.com"
              className="text-tertiary-content hover:text-neutral text-sm font-light transition-colors duration-300">
              romain.vialapro@gmail.com
            </a>
            <a
              href="tel:+33 782451908"
              className="text-tertiary-content hover:text-neutral text-sm font-light transition-colors duration-300">
              +33 782451908
            </a>
          </div>
          <div>
            <h5 className="text-neutral mb-4 text-lg font-medium">{t.footer.location}</h5>
            <address className="text-tertiary-content flex flex-col text-sm font-light">
              <span>34080, Montpellier</span>
            </address>
          </div>
          <div>
            <h5 className="text-neutral mb-4 text-lg font-medium">{t.footer.credits}</h5>
            <div className="text-tertiary-content flex flex-col text-sm font-light">
              {t.footer.creditsText}
            </div>
          </div>
        </div>
      </div>

      <div className="relative z-20 flex items-end justify-between gap-8">
        <ul className="flex items-center gap-4">
          {socials.map((item, index) => (
            <li key={index} className="cursor-pointer bg-transparent">
              <a
                href={item.href}
                className="text-neutral transition-color hover:text-neutral/50 duration-300">
                {item.icon}
              </a>
            </li>
          ))}
        </ul>
        <div>
          <p className="text-neutral mb-8 text-right text-sm">{t.footer.languages}</p>
          <LanguageSwitch className="flex justify-end gap-8 md:gap-4 lg:gap-8" />
        </div>
      </div>

      <div data-footer-ring className="bg-neutral/4 absolute top-1/2 -right-[40%] z-0 h-[120dvw] w-[120dvw] -translate-y-1/2 rounded-full p-14 md:top-0 md:-right-[255px] md:-bottom-[450px] md:size-[1030px] md:-translate-y-0 md:p-20">
        <div className="bg-neutral/4 size-full rounded-full p-14 md:p-20">
          <div className="bg-neutral/5 size-full rounded-full" />
        </div>
      </div>
    </footer>
  )
}

export default Footer