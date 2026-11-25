'use client'
import { useEffect, useState } from 'react'

// Fixed layer behind the whole page, hidden by the body background. It only shows up in the
// rubber-band gap when overscrolling past the footer. The footer's rings are continued as
// vertical bands starting exactly where each ring crosses the footer's bottom edge, so the
// seam stays clean whatever the overscroll depth (a fixed copy of the circles would not line up).

type Band = { left: number; width: number }

// same fills as the nested circles in Footer.tsx (outer, middle, inner)
const fills = ['bg-neutral/4', 'bg-neutral/4', 'bg-neutral/5']

const OverscrollBackdrop = () => {
  const [bands, setBands] = useState<Band[]>([])

  useEffect(() => {
    const footer = document.querySelector('footer')
    const ring = footer?.querySelector<HTMLElement>('[data-footer-ring]')
    if (!footer || !ring) return

    const update = () => {
      const bottom = footer.getBoundingClientRect().bottom
      const circles = [ring, ring.firstElementChild, ring.firstElementChild?.firstElementChild]
      setBands(
        circles.map((el) => {
          if (!(el instanceof HTMLElement)) return { left: 0, width: 0 }
          const r = el.getBoundingClientRect()
          const radius = r.width / 2
          const dy = bottom - (r.top + radius)
          const half = Math.abs(dy) < radius ? Math.sqrt(radius * radius - dy * dy) : 0
          return { left: r.left + radius - half, width: half * 2 }
        }),
      )
    }

    update()
    const observer = new ResizeObserver(update)
    observer.observe(footer)
    window.addEventListener('resize', update)
    return () => {
      observer.disconnect()
      window.removeEventListener('resize', update)
    }
  }, [])

  return (
    <div
      aria-hidden
      className="bg-secondary pointer-events-none fixed inset-0 -z-10 overflow-hidden print:hidden">
      {bands.map((band, i) => (
        <div
          key={i}
          className={`absolute inset-y-0 ${fills[i]}`}
          style={{ left: band.left, width: band.width }}
        />
      ))}
    </div>
  )
}

export default OverscrollBackdrop
