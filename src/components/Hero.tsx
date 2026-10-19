import type { CSSProperties } from 'react'
import { m as motion, useReducedMotion } from 'framer-motion'
import { ArrowRight, ArrowUpRight, Code2, Sparkles, Terminal, Workflow } from 'lucide-react'
import { copy, type Locale } from '../data/content'
import type { SectionId } from '../data/sections'

const heroTechnologies = [
  { name: 'react', x: 50, y: 7, size: 1.08, opacity: 1, glow: '#61dafb' },
  { name: 'nodejs', x: 82, y: 24, size: 0.94, opacity: 0.9, glow: '#5fa04e' },
  { name: 'python', x: 90, y: 56, size: 0.86, opacity: 0.76, glow: '#818cf8' },
  { name: 'nextjs', x: 80, y: 86, size: 0.8, opacity: 0.65, glow: '#a78bfa' },
  { name: 'tailwind', x: 50, y: 94, size: 1, opacity: 0.95, glow: '#06b6d4' },
  { name: 'postgresql', x: 17, y: 82, size: 1.06, opacity: 1, glow: '#6095d9' },
  { name: 'mongodb', x: 10, y: 55, size: 0.78, opacity: 0.65, glow: '#47a248' },
  { name: 'git', x: 18, y: 23, size: 0.88, opacity: 0.85, glow: '#f05032' },
]

type HeroProps = {
  locale: Locale
  onNavigate: (sectionId: SectionId) => void
}

function AvailabilityDot() {
  return (
    <span className="relative inline-flex h-2.5 w-2.5">
      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400/65" />
      <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400" />
    </span>
  )
}

