import { useState } from 'react'
import { Blocks, Bot, Braces, ListOrdered, Pause, Play, Webhook, Workflow } from 'lucide-react'
import { skills, type Locale } from '../data/content'

const logos: Record<string, string> = {
  React: 'react',
  HTML: 'html',
  CSS: 'css',
  'Next.js': 'nextjs',
  TypeScript: 'typescript',
  JavaScript: 'javascript',
  'Tailwind CSS': 'tailwind',
  'Node.js': 'nodejs',
  Express: 'express',
  PostgreSQL: 'postgresql',
  MongoDB: 'mongodb',
  Supabase: 'supabase',
  Redis: 'redis',
  Vercel: 'vercel',
  Render: 'render',
  Git: 'git',
  GitHub: 'github',
  Postman: 'postman',
}
const symbols = {
  'REST APIs': Braces,
  BullMQ: ListOrdered,
  Webhooks: Webhook,
  'API Integrations': Blocks,
  'AI Tools': Bot,
  'Workflow Automation': Workflow,
}
const tools = [
  ...new Set(
    skills.flatMap(({ list }) =>
      list.flatMap((tool) => (tool === 'HTML / CSS' ? ['HTML', 'CSS'] : [tool]))
    )
  ),
]

export function SkillsMarquee({ locale }: { locale: Locale }) {
  //const [paused, setPaused] = useState(false)
  return (
    <div className="relative w-full min-w-0 pb-0 md:pb-8 lg:self-center lg:pb-0">
      <div
        role="region"
        aria-label={locale === 'es' ? 'Herramientas que domino' : 'My tools and technologies'}
        tabIndex={0}
        className="overflow-x-auto overflow-x-hidden rounded-2xl py-4 [mask-image:linear-gradient(to_right,transparent,black_6%,black_94%,transparent)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-cyan"
      >
        <div
          className="flex w-max animate-skills-marquee will-change-transform [animation-duration:28s!important]"
          style={{ animationPlayState: 'running' }}
        >
          {[0, 1].map((copy) => (
            <ul
              key={copy}
              aria-hidden={copy === 1 ? true : undefined}
              className="flex shrink-0 items-center gap-4 pr-4"
            >
              {tools.map((tool) => {
                const Icon = symbols[tool as keyof typeof symbols]
                return (
                  <li key={tool} className="flex w-24 shrink-0 flex-col items-center gap-3">
                    <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-white/10 bg-[#101a2b]/80 text-cyan shadow-[0_0_20px_rgba(0,229,245,0.06)]">
                      {logos[tool] ? (
                        <img
                          src={`/assets/logos/${logos[tool]}.svg`}
                          width={34}
                          height={34}
                          loading="lazy"
                          decoding="async"
                          alt=""
                          className="h-[34px] w-[34px] object-contain"
                        />
                      ) : Icon ? (
                        <Icon size={32} aria-hidden="true" />
                      ) : null}
                    </div>
                    <span className="max-w-full text-center text-[10px] font-medium leading-4 text-slate-300">
                      {tool}
                    </span>
                  </li>
                )
              })}
            </ul>
          ))}
        </div>
      </div>
      {/** 
      <div className="absolute bottom-0 right-0 flex justify-end lg:-bottom-8">
        <button
          type="button"
          onClick={() => setPaused((value) => !value)}
          aria-pressed={paused}
          className="inline-flex min-h-11 items-center gap-2 rounded-lg px-3 text-xs text-slate-400 transition-colors hover:text-cyan focus-visible:outline focus-visible:outline-2 focus-visible:outline-cyan"
        >
          {paused ? <Play size={13} aria-hidden="true" /> : <Pause size={13} aria-hidden="true" />}
          {locale === 'es' ? (paused ? 'Reanudar' : 'Pausar') : paused ? 'Resume' : 'Pause'}
        </button>
      </div>
      */}
    </div>
  )
}
