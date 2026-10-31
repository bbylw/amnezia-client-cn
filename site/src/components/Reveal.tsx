import { useEffect } from 'react'

/**
 * Progressive scroll reveal. Elements opt in with `data-reveal`.
 * The hidden state is only applied after mount, so content stays visible
 * without JavaScript and when reduced motion is requested.
 */
export function useScrollReveal() {
  useEffect(() => {
    const els = Array.from(
      document.querySelectorAll<HTMLElement>('[data-reveal]'),
    )
    if (!els.length) return

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const viewport = window.innerHeight
    els.forEach((el) => {
      const rect = el.getBoundingClientRect()
      if (rect.top < viewport - 40 && rect.bottom > 0) {
        el.classList.add('is-in')
      }
    })

    document.documentElement.classList.add('reveal-ready')

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-in')
            io.unobserve(entry.target)
          }
        })
      },
      { rootMargin: '0px 0px -10% 0px', threshold: 0.08 },
    )

    els.forEach((el) => {
      if (!el.classList.contains('is-in')) io.observe(el)
    })

    return () => {
      io.disconnect()
      document.documentElement.classList.remove('reveal-ready')
    }
  }, [])
}
