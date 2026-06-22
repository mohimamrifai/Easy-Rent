export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/5 bg-ink-950">
      {/* Big wordmark band */}
      <div className="relative border-b border-white/5 py-16 md:py-24">
        <div className="pointer-events-none absolute inset-0 grid-noise opacity-30" />
        <div className="mx-auto max-w-[1440px] px-5 md:px-10 lg:px-16">
          <h2 className="font-display text-[18vw] font-semibold leading-[0.85] tracking-tightest text-white md:text-[140px] lg:text-[180px]">
            Easy<span className="italic text-accent">/</span>Rent
          </h2>
        </div>
      </div>

      {/* Columns */}
      <div className="mx-auto max-w-[1440px] px-5 py-16 md:px-10 md:py-20 lg:px-16">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-12 md:gap-8 lg:gap-12">
          {/* Brand + newsletter */}
          <div className="col-span-2 md:col-span-5">
            <p className="max-w-[36ch] text-base leading-relaxed text-zinc-400">
              A curated fleet, delivered in under an hour, billed without
              theatre. Operating since 2019.
            </p>

            <form
              onSubmit={(e) => e.preventDefault()}
              className="mt-8 flex max-w-sm items-center gap-2 rounded-full border border-white/10 bg-ink-900 p-1.5"
            >
              <input
                type="email"
                placeholder="you@domain.com"
                className="flex-1 bg-transparent px-4 py-2 text-sm text-white placeholder:text-zinc-600 focus:outline-none"
              />
              <button
                type="submit"
                className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-[13px] font-semibold text-ink-950 transition-transform hover:-translate-y-px"
              >
                Subscribe
                <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </form>
            <p className="mt-3 text-[11px] text-zinc-500">
              One email per month. New arrivals, no filler.
            </p>
          </div>

          <Column title="Fleet">
            <FootLink href="#">All vehicles</FootLink>
            <FootLink href="#">Sport</FootLink>
            <FootLink href="#">Sedan</FootLink>
            <FootLink href="#">SUV</FootLink>
            <FootLink href="#">Electric</FootLink>
            <FootLink href="#">Exclusive</FootLink>
          </Column>

          <Column title="Service">
            <FootLink href="#">How it works</FootLink>
            <FootLink href="#">Delivery cities</FootLink>
            <FootLink href="#">Concierge</FootLink>
            <FootLink href="#">Long-term lease</FootLink>
            <FootLink href="#">Corporate fleet</FootLink>
          </Column>

          <Column title="Company">
            <FootLink href="#">About</FootLink>
            <FootLink href="#">Press</FootLink>
            <FootLink href="#">Careers</FootLink>
            <FootLink href="#">Terms</FootLink>
            <FootLink href="#">Privacy</FootLink>
          </Column>
        </div>

        {/* Status strip */}
        <div className="mt-16 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/5 md:mt-20 md:grid-cols-4">
          <StatusCell label="Fleet status" value="Live" dot="bg-emerald-400" />
          <StatusCell label="Avg. confirm" value="7 min" />
          <StatusCell label="Cities open" value="12" />
          <StatusCell label="Concierge" value="Online" dot="bg-emerald-400" />
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col items-start justify-between gap-6 border-t border-white/5 pt-8 md:flex-row md:items-center">
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-[11px] text-zinc-500">
            <span className="font-mono uppercase tracking-eyebrow">
              © 2026 Easy/Rent Holdings
            </span>
            <span className="font-mono uppercase tracking-eyebrow">
              Jakarta · Bali · Singapore
            </span>
            <span className="font-mono uppercase tracking-eyebrow">
              Made with too much coffee
            </span>
          </div>

          <div className="flex items-center gap-2">
            <SocialIcon label="Instagram">
              <path d="M12 2.2c3.2 0 3.6 0 4.8.1 1.2.1 1.8.2 2.2.4.6.2 1 .5 1.5 1 .5.5.8.9 1 1.5.2.4.3 1 .4 2.2.1 1.2.1 1.6.1 4.8s0 3.6-.1 4.8c-.1 1.2-.2 1.8-.4 2.2-.2.6-.5 1-1 1.5-.5.5-.9.8-1.5 1-.4.2-1 .3-2.2.4-1.2.1-1.6.1-4.8.1s-3.6 0-4.8-.1c-1.2-.1-1.8-.2-2.2-.4-.6-.2-1-.5-1.5-1-.5-.5-.8-.9-1-1.5-.2-.4-.3-1-.4-2.2-.1-1.2-.1-1.6-.1-4.8s0-3.6.1-4.8c.1-1.2.2-1.8.4-2.2.2-.6.5-1 1-1.5.5-.5.9-.8 1.5-1 .4-.2 1-.3 2.2-.4 1.2-.1 1.6-.1 4.8-.1zm0 2.2c-3.1 0-3.5 0-4.7.1-1.1.1-1.7.2-2.1.4-.5.2-.9.4-1.3.8-.4.4-.6.8-.8 1.3-.2.4-.3 1-.4 2.1-.1 1.2-.1 1.6-.1 4.7s0 3.5.1 4.7c.1 1.1.2 1.7.4 2.1.2.5.4.9.8 1.3.4.4.8.6 1.3.8.4.2 1 .3 2.1.4 1.2.1 1.6.1 4.7.1s3.5 0 4.7-.1c1.1-.1 1.7-.2 2.1-.4.5-.2.9-.4 1.3-.8.4-.4.6-.8.8-1.3.2-.4.3-1 .4-2.1.1-1.2.1-1.6.1-4.7s0-3.5-.1-4.7c-.1-1.1-.2-1.7-.4-2.1-.2-.5-.4-.9-.8-1.3-.4-.4-.8-.6-1.3-.8-.4-.2-1-.3-2.1-.4-1.2-.1-1.6-.1-4.7-.1zM12 7.4a4.6 4.6 0 1 1 0 9.2 4.6 4.6 0 0 1 0-9.2zm0 1.8a2.8 2.8 0 1 0 0 5.6 2.8 2.8 0 0 0 0-5.6zm5.8-2.8a1.1 1.1 0 1 1-2.2 0 1.1 1.1 0 0 1 2.2 0z" />
            </SocialIcon>
            <SocialIcon label="X">
              <path d="M17.5 3h2.9l-6.3 7.2L21.5 21h-5.8l-4.5-5.9L5.9 21H3l6.7-7.7L2.7 3h6l4.1 5.4L17.5 3zm-1 16.3h1.6L7.6 4.6H5.9l10.6 14.7z" />
            </SocialIcon>
            <SocialIcon label="YouTube">
              <path d="M21.6 7.2a2.5 2.5 0 0 0-1.8-1.8C18.3 5 12 5 12 5s-6.3 0-7.8.4A2.5 2.5 0 0 0 2.4 7.2C2 8.7 2 12 2 12s0 3.3.4 4.8a2.5 2.5 0 0 0 1.8 1.8C5.7 19 12 19 12 19s6.3 0 7.8-.4a2.5 2.5 0 0 0 1.8-1.8c.4-1.5.4-4.8.4-4.8s0-3.3-.4-4.8zM10 15V9l5.2 3-5.2 3z" />
            </SocialIcon>
            <SocialIcon label="TikTok">
              <path d="M16.6 5.8a4.8 4.8 0 0 1-3.3-1.3 4.8 4.8 0 0 1-1.4-3.3h-2.7v12.6a2.7 2.7 0 1 1-2.7-2.7c.3 0 .5 0 .8.1V8.4a5.6 5.6 0 0 0-.8-.1 5.4 5.4 0 1 0 5.4 5.4V8.2a7.5 7.5 0 0 0 4.7 1.6V7.1c-.5 0-1 0-1.4-.2-.5-.2-1-.5-1.3-1-.2-.1-.3-.1-.3-.1z" />
            </SocialIcon>
          </div>
        </div>
      </div>
    </footer>
  )
}

