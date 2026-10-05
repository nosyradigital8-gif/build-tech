import type { ReactNode } from 'react'

type Props = {
  eyebrow: string
  title: string
  subtitle?: string
  light?: boolean
  children?: ReactNode
}

export function SectionHeading({ eyebrow, title, subtitle, light = false, children }: Props) {
  return (
    <div className="max-w-2xl">
      <p className="eyebrow mb-4">{eyebrow}</p>
      <h2 className={light ? 'section-title-light' : 'section-title'}>{title}</h2>
      {subtitle && (
        <p className={`mt-5 max-w-xl text-base leading-7 ${light ? 'text-white/70' : 'body-copy'}`}>
          {subtitle}
        </p>
      )}
      {children}
    </div>
  )
}
