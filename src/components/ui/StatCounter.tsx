import { useEffect, useState } from 'react'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

type Props = { value: number; suffix?: string; label: string; light?: boolean }

export function StatCounter({ value, suffix = '', label, light = false }: Props) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-20px' })
  const [count, setCount] = useState(0)
  useEffect(() => {
    if (!inView) return
    const start = window.setTimeout(() => setCount(value), 80)
    return () => window.clearTimeout(start)
  }, [inView, value])
  return (
    <div ref={ref}>
      <p
        className={`font-display text-4xl font-extrabold tracking-[-0.05em] ${light ? 'text-white' : 'text-charcoal'}`}
      >
        {count}
        {suffix}
      </p>
      <p
        className={`mt-2 text-xs uppercase tracking-[0.12em] ${light ? 'text-white/60' : 'text-muted'}`}
      >
        {label}
      </p>
    </div>
  )
}
