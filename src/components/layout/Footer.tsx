import { Facebook, Instagram, Mail, MapPin, Phone } from 'lucide-react'
import { Link } from 'react-router-dom'
import { site } from '../../data/site'
import { services } from '../../data/services'

export function Footer() {
  return (
    <footer className="bg-charcoal text-white">
      <div className="container-shell grid gap-12 py-16 md:grid-cols-[1.4fr_1fr_1fr_1.2fr] md:py-20">
        <div>
          <img
            src="/brand/full-lockup-white.png"
            alt="BuildTech Construction"
            className="h-16 w-auto"
          />
          <p className="mt-6 max-w-xs text-sm leading-7 text-white/55">
            Commercial construction, design & build, and renovation with a sharper eye for the
            finish.
          </p>
          <div className="mt-6 flex gap-2">
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
        <div>
          <p className="eyebrow mb-5">Explore</p>
          <div className="grid gap-3">
            {site.nav.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className="text-sm text-white/60 transition hover:text-white"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <p className="eyebrow mb-5">Services</p>
          <div className="grid gap-3">
            {services.map((service) => (
              <Link
                key={service.slug}
                to={`/services#${service.slug}`}
                className="text-sm text-white/60 transition hover:text-white"
              >
                {service.shortTitle}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <p className="eyebrow mb-5">Start a conversation</p>
          <div className="grid gap-4 text-sm text-white/65">
            <a href={site.phoneHref} className="flex items-start gap-3 hover:text-white">
              <Phone size={17} className="mt-0.5 text-brand" />
              {site.phone}
            </a>
            <a href={`mailto:${site.email}`} className="flex items-start gap-3 hover:text-white">
              <Mail size={17} className="mt-0.5 text-brand" />
              {site.email}
            </a>
            <span className="flex items-start gap-3">
              <MapPin size={17} className="mt-0.5 shrink-0 text-brand" />
              {site.address}
              <br />
              {site.hours}
            </span>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container-shell flex flex-col gap-2 py-5 text-[10px] uppercase tracking-[0.14em] text-white/40 md:flex-row md:items-center md:justify-between">
          <span>{site.footerLine}</span>
          <span>Built for the next phase.</span>
        </div>
      </div>
    </footer>
  )
}
