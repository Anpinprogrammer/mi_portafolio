import { useEffect, useState } from 'react'
import { Header } from './Header'
import { sectionIds, type SectionId } from '../data/sections'
import type { Locale } from '../data/content'

type SiteHeaderProps = {
  locale: Locale
  onNavigate: (sectionId: SectionId) => void
  onToggleLocale: () => void
}

// Scroll updates only render the header, rather than every section of the page.
export function SiteHeader(props: SiteHeaderProps) {
  const [activeSection, setActiveSection] = useState<SectionId>('home')
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    let wasScrolled = window.scrollY > 35
    setScrolled(wasScrolled)
    const handleScroll = () => {
      const next = window.scrollY > 35
      if (next !== wasScrolled) {
        wasScrolled = next
        setScrolled(next)
      }
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id as SectionId)
        })
      },
      { rootMargin: '-30% 0px -55% 0px' }
    )
    sectionIds.forEach((id) => {
      const section = document.getElementById(id)
      if (section) observer.observe(section)
    })
    return () => {
      window.removeEventListener('scroll', handleScroll)
      observer.disconnect()
    }
  }, [])

  return <Header {...props} activeSection={activeSection} scrolled={scrolled} />
}
