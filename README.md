# Andrés Pineda — Portfolio

Modern, responsive bilingual software-engineering portfolio built with React, TypeScript, Tailwind CSS, Framer Motion and Lucide.

## Run locally

Requires Node.js 20.19+ or 22.12+.

```bash
npm install
npm run dev
```

For production:

```bash
npm run build
npm run preview
```

Deploy `dist/` to a static hosting provider (Vercel, Netlify, Cloudflare Pages).

## Code formatting

The project uses Prettier with the Tailwind CSS plugin, so utility classes are sorted automatically.

```bash
npm run format
npm run format:check
```

## Customization

- `src/data/content.ts`: editable bilingual copy, projects, skills, experience, professional links. **Set `personal.github` and each project's `github`/`demo` when the actual URLs are known**. The source CVs mention links but don't supply verifiable URLs, so the UI intentionally renders those links as inactive until configured.
- `public/assets/andres-portrait.png`: hero portrait.
- `public/assets/*.pdf`: Spanish and English downloadable résumé.
- `src/components/Previews.tsx`: original CSS previews (illustrative UI, not screenshots of deployed projects).
- `src/styles.css` and `tailwind.config.js`: visual system.

## Contact form

No backend required: submitting opens the visitor's configured mail application using `mailto:`. For production-grade guaranteed delivery, integrate a verified transactional email service or a form backend instead; don't expose private API keys in frontend code.

## SEO / accessibility

- Static descriptive metadata, Open Graph tags and Person structured data in `index.html`.
- Document language and meta description update when toggling ES/EN.
- Keyboard accessible navigation, labeled fields, responsive layouts, reduced-motion support.
- Configure an **absolute OG image URL**, canonical URL, robots.txt, sitemap.xml and optionally server-side/SSG localized routes after the real domain is established. For strongest search indexing by language, use localized static routes or prerendering instead of only client-side translation.

## Source of profile information

Professional data derived from the supplied Spanish and English CVs. Hero image supplied by the user. No fabricated project metrics or project URLs; sample metrics displayed in illustrated project previews are decorative placeholders, not reported business results.
