import { createFileRoute } from "@tanstack/react-router";
import { Reveal, PageTransition } from "../components/motion";
import { RoutePending } from "../components/Spinner";
import { ContactActions } from "../components/ContactActions";
import { artists, certificates, principles, process } from "../config/content";
import { breadcrumbSchema, site } from "../config/site";
import studioImg from "../assets/studio.jpg";
import inkImg from "../assets/hero-ink.jpg";

const title = `About ${site.legalName} — Tattoo Studio in ${site.city}`;
const description = `Founded in ${site.founded}, ${site.legalName} is a ${site.city} tattoo and piercing studio built on custom drawing, sterile practice and unhurried consultation.`;

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
    links: [{ rel: "canonical", href: "/about" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(
          breadcrumbSchema([
            { name: "Home", item: "/" },
            { name: "About", item: "/about" },
          ]),
        ),
      },
    ],
  }),
  pendingComponent: RoutePending,
  pendingMs: 0,
  component: About,
});

function About() {
  return (
    <PageTransition>
      <section className="border-b border-line">
        <div className="mx-auto grid max-w-[1600px] gap-10 px-5 py-16 sm:px-8 lg:grid-cols-12 lg:py-24">
          <div className="lg:col-span-7">
            <p className="eyebrow">About</p>
            <h1 className="display mt-5 text-[16vw] leading-[0.85] sm:text-[9vw] lg:text-[7vw]">
              Drawn,
              <br />
              Not <span className="text-accent">Copied.</span>
            </h1>
            <div className="mt-8 max-w-xl space-y-5 text-base leading-relaxed text-charcoal">
              <p>
                {site.legalName} opened in {site.founded} in {site.city} with one machine, one chair
                and a stubborn rule: nothing leaves the studio that we have already seen on someone
                else's skin.
              </p>
              <p>
                The studio now works across fine line, blackwork, realism, geometric and precision
                piercing. The process has not changed — we draw first, we talk longer than most
                studios, and we only book what we can do well.
              </p>
            </div>
          </div>
          <figure className="lg:col-span-5">
            <img
              src={studioImg}
              alt="Interior of the studio with drawing desk and tattoo chair"
              width={1280}
              height={960}
              className="h-full w-full border border-line object-cover"
            />
          </figure>
        </div>
      </section>

      <section aria-labelledby="values" className="border-b border-line">
        <div className="mx-auto max-w-[1600px] px-5 py-16 sm:px-8 lg:py-24">
          <h2 id="values" className="display text-4xl sm:text-6xl">
            What We Stand For
          </h2>
          <ul className="mt-12 grid gap-px sm:grid-cols-2 lg:grid-cols-3">
            {principles.map((p, i) => (
              <Reveal as="li" key={p.title} delay={i * 0.05} className="border-t border-line pt-5">
                <p className="display text-4xl text-accent">{p.stat}</p>
                <p className="eyebrow mt-1">{p.statLabel}</p>
                <h3 className="mt-4 text-lg font-medium">{p.title}</h3>
                <p className="mt-2 pb-6 text-sm leading-relaxed text-muted-foreground">{p.body}</p>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <section aria-labelledby="how" className="border-b border-line">
        <div className="mx-auto grid max-w-[1600px] gap-10 px-5 py-16 sm:px-8 lg:grid-cols-12 lg:py-24">
          <figure className="lg:col-span-5">
            <img
              src={inkImg}
              alt="Artist tattooing a client's forearm with a rotary machine"
              width={1280}
              height={960}
              loading="lazy"
              className="w-full border border-line object-cover"
            />
          </figure>
          <div className="lg:col-span-6 lg:col-start-7">
            <h2 id="how" className="display text-4xl sm:text-6xl">
              How We Work
            </h2>
            <ol className="mt-10 border-t border-line">
              {process.map((p, i) => (
                <Reveal as="li" key={p.step} delay={i * 0.05} className="border-b border-line py-6">
                  <p className="eyebrow">Step {String(i + 1).padStart(2, "0")}</p>
                  <h3 className="display mt-2 text-3xl">{p.step}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.body}</p>
                </Reveal>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section aria-labelledby="artists" className="border-b border-line">
        <div className="mx-auto max-w-[1600px] px-5 py-16 sm:px-8 lg:py-24">
          <p className="eyebrow">The Artists</p>
          <h2 id="artists" className="display mt-5 text-[12vw] leading-[0.85] sm:text-[6vw]">
            Hands Behind
            <br />
            The <span className="text-accent">Needle.</span>
          </h2>
          <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {artists.map((a, i) => (
              <Reveal as="li" key={a.name} delay={i * 0.06} className="group">
                <figure className="overflow-hidden border border-line">
                  <img
                    src={a.src}
                    alt={a.alt}
                    width={1024}
                    height={1024}
                    loading="lazy"
                    className="aspect-[4/5] w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  />
                </figure>
                <p className="eyebrow mt-5">{a.role}</p>
                <h3 className="display mt-2 text-3xl">{a.name}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{a.bio}</p>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <section aria-labelledby="certificates" className="border-b border-line">
        <div className="mx-auto max-w-[1600px] px-5 py-16 sm:px-8 lg:py-24">
          <div className="grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <p className="eyebrow">Certificates</p>
              <h2 id="certificates" className="display mt-5 text-4xl sm:text-6xl">
                Trained. Licensed. Current.
              </h2>
              <p className="mt-6 max-w-sm text-sm leading-relaxed text-muted-foreground">
                Hygiene and craft credentials are renewed on schedule and displayed in the studio.
                Ask to see any of them during your consultation.
              </p>
            </div>
            <ul className="border-t border-line lg:col-span-8">
              {certificates.map((c, i) => (
                <Reveal
                  as="li"
                  key={c.title}
                  delay={i * 0.04}
                  className="flex flex-wrap items-baseline justify-between gap-x-8 gap-y-1 border-b border-line py-5"
                >
                  <h3 className="text-base font-medium sm:text-lg">{c.title}</h3>
                  <p className="text-sm text-muted-foreground">{c.issuer}</p>
                  <p className="eyebrow w-full sm:w-auto">{c.year}</p>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>
      </section>


      <section className="bg-inverse text-inverse-foreground">
        <div className="mx-auto max-w-[1600px] px-5 py-20 sm:px-8">
          <h2 className="display text-[12vw] leading-[0.85] sm:text-[7vw]">
            Let's Talk<span className="text-accent">.</span>
          </h2>
          <div className="mt-8">
            <ContactActions onDark />
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
