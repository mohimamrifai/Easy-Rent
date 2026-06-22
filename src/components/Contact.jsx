import { useState } from 'react'
import { useReveal } from '../hooks/useReveal'

const categories = ['Sport', 'Sedan', 'SUV', 'Electric']

export default function Contact() {
  const [ref, visible] = useReveal(0.1)
  const [category, setCategory] = useState('Sport')
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e) {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 4000)
  }

  return (
    <section
      id="contact"
      ref={ref}
      className="relative overflow-hidden border-t border-white/5 bg-ink-950 py-24 md:py-32 lg:py-40"
    >
      <div className="pointer-events-none absolute inset-0 grid-noise opacity-50" />
      <div className="pointer-events-none absolute right-[-15%] top-1/3 h-[480px] w-[480px] rounded-full bg-accent/10 blur-[140px]" />

      <div className="relative mx-auto max-w-[1440px] px-5 md:px-10 lg:px-16">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12 md:gap-8 lg:gap-12">
          {/* Left: editorial pitch */}
          <div
            className={[
              'md:col-span-7 transition-all duration-700 ease-out',
              visible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0',
            ].join(' ')}
          >
            <p className="eyebrow mb-6">Reserve</p>
            <h2 className="font-display text-4xl font-semibold leading-[1.02] tracking-tightest text-white sm:text-5xl md:text-[72px] lg:text-[80px]">
              Tell us when.<br />
              <span className="italic text-accent">We bring the car.</span>
            </h2>
            <p className="mt-8 max-w-[44ch] text-base leading-relaxed text-zinc-400 md:text-lg">
              Reply in under fifteen minutes during business hours. Average
              confirm-time this month: 7 minutes.
            </p>

            <div className="mt-12 flex flex-col gap-3">
              <ContactLine
                k="Phone"
                v="+62 21 1500 472"
                href="tel:+62211500472"
              />
              <ContactLine
                k="WhatsApp"
                v="+62 812 8471 1928"
                href="https://wa.me/628128471928"
              />
              <ContactLine
                k="Concierge desk"
                v="Senin - Minggu · 07.00 - 23.00 WIB"
              />
              <ContactLine
                k="HQ"
                v="Jalan Senopati 84, Jakarta Selatan"
              />
            </div>
          </div>

          {/* Right: booking form */}
          <div
            className={[
              'md:col-span-5 transition-all delay-150 duration-700 ease-out',
              visible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0',
            ].join(' ')}
          >
            <form
              onSubmit={handleSubmit}
              className="relative overflow-hidden rounded-3xl border border-white/10 bg-ink-900 p-6 md:p-8"
            >
              <div className="flex items-center justify-between">
                <span className="eyebrow text-zinc-500">Quick request</span>
                <span className="font-mono text-[11px] text-zinc-500">
                  No deposit to start
                </span>
              </div>

              <div className="mt-6 grid gap-5">
                <Field label="Your name">
                  <input
                    required
                    type="text"
                    placeholder="Anindita Wibowo"
                    className="w-full bg-transparent text-base text-white placeholder:text-zinc-600 focus:outline-none"
                  />
                </Field>

                <Field label="Phone or WhatsApp">
                  <input
                    required
                    type="tel"
                    placeholder="+62 812 1234 5678"
                    className="w-full bg-transparent text-base text-white placeholder:text-zinc-600 focus:outline-none"
                  />
                </Field>

                <div className="grid grid-cols-2 gap-4">
                  <Field label="Pickup date">
                    <input
                      required
                      type="text"
                      placeholder="Jun 28"
                      className="w-full bg-transparent text-base text-white placeholder:text-zinc-600 focus:outline-none"
                    />
                  </Field>
                  <Field label="Duration">
                    <input
                      required
                      type="text"
                      placeholder="3 days"
                      className="w-full bg-transparent text-base text-white placeholder:text-zinc-600 focus:outline-none"
                    />
                  </Field>
                </div>

                <Field label="Category">
                  <div className="flex flex-wrap gap-2">
                    {categories.map((c) => (
                      <button
                        key={c}
                        type="button"
                        onClick={() => setCategory(c)}
                        className={[
                          'rounded-full border px-3 py-1.5 text-[12.5px] font-medium transition-all duration-200',
                          category === c
                            ? 'border-accent bg-accent/15 text-white'
                            : 'border-white/10 text-zinc-400 hover:border-white/30 hover:text-white',
                        ].join(' ')}
                      >
                        {c}
                      </button>
                    ))}
                  </div>
                </Field>
              </div>

              <button
                type="submit"
                className={[
                  'group mt-7 inline-flex w-full items-center justify-center gap-2 rounded-full px-5 py-3.5 text-sm font-semibold transition-all duration-300',
                  submitted
                    ? 'bg-emerald-400 text-ink-950'
                    : 'bg-white text-ink-950 hover:-translate-y-px',
                ].join(' ')}
              >
                {submitted ? (
                  <>
                    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="M5 12l5 5L20 7" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    Request received. We will call in 7 min.
                  </>
                ) : (
                  <>
                    Request my car
                    <svg viewBox="0 0 24 24" className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </>
                )}
              </button>

              <p className="mt-4 text-[11px] leading-relaxed text-zinc-500">
                By submitting, you agree to our concierge terms. No marketing
                texts, no auto-renewals. Just a real person, real fast.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

function Field({ label, children }) {
  return (
    <label className="block">
      <span className="eyebrow block text-zinc-500">{label}</span>
      <div className="mt-2 border-b border-white/10 pb-2 transition-colors focus-within:border-accent">
        {children}
      </div>
    </label>
  )
}

function ContactLine({ k, v, href }) {
  const inner = (
    <div className="flex items-center justify-between border-b border-white/5 py-3">
      <span className="eyebrow text-zinc-500">{k}</span>
      <span className="text-sm text-white">{v}</span>
    </div>
  )
  return href ? (
    <a href={href} className="group block transition-colors hover:bg-white/[0.02]">
      {inner}
    </a>
  ) : (
    inner
  )
}
