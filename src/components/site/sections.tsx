import { Download } from "lucide-react";
import riyadhArchitecture from "@/assets/riyadh-architecture.jpg";
import aiTransformation from "@/assets/ai-transformation.jpg";
import cyberSecurity from "@/assets/cyber-security.jpg";
import advisoryMeeting from "@/assets/advisory-meeting.jpg";
import { Arrow, Container, Eyebrow, Reveal, SectionLabel } from "./primitives";

/* ------------------------------------------------------------------ HERO */

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden pt-28 pb-24 sm:pt-32 sm:pb-28 lg:pt-40 lg:pb-36"
      style={{ backgroundColor: '#FAFAF8' }}
    >
      <Container>
        <div className="relative mx-auto max-w-[58rem] text-center">
          <Reveal>
            <p className="mb-5 text-[0.75rem] font-medium uppercase tracking-[0.32em] text-foreground sm:mb-6">
              WELCOME TO HIGHREACH
            </p>
          </Reveal>
          <Reveal delay={90}>
            <h1 className="mx-auto max-w-[30ch] text-[2.25rem] font-light leading-[1.1] tracking-[-0.025em] text-foreground sm:max-w-[34ch] sm:text-[2.75rem] lg:max-w-[36ch] lg:text-[3rem] xl:text-[3.5rem]">
              Building Intelligent Organisations
              <br className="hidden sm:block" /> for an AI-Driven World
            </h1>
          </Reveal>
          <Reveal delay={180}>
            <p className="mx-auto mt-8 max-w-[42rem] text-lg leading-[1.7] text-secondary-ink">
              In an era of AI and constant disruption, organisations must become smarter, more
              adaptive and future-ready. HighReach develops the leadership, strategy and
              capabilities needed to thrive in a rapidly changing world.
            </p>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}

/* ------------------------------------------------------------- RESOURCES */

const RESOURCES = [
  { index: "01", title: "Diagnostic Report Structure", sub: "What a CT Scan Delivers" },
  {
    index: "02",
    title: "Three-Tier Architecture",
    sub: "Entry Point Diagnosis Before Intervention",
  },
  { index: "03", title: "Intelligence", sub: "Strategic Intelligence" },
  { index: "04", title: "Capability Overview", sub: "Why LSC Does, and Why it Matters" },
  { index: "05", title: "Cyber Security Practice", sub: "Cyber Capability Built for Complex" },
];

