import { Check, ShieldCheck, Sparkles, Target, Users, Workflow } from 'lucide-react'
import { Button } from '../components/ui/Button'
import { CTABanner } from '../components/sections/CTABanner'
import { SectionHeading } from '../components/ui/SectionHeading'
import { PageHero } from '../components/ui/PageHero'
import { site } from '../data/site'
import { SEO } from '../lib/seo'

const values = [
  {
    icon: Sparkles,
    title: 'Quality',
    body: 'We care about the last 10% because that is what people live with.',
  },
  {
    icon: ShieldCheck,
    title: 'Integrity',
    body: 'Clear scope, honest updates and no cleverness where clarity will do.',
  },
  {
    icon: Target,
    title: 'Timeliness',
    body: 'A visible programme keeps decisions moving and people accountable.',
  },
  {
    icon: Users,
    title: 'Client-first',
    body: 'We build around your priorities, not a one-size-fits-all process.',
  },
  {
    icon: Workflow,
    title: 'Safety',
    body: 'A controlled site is a better site for the crew, client and neighbours.',
  },
]

export default function About() {
  return (
    <>
      <SEO
        title="About our building team"
        description="Meet BuildTech Construction, a practical Accra building contractor focused on quality finishing and honest project delivery."
        path="/about"
      />
      <PageHero
        eyebrow="About BuildTech"
        title="Solid work. Good people. Clear handover."
        body="We are a construction team based in Oyarifa, Accra, building commercial, residential and institutional spaces with a sharper eye for the finish."
        crumb="About"
      />
      <section className="bg-white py-20 md:py-28">
        <div className="container-shell grid gap-12 md:grid-cols-[1.05fr_.95fr] md:items-center">
          <div>
            <SectionHeading eyebrow="Our story" title="Built on honest dealings." />
            <p className="mt-7 body-copy">
              BuildTech Construction was founded to deliver construction with good finishing and
              honest dealings in Accra. We believe the work gets better when the brief is understood
              early, the site is supervised properly and the client knows what is happening next.
            </p>
            <p className="mt-5 body-copy">
              We bring a practical mindset to every project — whether we are building a new
              commercial space, coordinating design and build, or giving an existing property a more
              useful second life.
            </p>
            <Button href="/contact" className="mt-8" icon>
              Start a conversation
            </Button>
          </div>
          <div className="surface-grid rounded-brand p-8 md:p-12">
            <p className="eyebrow">What we are here to do</p>
            <div className="mt-8 grid gap-8">
              <div>
                <p className="font-display text-sm font-bold uppercase tracking-[0.1em] text-brand">
                  Mission
                </p>
                <p className="mt-2 text-2xl font-semibold leading-tight">
                  Deliver spaces that work hard, look considered and last well.
                </p>
              </div>
              <div className="border-t border-line pt-8">
                <p className="font-display text-sm font-bold uppercase tracking-[0.1em] text-brand">
                  Vision
                </p>
                <p className="mt-2 text-2xl font-semibold leading-tight">
                  Be the Accra construction partner people recommend after handover.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-surface py-20 md:py-28">
        <div className="container-shell">
          <SectionHeading
            eyebrow="Core values"
            title="The way we choose to work."
            subtitle="These are not wall words. They are the standard we return to when the site gets busy."
          />
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {values.map(({ icon: Icon, title, body }) => (
              <div key={title} className="rounded-brand border border-line bg-white p-6">
                <div className="grid h-11 w-11 place-items-center rounded-brand bg-surface text-brand">
                  <Icon size={21} />
                </div>
                <h3 className="mt-6 font-display text-lg font-extrabold uppercase">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-muted">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-white py-20 md:py-28">
        <div className="container-shell grid gap-12 md:grid-cols-[.8fr_1.2fr] md:items-end">
          <SectionHeading
            eyebrow="The people"
            title="A team that stays close to the work."
            subtitle="Placeholder profiles ready for the real BuildTech team. Keep the names, roles and portraits in the data layer when you replace them."
          />
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="overflow-hidden rounded-brand border border-line">
              <img
                src={site.images.team}
                alt="Team member placeholder"
                className="aspect-[4/3] w-full object-cover grayscale"
              />
              <div className="p-5">
                <p className="font-display font-extrabold uppercase">Team member placeholder</p>
                <p className="mt-1 text-sm text-brand">Project lead</p>
              </div>
            </div>
            <div className="flex flex-col justify-between rounded-brand bg-charcoal p-6 text-white">
              <div>
                <p className="eyebrow">How we show up</p>
                <p className="mt-6 text-2xl font-semibold leading-tight">
                  Close enough to see the detail. Clear enough to keep the whole project moving.
                </p>
              </div>
              <div className="mt-8 flex items-center gap-2 text-sm text-white/65">
                <Check size={17} className="text-brand" /> One team from brief to handover
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-surface py-14">
        <div className="container-shell flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="eyebrow">Accreditations</p>
            <p className="mt-2 text-sm text-muted">
              Placeholder badges to replace with confirmed registrations, memberships or trade
              credentials.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <span className="rounded-full border border-line bg-white px-5 py-3 font-display text-xs font-bold uppercase tracking-[0.12em]">
              Accreditation placeholder
            </span>
            <span className="rounded-full border border-line bg-white px-5 py-3 font-display text-xs font-bold uppercase tracking-[0.12em]">
              Safety badge placeholder
            </span>
            <span className="rounded-full border border-line bg-white px-5 py-3 font-display text-xs font-bold uppercase tracking-[0.12em]">
              Trade badge placeholder
            </span>
          </div>
        </div>
      </section>
      <CTABanner />
    </>
  )
}
