import { SectionDivider } from './SectionDivider'
import { ArrowUpRight, Download, GraduationCap, Languages, MapPin } from 'lucide-react'
import { copy, type Locale } from '../data/content'
import { Reveal } from './Reveal'
import { SectionTitle } from './SectionTitle'

type AboutProps = {
  locale: Locale
}

export function About({ locale }: AboutProps) {
  const t = copy[locale]
  const resumeHref =
    locale === 'es' ? '/assets/Andres-Pineda-CV-ES.pdf' : '/assets/Andres-Pineda-Resume-EN.pdf'

  const emphasis =
    locale === 'es'
      ? ['productos digitales intuitivos y robustos', 'flujos automatizados']
      : ['intuitive, reliable digital products', 'automated workflows']
  const descriptionParts = t.aboutText.split(new RegExp(`(${emphasis.join('|')})`, 'g'))
  const badgeClass =
    'flex min-w-0 items-center gap-3 rounded-2xl border border-white/15 bg-[#131B2E]/90 px-4 py-3 text-sm leading-relaxed text-white backdrop-blur-xl'

  return (
    <section id="about" className="relative pb-12 md:pb-24 pt-12 md:py-20 lg:py-24">
      <SectionDivider />
      <div className="container-site grid items-start gap-7 lg:max-w-[1200px] lg:grid-cols-[.85fr_1.15fr] lg:gap-x-16 lg:gap-y-6 xl:gap-x-24">
        <div className="order-1 lg:col-start-2 lg:row-start-1 lg:self-end">
          <SectionTitle
            eyebrow={t.aboutEyebrow}
            title={t.aboutTitle}
            emphasis={t.aboutTitle2}
            spacing="none"
          />
        </div>

        <div className="order-2 lg:col-start-1 lg:row-span-2 lg:row-start-1 lg:self-center">
          <Reveal>
            <div className="relative isolate mx-auto w-full max-w-sm overflow-visible lg:max-w-[390px] lg:pt-28">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-x-0 bottom-0 top-[16%] z-[1] rounded-full bg-[radial-gradient(ellipse_at_30%_35%,rgba(0,229,245,0.22),transparent_65%),radial-gradient(ellipse_at_75%_65%,rgba(139,92,246,0.28),transparent_65%)] blur-3xl"
              />
              <div
                className="pointer-events-none absolute right-3 top-1 z-[3] hidden w-[216px] max-w-[calc(100%-24px)] rounded-xl border border-white/15 bg-slate-900/75 shadow-[0_16px_35px_rgba(0,0,0,0.25),0_0_25px_rgba(0,229,245,0.07)] backdrop-blur-md motion-safe:animate-bounce md:w-64 lg:-left-20 lg:right-auto lg:block xl:-left-36"
                aria-hidden="true"
              >
                <div className="flex items-center gap-1.5 border-b border-white/10 px-3 py-2">
                  <span className="h-2 w-2 rounded-full bg-rose-400/90" />
                  <span className="h-2 w-2 rounded-full bg-amber-300/90" />
                  <span className="h-2 w-2 rounded-full bg-emerald-400/90" />
                  <span className="ml-2 font-mono text-[9px] text-slate-400">developer.ts</span>
                </div>
                <pre className="px-3 py-3 font-mono text-[10px] leading-relaxed text-slate-300 md:text-xs">
                  <code>
                    <span className="text-violet-300">const</span>
                    {' dev = {\n'}
                    {'  name: '}
                    <span className="text-cyan">'Andrés'</span>
                    {',\n'}
                    {'  focus: '}
                    <span className="text-cyan">'Build with purpose'</span>
                    {'\n'}
                    {'};'}
                  </code>
                </pre>
              </div>
              <img
                src="/assets/about.png"
                alt={locale === 'es' ? 'Fotografía de Andrés Pineda' : 'Photo of Andrés Pineda'}
                loading="lazy"
                className="relative z-[2] mx-auto block h-auto w-full max-w-md object-contain [-webkit-mask-image:linear-gradient(to_bottom,black_78%,transparent_100%)] [mask-image:linear-gradient(to_bottom,black_78%,transparent_100%)]"
              />
            </div>
          </Reveal>
        </div>
        <div className="order-3 min-w-0 lg:col-start-2 lg:row-start-2 lg:self-start">
          <Reveal delay={0.1}>
            <p className="text-base leading-8 text-slate-200">
              {descriptionParts.map((part, index) =>
                emphasis.includes(part) ? (
                  <strong key={index} className="font-semibold text-white">
                    {part}
                  </strong>
                ) : (
                  part
                )
              )}
            </p>
            <p className="mt-4 text-base leading-[1.9] text-slate-400">{t.aboutSecond}</p>

            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              <div className={badgeClass}>
                <MapPin className="shrink-0 text-cyan" size={20} />
                <span>{t.location}</span>
              </div>
              <div className={badgeClass}>
                <Languages className="shrink-0 text-cyan" size={20} />
                <span>{t.language}</span>
              </div>
              <div className={`${badgeClass} sm:col-span-2`}>
                <GraduationCap className="shrink-0 text-cyan" size={20} />
                <span>{t.education}</span>
              </div>
            </div>

            <a
              href={resumeHref}
              download
              className="mt-7 inline-flex min-h-12 w-full items-center justify-center gap-3 rounded-xl border border-cyan/40 bg-cyan/10 px-6 py-3 text-sm font-bold text-cyan shadow-[0_0_20px_rgba(0,229,245,0.08)] transition-colors hover:border-cyan/70 hover:bg-cyan/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan md:w-auto"
            >
              <Download size={17} />
              {t.cv}
              <ArrowUpRight size={15} />
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
