import { ChevronDown } from 'lucide-react'
import { useState } from 'react'

type Item = { question: string; answer: string }
export function Accordion({ items }: { items: Item[] }) {
  const [open, setOpen] = useState<number | null>(0)
  return (
    <div className="divide-y divide-line border-y border-line">
      {items.map((item, index) => (
        <div key={item.question}>
          <button
            type="button"
            aria-expanded={open === index}
            onClick={() => setOpen(open === index ? null : index)}
            className="flex w-full items-center justify-between gap-6 py-5 text-left font-display text-sm font-bold uppercase tracking-[0.03em] hover:text-brand"
          >
            <span>{item.question}</span>
            <ChevronDown
              size={18}
              className={`shrink-0 text-brand transition ${open === index ? 'rotate-180' : ''}`}
            />
          </button>
          <div
            className={`grid transition-[grid-template-rows] duration-300 ${open === index ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}
          >
            <div className="overflow-hidden">
              <p className="pb-5 pr-10 text-sm leading-7 text-muted">{item.answer}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
