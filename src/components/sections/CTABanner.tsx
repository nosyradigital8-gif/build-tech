import { ArrowUpRight, MessageCircle } from 'lucide-react'
import { site } from '../../data/site'
import { Button } from '../ui/Button'

export function CTABanner() {
  return (
    <section className="relative overflow-hidden bg-brand py-12 text-white md:py-16">
      <div className="absolute -right-3 top-1/2 hidden -translate-y-1/2 opacity-20 md:block">
        <div className="skyline-bars">
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
        </div>
      </div>
      <div className="container-shell relative flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="eyebrow text-white">Make the next move</p>
          <h2 className="mt-4 max-w-2xl font-display text-3xl font-extrabold uppercase leading-[0.98] tracking-[-0.05em] md:text-5xl">
            Have a project in mind?
            <br />
            Let's build it right.
          </h2>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row">
          <Button href="/contact" variant="dark" size="lg" icon>
            Request a quote
          </Button>
          <a
            href={site.whatsappHref}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-brand border border-white/70 px-6 py-4 font-display text-sm font-bold uppercase tracking-[0.12em] text-white transition hover:-translate-y-0.5 hover:bg-white/10"
          >
            <MessageCircle size={17} /> Chat on WhatsApp <ArrowUpRight size={16} />
          </a>
        </div>
      </div>
    </section>
  )
}
