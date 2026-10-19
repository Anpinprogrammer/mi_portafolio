import type { Locale } from '../data/content'

const pageContent = {
  es: {
    title: 'Andrés Pineda | Ingeniero de Software',
    description:
      'Andrés Pineda — Ingeniero de Software. Desarrollo full-stack, React, TypeScript, Node.js y automatización.',
  },
  en: {
    title: 'Andrés Pineda | Software Engineer',
    description:
      'Andrés Pineda — Software Engineer. Full-stack development with React, TypeScript, Node.js, and automation.',
  },
} as const

export function updateDocumentMetadata(locale: Locale) {
  const { title, description } = pageContent[locale]

  document.documentElement.lang = locale
  document.title = title
  document.querySelector('meta[name="description"]')?.setAttribute('content', description)
}
