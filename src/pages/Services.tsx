import { ArrowUpRight, Check } from 'lucide-react'
import { Link } from 'react-router-dom'
import { CTABanner } from '../components/sections/CTABanner'
import { Button } from '../components/ui/Button'
import { PageHero } from '../components/ui/PageHero'
import { SectionHeading } from '../components/ui/SectionHeading'
import { services } from '../data/services'
import { SEO } from '../lib/seo'

export default function Services() {
  return (
    <>
      <SEO
        title="Construction, design and renovation services"
        description="Commercial construction, design and build, and renovation services from BuildTech Construction in Accra."
        path="/services"
      />
      <PageHero
        eyebrow="What we do"
        title="Construction with the detail under control."
        body="From shell to finishing, we coordinate the decisions and the work so your project can keep moving with confidence."
        crumb="Services"
      />
      <section className="bg-white py-20 md:py-28">
        <div className="container-shell grid gap-14 lg:grid-cols-[220px_1fr]">
          <aside className="lg:sticky lg:top-28 lg:h-fit">
            <p className="eyebrow mb-5">Services</p>
            <nav className="grid gap-2">
              {services.map((service, index) => (
                <a
                  key={service.slug}
                  href={`#${service.slug}`}
                  className="flex items-center gap-3 border-l-2 border-line py-2 pl-4 text-xs font-bold uppercase tracking-[0.1em] text-muted transition hover:border-brand hover:text-brand"
                >
                  <span className="text-brand/70">0{index + 1}</span>
                  {service.shortTitle}
                </a>
              ))}
            </nav>
          </aside>
          <div className="grid gap-20">
            {services.map((service, index) => {
              const Icon = service.icon
              return (
                <article
                  id={service.slug}
                  key={service.slug}
                  className="scroll-mt-28 grid gap-8 border-b border-line pb-20 last:border-0 md:grid-cols-2 md:items-center md:gap-12"
                >
                  <div className={index % 2 === 1 ? 'md:order-2' : ''}>
                    <div className="relative overflow-hidden rounded-brand">
                      <img
                        src={service.image}
                        alt={`${service.title} service`}
                        loading="lazy"
                        className="aspect-[4/3] w-full object-cover"
                      />
                      <div className="absolute left-4 top-4 grid h-12 w-12 place-items-center rounded-brand bg-white text-brand shadow-lg">
                        <Icon size={23} />
                      </div>
                    </div>
                  </div>
                  <div className={index % 2 === 1 ? 'md:order-1' : ''}>
                    <p className="eyebrow">{service.eyebrow}</p>
                    <h2 className="mt-4 font-display text-3xl font-extrabold uppercase leading-[0.96] tracking-[-0.04em] md:text-5xl">
                      {service.title}
                    </h2>
                    <p className="mt-5 body-copy">{service.detail}</p>
                    <div className="mt-7 grid gap-3">
                      {service.included.map((item) => (
                        <div key={item} className="flex items-start gap-3 text-sm">
                          <Check size={17} className="mt-0.5 shrink-0 text-brand" />
                          {item}
                        </div>
                      ))}
                    </div>
                    <Link
                      to={`/contact?service=${service.slug}`}
                      className="mt-8 inline-flex items-center gap-2 font-display text-xs font-bold uppercase tracking-[0.12em] text-brand hover:text-brand-deep"
                    >
                      Request this service <ArrowUpRight size={16} />
                    </Link>
                  </div>
                </article>
              )
            })}
            <div className="rounded-brand bg-surface p-7 md:p-10">
              <SectionHeading
                eyebrow="Need a mixed scope?"
                title="Let's shape the right package."
                subtitle="Projects rarely fit one neat label. Tell us what you are trying to build, refresh or complete and we will help you find the clearest route."
              />
              <Button href="/contact" className="mt-7" icon>
                Talk through your brief
              </Button>
            </div>
          </div>
        </div>
      </section>
      <CTABanner />
    </>
  )
}
