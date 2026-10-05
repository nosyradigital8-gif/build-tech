import { Home as HomeIcon } from 'lucide-react'
import { Button } from '../components/ui/Button'
import { SEO } from '../lib/seo'

export default function NotFound() {
  return (
    <>
      <SEO
        title="Page not found"
        description="This BuildTech page is still under construction."
        path="/404"
      />
      <section className="grid min-h-[65vh] place-items-center bg-surface py-24">
        <div className="container-shell text-center">
          <div className="mx-auto grid max-w-lg place-items-center">
            <div className="skyline-bars mb-8 scale-125">
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
            </div>
            <p className="eyebrow">404 / Still building</p>
            <h1 className="mt-5 font-display text-5xl font-extrabold uppercase leading-[0.95] tracking-[-0.05em] md:text-7xl">
              This page is still under construction.
            </h1>
            <p className="mx-auto mt-6 max-w-md text-base leading-7 text-muted">
              The address you followed does not have a finished page yet. Let’s get you back to the
              main site.
            </p>
            <Button href="/" className="mt-8" icon>
              <HomeIcon size={16} /> Take me home
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
