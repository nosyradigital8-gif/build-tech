import { site } from './site'

export const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'GeneralContractor',
  name: site.name,
  description: site.description,
  telephone: site.phone,
  url: site.domain,
  areaServed: ['Accra', 'Ghana'],
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Oyarifa',
    addressRegion: 'Greater Accra',
    addressCountry: 'GH',
  },
  sameAs: [site.socials.facebook, site.socials.instagram],
}
