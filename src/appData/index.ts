// Data for portfolio
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
} from '../utils/icons'

// Project Data
export const projects = [
  {
    "priority": 1,
    "title": "Bubbles",
    "livePreview": "https://bubbles-hony.vercel.app/",
    "shortDescription": "Job-search website where candidates and employers each get their own profile. Built with Next.js and modern web tooling.",
    "cover": "/preview/bubbles.png",
    "siteAge": "october 2026",
    "githubLink": "https://github.com/Honyoru/Bubbles-pub",
    "type": "Web 🌐"
  },

  {
    "priority": 2,
    "title": "Hérisson vs Blaireau",
    "shortDescription": "A local multiplayer zone-capture game: the screen is projected for everyone and each player uses their phone as a controller.",
    "cover": "/preview/bubbles.png",
    "siteAge": "may 2020",
    "type": "Multiplayer 🎮"
  },

  {
    "priority": 3,
    "title": "C Compiler",
    "shortDescription": "A compiler built in C, including pattern recognition to read and process source code.",
    "cover": "/preview/bubbles.png",
    "siteAge": "december 2019",
    "type": "Systems ⚙️"
  },

  {
    "priority": 4,
    "title": "3D Climbing Game",
    "shortDescription": "A 3D climbing game developed in C.",
    "cover": "/preview/bubbles.png",
    "siteAge": "may 2020",
    "type": "Game 🎮"
  },

  {
    "priority": 5,
    "title": "Labyrinth Game",
    "shortDescription": "Digital adaptation of the board game Labyrinthe.",
    "cover": "/preview/bubbles.png",
    "siteAge": "may 2019",
    "type": "Game 🎮"
  },
]

// Service Data
export const serviceData = [
    
  {
    icon: PythonIcon,
    title: 'Python Development',
    shortDescription: 'Writing clean scripts and applications to automate tasks and process data with Python.',
  },
  {
    icon: JavaScriptIcon,
    title: 'JavaScript Development',
    shortDescription: 'Creating dynamic and interactive web applications using JavaScript.',
  },
  {
    icon: ReactIcon,
    title: 'React.js Development',
    shortDescription: 'Building modern and responsive user interfaces with React.js.',
  },
  {
    icon: NextjsIcon,
    title: 'Next.js Development',
    shortDescription: 'Creating server-rendered React applications with Next.js.',
  },
  {
    icon: TypescriptIcon,
    title: 'TypeScript Development',
    shortDescription: 'Ensuring robust and maintainable code with TypeScript.',
  },
  {
    icon: TailwindCSS,
    title: 'Tailwind CSS Styling',
    shortDescription: 'Designing beautiful and responsive interfaces with Tailwind CSS.',
  },
  {
    icon: CIcon,
    title: 'C Programming',
    shortDescription: 'Building efficient, low-level software in C, from compilers to 3D games.',
  },
  {
    icon: SqlIcon,
    title: 'SQL Databases',
    shortDescription: 'Modeling, querying and optimizing relational data with SQL.',
  },
  {
    icon: GitIcon,
    title: 'Git Version Control',
    shortDescription: 'Collaborating efficiently and keeping a clean project history with Git.',
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
]

export const footerLinks = [
  {
    title: 'Home',
    href: '#'
  },
  {
    title: 'About Me',
    href: '/about',
  },
  {
    title: 'Projects',
    href: '#projects'
  },
  {
    title: 'Services',
    href: '#services',
  },
  {
    title: 'Contact',
    href: '#contact',
  },
  {
    title: 'Cv',
    href: '/cv',
  },
]

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
    name: 'Retro',
    colors: ['#fff3e0', '#6d4c41', '#ffcc80', '#5d4037', '#ffab40'],
  },
]

export const languages = ['En']

export const aboutSections = [
  {
    title: 'Who I am',
    text: 'I came from near Saint-Etienne where I grow up and done most of my studies / life. Since 2024, I live in the Montpellier region.',
    image: '/images/Saint-Etienne.jpeg',
    alt: 'Saint-Etienne',
  },
  {
    title: 'My biggest hobby',
    text: 'For years I organized esports events. Moreover, I am a player for MUC now but I had severals other teams. The game I play is Super Smash Bros Ultimate and play only one charater : Falco. I am one of the best on my character in France and I was in the top ~300 in France',
    image: '/images/Honyoru.jpeg',
    alt: 'Honyoru',
  },
  {
    title: 'What I wish to do',
    text: 'In the futur, I wish to have the luck to have varieties in my work. I love to learn new thing (Even if they aren\'t useful to me now)',
    image: '/images/Futur.jpeg',
    alt: 'Futur',
  },
]

