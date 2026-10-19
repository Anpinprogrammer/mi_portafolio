import { SectionDivider } from './SectionDivider'
import { useState } from 'react'
import { ArrowUpRight, ChevronLeft, ChevronRight } from 'lucide-react'
import { copy, projects, type Locale } from '../data/content'
import { ProjectCard } from './ProjectCard'
import { Reveal } from './Reveal'
import { SectionTitle } from './SectionTitle'

type ProjectsProps = {
  locale: Locale
}

export function Projects({ locale }: ProjectsProps) {
  const t = copy[locale]
  const [activeIndex, setActiveIndex] = useState(0)
  const move = (direction: number) => {
    setActiveIndex((current) => (current + direction + projects.length) % projects.length)
  }

  return (
    <section id="projects" className="relative py-12 md:py-24">
      <SectionDivider />
      <div className="container-site">
        <div className="text-left">
          <SectionTitle
            eyebrow={t.projectsEyebrow}
            title={t.projectsTitle}
            emphasis={t.projectsTitle2}
            intro={t.projectsIntro}
          />
        </div>

        <div className="hidden auto-rows-fr gap-5 lg:grid lg:grid-cols-2 xl:grid-cols-3">
          {projects.map((project) => (
            <div key={project.id} className="min-w-0">
              <ProjectCard project={project} locale={locale} />
            </div>
          ))}
        </div>

        <div
          role="region"
          aria-roledescription={locale === 'es' ? 'carrusel' : 'carousel'}
          aria-label={locale === 'es' ? 'Proyectos destacados' : 'Featured projects'}
          onKeyDown={(event) => {
            if (event.target !== event.currentTarget) return
            if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
              event.preventDefault()
              move(event.key === 'ArrowLeft' ? -1 : 1)
            }
          }}
          tabIndex={0}
          className="rounded-3xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-cyan lg:hidden"
        >
          <div className="grid grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-2 sm:gap-4">
            <button
              type="button"
              onClick={() => move(-1)}
              aria-label={locale === 'es' ? 'Proyecto anterior' : 'Previous project'}
              aria-controls="project-slide"
              className="grid h-8 w-8 place-items-center rounded-full border border-white/15 bg-[#101725] text-cyan transition-colors hover:bg-cyan/10 sm:h-11 sm:w-11"
            >
              <ChevronLeft size={20} />
            </button>
            <div id="project-slide" className="grid min-w-0">
              {projects.map((project, index) => (
                <div
                  key={project.id}
                  aria-hidden={index !== activeIndex}
                  className={`min-w-0 [grid-area:1/1] ${index === activeIndex ? 'visible' : 'invisible'}`}
                >
                  <ProjectCard project={project} locale={locale} wide />
                </div>
              ))}
            </div>
            <button
              type="button"
              onClick={() => move(1)}
              aria-label={locale === 'es' ? 'Proyecto siguiente' : 'Next project'}
              aria-controls="project-slide"
              className="grid h-8 w-8 place-items-center rounded-full border border-white/15 bg-[#101725] text-cyan transition-colors hover:bg-cyan/10 sm:h-11 sm:w-11"
            >
              <ChevronRight size={20} />
            </button>
          </div>
          <p
            aria-live="polite"
            aria-atomic="true"
            className="mt-4 text-center font-mono text-xs text-slate-400"
          >
            {activeIndex + 1} / {projects.length} · {projects[activeIndex].title}
          </p>
        </div>
        <Reveal className="mt-6 flex justify-center md:mt-10">
          <a
            href="#contact"
            className="inline-flex min-h-12 w-full items-center justify-center gap-3 rounded-xl border border-cyan/40 bg-cyan/10 px-6 py-3 text-sm font-bold text-cyan shadow-[0_0_20px_rgba(0,229,245,0.08)] transition-colors hover:border-cyan/70 hover:bg-cyan/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan md:w-auto"
          >
            {locale === 'es'
              ? 'Hablemos de tu próximo proyecto'
              : 'Let’s discuss your next project'}
            <ArrowUpRight size={18} aria-hidden="true" />
          </a>
        </Reveal>
      </div>
    </section>
  )
}