export function Hero({ locale, onNavigate }: HeroProps) {
  const reduceMotion = useReducedMotion()
  const t = copy[locale]
  const highlightedTerms =
    locale === 'es'
      ? ['experiencias digitales', 'sistemas escalables', 'automatización inteligente']
      : ['digital experiences', 'scalable systems', 'intelligent automation']
  const bodyParts = t.heroBody.split(new RegExp(`(${highlightedTerms.join('|')})`, 'g'))

  return (
    <section
      id="home"
      className="hero-pattern relative flex min-h-dvh items-center overflow-hidden pb-8 pt-20 md:max-h-screen md:pb-0 md:pt-14 lg:pt-0"
    >
      <div className="pointer-events-none absolute -right-24 top-0 h-[600px] w-[650px] rounded-full bg-violet-600/15 blur-[130px]" />
      <div className="pointer-events-none absolute right-[23%] top-[20%] h-[360px] w-[390px] rounded-full bg-cyan/10 blur-[110px]" />

      <div className="container-site relative grid w-full items-center gap-0 lg:grid-cols-[1.12fr_.88fr]">
        <div className="relative z-20 order-1 md:pt-10 lg:col-start-1 lg:row-start-1 lg:self-end lg:pt-28">
          <motion.div
            initial={reduceMotion ? false : { y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-4 inline-flex items-center gap-2.5 rounded-full border border-emerald-300/20 bg-emerald-500/[.07] px-4 py-2 text-[11px] font-semibold text-emerald-300 md:mb-8"
          >
            <AvailabilityDot />
            {t.available}
            <Sparkles size={13} />
          </motion.div>

          <motion.div
            initial={reduceMotion ? false : { y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.12, duration: 0.65 }}
          >
            <div className="eyebrow mb-3 md:mb-6">
              <span className="h-px w-8 bg-cyan" />
              {t.eyebrow}
            </div>

            <h1 className="mb-7 text-balance text-center font-display text-[clamp(1.75rem,7.5vw,2.25rem)] font-bold leading-[1.04] tracking-[-.065em] text-white md:mb-0 md:text-left md:text-[clamp(3.3rem,7vw,6.1rem)]">
              <span className="block text-balance">{t.heroStart}</span>
              <span className="gradient-text block text-balance">{t.heroEnd}</span>
            </h1>
          </motion.div>
        </div>

        <div className="relative z-20 order-3 pb-5 lg:col-start-1 lg:row-start-2 lg:self-start lg:pb-28">
          <motion.p
            initial={reduceMotion ? false : { y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.12, duration: 0.65 }}
            className="mx-auto mt-7 max-w-xl text-center text-base leading-[1.9] text-slate-400 sm:text-lg md:mx-0 md:mt-7 md:text-left"
          >
            {bodyParts.map((part, index) =>
              highlightedTerms.includes(part) ? (
                <strong key={index} className="font-semibold text-white">
                  {part}
                </strong>
              ) : (
                part
              )
            )}
          </motion.p>

          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.28, duration: 0.65 }}
            className="mt-5 flex w-full flex-col items-center justify-center gap-3 sm:flex-row sm:flex-wrap md:mt-9 md:justify-start"
          >
            <button
              onClick={() => onNavigate('projects')}
              className="btn-primary min-h-12 w-full justify-center sm:w-auto"
            >
              {t.projectsCTA}
              <ArrowUpRight size={18} />
            </button>
            <button
              onClick={() => onNavigate('contact')}
              className="btn-secondary min-h-12 w-full justify-center sm:w-auto"
            >
              {t.contactCTA}
              <ArrowRight size={17} />
            </button>
          </motion.div>

          <motion.div
            initial={reduceMotion ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.55, duration: 0.8 }}
            className="mt-8 flex hidden flex-wrap items-center gap-x-7 gap-y-3 border-t border-white/10 pr-20 pt-6 md:mt-12 md:flex md:pr-0"
          >
            <span className="mini-stat">
              <Code2 size={17} />
              {t.heroMetric1}
            </span>
            <span className="mini-stat">
              <Workflow size={17} />
              {t.heroMetric2}
            </span>
            <span className="mini-stat">
              <Terminal size={17} />
              {t.heroMetric3}
            </span>
          </motion.div>
        </div>

        <motion.div
          initial={reduceMotion ? false : { scale: 0.94, x: 40 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.18 }}
          className="relative order-2 mx-auto mt-2 h-[300px] w-full max-w-[580px] self-end md:mt-8 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:mt-0 lg:h-[570px] lg:max-w-none lg:self-center xl:h-[700px]"
        >
          <div className="hero-tech-scene">
            <svg
              className="hero-tech-scene-network"
              aria-hidden="true"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
            >
              <defs>
                <linearGradient id="hero-wave-color" x1="0" y1="1" x2="1" y2="0">
                  <stop stopColor="#a855f7" />
                  <stop offset="0.48" stopColor="#22d3ee" />
                  <stop offset="1" stopColor="#818cf8" />
                </linearGradient>
                <radialGradient id="hero-scene-halo">
                  <stop stopColor="#164e63" stopOpacity="0.42" />
                  <stop offset="1" stopColor="#312e81" stopOpacity="0" />
                </radialGradient>
              </defs>
              <ellipse cx="50" cy="48" rx="49" ry="46" fill="url(#hero-scene-halo)" />
              <g fill="none" stroke="url(#hero-wave-color)">
                {Array.from({ length: 45 }, (_, index) => (
                  <path
                    key={index}
                    d={`M-5 ${66 + index * 0.3} C20 ${94 - index * 0.8}, 25 ${26 + index * 0.36}, 48 ${44 + index * 0.5} S78 ${75 - index * 0.75}, 105 ${30 + index * 0.27}`}
                    strokeWidth={index === 22 ? 0.65 : 0.12}
                    opacity={index === 22 ? 0.95 : 0.5}
                  />
                ))}
              </g>
              <g fill="none" stroke="url(#hero-wave-color)" strokeWidth="0.12" opacity="0.4">
                {Array.from({ length: 28 }, (_, index) => (
                  <path
                    key={index}
                    d={`M-5 ${42 + index * 0.8} C22 ${75 - index * 0.7}, 47 ${4 + index * 1.2}, 105 ${22 + index * 0.65}`}
                  />
                ))}
              </g>
              <g stroke="url(#hero-wave-color)" strokeWidth="0.38">
                <path d="M64 9 l3 -6 M61 24 l4 -8 M85 42 l5 -4 M24 56 l-6 -2" />
              </g>
              <g fill="none" stroke="currentColor" strokeWidth="0.16" opacity="0.35">
                <path d="M18 23 L50 7 L82 24 L90 56 L80 86 L50 94 L17 82 L10 55 Z M18 23 L90 56 M10 55 L82 24 M17 82 L80 86" />
              </g>
              <g fill="currentColor">
                {[
                  [7, 31],
                  [11, 60],
                  [21, 84],
                  [48, 93],
                  [92, 66],
                  [91, 38],
                  [51, 13],
                ].map(([x, y]) => (
                  <circle key={`${x}-${y}`} cx={x} cy={y} r="0.55" />
                ))}
              </g>
            </svg>
            <img
              src="/assets/hero-800.webp"
              srcSet="/assets/hero-480.webp 480w, /assets/hero-800.webp 800w, /assets/hero-1254.webp 1254w"
              sizes="(max-width: 639px) 78vw, (max-width: 1023px) 450px, 500px"
              width={1254}
              height={1254}
              decoding="async"
              alt="Andrés Pineda, software engineer working with a laptop"
              fetchPriority="high"
              className="hero-portrait"
            />
            {heroTechnologies.map(({ name, x, y, size, opacity, glow }) => (
              <div
                key={name}
                className="hero-technology"
                aria-hidden="true"
                style={
                  {
                    left: `${x}%`,
                    top: `${y}%`,
                    '--technology-opacity': opacity * 0.65,
                    '--technology-scale': size,
                    '--technology-glow': glow,
                  } as CSSProperties
                }
              >
                <span className="pointer-events-none absolute inset-0 rounded-full border border-[var(--technology-glow)] opacity-30 motion-safe:animate-ping motion-safe:will-change-transform motion-safe:[animation-duration:3s] motion-reduce:hidden" />
                <img
                  src={`/assets/logos/${name}.svg`}
                  alt=""
                  decoding="async"
                  width={28}
                  height={28}
                />
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/** 
      <div className="container-site absolute inset-x-0 bottom-5 hidden items-center gap-3 text-[10px] font-bold tracking-[.18em] text-slate-500 lg:flex">
        {t.scroll}
        <ArrowDown size={13} className="text-cyan" />
      </div>
      */}
    </section>
  )
}
