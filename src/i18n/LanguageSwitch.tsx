'use client'

import { languageOptions } from './dictionary'
import { useLang } from './LanguageProvider'

type LanguageSwitchProps = {
  className?: string
  /** classes for the active / inactive language */
  activeClassName?: string
  inactiveClassName?: string
}

const LanguageSwitch = ({
  className = 'flex gap-3',
  activeClassName = 'text-neutral',
  inactiveClassName = 'text-tertiary-content hover:text-neutral',
}: LanguageSwitchProps) => {
  const { lang, setLang } = useLang()

  return (
    <div className={className} role="group" aria-label="Language / Langue">
      {languageOptions.map(({ code, label, title }) => (
        <button
          key={code}
          type="button"
          title={title}
          aria-pressed={lang === code}
          onClick={() => setLang(code)}
          className={`cursor-pointer transition-colors duration-300 ${lang === code ? activeClassName : inactiveClassName}`}>
          {label}
        </button>
      ))}
    </div>
  )
}

export default LanguageSwitch
