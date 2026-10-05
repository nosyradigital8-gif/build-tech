import { MessageCircle, Menu, Phone, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { site } from '../../data/site'
import { Button } from '../ui/Button'

export function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()
  useEffect(() => {
    setOpen(false)
  }, [location.pathname])
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 18)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  return (
    <>
      <header
        className={`sticky top-0 z-40 border-b border-black/5 bg-white/95 backdrop-blur transition ${scrolled ? 'py-2 shadow-crisp' : 'py-4'}`}
      >
        <div className="container-shell flex items-center justify-between gap-6">
          <Link to="/" aria-label="BuildTech Construction home" className="shrink-0">
            <img
              src="/brand/full-lockup.png"
              alt="BuildTech Construction"
              className="h-12 w-auto object-contain md:h-14"
            />
          </Link>
          <nav className="hidden items-center gap-5 lg:flex">
            {site.nav.map((item) => (
              <NavLink
                key={item.href}
                to={item.href}
                className={({ isActive }) =>
                  `font-display text-[10px] font-bold uppercase tracking-[0.12em] transition ${isActive ? 'text-brand' : 'text-charcoal/70 hover:text-charcoal'}`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
          <div className="hidden items-center gap-2 md:flex">
            <a
              href={site.phoneHref}
              aria-label="Call BuildTech"
              className="grid h-10 w-10 place-items-center rounded-brand border border-line text-charcoal transition hover:border-brand hover:text-brand"
            >
              <Phone size={16} />
            </a>
            <Button href="/contact" size="sm" icon>
              Get a free quote
            </Button>
          </div>
          <button
            type="button"
            aria-label="Open navigation"
            aria-expanded={open}
            onClick={() => setOpen(true)}
            className="grid h-11 w-11 place-items-center rounded-brand bg-charcoal text-white lg:hidden"
          >
            <Menu size={21} />
          </button>
        </div>
      </header>
      <div
        className={`fixed inset-0 z-50 bg-charcoal transition ${open ? 'visible opacity-100' : 'invisible opacity-0'}`}
        aria-hidden={!open}
      >
        <div className="flex h-full flex-col p-6 text-white">
          <div className="flex items-center justify-between">
            <Link to="/" onClick={() => setOpen(false)}>
              <img
                src="/brand/full-lockup-white.png"
                alt="BuildTech Construction"
                className="h-14 w-auto"
              />
            </Link>
            <button
              type="button"
              aria-label="Close navigation"
              onClick={() => setOpen(false)}
              className="grid h-11 w-11 place-items-center rounded-brand border border-white/20"
            >
              <X />
            </button>
          </div>
          <nav className="mt-16 flex flex-col gap-5">
            {site.nav.map((item, index) => (
              <NavLink
                key={item.href}
                to={item.href}
                onClick={() => setOpen(false)}
                className="font-display text-2xl font-extrabold uppercase tracking-[-0.03em] text-white/80 hover:text-white"
              >
                {String(index + 1).padStart(2, '0')} <span className="ml-2 text-brand">/</span>{' '}
                {item.label}
              </NavLink>
            ))}
          </nav>
          <div className="mt-auto grid gap-3 sm:grid-cols-2">
            <a
              href={site.phoneHref}
              className="flex items-center justify-center gap-2 rounded-brand bg-white px-5 py-4 font-display text-xs font-bold uppercase tracking-[0.12em] text-charcoal"
            >
              <Phone size={16} /> Call BuildTech
            </a>
            <a
              href={site.whatsappHref}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center gap-2 rounded-brand bg-brand px-5 py-4 font-display text-xs font-bold uppercase tracking-[0.12em] text-white"
            >
              <MessageCircle size={16} /> WhatsApp us
            </a>
          </div>
        </div>
      </div>
    </>
  )
}
