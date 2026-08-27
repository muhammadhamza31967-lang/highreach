import { Arrow, Container } from "./primitives";

const QUICK_LINKS = [
  { label: "Home", href: "#top" },
  { label: "About Us", href: "#about" },
  { label: "Artificial Intelligence", href: "#capability" },
  { label: "Cyber Security", href: "#capability" },
  { label: "Advisory Services", href: "#services" },
  { label: "Press Release", href: "#resources" },
  { label: "Contact", href: "#contact" },
];

export function Footer() {
  return (
    <footer className="border-t border-hairline bg-surface">
      <Container className="grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-4 lg:py-20">
        <div>
          <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-foreground">
            About HighReach
          </h2>
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-secondary-ink">
            HighReach develops people and organisations through expertise in strategy, innovation and
            leadership.
          </p>
        </div>

        <nav aria-label="Quick links">
          <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-foreground">
            Quick Links
          </h2>
          <ul className="mt-5 space-y-2.5">
            {QUICK_LINKS.map((l) => (
              <li key={l.label}>
                <a
                  href={l.href}
                  className="group inline-flex items-center gap-2 text-sm text-secondary-ink transition-colors hover:text-accent"
                >
                  <span>{l.label}</span>
                  <Arrow className="h-3 w-3 -translate-x-1 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100" />
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-foreground">Contact</h2>
          <ul className="mt-5 space-y-2.5 text-sm text-secondary-ink">
            <li>
              <a className="transition-colors hover:text-accent" href="tel:+966566653356">
                +966 56 665 3356
              </a>
            </li>
            <li>
              <a className="transition-colors hover:text-accent" href="mailto:info@HighReach.sa">
                info@HighReach.sa
              </a>
            </li>
            <li className="max-w-[16rem] leading-relaxed">
              Al Tauwin – Othman Bin Afan Road, Riyadh, Saudi Arabia
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-foreground">
            Newsletter
          </h2>
          <p className="mt-5 text-sm text-secondary-ink">Subscribe To Our Newsletter</p>
          <form
            className="mt-4 flex border-b border-foreground/25 focus-within:border-accent"
            onSubmit={(e) => e.preventDefault()}
          >
            <label className="sr-only" htmlFor="newsletter-email">
              Your email
            </label>
            <input
              id="newsletter-email"
              type="email"
              placeholder="Your email"
              className="w-full bg-transparent py-2.5 text-sm text-foreground outline-none placeholder:text-secondary-ink/70"
            />
            <button
              type="submit"
              aria-label="Subscribe to our newsletter"
              className="px-2 text-accent transition-transform duration-300 hover:translate-x-1"
            >
              <Arrow />
            </button>
          </form>
        </div>
      </Container>

      <div className="border-t border-hairline">
        <Container className="py-6">
          <p className="text-xs text-secondary-ink">© 2026 HighReach. All Rights Reserved.</p>
        </Container>
      </div>
    </footer>
  );
}
