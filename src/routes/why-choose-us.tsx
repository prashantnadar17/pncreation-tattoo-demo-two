import { createFileRoute } from "@tanstack/react-router";
import { Reveal, PageTransition } from "../components/motion";
import { RoutePending } from "../components/Spinner";
import { ContactActions } from "../components/ContactActions";
import { principles, testimonials } from "../config/content";
import { breadcrumbSchema, site } from "../config/site";
import studioImg from "../assets/studio.jpg";

const title = `Why Choose ${site.legalName} — Safe, Custom Tattoo Work`;
const description = `Experienced artists, sterile single-use setups, premium equipment, custom-only designs and 30 days of aftercare support at ${site.legalName} in ${site.city}.`;

export const Route = createFileRoute("/why-choose-us")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
    links: [{ rel: "canonical", href: "/why-choose-us" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(
          breadcrumbSchema([
            { name: "Home", item: "/" },
            { name: "Why Choose Us", item: "/why-choose-us" },
          ]),
        ),
      },
    ],
  }),
  pendingComponent: RoutePending,
  pendingMs: 0,
  component: WhyChooseUs,
});

function WhyChooseUs() {
  return (
    <PageTransition>
      <section className="border-b border-line">
        <div className="mx-auto grid max-w-[1600px] gap-10 px-5 py-16 sm:px-8 lg:grid-cols-12 lg:py-24">
          <div className="lg:col-span-7">
            <p className="eyebrow">Why Choose Us</p>
            <h1 className="display mt-5 text-[15vw] leading-[0.85] sm:text-[9vw] lg:text-[6.5vw]">
              Care Before
              <br />
              The <span className="text-accent">Needle.</span>
            </h1>
            <p className="mt-7 max-w-lg text-base leading-relaxed text-charcoal">
              A tattoo is permanent, so the standards around it should be boring, strict and
              repeatable. Here is exactly what you get when you sit in our chair.
            </p>
          </div>
          <figure className="lg:col-span-5">
            <img
              src={studioImg}
              alt="Clean, well-lit tattoo studio workspace"
              width={1280}
              height={960}
              className="h-full w-full border border-line object-cover"
            />
          </figure>
        </div>
      </section>

      <section aria-labelledby="reasons" className="border-b border-line">
        <div className="mx-auto max-w-[1600px] px-5 py-16 sm:px-8 lg:py-24">
          <h2 id="reasons" className="display text-4xl sm:text-6xl">
            Six Reasons
          </h2>
          <ul className="mt-12 grid gap-px sm:grid-cols-2 lg:grid-cols-3">
            {principles.map((p, i) => (
              <Reveal as="li" key={p.title} delay={i * 0.05} className="border-t border-line pt-5">
                <p className="display text-5xl text-accent">{p.stat}</p>
                <p className="eyebrow mt-1">{p.statLabel}</p>
                <h3 className="mt-4 text-lg font-medium">{p.title}</h3>
                <p className="mt-2 pb-6 text-sm leading-relaxed text-muted-foreground">{p.body}</p>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <section aria-labelledby="words" className="border-b border-line">
        <div className="mx-auto max-w-[1600px] px-5 py-16 sm:px-8 lg:py-24">
          <h2 id="words" className="display text-4xl sm:text-6xl">
            Client Words
          </h2>
          <div className="mt-12 grid gap-10 md:grid-cols-3">
            {testimonials.map((t, i) => (
              <Reveal as="article" key={t.name} delay={i * 0.08} className="border-t border-line pt-6">
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

      <section className="bg-inverse text-inverse-foreground">
        <div className="mx-auto max-w-[1600px] px-5 py-20 sm:px-8">
          <h2 className="display text-[12vw] leading-[0.85] sm:text-[7vw]">
            Sit With Us<span className="text-accent">.</span>
          </h2>
          <div className="mt-8">
            <ContactActions onDark />
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
