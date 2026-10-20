import { SectionDivider } from './SectionDivider'
import { ArrowUpRight, BriefcaseBusiness, Code2, Terminal, Workflow } from 'lucide-react'
import { copy, skills, type Locale } from '../data/content'
import { Reveal } from './Reveal'
import { SectionTitle } from './SectionTitle'
import { SkillsMarquee } from './SkillsMarquee'

const skillIcons = [Code2, Terminal, BriefcaseBusiness, Workflow] as const

type SkillsProps = {
  locale: Locale
}

export function Skills({ locale }: SkillsProps) {
  const t = copy[locale]

  return (
    <section id="skills" className="skills-background relative isolate py-12 md:py-24">
      <SectionDivider />
      <div className="container-site relative">
        <div className="mb-8 grid min-w-0 items-center gap-6 lg:mb-12 lg:grid-cols-2 lg:gap-12">
          <SectionTitle
            eyebrow={t.skillsEyebrow}
            title={t.skillsTitle}
            emphasis={t.skillsTitle2}
            intro={t.skillsIntro}
            spacing="none"
          />
          <SkillsMarquee locale={locale} />
        </div>

        <div
          role="region"
          aria-label={locale === 'es' ? 'Tecnologías y habilidades' : 'Technologies and skills'}
          tabIndex={0}
          className="flex snap-x snap-mandatory gap-4 overflow-x-auto overscroll-x-contain rounded-2xl pb-6 pt-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-cyan sm:grid sm:grid-cols-2 sm:overflow-visible sm:pb-0 sm:pt-0 lg:grid-cols-4"
        >
          {skills.map(({ key, list }, index) => {
            const Icon = skillIcons[index]

            return (
              <Reveal
                key={key}
                delay={index * 0.07}
                className="min-w-0 shrink-0 basis-[85%] snap-start sm:basis-auto"
              >
                <div className="skill-card group h-full">
                  <div className="mb-8 flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan/15 bg-cyan/[.07] text-cyan transition-all duration-300 group-hover:border-cyan/40 group-hover:bg-cyan/15">
                    <Icon size={22} />
                  </div>

                  <h3 className="mb-5 font-display text-lg font-bold text-white">{t[key]}</h3>

                  <div className="flex flex-wrap gap-2">
                    {list.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-lg border border-white/[.08] bg-white/[.035] px-2.5 py-1.5 text-xs text-slate-300 transition-colors group-hover:border-white/15"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            )
          })}
        </div>
        <Reveal className="mt-6 flex justify-center md:mt-10">
          <a
            href="#projects"
            className="inline-flex min-h-12 w-full items-center justify-center gap-3 rounded-xl border border-cyan/40 bg-cyan/10 px-6 py-3 text-sm font-bold text-cyan shadow-[0_0_20px_rgba(0,229,245,0.08)] transition-colors hover:border-cyan/70 hover:bg-cyan/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan md:w-auto lg:w-[340px] lg:max-w-full"
          >
            {locale === 'es'
              ? 'Ver estas tecnologías en acción'
              : 'See these technologies in action'}
            <ArrowUpRight size={18} aria-hidden="true" />
          </a>
        </Reveal>
      </div>
    </section>
  )
}
