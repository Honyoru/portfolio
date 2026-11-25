'use client'
import { ReactNode, useEffect, useRef, useState } from 'react'
import FalcoBackground from './FalcoBackground'

type MarqueeWrapperProps = {
  children: ReactNode
  className?: string
}

type MarqueeAnimationType = (
  element: HTMLElement,
  elementWidth: number,
  windowWidth: number,
) => void

const marqueeAnimation: MarqueeAnimationType = (element, elementWidth, windowWidth) => {
  element.animate(
    [{ transform: 'translateX(0)' }, { transform: `translateX(${windowWidth - elementWidth}px)` }],
    {
      duration: 20000,
      easing: 'linear',
      direction: 'alternate',
      iterations: Infinity,
    },
  )
}

// Continues the hero glow (bg-lg.svg, blue #4D5BCE at 40%) that is clipped at the bottom of
// the hero, so there is no hard line above the skills band. The glow sits ~515px from the left.
const heroGlowTail =
  'radial-gradient(ellipse 340px 100% at 525px 0, rgba(77,91,206,0.33), rgba(77,91,206,0.23) 34%, rgba(77,91,206,0.12) 50%, rgba(77,91,206,0.05) 68%, rgba(77,91,206,0.01) 80%, transparent)'

const MarqueeWrapper: React.FC<MarqueeWrapperProps> = ({ children, className = '' }) => {
  const elementRef = useRef<HTMLDivElement>(null)
  const [windowWidth, setWindowWidth] = useState(0)

  useEffect(() => {
    setWindowWidth(window.innerWidth)

    if (elementRef.current) {
      const elementWidth = elementRef.current.getBoundingClientRect().width
      marqueeAnimation(elementRef.current as HTMLElement, elementWidth, windowWidth)
    }

    const handleResize = () => setWindowWidth(window.innerWidth)
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [windowWidth])

  return (
    <div className={`relative overflow-x-hidden ${className}`} style={{ backgroundImage: heroGlowTail }}>
      <FalcoBackground />
      <div className="inter relative w-max whitespace-nowrap p-5 lg:p-7" ref={elementRef}>
        {children}
      </div>
    </div>
  )
}

export default MarqueeWrapper
