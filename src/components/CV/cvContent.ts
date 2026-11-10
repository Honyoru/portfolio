export type CvLang = 'fr' | 'en'

interface CvExperience {
  title: string
  date: string
  org: string
  points: string[]
}

interface CvProject {
  title: string
  description: string
}

interface CvEducation {
  title: string
  date: string
  org?: string
}

export interface CvContent {
  lookingFor: string
  headings: {
    contact: string
    dev: string
    systems: string
    links: string
    softSkills: string
    languages: string
    experiences: string
    projects: string
    education: string
  }
  softSkills: string[]
  languages: string[]
  jobTitle: string
  subtitle: string
  summary: string
  experiences: CvExperience[]
  projects: CvProject[]
  education: CvEducation[]
}

export const devTags = [
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

export const cvContent: Record<CvLang, CvContent> = {
  fr: {
    lookingFor: "Recherche d'alternance",
    headings: {
      contact: 'Contact',
      dev: 'Langages & Dev',
      systems: 'Systèmes',
      links: 'Liens',
      softSkills: 'Soft skills',
      languages: 'Langues',
      experiences: 'Expériences',
      projects: 'Projets',
      education: 'Diplômes & Formations',
    },
    softSkills: [
      'Autonome',
      'Curieux',
      'Polyvalent',
      'Gestion de projet',
      "Gestion d'équipe",
      'Permis B – Véhiculé',
    ],
    languages: ['Français', 'Anglais'],
    jobTitle: "Architecte de Systèmes d'Information",
    subtitle: 'Développement logiciel • Web • Gestion de projet',
    summary:
      "Actuellement en Pré-MSc à Epitech (2026-2029), je recherche une entreprise pour m’accompagner jusqu’à l'obtention titre d’Architecte de Systèmes d’Information. Mon expérience dans l’événementiel m’a permis de développer la gestion de projet, le travail en équipe, le respect des deadlines et la gestion des imprévus, des compétences que je souhaite mettre au service de vos projets techniques.",
    experiences: [
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
    ],
    projects: [
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
        description:
          "Création d'un compilateur en langage C. Gestion de la reconnaissance de pattern.",
      },
      {
        title: 'Jeu labyrinthe',
        description: 'Adaptation du jeu de société « Labyrinthe ».',
      },
      {
        title: "Jeu d'escalade",
        description: "Jeu d'escalade en 3D développé en C.",
      },
    ],
    education: [
      {
        title: "Pré-MSc / MSc – Titre RNCP Architecte de Systèmes d'Information",
        date: '2026 – 2029',
        org: 'Epitech – Gestion de projet, apprentissage web',
      },
      { title: 'TFP Animateur Esport', date: '2024 – 2025' },
      { title: "Licence d'informatique", date: '2017 – 2020' },
    ],
  },

  en: {
    lookingFor: 'Seeking a work-study position',
    headings: {
      contact: 'Contact',
      dev: 'Languages & Dev',
      systems: 'Systems',
      links: 'Links',
      softSkills: 'Soft skills',
      languages: 'Languages',
      experiences: 'Experience',
      projects: 'Projects',
      education: 'Education',
    },
    softSkills: [
      'Autonomous',
      'Curious',
      'Versatile',
      'Project management',
      'Team management',
      "Driver's license – Own car",
    ],
    languages: ['French', 'English'],
    jobTitle: 'Information Systems Architect',
    subtitle: 'Software development • Web • Project management',
    summary:
      'Currently in the Pre-MSc program at Epitech (2026-2029), I am looking for a company to support me through to the Information Systems Architect degree. My experience in event management has helped me develop project management, teamwork, meeting deadlines and handling the unexpected — skills I want to bring to your technical projects.',
    experiences: [
      {
        title: 'Youth & community worker and esports event creator',
        date: '2024 – 2025',
        org: 'Francas du Gard',
        points: [
          'Prioritization and adaptability.',
          'Team collaboration and coordination.',
          'Helping users get started with tools.',
          'Handling the unexpected and adapting to constraints.',
          'Designing and organizing esports events.',
          'Project coordination and activity planning.',
        ],
      },
      {
        title: 'Esports event organization',
        date: '2020 – 2026',
        org: 'AESE / Creator / UpsetFactory / MUC',
        points: [
          'Project planning and management',
          'Team coordination and collaboration',
          'Equipment and resource management',
          'Problem solving and handling the unexpected',
          'Task organization and prioritization',
        ],
      },
    ],
    projects: [
      {
        title: 'Bubbles',
        description: 'Job search website built with modern tools such as Next.js.',
      },
      {
        title: 'Hedgehog vs Badger',
        description:
          'Multiplayer area-capture game played on mobile (projected screen, phones used as controllers).',
      },
      {
        title: 'C Compiler',
        description: 'Building a compiler in C, including pattern recognition.',
      },
      {
        title: 'Labyrinth game',
        description: 'Adaptation of the board game “Labyrinth”.',
      },
      {
        title: 'Climbing game',
        description: '3D climbing game developed in C.',
      },
    ],
    education: [
      {
        title: 'Pre-MSc / MSc – Information Systems Architect (RNCP certified)',
        date: '2026 – 2029',
        org: 'Epitech – Project management, web development',
      },
      { title: 'Esports Facilitator Certification (TFP)', date: '2024 – 2025' },
      { title: "Bachelor's Degree in Computer Science", date: '2017 – 2020' },
    ],
  },
}
