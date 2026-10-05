import { ArrowUpRight, MapPin } from 'lucide-react'
import { Link } from 'react-router-dom'
import type { Project } from '../../data/projects'

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      to={`/projects/${project.slug}`}
      className="group relative block overflow-hidden rounded-brand bg-charcoal"
    >
      <img
        src={project.image}
        alt={`${project.title} project`}
        loading="lazy"
        className="aspect-[4/3] w-full object-cover transition duration-700 group-hover:scale-105 group-hover:opacity-60"
      />
      <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-charcoal via-charcoal/30 to-transparent p-5">
        <div className="translate-y-3 transition duration-300 group-hover:translate-y-0">
          <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.2em] text-brand">
            {project.category}
          </p>
          <h3 className="font-display text-xl font-extrabold uppercase leading-tight text-white">
            {project.title}
          </h3>
          <div className="mt-3 flex items-center justify-between text-xs text-white/65">
            <span className="flex items-center gap-1">
              <MapPin size={13} /> {project.location}
            </span>
            <ArrowUpRight
              size={17}
              className="text-brand opacity-0 transition group-hover:opacity-100"
            />
          </div>
        </div>
      </div>
    </Link>
  )
}
