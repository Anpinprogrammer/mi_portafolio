import { WhatsAppButton } from './components/WhatsAppButton'
import { useEffect, useState } from 'react'
import { useReducedMotion } from 'framer-motion'
import { About } from './components/About'
import { Contact } from './components/Contact'
import { Experience } from './components/Experience'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Projects } from './components/Projects'
import { Skills } from './components/Skills'
import type { Locale } from './data/content'
import { sectionIds, type SectionId } from './data/sections'
import { updateDocumentMetadata } from './utils/metadata'

const LOCALE_STORAGE_KEY = 'portfolio-locale'

function getInitialLocale(): Locale {
  const storedLocale = localStorage.getItem(LOCALE_STORAGE_KEY)

  if (storedLocale === 'en' || storedLocale === 'es') {
    return storedLocale
  }

  return navigator.language.startsWith('es') ? 'es' : 'en'
}

export default function App() {
  const [locale, setLocale] = useState<Locale>(getInitialLocale)
  const [activeSection, setActiveSection] = useState<SectionId>('home')
  const [scrolled, setScrolled] = useState(false)
  const reduceMotion = useReducedMotion()

  useEffect(() => {
    localStorage.setItem(LOCALE_STORAGE_KEY, locale)
    updateDocumentMetadata(locale)
  }, [locale])

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 35)

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id as SectionId)
          }
        })
      },
      { rootMargin: '-30% 0px -55% 0px' }
    )

    sectionIds.forEach((sectionId) => {
      const section = document.getElementById(sectionId)
      if (section) observer.observe(section)
    })

    return () => {
      window.removeEventListener('scroll', handleScroll)
      observer.disconnect()
    }
  }, [])

  const navigateTo = (sectionId: SectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({
      behavior: reduceMotion ? 'auto' : 'smooth',
    })
  }

  const toggleLocale = () => {
    setLocale((currentLocale) => (currentLocale === 'es' ? 'en' : 'es'))
  }

  return (
    <div className="relative min-h-screen overflow-hidden bg-canvas text-slate-50 selection:bg-cyan/25 selection:text-white">
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <div className="bg-grain pointer-events-none absolute inset-0 z-0 opacity-30" />

      <Header
        locale={locale}
        activeSection={activeSection}
        scrolled={scrolled}
        onNavigate={navigateTo}
        onToggleLocale={toggleLocale}
      />

      <main id="main">
        <Hero locale={locale} onNavigate={navigateTo} />
        <Skills locale={locale} />
        <Projects locale={locale} />
        <About locale={locale} />
        <Experience locale={locale} />
        <Contact locale={locale} />
      </main>

      <Footer locale={locale} />
      <WhatsAppButton locale={locale} />
    </div>
  )
}
