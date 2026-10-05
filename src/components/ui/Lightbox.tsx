import { ChevronLeft, ChevronRight, X } from 'lucide-react'
import { useEffect } from 'react'

type Props = {
  images: string[]
  index: number | null
  onClose: () => void
  onChange: (index: number) => void
}
export function Lightbox({ images, index, onClose, onChange }: Props) {
  useEffect(() => {
    if (index === null) return
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose()
      if (event.key === 'ArrowRight') onChange((index + 1) % images.length)
      if (event.key === 'ArrowLeft') onChange((index - 1 + images.length) % images.length)
    }
    window.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [index, images.length, onChange, onClose])
  if (index === null) return null
  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Project image viewer"
      className="fixed inset-0 z-[70] grid place-items-center bg-charcoal/95 p-5"
    >
      <button
        type="button"
        aria-label="Close image viewer"
        onClick={onClose}
        className="absolute right-5 top-5 grid h-11 w-11 place-items-center rounded-full border border-white/20 text-white"
      >
        <X />
      </button>
      <button
        type="button"
        aria-label="Previous image"
        onClick={() => onChange((index - 1 + images.length) % images.length)}
        className="absolute left-3 grid h-12 w-12 place-items-center rounded-full bg-white/10 text-white md:left-8"
      >
        <ChevronLeft />
      </button>
      <img
        src={images[index]}
        alt="Project detail"
        className="max-h-[84vh] max-w-[88vw] rounded-brand object-contain"
      />
      <button
        type="button"
        aria-label="Next image"
        onClick={() => onChange((index + 1) % images.length)}
        className="absolute right-3 grid h-12 w-12 place-items-center rounded-full bg-white/10 text-white md:right-8"
      >
        <ChevronRight />
      </button>
    </div>
  )
}
