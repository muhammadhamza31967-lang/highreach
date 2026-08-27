import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Arrow, Container } from "./primitives";
import { cn } from "@/lib/utils";

const NAV = [
  { label: "Home", href: "#top" },
  { label: "About Us", href: "#about" },
  { label: "Artificial Intelligence", href: "#capability" },
  { label: "Cyber Security", href: "#capability" },
  { label: "Advisory Services", href: "#services" },
  { label: "Press Release", href: "#resources" },
  { label: "Contact", href: "#contact" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 bg-background/95 backdrop-blur-sm transition-shadow duration-300",
        scrolled ? "border-b border-hairline" : "border-b border-transparent",
      )}
    >
      <div className="hidden border-b border-hairline lg:block">
        <Container className="flex h-9 items-center justify-end gap-6 text-xs text-secondary-ink">
          <a className="transition-colors hover:text-accent" href="tel:+966566653356">
            +966 56 665 3356
          </a>
          <span className="h-3 w-px bg-hairline" aria-hidden="true" />
          <a className="transition-colors hover:text-accent" href="mailto:info@HighReach.sa">
            info@HighReach.sa
          </a>
        </Container>
      </div>

      <Container className="flex h-16 items-center justify-between lg:h-[4.5rem]">
        <a href="#top" className="group flex items-baseline gap-2" aria-label="HighReach home">
          <span className="text-xl font-semibold tracking-tight text-foreground">HighReach</span>
          <span className="h-1.5 w-1.5 translate-y-[-1px] bg-accent transition-transform duration-300 group-hover:translate-x-1" />
        </a>

        <nav aria-label="Primary" className="hidden xl:block">
          <ul className="flex items-center gap-7">
            {NAV.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="relative py-2 text-sm text-secondary-ink transition-colors hover:text-foreground after:absolute after:inset-x-0 after:bottom-0 after:h-px after:origin-left after:scale-x-0 after:bg-accent after:transition-transform after:duration-300 hover:after:scale-x-100"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="#contact"
            className="hidden items-center gap-2 bg-accent px-5 py-2.5 text-sm font-medium text-accent-foreground transition-colors duration-300 hover:bg-foreground sm:inline-flex"
          >
            Apply Now
            <Arrow className="h-3.5 w-3.5" />
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            className="inline-flex h-10 w-10 items-center justify-center border border-hairline text-foreground transition-colors hover:border-accent hover:text-accent xl:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </Container>

      <div
        id="mobile-nav"
        hidden={!open}
        className="border-t border-hairline bg-background xl:hidden"
      >
        <Container className="py-4">
          <ul className="flex flex-col">
            {NAV.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-between border-b border-hairline py-3.5 text-base text-foreground"
                >
                  {item.label}
                  <Arrow className="text-accent" />
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-5 flex flex-col gap-1 text-sm text-secondary-ink">
            <a href="tel:+966566653356">+966 56 665 3356</a>
            <a href="mailto:info@HighReach.sa">info@HighReach.sa</a>
          </div>
        </Container>
      </div>
    </header>
  );
}
