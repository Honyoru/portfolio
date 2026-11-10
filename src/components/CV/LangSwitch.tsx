'use client'

import type { CvLang } from './cvContent'
import styles from './cv.module.css'

interface LangSwitchProps {
  lang: CvLang
  onChange: (lang: CvLang) => void
}

const options: { value: CvLang; label: string; title: string }[] = [
  { value: 'fr', label: 'FR', title: 'Version française' },
  { value: 'en', label: 'EN', title: 'English version' },
]

const LangSwitch = ({ lang, onChange }: LangSwitchProps) => {
  return (
    <div className={styles.langSwitch} role="group" aria-label="Langue / Language">
      {options.map(({ value, label, title }) => (
        <button
          key={value}
          type="button"
          title={title}
          aria-pressed={lang === value}
          className={lang === value ? styles.langActive : undefined}
          onClick={() => onChange(value)}
        >
          {label}
        </button>
      ))}
    </div>
  )
}

export default LangSwitch