export function Resources() {
  return (
    <section id="resources" className="py-20 lg:py-28" aria-labelledby="resources-heading">
      <Container>
        <Reveal>
          <SectionLabel>Resources</SectionLabel>
          <h2
            id="resources-heading"
            className="mt-6 max-w-[20ch] text-3xl font-semibold leading-[1.08] tracking-[-0.02em] text-foreground sm:text-4xl lg:text-5xl"
          >
            Strategic Intelligence &amp; Capability Resources
          </h2>
        </Reveal>

        <ul className="mt-14 grid gap-px border border-hairline bg-hairline sm:grid-cols-2 lg:grid-cols-3">
          {RESOURCES.map((r, i) => (
            <Reveal as="li" key={r.index} delay={i * 60} className="group bg-background">
              <div className="flex h-full flex-col justify-between p-7 transition-colors duration-300 group-hover:bg-surface lg:p-9">
                <div>
                  <span className="text-xs font-medium tracking-[0.2em] text-accent">{r.index}</span>
                  <h3 className="mt-6 text-xl font-semibold leading-snug tracking-[-0.01em] text-foreground">
                    {r.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-secondary-ink">{r.sub}</p>
                </div>
                <a
                  href="#contact"
                  className="mt-10 inline-flex items-center gap-3 text-sm font-medium text-foreground transition-colors hover:text-accent"
                >
                  <Download className="h-4 w-4" aria-hidden="true" />
                  <span>Download</span>
                  <span className="sr-only"> {r.title}</span>
                  <Arrow className="h-3.5 w-3.5 -translate-x-1 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100" />
                </a>
              </div>
            </Reveal>
          ))}
          <li aria-hidden="true" className="hidden bg-background lg:block" />
        </ul>

      </Container>
    </section>
  );
}

/* ------------------------------------------------------- ASSESSMENT TOOLS */

const TOOLS = ["AI Direction Scan", "Cyber Excellence, Assessment", "Digital, Business Plan"];

export function AssessmentTools() {
  return (
    <section className="bg-surface py-16 lg:py-20" aria-labelledby="tools-heading">
      <Container className="grid gap-10 lg:grid-cols-12 lg:items-center">
        <h2
          id="tools-heading"
          className="text-2xl font-semibold leading-tight tracking-[-0.02em] text-foreground lg:col-span-5 lg:text-3xl"
        >
          Strategic &amp; Digital Assessment Tools
        </h2>
        <ul className="lg:col-span-7 lg:border-l lg:border-hairline lg:pl-12">
          {TOOLS.map((t, i) => (
            <Reveal as="li" key={t} delay={i * 70}>
              <a
                href="#contact"
                className="group flex items-center justify-between border-b border-hairline py-5 first:border-t lg:first:border-t-0"
              >
                <span className="text-lg text-foreground transition-colors group-hover:text-accent lg:text-xl">
                  {t}
                </span>
                <Arrow className="h-5 w-5 text-accent transition-transform duration-300 group-hover:translate-x-1.5" />
              </a>
            </Reveal>
          ))}
        </ul>
      </Container>
    </section>
  );
}

/* ---------------------------------------------------------------- ABOUT */

export function About() {
  return (
    <section id="about" className="py-20 lg:py-28" aria-labelledby="about-heading">
      <Container>
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <Reveal>
              <SectionLabel>About HighReach</SectionLabel>
              <h2
                id="about-heading"
                className="mt-6 text-3xl font-semibold leading-[1.08] tracking-[-0.02em] text-foreground sm:text-4xl lg:text-5xl"
              >
                HighReach Business Solutions
              </h2>
              <p className="mt-8 text-base leading-relaxed text-secondary-ink">
                With world-class expertise, extensive networks and strong partnerships, we develop
                people and organisations across strategy, innovation and leadership. We work with
                business leaders and management teams to overcome challenges, unlock potential and
                create lasting impact.
              </p>
            </Reveal>
          </div>

          <div className="lg:col-span-7">
            <Reveal delay={100}>
              <img
                src={riyadhArchitecture}
                alt="Contemporary Riyadh architecture in daylight"
                loading="lazy"
                width={1600}
                height={1008}
                className="h-64 w-full object-cover sm:h-80 lg:h-96"
              />
            </Reveal>
            <div className="mt-10 grid gap-px bg-hairline sm:grid-cols-2">
              <Reveal delay={140} className="bg-background">
                <div className="h-full pr-0 sm:pr-8">
                  <p className="text-[0.7rem] font-medium uppercase tracking-[0.22em] text-accent">
                    Our Approach
                  </p>
                  <h3 className="mt-4 text-xl font-semibold tracking-[-0.01em] text-foreground">
                    Learning That Drives Action
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-secondary-ink">
                    Our executive development approach combines critical thinking, contemporary
                    education and practical application to enable organisational improvement.
                  </p>
                </div>
              </Reveal>
              <Reveal delay={200} className="bg-background">
                <div className="h-full pt-8 sm:pl-8 sm:pt-0">
                  <p className="text-[0.7rem] font-medium uppercase tracking-[0.22em] text-accent">
                    Our Uniqueness
                  </p>
                  <h3 className="mt-4 text-xl font-semibold tracking-[-0.01em] text-foreground">
                    Expertise Built Around Transformation
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-secondary-ink">
                    We combine leadership facilitation, strategy, technology-enabled learning and
                    problem-based design to deliver impactful transformation programmes.
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
  },
  {
    title: "Cyber Security",
    body: "Advanced cyber security framework and risk management",
    image: cyberSecurity,
    alt: "Cyber security operations centre",
  },
  {
    title: "Advisory Services",
    body: "Advisory Services provide expert advice to support better decisions and growth.",
    image: advisoryMeeting,
    alt: "Executive advisory meeting in a Riyadh office",
  },
];

export function Capability() {
  return (
    <section id="capability" className="bg-surface py-20 lg:py-28" aria-labelledby="capability-heading">
      <Container>
        <Reveal>
          <SectionLabel>Our Capability</SectionLabel>
          <p
            id="capability-heading"
            className="mt-6 max-w-4xl text-xl font-medium leading-[1.45] tracking-[-0.01em] text-foreground sm:text-2xl lg:text-[2rem]"
          >
            Through advisory, capability development, and intelligent platforms, we help
            organisations strengthen leadership, align strategy with execution, and build the systems
            required to perform in an increasingly complex world.
          </p>
        </Reveal>

        <ul className="mt-14 grid gap-8 md:grid-cols-3">
          {CAPABILITIES.map((c, i) => (
            <Reveal as="li" key={c.title} delay={i * 80} className="group">
              <a href="#contact" className="block">
                <div className="overflow-hidden">
                  <img
                    src={c.image}
                    alt={c.alt}
                    loading="lazy"
                    width={1408}
                    height={1008}
                    className="h-56 w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04] lg:h-64"
                  />
                </div>
                <h3 className="mt-6 flex items-center gap-3 text-xl font-semibold tracking-[-0.01em] text-foreground">
                  {c.title}
                  <Arrow className="h-4 w-4 text-accent transition-transform duration-300 group-hover:translate-x-1.5" />
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-secondary-ink">{c.body}</p>
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
  },
  {
    title: "Technology and Telecommunications",
    body: "Digital transformation and innovation strategies for tech companies",
  },
  { title: "Private Sector", body: "Comprehensive business solutions for private sector enterprises" },
  {
    title: "Real Estate",
    body: "Real estate leaders need organisational intelligence built for market complexity — not instinct or convention dressed as strategy.",
  },
  {
    title: "Healthcare Sector",
    body: "Healthcare organisations demand the leadership capability and decision systems designed for a fundamentally different environment.",
  },
  {
    title: "Media Sector",
    body: "The sector demands leaders making high-quality decisions under pressure, not those who react faster to change they failed to see.",
  },
  {
    title: "Logistics Sector",
    body: "In logistics, execution coherence is the decisive competitive advantage separating organisations that perform from those who fail.",
  },
  {
    title: "Aerospace and Defence",
    body: "Strategic consulting for aerospace innovation and defense sector transformation.",
  },
];

export function Industries() {
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
            <p className="max-w-md text-base leading-relaxed text-secondary-ink">
              Specialised expertise across diverse sectors and industries
            </p>
          </div>
        </Reveal>

        <ul className="mt-14 grid gap-px border-y border-hairline bg-hairline md:grid-cols-2">
          {INDUSTRIES.map((ind, i) => (
            <Reveal as="li" key={ind.title} delay={(i % 2) * 70} className="group bg-background">
              <a
                href="#contact"
                className="flex h-full items-start gap-6 p-7 transition-colors duration-300 group-hover:bg-surface lg:p-9"
              >
                <span className="mt-2 h-px w-8 shrink-0 bg-accent transition-all duration-300 group-hover:w-12" />
                <span>
                  <h3 className="text-lg font-semibold tracking-[-0.01em] text-foreground lg:text-xl">
                    {ind.title}
                  </h3>
                  <p className="mt-3 max-w-md text-sm leading-relaxed text-secondary-ink">
                    {ind.body}
                  </p>
                </span>
                <Arrow className="ml-auto mt-1 h-4 w-4 text-accent opacity-0 transition-all duration-300 group-hover:opacity-100" />
              </a>
            </Reveal>
          ))}
        </ul>
      </Container>
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
                <span className="text-xs font-medium tracking-[0.2em] text-accent-light">
                  {s.number}
                </span>
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
                At HighReach, we develop the next generation of leaders and organisations by bringing
                the latest research and thinking into practice. We are always looking for passionate,
                experienced professionals and expert facilitators who are committed to excellence.
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
                Discover how HighReach can support your organisation's leadership and transformation
                journey.
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
                HighReach collaborates with leading partners in executive learning and organisational
                development to create impactful experiences for leaders and organisations.
              </p>
              <h3 className="mt-12 text-xs font-medium uppercase tracking-[0.22em] text-secondary-ink">
                Supported By
              </h3>
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
