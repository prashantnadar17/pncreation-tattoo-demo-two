import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Reveal, TextReveal, PageTransition, useMotionSafe } from "../components/motion";
import { ContactActions } from "../components/ContactActions";
import { RoutePending } from "../components/Spinner";
import { homeServices, principles, process, testimonials, works } from "../config/content";
import { breadcrumbSchema, site } from "../config/site";
import heroInk from "../assets/hero-ink.jpg";

const title = `${site.legalName} — Custom Tattoo & Piercing Studio in ${site.city}`;
const description = `Custom tattoos, fine line, blackwork, realism and professional piercing in ${site.city}. Designed around you at ${site.legalName}.`;

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(breadcrumbSchema([{ name: "Home", item: "/" }])),
      },
    ],
  }),
  component: Home,
  pendingComponent: RoutePending,
});

function Home() {
  const safe = useMotionSafe();

  return (
    <PageTransition>
      {/* Opening editorial composition */}
      <section className="border-b border-line">
        <div className="mx-auto grid min-h-[82vh] max-w-[1600px] grid-cols-1 px-5 pt-10 pb-8 sm:px-8 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-8">
            <p className="eyebrow">{site.legalName.toUpperCase()}</p>
            <h1 className="display mt-6 text-[22vw] leading-[0.82] sm:text-[16vw] lg:text-[11.5vw]">
              <TextReveal lines={["Tattoo", "Is"]} />
              <span className="text-accent">
                <TextReveal lines={["Art."]} />
              </span>
            </h1>

            <div className="relative mt-8 h-40 overflow-hidden border border-line sm:h-56 lg:h-64">
              <motion.div
                className="absolute inset-0"
                initial={safe ? { scaleX: 0 } : false}
                animate={safe ? { scaleX: 1 } : undefined}
                style={{ transformOrigin: "left" }}
                transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
              >
                <img
                  src={heroInk}
                  alt="Black and grey tattoo work in progress at Noir Ink Studio"
                  className="h-full w-full object-cover grayscale"
                />
              </motion.div>
              <div className="ink-blades absolute top-0 right-0 h-full w-1/3 border-l border-line bg-background/20" />
              <p className="absolute bottom-3 left-4 text-[0.6875rem] tracking-[0.28em] uppercase text-inverse-foreground mix-blend-difference">
                Ink · Line · Skin
              </p>
            </div>
          </div>

          <div className="flex flex-col justify-between gap-8 pt-10 lg:col-span-4 lg:pt-24">
            <Reveal delay={0.2}>
              <p className="font-serif text-2xl leading-snug sm:text-3xl">
                Custom tattoos &amp; professional piercing.
                <span className="block text-muted-foreground">Designed around you.</span>
              </p>
              <div className="mt-7">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-3 border border-inverse bg-inverse px-6 py-4 text-[0.68rem] tracking-[0.22em] uppercase text-inverse-foreground transition-colors hover:border-accent hover:bg-accent hover:text-accent-foreground"
                >
                  Start a project <span aria-hidden="true">→</span>
                </Link>
              </div>
            </Reveal>
            <p className="eyebrow flex items-center gap-3">
              Scroll to explore
              <motion.span
                aria-hidden="true"
                animate={safe ? { y: [0, 6, 0] } : undefined}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              >
                ↓
              </motion.span>
            </p>
          </div>
        </div>
      </section>

      {/* 01 The studio */}
      <section aria-labelledby="studio" className="border-b border-line">
        <div className="mx-auto grid max-w-[1600px] gap-10 px-5 py-20 sm:px-8 lg:grid-cols-12 lg:py-28">
          <div className="lg:col-span-6">
            <p className="display text-6xl text-accent sm:text-8xl">01</p>
            <h2 id="studio" className="display mt-4 text-4xl sm:text-6xl">
              The Studio
            </h2>
            <Reveal className="mt-7 max-w-xl space-y-5 text-base leading-relaxed text-charcoal">
              <p>
                {site.legalName} opened in {site.founded} as a small drawing room with one machine and a
                stubborn rule: nothing leaves the studio that we have seen on someone else's skin.
              </p>
              <p>
                Today the studio works across fine line, blackwork, realism and precision piercing —
                still one client at a time, still drawing before we ink. Consultations are unhurried,
                stations are single-use, and every project starts on paper.
              </p>
            </Reveal>
          </div>
          <div className="lg:col-span-5 lg:col-start-8 lg:border-l lg:border-line lg:pl-10">
            <Reveal delay={0.1}>
              <blockquote className="font-serif text-3xl leading-tight italic sm:text-4xl">
                “A tattoo should look like it was drawn for that body and no other.”
              </blockquote>
              <p className="eyebrow mt-6">Resident artist — {site.city}</p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 02 What we do */}
      <section aria-labelledby="what-we-do" className="border-b border-line">
        <div className="mx-auto max-w-[1600px] px-5 py-20 sm:px-8 lg:py-28">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="display text-6xl text-accent sm:text-8xl">02</p>
              <h2 id="what-we-do" className="display mt-4 text-4xl sm:text-6xl">
                What We Do
              </h2>
            </div>
            <Link to="/services" className="eyebrow border-b border-line pb-1 hover:text-accent">
              All services →
            </Link>
          </div>

          <ul className="mt-12 border-t border-line">
            {homeServices.map((s, i) => (
              <Reveal as="li" key={s.n} delay={i * 0.05} y={12}>
                <Link
                  to="/services"
                  className="group flex items-center gap-5 border-b border-line py-6 transition-colors hover:bg-inverse hover:text-inverse-foreground sm:gap-10 sm:py-8"
                >
                  <span className="eyebrow w-8 shrink-0 group-hover:text-accent">{s.n}</span>
                  <span className="display flex-1 text-3xl sm:text-5xl">{s.name}</span>
                  <span
                    aria-hidden="true"
                    className="text-xl transition-transform duration-300 group-hover:translate-x-2"
                  >
                    →
                  </span>
                </Link>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* 03 Process */}
      <section aria-labelledby="process" className="border-b border-line">
        <div className="mx-auto max-w-[1600px] px-5 py-20 sm:px-8 lg:py-28">
          <p className="display text-6xl text-accent sm:text-8xl">03</p>
          <h2 id="process" className="display mt-4 text-4xl sm:text-6xl">
            The Process
          </h2>

          <ol className="mt-14 grid gap-px border-t border-line md:grid-cols-4 md:border-t-0">
            {process.map((p, i) => (
              <Reveal
                as="li"
                key={p.step}
                delay={i * 0.08}
                className="relative border-b border-line py-8 md:border-t md:border-b-0 md:border-l md:px-6 md:first:border-l-0 md:first:pl-0"
              >
                <span className="absolute -top-2 left-0 hidden h-4 w-4 rounded-full border border-accent bg-background md:block md:left-6 md:first:left-0" />
                <p className="eyebrow">Step {String(i + 1).padStart(2, "0")}</p>
                <h3 className="display mt-3 text-3xl">{p.step}</h3>
                <p className="mt-3 max-w-sm text-sm leading-relaxed text-muted-foreground">{p.body}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* 04 Why us */}
      <section aria-labelledby="why-us" className="border-b border-line">
        <div className="mx-auto max-w-[1600px] px-5 py-20 sm:px-8 lg:py-28">
          <div className="grid gap-8 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <p className="display text-6xl text-accent sm:text-8xl">04</p>
              <h2 id="why-us" className="display mt-4 text-5xl leading-[0.85] sm:text-7xl">
                Why
                <br />
                Us
              </h2>
              <Link to="/why-choose-us" className="eyebrow mt-6 inline-block border-b border-line pb-1 hover:text-accent">
                The full case →
              </Link>
            </div>
            <ul className="grid gap-px lg:col-span-7 sm:grid-cols-2">
              {principles.map((p, i) => (
                <Reveal as="li" key={p.title} delay={i * 0.05} className="border-t border-line pt-5">
                  <h3 className="text-lg font-medium">{p.title}</h3>
                  <p className="mt-2 pb-5 text-sm leading-relaxed text-muted-foreground">{p.body}</p>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* 05 Gallery */}
      <section aria-labelledby="gallery" className="border-b border-line">
        <div className="mx-auto max-w-[1600px] px-5 py-20 sm:px-8 lg:py-28">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="display text-6xl text-accent sm:text-8xl">05</p>
              <h2 id="gallery" className="display mt-4 text-4xl sm:text-6xl">
                Gallery
              </h2>
            </div>
            <Link to="/gallery" className="eyebrow border-b border-line pb-1 hover:text-accent">
              Full portfolio →
            </Link>
          </div>

          <div className="mt-12 grid auto-rows-[120px] grid-cols-1 gap-3 sm:auto-rows-[110px] sm:grid-cols-6">
            {works.slice(0, 6).map((w, i) => (
              <Reveal
                key={w.label}
                delay={i * 0.05}
                className={`${w.span} row-span-2 border border-line`}
              >
                <figure className="relative h-full w-full overflow-hidden">
                  <img
                    src={w.src}
                    alt={w.alt}
                    loading="lazy"
                    className="h-full w-full object-cover grayscale transition-all duration-500 hover:scale-[1.03] hover:grayscale-0"
                  />
                  <figcaption className="absolute bottom-2 left-3 text-[0.62rem] tracking-[0.24em] uppercase text-inverse-foreground mix-blend-difference">
                    {w.label}
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 06 Client words */}
      <section aria-labelledby="client-words" className="border-b border-line">
        <div className="mx-auto max-w-[1600px] px-5 py-20 sm:px-8 lg:py-28">
          <p className="display text-6xl text-accent sm:text-8xl">06</p>
          <h2 id="client-words" className="display mt-4 text-4xl sm:text-6xl">
            Client Words
          </h2>

          <div className="mt-14 grid gap-10 md:grid-cols-3">
            {testimonials.map((t, i) => (
              <Reveal
                as="article"
                key={t.name}
                delay={i * 0.08}
                className={
                  i === 1
                    ? "border-t-2 border-accent pt-6 md:mt-14"
                    : "border-t border-line pt-6"
                }
              >
                <blockquote className="font-serif text-xl leading-snug sm:text-2xl">
                  “{t.quote}”
                </blockquote>
                <footer className="mt-5">
                  <p className="text-sm font-medium">{t.name}</p>
                  <p className="eyebrow mt-1">{t.meta}</p>
                </footer>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 07 CTA */}
      <section aria-labelledby="cta" className="bg-inverse text-inverse-foreground">
        <div className="mx-auto max-w-[1600px] px-5 py-24 sm:px-8">
          <p className="eyebrow">07 / Booking</p>
          <h2 id="cta" className="display mt-5 text-[15vw] leading-[0.85] sm:text-[9vw]">
            Ready to
            <br />
            Start<span className="text-accent">?</span>
          </h2>
          <div className="mt-10">
            <ContactActions compact />
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
