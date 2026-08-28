import { useEffect, useRef } from "react";
import { Download } from "lucide-react";
import riyadhArchitecture from "@/assets/riyadh-architecture.jpg";
import aiTransformation from "@/assets/ai-transformation.jpg";
import cyberSecurity from "@/assets/cyber-security.jpg";
import advisoryMeeting from "@/assets/advisory-meeting.jpg";
import resDiagnostic from "@/assets/res-diagnostic.jpg";
import resArchitecture from "@/assets/res-architecture.jpg";
import resIntelligence from "@/assets/res-intelligence.jpg";
import resCapability from "@/assets/res-capability.jpg";
import resCyber from "@/assets/res-cyber.jpg";
import aboutExecutives from "@/assets/about-saudi-executives.jpg";
import aboutDetail from "@/assets/about-strategy-detail.jpg";
import industryPublicSector from "@/assets/industry-public-sector.jpg";
import industryTechTelecom from "@/assets/industry-tech-telecom.jpg";
import industryPrivateSector from "@/assets/industry-private-sector.jpg";
import industryRealEstate from "@/assets/industry-real-estate.jpg";
import industryHealthcare from "@/assets/industry-healthcare.jpg";
import industryMedia from "@/assets/industry-media.jpg";
import industryLogistics from "@/assets/industry-logistics.jpg";
import industryAerospace from "@/assets/industry-aerospace.jpg";
import { Arrow, Container, Eyebrow, Reveal, SectionLabel } from "./primitives";

/* ------------------------------------------------------------------ HERO */

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden pt-28 pb-24 sm:pt-32 sm:pb-28 lg:pt-40 lg:pb-36"
    >
      <Container>
        <div className="relative mx-auto max-w-[58rem] text-center">
          <Reveal>
            <p className="mb-5 text-[0.75rem] font-medium uppercase tracking-[0.32em] text-foreground sm:mb-6">
              WELCOME TO HIGHREACH
            </p>
          </Reveal>
          <Reveal delay={90}>
            {/* <h1 className="mx-auto max-w-[30ch] text-[2.25rem] font-light leading-[1.1] tracking-[-0.025em] text-foreground sm:max-w-[34ch] sm:text-[2.75rem] lg:max-w-[36ch] lg:text-[3rem] xl:text-[3.5rem]">
              Building Intelligent Organisations
              <br className="hidden sm:block" /> for an AI-Driven World
            </h1> */}
            <h1 className="mx-auto max-w-[30ch] text-[2rem] font-light leading-[1.1] tracking-[-0.025em] text-foreground sm:max w-[34ch] sm:text-[2.25rem] lg:max-w-[36ch] lg:text-[2.75rem] xl:text-[3rem]">
              Building Intelligent Organisations
              <br className="hidden sm:block" /> for an AI-Driven World
            </h1>
          </Reveal>
          <Reveal delay={180}>
            <p className="mx-auto mt-8 max-w-[42rem] text-lg leading-[1.7] text-secondary-ink">
              In an era of AI and constant disruption, organisations must become smarter, more adaptive and
              future-ready. HighReach develops the leadership, strategy and capabilities needed to thrive in a rapidly
              changing world.
            </p>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}

/* ------------------------------------------------------------- RESOURCES */

const RESOURCES = [
  {
    id: "diagnostic",
    title: "Diagnostic Report Structure",
    sub: "What a CT Scan Delivers",
    image: resDiagnostic,
  },
  {
    id: "architecture",
    title: "Three-Tier Architecture Entry Point",
    sub: "Diagnosis Before Intervention",
    image: resArchitecture,
  },
  { id: "intelligence", title: "Intelligence", sub: "Strategic Intelligence", image: resIntelligence },
  {
    id: "capability",
    title: "Capability Overview",
    sub: "Why LSC Does, and Why it Matters",
    image: resCapability,
  },
  {
    id: "cyber",
    title: "Cyber Security Practice",
    sub: "Cyber Capability Built for Complex",
    image: resCyber,
  },
];

