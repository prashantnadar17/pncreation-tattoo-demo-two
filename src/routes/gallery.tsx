import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { PageTransition, useMotionSafe } from "../components/motion";
import { RoutePending } from "../components/Spinner";
import { ContactActions } from "../components/ContactActions";
import { works, type WorkCategory } from "../config/content";
import { breadcrumbSchema, site } from "../config/site";

const title = `Gallery — Tattoo & Piercing Portfolio | ${site.legalName}`;
const description = `Portfolio of fine line, blackwork, realism, minimal, geometric tattoos and piercing work from ${site.legalName} in ${site.city}.`;

const filters = ["All", "Fine Line", "Blackwork", "Realism", "Minimal", "Geometric", "Piercing"] as const;

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
    links: [{ rel: "canonical", href: "/gallery" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(
          breadcrumbSchema([
            { name: "Home", item: "/" },
            { name: "Gallery", item: "/gallery" },
          ]),
        ),
      },
    ],
  }),
  pendingComponent: RoutePending,
  pendingMs: 0,
  component: Gallery,
});

function Gallery() {
  const safe = useMotionSafe();
  const [active, setActive] = useState<(typeof filters)[number]>("All");
  const visible = works.filter((w) => active === "All" || w.category === (active as WorkCategory));

  return (
    <PageTransition>
      <section className="border-b border-line">
        <div className="mx-auto max-w-[1600px] px-5 py-16 sm:px-8 lg:py-24">
          <p className="eyebrow">Gallery</p>
          <h1 className="display mt-5 text-[16vw] leading-[0.85] sm:text-[9vw] lg:text-[7vw]">
            Healed
            <br />
            <span className="text-accent">Work.</span>
          </h1>

          <div className="mt-10 flex flex-wrap gap-2" role="group" aria-label="Filter portfolio">
            {filters.map((f) => (
              <button
                key={f}
                type="button"
                aria-pressed={active === f}
                onClick={() => setActive(f)}
                className={`border px-4 py-2 text-[0.68rem] tracking-[0.2em] uppercase transition-colors ${
                  active === f
                    ? "border-inverse bg-inverse text-inverse-foreground"
                    : "border-line hover:border-accent hover:text-accent"
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section aria-label="Portfolio images">
        <div className="mx-auto max-w-[1600px] px-5 py-14 sm:px-8">
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
            <AnimatePresence mode="popLayout">
              {visible.map((w, i) => (
                <motion.figure
                  key={`${w.label}-${w.category}`}
                  layout
                  initial={safe ? { opacity: 0, y: 16 } : false}
                  animate={safe ? { opacity: 1, y: 0 } : {}}
                  exit={safe ? { opacity: 0, y: -10 } : {}}
                  transition={{ duration: 0.4, delay: i * 0.03 }}
                  className="group relative overflow-hidden border border-line"
                >
                  <img
                    src={w.src}
                    alt={w.alt}
                    width={1024}
                    height={1280}
                    loading="lazy"
                    className="h-[360px] w-full object-cover transition-transform duration-700 group-hover:scale-[1.04] sm:h-[420px]"
                  />
                  <figcaption className="absolute inset-x-0 bottom-0 flex items-center justify-between gap-3 bg-inverse/85 px-4 py-3 text-inverse-foreground">
                    <span className="text-[0.68rem] tracking-[0.22em] uppercase">{w.label}</span>
                    <span className="text-[0.62rem] tracking-[0.2em] uppercase text-accent">
                      {w.category}
                    </span>
                  </figcaption>
                </motion.figure>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>

      <section className="bg-inverse text-inverse-foreground">
        <div className="mx-auto max-w-[1600px] px-5 py-20 sm:px-8">
          <h2 className="display text-[12vw] leading-[0.85] sm:text-[7vw]">
            Your Turn<span className="text-accent">.</span>
          </h2>
          <div className="mt-8">
            <ContactActions onDark />
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
