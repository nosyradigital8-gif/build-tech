import { MessageCircle, Phone } from 'lucide-react'
import { site } from '../../data/site'

export function FloatingActions() {
  return (
    <>
      <a
        href={site.whatsappHref}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat with BuildTech on WhatsApp"
        className="fixed bottom-5 right-5 z-30 grid h-14 w-14 place-items-center rounded-full bg-brand text-white shadow-lg transition hover:-translate-y-1 hover:bg-brand-deep"
      >
        <MessageCircle size={25} />
      </a>
      <div className="fixed inset-x-0 bottom-0 z-20 grid grid-cols-2 border-t border-line bg-white/95 p-2 backdrop-blur md:hidden">
        <a
          href={site.phoneHref}
          className="flex items-center justify-center gap-2 rounded-brand py-3 font-display text-[10px] font-bold uppercase tracking-[0.12em] text-charcoal"
        >
          <Phone size={15} /> Call
        </a>
        <a
          href={site.whatsappHref}
          target="_blank"
          rel="noreferrer"
          className="flex items-center justify-center gap-2 rounded-brand bg-brand py-3 font-display text-[10px] font-bold uppercase tracking-[0.12em] text-white"
        >
          <MessageCircle size={15} /> WhatsApp
        </a>
      </div>
    </>
  )
}
