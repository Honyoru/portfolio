export type Lang = 'en' | 'fr'

export const languageOptions: { code: Lang; label: string; title: string }[] = [
  { code: 'en', label: 'En', title: 'English' },
  { code: 'fr', label: 'Fr', title: 'Français' },
]

const en = {
  nav: {
    home: '_home',
    about: '_about-me',
    projects: '_projects',
    services: '_services',
    contact: '_contact-me',
    cv: '_cv',
    menu: '_menu',
  },
  hero: {
    greeting: "Hi - I'm Romain Viala",
    roles: ['FULLSTACK DEVELOPER', 'APP DEVELOPER', 'ALWAYS LEARNING'],
    tagline: 'Always learning new ways to solve new problems !',
    github: 'My GitHub',
    linkedin: 'My LinkedIn Profile',
  },
  projects: {
    title: '// Projects',
    livePreview: 'Live Preview',
    github: 'Github Link',
    cover: 'Project Cover',
  },
  services: {
    title: '// Services / Offers:',
    subtitle:
      'I offer a wide range of services to ensure you have the best written code and stay ahead in the competition.',
  },
  about: {
    title: '// About me',
    subtitle: 'A bit more about who I am.',
  },
  contact: {
    title: "Let's Talk",
    subtitle: 'I would love to work with you',
    pitch: 'Got an idea? Let’s build something together!',
    info: 'Contact Information',
    name: 'Full name',
    namePlaceholder: 'Your name here',
    email: 'Email address',
    emailPlaceholder: 'Your email address here',
    subject: 'Subject',
    subjectPlaceholder: 'Your subject here',
    message: 'Message',
    messagePlaceholder: 'Your message here',
    submit: 'Submit',
    submitting: 'Submitting...',
  },
  footer: {
    links: {
      home: 'Home',
      about: 'About Me',
      projects: 'Projects',
      services: 'Services',
      contact: 'Contact',
      cv: 'Cv',
    },
    contact: 'Contact Me',
    location: 'Location',
    credits: 'Credits',
    creditsText: 'Picture : Léa Richard / Template : Abdul Basit',
    languages: 'Languages',
  },
  theme: {
    select: '_select-theme',
  },
}

export type Dictionary = typeof en

const fr: Dictionary = {
  nav: {
    home: '_accueil',
    about: '_à-propos',
    projects: '_projets',
    services: '_services',
    contact: '_contact',
    cv: '_cv',
    menu: '_menu',
  },
  hero: {
    greeting: "Salut - Moi c'est Romain Viala",
    roles: ['DÉVELOPPEUR FULLSTACK', "DÉVELOPPEUR D'APPLICATIONS", 'TOUJOURS EN APPRENTISSAGE'],
    tagline: 'Toujours en quête de nouvelles façons de résoudre de nouveaux problèmes !',
    github: 'Mon GitHub',
    linkedin: 'Mon profil LinkedIn',
  },
  projects: {
    title: '// Projets',
    livePreview: 'Voir le site',
    github: 'Lien GitHub',
    cover: 'Aperçu du projet',
  },
  services: {
    title: '// Services / Offres :',
    subtitle:
      "Je propose un large éventail de services pour vous garantir un code de qualité et garder une longueur d'avance.",
  },
  about: {
    title: '// À propos',
    subtitle: 'Un peu plus sur qui je suis.',
  },
  contact: {
    title: 'Discutons',
    subtitle: "J'adorerais travailler avec vous",
    pitch: 'Une idée ? Construisons quelque chose ensemble !',
    info: 'Coordonnées',
    name: 'Nom complet',
    namePlaceholder: 'Votre nom',
    email: 'Adresse e-mail',
    emailPlaceholder: 'Votre adresse e-mail',
    subject: 'Objet',
    subjectPlaceholder: 'Objet de votre message',
    message: 'Message',
    messagePlaceholder: 'Votre message',
    submit: 'Envoyer',
    submitting: 'Envoi en cours...',
  },
  footer: {
    links: {
      home: 'Accueil',
      about: 'À propos',
      projects: 'Projets',
      services: 'Services',
      contact: 'Contact',
      cv: 'CV',
    },
    contact: 'Me contacter',
    location: 'Localisation',
    credits: 'Crédits',
    creditsText: 'Photo : Léa Richard / Modèle : Abdul Basit',
    languages: 'Langues',
  },
  theme: {
    select: '_choisir-thème',
  },
}

export const dictionary: Record<Lang, Dictionary> = { en, fr }

/** Small helper for data entries that carry both languages */
export type Localized<T> = { en: T; fr: T }
