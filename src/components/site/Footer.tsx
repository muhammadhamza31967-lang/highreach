import { Facebook, Instagram, Linkedin } from "lucide-react";
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

function XIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" fill="currentColor" className={className}>
      <path d="M17.53 3H20.5l-6.49 7.42L21.75 21h-5.99l-4.69-6.13L5.7 21H2.73l6.94-7.93L2.25 3h6.14l4.24 5.6L17.53 3Zm-1.04 16.2h1.65L7.6 4.71H5.83L16.49 19.2Z" />
    </svg>
  );
}

const SOCIALS = [
  { label: "Facebook", href: "https://facebook.com", Icon: Facebook },
  { label: "LinkedIn", href: "https://linkedin.com", Icon: Linkedin },
  { label: "Instagram", href: "https://instagram.com", Icon: Instagram },
  { label: "X", href: "https://x.com", Icon: XIcon },
];

function ColumnHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-[0.7rem] font-semibold uppercase tracking-[0.24em] text-background/90">
      {children}
    </h2>
  );
}

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-foreground text-background">
      {/* subtle background depth */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute -left-40 -top-40 h-[28rem] w-[28rem] rounded-full bg-accent/15 blur-3xl" />
        <div className="absolute -bottom-56 right-[-10rem] h-[32rem] w-[32rem] rounded-full bg-accent/10 blur-3xl" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent-light/50 to-transparent" />
      </div>

      <Container className="relative grid gap-14 py-20 md:grid-cols-2 md:gap-x-12 lg:grid-cols-12 lg:gap-x-10 lg:py-24">
        <div className="lg:col-span-4 lg:pr-8">
          <img
            src={logoAsset.url}
            alt="HighReach — Success Elevated"
            className="h-10 w-auto brightness-0 invert"
            width={240}
            height={64}
          />
          <div className="mt-9">
            <ColumnHeading>About HighReach</ColumnHeading>
          </div>
          <p className="mt-5 max-w-sm text-sm leading-[1.85] text-background/65">
            HighReach develops people and organisations through expertise in strategy, innovation and
            leadership.
          </p>

          <ul className="mt-8 flex items-center gap-3">
            {SOCIALS.map(({ label, href, Icon }) => (
              <li key={label}>
                <a
                  href={href}
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label={label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-background/20 text-background/75 transition-all duration-[350ms] ease-out hover:-translate-y-0.5 hover:border-accent-light/70 hover:bg-background/10 hover:text-accent-light"
                >
                  <Icon className="h-[1.05rem] w-[1.05rem]" />
                </a>
              </li>
            ))}
          </ul>
        </div>

        <nav aria-label="Quick links" className="lg:col-span-3">
          <ColumnHeading>Quick Links</ColumnHeading>
          <ul className="mt-6 space-y-3.5">
            {QUICK_LINKS.map((l) => (
              <li key={l.label}>
                <a
                  href={l.href}
                  className="group inline-flex items-center gap-2 text-sm text-background/65 transition-all duration-[350ms] ease-out hover:translate-x-1 hover:text-accent-light"
                >
                  <span className="border-b border-transparent pb-0.5 transition-colors duration-[350ms] group-hover:border-accent-light/50">
                    {l.label}
                  </span>
                  <Arrow className="h-3 w-3 -translate-x-1 opacity-0 transition-all duration-[350ms] group-hover:translate-x-0 group-hover:opacity-100" />
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="lg:col-span-2">
          <ColumnHeading>Contact</ColumnHeading>
          <ul className="mt-6 space-y-4 text-sm text-background/65">
            <li>
              <a
                className="transition-colors duration-[350ms] hover:text-accent-light"
                href="tel:+966566653356"
              >
                +966 56 665 3356
              </a>
            </li>
            <li>
              <a
                className="transition-colors duration-[350ms] hover:text-accent-light"
                href="mailto:info@HighReach.sa"
              >
                info@HighReach.sa
              </a>
            </li>
            <li className="max-w-[16rem] leading-[1.85] text-background/55">
              Al Tauwin – Othman Bin Afan Road, Riyadh, Saudi Arabia
            </li>
          </ul>
        </div>

        <div className="lg:col-span-3">
          <ColumnHeading>Newsletter</ColumnHeading>
          <p className="mt-6 text-sm text-background/65">Subscribe To Our Newsletter</p>
          <form
            className="group mt-5 flex items-center gap-2 rounded-[10px] border border-background/20 px-4 transition-all duration-[350ms] ease-out hover:border-background/40 focus-within:border-accent-light focus-within:bg-background/5"
            onSubmit={(e) => e.preventDefault()}
          >
            <label className="sr-only" htmlFor="newsletter-email">
              Your email
            </label>
            <input
              id="newsletter-email"
              type="email"
              placeholder="Your email"
              className="w-full bg-transparent py-3 text-sm text-background outline-none placeholder:text-background/45"
            />
            <button
              type="submit"
              aria-label="Subscribe to our newsletter"
              className="shrink-0 p-1 text-accent-light transition-transform duration-[350ms] ease-out hover:translate-x-1"
            >
              <Arrow />
            </button>
          </form>
        </div>
      </Container>

      <div className="relative border-t border-background/10">
        <Container className="flex flex-col gap-2 py-7">
          <p className="text-xs tracking-wide text-background/45">
            © 2026 HighReach. All Rights Reserved.
          </p>
        </Container>
      </div>
    </footer>
  );
}
