import { Accordion } from '../components/ui/Accordion'
import { CTABanner } from '../components/sections/CTABanner'
import { PageHero } from '../components/ui/PageHero'
import { SectionHeading } from '../components/ui/SectionHeading'
import { faqs, processSteps } from '../data/faqs'
import { SEO } from '../lib/seo'

export default function ProcessPage() {
  return (
    <>
      <SEO
        title="Our construction process"
        description="See how BuildTech Construction approaches consultation, design, quotation, construction and handover in Accra."
        path="/process"
      />
      <PageHero
        eyebrow="How we work"
        title="A better build starts with a clearer process."
        body="You should know what happens next. Our five-step process keeps decisions visible, communication practical and handover properly finished."
        crumb="Process"
      />
      <section className="bg-white py-20 md:py-28">
        <div className="container-shell">
          <div className="grid gap-4">
            {processSteps.map((step) => (
              <div
                key={step.number}
                className="grid gap-6 rounded-brand border border-line p-6 md:grid-cols-[120px_220px_1fr] md:items-start md:p-8"
              >
                <p className="font-display text-5xl font-extrabold tracking-[-0.06em] text-brand/35">
                  {step.number}
                </p>
                <h2 className="font-display text-xl font-extrabold uppercase leading-tight">
                  {step.title}
                </h2>
                <p className="text-sm leading-7 text-muted">{step.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-surface py-20 md:py-28">
        <div className="container-shell grid gap-12 md:grid-cols-[.8fr_1.2fr] md:items-start">
          <SectionHeading
            eyebrow="Questions, answered"
            title="No mystery around the work."
            subtitle="These answers are a starting point. The project conversation will always be specific to your scope, site and programme."
          />
          <Accordion items={faqs} />
        </div>
      </section>
      <CTABanner />
    </>
  )
}
