import { useMemo, useState } from 'react'
import { ProjectCard } from '../components/ui/ProjectCard'
import { Lightbox } from '../components/ui/Lightbox'
import { PageHero } from '../components/ui/PageHero'
import { projects } from '../data/projects'
import { categories, type ProjectCategory } from '../data/site'
import { SEO } from '../lib/seo'

export default function Projects() {
  const [category, setCategory] = useState<ProjectCategory>('All')
  const [lightbox, setLightbox] = useState<{ images: string[]; index: number } | null>(null)
  const filtered = useMemo(
    () =>
      category === 'All' ? projects : projects.filter((project) => project.category === category),
    [category],
  )
  return (
    <>
      <SEO
        title="Construction projects in Accra"
        description="Explore BuildTech Construction placeholder projects across commercial construction, renovation, residential and institutional work in Ghana."
        path="/projects"
      />
      <PageHero
        eyebrow="Selected work"
        title="The work says more."
        body="A growing library of BuildTech work, from commercial spaces and practical upgrades to the finishing details that make a place feel ready."
        crumb="Projects"
      />
      <section className="bg-white py-16 md:py-24">
        <div className="container-shell">
          <div className="flex flex-col gap-7 border-b border-line pb-8 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="eyebrow">Filter the library</p>
              <p className="mt-3 text-sm text-muted">
                Six placeholder case studies ready for real photography and project facts.
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map((item) => (
                <button
                  type="button"
                  key={item}
                  onClick={() => setCategory(item)}
                  className={`rounded-full border px-4 py-2 text-[10px] font-bold uppercase tracking-[0.12em] transition ${category === item ? 'border-brand bg-brand text-white' : 'border-line text-muted hover:border-brand hover:text-brand'}`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((project) => (
              <div key={project.slug} onContextMenu={(event) => event.preventDefault()}>
                <ProjectCard project={project} />
                <button
                  type="button"
                  onClick={() => setLightbox({ images: project.gallery, index: 0 })}
                  className="mt-3 text-[10px] font-bold uppercase tracking-[0.14em] text-muted hover:text-brand"
                >
                  Open project gallery
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Lightbox
        images={lightbox?.images ?? []}
        index={lightbox?.index ?? null}
        onClose={() => setLightbox(null)}
        onChange={(index) => setLightbox((current) => (current ? { ...current, index } : current))}
      />
    </>
  )
}
