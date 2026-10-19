import { personal, type Locale } from '../data/content'

type WhatsAppButtonProps = { locale: Locale }

export function WhatsAppButton({ locale }: WhatsAppButtonProps) {
  const label = locale === 'es' ? 'Contactar por WhatsApp' : 'Contact me on WhatsApp'

  return (
    <a
      href={`https://wa.me/${personal.whatsapp}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      title={label}
      className="whatsapp-button fixed z-50 grid h-14 w-14 place-items-center rounded-full bg-[#25D366] text-white shadow-[0_6px_24px_rgba(37,211,102,0.3)] transition-colors hover:bg-[#1ebe5d] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
    >
      <span
        aria-hidden="true"
        className="absolute inset-0 -z-10 rounded-full bg-[#25D366]/30 motion-safe:animate-ping"
      />
      <svg aria-hidden="true" viewBox="0 0 32 32" fill="currentColor" className="h-8 w-8">
        <path d="M16 .8A15.1 15.1 0 0 0 3 23.6L.9 31l7.6-2A15.2 15.2 0 1 0 16 .8Zm0 27.7a12.5 12.5 0 0 1-6.4-1.8l-.5-.3-4.5 1.2 1.2-4.4-.3-.5A12.6 12.6 0 1 1 16 28.5Zm6.9-9.4c-.4-.2-2.2-1.1-2.5-1.2-.3-.1-.6-.2-.8.2-.3.4-1 1.2-1.2 1.4-.2.2-.4.3-.8.1-.4-.2-1.6-.6-3.1-1.9-1.1-1-1.9-2.2-2.1-2.6-.2-.4 0-.6.2-.8l.6-.7.4-.6c.1-.2 0-.5 0-.7l-1.1-2.6c-.3-.7-.6-.6-.8-.6h-.7c-.3 0-.7.1-1 .5-.4.4-1.3 1.3-1.3 3.1s1.4 3.5 1.6 3.7c.2.3 2.7 4.1 6.5 5.7.9.4 1.6.6 2.2.8.9.3 1.7.2 2.4.2.7-.1 2.2-.9 2.5-1.8.3-.9.3-1.6.2-1.8-.1-.2-.3-.3-.7-.5Z" />
      </svg>
    </a>
  )
}