function Column({ title, children }) {
  return (
    <div className="col-span-1 md:col-span-2">
      <p className="eyebrow mb-5 text-zinc-500">{title}</p>
      <ul className="flex flex-col gap-3">{children}</ul>
    </div>
  )
}

function FootLink({ href, children }) {
  return (
    <li>
      <a
        href={href}
        className="group inline-flex items-center gap-2 text-sm text-zinc-300 transition-colors hover:text-white"
      >
        <span className="h-px w-0 bg-accent transition-all duration-300 group-hover:w-3" />
        {children}
      </a>
    </li>
  )
}

function StatusCell({ label, value, dot }) {
  return (
    <div className="bg-ink-900 p-5">
      <p className="eyebrow text-zinc-500">{label}</p>
      <div className="mt-2 flex items-center gap-2">
        {dot && <span className={`h-1.5 w-1.5 rounded-full ${dot}`} />}
        <span className="font-mono text-base font-semibold text-white">{value}</span>
      </div>
    </div>
  )
}

function SocialIcon({ label, children }) {
  return (
    <a
      href="#"
      aria-label={label}
      className="grid h-10 w-10 place-items-center rounded-full border border-white/10 text-zinc-400 transition-all hover:border-white/30 hover:text-white"
    >
      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
        {children}
      </svg>
    </a>
  )
}
