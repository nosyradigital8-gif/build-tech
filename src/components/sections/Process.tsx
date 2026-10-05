import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { processSteps } from '../../data/faqs'
import { SectionHeading } from '../ui/SectionHeading'

export function ProcessSection({ compact = false }: { compact?: boolean }) {
  const steps = compact ? processSteps.slice(0, 5) : processSteps
  return (
    <section className="bg-surface py-20 md:py-28">
      <div className="container-shell">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <SectionHeading
            eyebrow="Our process"
            title="Clear steps. Better builds."
            subtitle="Good work gets easier when the route is visible. We keep the brief, decisions and handover in view."
          />
          {compact && (
            <Link
              to="/process"
              className="inline-flex items-center gap-2 pb-1 font-display text-xs font-bold uppercase tracking-[0.12em] text-brand hover:text-brand-deep"
            >
              See the full process <ArrowUpRight size={16} />
            </Link>
          )}
        </div>
        <div className="mt-14 grid gap-0 md:grid-cols-5">
          {steps.map((step) => (
            <div
              key={step.number}
              className="relative border-l border-line py-5 pl-6 md:border-l-0 md:border-t md:pl-0 md:pt-6 md:pr-5"
            >
              <span className="absolute -left-[5px] top-6 h-2 w-2 rounded-full bg-brand md:-top-[5px] md:left-0" />
              <p className="eyebrow">{step.number}</p>
              <h3 className="mt-3 font-display text-lg font-extrabold uppercase tracking-[-0.03em]">
                {step.title}
              </h3>
              <p className="mt-3 text-sm leading-6 text-muted">{step.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
