import { lazy, Suspense, useEffect, useRef, useState } from 'react'
import type { Project } from '../data/content'

const Preview = lazy(() => import('./Previews'))

export function ProjectPreview({ type }: { type: Project['type'] }) {
  const container = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const element = container.current
    if (!element) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { rootMargin: '400px' }
    )
    observer.observe(element)
    return () => observer.disconnect()
  }, [])

  return (
    <div ref={container} className="absolute inset-0">
      {visible && (
        <Suspense fallback={null}>
          <Preview type={type} />
        </Suspense>
      )}
    </div>
  )
}
