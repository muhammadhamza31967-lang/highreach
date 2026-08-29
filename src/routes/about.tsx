import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { Arrow, Container, Eyebrow, Reveal, SectionLabel } from "@/components/site/primitives";
import aboutHero from "@/assets/about-hero-riyadh.jpg";
import aboutHeroVideo from "@/assets/about-hero-video.mp4.asset.json";
import aboutSystems from "@/assets/about-systems.jpg";
import resDiagnostic from "@/assets/res-diagnostic.jpg";
import aiTransformation from "@/assets/ai-transformation.jpg";
import cyberSecurity from "@/assets/cyber-security.jpg";
import advisoryMeeting from "@/assets/advisory-meeting.jpg";
import aboutDetail from "@/assets/about-strategy-detail.jpg";

const TITLE = "About HighReach | Capability Transformation Partner, Riyadh";
const DESCRIPTION =
  "HighReach helps executives and organisations unlock their full potential in preparation for the future world of work — system-level capability transformation from Riyadh.";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AboutPage,
});

const PRINCIPLES = [
  {
    heading: "System-level, not individual-level",
    content:
      "The assumption in organisational development is that improving people improves performance, but performance only improves when the system supports it through effective governance, decision making, execution, and human AI integration.",
    image: aboutSystems,
  },
  {
    heading: "Diagnostic intelligence before every intervention",
    content:
      "HighReach uses structured organisational diagnostics and AI-enabled insight to identify decision gaps, execution barriers, and systemic constraints, ensuring every intervention addresses the factors shaping long-term performance.",
    image: resDiagnostic,
  },
  {
    heading: "AI-augmented, not AI-dependent",
    content:
      "HighReach helps organisations build governed, measurable, and sustainable human AI capability through clear accountability, phased adoption, and practical integration within real operating environments.",
    image: aiTransformation,
  },
  {
    heading: "Built for complexity, not optimised for simplicity",
    content:
      "HighReach supports defence, government, and enterprise organisations operating in high-stakes environments where strategic alignment, cross-functional execution, and organisational resilience drive long-term success.",
    image: cyberSecurity,
  },
  {
    heading: "Partnership, not prescription",
    content:
      "HighReach works alongside leadership teams to deliver practical organisational change, embedding expertise within real business challenges to create sustainable transformation, stronger execution, and lasting organisational ownership.",
    image: advisoryMeeting,
  },
];

