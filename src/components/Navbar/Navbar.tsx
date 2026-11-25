'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { BurgerIcon, CloseIcon } from '../../utils/icons'
import LanguageSwitch from '@/i18n/LanguageSwitch'
import { useT } from '@/i18n/LanguageProvider'
import Logo from './Logo'

const navItems = [
  { key: 'home', href: '/' },
  { key: 'about', href: '/about' },
  { key: 'projects', href: '/#projects' },
  { key: 'services', href: '/#services' },
  { key: 'contact', href: '/#contact' },
  { key: 'cv', href: '/cv' },
] as const

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(false)
  const pathname = usePathname()
  const { t } = useT()

  const toggleMenu = () => {
    setIsVisible(!isVisible)
  }

  return (
    <nav className="bg-primary border-border h-16 overflow-hidden border-b">
      <div className="mx-auto flex h-full w-dvw max-w-[1200px] items-center justify-between px-4 py-1">
        <div className="flex items-center gap-4 lg:gap-6">
          {isVisible ? (
            <div className="text-primary-content md:hidden">{t.nav.menu}</div>
          ) : (
            <Link href="/">
              <div className="animate-fade-up text-primary-content relative flex items-center gap-3 transition-all duration-300 md:static">
                <Logo />
                <span className="text-primary-content hidden sm:inline md:hidden lg:inline">
                  Romain_Viala
                </span>
              </div>
            </Link>
          )}
          <LanguageSwitch
            className="border-border flex gap-1 rounded-md border p-0.5 text-sm"
            activeClassName="bg-accent text-accent-content rounded px-1.5"
            inactiveClassName="text-primary-content hover:text-neutral px-1.5"
          />
        </div>

        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {isVisible ? (
              <CloseIcon className="text-primary-content" />
            ) : (
              <BurgerIcon className="text-primary-content" />
            )}
          </button>
        </div>

        <ul
          className={`${isVisible ? 'flex' : 'hidden'} animate-fade-in bg-primary absolute top-16 left-0 z-10 h-dvh w-dvw flex-col md:static md:top-0 md:flex md:h-full md:w-[72%] md:flex-row lg:w-[70%]`}>
          {navItems.map(({ key, href }) => (
            <li
              key={href}
              onClick={() => setIsVisible(false)}
              className="border-border flex items-center border-b px-4 text-2xl md:border-y-0 md:border-e md:text-base md:first:border-s md:last:ml-auto md:last:border-none md:last:px-0 lg:px-8">
              <Link
                href={href}
                className={`text-primary-content hover:text-neutral w-full py-7 transition-all duration-150 md:py-0 ${pathname === href ? 'text-neutral cursor-text' : ''}`}>
                {t.nav[key]}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
