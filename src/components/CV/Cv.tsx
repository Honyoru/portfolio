'use client'

import { GithubIcon, LinkedIn } from '@/utils/icons'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import CvAts from './CvAts'
import LangSwitch from './LangSwitch'
import PrintButton from './PrintButton'
import VersionSwitch from './VersionSwitch'
import styles from './cv.module.css'
import {
  contactInfo,
  cvContent,
  devTags,
  systemTags,
  type CvLang,
  type CvVersion,
} from './cvContent'

const { github, linkedin, portfolio } = contactInfo

const Cv = () => {
  const [lang, setLang] = useState<CvLang>('fr')
  const [version, setVersion] = useState<CvVersion>('design')
  const t = cvContent[lang]

  // Lit ?lang=en et ?version=ats dans l'URL pour pouvoir partager un lien direct
  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    const langParam = params.get('lang')
    if (langParam === 'en' || langParam === 'fr') setLang(langParam)
    if (params.get('version') === 'ats') setVersion('ats')
  }, [])

  const setParam = (key: string, value: string | null) => {
    const url = new URL(window.location.href)
    if (value === null) url.searchParams.delete(key)
    else url.searchParams.set(key, value)
    window.history.replaceState(null, '', url)
  }

  const changeLang = (next: CvLang) => {
    setLang(next)
    setParam('lang', next === 'fr' ? null : next)
  }

  const changeVersion = (next: CvVersion) => {
    setVersion(next)
    setParam('version', next === 'design' ? null : next)
  }

  return (
    <div lang={lang} className={styles.cv}>
      <div className={styles.toolbar}>
        <LangSwitch lang={lang} onChange={changeLang} />
        <VersionSwitch lang={lang} version={version} onChange={changeVersion} />
        <PrintButton className={styles.download} />
      </div>

      {version === 'ats' ? (
        <CvAts t={t} lang={lang} />
      ) : (
        <div className={styles.page} id="cv">
          {/* ============ BARRE LATÉRALE ============ */}
          <aside className={styles.side}>
            <div className={styles.photo}>
              <Image
                src="/images/photo_cv_420px.png"
                alt="Romain Viala"
                fill
                priority
                sizes="130px"
              />
            </div>

            <div className={styles.name}>
              <h1>
                <span>Romain</span>
                <span>VIALA</span>
              </h1>
              <p>{t.lookingFor}</p>
            </div>

            <section className={styles.contact}>
              <h2>{t.headings.contact}</h2>
              <ul>
                <li>📞 {contactInfo.phone}</li>
                <li>✉ {contactInfo.email}</li>
                <li>📍 {contactInfo.city}</li>
                <li>
                  ⌨ <a href={github.url}>{github.label}</a>
                </li>
                <li>
                  🔗 <a href={linkedin.url}>{linkedin.label}</a>
                </li>
                <li>
                  🔗 <a href={portfolio.url}>{portfolio.label}/</a>
                </li>
              </ul>
            </section>

            <section>
              <h2>{t.headings.dev}</h2>
              <div className={styles.tags}>
                {devTags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
            </section>

            <section>
              <h2>{t.headings.systems}</h2>
              <div className={styles.tags}>
                {systemTags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
            </section>

            <section>
              <h2>{t.headings.links}</h2>
              <div className={styles.qrs}>
                <div className={styles.qr}>
                  <Image
                    className={styles.code}
                    src="/images/cv/qr-github.svg"
                    alt="QR GitHub"
                    width={330}
                    height={330}
                  />
                  <span className={`${styles.mark} ${styles.round}`}>
                    <GithubIcon aria-label="GitHub" />
                  </span>
                </div>
                <div className={styles.qr}>
                  <Image
                    className={styles.code}
                    src="/images/cv/qr-linkedin.svg"
                    alt="QR LinkedIn"
                    width={410}
                    height={410}
                  />
                  <span className={styles.mark}>
                    <LinkedIn />
                  </span>
                </div>
              </div>
            </section>

            <section className={styles.quality}>
              <h2>{t.headings.softSkills}</h2>
              <ul>
                {t.softSkills.map((skill) => (
                  <li key={skill}>{skill}</li>
                ))}
              </ul>
            </section>

            <section className={styles.sideBottom}>
              <h2>{t.headings.languages}</h2>
              <ul>
                {t.languages.map((language) => (
                  <li key={language}>{language}</li>
                ))}
              </ul>
            </section>

            <Image
              className={styles.logo}
              src="/images/epitech.svg"
              alt="Epitech"
              width={152}
              height={56}
            />
          </aside>

          {/* ============ CONTENU ============ */}
          <div className={styles.main}>
            <header>
              <div className={styles.kicker}>Epitech</div>
              <h1>{t.jobTitle}</h1>
              <div className={styles.subtitle}>{t.subtitle}</div>
            </header>

            <div className={styles.banner}>{t.summary}</div>

            <section>
              <h2>{t.headings.experiences}</h2>
              {t.experiences.map(({ title, date, org, points }) => (
                <div className={styles.item} key={title}>
                  <div className={styles.row}>
                    <h3>{title}</h3>
                    <span className={styles.date}>{date}</span>
                  </div>
                  <div className={styles.org}>{org}</div>
                  <ul>
                    {points.map((point, i) => (
                      <li key={point} className={i % 2 === 1 ? styles.alt : undefined}>
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </section>

            <section>
              <h2>{t.headings.projects}</h2>
              <div className={styles.projects}>
                {t.projects.map(({ title, description }) => (
                  <div className={styles.proj} key={title}>
                    <b>{title}</b>
                    <span>{description}</span>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2>{t.headings.education}</h2>
              {t.education.map(({ title, date, org }) => (
                <div className={styles.item} key={title}>
                  <div className={styles.row}>
                    <h3>{title}</h3>
                    <span className={styles.date}>{date}</span>
                  </div>
                  {org && <div className={styles.org}>{org}</div>}
                </div>
              ))}
            </section>
          </div>
        </div>
      )}
    </div>
  )
}

export default Cv
