import styles from './cvAts.module.css'
import { contactInfo, devTags, systemTags, type CvContent, type CvLang } from './cvContent'

interface CvAtsProps {
  t: CvContent
  lang: CvLang
}

// Version ATS : une seule colonne, texte brut, aucune image / icône / couleur,
// pour être lue correctement par les logiciels de tri de candidatures.
const CvAts = ({ t, lang }: CvAtsProps) => {
  const { phone, email, city, github, linkedin, portfolio } = contactInfo

  return (
    <article className={styles.page} id="cv">
      <header>
        <h1>Romain VIALA</h1>
        <h1>
          EPITECH{lang === 'fr' ? ' : ' : ': '}
          {t.jobTitle}
        </h1>
        <p>{t.lookingFor}</p>
        <p>{t.subtitle}</p>
        <p>{t.summary}</p>
      </header>

      <section>
        <h3>{t.headings.contact}</h3>
        <p>{phone}</p>
        <p>{email}</p>
        <p>{city}</p>
        <p>
          <a href={github.url}>{github.label}</a>
        </p>
        <p>
          <a href={linkedin.url}>{linkedin.label}</a>
        </p>
        <p>
          <a href={portfolio.url}>{portfolio.label}</a>
        </p>
      </section>

      <section>
        <h2>{t.headings.experiences}</h2>
        {t.experiences.map(({ title, date, org, points }) => (
          <div className={styles.item} key={title}>
            <h3>
              {title} {date}
            </h3>
            <p>{org}</p>
            <ul>
              {points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      <section>
        <h2>{t.headings.projects}</h2>
        {t.projects.map(({ title, description }) => (
          <p key={title}>
            {title} {description}
          </p>
        ))}
      </section>

      <section>
        <h2>{t.headings.education}</h2>
        {t.education.map(({ title, date, org }) => (
          <div className={styles.item} key={title}>
            <h3>
              {title} {date}
            </h3>
            {org && <p>{org}</p>}
          </div>
        ))}
      </section>

      <section>
        <h3>{t.headings.dev}</h3>
        <p>{devTags.join(' ')}</p>
      </section>

      <section>
        <h3>{t.headings.systems}</h3>
        <p>{systemTags.join(' ')}</p>
      </section>

      <section>
        <h3>{t.headings.softSkills}</h3>
        <ul>
          {t.softSkills.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
      </section>

      <section>
        <h3>{t.headings.languages}</h3>
        <p>{t.languages.join(' ')}</p>
      </section>
    </article>
  )
}

export default CvAts
