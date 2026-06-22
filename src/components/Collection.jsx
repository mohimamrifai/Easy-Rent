import { useMemo, useState } from 'react'
import data, { categories } from '../Data'
import { useReveal } from '../hooks/useReveal'

export default function Collection() {
  const [active, setActive] = useState('all')
  const [ref, visible] = useReveal(0.05)

  const list = useMemo(
    () => (active === 'all' ? data : data.filter((c) => c.category === active)),
    [active],
  )
  const [featured, ...rest] = list

  return (
    <section
      id="fleet"
      ref={ref}
      className="relative border-t border-white/5 bg-ink-950 py-24 md:py-32 lg:py-40"
    >
      <div className="mx-auto max-w-[1440px] px-5 md:px-10 lg:px-16">
        {/* Header */}
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12 md:items-end md:gap-8 lg:gap-12">
          <div
            className={[
              'md:col-span-7 transition-all duration-700 ease-out',
              visible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0',
            ].join(' ')}
          >
            <h2 className="font-display text-4xl font-semibold leading-[1.02] tracking-tightest text-white sm:text-5xl md:text-[64px]">
              Eight cars. Each one <span className="italic text-accent">picked</span> for what it does best.
            </h2>
          </div>

          <div
            className={[
              'md:col-span-4 md:col-start-9 transition-all delay-100 duration-700 ease-out',
              visible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0',
            ].join(' ')}
          >
            <p className="text-sm leading-relaxed text-zinc-400">
              We do not carry a thousand cars. We carry eight, and we keep them in
              the condition we would want to drive them in.
            </p>
          </div>
        </div>

        {/* Filter pills */}
        <div
          className={[
            'mt-12 flex flex-wrap items-center gap-2 transition-all delay-150 duration-700 ease-out md:mt-16',
            visible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0',
          ].join(' ')}
        >
          <span className="eyebrow mr-3 hidden md:inline">Filter</span>
          {categories.map((cat) => {
            const isActive = active === cat.key
            return (
              <button
                key={cat.key}
                onClick={() => setActive(cat.key)}
                className={[
                  'rounded-full border px-4 py-2 text-[13px] font-medium transition-all duration-300',
                  isActive
                    ? 'border-accent bg-accent text-ink-950'
                    : 'border-white/10 text-zinc-300 hover:border-white/30 hover:text-white',
                ].join(' ')}
              >
                {cat.label}
                {isActive && (
                  <span className="ml-2 font-mono text-[11px]">
                    {list.length.toString().padStart(2, '0')}
                  </span>
                )}
              </button>
            )
          })}
        </div>

        {/* Featured car */}
        {featured && (
          <FeaturedCar car={featured} visible={visible} />
        )}

        {/* Grid of remaining cars */}
        <div
          className={[
            'mt-6 grid grid-cols-1 gap-6 transition-all delay-300 duration-700 ease-out sm:grid-cols-2 lg:mt-8 lg:grid-cols-3',
            visible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0',
          ].join(' ')}
        >
          {rest.map((car) => (
            <CarCard key={car.id} car={car} />
          ))}
        </div>

        {/* Empty state */}
        {list.length === 0 && (
          <div className="mt-16 rounded-3xl border border-dashed border-white/10 p-12 text-center">
            <p className="eyebrow text-zinc-500">No matches</p>
            <p className="mt-3 font-display text-2xl font-semibold tracking-tightest text-white">
              Nothing in this category this week.
            </p>
            <button
              onClick={() => setActive('all')}
              className="mt-5 inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-sm text-white hover:bg-white/5"
            >
              See the full fleet
            </button>
          </div>
        )}

        {/* Footer strip */}
        <div className="mt-16 flex flex-col items-start justify-between gap-6 border-t border-white/5 pt-8 md:flex-row md:items-center">
          <div>
            <p className="eyebrow text-zinc-500">Updated weekly</p>
            <p className="mt-1 font-display text-xl font-semibold tracking-tightest text-white">
              {data.length} vehicles · 5 categories · 12 cities
            </p>
          </div>
          <a
            href="#"
            className="group inline-flex items-center gap-3 rounded-full bg-white px-5 py-3 text-sm font-semibold text-ink-950 transition-transform duration-300 hover:-translate-y-px"
          >
            View full fleet
            <svg
              viewBox="0 0 24 24"
              className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
            >
              <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}

function FeaturedCar({ car, visible }) {
  return (
    <article
      className={[
        'group mt-12 grid grid-cols-1 gap-6 overflow-hidden rounded-3xl border border-white/10 bg-ink-900 transition-all delay-200 duration-700 ease-out md:mt-16 md:grid-cols-12 md:gap-0',
        visible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0',
      ].join(' ')}
    >
      <div className="relative col-span-1 md:col-span-7">
        <img
          src={car.image}
          alt={`${car.maker} ${car.name}`}
          className="h-[280px] w-full object-cover sm:h-[380px] md:h-full"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-ink-900/60 md:bg-gradient-to-r md:from-transparent md:to-ink-900" />
        <div className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full border border-white/15 bg-ink-950/70 px-3 py-1.5 text-[11px] font-medium text-white backdrop-blur-md">
          <span className="h-1.5 w-1.5 rounded-full bg-accent" />
          Featured · {car.id}
        </div>
      </div>

      <div className="col-span-1 flex flex-col justify-between gap-8 p-6 md:col-span-5 md:p-10 lg:p-12">
        <div>
          <p className="eyebrow text-zinc-500">{car.maker} · {car.year}</p>
          <h3 className="mt-3 font-display text-4xl font-semibold tracking-tightest text-white md:text-5xl">
            {car.name}
          </h3>
          <p className="mt-3 max-w-[40ch] text-sm leading-relaxed text-zinc-400">
            The headline of the fleet. Tuned for drivers who actually drive.
          </p>
        </div>

        <dl className="grid grid-cols-3 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/5">
          {[
            ['Power', car.power],
            ['0 to 60', car.zeroSixty],
            ['Drive', car.drivetrain],
          ].map(([k, v]) => (
            <div key={k} className="bg-ink-950 p-4">
              <dt className="eyebrow text-zinc-500">{k}</dt>
              <dd className="mt-2 font-mono text-base font-semibold text-white">
                {v}
              </dd>
            </div>
          ))}
        </dl>

        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <p className="eyebrow text-zinc-500">From</p>
            <p className="font-display text-3xl font-semibold tracking-tightest text-white">
              ${car.daily}
              <span className="ml-1 text-base font-normal text-zinc-500">/day</span>
            </p>
          </div>
          <a
            href="#contact"
            className="group/cta inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-ink-950 transition-transform duration-300 hover:-translate-y-px"
          >
            Reserve {car.name}
            <svg
              viewBox="0 0 24 24"
              className="h-4 w-4 transition-transform duration-300 group-hover/cta:translate-x-1"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
            >
              <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>
      </div>
    </article>
  )
}

function CarCard({ car }) {
  return (
    <article className="group relative overflow-hidden rounded-2xl border border-white/10 bg-ink-900 transition-all duration-500 hover:-translate-y-1 hover:border-white/20">
      <div className="relative h-52 overflow-hidden sm:h-60">
        <img
          src={car.image}
          alt={`${car.maker} ${car.name}`}
          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
        />
        <span className="absolute left-3 top-3 inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-ink-950/70 px-2.5 py-1 text-[10.5px] font-medium text-white backdrop-blur-md">
          {car.id}
        </span>
      </div>

      <div className="p-5">
        <div className="flex items-baseline justify-between gap-3">
          <div>
            <p className="eyebrow text-zinc-500">{car.maker}</p>
            <h3 className="mt-1 font-display text-xl font-semibold tracking-tightest text-white">
              {car.name}
            </h3>
          </div>
          <div className="text-right">
            <p className="eyebrow text-zinc-500">From</p>
            <p className="font-display text-xl font-semibold tracking-tightest text-white">
              ${car.daily}
            </p>
          </div>
        </div>

        <dl className="mt-4 grid grid-cols-3 gap-2 border-t border-white/5 pt-4 text-[11px]">
          <div>
            <dt className="text-zinc-500">Power</dt>
            <dd className="mt-0.5 font-mono font-medium text-white">{car.power}</dd>
          </div>
          <div>
            <dt className="text-zinc-500">0-60</dt>
            <dd className="mt-0.5 font-mono font-medium text-white">{car.zeroSixty}</dd>
          </div>
          <div>
            <dt className="text-zinc-500">Drive</dt>
            <dd className="mt-0.5 font-mono font-medium text-white">{car.drivetrain}</dd>
          </div>
        </dl>

        <a
          href="#contact"
          className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/10 px-4 py-2.5 text-sm font-medium text-white transition-colors hover:border-white/30 hover:bg-white/5"
        >
          View details
          <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </a>
      </div>
    </article>
  )
}
