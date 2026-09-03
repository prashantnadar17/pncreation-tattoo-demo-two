import { createFileRoute } from "@tanstack/react-router";
import { Reveal, PageTransition } from "../components/motion";
import { RoutePending } from "../components/Spinner";
import { ContactActions } from "../components/ContactActions";
import { services } from "../config/content";
import { breadcrumbSchema, site } from "../config/site";
import serviceImg from "../assets/work-geometric.jpg";

const title = `Services — Tattoos & Piercing | ${site.legalName}`;
const description = `Custom tattoos, fine line, minimal, blackwork, realism, geometric, cover ups, touch ups and professional ear & body piercing in ${site.city}.`;

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
    links: [{ rel: "canonical", href: "/services" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(
          breadcrumbSchema([
            { name: "Home", item: "/" },
            { name: "Services", item: "/services" },
          ]),
        ),
      },
    ],
  }),
  pendingComponent: RoutePending,
  pendingMs: 0,
  component: Services,
});

function Services() {
  return (
    <PageTransition>
      <section className="border-b border-line">
        <div className="mx-auto grid max-w-[1600px] items-end gap-10 px-5 py-16 sm:px-8 lg:grid-cols-12 lg:py-24">
          <div className="lg:col-span-7">
            <p className="eyebrow">Services</p>
            <h1 className="display mt-5 text-[16vw] leading-[0.85] sm:text-[9vw] lg:text-[7vw]">
              Ten Ways
              <br />
              To <span className="text-accent">Mark</span> It
            </h1>
            <p className="mt-7 max-w-lg text-base leading-relaxed text-charcoal">
              Every service starts with a consultation and a drawing. Pricing depends on size,
              placement and detail — we quote honestly after we've seen the idea.
            </p>
          </div>
          <figure className="lg:col-span-5">
            <img
              src={serviceImg}
              alt="Geometric mandala tattoo on a forearm"
              width={1024}
              height={1280}
              className="max-h-[420px] w-full border border-line object-cover"
            />
          </figure>
        </div>
      </section>

      <section aria-labelledby="all-services">
        <div className="mx-auto max-w-[1600px] px-5 py-16 sm:px-8 lg:py-24">
          <h2 id="all-services" className="sr-only">
            All services
          </h2>
          <ul className="border-t border-line">
            {services.map((s, i) => (
              <Reveal as="li" key={s.n} delay={i * 0.03} y={12}>
                <article className="grid gap-4 border-b border-line py-8 md:grid-cols-12 md:items-baseline">
                  <span className="eyebrow md:col-span-1">{s.n}</span>
                  <h3 className="display text-3xl md:col-span-4 sm:text-4xl">{s.name}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground md:col-span-5">
                    {s.desc}
                  </p>
                  <p className="eyebrow md:col-span-2 md:text-right">{s.session}</p>
                </article>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-inverse text-inverse-foreground">
        <div className="mx-auto max-w-[1600px] px-5 py-20 sm:px-8">
          <h2 className="display text-[12vw] leading-[0.85] sm:text-[7vw]">
            Book A Consult<span className="text-accent">.</span>
          </h2>
          <div className="mt-8">
            <ContactActions onDark />
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