/** One report-cover style panel with a premium visual. */
function ResourcePanel({ item, focal = false }: { item: (typeof RESOURCES)[number]; focal?: boolean }) {
  return (
    <a
      href="#contact"
      className={
        "group relative flex h-[21rem] w-[17.5rem] shrink-0 snap-center flex-col overflow-hidden rounded-2xl border border-hairline bg-background sm:w-[19rem] " +
        "shadow-[0_10px_30px_-18px_rgba(5,52,98,0.35)] transition-all duration-[550ms] ease-[cubic-bezier(0.16,1,0.3,1)] " +
        "hover:-translate-y-2 hover:border-accent hover:shadow-[0_28px_55px_-24px_rgba(5,52,98,0.45)] " +
        (focal ? " lg:h-[22.5rem] lg:w-[19.5rem]" : " lg:w-[18rem]")
      }
    >
      <div className="relative h-[9.5rem] shrink-0 overflow-hidden bg-surface lg:h-[10.5rem]">
        <img
          src={item.image}
          alt=""
          aria-hidden="true"
          loading="lazy"
          width={1024}
          height={768}
          className="h-full w-full object-cover transition-transform duration-[600ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.05] group-hover:-translate-y-1"
        />
        <span
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-foreground/[0.06] transition-opacity duration-[600ms] group-hover:bg-accent/[0.10]"
        />
      </div>

      <div className="relative flex flex-1 flex-col justify-between p-6">
        <div>
          <h3 className="max-w-[20ch] text-lg font-medium leading-snug tracking-[-0.01em] text-foreground">
            {item.title}
          </h3>
          <p className="mt-2 max-w-[28ch] text-xs leading-relaxed text-secondary-ink">{item.sub}</p>
        </div>
        <span className="mt-5 inline-flex items-center gap-2 text-[0.78rem] font-medium text-foreground transition-colors duration-300 group-hover:text-accent">
          <Download className="h-3.5 w-3.5" aria-hidden="true" />
          Download
          <span className="sr-only"> {item.title}</span>
          <Arrow className="h-3 w-3 transition-transform duration-500 ease-out group-hover:translate-x-1.5" />
        </span>
      </div>
    </a>
  );
}

export function Resources() {
  /** vertical offsets create the layered editorial rhythm on desktop */
  const offsets = ["lg:translate-y-6", "lg:translate-y-12", "lg:translate-y-0", "lg:translate-y-10", "lg:translate-y-4"];
  const layers = ["lg:z-10", "lg:z-20", "lg:z-30", "lg:z-20", "lg:z-10"];

  const group = (copy: number) => (
    <div className="flex shrink-0 items-start gap-8 lg:gap-10" aria-hidden={copy > 0 ? "true" : undefined}>
      {RESOURCES.map((r, i) => (
        <div key={`${copy}-${r.id}`} className={`shrink-0 ${offsets[i]} ${layers[i]} hover:z-40`}>
          <ResourcePanel item={r} focal={i === 2} />
        </div>
      ))}
      <span aria-hidden="true" className="w-16 shrink-0" />
    </div>
  );

  return (
    <section id="resources" className="relative -mt-5 bg-background pb-14 pt-0 sm:-mt-6 lg:-mt-8 lg:pb-16 lg:pt-0" aria-label="Resources">
      {/* mobile / tablet: swipeable carousel */}
      <div className="lg:hidden">
        <div className="flex snap-x snap-mandatory gap-8 overflow-x-auto px-6 pb-6 pt-2">
          {RESOURCES.map((r) => (
            <ResourcePanel key={r.id} item={r} />
          ))}
          <span aria-hidden="true" className="w-1 shrink-0" />
        </div>
      </div>

      {/* desktop: layered composition on a slow, seamless marquee */}
      <Reveal className="hidden lg:block">
        <div className="marquee-viewport overflow-hidden pb-8 pt-2">
          <div className="marquee-track flex w-max items-start pl-12">
            {group(0)}
            {group(1)}
          </div>
        </div>
      </Reveal>
    </section>
  );
}





/* ------------------------------------------------------- ASSESSMENT TOOLS */

const TOOLS = [
  { label: "AI Direction Scan", href: "https://londonstrategycentre.com/ai-direction-scan" },
  { label: "Cyber Excellence, Assessment", href: "https://londonstrategycentre.com/cyber-assessment" },
  { label: "Digital, Business Plan", href: "https://londonstrategycentre.com/venture-framework" },
];

