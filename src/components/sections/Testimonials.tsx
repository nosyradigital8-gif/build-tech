import { ArrowLeft, ArrowRight, Quote, Star } from 'lucide-react'
import { useEffect, useState } from 'react'
import { testimonials } from '../../data/testimonials'
import { SectionHeading } from '../ui/SectionHeading'

export function Testimonials() {
  const [active, setActive] = useState(0)
  const [paused, setPaused] = useState(false)
  useEffect(() => {
    if (paused) return
    const timer = window.setInterval(
      () => setActive((current) => (current + 1) % testimonials.length),
      5000,
    )
    return () => window.clearInterval(timer)
  }, [paused])
  const item = testimonials[active]
  return (
    <section
      className="bg-charcoal py-20 text-white md:py-28"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      <div className="container-shell grid gap-12 md:grid-cols-[.7fr_1.3fr] md:items-end">
        <SectionHeading
          eyebrow="Client notes"
          title="The finish is what stays with you."
          subtitle="Placeholder testimonials are ready to be replaced with real client words once the first case studies are approved."
          light
        />
        <div className="relative">
          <Quote className="absolute -left-1 -top-9 text-brand/40" size={55} fill="currentColor" />
          <div className="min-h-[190px] pl-7 md:pl-12">
            <div className="flex gap-1 text-brand">
              {Array.from({ length: item.rating }).map((_, index) => (
                <Star key={index} size={16} fill="currentColor" />
              ))}
            </div>
            <blockquote className="mt-6 max-w-2xl font-display text-2xl font-bold leading-tight tracking-[-0.03em] md:text-4xl">
              “{item.quote}”
            </blockquote>
            <p className="mt-6 text-sm text-white/55">
              <strong className="font-semibold text-white">{item.name}</strong>{' '}
              <span className="mx-2 text-brand">/</span> {item.role}
            </p>
          </div>
          <div className="mt-8 flex items-center gap-3 pl-7 md:pl-12">
            <button
              type="button"
              aria-label="Previous testimonial"
              onClick={() => setActive((active - 1 + testimonials.length) % testimonials.length)}
              className="grid h-10 w-10 place-items-center rounded-full border border-white/20 hover:border-brand"
            >
              <ArrowLeft size={16} />
            </button>
            <button
              type="button"
              aria-label="Next testimonial"
              onClick={() => setActive((active + 1) % testimonials.length)}
              className="grid h-10 w-10 place-items-center rounded-full border border-white/20 hover:border-brand"
            >
              <ArrowRight size={16} />
            </button>
            <div className="ml-3 flex gap-1">
              {testimonials.map((testimonial, index) => (
                <button
                  type="button"
                  key={testimonial.role}
                  aria-label={`Show testimonial ${index + 1}`}
                  onClick={() => setActive(index)}
                  className={`h-1 rounded-full transition ${index === active ? 'w-8 bg-brand' : 'w-3 bg-white/25'}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
