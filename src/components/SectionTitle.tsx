import type { ReactNode } from 'react'
import { Reveal } from './Reveal'

type AccentProps = {
  children: ReactNode
}

type SectionTitleProps = {
  eyebrow: string
  title: string
  emphasis: string
  intro?: string
  desktopAlign?: 'left' | 'right'
  spacing?: 'default' | 'none'
}

export function Accent({ children }: AccentProps) {
  return <span className="gradient-text">{children}</span>
}

export function SectionTitle({
  eyebrow,
  title,
  emphasis,
  intro,
  desktopAlign = 'left',
  spacing = 'default',
}: SectionTitleProps) {
  return (
    <Reveal>
      <div
        className={`${spacing === 'none' ? '' : 'mb-11 md:mb-16'} ${desktopAlign === 'right' ? 'lg:text-right' : ''}`}
      >
        <div className={`eyebrow mb-5 ${desktopAlign === 'right' ? 'lg:justify-end' : ''}`}>
          <span className="h-px w-7 bg-cyan" />
          {eyebrow}
        </div>

        <h2 className="section-heading">
          {title}
          <br />
          <Accent>{emphasis}</Accent>
        </h2>

        {intro && (
          <p
            className={`mt-5 max-w-xl text-base leading-relaxed text-muted md:text-lg ${desktopAlign === 'right' ? 'lg:ml-auto' : ''}`}
          >
            {intro}
          </p>
        )}
      </div>
    </Reveal>
  )
}
