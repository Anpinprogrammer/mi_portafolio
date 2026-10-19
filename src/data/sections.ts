export const sectionIds = ['home', 'skills', 'projects', 'about','experience', 'contact'] as const

export type SectionId = (typeof sectionIds)[number]
