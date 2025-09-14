import { useCallback, useEffect, useMemo, useState } from 'react'

export const useActiveSection = (ids: string[]) => {
  const [active, setActive] = useState<string>(ids[0])
  const deps = useMemo(() => ids.join(','), [ids])

  const debounce = useCallback((func: Function, wait: number) => {
    let timeout: NodeJS.Timeout
    return (...args: any[]) => {
      clearTimeout(timeout)
      timeout = setTimeout(() => func.apply(null, args), wait)
    }
  }, [])

  const determineActiveSection = useCallback(
    (intersecting: Set<string>) => {
      if (intersecting.size === 0) return

      if (intersecting.size === 1) {
        const singleSection = Array.from(intersecting)[0]
        setActive(singleSection)
        return
      }

      const scrollPosition = window.scrollY + window.innerHeight / 2
      let closestSection = ids[0]
      let closestDistance = Infinity

      intersecting.forEach(id => {
        const element = document.getElementById(id)
        if (element) {
          const elementTop = element.offsetTop
          const distance = Math.abs(scrollPosition - elementTop)
          if (distance < closestDistance) {
            closestDistance = distance
            closestSection = id
          }
        }
      })

      setActive(closestSection)
    },
    [ids]
  )

  const debouncedDetermineActive = useMemo(
    () => debounce(determineActiveSection, 50),
    [determineActiveSection, debounce]
  )

  useEffect(() => {
    const observers: IntersectionObserver[] = []
    const currentIntersecting = new Set<string>()

    ids.forEach(id => {
      const el = document.getElementById(id)
      if (!el) return

      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            currentIntersecting.add(id)
          } else {
            currentIntersecting.delete(id)
          }

          // Update state dan tentukan section aktif
          debouncedDetermineActive(new Set(currentIntersecting))
        },
        {
          rootMargin: '-20% 0px -20% 0px',
          threshold: [0, 0.1, 0.25, 0.5, 0.75, 1]
        }
      )

      obs.observe(el)
      observers.push(obs)
    })

    return () => {
      observers.forEach(o => o.disconnect())
    }
  }, [deps, debouncedDetermineActive])

  return active
}
