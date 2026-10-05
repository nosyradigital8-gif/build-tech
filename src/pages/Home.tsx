import { ArrowUpRight, CheckCircle2 } from 'lucide-react'
import { Link } from 'react-router-dom'
import { CTABanner } from '../components/sections/CTABanner'
import { Hero } from '../components/sections/Hero'
import { ProcessSection } from '../components/sections/Process'
import { Testimonials } from '../components/sections/Testimonials'
import { Button } from '../components/ui/Button'
import { ProjectCard } from '../components/ui/ProjectCard'
import { SectionHeading } from '../components/ui/SectionHeading'
import { ServiceCard } from '../components/ui/ServiceCard'
import { StatCounter } from '../components/ui/StatCounter'
import { projects } from '../data/projects'
import { localBusinessSchema } from '../data/schema'
import { services } from '../data/services'
import { site } from '../data/site'
import { SEO } from '../lib/seo'

const points = [
  'Quality finishing',
  'Transparent pricing',
  'On-time delivery',
  'Skilled, supervised crew',
  'Clear communication from start to handover',
]

export default function Home() {
  return (
    <>
      <SEO
        title="Construction company in Accra"
        description={site.description}
        schema={localBusinessSchema}
      />
      <Hero />
      <section className="bg-white py-20 md:py-28">
        <div className="container-shell">
          <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
            <SectionHeading
              eyebrow="What we do"
              title="The right team for the full build."
              subtitle="From first sketch to final clean-up, we keep the work practical, visible and built around the way you need to use the space."
            />
            <Button href="/services" variant="ghost" icon>
              View all services
            </Button>
          </div>
          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {services.slice(0, 3).map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>
        </div>
      </section>
      <section className="bg-surface py-20 md:py-28">
        <div className="container-shell grid gap-12 md:grid-cols-[1fr_1fr] md:items-center">
          <div className="relative">
            <img
              src={site.images.why}
              alt="BuildTech crew working on a construction project"
              loading="lazy"
              className="aspect-[4/5] w-full rounded-brand object-cover"
            />
            <div className="absolute -bottom-5 -right-5 hidden h-32 w-32 place-items-center rounded-brand bg-brand p-5 text-white shadow-crisp sm:grid">
              <div className="skyline-bars scale-75">
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
              </div>
            </div>
          </div>
          <div>
            <SectionHeading
              eyebrow="Why BuildTech"
              title="Good builds need good control."
              subtitle="The best construction experience is not loud. It is clear, responsive and dependable from the first conversation to the handover."
            />
            <div className="mt-8 grid gap-4">
              {points.map((point) => (
                <div
                  key={point}
                  className="flex items-center gap-3 border-b border-line pb-4 text-sm font-semibold"
                >
                  <CheckCircle2 size={19} className="shrink-0 text-brand" />
                  {point}
                </div>
              ))}
            </div>
            <Link
              to="/about"
              className="mt-8 inline-flex items-center gap-2 font-display text-xs font-bold uppercase tracking-[0.12em] text-brand"
            >
              Meet the team behind the work <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>
      </section>
      <section className="bg-white py-20 md:py-28">
        <div className="container-shell">
          <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
            <SectionHeading
              eyebrow="Selected work"
              title="Built for the brief. Finished for the eye."
              subtitle="Placeholder case studies for now. Swap in BuildTech's owned project photography and project facts when they are ready."
            />
            <Button href="/projects" variant="ghost" icon>
              See all projects
            </Button>
          </div>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {projects
              .filter((project) => project.featured)
              .map((project) => (
                <ProjectCard key={project.slug} project={project} />
              ))}
          </div>
        </div>
      </section>
      <ProcessSection compact />
      <section className="bg-charcoal py-16 md:py-20">
        <div className="container-shell grid gap-8 sm:grid-cols-2 md:grid-cols-4">
          {site.stats.map((stat) => (
            <StatCounter key={stat.label} {...stat} light />
          ))}
        </div>
      </section>
      <Testimonials />
      <CTABanner />
    </>
  )
}
