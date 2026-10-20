import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, m as motion, useReducedMotion } from 'framer-motion'
import { SectionDivider } from './SectionDivider'
import { ArrowUpRight, ChevronLeft, ChevronRight, GraduationCap, Pause, Play } from 'lucide-react'
import { copy, jobs, type Locale } from '../data/content'
import { Reveal } from './Reveal'
import { SectionTitle } from './SectionTitle'

type ExperienceProps = {
  locale: Locale
}

export function Experience({ locale }: ExperienceProps) {
  const t = copy[locale]
  const reduceMotion = useReducedMotion()
  const [activeStep, setActiveStep] = useState(0)
  const [paused, setPaused] = useState(false)
  const [interacting, setInteracting] = useState(false)
  const [autoPlayAvailable, setAutoPlayAvailable] = useState(false)
  const carouselRef = useRef<HTMLDivElement>(null)
  const touchStart = useRef<number | null>(null)
  const move = (direction: number) =>
    setActiveStep((current) => (current + direction + jobs.length) % jobs.length)

  useEffect(() => {
    const mobile = window.matchMedia('(max-width: 1023px)')
    const element = carouselRef.current
    if (!element) return
    let visible = false
    const update = () => setAutoPlayAvailable(mobile.matches && visible && !document.hidden)
    const observer = new IntersectionObserver(
      ([entry]) => {
        visible = entry.isIntersecting
        update()
      },
      { threshold: 0.4 }
    )
    observer.observe(element)
    mobile.addEventListener('change', update)
    document.addEventListener('visibilitychange', update)
    return () => {
      observer.disconnect()
      mobile.removeEventListener('change', update)
      document.removeEventListener('visibilitychange', update)
    }
  }, [])

  useEffect(() => {
    if (!autoPlayAvailable || paused || interacting || reduceMotion) return
    const timer = window.setInterval(() => move(1), 6000)
    return () => window.clearInterval(timer)
  }, [autoPlayAvailable, paused, interacting, reduceMotion, activeStep])

  return (
    <section id="experience" className="relative bg-white/[.015] py-12 md:py-32">
      <SectionDivider />
      <div className="container-site grid gap-12 lg:grid-cols-[.85fr_1.15fr] lg:items-center lg:gap-24">
        <div>
          <SectionTitle
            eyebrow={t.experienceEyebrow}
            title={t.experienceTitle}
            emphasis={t.experienceTitle2}
            intro={t.experienceIntro}
          />

          <Reveal>
            <div className="inline-flex gap-3 rounded-xl border border-white/10 bg-white/[.03] px-4 py-3">
              <GraduationCap className="shrink-0 text-cyan" size={22} />
              <div>
                <div className="text-xs font-bold uppercase tracking-widest text-white">
                  {t.educationTitle}
                </div>
                <div className="mt-1 text-xs leading-5 text-muted">{t.educationDetail}</div>
              </div>
            </div>
          </Reveal>
        </div>

        <div
          ref={carouselRef}
          role="region"
          aria-roledescription={locale === 'es' ? 'carrusel' : 'carousel'}
          aria-label={locale === 'es' ? 'Trayectoria profesional' : 'Career journey'}
          className="min-w-0 lg:hidden"
          onMouseEnter={() => setInteracting(true)}
          onMouseLeave={() => setInteracting(false)}
          onFocusCapture={() => setInteracting(true)}
          onBlurCapture={(event) => {
            if (!event.currentTarget.contains(event.relatedTarget)) setInteracting(false)
          }}
        >
          <ol className="mb-6 flex items-start">
            {jobs.map((job, index) => (
              <li key={job.company} className="relative min-w-0 flex-1 text-center">
                {index < jobs.length - 1 && (
                  <span
                    aria-hidden="true"
                    className={`absolute left-1/2 top-4 h-px w-full ${index < activeStep ? 'bg-cyan/70' : 'bg-white/15'}`}
                  />
                )}
                <button
                  type="button"
                  onClick={() => setActiveStep(index)}
                  aria-label={`${job.company}, ${job.period}`}
                  aria-current={index === activeStep ? 'step' : undefined}
                  className="relative inline-flex min-h-11 w-full flex-col items-center gap-2 text-[10px] font-semibold tracking-wide"
                >
                  <span
                    className={`grid h-8 w-8 place-items-center rounded-full border transition-colors ${index === activeStep ? 'border-cyan bg-[#12313c] text-cyan shadow-[0_0_18px_rgba(0,229,245,0.2)]' : 'border-white/20 bg-[#101725] text-slate-400'}`}
                  >
                    {index + 1}
                  </span>
                  <span className={index === activeStep ? 'text-cyan' : 'text-slate-400'}>
                    {job.company}
                  </span>
                </button>
              </li>
            ))}
          </ol>
          <div
            className="overflow-hidden rounded-2xl border border-white/10 bg-[#101725]/80"
            onTouchStart={(event) => {
              touchStart.current = event.touches[0].clientX
              setInteracting(true)
            }}
            onTouchEnd={(event) => {
              if (touchStart.current !== null) {
                const distance = touchStart.current - event.changedTouches[0].clientX
                if (Math.abs(distance) > 45) move(distance > 0 ? 1 : -1)
              }
              touchStart.current = null
              setInteracting(false)
            }}
            onTouchCancel={() => {
              touchStart.current = null
              setInteracting(false)
            }}
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.article
                key={activeStep}
                initial={reduceMotion ? false : { opacity: 0, x: 28 }}
                animate={{ opacity: 1, x: 0 }}
                exit={reduceMotion ? { opacity: 1 } : { opacity: 0, x: -28 }}
                transition={{ duration: reduceMotion ? 0 : 0.22 }}
                className="min-h-[270px] p-6"
              >
                <p className="mb-3 font-mono text-xs font-semibold text-cyan">
                  {jobs[activeStep].period}
                </p>
                <h3 className="font-display text-xl font-bold text-white">
                  {jobs[activeStep].role[locale]}
                </h3>
                <p className="mb-4 mt-2 text-xs font-bold uppercase tracking-widest text-slate-400">
                  {jobs[activeStep].company}
                </p>
                <p className="text-sm leading-7 text-slate-300">
                  {jobs[activeStep].description[locale]}
                </p>
              </motion.article>
            </AnimatePresence>
          </div>
          <div className="mt-5 flex items-center justify-between gap-3">
            <button
              type="button"
              onClick={() => move(-1)}
              aria-label={locale === 'es' ? 'Paso anterior' : 'Previous step'}
              className="social"
            >
              <ChevronLeft size={20} />
            </button>
            <span className="font-mono text-xs text-slate-400">
              {activeStep + 1} / {jobs.length}
            </span>
            {!reduceMotion && (
              <button
                type="button"
                onClick={() => setPaused((value) => !value)}
                aria-label={
                  locale === 'es'
                    ? paused
                      ? 'Reanudar reproducción'
                      : 'Pausar reproducción'
                    : paused
                      ? 'Resume playback'
                      : 'Pause playback'
                }
                aria-pressed={paused}
                className="social"
              >
                {paused ? <Play size={16} /> : <Pause size={16} />}
              </button>
            )}
            <button
              type="button"
              onClick={() => move(1)}
              aria-label={locale === 'es' ? 'Paso siguiente' : 'Next step'}
              className="social"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        <div className="relative hidden border-l border-white/15 pl-8 sm:pl-12 lg:block">
          {jobs.map((job, index) => (
            <Reveal key={job.company} delay={index * 0.08} className="pb-12 last:pb-0">
              <div className="relative">
                <div className="absolute -left-[40px] top-1 h-4 w-4 rounded-full border-[4px] border-canvas bg-cyan shadow-[0_0_0_1px_rgba(0,229,245,.45),0_0_18px_rgba(0,229,245,.4)] sm:-left-[56px]" />

                <div className="mb-2 font-mono text-xs font-semibold tracking-wider text-cyan">
                  {job.period}
                </div>

                <h3 className="font-display text-xl font-bold text-white sm:text-2xl">
                  {job.role[locale]}
                </h3>

                <div className="mb-3 mt-2 text-xs font-bold uppercase tracking-[.2em] text-slate-400">
                  {job.company}
                </div>

                <p className="max-w-lg text-sm leading-7 text-muted">{job.description[locale]}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal className="flex justify-center lg:col-span-2">
          <a
            href="#contact"
            className="inline-flex min-h-12 w-full items-center justify-center gap-3 rounded-xl border border-cyan/40 bg-cyan/10 px-6 py-3 text-sm font-bold text-cyan shadow-[0_0_20px_rgba(0,229,245,0.08)] transition-colors hover:border-cyan/70 hover:bg-cyan/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan md:w-auto lg:w-[340px] lg:max-w-full"
          >
            {locale === 'es' ? 'Trabajemos juntos' : 'Let’s work together'}
            <ArrowUpRight size={18} aria-hidden="true" />
          </a>
        </Reveal>
      </div>
    </section>
  )
}
