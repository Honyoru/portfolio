import { useEffect, useState } from 'react'

interface RoleSwitcherOptions {
  roles: string[]
  interval?: number
}

function useRoleSwitcher({ roles, interval = 1800 }: RoleSwitcherOptions): string {
  // keep the index (not the text) so a language switch shows the translated role right away
  const [index, setIndex] = useState(0)
  const count = roles.length

  useEffect(() => {
    if (count === 0) return
    const intervalId = setInterval(() => setIndex((prev) => (prev + 1) % count), interval)
    return () => clearInterval(intervalId)
  }, [count, interval])

  return roles[index % Math.max(count, 1)] ?? ''
}

export default useRoleSwitcher
