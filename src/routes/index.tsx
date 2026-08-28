import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import {
  About,
  AssessmentTools,
  Capability,
  Careers,
  Hero,
  Industries,
  Partners,
  Resources,
  Services,
} from "@/components/site/sections";

const TITLE = "HighReach | Executive Consulting & Transformation, Riyadh";
const DESCRIPTION =
  "HighReach develops the leadership, strategy and capabilities organisations need to thrive in an AI-driven world — advisory, AI, cyber security and transformation from Riyadh.";

export const Route = createFileRoute("/")({
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
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:bg-accent focus:px-4 focus:py-2 focus:text-sm focus:text-accent-foreground"
      >
        Skip to content
      </a>
      <Header />
      <main id="main">
        <Hero />
        <Resources />
        <AssessmentTools />
        <About />
        <Capability />
        <Industries />
        <Services />
        <Careers />
        <Partners />
      </main>
      <Footer />
    </div>
  );
}
