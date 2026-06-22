import { useEffect, useState } from 'react'

const links = [
  { label: 'Fleet', href: '#fleet' },
  { label: 'How it works', href: '#service' },
  { label: 'Concierge', href: '#contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header
      className={[
        'fixed inset-x-0 top-0 z-50 transition-all duration-500',
        scrolled
          ? 'bg-ink-950/75 backdrop-blur-xl border-b border-white/5'
          : 'bg-transparent border-b border-transparent',
      ].join(' ')}
    >
      <nav className="mx-auto flex h-16 max-w-[1440px] items-center justify-between px-5 md:px-10 lg:px-16">
        <a href="#" className="group flex items-center gap-2">
          <span className="relative grid h-7 w-7 place-items-center rounded-md bg-accent text-ink-950 transition-transform duration-300 group-hover:rotate-[-8deg]">
            <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M3 14l2-6h14l2 6M5 14h14v4H5zM7 18v2M17 18v2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
          <span className="font-display text-[17px] font-semibold tracking-tightest text-white">
            Easy<span className="text-zinc-500">/</span>Rent
          </span>
        </a>

        <ul className="hidden items-center gap-9 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="group relative text-[13.5px] font-medium text-zinc-300 transition-colors hover:text-white"
              >
                {l.label}
                <span className="absolute -bottom-1 left-0 h-px w-0 bg-accent transition-all duration-500 ease-out group-hover:w-full" />
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-3 md:flex">
          <a
            href="#"
            className="text-[13.5px] font-medium text-zinc-300 transition-colors hover:text-white"
          >
            Sign in
          </a>
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-[13px] font-semibold text-ink-950 transition-transform duration-300 hover:-translate-y-px"
          >
            Reserve a car
            <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>

        <button
          onClick={() => setOpen(true)}
          aria-label="Open menu"
          className="grid h-9 w-9 place-items-center rounded-full border border-white/10 md:hidden"
        >
          <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M4 8h16M4 16h16" strokeLinecap="round" />
          </svg>
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={[
          'fixed inset-0 z-50 origin-top transform bg-ink-950 transition-all duration-500 md:hidden',
          open ? 'opacity-100' : 'pointer-events-none opacity-0',
        ].join(' ')}
      >
        <div className="flex h-16 items-center justify-between px-5">
          <span className="font-display text-[17px] font-semibold tracking-tightest text-white">
            Easy<span className="text-zinc-500">/</span>Rent
          </span>
          <button
            onClick={() => setOpen(false)}
            aria-label="Close menu"
            className="grid h-9 w-9 place-items-center rounded-full border border-white/10"
          >
            <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M6 6l12 12M6 18L18 6" strokeLinecap="round" />
            </svg>
          </button>
        </div>
        <div className="flex h-[calc(100dvh-4rem)] flex-col justify-between px-5 pb-10 pt-8">
          <ul className="flex flex-col gap-6">
            {links.map((l, i) => (
              <li
                key={l.href}
                className="border-b border-white/5 pb-5"
                style={{ transitionDelay: `${i * 60}ms` }}
              >
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="font-display text-4xl font-semibold tracking-tightest text-white"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="flex flex-col gap-3">
            <a
              href="#"
              className="text-base font-medium text-zinc-300"
              onClick={() => setOpen(false)}
            >
              Sign in
            </a>
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="inline-flex w-fit items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-ink-950"
            >
              Reserve a car
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}
