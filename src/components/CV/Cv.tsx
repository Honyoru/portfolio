'use client'

import { GithubIcon, LinkedIn } from '@/utils/icons'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import LangSwitch from './LangSwitch'
import PrintButton from './PrintButton'
import styles from './cv.module.css'
import { cvContent, devTags, type CvLang } from './cvContent'

const GITHUB_URL = 'https://github.com/Honyoru'
const LINKEDIN_URL = 'https://www.linkedin.com/in/romain-viala-44006632a/'
const PORTFOLIO_URL = 'https://portfolio-romain-viala.vercel.app/'

const Cv = () => {
  const [lang, setLang] = useState<CvLang>('fr')
  const t = cvContent[lang]

  // Lit ?lang=en dans l'URL pour pouvoir partager un lien direct vers la version anglaise
  useEffect(() => {
    const param = new URLSearchParams(window.location.search).get('lang')
    if (param === 'en' || param === 'fr') setLang(param)
  }, [])

  const changeLang = (next: CvLang) => {
    setLang(next)
    const url = new URL(window.location.href)
    if (next === 'fr') url.searchParams.delete('lang')
    else url.searchParams.set('lang', next)
    window.history.replaceState(null, '', url)
  }

  return (
    <div lang={lang} className={styles.cv}>
      <div className={styles.toolbar}>
        <LangSwitch lang={lang} onChange={changeLang} />
        <PrintButton className={styles.download} />
      </div>

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
              <li>📞 07 82 45 19 08</li>
              <li>✉ romain.vialapro@gmail.com</li>
              <li>📍 Montpellier</li>
              <li>
                ⌨ <a href={GITHUB_URL}>github.com/Honyoru</a>
              </li>
              <li>
                🔗 <a href={LINKEDIN_URL}>linkedin.com/in/romain-viala-44006632a</a>
              </li>
              <li>
                🔗 <a href={PORTFOLIO_URL}>portfolio-romain-viala.vercel.app/</a>
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
              <span>Linux</span>
              <span>Bash</span>
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
    </div>
  )
}

export default Cv
