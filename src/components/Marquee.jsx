import { useReveal } from '../hooks/useReveal'

const brands = [
  { name: 'Lamborghini', slug: 'lamborghini' },
  { name: 'Porsche', slug: 'porsche' },
  { name: 'BMW', slug: 'bmw' },
  { name: 'Mercedes-Benz', slug: 'mercedes' },
  { name: 'Audi', slug: 'audi' },
  { name: 'Tesla', slug: 'tesla' },
  { name: 'Toyota', slug: 'toyota' },
  { name: 'Honda', slug: 'honda' },
  { name: 'Ford', slug: 'ford' },
  { name: 'Ferrari', slug: 'ferrari' },
  { name: 'McLaren', slug: 'mclaren' },
  { name: 'Range Rover', slug: 'rangerover' },
]

export default function Marquee() {
  const [ref, visible] = useReveal(0.2)

  return (
    <section
      ref={ref}
      aria-label="Trusted brand partners"
      className="relative overflow-hidden border-y border-white/5 bg-ink-900/40 py-10"
    >
      <div
        className={[
          'mx-auto mb-8 flex max-w-[1440px] items-center gap-4 px-5 transition-all duration-700 md:px-10 lg:px-16',
          visible ? 'translate-y-0 opacity-100' : 'translate-y-3 opacity-0',
        ].join(' ')}
      >
        <span className="eyebrow">Authorized dealer network</span>
        <span className="hidden h-px flex-1 bg-white/10 md:block" />
        <span className="font-mono text-[11px] text-zinc-500">
          {brands.length} marques · 1 fleet
        </span>
      </div>

      <div className="relative">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-ink-950 to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-ink-950 to-transparent" />
        <div className="flex w-max animate-marquee items-center gap-12 pl-12">
          {[...Array(2)].flatMap((_, k) =>
            brands.map((b) => (
              <div
                key={`${k}-${b.slug}`}
                className="group flex h-12 w-44 shrink-0 items-center justify-center gap-3 grayscale opacity-60 transition-all duration-500 hover:opacity-100 hover:grayscale-0"
              >
                <img
                  src={`https://cdn.simpleicons.org/${b.slug}/ffffff`}
                  alt={b.name}
                  className="h-6 w-6"
                  loading="lazy"
                />
                <span className="font-display text-lg font-semibold tracking-tightest text-white">
                  {b.name}
                </span>
              </div>
            )),
          )}
        </div>
      </div>
    </section>
  )
}