export function AssessmentTools() {
  return (
    <section className="py-10 lg:py-12" aria-label="Strategic & Digital Assessment Tools">
      <Container>
        <Reveal>
          <nav className="mx-auto w-full max-w-4xl rounded-[1rem] border border-hairline bg-background p-1 shadow-[0_2px_8px_rgba(5,52,98,0.05),0_10px_28px_rgba(5,52,98,0.09)]">
            <ul className="flex overflow-x-auto sm:overflow-visible">
              {TOOLS.map((tool) => (
                <li
                  key={tool.label}
                  className="flex shrink-0 border-b border-hairline last:border-b-0 sm:flex-1 sm:border-b-0 sm:border-r sm:last:border-r-0"
                >
                  <a
                    href={tool.href}
                    className="flex w-full items-center justify-center whitespace-nowrap px-5 py-3 text-sm font-medium text-foreground transition-colors duration-300 hover:text-accent sm:text-[0.95rem]"
                  >
                    {tool.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </Reveal>
      </Container>
    </section>
  );
}



/* ---------------------------------------------------------------- ABOUT */

export function About() {
  return (
    <section id="about" className="overflow-hidden py-20 lg:py-28" aria-labelledby="about-heading">
      <Container>
        <div className="grid items-center gap-14 lg:grid-cols-12 lg:gap-20">
          {/* Visual */}
          <Reveal className="order-2 lg:order-1 lg:col-span-5">
            <div className="group relative">
              <div className="pointer-events-none absolute -left-6 -top-6 hidden h-24 w-24 border-l border-t border-accent/40 lg:block" />
              <div className="relative overflow-hidden rounded-2xl border border-hairline shadow-[0_18px_50px_rgba(5,52,98,0.12)]">
                <img
                  src={aboutExecutives}
                  alt="Senior Saudi executives in strategic discussion in a modern Riyadh boardroom"
                  loading="lazy"
                  width={1200}
                  height={1504}
                  className="h-[26rem] w-full object-cover transition-transform duration-700 ease-out will-change-transform group-hover:scale-[1.03] sm:h-[32rem] lg:h-[38rem]"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-foreground/25 via-transparent to-transparent" />
              </div>
              <div className="absolute -bottom-8 -right-4 hidden w-52 overflow-hidden rounded-xl border border-hairline bg-background p-1.5 shadow-[0_14px_40px_rgba(5,52,98,0.14)] sm:block lg:-right-10 lg:w-60">
                <img
                  src={aboutDetail}
                  alt="Saudi business leader reviewing a strategy document"
                  loading="lazy"
                  width={928}
                  height={720}
                  className="h-28 w-full rounded-lg object-cover lg:h-32"
                />
              </div>
            </div>
          </Reveal>

          {/* Content */}
          <div className="order-1 lg:order-2 lg:col-span-7">
            <Reveal>
              <SectionLabel>About HighReach</SectionLabel>
              <h2
                id="about-heading"
                className="mt-6 text-3xl font-semibold leading-[1.08] tracking-[-0.02em] text-foreground sm:text-4xl lg:text-[3.25rem]"
              >
                HighReach Business Solutions
              </h2>
            </Reveal>

            <div className="mt-8 border-l border-accent/40 pl-6 sm:pl-8">
              <Reveal delay={90}>
                <p className="max-w-[46rem] text-base leading-[1.8] text-secondary-ink">
                  With world-class expertise, extensive networks and strong partnerships, we develop people and
                  organisations across strategy, innovation and leadership.
                </p>
              </Reveal>
              <Reveal delay={150}>
                <p className="mt-5 max-w-[46rem] text-base leading-[1.8] text-secondary-ink">
                  We work with business leaders and management teams to overcome challenges, unlock potential and
                  create lasting impact.
                </p>
              </Reveal>
            </div>

            <div className="mt-12 grid gap-10 sm:grid-cols-2 sm:gap-px sm:bg-hairline">
              <Reveal delay={220} className="sm:bg-background">
                <div className="h-full sm:pr-8">
                  <p className="text-[0.7rem] font-medium uppercase tracking-[0.22em] text-accent">Our Approach</p>
                  <h3 className="mt-4 text-xl font-semibold tracking-[-0.01em] text-foreground lg:text-2xl">
                    Learning That Drives Action
                  </h3>
                  <p className="mt-4 text-sm leading-[1.75] text-secondary-ink">
                    Our executive development approach combines critical thinking, contemporary education and practical
                    application to enable organisational improvement.
                  </p>
                </div>
              </Reveal>
              <Reveal delay={300} className="sm:bg-background">
                <div className="h-full sm:pl-8">
                  <p className="text-[0.7rem] font-medium uppercase tracking-[0.22em] text-accent">Our Uniqueness</p>
                  <h3 className="mt-4 text-xl font-semibold tracking-[-0.01em] text-foreground lg:text-2xl">
                    Expertise Built Around Transformation
                  </h3>
                  <p className="mt-4 text-sm leading-[1.75] text-secondary-ink">
                    We combine leadership facilitation, strategy, technology-enabled learning and problem-based design
                    to deliver impactful transformation programmes.
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}


/* ------------------------------------------------------------ CAPABILITY */

const CAPABILITIES = [
  {
    title: "Artificial Intelligence",
    body: "Comprehensive AI strategy and implementation certification",
    image: aiTransformation,
    alt: "Analysts reviewing AI performance dashboards",
    kind: "ai" as const,
  },
  {
    title: "Cyber Security",
    body: "Advanced cyber security framework and risk management",
    image: cyberSecurity,
    alt: "Cyber security operations centre",
    kind: "cyber" as const,
  },
  {
    title: "Advisory Services",
    body: "Advisory Services provide expert advice to support better decisions and growth.",
    image: advisoryMeeting,
    alt: "Executive advisory meeting in a Riyadh office",
    kind: "advisory" as const,
  },
];

/** Minimal navy/blue linework layered over each capability visual. */
function CapabilityGraphic({ kind }: { kind: "ai" | "cyber" | "advisory" }) {
  const common = "absolute inset-0 h-full w-full text-accent/70";
  if (kind === "ai") {
    return (
      <svg viewBox="0 0 400 240" fill="none" aria-hidden="true" className={common} preserveAspectRatio="none">
        <g stroke="currentColor" strokeWidth="0.75" opacity="0.9">
          <path d="M60 190 L140 120 L230 160 L320 70" />
          <path d="M60 190 L150 60 L230 160" />
          <path d="M150 60 L320 70" />
        </g>
        {[
          [60, 190],
          [140, 120],
          [150, 60],
          [230, 160],
          [320, 70],
        ].map(([x, y]) => (
          <circle key={`${x}-${y}`} cx={x} cy={y} r="3.5" fill="currentColor" />
        ))}
      </svg>
    );
  }
  if (kind === "cyber") {
    return (
      <svg viewBox="0 0 400 240" fill="none" aria-hidden="true" className={common} preserveAspectRatio="none">
        <g stroke="currentColor" strokeWidth="0.75" opacity="0.9">
          <path d="M200 40 L280 75 V140 C280 178 240 198 200 208 C160 198 120 178 120 140 V75 Z" />
          <path d="M200 62 L258 88 V140 C258 168 228 183 200 191 C172 183 142 168 142 140 V88 Z" opacity="0.6" />
          <path d="M20 120 H120 M280 120 H380" />
          <path d="M20 90 H100 M300 150 H380" opacity="0.5" />
        </g>
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 400 240" fill="none" aria-hidden="true" className={common} preserveAspectRatio="none">
      <g stroke="currentColor" strokeWidth="0.75" opacity="0.9">
        <rect x="40" y="150" width="60" height="50" />
        <rect x="130" y="110" width="60" height="90" />
        <rect x="220" y="70" width="60" height="130" />
        <rect x="310" y="30" width="50" height="170" />
        <path d="M40 200 H360" />
      </g>
    </svg>
  );
}

export function Capability() {
  return (
    <section id="capability" className="bg-surface py-20 lg:py-28" aria-labelledby="capability-heading">
      <Container>
        <div className="grid gap-10 lg:grid-cols-12 lg:items-start lg:gap-16">
          <Reveal className="lg:col-span-5">
            <Eyebrow>CAPABILITY</Eyebrow>
            <h2
              id="capability-heading"
              className="mt-5 text-[2.25rem] font-light leading-[1.05] tracking-[-0.02em] text-foreground sm:text-[2.75rem] lg:text-[3.25rem]"
            >
              Our Capability
            </h2>
          </Reveal>
          <Reveal delay={120} className="lg:col-span-7 lg:border-l lg:border-accent/40 lg:pl-10">
            <p className="max-w-2xl text-base leading-[1.7] text-secondary-ink sm:text-lg">
              Through advisory, capability development, and intelligent platforms, we help organisations strengthen
              leadership, align strategy with execution, and build the systems required to perform in an increasingly
              complex world.
            </p>
          </Reveal>
        </div>

        <ul className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {CAPABILITIES.map((c, i) => (
            <Reveal
              as="li"
              key={c.title}
              delay={200 + i * 130}
              className={`group ${i === 1 ? "sm:translate-y-5 lg:translate-y-6" : ""}`}
            >
              <a
                href="#contact"
                className="relative block h-[22rem] w-full overflow-hidden rounded-[0.875rem] border border-hairline shadow-[0_1px_2px_rgba(5,52,98,0.04)] transition-all duration-500 ease-out hover:-translate-y-1.5 hover:border-accent/60 hover:shadow-[0_18px_40px_rgba(5,52,98,0.10)]"
              >
                <img
                  src={c.image}
                  alt={c.alt}
                  loading="lazy"
                  width={1408}
                  height={1008}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-[600ms] ease-out group-hover:scale-[1.04]"
                />
                <span
                  aria-hidden="true"
                  className="absolute inset-0 bg-[linear-gradient(180deg,transparent_0%,rgba(5,52,98,0.42)_70%,rgba(5,52,98,0.72)_100%)] opacity-80 transition-opacity duration-500 group-hover:opacity-100"
                />
                <div className="absolute inset-x-0 bottom-0 flex flex-col justify-end px-5 pt-5 pb-4 lg:px-6 lg:pt-6 lg:pb-5">
                  <h3 className="text-2xl font-semibold tracking-[-0.01em] text-white transition-transform duration-500 ease-out sm:text-3xl">{c.title}</h3>
                  <p className="max-h-0 max-w-[30ch] overflow-hidden text-sm leading-relaxed text-white/90 opacity-0 transition-all duration-500 ease-out group-hover:mt-3 group-hover:max-h-24 group-hover:opacity-100">
                    {c.body}
                  </p>
                </div>
              </a>
            </Reveal>
          ))}
        </ul>
      </Container>
    </section>
  );
}


/* ------------------------------------------------------------ INDUSTRIES */

const INDUSTRIES = [
  {
    title: "Public Sector",
    body: "Public administration optimization and digital government solutions",
    image: industryPublicSector,
    alt: "Modern civic government architecture representing the public sector",
  },
  {
    title: "Technology and Telecommunications",
    body: "Digital transformation and innovation strategies for tech companies",
    image: industryTechTelecom,
    alt: "Glowing data network and fibre optics representing technology and telecommunications",
  },
  {
    title: "Private Sector",
    body: "Comprehensive business solutions for private sector enterprises",
    image: industryPrivateSector,
    alt: "Executives collaborating in a modern corporate boardroom representing the private sector",
  },
  {
    title: "Real Estate",
    body: "Real estate leaders need organisational intelligence built for market complexity — not instinct or convention dressed as strategy.",
    image: industryRealEstate,
    alt: "Premium commercial skyscraper architecture representing real estate development",
  },
  {
    title: "Healthcare Sector",
    body: "Healthcare organisations demand the leadership capability and decision systems designed for a fundamentally different environment.",
    image: industryHealthcare,
    alt: "Modern hospital corridor representing the healthcare sector",
  },
  {
    title: "Media Sector",
    body: "The sector demands leaders making high-quality decisions under pressure, not those who react faster to change they failed to see.",
    image: industryMedia,
    alt: "Broadcast production control room representing the media sector",
  },
  {
    title: "Logistics Sector",
    body: "In logistics, execution coherence is the decisive competitive advantage separating organisations that perform from those who fail.",
    image: industryLogistics,
    alt: "Container port with cargo cranes at dusk representing the logistics sector",
  },
  {
    title: "Aerospace and Defence",
    body: "Strategic consulting for aerospace innovation and defense sector transformation.",
    image: industryAerospace,
    alt: "Jet aircraft on a runway at dusk representing aerospace and defence",
  },
];

export function Industries() {
  const trackRef = useRef<HTMLUListElement | null>(null);
  const rafRef = useRef<number | null>(null);
  const timerRef = useRef<number | null>(null);
  const pausedRef = useRef(false);

  const animateTo = (target: number, onDone?: () => void) => {
    const el = trackRef.current;
    if (!el) return;
    if (rafRef.current) return; // an animation is already running — ignore
    const start = el.scrollLeft;
    const max = el.scrollWidth - el.clientWidth;
    const end = Math.max(0, Math.min(max, target));
    const dist = end - start;
    if (Math.abs(dist) < 1) return;
    const duration = 900;
    const t0 = performance.now();
    const step = (now: number) => {
      const p = Math.min(1, (now - t0) / duration);
      // smooth ease-in-out
      const eased = p < 0.5 ? 4 * p * p * p : 1 - Math.pow(-2 * p + 2, 3) / 2;
      el.scrollLeft = start + dist * eased;
      if (p < 1) {
        rafRef.current = requestAnimationFrame(step);
      } else {
        rafRef.current = null;
        onDone?.();
      }
    };
    rafRef.current = requestAnimationFrame(step);
  };

  const move = (dir: 1 | -1, onDone?: () => void) => {
    const el = trackRef.current;
    if (!el) return;
    if (rafRef.current) return; // prevent rapid clicks from jumping
    const first = el.querySelector("li");
    const second = el.querySelector("li:nth-child(2)");
    const stepPx =
      first && second
        ? (second as HTMLElement).offsetLeft - (first as HTMLElement).offsetLeft
        : el.clientWidth / 4;
    const max = el.scrollWidth - el.clientWidth;
    // gentle loop: wrap at the ends instead of stalling
    if (dir === 1 && el.scrollLeft >= max - 2) return animateTo(0, onDone);
    if (dir === -1 && el.scrollLeft <= 2) return animateTo(max, onDone);
    animateTo(el.scrollLeft + dir * stepPx, onDone);
  };

  // Auto-scroll: advance one card every ~3.5s, paused on hover / touch / reduced motion
  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;

    const schedule = () => {
      if (timerRef.current) window.clearTimeout(timerRef.current);
      timerRef.current = window.setTimeout(tick, 3500);
    };
    const tick = () => {
      if (!pausedRef.current) move(1, schedule);
      else schedule();
    };
    schedule();

    return () => {
      if (timerRef.current) window.clearTimeout(timerRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => () => {
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    if (timerRef.current) window.clearTimeout(timerRef.current);
  }, []);

  return (
    <section id="industries" className="py-20 lg:py-28" aria-labelledby="industries-heading">
      <Container>
        <Reveal>
          <SectionLabel>Our Industries</SectionLabel>
          <div className="mt-6 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <h2
              id="industries-heading"
              className="text-3xl font-semibold leading-[1.08] tracking-[-0.02em] text-foreground sm:text-4xl lg:text-5xl"
            >
              Our Industries
            </h2>
            <div className="flex items-end justify-between gap-8 lg:items-center">
              <p className="max-w-md text-base leading-relaxed text-secondary-ink">
                Specialised expertise across diverse sectors and industries
              </p>
              <div className="hidden shrink-0 gap-3 lg:flex">
                <button
                  type="button"
                  aria-label="Previous industries"
                  onClick={() => move(-1)}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-hairline text-foreground transition-colors duration-300 hover:border-accent hover:text-accent"
                >
                  <Arrow className="h-4 w-4 rotate-180" />
                </button>
                <button
                  type="button"
                  aria-label="Next industries"
                  onClick={() => move(1)}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-hairline text-foreground transition-colors duration-300 hover:border-accent hover:text-accent"
                >
                  <Arrow className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>

      <div className="mt-14">
        <Container>
          <ul
            ref={trackRef}
            onMouseEnter={() => { pausedRef.current = true; }}
            onMouseLeave={() => { pausedRef.current = false; }}
            onTouchStart={() => { pausedRef.current = true; }}
            onTouchEnd={() => { pausedRef.current = false; }}
            className="flex snap-x snap-mandatory gap-5 overflow-x-auto pb-4 [-ms-overflow-style:none] [scrollbar-width:none] lg:gap-6 [&::-webkit-scrollbar]:hidden"
          >
            {INDUSTRIES.map((ind, i) => (
              <Reveal
                as="li"
                key={ind.title}
                delay={Math.min(i, 4) * 70}
                className="w-[85%] shrink-0 snap-start sm:w-[46%] md:w-[36%] lg:w-[23%]"
              >
                <div className="group relative block h-[24rem] overflow-hidden rounded-2xl shadow-[0_4px_16px_rgba(5,52,98,0.08)] transition-all duration-[800ms] ease-out hover:-translate-y-1 hover:shadow-[0_14px_36px_rgba(5,52,98,0.18)] sm:h-[26rem] lg:h-[28rem]">
                  <img
                    src={ind.image}
                    alt={ind.alt}
                    loading="lazy"
                    width={1024}
                    height={1024}
                    className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-[800ms] ease-out group-hover:scale-[1.045]"
                  />
                  <span
                    aria-hidden="true"
                    className="absolute inset-0 bg-gradient-to-t from-[#053462]/95 via-[#053462]/35 to-transparent transition-opacity duration-[800ms] ease-out group-hover:opacity-90"
                  />
                  <span
                    aria-hidden="true"
                    className="absolute inset-0 bg-[#053462]/0 transition-colors duration-[800ms] ease-out group-hover:bg-[#053462]/15"
                  />
                  <span className="absolute inset-x-0 bottom-0 flex flex-col justify-end p-6 lg:p-7">
                    <h3 className="text-xl font-semibold leading-tight tracking-[-0.01em] text-white transition-transform duration-[800ms] ease-out lg:text-2xl">
                      {ind.title}
                    </h3>
                    <span className="grid max-h-0 overflow-hidden opacity-0 transition-all duration-[800ms] ease-out group-hover:max-h-32 group-hover:opacity-100">
                      <p className="pt-2.5 text-sm leading-relaxed text-white/85 transition-transform duration-[800ms] ease-out">{ind.body}</p>
                    </span>
                    <span className="mt-4 flex items-center gap-2 text-white/90">
                      <span className="block h-px w-7 bg-accent transition-all duration-[800ms] ease-out group-hover:w-10" />
                      <Arrow className="h-4 w-4 text-accent transition-transform duration-[800ms] ease-out group-hover:translate-x-1.5" />
                    </span>
                  </span>
                </div>
              </Reveal>
            ))}
          </ul>
        </Container>
      </div>
    </section>
  );
}


/* -------------------------------------------------------------- SERVICES */

const SERVICES = [
  {
    number: "01",
    title: "CT Scan",
    body: "An AI-enabled diagnostic, mapping how leaders think, decide, and execute, then surfacing the systemic constraints on performance.",
  },
  {
    number: "02",
    title: "Agentic Leadership",
    body: "Producing measurable shifts in decision quality and execution coherence, not just competency scores or attendance on a programme.",
  },
  {
    number: "03",
    title: "Cybernetics Transformation",
    body: "Redesigning decision architecture, sensing systems, and governance so your organisation continuously senses, adapts, and performs.",
  },
];

export function Services() {
  return (
    <section id="services" className="bg-foreground py-20 text-background lg:py-28" aria-labelledby="services-heading">
      <Container>
        <Reveal>
          <div className="flex items-center gap-4">
            <span className="h-px w-10 bg-accent-light" aria-hidden="true" />
            <span className="text-[0.7rem] font-medium uppercase tracking-[0.22em] text-background/70">
              Our Services
            </span>
          </div>
          <div className="mt-6 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <h2
              id="services-heading"
              className="text-3xl font-semibold leading-[1.08] tracking-[-0.02em] sm:text-4xl lg:text-5xl"
            >
              Our Services
            </h2>
            <p className="max-w-md text-base leading-relaxed text-background/70">
              Specialised expertise across diverse sectors and industries
            </p>
          </div>
        </Reveal>

        <ul className="mt-14 grid gap-px bg-background/15 lg:grid-cols-3">
          {SERVICES.map((s, i) => (
            <Reveal as="li" key={s.title} delay={i * 80} className="group bg-foreground">
              <a href="#contact" className="flex h-full flex-col p-8 lg:p-10">
                <span className="text-xs font-medium tracking-[0.2em] text-accent-light">{s.number}</span>
                <h3 className="mt-8 text-2xl font-semibold tracking-[-0.015em]">{s.title}</h3>
                <p className="mt-4 text-sm leading-relaxed text-background/70">{s.body}</p>
                <Arrow className="mt-10 h-5 w-5 text-accent-light transition-transform duration-300 group-hover:translate-x-1.5" />
              </a>
            </Reveal>
          ))}
        </ul>
      </Container>
    </section>
  );
}

/* --------------------------------------------------------------- CAREERS */

export function Careers() {
  return (
    <section id="careers" className="py-20 lg:py-28" aria-labelledby="careers-heading">
      <Container>
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Reveal>
              <SectionLabel>Interested in Working With Us?</SectionLabel>
              <h2
                id="careers-heading"
                className="mt-6 text-3xl font-semibold leading-[1.08] tracking-[-0.02em] text-foreground sm:text-4xl lg:text-5xl"
              >
                Interested in Working With Us?
              </h2>
            </Reveal>
          </div>
          <div className="lg:col-span-7 lg:border-l lg:border-hairline lg:pl-16">
            <Reveal delay={100}>
              <p className="text-base leading-relaxed text-secondary-ink lg:text-lg">
                At HighReach, we develop the next generation of leaders and organisations by bringing the latest
                research and thinking into practice. We are always looking for passionate, experienced professionals and
                expert facilitators who are committed to excellence.
              </p>
              <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
                <a
                  href="mailto:info@HighReach.sa"
                  className="group inline-flex items-center justify-between gap-6 bg-accent px-6 py-4 text-sm font-medium text-accent-foreground transition-colors duration-300 hover:bg-foreground"
                >
                  Work With HighReach
                  <Arrow className="transition-transform duration-300 group-hover:translate-x-1" />
                </a>
                <a
                  href="mailto:info@HighReach.sa"
                  className="text-sm text-secondary-ink underline-offset-4 transition-colors hover:text-accent hover:underline"
                >
                  info@HighReach.sa
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}

/* --------------------------------------------------------------- CONTACT */

export function Contact() {
  return (
    <section id="contact" className="bg-surface py-20 lg:py-28" aria-labelledby="contact-heading">
      <Container>
        <div className="grid gap-12 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <Reveal>
              <SectionLabel>Get in Touch</SectionLabel>
              <h2
                id="contact-heading"
                className="mt-6 max-w-[14ch] text-4xl font-semibold leading-[1.04] tracking-[-0.025em] text-foreground sm:text-5xl lg:text-6xl"
              >
                Let's Start a Conversation
              </h2>
              <p className="mt-8 max-w-xl text-base leading-relaxed text-secondary-ink lg:text-lg">
                Discover how HighReach can support your organisation's leadership and transformation journey.
              </p>
            </Reveal>
          </div>
          <div className="lg:col-span-5">
            <Reveal delay={120}>
              <dl className="border-t border-hairline">
                <div className="flex items-center justify-between border-b border-hairline py-4">
                  <dt className="text-xs uppercase tracking-[0.2em] text-secondary-ink">Email</dt>
                  <dd>
                    <a
                      className="text-base text-foreground transition-colors hover:text-accent"
                      href="mailto:info@HighReach.sa"
                    >
                      info@HighReach.sa
                    </a>
                  </dd>
                </div>
                <div className="flex items-center justify-between border-b border-hairline py-4">
                  <dt className="text-xs uppercase tracking-[0.2em] text-secondary-ink">Phone</dt>
                  <dd>
                    <a
                      className="text-base text-foreground transition-colors hover:text-accent"
                      href="tel:+966566653356"
                    >
                      +966 56 665 3356
                    </a>
                  </dd>
                </div>
              </dl>
              <a
                href="mailto:info@HighReach.sa"
                className="group mt-8 inline-flex w-full items-center justify-between gap-6 bg-accent px-6 py-4 text-sm font-medium text-accent-foreground transition-colors duration-300 hover:bg-foreground sm:w-auto"
              >
                Contact HighReach
                <Arrow className="transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}

/* -------------------------------------------------------------- PARTNERS */

export function Partners() {
  return (
    <section id="partners" className="py-20 lg:py-28" aria-labelledby="partners-heading">
      <Container>
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Reveal>
              <Eyebrow>OUR PARTNERS</Eyebrow>
              <h2
                id="partners-heading"
                className="mt-6 text-3xl font-semibold leading-[1.08] tracking-[-0.02em] text-foreground sm:text-4xl"
              >
                Trusted Partnerships. Shared Success.
              </h2>
            </Reveal>
          </div>
          <div className="lg:col-span-7 lg:pl-16">
            <Reveal delay={100}>
              <p className="text-base leading-relaxed text-secondary-ink lg:text-lg">
                HighReach collaborates with leading partners in executive learning and organisational development to
                create impactful experiences for leaders and organisations.
              </p>
              <h3 className="mt-12 text-xs font-medium uppercase tracking-[0.22em] text-secondary-ink">Supported By</h3>
              <ul className="mt-6 grid gap-px bg-hairline sm:grid-cols-2">
                {[0, 1, 2, 3].map((i) => (
                  <li
                    key={i}
                    aria-hidden="true"
                    className="group flex h-24 items-center justify-center bg-background px-6"
                  >
                    <span className="h-8 w-28 bg-hairline transition-colors duration-300 group-hover:bg-accent/25" />
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
