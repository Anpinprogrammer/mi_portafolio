import { ArrowUp, Github, Linkedin, Mail } from 'lucide-react'
import { SectionDivider } from './SectionDivider'
import { copy, personal, type Locale } from '../data/content'

type FooterProps = {
  locale: Locale
}

export function Footer({ locale }: FooterProps) {
  const t = copy[locale]
  const links = [
    { href: '#home', label: locale === 'es' ? 'Inicio' : 'Home' },
    { href: '#projects', label: locale === 'es' ? 'Proyectos' : 'Projects' },
    { href: '#about', label: locale === 'es' ? 'Sobre mí' : 'About me' },
    { href: '#contact', label: locale === 'es' ? 'Contacto' : 'Contact' },
  ]
  const socials = [
    { label: 'GitHub', href: personal.github, Icon: Github },
    { label: 'LinkedIn', href: personal.linkedin, Icon: Linkedin },
    { label: 'Email', href: `mailto:${personal.email}`, Icon: Mail },
  ]
  const focusStyle =
    'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan'

  return (
    <footer className="relative bg-[#090d16] pb-[calc(7rem+env(safe-area-inset-bottom,0px))] pt-12 md:py-12">
      <SectionDivider />
      <div className="container-site md:pr-24">
        <div className="grid justify-items-center gap-6 text-center md:grid-cols-[.8fr_1.4fr_.8fr] md:items-center md:justify-items-start md:text-left">
          <div>
            <a
              href="#home"
              aria-label={locale === 'es' ? 'Volver al inicio' : 'Go to home'}
              className={`inline-block rounded font-display text-3xl font-bold tracking-tight text-white ${focusStyle}`}
            >
              AP<span className="text-cyan">.</span>
            </a>
            <p className="mt-2 text-sm text-slate-400">Software Engineer</p>
          </div>

          <nav
            aria-label={locale === 'es' ? 'Navegación del pie de página' : 'Footer navigation'}
            className="flex flex-wrap justify-center gap-x-6 gap-y-3 md:justify-start"
          >
            {links.map(({ href, label }) => (
              <a
                key={href}
                href={href}
                className={`inline-flex min-h-11 items-center rounded text-sm text-slate-300 transition-colors hover:text-[#00F0FF] ${focusStyle}`}
              >
                {label}
              </a>
            ))}
          </nav>

          <div className="flex gap-3 md:justify-self-end">
            {socials.map(({ label, href, Icon }) =>
              href ? (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  target={href.startsWith('mailto:') ? undefined : '_blank'}
                  rel={href.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
                  className={`grid h-11 w-11 place-items-center rounded-xl border border-white/10 bg-white/[.03] text-slate-300 transition-colors hover:border-[#00F0FF]/40 hover:bg-[#00F0FF]/10 hover:text-[#00F0FF] ${focusStyle}`}
                >
                  <Icon size={20} />
                </a>
              ) : (
                <span
                  key={label}
                  role="img"
                  aria-label={`${label} (${locale === 'es' ? 'próximamente' : 'coming soon'})`}
                  title={locale === 'es' ? 'GitHub: enlace pendiente' : 'GitHub: link coming soon'}
                  className="grid h-11 w-11 place-items-center rounded-xl border border-white/5 text-slate-600"
                >
                  <Icon size={20} />
                </span>
              )
            )}
          </div>
        </div>

        <div className="mt-6 flex flex-col items-center gap-6 border-t border-slate-800/80 pt-6 text-center text-xs leading-relaxed text-slate-400 md:flex-row md:justify-between md:gap-4 md:text-left">
          <p>
            © {new Date().getFullYear()} Andrés Pineda. {t.rights}
          </p>
          <div className="flex flex-col items-center gap-4 md:flex-row md:gap-6">
            <p>
              {locale === 'es'
                ? 'Diseñado y desarrollado con intención'
                : 'Designed & developed with intention'}{' '}
              <span className="text-cyan">✦</span>
            </p>
            <a
              href="#home"
              className={`inline-flex min-h-11 items-center gap-2 rounded transition-colors hover:text-[#00F0FF] ${focusStyle}`}
            >
              {locale === 'es' ? 'Volver arriba' : 'Back to top'} <ArrowUp size={15} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
