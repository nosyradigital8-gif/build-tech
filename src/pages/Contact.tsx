import { zodResolver } from '@hookform/resolvers/zod'
import {
  CheckCircle2,
  Clock3,
  Facebook,
  Instagram,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
} from 'lucide-react'
import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useSearchParams } from 'react-router-dom'
import { z } from 'zod'
import { Button } from '../components/ui/Button'
import { PageHero } from '../components/ui/PageHero'
import { services } from '../data/services'
import { site } from '../data/site'
import { SEO } from '../lib/seo'
import { submitQuote } from '../lib/submitQuote'

const quoteSchema = z.object({
  fullName: z.string().min(2, 'Please enter your full name.'),
  phone: z.string().min(7, 'Please enter a valid phone number.'),
  email: z.string().email('Please enter a valid email.'),
  service: z.string().min(1, 'Please choose a service.'),
  location: z.string().min(2, 'Please add the project location.'),
  budget: z.string().min(1, 'Please choose a budget range.'),
  details: z.string().min(20, 'Please tell us a little more about the project.'),
  honeypot: z.string().optional(),
})
type QuoteForm = z.infer<typeof quoteSchema>

const fieldClass =
  'mt-2 w-full rounded-brand border border-line bg-white px-4 py-3 text-sm text-charcoal placeholder:text-muted/70'

