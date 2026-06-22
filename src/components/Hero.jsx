import { useReveal } from '../hooks/useReveal'
import heroImg from '../assets/hero.png'

export default function Hero() {
  const [ref, visible] = useReveal(0.05)

  return (
    <section
      ref={ref}
      className="relative min-h-[100dvh] overflow-hidden bg-ink-950 pt-24 md:pt-28"
    >
      {/* Ambient gradients */}
      <div className="pointer-events-none absolute inset-0 grid-noise opacity-50" />
      <div className="pointer-events-none absolute -top-40 right-[-10%] h-[520px] w-[520px] rounded-full bg-accent/15 blur-[140px]" />
      <div className="pointer-events-none absolute bottom-[-20%] left-[-10%] h-[420px] w-[420px] rounded-full bg-white/5 blur-[120px]" />

      {/* Top metadata strip */}
      <div className="relative mx-auto flex max-w-[1440px] items-center justify-between px-5 pt-6 md:px-10 lg:px-16">
        <div className="flex items-center gap-3">
          <span className="relative flex h-2 w-2">
            <span className="absolute inset-0 animate-soft-pulse rounded-full bg-accent" />
            <span className="relative h-2 w-2 rounded-full bg-accent" />
          </span>
          <span className="eyebrow">Fleet available · Jakarta &amp; Bali</span>
        </div>
        <span className="eyebrow hidden md:inline">Est. 2019</span>
      </div>

      <div className="relative mx-auto grid max-w-[1440px] grid-cols-1 gap-12 px-5 pb-20 pt-12 md:grid-cols-12 md:gap-8 md:px-10 md:pt-16 lg:gap-12 lg:px-16 lg:pt-20">
        {/* Left: editorial copy */}
        <div
          className={[
            'md:col-span-7 lg:col-span-7 transition-all duration-1000 ease-out',
            visible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0',
          ].join(' ')}
        >
          <h1 className="font-display text-[44px] font-semibold leading-[0.96] tracking-tightest text-white sm:text-6xl md:text-[72px] lg:text-[88px]">
            Drive something <span className="italic text-accent">honest.</span>
            <br />
            <span className="text-zinc-500">Not just</span>{' '}
            <span className="relative inline-block">
              <span className="relative z-10">expensive.</span>
              <span className="absolute bottom-1 left-0 -z-0 h-2 w-full bg-accent/20 md:bottom-2" />
            </span>
          </h1>

          <p className="mt-8 max-w-[44ch] text-base leading-relaxed text-zinc-400 md:text-lg">
            A hand-picked fleet of 150+ vehicles, delivered to your door in
            under sixty minutes. Daily, weekly, or weekend. No paperwork, no
            deposits the size of a mortgage.
          </p>

          <div className="mt-10 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
            <a
              href="#fleet"
              className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-ink-950 transition-transform duration-300 hover:-translate-y-px"
            >
              <span className="relative z-10">Browse the fleet</span>
              <svg
                viewBox="0 0 24 24"
                className="relative z-10 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
              >
                <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span className="absolute inset-0 -z-0 translate-y-full bg-accent transition-transform duration-500 ease-out group-hover:translate-y-0" />
              <span className="absolute inset-0 -z-10 group-hover:text-ink-950" />
              <style>{`
                .group:hover .group span:first-child { color: #09090b; }
              `}</style>
            </a>

            <a
              href="#about"
              className="group inline-flex items-center gap-3 px-2 py-3.5 text-sm font-medium text-zinc-300 transition-colors hover:text-white"
            >
              <span className="grid h-9 w-9 place-items-center rounded-full border border-white/15 transition-colors group-hover:border-white/40">
                <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M8 5v14l11-7z" fill="currentColor" />
                </svg>
              </span>
              How it works
              <span className="text-zinc-500">· 2 min</span>
            </a>
          </div>

          {/* Spec strip */}
          <div className="mt-16 hidden grid-cols-3 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/5 md:grid">
            {[
              { label: 'Avg. delivery', value: '47 min' },
              { label: 'Vehicles in fleet', value: '150+' },
              { label: 'Cities served', value: '12' },
            ].map((s) => (
              <div key={s.label} className="bg-ink-950 p-5">
                <p className="eyebrow text-zinc-500">{s.label}</p>
                <p className="mt-2 font-display text-3xl font-semibold tracking-tightest text-white">
                  {s.value}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Right: hero image card */}
        <div
          className={[
            'md:col-span-5 lg:col-span-5 transition-all duration-1000 delay-150 ease-out',
            visible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0',
          ].join(' ')}
        >
          <div className="relative">
            {/* Image plate */}
            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-ink-900">
              <div className="absolute inset-0 bg-gradient-to-tr from-accent/10 via-transparent to-transparent" />
              <img
                src={heroImg}
                alt="Featured vehicle, photographed in low light"
                className="relative z-10 h-auto w-full object-cover"
              />
              <div className="absolute left-4 top-4 z-20 inline-flex items-center gap-2 rounded-full border border-white/15 bg-ink-950/70 px-3 py-1.5 text-[11px] font-medium text-white backdrop-blur-md">
                <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                Featured · Huracán EVO
              </div>
              <div className="absolute bottom-4 right-4 z-20 rounded-2xl border border-white/10 bg-ink-950/70 px-4 py-3 backdrop-blur-md">
                <p className="eyebrow text-zinc-400">From</p>
                <p className="mt-1 font-display text-2xl font-semibold tracking-tightest text-white">
                  $480<span className="text-sm font-normal text-zinc-500">/day</span>
                </p>
              </div>
            </div>

            {/* Floating rating chip */}
            <div className="absolute -left-3 top-1/3 hidden -translate-x-1/2 rotate-[-3deg] rounded-2xl border border-white/10 bg-ink-900 px-4 py-3 shadow-2xl md:block">
              <div className="flex items-center gap-2">
                <div className="flex gap-0.5 text-accent">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} viewBox="0 0 24 24" className="h-3 w-3" fill="currentColor">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  ))}
                </div>
                <span className="text-[11px] font-medium text-white">4.94</span>
              </div>
              <p className="mt-1 text-[10.5px] uppercase tracking-eyebrow text-zinc-500">
                12,400+ trips
              </p>
            </div>

            {/* Floating data chip */}
            <div className="absolute -bottom-4 -right-2 hidden rotate-[2deg] rounded-2xl border border-white/10 bg-ink-900 px-4 py-3 shadow-2xl md:block">
              <p className="eyebrow text-zinc-400">0 to 60 mph</p>
              <p className="mt-1 font-mono text-2xl font-semibold text-white">
                2.9<span className="text-sm text-zinc-500">s</span>
              </p>
            </div>
          </div>

          {/* Below image: small car meta */}
          <div className="mt-8 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/5">
            <div className="bg-ink-950 p-4">
              <p className="eyebrow text-zinc-500">Power</p>
              <p className="mt-1 font-mono text-lg font-semibold text-white">631 hp</p>
            </div>
            <div className="bg-ink-950 p-4">
              <p className="eyebrow text-zinc-500">Drivetrain</p>
              <p className="mt-1 font-mono text-lg font-semibold text-white">AWD</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
