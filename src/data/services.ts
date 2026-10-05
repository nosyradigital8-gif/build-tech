import { Building2, Compass, Hammer, Leaf, Paintbrush, Ruler } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

export type Service = {
  slug: string
  title: string
  shortTitle: string
  eyebrow: string
  description: string
  detail: string
  icon: LucideIcon
  image: string
  included: string[]
}

export const services: Service[] = [
  {
    slug: 'commercial-construction',
    title: 'Commercial Construction',
    shortTitle: 'Commercial',
    eyebrow: '01 / BUILD',
    description:
      'Offices, shops, plazas, warehouses and institutional buildings made for everyday performance.',
    detail:
      'We take commercial projects from clear scope to clean handover. Our crew keeps the programme visible, the site controlled and the finishing standard high.',
    icon: Building2,
    image:
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1400&q=85',
    included: [
      'Site setup and project scheduling',
      'Structural and blockwork coordination',
      'MEP coordination and finishing',
      'Snagging, clean-up and handover',
    ],
  },
  {
    slug: 'design-and-build',
    title: 'Design & Build',
    shortTitle: 'Design & Build',
    eyebrow: '02 / PLAN',
    description:
      'One accountable team from drawing and BOQ to approvals support, construction and handover.',
    detail:
      'Keep the brief, design and site in one conversation. We coordinate architectural intent, structural planning, BOQ and build delivery around the way you need to use the space.',
    icon: Compass,
    image:
      'https://images.unsplash.com/photo-1503387762-592a09cf159d?auto=format&fit=crop&w=1400&q=85',
    included: [
      'Brief and feasibility conversations',
      'Architectural and structural coordination',
      'BOQ and transparent quotation',
      'Approvals support and site delivery',
    ],
  },
  {
    slug: 'renovation',
    title: 'Renovation',
    shortTitle: 'Renovation',
    eyebrow: '03 / REFRESH',
    description:
      'Remodelling and finishing upgrades that make existing spaces feel considered, useful and new again.',
    detail:
      'From a focused finish upgrade to a complete remodel, we plan the sequence carefully so disruption stays manageable and each detail lands properly.',
    icon: Hammer,
    image:
      'https://images.unsplash.com/photo-1564540583246-934409427776?auto=format&fit=crop&w=1400&q=85',
    included: [
      'Tiling, painting and ceilings',
      'Plumbing and roofing upgrades',
      'Joinery and interior finishing',
      'Final detailing and touch-ups',
    ],
  },
  {
    slug: 'additional-services',
    title: 'Additional Services',
    shortTitle: 'More',
    eyebrow: '04 / COMPLETE',
    description:
      'Interior finishing, fencing, landscaping and project management to complete the brief around the build.',
    detail:
      'Bring the wider scope to one trusted partner. We can coordinate the final layers that make a project feel finished, secure and ready to use.',
    icon: Leaf,
    image:
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1400&q=85',
    included: [
      'Interior finishing packages',
      'Perimeter fence and gates',
      'Landscaping and external works',
      'Project management and coordination',
    ],
  },
]

export const serviceIconSet = [Ruler, Paintbrush, Hammer]
