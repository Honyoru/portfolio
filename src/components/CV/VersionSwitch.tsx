'use client'

import type { CvLang, CvVersion } from './cvContent'
import styles from './cv.module.css'

interface VersionSwitchProps {
  lang: CvLang
  version: CvVersion
  onChange: (version: CvVersion) => void
}

const VersionSwitch = ({ lang, version, onChange }: VersionSwitchProps) => {
  const options: { value: CvVersion; label: string; title: string }[] = [
    {
      value: 'design',
      label: 'Design',
      title: lang === 'fr' ? 'Version mise en page' : 'Designed version',
    },
    {
      value: 'ats',
      label: 'ATS',
      title:
        lang === 'fr'
          ? 'Version texte brut, lisible par les logiciels de recrutement'
          : 'Plain-text version, readable by applicant tracking systems',
    },
  ]

  return (
    <div className={styles.langSwitch} role="group" aria-label="Version">
      {options.map(({ value, label, title }) => (
        <button
          key={value}
          type="button"
          title={title}
          aria-pressed={version === value}
          className={version === value ? styles.langActive : undefined}
          onClick={() => onChange(value)}
        >
          {label}
        </button>
      ))}
    </div>
  )
}

export default VersionSwitch
