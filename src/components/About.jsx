import { useReveal } from '../hooks/useReveal'
import aboutimg from '../assets/about.jpg'

const stats = [
  { value: '150+', label: 'Vehicles in active fleet', detail: 'Curated, never stockpiled' },
  { value: '47', label: 'Min. average delivery', detail: 'Across 12 cities, last 90 days' },
  { value: '98.4%', label: 'On-time arrival rate', detail: 'No manual extensions, no excuses' },
  { value: '4.94', label: 'Average trip rating', detail: 'Across 12,400 completed trips' },
]

export default function About() {
  const [ref, visible] = useReveal(0.1)

  return (
    <section
      id="about"
      ref={ref}
      className="relative bg-ink-950 py-24 md:py-32 lg:py-40"
    >
      <div className="mx-auto max-w-[1440px] px-5 md:px-10 lg:px-16">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12 md:gap-8 lg:gap-12">
          <div
            className={[
              'md:col-span-5 transition-all duration-700 ease-out',
              visible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0',
            ].join(' ')}
          >
            <h2 className="font-display text-4xl font-semibold leading-[1.02] tracking-tightest text-white sm:text-5xl md:text-[56px]">
              Built for people who would rather <span className="italic text-accent">drive</span> than scroll.
            </h2>
          </div>

          <div
            className={[
              'md:col-span-6 md:col-start-7 transition-all delay-100 duration-700 ease-out',
              visible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0',
            ].join(' ')}
          >
            <p className="max-w-[58ch] text-base leading-relaxed text-zinc-400 md:text-lg">
              We started Easy/Rent because renting a car was still built for 2008.
              Long forms, hidden deposits, surprise insurance upsells, and a fleet
              that looked like a used-car lot. We rebuilt the entire flow so you
              can pick a car in under a minute and have it at your door before
              your coffee gets cold.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
              <a
                href="#fleet"
                className="inline-flex w-fit items-center gap-3 rounded-full border border-white/15 px-5 py-3 text-sm font-medium text-white transition-colors hover:border-white/40 hover:bg-white/5"
              >
                Read the long version
                <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
              <span className="font-mono text-[11px] uppercase tracking-eyebrow text-zinc-500">
                7 min read · 2026 update
              </span>
            </div>
          </div>
        </div>

        {/* Stat row */}
        <div
          className={[
            'mt-20 grid grid-cols-2 gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/5 transition-all delay-200 duration-700 ease-out md:mt-28 md:grid-cols-4',
            visible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0',
          ].join(' ')}
        >
          {stats.map((s, i) => (
            <div key={s.label} className="relative bg-ink-950 p-6 md:p-8">
              <span className="absolute right-4 top-4 font-mono text-[10.5px] text-zinc-700">
                0{i + 1}
              </span>
              <p className="font-display text-4xl font-semibold tracking-tightest text-white md:text-5xl">
                {s.value}
              </p>
              <p className="mt-3 text-sm font-medium text-white">{s.label}</p>
              <p className="mt-1 text-xs text-zinc-500">{s.detail}</p>
            </div>
          ))}
        </div>

        {/* Wide image + overlay */}
        <div
          className={[
            'mt-20 grid grid-cols-1 gap-6 transition-all delay-300 duration-700 ease-out md:mt-28 md:grid-cols-12 md:gap-8',
            visible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0',
          ].join(' ')}
        >
          <div className="relative col-span-1 overflow-hidden rounded-3xl border border-white/10 md:col-span-8">
            <img
              src={aboutimg}
              alt="Vehicle handover at the doorstep"
              className="h-[360px] w-full object-cover md:h-[520px]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink-950/80 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 flex flex-col gap-4 md:bottom-10 md:left-10 md:right-10 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="eyebrow text-zinc-300">The handover</p>
                <p className="mt-2 max-w-[40ch] font-display text-2xl font-semibold tracking-tightest text-white md:text-3xl">
                  Your car arrives clean, fueled, and ready. The keys are already in it.
                </p>
              </div>
              <a
                href="#service"
                className="inline-flex w-fit items-center gap-2 rounded-full bg-white px-4 py-2.5 text-sm font-semibold text-ink-950"
              >
                See the process
                <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </div>
          </div>

          {/* Side panel */}
          <div className="col-span-1 flex flex-col gap-4 md:col-span-4">
            <div className="rounded-3xl border border-white/10 bg-ink-900 p-6 md:p-8">
              <p className="eyebrow text-zinc-500">Built around</p>
              <p className="mt-3 font-display text-2xl font-semibold tracking-tightest text-white">
                Four things that usually go wrong with rentals.
              </p>
              <ul className="mt-6 space-y-3 text-sm text-zinc-400">
                {[
                  ['The deposit', 'Capped at one daily rate, refundable in 24h.'],
                  ['The insurance', 'Included. Real coverage, not a banner ad.'],
                  ['The handover', 'Door-to-door, in the time it takes a coffee.'],
                  ['The billing', 'One line, no surprise add-ons.'],
                ].map(([k, v]) => (
                  <li key={k} className="flex gap-3">
                    <span className="mt-1.5 h-1 w-3 shrink-0 rounded-full bg-accent" />
                    <span>
                      <span className="text-white">{k}.</span> {v}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="relative flex-1 overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-accent/20 via-ink-900 to-ink-900 p-6 md:p-8">
              <p className="eyebrow text-zinc-300">Now booking</p>
              <p className="mt-3 font-display text-3xl font-semibold tracking-tightest text-white md:text-4xl">
                Weekend of <span className="italic">Jun 27</span>
              </p>
              <p className="mt-2 text-sm text-zinc-300">
                38 cars still available across Jakarta &amp; Bali.
              </p>
              <div className="mt-6 h-px w-full bg-white/10" />
              <div className="mt-4 flex items-center justify-between">
                <span className="font-mono text-[11px] uppercase tracking-eyebrow text-zinc-300">
                  Updated 2 min ago
                </span>
                <span className="font-mono text-sm font-semibold text-accent">
                  38 / 96
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