export default function Contact() {
  const [params] = useSearchParams()
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<QuoteForm>({ resolver: zodResolver(quoteSchema), defaultValues: { service: '' } })
  useEffect(() => {
    const service = params.get('service')
    if (service) setValue('service', service)
  }, [params, setValue])
  async function onSubmit(data: QuoteForm) {
    try {
      setError('')
      await submitQuote(data)
      setSubmitted(true)
    } catch (err) {
      setError(
        err instanceof Error ? err.message : 'Something went wrong. Please try WhatsApp instead.',
      )
    }
  }
  return (
    <>
      <SEO
        title="Request a construction quote"
        description="Talk to BuildTech Construction about your commercial construction, design and build, or renovation project in Accra."
        path="/contact"
      />
      <PageHero
        eyebrow="Start a conversation"
        title="Tell us what you are building."
        body="Share the essentials. We will come back with the right next question, not a one-size-fits-all answer."
        crumb="Contact"
      />
      <section className="bg-white py-20 md:py-28">
        <div className="container-shell grid gap-14 lg:grid-cols-[1.1fr_.9fr]">
          <div>
            <p className="eyebrow">Quote request</p>
            <h2 className="mt-4 font-display text-3xl font-extrabold uppercase tracking-[-0.04em] md:text-5xl">
              Give us the brief.
            </h2>
            {submitted ? (
              <div className="mt-10 rounded-brand border border-brand/30 bg-brand/5 p-8">
                <CheckCircle2 className="text-brand" size={30} />
                <h3 className="mt-5 font-display text-2xl font-extrabold uppercase">
                  Request received.
                </h3>
                <p className="mt-3 text-sm leading-7 text-muted">
                  Thanks for reaching out. Your WhatsApp window should be ready with the details. If
                  not, call us directly on {site.phone}.
                </p>
                <Button href="/" variant="dark" className="mt-7">
                  Back to home
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="mt-8 grid gap-5" noValidate>
                <div className="grid gap-5 sm:grid-cols-2">
                  <label className="text-xs font-bold uppercase tracking-[0.1em]">
                    Full name
                    <input
                      {...register('fullName')}
                      className={fieldClass}
                      placeholder="Your name"
                    />
                    {errors.fullName && (
                      <span className="mt-1 block text-xs text-red-600">
                        {errors.fullName.message}
                      </span>
                    )}
                  </label>
                  <label className="text-xs font-bold uppercase tracking-[0.1em]">
                    Phone
                    <input {...register('phone')} className={fieldClass} placeholder="+233 ..." />
                    {errors.phone && (
                      <span className="mt-1 block text-xs text-red-600">
                        {errors.phone.message}
                      </span>
                    )}
                  </label>
                </div>
                <div className="grid gap-5 sm:grid-cols-2">
                  <label className="text-xs font-bold uppercase tracking-[0.1em]">
                    Email
                    <input
                      {...register('email')}
                      className={fieldClass}
                      type="email"
                      placeholder="you@example.com"
                    />
                    {errors.email && (
                      <span className="mt-1 block text-xs text-red-600">
                        {errors.email.message}
                      </span>
                    )}
                  </label>
                  <label className="text-xs font-bold uppercase tracking-[0.1em]">
                    Service
                    <select {...register('service')} className={fieldClass}>
                      <option value="">Choose a service</option>
                      {services.map((service) => (
                        <option key={service.slug} value={service.title}>
                          {service.title}
                        </option>
                      ))}
                    </select>
                    {errors.service && (
                      <span className="mt-1 block text-xs text-red-600">
                        {errors.service.message}
                      </span>
                    )}
                  </label>
                </div>
                <div className="grid gap-5 sm:grid-cols-2">
                  <label className="text-xs font-bold uppercase tracking-[0.1em]">
                    Project location
                    <input
                      {...register('location')}
                      className={fieldClass}
                      placeholder="Accra / area"
                    />
                    {errors.location && (
                      <span className="mt-1 block text-xs text-red-600">
                        {errors.location.message}
                      </span>
                    )}
                  </label>
                  <label className="text-xs font-bold uppercase tracking-[0.1em]">
                    Budget range
                    <select {...register('budget')} className={fieldClass}>
                      <option value="">Choose a range</option>
                      <option>Under GH₵100,000</option>
                      <option>GH₵100,000 – GH₵500,000</option>
                      <option>GH₵500,000 – GH₵1,000,000</option>
                      <option>Over GH₵1,000,000</option>
                      <option>Not sure yet</option>
                    </select>
                    {errors.budget && (
                      <span className="mt-1 block text-xs text-red-600">
                        {errors.budget.message}
                      </span>
                    )}
                  </label>
                </div>
                <label className="text-xs font-bold uppercase tracking-[0.1em]">
                  Project details
                  <textarea
                    {...register('details')}
                    rows={6}
                    className={fieldClass}
                    placeholder="What are you hoping to build, renovate or finish?"
                  />
                  {errors.details && (
                    <span className="mt-1 block text-xs text-red-600">
                      {errors.details.message}
                    </span>
                  )}
                </label>
                <label className="absolute -left-[9999px]" aria-hidden="true">
                  Company
                  <input {...register('honeypot')} tabIndex={-1} autoComplete="off" />
                </label>
                {error && (
                  <p className="rounded-brand bg-red-50 p-4 text-sm text-red-700">{error}</p>
                )}
                <Button type="submit" size="lg" icon>
                  {isSubmitting ? 'Sending...' : 'Send my brief'}
                </Button>
                <p className="text-xs leading-5 text-muted">
                  No endpoint is configured yet, so this form will open a prefilled WhatsApp
                  message. Add `VITE_QUOTE_ENDPOINT` later when you are ready to connect a backend.
                </p>
              </form>
            )}
          </div>
          <aside className="lg:pt-8">
            <div className="rounded-brand bg-charcoal p-7 text-white md:p-9">
              <p className="eyebrow">Contact details</p>
              <h2 className="mt-5 font-display text-2xl font-extrabold uppercase">
                Let's talk through the next step.
              </h2>
              <div className="mt-8 grid gap-5 text-sm text-white/70">
                <a href={site.phoneHref} className="flex items-start gap-3 hover:text-white">
                  <Phone size={18} className="mt-0.5 text-brand" />
                  {site.phone}
                </a>
                <a
                  href={site.whatsappHref}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-start gap-3 hover:text-white"
                >
                  <MessageCircle size={18} className="mt-0.5 text-brand" />
                  Chat on WhatsApp
                </a>
                <a
                  href={`mailto:${site.email}`}
                  className="flex items-start gap-3 hover:text-white"
                >
                  <Mail size={18} className="mt-0.5 text-brand" />
                  {site.email}
                </a>
                <span className="flex items-start gap-3">
                  <MapPin size={18} className="mt-0.5 shrink-0 text-brand" />
                  {site.address}
                </span>
                <span className="flex items-start gap-3">
                  <Clock3 size={18} className="mt-0.5 shrink-0 text-brand" />
                  {site.hours}
                </span>
              </div>
              <div className="mt-8 flex gap-2">
                <a
                  href={site.socials.facebook}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Facebook"
                  className="grid h-9 w-9 place-items-center rounded-full border border-white/15 hover:border-brand"
                >
                  <Facebook size={15} />
                </a>
                <a
                  href={site.socials.instagram}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Instagram"
                  className="grid h-9 w-9 place-items-center rounded-full border border-white/15 hover:border-brand"
                >
                  <Instagram size={15} />
                </a>
              </div>
            </div>
            <div className="mt-5 overflow-hidden rounded-brand border border-line">
              <iframe
                title="BuildTech Construction in Oyarifa, Accra"
                src="https://www.google.com/maps?q=Oyarifa%2C%20Accra%2C%20Ghana&output=embed"
                className="h-72 w-full border-0"
                loading="lazy"
              />
            </div>
          </aside>
        </div>
      </section>
    </>
  )
}
