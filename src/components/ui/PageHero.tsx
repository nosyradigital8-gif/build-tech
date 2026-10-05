import { ChevronRight } from 'lucide-react'
import { Link } from 'react-router-dom'

type Props = { eyebrow: string; title: string; body: string; crumb?: string }

export function PageHero({ eyebrow, title, body, crumb }: Props) {
  return (
    <section className="relative overflow-hidden bg-charcoal py-20 text-white md:py-28">
      <div className="absolute inset-0 opacity-[0.06] surface-grid" />
      <div className="container-shell relative">
        <div className="flex max-w-3xl flex-col gap-7">
          <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.18em] text-white/50">
            <Link to="/" className="hover:text-white">
              Home
            </Link>
            <ChevronRight size={14} />
            {crumb && (
              <>
                <span>{crumb}</span>
                <ChevronRight size={14} />
              </>
            )}
            <span className="text-brand">BuildTech</span>
          </div>
          <p className="eyebrow">{eyebrow}</p>
          <h1 className="font-display text-4xl font-extrabold uppercase leading-[0.95] tracking-[-0.05em] md:text-7xl">
            {title}
          </h1>
          <p className="max-w-2xl text-lg leading-8 text-white/70">{body}</p>
        </div>
        <div className="absolute bottom-0 right-0 hidden opacity-40 md:block">
          <div className="skyline-bars">
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
          </div>
        </div>
      </div>
    </section>
  )
}
