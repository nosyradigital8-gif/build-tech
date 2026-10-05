import { ArrowLeft, ArrowRight, CalendarDays, Check, MapPin } from 'lucide-react'
import { useState } from 'react'
import { Link, Navigate, useParams } from 'react-router-dom'
import { CTABanner } from '../components/sections/CTABanner'
import { Lightbox } from '../components/ui/Lightbox'
import { Button } from '../components/ui/Button'
import { projects } from '../data/projects'
import { SEO } from '../lib/seo'

export default function ProjectDetail() {
  const { slug } = useParams()
  const project = projects.find((item) => item.slug === slug)
  const [activeImage, setActiveImage] = useState<number | null>(null)
  if (!project) return <Navigate to="/404" replace />
  const position = projects.findIndex((item) => item.slug === project.slug)
  const previous = projects[(position - 1 + projects.length) % projects.length]
  const next = projects[(position + 1) % projects.length]
  return (
    <>
      <SEO
        title={project.title}
        description={project.description}
        path={`/projects/${project.slug}`}
      />
      <section className="bg-charcoal pb-16 pt-16 text-white md:pb-24 md:pt-24">
        <div className="container-shell">
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.12em] text-white/60 hover:text-white"
          >
            <ArrowLeft size={15} /> Back to projects
          </Link>
          <div className="mt-12 grid gap-10 md:grid-cols-[1.2fr_.8fr] md:items-end">
            <div>
              <p className="eyebrow">
                {project.category} / {project.location}
              </p>
              <h1 className="mt-5 max-w-4xl font-display text-4xl font-extrabold uppercase leading-[0.94] tracking-[-0.05em] md:text-7xl">
                {project.title}
              </h1>
            </div>
            <div className="md:pb-1">
              <p className="text-lg leading-8 text-white/65">{project.description}</p>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-white py-16 md:py-24">
        <div className="container-shell">
          <div className="grid gap-8 border-b border-line pb-10 sm:grid-cols-3">
            <div className="flex items-start gap-3">
              <MapPin size={18} className="mt-1 text-brand" />
              <div>
                <p className="eyebrow">Location</p>
                <p className="mt-2 text-sm font-semibold">{project.location}</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Check size={18} className="mt-1 text-brand" />
              <div>
                <p className="eyebrow">Scope</p>
                <p className="mt-2 text-sm font-semibold">{project.scope}</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CalendarDays size={18} className="mt-1 text-brand" />
              <div>
                <p className="eyebrow">Duration</p>
                <p className="mt-2 text-sm font-semibold">{project.duration}</p>
              </div>
            </div>
          </div>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {project.gallery.map((image, index) => (
              <button
                type="button"
                key={image}
                onClick={() => setActiveImage(index)}
                className="group overflow-hidden rounded-brand"
              >
                <img
                  src={image}
                  alt={`${project.title} gallery ${index + 1}`}
                  className="aspect-[4/3] w-full object-cover transition duration-500 group-hover:scale-105"
                />
              </button>
            ))}
          </div>
          <div className="mx-auto mt-14 max-w-2xl">
            <p className="eyebrow">The brief</p>
            <p className="mt-5 text-xl leading-8 text-charcoal/80">
              {project.description} This placeholder summary is ready to be replaced with a fuller
              case study covering the challenge, the build sequence, the materials and the finishing
              decisions.
            </p>
            <Button href="/contact" className="mt-8" icon>
              Start a similar project
            </Button>
          </div>
        </div>
      </section>
      <section className="border-t border-line bg-surface">
        <div className="container-shell grid sm:grid-cols-2">
          <Link
            to={`/projects/${previous.slug}`}
            className="group border-b border-line py-8 sm:border-b-0 sm:border-r sm:pr-10"
          >
            <p className="eyebrow">Previous project</p>
            <div className="mt-3 flex items-center justify-between gap-3 font-display text-lg font-extrabold uppercase group-hover:text-brand">
              {previous.title}
              <ArrowLeft size={18} />
            </div>
          </Link>
          <Link to={`/projects/${next.slug}`} className="group py-8 sm:pl-10">
            <p className="eyebrow">Next project</p>
            <div className="mt-3 flex items-center justify-between gap-3 font-display text-lg font-extrabold uppercase group-hover:text-brand">
              {next.title}
              <ArrowRight size={18} />
            </div>
          </Link>
        </div>
      </section>
      <CTABanner />
      <Lightbox
        images={project.gallery}
        index={activeImage}
        onClose={() => setActiveImage(null)}
        onChange={setActiveImage}
      />
    </>
  )
}
