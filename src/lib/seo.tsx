import { Helmet } from 'react-helmet-async'
import { site } from '../data/site'

type Props = { title: string; description: string; path?: string; schema?: object }

export function SEO({ title, description, path = '/', schema }: Props) {
  const canonical = `${site.domain}${path}`
  return (
    <Helmet>
      <title>
        {title} | {site.name}
      </title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />
      <meta property="og:title" content={`${title} | ${site.name}`} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={`${site.domain}/brand/full-lockup.png`} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={`${title} | ${site.name}`} />
      <meta name="twitter:description" content={description} />
      {schema && <script type="application/ld+json">{JSON.stringify(schema)}</script>}
    </Helmet>
  )
}
