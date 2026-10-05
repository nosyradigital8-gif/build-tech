import { motion } from 'framer-motion'
import { ArrowDownRight, Check, MapPin } from 'lucide-react'
import { Link } from 'react-router-dom'
import { site } from '../../data/site'
import { Button } from '../ui/Button'

export function Hero() {
  return (
    <section className="relative isolate flex min-h-[calc(100vh-86px)] items-end overflow-hidden bg-charcoal text-white">
      <img
        src={site.images.hero}
        alt="BuildTech construction site"
        className="absolute inset-0 -z-20 h-full w-full object-cover"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-charcoal via-charcoal/85 to-charcoal/25" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-charcoal/75 via-transparent to-charcoal/20" />
      <div className="container-shell relative w-full pb-24 pt-24 md:pb-32">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6 flex items-center gap-3"
          >
            <span className="h-px w-10 bg-brand" />
            <p className="eyebrow">Accra's trusted builders</p>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.08, duration: 0.55 }}
            className="max-w-4xl font-display text-5xl font-extrabold uppercase leading-[0.92] tracking-[-0.06em] md:text-8xl"
          >
            We build with precision.
            <br />
            <span className="text-brand">We finish with pride.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.16, duration: 0.55 }}
            className="mt-7 max-w-2xl text-base leading-7 text-white/72 md:text-lg"
          >
            From commercial structures to complete renovations, BuildTech Construction delivers
            solid builds and flawless finishing, on time and on budget.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.24, duration: 0.55 }}
            className="mt-8 flex flex-col gap-3 sm:flex-row"
          >
            <Button href="/contact" size="lg" icon>
              Get a free quote
            </Button>
            <Button href="/projects" variant="outline" size="lg" icon>
              View our projects
            </Button>
          </motion.div>
        </div>
        <div className="mt-14 flex flex-col gap-6 border-t border-white/15 pt-6 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-2 text-xs uppercase tracking-[0.16em] text-white/55">
            <MapPin size={15} className="text-brand" /> Oyarifa, Accra, Ghana
          </div>
          <div className="grid gap-5 text-xs uppercase tracking-[0.12em] text-white/60 sm:grid-cols-3 sm:gap-8">
            <span className="flex items-center gap-2">
              <Check size={15} className="text-brand" /> 10+ projects delivered
            </span>
            <span className="flex items-center gap-2">
              <Check size={15} className="text-brand" /> design & build experts
            </span>
            <span className="flex items-center gap-2">
              <Check size={15} className="text-brand" /> quality finishing
            </span>
          </div>
          <Link
            to="/about"
            className="hidden items-center gap-2 text-xs font-bold uppercase tracking-[0.12em] text-white hover:text-brand lg:flex"
          >
            Scroll to explore <ArrowDownRight size={16} />
          </Link>
        </div>
      </div>
      <div className="absolute right-8 top-1/3 hidden opacity-80 lg:block">
        <div className="skyline-bars">
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
        </div>
      </div>
    </section>
  )
}
