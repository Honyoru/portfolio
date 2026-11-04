import { GithubIcon, LinkedIn } from '@/utils/icons'
import Image from 'next/image'
import PrintButton from './PrintButton'
import styles from './cv.module.css'

const GITHUB_URL = 'https://github.com/Honyoru'
const LINKEDIN_URL = 'https://www.linkedin.com/in/romain-viala-44006632a/'
const PORTFOLIO_URL = 'https://portfolio-romain-viala.vercel.app/'

const devTags = [
  'Python',
  'C',
  'JavaScript',
  'HTML/CSS',
  'Next.js',
  'React',
  'Tailwind',
  'Git',
  'Java',
  'ASM',
  'SQL',
  'MongoDB',
]

const softSkills = [
  'Autonome',
  'Curieux',
  'Polyvalent',
  'Gestion de projet',
  "Gestion d'équipe",
  'Permis B – Véhiculé',
]

const experiences = [
  {
    title: "Animateur socioculturel et créateur d'événements esportifs",
    date: '2024 – 2025',
    org: 'Francas du Gard',
    points: [
      'Gestion des priorités et adaptabilité.',
      'Collaboration et coordination en équipe.',
      'Accompagnement des utilisateurs dans la prise en main des outils.',
      'Résolution des imprévus et adaptation aux contraintes.',
      "Conception et organisation d'événements esportifs.",
      'Coordination de projets et planification des activités.',
    ],
  },
  {
    title: "Organisation d'événements e-sportifs",
    date: '2020 – 2026',
    org: 'AESE / Creator / UpsetFactory / MUC',
    points: [
      'Planification et gestion de projet',
      'Coordination et collaboration en équipe',
      'Gestion des ressources matérielles',
      'Résolution de problèmes et gestion des imprévus',
      'Organisation des tâches et gestion des priorités',
    ],
  },
]

const projects = [
  {
    title: 'Bubbles',
    description: "Site web de recherche d'emploi. Utilisation d'outils modernes comme Next.js",
  },
  {
    title: 'Hérisson vs Blaireau',
    description:
      'Jeu de capture de zone multijoueur via mobile (écran projeté, téléphone en guise de manette).',
  },
  {
    title: 'Compilateur en C',
    description: "Création d'un compilateur en langage C. Gestion de la reconnaissance de pattern.",
  },
  {
    title: 'Jeu labyrinthe',
    description: 'Adaptation du jeu de société « Labyrinthe ».',
  },
  {
    title: "Jeu d'escalade",
    description: "Jeu d'escalade en 3D développé en C.",
  },
]

const education = [
  {
    title: "Pré-MSc / MSc – Titre RNCP Architecte de Systèmes d'Information",
    date: '2026 – 2029',
    org: 'Epitech – Gestion de projet, apprentissage web',
  },
  { title: 'TFP Animateur Esport', date: '2024 – 2025' },
  { title: "Licence d'informatique", date: '2017 – 2020' },
]

const Cv = () => {
  return (
    <div lang="fr" className={styles.cv}>
      <div className={styles.toolbar}>
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
            <p>Recherche d&apos;alternance</p>
          </div>

          <section className={styles.contact}>
            <h2>Contact</h2>
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
            <h2>Langages &amp; Dev</h2>
            <div className={styles.tags}>
              {devTags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
          </section>

          <section>
            <h2>Systèmes</h2>
            <div className={styles.tags}>
              <span>Linux</span>
              <span>Bash</span>
            </div>
          </section>

          <section>
            <h2>Liens</h2>
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
            <h2>Soft skills</h2>
            <ul>
              {softSkills.map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          </section>

          <section className={styles.sideBottom}>
            <h2>Langues</h2>
            <ul>
              <li>Français</li>
              <li>Anglais</li>
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
            <h1>Architecte de Systèmes d&apos;Information</h1>
            <div className={styles.subtitle}>Développement logiciel • Web • Gestion de projet</div>
          </header>

          <div className={styles.banner}>
            Actuellement en Pré-MSc à Epitech (2026-2029), je recherche une entreprise pour
            m’accompagner jusqu’à l&apos;obtention titre d’Architecte de Systèmes d’Information. Mon
            expérience dans l’événementiel m’a permis de développer la gestion de projet, le travail
            en équipe, le respect des deadlines et la gestion des imprévus, des compétences que je
            souhaite mettre au service de vos projets techniques.
          </div>

          <section>
            <h2>Expériences</h2>
            {experiences.map(({ title, date, org, points }) => (
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
            <h2>Projets</h2>
            <div className={styles.projects}>
              {projects.map(({ title, description }) => (
                <div className={styles.proj} key={title}>
                  <b>{title}</b>
                  <span>{description}</span>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2>Diplômes &amp; Formations</h2>
            {education.map(({ title, date, org }) => (
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
