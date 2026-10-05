import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import type { Service } from '../../data/services'

export function ServiceCard({ service }: { service: Service }) {
  const Icon = service.icon
  return (
    <Link
      to={`/services#${service.slug}`}
      className="group relative flex min-h-[255px] flex-col justify-between overflow-hidden rounded-brand border border-line bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-brand hover:shadow-crisp"
    >
      <div className="flex items-start justify-between">
        <div className="grid h-12 w-12 place-items-center rounded-brand bg-surface text-brand transition group-hover:bg-brand group-hover:text-white">
          <Icon size={24} />
        </div>
        <span className="font-display text-xs font-bold text-muted">{service.eyebrow}</span>
      </div>
      <div>
        <h3 className="font-display text-xl font-extrabold uppercase tracking-[-0.03em]">
          {service.title}
        </h3>
        <p className="mt-3 text-sm leading-6 text-muted">{service.description}</p>
        <span className="mt-5 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.12em] text-brand">
          Learn more <ArrowUpRight size={15} />
        </span>
      </div>
      <div className="absolute -bottom-1 right-6 flex items-end gap-1 opacity-10 transition group-hover:opacity-20">
        <span className="h-6 w-2 bg-charcoal" />
        <span className="h-10 w-2 bg-charcoal" />
        <span className="h-16 w-2 bg-brand" />
      </div>
    </Link>
  )
}
