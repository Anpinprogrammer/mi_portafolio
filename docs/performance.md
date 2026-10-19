# Optimización de rendimiento

Validación local del build de producción con Lighthouse 13.5.0, perfil móvil y throttling simulado. Los resultados varían según dispositivo, red y hosting; no representan métricas de usuarios reales.

| Métrica             | Resultado final |
| ------------------- | --------------- |
| Performance         | 95/100          |
| FCP                 | 1,5 s           |
| LCP                 | 2,8 s           |
| CLS                 | 0               |
| Total Blocking Time | 0 ms            |
| Speed Index         | 1,5 s           |

INP requiere mediciones de interacción en usuarios reales; TBT no es INP. No se ejecutó una medición inicial del sitio original, por lo que estos valores no constituyen una comparación antes/después de todo el trabajo.

## Cambios

- Fotos WebP con transparencia y variantes de 480, 800 y tamaño original. A 800 px: hero 54.358 bytes frente a 1.470.159 bytes del PNG; About 112.996 frente a 2.178.585 bytes. Se conservan los originales para regenerar assets.
- Hero precargado con `imagesrcset` y `imagesizes` idénticos al elemento `img`, con prioridad alta exclusivamente para esa imagen. No se oculta inicialmente mediante opacidad cero. Las dimensiones intrínsecas reservan la proporción.
- About usa carga lazy, decodificación asíncrona, dimensiones explícitas y selección adaptable de imagen.
- Fuentes WOFF2 actuales alojadas localmente, con `font-display: swap`, preload y licencias OFL incluidas en `public/fonts`. Se eliminan las conexiones a Google Fonts: ya no hay recursos externos que requieran `preconnect` o `dns-prefetch` durante la carga inicial.
- Estado de scroll y sección activa aislado en `SiteHeader`: no vuelve a renderizar todas las secciones al navegar o cruzar el umbral del header.
- Framer Motion usa `LazyMotion`, `domAnimation` y componentes `m`, conservando las animaciones existentes con un paquete inicial menor.
- Vistas previas de proyectos en un chunk dinámico de 8,11 KB. `ProjectPreview` solo lo solicita al aproximarse al viewport (400 px de margen), dentro de un espacio de dimensiones reservadas. No se sustituyen secciones completas por placeholders de altura estimada.
- Rebote de terminal con `translate3d`, `will-change` limitado al elemento animado visible en escritorio y respeto por movimiento reducido. Pulsos CSS conservados, sin animar dimensiones de layout.
- Eliminados estilos `.info-tile` y keyframes de flotación que ya no se usaban. Corregida la imagen Open Graph que apuntaba a un archivo inexistente.
- JavaScript inicial: 417,94 KB antes de estos cambios y 364,43 KB después; gzip: 131,26 KB → 116,54 KB. El chunk de previews se descarga por separado cuando corresponde.

## Validación

- `npm run build`: correcto.
- Prettier en los archivos modificados: correcto.
- Chrome a 390 y 1440 px: imágenes cargadas, fuentes locales presentes, sin solicitudes a Google Fonts ni errores de JavaScript; navegación del carrusel móvil comprobada.
- Comprobado que el chunk de previews no se solicita inicialmente y sí después de acercarse a Projects.
- Capturas móvil/escritorio revisadas para Hero y About.

## Reproducir

```sh
npm run build
npm run preview -- --host 127.0.0.1
npx lighthouse http://127.0.0.1:4173 --only-categories=performance --output=html --output-path=/tmp/portfolio-lighthouse.html --chrome-flags='--headless'
```

Para regenerar WebP se necesita Pillow en Python y luego ejecutar `python3 scripts/optimize-images.py`.

Referencias: [prioridad de recursos](https://web.dev/articles/fetch-priority), [React lazy](https://react.dev/reference/react/lazy).