function AboutPage() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-background text-foreground">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:bg-accent focus:px-4 focus:py-2 focus:text-sm focus:text-accent-foreground"
      >
        Skip to content
      </a>
      <Header />
      <main id="main">
        {/* HERO */}
        <section className="relative isolate flex min-h-[560px] items-center overflow-hidden pt-28 pb-10 sm:min-h-[600px] sm:pt-32 lg:h-[640px] lg:min-h-[620px] lg:max-h-[680px] lg:pt-36 lg:pb-14">
          {/* Fallback background image / colour (visible while video loads) */}
          <div
            aria-hidden="true"
            className="absolute inset-0 z-0 bg-[#053462] bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${aboutHero})` }}
          />
          <video
            autoPlay
            loop
            muted
            playsInline
            poster={aboutHero}
            aria-hidden="true"
            className="absolute inset-0 z-[1] h-full w-full object-cover"
          >
            <source src={aboutHeroVideo.url} type="video/mp4" />
          </video>
          {/* Subtle dark/blue readability overlay */}
          <div
            aria-hidden="true"
            className="absolute inset-0 z-[2] bg-gradient-to-br from-[#053462]/80 via-[#053462]/55 to-[#1480AE]/30"
          />

          <Container className="relative z-10">
            <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-12">
              <Reveal className="lg:col-span-7 xl:col-span-6">
                <Eyebrow className="text-white/80">About us</Eyebrow>
                <span
                  aria-hidden="true"
                  className="mt-5 block h-0.5 w-16 bg-accent"
                />
                <h1 className="mt-6 text-[clamp(2.5rem,6.5vw,4.75rem)] font-semibold leading-[1.0] tracking-[-0.03em] text-white">
                  HighReach
                </h1>
                <p className="mt-6 max-w-xl text-base leading-[1.85] text-white/90 sm:text-lg">
                  Helping executives and organisations unlock their full potential in preparation
                  for the future world of work.
                </p>
              </Reveal>
            </div>
          </Container>
        </section>

        {/* SECTION 1 */}
        <section className="relative overflow-hidden py-14 sm:py-16 lg:py-20">
          {/* Abstract strategy/system visual layer */}
          <div className="pointer-events-none absolute inset-0" aria-hidden="true">
            {/* architectural grid lines */}
            <div className="absolute inset-y-0 left-1/2 hidden w-px bg-gradient-to-b from-transparent via-foreground/[0.05] to-transparent lg:block" />
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-foreground/[0.06] to-transparent" />
            {/* soft blue gradient field */}
            <div className="absolute -bottom-40 left-1/2 h-[24rem] w-[52rem] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(20,128,174,0.08),transparent)] blur-2xl" />
            {/* subtle circular forms — left side only */}
            <div className="absolute -left-28 top-6 h-64 w-64 rounded-full border border-foreground/[0.05]" />
            <div className="absolute -left-14 top-20 h-36 w-36 rounded-full border border-accent/15" />
          </div>

          <Container className="relative">
            <div className="grid gap-10 lg:grid-cols-12 lg:items-start lg:gap-14">
              <Reveal className="lg:col-span-5 lg:-mt-2">
                <span className="block h-0.5 w-14 rounded-full bg-accent" />
                <h2 className="mt-5 text-[clamp(2rem,4.6vw,3.5rem)] font-semibold leading-[1.06] tracking-[-0.025em] text-foreground">
                  We Transform How Organisations Think, Decide, and Execute
                </h2>
                <p className="mt-5 text-[clamp(0.95rem,1.55vw,1.35rem)] font-semibold leading-[1.35] tracking-[-0.01em] text-accent lg:mt-6">
                  HighReach exists to close that gap.
                </p>
              </Reveal>
              <Reveal delay={120} className="lg:col-span-6 lg:col-start-7 lg:mt-9">
                <p className="max-w-xl text-base leading-[1.9] text-secondary-ink sm:text-[1.05rem]">
                  Most organisations have capable people. The problem is not individual performance,
                  it is the system those people operate within. When decision architecture is poorly
                  designed, when strategy dilutes as it passes through organisational layers, when
                  execution fragments across functions and geographies, capability at the individual
                  level fails to translate into performance at the system level. The gap compounds
                  over time. Transformation programmes come and go. The underlying system remains
                  unchanged.
                </p>
              </Reveal>
            </div>
          </Container>
        </section>

        {/* SECTION 2 */}
        <section className="bg-surface py-12 sm:py-14 lg:py-20">
          <Container>
            <div className="grid items-stretch gap-8 lg:grid-cols-12 lg:gap-12">
              <Reveal className="flex flex-col justify-center lg:col-span-7">
                <h2 className="max-w-2xl text-[clamp(1.75rem,4vw,3rem)] font-semibold leading-[1.1] tracking-[-0.02em] text-foreground">
                  HighReach is your capability transformation partner
                </h2>
                <p className="mt-5 max-w-2xl text-base leading-[1.95] text-secondary-ink sm:text-[1.05rem]">
                  The central premise of HighReach's work is that measurable organisational
                  performance improvement requires a system-level intervention, not a training
                  programme, a strategy report, or a technology implementation. It requires
                  redesigning how the organisation senses its environment, how decisions are made
                  and communicated, how execution is governed, and how capability compounds across
                  time. That is what HighReach builds.
                </p>
              </Reveal>
              <Reveal delay={120} className="lg:col-span-5 lg:h-full">
                <div className="group relative h-[16rem] min-h-0 overflow-hidden rounded-[18px] bg-white sm:h-[20rem] lg:h-full">
                  <img
                    src={aboutDetail}
                    alt="Executive strategy session mapping organisational decision architecture"
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.03]"
                  />
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 rounded-[18px] ring-1 ring-inset ring-foreground/10"
                  />
                </div>
              </Reveal>
            </div>
          </Container>
        </section>

        {/* MISSION / VISION */}
        <section className="py-16 sm:py-20 lg:py-28">
          <Container>
            <div className="relative grid gap-8 border-l border-accent/30 pl-6 sm:pl-10 lg:grid-cols-12 lg:gap-14">
              <Reveal className="lg:col-span-5">
                <Eyebrow>Direction</Eyebrow>
                <h2 className="mt-5 text-[clamp(1.9rem,4.5vw,3.5rem)] font-semibold leading-[1.05] tracking-[-0.02em] text-foreground">
                  Mission / Vision
                </h2>
              </Reveal>
              <Reveal delay={100} className="lg:col-span-7">
                <p className="text-base leading-[1.95] text-secondary-ink sm:text-[1.05rem]">
                  Our mission is to empower individuals and organisations through strategic thinking,
                  leadership excellence, and innovation that drives sustainable growth, while our
                  vision is to become a globally recognised centre of excellence that develops
                  future-ready leaders who create meaningful and lasting impact.
                </p>
              </Reveal>
            </div>
          </Container>
        </section>

        {/* PRINCIPLES */}
        <section className="bg-surface py-16 sm:py-20 lg:py-28">
          <Container>
            <Reveal>
              <SectionLabel>How we work</SectionLabel>
            </Reveal>
            <div className="mt-10 flex flex-col gap-12 lg:mt-14 lg:gap-16">
              {PRINCIPLES.map((p, i) => (
                <Reveal key={p.heading} delay={60}>
                  <article
                    className={`grid items-center gap-7 border-t border-hairline pt-10 lg:grid-cols-12 lg:gap-14 ${
                      i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
                    }`}
                  >
                    <div className="lg:col-span-7">
                      <span className="text-[0.7rem] font-medium uppercase tracking-[0.22em] text-accent">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <h3 className="mt-4 max-w-xl text-[clamp(1.4rem,3vw,2.15rem)] font-semibold leading-[1.15] tracking-[-0.015em] text-foreground">
                        {p.heading}
                      </h3>
                      <p className="mt-5 max-w-2xl text-base leading-[1.9] text-secondary-ink">
                        {p.content}
                      </p>
                    </div>
                    <div className="lg:col-span-5">
                      <div className="group overflow-hidden rounded-[16px] bg-white">
                        <img
                          src={p.image}
                          alt={p.heading}
                          loading="lazy"
                          className="h-[13rem] w-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.03] sm:h-[16rem] lg:h-[18rem]"
                        />
                      </div>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          </Container>
        </section>

        {/* FINAL CTA */}
        <section className="py-16 sm:py-20 lg:py-28">
          <Container>
            <Reveal>
              <div className="relative overflow-hidden rounded-[24px] bg-accent-light px-6 py-14 text-center sm:px-10 lg:px-16 lg:py-20">
                <div aria-hidden="true" className="pointer-events-none absolute inset-0">
                  <div className="cta-aurora absolute -left-24 -top-24 h-[26rem] w-[26rem] rounded-full bg-accent/10 blur-3xl" />
                  <div className="cta-aurora absolute -bottom-32 -right-24 h-[28rem] w-[28rem] rounded-full bg-foreground/[0.06] blur-3xl" />
                </div>
                <div className="relative mx-auto max-w-3xl">
                  <h2 className="text-[clamp(1.75rem,4.5vw,3rem)] font-semibold leading-[1.1] tracking-[-0.02em] text-foreground">
                    Contact the HighReach Team
                  </h2>
                  <p className="mt-7 text-base leading-[1.9] text-secondary-ink">
                    For leadership teams navigating the gap between strategic intent and
                    organisational performance, whether the challenge is decision quality under
                    complexity, strategy-to-execution alignment, or building the systems that
                    sustain capability at scale, HighReach provides the diagnostic rigour, the
                    system-level perspective, and the embedded partnership that structural change
                    requires.
                  </p>
                  <p className="mt-6 text-base leading-[1.9] text-secondary-ink">
                    To discuss how HighReach's work applies to your organisation's specific context,
                    contact the team.
                  </p>
                  <a
                    href="mailto:info@HighReach.sa"
                    className="group mt-10 inline-flex max-w-full items-center justify-center gap-3 rounded-full bg-foreground px-7 py-4 text-[0.78rem] font-semibold uppercase tracking-[0.18em] text-white transition-colors duration-[400ms] ease-out hover:bg-accent sm:px-9"
                  >
                    Contact the team
                    <Arrow className="transition-transform duration-[400ms] group-hover:translate-x-1" />
                  </a>
                </div>
              </div>
            </Reveal>
          </Container>
        </section>
      </main>
      <Footer />
    </div>
  );
}
