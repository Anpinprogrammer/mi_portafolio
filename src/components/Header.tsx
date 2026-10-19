import { useState } from 'react'
import { AnimatePresence, m as motion } from 'framer-motion'
import { ArrowUpRight, ChevronDown, Globe2, Menu, X } from 'lucide-react'
import { copy, type Locale } from '../data/content'
import { sectionIds, type SectionId } from '../data/sections'

type HeaderProps = {
  locale: Locale
  activeSection: SectionId
  scrolled: boolean
  onNavigate: (sectionId: SectionId) => void
  onToggleLocale: () => void
}

export function Header({
  locale,
  activeSection,
  scrolled,
  onNavigate,
  onToggleLocale,
}: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false)
  const t = copy[locale]

  const navigate = (sectionId: SectionId) => {
    setMenuOpen(false)
    onNavigate(sectionId)
  }

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b px-4 transition-all duration-300 ${
        scrolled
          ? 'border-white/10 bg-[#090d16]/90 py-3 shadow-[0_8px_30px_rgba(0,0,0,0.25)] backdrop-blur-xl'
          : 'border-transparent bg-transparent pt-5 sm:pt-7'
      }`}
    >
      <div className="mx-auto flex max-w-[1190px] items-center justify-between gap-3 xl:max-w-[1440px]">
        <button
          aria-label="Go to home"
          onClick={() => navigate('home')}
          className="z-10 flex items-center gap-2.5 rounded-2xl border border-white/10 bg-[#101725]/85 px-3.5 py-2.5 backdrop-blur-xl sm:px-4"
        >
          <span className="font-display text-sm font-bold tracking-tighter md:text-xl">
            AP<span className="text-cyan">.</span>
          </span>
          <span className="border-l border-white/20 pl-2.5 text-[10px] font-semibold uppercase tracking-[.2em] text-slate-300 sm:block">
            Software Engineer
          </span>
        </button>

        <nav
          aria-label="Main navigation"
          className="hidden rounded-full border border-white/10 bg-[#101725]/85 p-1.5 shadow-2xl backdrop-blur-2xl lg:flex"
        >
          {sectionIds.map((sectionId, index) => (
            <button
              key={sectionId}
              onClick={() => navigate(sectionId)}
              className={`rounded-full px-3.5 py-2 text-xs font-semibold transition-colors xl:px-4 ${
                activeSection === sectionId
                  ? 'bg-white/10 text-cyan'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              {t.nav[index]}
            </button>
          ))}
        </nav>

        <div className="z-10 flex items-center gap-2">
          <button
            className="flex items-center gap-2 rounded-full border border-white/10 bg-[#101725]/85 px-3 py-2.5 text-xs font-bold backdrop-blur-xl transition-colors hover:border-cyan/30"
            onClick={onToggleLocale}
            aria-label="Switch language"
          >
            <Globe2 size={15} className="text-cyan" />
            {locale.toUpperCase()}
            <ChevronDown size={12} />
          </button>

          <button
            onClick={() => navigate('contact')}
            className="hidden items-center gap-2 rounded-full bg-gradient-to-r from-cyan to-[#649BFF] px-4 py-2.5 text-xs font-bold text-[#08101d] transition-all hover:brightness-110 sm:flex"
          >
            {t.contactCTA}
            <ArrowUpRight size={15} />
          </button>

          <button
            className="grid h-10 w-10 place-items-center rounded-xl border border-white/10 bg-[#101725] lg:hidden"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            className="mx-auto mt-3 max-w-[1190px] rounded-[22px] border border-white/10 bg-[#101725]/95 p-3 shadow-2xl backdrop-blur-2xl lg:hidden"
            aria-label="Mobile navigation"
          >
            {sectionIds.map((sectionId, index) => (
              <button
                key={sectionId}
                onClick={() => navigate(sectionId)}
                className={`block w-full rounded-xl px-4 py-3 text-left text-sm ${
                  activeSection === sectionId ? 'bg-cyan/10 text-cyan' : 'text-slate-200'
                }`}
              >
                {t.nav[index]}
              </button>
            ))}
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  )
}
