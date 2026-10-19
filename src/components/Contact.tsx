import { SectionDivider } from './SectionDivider'
import { useState, type FormEvent } from 'react'
import { ArrowUpRight, Github, Linkedin, Mail, Send } from 'lucide-react'
import { copy, personal, type Locale } from '../data/content'
import { Reveal } from './Reveal'
import { Accent } from './SectionTitle'

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

type ContactProps = {
  locale: Locale
}

export function Contact({ locale }: ContactProps) {
  const t = copy[locale]
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [hasError, setHasError] = useState(false)

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const isValid = name.trim() !== '' && message.trim() !== '' && EMAIL_PATTERN.test(email)

    if (!isValid) {
      setHasError(true)
      return
    }

    setHasError(false)

    const subject = encodeURIComponent(`Portfolio inquiry — ${name}`)
    const body = encodeURIComponent(`${message}\n\nFrom: ${name}\nEmail: ${email}`)

    window.location.href = `mailto:${personal.email}?subject=${subject}&body=${body}`
  }

  return (
    <section id="contact" className="relative overflow-hidden py-12 md:py-20 md:py-32">
      <SectionDivider />
      <div className="pointer-events-none absolute bottom-[-250px] left-1/2 h-[650px] w-[850px] -translate-x-1/2 rounded-full bg-violet-700/10 blur-[150px]" />

      <div className="container-site relative">
        <div className="grid gap-14 lg:grid-cols-[.9fr_1.1fr] lg:gap-24">
          <Reveal className="lg:col-start-1 lg:row-start-1">
            <div className="eyebrow mb-6">
              <span className="h-px w-7 bg-cyan" />
              {t.contactEyebrow}
            </div>

            <h2 className="section-heading">
              {t.contactTitle}
              <br />
              <Accent>{t.contactTitle2}</Accent>
            </h2>

            <p className="mt-6 max-w-md leading-8 text-muted">{t.contactIntro}</p>

            <a
              href={`mailto:${personal.email}`}
              className="mt-9 inline-flex items-center gap-3 border-b border-cyan/30 pb-2 font-display text-base font-semibold text-white transition-colors hover:text-cyan sm:text-lg"
            >
              <Mail size={19} className="text-cyan" />
              {personal.email}
              <ArrowUpRight size={16} />
            </a>

            <div className="mt-9 flex gap-3">
              {personal.github && (
                <a
                  aria-label="GitHub"
                  href={personal.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social"
                >
                  <Github size={20} />
                </a>
              )}
              <a
                aria-label="LinkedIn"
                href={personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="social"
              >
                <Linkedin size={20} />
              </a>
              <a aria-label="Email" href={`mailto:${personal.email}`} className="social">
                <Mail size={20} />
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.12} className="lg:col-start-2 lg:row-start-1">
            <form onSubmit={handleSubmit} className="glass rounded-[25px] p-6 sm:p-9">
              <div className="grid gap-5 sm:grid-cols-2">
                <label className="field-label">
                  {t.name}
                  <input
                    required
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                    placeholder={t.name}
                    className="field"
                    autoComplete="name"
                  />
                </label>

                <label className="field-label">
                  {t.email}
                  <input
                    required
                    type="email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    placeholder="hello@example.com"
                    className="field"
                    autoComplete="email"
                  />
                </label>
              </div>

              <label className="field-label mt-5 block">
                {locale === 'es' ? 'Mensaje' : 'Message'}
                <textarea
                  required
                  value={message}
                  onChange={(event) => setMessage(event.target.value)}
                  placeholder={t.message}
                  className="field min-h-40 resize-y"
                  rows={5}
                />
              </label>

              {hasError && (
                <p role="alert" className="mt-4 text-sm text-rose-300">
                  {t.validation}
                </p>
              )}

              <button type="submit" className="btn-primary mt-7 w-full justify-center sm:w-auto">
                {t.send}
                <Send size={16} />
              </button>

              <p className="mt-4 text-xs leading-5 text-slate-500">{t.mailNote}</p>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
