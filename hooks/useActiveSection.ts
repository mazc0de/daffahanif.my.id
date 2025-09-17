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
      // Jika tidak ada section yang intersecting, cek posisi scroll
      if (intersecting.size === 0) {
        // Jika di bagian paling atas, set ke section pertama (home)
        if (window.scrollY < 100) {
          setActive(ids[0])
          return
        }

        // Jika tidak ada yang intersecting dan tidak di atas, biarkan active yang sekarang
        return
      }

      if (intersecting.size === 1) {
        const singleSection = Array.from(intersecting)[0]
        setActive(singleSection)
        return
      }

      // Jika multiple sections intersecting, pilih yang paling dekat ke tengah viewport
      const scrollPosition = window.scrollY + window.innerHeight / 2
      let closestSection = ids[0]
      let closestDistance = Infinity

      intersecting.forEach(id => {
        const element = document.getElementById(id)
        if (element) {
          const elementTop = element.offsetTop
          const elementHeight = element.offsetHeight
          const elementCenter = elementTop + elementHeight / 2
          const distance = Math.abs(scrollPosition - elementCenter)

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

  // Handle scroll untuk deteksi awal saat di top
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY < 100) {
        setActive(ids[0])
      }
    }

    // Set initial active section
    handleScroll()

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [ids])

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
          // Ubah rootMargin untuk lebih baik mendeteksi section di atas
          rootMargin: '-10% 0px -60% 0px',
          threshold: [0, 0.1, 0.25, 0.5]
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
