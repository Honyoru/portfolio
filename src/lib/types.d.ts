export interface Project {
  title: string
  shortDescription: string
  priority: number
  cover?: string
  livePreview?: string
  githubLink?: string
  visitors?: string
  earned?: string
  githubStars?: string
  ratings?: string
  numberOfSales?: string
  type: string
  siteAge?: string
  /** French overrides, the English fields above are the default */
  fr?: Partial<Pick<Project, 'title' | 'shortDescription' | 'type' | 'siteAge'>>
}

export interface Heading {
  id: string
  title: string
  items: Heading[]
}
