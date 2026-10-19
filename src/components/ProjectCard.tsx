import { ArrowUpRight, Github } from 'lucide-react'
import { copy, type Locale, type Project } from '../data/content'
import { ProjectPreview } from './ProjectPreview'
import { Reveal } from './Reveal'

type ProjectCardProps = {
  project: Project
  locale: Locale
  wide?: boolean
}

export function ProjectCard({ project, locale, wide = false }: ProjectCardProps) {
  const t = copy[locale]
  const links = [
    { name: t.repo, href: project.github, icon: Github },
    { name: t.live, href: project.demo, icon: ArrowUpRight },
  ]

  return (
    <Reveal className={`h-full ${wide ? 'lg:col-span-2' : ''}`}>
      <article
        className={`project-card group relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#111827]/80 transition-colors duration-300 hover:border-cyan/30 sm:rounded-[26px] ${
          wide ? 'lg:grid lg:grid-cols-[1.04fr_.96fr]' : ''
        }`}
      >
        <div
          className={`relative shrink-0 overflow-hidden ${
            wide
              ? 'h-[210px] sm:h-auto sm:min-h-[300px] lg:min-h-[360px]'
              : 'h-[210px] sm:h-auto sm:min-h-[300px] lg:h-[210px] lg:min-h-0'
          }`}
        >
          <ProjectPreview type={project.type} />
          <div className="absolute bottom-4 left-4 z-10 rounded-full border border-white/20 bg-[#080e19]/70 px-3 py-1.5 font-mono text-[10px] tracking-widest text-slate-300 backdrop-blur-xl">
            FEATURED / {project.feature}
          </div>
        </div>

        <div
          className={`flex flex-1 flex-col p-3 sm:p-8 lg:p-5 ${wide ? 'lg:justify-center lg:p-10' : ''}`}
        >
          <span className="mb-1 text-[10px] font-bold uppercase tracking-[.23em] text-cyan sm:mb-4 lg:mb-2">
            {project.category[locale]}
          </span>

          <div className="mb-2 flex items-start justify-between gap-2 sm:mb-3">
            <h3 className="font-display text-lg font-bold tracking-tight text-white sm:text-3xl lg:text-2xl">
              {project.title}
            </h3>
            <ArrowUpRight
              className="mt-1 shrink-0 text-slate-500 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-cyan"
              size={22}
            />
          </div>

          <p className="mb-2 text-xs leading-5 text-muted sm:mb-6 sm:text-sm sm:leading-7 lg:mb-4 lg:leading-6">
            {project.description[locale]}
          </p>

          <div className="mb-2 flex flex-wrap gap-1 sm:mb-7 sm:gap-2 lg:mb-4 lg:gap-1.5">
            {project.technologies.map((technology) => (
              <span className="tech-chip" key={technology}>
                {technology}
              </span>
            ))}
          </div>

          <div className="mt-auto flex flex-wrap items-center gap-3 border-t border-white/10 pt-2 sm:gap-5 sm:pt-5 lg:pt-3">
            {links.map(({ name, href, icon: Icon }) =>
              href ? (
                <a
                  key={name}
                  href={href}
                  rel="noopener noreferrer"
                  target="_blank"
                  className="inline-flex items-center gap-2 text-xs font-semibold text-white transition-colors hover:text-cyan sm:text-sm"
                >
                  <Icon size={16} />
                  {name}
                </a>
              ) : (
                <span
                  key={name}
                  className="inline-flex cursor-not-allowed items-center gap-2 text-xs text-slate-500 sm:text-sm"
                  title={t.unavailable}
                >
                  <Icon size={16} />
                  {name}
                </span>
              )
            )}
          </div>
        </div>
      </article>
    </Reveal>
  )
}
