import type { ProjectCategory } from './site'

export type Project = {
  slug: string
  title: string
  location: string
  category: Exclude<ProjectCategory, 'All'>
  scope: string
  duration: string
  description: string
  image: string
  gallery: string[]
  featured?: boolean
}

const image = (id: string, width = 1400) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${width}&q=85`

export const projects: Project[] = [
  {
    slug: 'church-sanitation-block-oyarifa',
    title: 'Church Sanitation Block, Oyarifa',
    location: 'Oyarifa, Accra',
    category: 'Institutional',
    scope: 'Design coordination, blockwork, plumbing, tiling and finishing',
    duration: '8 weeks',
    description:
      'A practical sanitation upgrade designed around daily use, easy maintenance and a clean, durable finish for a growing church community.',
    image: image('photo-1497366754035-f200968a6e72'),
    gallery: [
      image('photo-1497366754035-f200968a6e72'),
      image('photo-1581578731548-c64695cc6952'),
      image('photo-1564540583246-934409427776'),
    ],
    featured: true,
  },
  {
    slug: 'commercial-plaza-accra',
    title: 'Commercial Plaza, Accra',
    location: 'Accra, Ghana',
    category: 'Commercial',
    scope: 'Shell, external works, finishes and handover coordination',
    duration: '9 months',
    description:
      'A street-facing commercial development with an efficient construction sequence and finishing that gives tenants a strong first impression.',
    image: image('photo-1486406146926-c627a92ad1ab'),
    gallery: [
      image('photo-1486406146926-c627a92ad1ab'),
      image('photo-1541888946425-d81bb19240f5'),
      image('photo-1504307651254-35680f356dfd'),
    ],
    featured: true,
  },
  {
    slug: 'residential-renovation-east-legon',
    title: 'Residential Renovation, East Legon',
    location: 'East Legon, Accra',
    category: 'Renovation',
    scope: 'Remodelling, tiling, painting, ceilings and plumbing upgrades',
    duration: '14 weeks',
    description:
      'A considered refresh of a lived-in home, sequenced room by room to lift comfort, flow and everyday finish quality.',
    image: image('photo-1600607687920-4e2a09cf159d'),
    gallery: [
      image('photo-1600607687920-4e2a09cf159d'),
      image('photo-1600566753086-00f18fb6b3ea'),
      image('photo-1600607687939-ce8a6c25118c'),
    ],
    featured: true,
  },
  {
    slug: 'office-fit-out-airport-city',
    title: 'Office Fit-out, Airport City',
    location: 'Airport City, Accra',
    category: 'Commercial',
    scope: 'Partitions, ceilings, lighting coordination and interior finishing',
    duration: '12 weeks',
    description:
      'A sharp office fit-out planned around business continuity, clean lines and a handover-ready workplace.',
    image: image('photo-1497366811353-6870744d04b2'),
    gallery: [
      image('photo-1497366811353-6870744d04b2'),
      image('photo-1497366216548-37526070297c'),
      image('photo-1497366754035-f200968a6e72'),
    ],
    featured: true,
  },
  {
    slug: 'warehouse-build-tema',
    title: 'Warehouse Build, Tema',
    location: 'Tema, Ghana',
    category: 'Commercial',
    scope: 'Groundworks, structure, roofing and site logistics',
    duration: '7 months',
    description:
      'A functional warehouse build with durable materials, clear site control and practical access planning.',
    image: image('photo-1556761175-b413da4baf72'),
    gallery: [
      image('photo-1556761175-b413da4baf72'),
      image('photo-1504307651254-35680f356dfd'),
      image('photo-1541888946425-d81bb19240f5'),
    ],
    featured: true,
  },
  {
    slug: 'perimeter-fence-landscaping-madina',
    title: 'Perimeter Fence and Landscaping, Madina',
    location: 'Madina, Accra',
    category: 'Residential',
    scope: 'Boundary walls, gates, paving and soft landscaping',
    duration: '6 weeks',
    description:
      'An external works package that improves security, arrival and the relationship between a home and its street.',
    image: image('photo-1558904541-efa843a96f01'),
    gallery: [
      image('photo-1558904541-efa843a96f01'),
      image('photo-1598902108854-10e335adac99'),
      image('photo-1581578731548-c64695cc6952'),
    ],
    featured: true,
  },
]
