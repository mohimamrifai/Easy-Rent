import { useReveal } from '../hooks/useReveal'

const steps = [
  {
    n: '01',
    title: 'Pick the car.',
    body: 'Filter by category, power, or mood. Real photos, not stock. Tap to compare side by side.',
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.6">
        <rect x="3" y="6" width="18" height="13" rx="2" />
        <path d="M7 6V4h10v2M3 13h18" />
      </svg>
    ),
  },
  {
    n: '02',
    title: 'Choose when and where.',
    body: 'Pickup at your address or one of 28 hubs. Daily, weekend, weekly, monthly. No deposit gymnastics.',
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.6">
        <rect x="3" y="5" width="18" height="16" rx="2" />
        <path d="M3 9h18M8 3v4M16 3v4" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    n: '03',
    title: 'Sign once. Drive.',
    body: 'A one-page agreement, signed on your phone. Keys are in the car when we deliver. Insurance is included.',
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
]

export default function Service() {
  const [ref, visible] = useReveal(0.1)

  return (
    <section
      id="service"
      ref={ref}
      className="relative border-t border-white/5 bg-ink-900 py-24 md:py-32 lg:py-40"
    >
      <div className="mx-auto max-w-[1440px] px-5 md:px-10 lg:px-16">
        {/* Header */}
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12 md:gap-8 lg:gap-12">
          <div
            className={[
              'md:col-span-8 transition-all duration-700 ease-out',
              visible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0',
            ].join(' ')}
          >
            <h2 className="font-display text-4xl font-semibold leading-[1.02] tracking-tightest text-white sm:text-5xl md:text-[64px]">
              Three steps. <span className="italic text-accent">Under sixty seconds</span> from tap to keys.
            </h2>
          </div>
        </div>

        {/* Asymmetric bento: one big step + two stacked */}
        <div
          className={[
            'mt-16 grid grid-cols-1 gap-4 transition-all delay-150 duration-700 ease-out md:mt-20 md:grid-cols-3 md:gap-5',
            visible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0',
          ].join(' ')}
        >
          {/* Step 01: large */}
          <StepCard step={steps[0]} className="bg-ink-950 md:col-span-2 md:row-span-2" large />
          {/* Step 02: small */}
          <StepCard step={steps[1]} className="bg-gradient-to-br from-ink-800 to-ink-900" />
          {/* Step 03: small */}
          <StepCard step={steps[2]} className="bg-accent text-ink-950" dark />
        </div>

        {/* Bottom row: trust strip */}
        <div
          className={[
            'mt-5 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/5 transition-all delay-300 duration-700 ease-out md:grid-cols-4',
            visible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0',
          ].join(' ')}
        >
          {[
            ['Insurance', 'Included'],
            ['Deposit', '1 day max'],
            ['Cancellation', 'Free, 24h'],
            ['Mileage', '200 km/day'],
          ].map(([k, v]) => (
            <div key={k} className="bg-ink-950 p-5">
              <p className="eyebrow text-zinc-500">{k}</p>
              <p className="mt-2 font-display text-lg font-semibold tracking-tightest text-white">
                {v}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function StepCard({ step, className = '', large = false, dark = false }) {
  return (
    <div
      className={[
        'group relative flex flex-col justify-between overflow-hidden rounded-3xl border p-6 transition-all duration-500 md:p-8 lg:p-10',
        dark
          ? 'border-accent hover:-translate-y-1'
          : 'border-white/10 hover:-translate-y-1 hover:border-white/20',
        className,
      ].join(' ')}
    >
      <div className="flex items-start justify-between">
        <span
          className={[
            'font-mono text-[11px] uppercase tracking-eyebrow',
            dark ? 'text-ink-950/70' : 'text-zinc-500',
          ].join(' ')}
        >
          Step {step.n}
        </span>
        <span
          className={[
            'grid h-10 w-10 place-items-center rounded-full border transition-transform duration-500 group-hover:rotate-[8deg]',
            dark
              ? 'border-ink-950/20 bg-ink-950/10 text-ink-950'
              : 'border-white/15 bg-white/5 text-white',
          ].join(' ')}
        >
          {step.icon}
        </span>
      </div>

      <div className={large ? 'mt-12 md:mt-16 lg:mt-24' : 'mt-8 md:mt-12'}>
        <h3
          className={[
            'font-display font-semibold tracking-tightest',
            dark ? 'text-ink-950' : 'text-white',
            large ? 'text-4xl md:text-5xl lg:text-6xl' : 'text-2xl md:text-3xl',
          ].join(' ')}
        >
          {step.title}
        </h3>
        <p
          className={[
            'mt-3 max-w-[44ch] text-sm leading-relaxed md:text-base',
            dark ? 'text-ink-950/80' : 'text-zinc-400',
          ].join(' ')}
        >
          {step.body}
        </p>
      </div>

      {/* Background number */}
      <span
        aria-hidden
        className={[
          'pointer-events-none absolute -bottom-6 -right-2 select-none font-display font-semibold tracking-tightest transition-transform duration-700 ease-out group-hover:-translate-y-1',
          large ? 'text-[180px] leading-none md:text-[260px] lg:text-[320px]' : 'text-[120px] leading-none',
          dark ? 'text-ink-950/[0.07]' : 'text-white/[0.03]',
        ].join(' ')}
      >
        {step.n}
      </span>
    </div>
  )
}
