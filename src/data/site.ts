export const site = {
  name: 'BuildTech Construction',
  shortName: 'BuildTech',
  tagline: 'Quality builds. Flawless finishing.',
  description:
    'Accra construction company delivering commercial builds, design & build projects, and renovation with solid project control and exceptional finishing.',
  location: 'Oyarifa, Accra, Ghana',
  phone: '+233 24 812 9308',
  phoneHref: 'tel:+233248129308',
  whatsappHref:
    'https://wa.me/233248129308?text=Hello%20BuildTech%2C%20I%27d%20like%20to%20request%20a%20quote.',
  whatsappMessage: "Hello BuildTech, I'd like to request a quote.",
  email: 'info@buildtechconstruction.com',
  domain: 'https://buildtechconstruction.com',
  address: 'Oyarifa, Accra, Ghana',
  hours: 'Mon – Sat, 8:00am – 6:00pm',
  socials: {
    facebook: 'https://facebook.com/buildtechconstruction',
    instagram: 'https://instagram.com/buildtechconstruction',
  },
  nav: [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Services', href: '/services' },
    { label: 'Projects', href: '/projects' },
    { label: 'Process', href: '/process' },
    { label: 'Contact', href: '/contact' },
  ],
  images: {
    hero: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=2200&q=85',
    why: 'https://images.unsplash.com/photo-1503387762-592a09cf159d?auto=format&fit=crop&w=1400&q=85',
    detail:
      'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1600&q=85',
    team: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=700&q=80',
  },
  stats: [
    { value: 10, suffix: '+', label: 'Projects delivered' },
    { value: 5, suffix: '', label: 'Years building in Accra' },
    { value: 3, suffix: '', label: 'Core services' },
    { value: 1, suffix: '', label: 'Team from brief to handover' },
  ],
  footerLine: '© 2026 BuildTech Construction. All rights reserved. | Website by Nosyra Digital',
} as const

export const categories = [
  'All',
  'Commercial',
  'Residential',
  'Renovation',
  'Institutional',
] as const
export type ProjectCategory = (typeof categories)[number]
