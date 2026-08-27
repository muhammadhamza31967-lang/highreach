import { Arrow, Container } from "./primitives";
import logoAsset from "@/assets/highreach-logo.png.asset.json";

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
    <footer className="bg-foreground text-background">
      <Container className="grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-4 lg:py-20">
        <div>
          <img
            src={logoAsset.url}
            alt="HighReach — Success Elevated"
            className="h-10 w-auto brightness-0 invert"
            width={240}
            height={64}
          />
          <h2 className="mt-8 text-sm font-semibold uppercase tracking-[0.18em] text-background">
            About HighReach
          </h2>
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-background/70">
            HighReach develops people and organisations through expertise in strategy, innovation and
            leadership.
          </p>
        </div>

        <nav aria-label="Quick links">
          <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-background">
            Quick Links
          </h2>
          <ul className="mt-5 space-y-2.5">
            {QUICK_LINKS.map((l) => (
              <li key={l.label}>
                <a
                  href={l.href}
                  className="group inline-flex items-center gap-2 text-sm text-background/70 transition-colors hover:text-accent-light"
                >
                  <span>{l.label}</span>
                  <Arrow className="h-3 w-3 -translate-x-1 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100" />
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-background">Contact</h2>
          <ul className="mt-5 space-y-2.5 text-sm text-background/70">
            <li>
              <a className="transition-colors hover:text-accent-light" href="tel:+966566653356">
                +966 56 665 3356
              </a>
            </li>
            <li>
              <a className="transition-colors hover:text-accent-light" href="mailto:info@HighReach.sa">
                info@HighReach.sa
              </a>
            </li>
            <li className="max-w-[16rem] leading-relaxed">
              Al Tauwin – Othman Bin Afan Road, Riyadh, Saudi Arabia
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-background">
            Newsletter
          </h2>
          <p className="mt-5 text-sm text-background/70">Subscribe To Our Newsletter</p>
          <form
            className="mt-4 flex border-b border-background/25 focus-within:border-accent-light"
            onSubmit={(e) => e.preventDefault()}
          >
            <label className="sr-only" htmlFor="newsletter-email">
              Your email
            </label>
            <input
              id="newsletter-email"
              type="email"
              placeholder="Your email"
              className="w-full bg-transparent py-2.5 text-sm text-background outline-none placeholder:text-background/50"
            />
            <button
              type="submit"
              aria-label="Subscribe to our newsletter"
              className="px-2 text-accent-light transition-transform duration-300 hover:translate-x-1"
            >
              <Arrow />
            </button>
          </form>
        </div>
      </Container>

      <div className="border-t border-background/15">
        <Container className="py-6">
          <p className="text-xs text-background/60">© 2026 HighReach. All Rights Reserved.</p>
        </Container>
      </div>
    </footer>
  );
}
