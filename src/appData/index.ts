// Data for portfolio
import type { Localized } from '../i18n/dictionary'
import {
  PythonIcon,
  CIcon,
  JavaIcon,
  Html5Icon,
  Css3Icon,
  SqlIcon,
  MongodbIcon,
  GitIcon,
  LinuxIcon,
  BashIcon,
  JavaScriptIcon,
  NextjsIcon,
  ReactIcon,
  TailwindCSS,
  TypescriptIcon,
  RustIcon,
  AsmIcon,
  ClaudeIcon,
} from '../utils/icons'

// Service Data
export const serviceData: { icon: string; title: Localized<string>; shortDescription: Localized<string> }[] = [
    
  {
    icon: PythonIcon,
    title: { en: 'Python Development', fr: 'Développement Python' },
    shortDescription: {
      en: 'Writing clean scripts and applications to automate tasks and process data with Python.',
      fr: 'Écriture de scripts et d\'applications propres pour automatiser des tâches et traiter des données en Python.',
    },
  },
  {
    icon: JavaIcon,
    title: { en: 'Java Development', fr: 'Développement Java' },
    shortDescription: {
      en: 'Building object-oriented applications and games in Java, with design patterns and unit tests.',
      fr: 'Création d\'applications et de jeux orientés objet en Java, avec design patterns et tests unitaires.',
    },
  },
  {
    icon: ReactIcon,
    title: { en: 'React.js Development', fr: 'Développement React.js' },
    shortDescription: {
      en: 'Building modern and responsive user interfaces with React.js.',
      fr: 'Création d\'interfaces modernes et responsives avec React.js.',
    },
  },
  {
    icon: NextjsIcon,
    title: { en: 'Next.js Development', fr: 'Développement Next.js' },
    shortDescription: {
      en: 'Creating server-rendered React applications with Next.js.',
      fr: 'Création d\'applications React rendues côté serveur avec Next.js.',
    },
  },
  {
    icon: TypescriptIcon,
    title: { en: 'TypeScript Development', fr: 'Développement TypeScript' },
    shortDescription: {
      en: 'Ensuring robust and maintainable code with TypeScript.',
      fr: 'Un code robuste et maintenable grâce à TypeScript.',
    },
  },
  {
    icon: RustIcon,
    title: { en: 'Rust Development', fr: 'Développement Rust' },
    shortDescription: {
      en: 'Writing fast and memory-safe programs in Rust, from simulations to systems tools.',
      fr: 'Écriture de programmes rapides et sûrs en mémoire en Rust, des simulations aux outils système.',
    },
  },
  {
    icon: CIcon,
    title: { en: 'C Programming', fr: 'Programmation C' },
    shortDescription: {
      en: 'Building efficient, low-level software in C, from compilers to 3D games.',
      fr: 'Conception de logiciels bas niveau efficaces en C, des compilateurs aux jeux 3D.',
    },
  },
  {
    icon: SqlIcon,
    title: { en: 'SQL Databases', fr: 'Bases de données SQL' },
    shortDescription: {
      en: 'Modeling, querying and optimizing relational data with SQL.',
      fr: 'Modélisation, requêtes et optimisation de données relationnelles avec SQL.',
    },
  },
  {
    icon: GitIcon,
    title: { en: 'Git Version Control', fr: 'Versionnage avec Git' },
    shortDescription: {
      en: 'Collaborating efficiently and keeping a clean project history with Git.',
      fr: 'Collaborer efficacement et garder un historique de projet propre avec Git.',
    },
  },
]

// Skill List
export const skillList = [
  { name: 'Python', icon: PythonIcon },
  { name: 'C', icon: CIcon },
  { name: 'JavaScript', icon: JavaScriptIcon },
  { name: 'TypeScript', icon: TypescriptIcon },
  { name: 'Java', icon: JavaIcon },
  { name: 'HTML', icon: Html5Icon },
  { name: 'CSS', icon: Css3Icon },
  { name: 'React.js', icon: ReactIcon },
  { name: 'Next.js', icon: NextjsIcon },
  { name: 'Tailwind CSS', icon: TailwindCSS },
  { name: 'SQL', icon: SqlIcon },
  { name: 'MongoDB', icon: MongodbIcon },
  { name: 'Git', icon: GitIcon },
  { name: 'Linux', icon: LinuxIcon },
  { name: 'Bash', icon: BashIcon },
  { name: 'Rust', icon: RustIcon },
  { name: 'ASM', icon: AsmIcon },
  { name: 'Claude', icon: ClaudeIcon },
]

export const footerLinks = [
  { key: 'home', href: '#' },
  { key: 'about', href: '/about' },
  { key: 'projects', href: '#projects' },
  { key: 'services', href: '#services' },
  { key: 'contact', href: '#contact' },
  { key: 'cv', href: '/cv' },
] as const

export const themes = [
  {
    name: 'Light',
    colors: ['#fff', '#0d1a3b', '#dbe3f7', '#0d1a3b', '#5565e8'],
  },
  {
    name: 'Dark',
    colors: ['#011627', '#607b96', '#0d1a3b', '#5565e8', '#18f2e5'],
  },
  {
    name: 'Aqua',
    colors: ['#b2e4e8', '#004a55', '#00c1d4', '#004a55', '#ff6f61'],
  },
  {
    name: 'Marine',
    colors: ['#ffffff', '#0b1f4b', '#f97316', '#0b1f4b', '#e8edf7'],
  },
  {
    name: 'Retro',
    colors: ['#fff3e0', '#6d4c41', '#ffcc80', '#5d4037', '#ffab40'],
  },
]

export const aboutSections: { title: Localized<string>; text: Localized<string>; image: string; alt: string }[] = [
  {
    title: { en: 'Who I am', fr: 'Qui je suis' },
    text: {
      en: 'I came from near Saint-Etienne where I grow up and done most of my studies / life. Since 2024, I live in the Montpellier region.',
      fr: "Je viens des environs de Saint-Étienne, où j'ai grandi et fait la plupart de mes études. Depuis 2024, je vis dans la région de Montpellier.",
    },
    image: '/images/Saint-Etienne.jpeg',
    alt: 'Saint-Etienne',
  },
  {
    title: { en: 'My biggest hobby', fr: 'Ma plus grande passion' },
    text: {
      en: 'For years I organized esports events. Moreover, I am a player for MUC now but I had severals other teams. The game I play is Super Smash Bros Ultimate and play only one charater : Falco. I am one of the best on my character in France and I was in the top ~300 in France',
      fr: "Pendant des années, j'ai organisé des événements esport. Je joue aujourd'hui pour MUC, après plusieurs autres équipes. Mon jeu est Super Smash Bros Ultimate et je ne joue qu'un seul personnage : Falco. Je suis l'un des meilleurs joueurs Falco de France et j'ai été classé dans le top ~300 français.",
    },
    image: '/images/Honyoru.jpeg',
    alt: 'Honyoru',
  },
  {
    title: { en: 'What I wish to do', fr: "Ce que j'aimerais faire" },
    text: {
      en: "In the futur, I wish to have the luck to have varieties in my work. I love to learn new thing (Even if they aren't useful to me now)",
      fr: "À l'avenir, j'aimerais avoir la chance d'avoir de la variété dans mon travail. J'adore apprendre de nouvelles choses (même si elles ne me sont pas utiles tout de suite).",
    },
    image: '/images/Futur.jpeg',
    alt: 'Futur',
  },
]
