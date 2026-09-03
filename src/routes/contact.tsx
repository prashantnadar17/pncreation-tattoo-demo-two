import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { PageTransition, Reveal } from "../components/motion";
import { RoutePending } from "../components/Spinner";
import {
  breadcrumbSchema,
  directionsHref,
  fullAddress,
  mailtoHref,
  mapEmbedSrc,
  site,
  whatsappHref,
} from "../config/site";

const title = `Contact & Booking — ${site.legalName}, ${site.city}`;
const description = `Book a tattoo or piercing consultation at ${site.legalName}, ${site.street}, ${site.city}. Call, email or message us on WhatsApp.`;

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(
          breadcrumbSchema([
            { name: "Home", item: "/" },
            { name: "Contact", item: "/contact" },
          ]),
        ),
      },
    ],
  }),
  pendingComponent: RoutePending,
  pendingMs: 0,
  component: Contact,
});

const field =
  "mt-2 w-full border border-line bg-transparent px-4 py-3 text-sm outline-none transition-colors focus:border-accent";
const labelClass = "eyebrow block";

function Contact() {
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    setSending(true);

    const body = [
      `Name: ${data.get("name")}`,
      `Email: ${data.get("email")}`,
      `Phone: ${data.get("phone")}`,
      `Service: ${data.get("service")}`,
      "",
      String(data.get("message") ?? ""),
    ].join("\n");

    const href = `mailto:${site.email}?subject=${encodeURIComponent(
      `Booking enquiry — ${data.get("name")}`,
    )}&body=${encodeURIComponent(body)}`;

    window.location.href = href;
    setSending(false);
    setSent(true);
  }

  return (
    <PageTransition>
      <section className="border-b border-line">
        <div className="mx-auto max-w-[1600px] px-5 py-16 sm:px-8 lg:py-24">
          <p className="eyebrow">Contact</p>
          <h1 className="display mt-5 text-[16vw] leading-[0.85] sm:text-[9vw] lg:text-[7vw]">
            Start A
            <br />
            <span className="text-accent">Project.</span>
          </h1>
        </div>
      </section>

      <section className="border-b border-line">
        <div className="mx-auto grid max-w-[1600px] gap-12 px-5 py-16 sm:px-8 lg:grid-cols-12 lg:py-20">
          <div className="lg:col-span-7">
            <h2 className="display text-3xl sm:text-4xl">Enquiry Form</h2>
            <form onSubmit={onSubmit} className="mt-8 grid gap-6 sm:grid-cols-2">
              <div>
                <label className={labelClass} htmlFor="name">
                  Name
                </label>
                <input id="name" name="name" required autoComplete="name" className={field} />
              </div>
              <div>
                <label className={labelClass} htmlFor="email">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  className={field}
                />
              </div>
              <div>
                <label className={labelClass} htmlFor="phone">
                  Phone
                </label>
                <input id="phone" name="phone" type="tel" autoComplete="tel" className={field} />
              </div>
              <div>
                <label className={labelClass} htmlFor="service">
                  Service
                </label>
                <select id="service" name="service" className={field} defaultValue="Custom Tattoo">
                  <option>Custom Tattoo</option>
                  <option>Fine Line</option>
                  <option>Blackwork</option>
                  <option>Realism</option>
                  <option>Cover Up</option>
                  <option>Piercing</option>
                </select>
              </div>
              <div className="sm:col-span-2">
                <label className={labelClass} htmlFor="message">
                  Your idea
                </label>
                <textarea id="message" name="message" rows={5} required className={field} />
              </div>
              <div className="sm:col-span-2 flex flex-wrap items-center gap-4">
                <button
                  type="submit"
                  disabled={sending}
                  className="inline-flex items-center gap-3 border border-inverse bg-inverse px-6 py-4 text-[0.68rem] tracking-[0.22em] uppercase text-inverse-foreground transition-colors hover:border-accent hover:bg-accent hover:text-accent-foreground disabled:opacity-60"
                >
                  {sending && (
                    <span className="h-4 w-4 animate-spin rounded-full border-2 border-inverse-foreground/40 border-t-accent" />
                  )}
                  Send enquiry
                </button>
                <p aria-live="polite" className="text-sm text-muted-foreground">
                  {sent ? "Your email app should now be open with the enquiry ready to send." : ""}
                </p>
              </div>
            </form>
          </div>

          <aside className="lg:col-span-4 lg:col-start-9">
            <h2 className="display text-3xl sm:text-4xl">Studio</h2>
            <ul className="mt-8 border-t border-line text-sm">
              <li className="border-b border-line py-4">
                <p className="eyebrow">Address</p>
                <p className="mt-2">{fullAddress}</p>
              </li>
              <li className="border-b border-line py-4">
                <p className="eyebrow">Phone</p>
                <a href={site.phoneHref} className="mt-2 inline-block hover:text-accent">
                  {site.phone}
                </a>
              </li>
              <li className="border-b border-line py-4">
                <p className="eyebrow">Email</p>
                <a href={mailtoHref} className="mt-2 inline-block hover:text-accent">
                  {site.email}
                </a>
              </li>
              <li className="border-b border-line py-4">
                <p className="eyebrow">WhatsApp</p>
                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-2 inline-block hover:text-accent"
                >
                  Message us
                </a>
              </li>
              <li className="border-b border-line py-4">
                <p className="eyebrow">Hours</p>
                <ul className="mt-2 space-y-1">
                  {site.hours.map((h) => (
                    <li key={h.days} className="flex justify-between gap-4">
                      <span>{h.days}</span>
                      <span className="text-muted-foreground">{h.time}</span>
                    </li>
                  ))}
                </ul>
              </li>
            </ul>
            <a
              href={directionsHref}
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex border border-line px-6 py-3.5 text-[0.68rem] tracking-[0.22em] uppercase transition-colors hover:border-accent hover:text-accent"
            >
              Get directions
            </a>
          </aside>
        </div>
      </section>

      <section aria-label="Studio location map">
        <Reveal className="mx-auto max-w-[1600px] px-5 pb-16 sm:px-8">
          <iframe
            title={`Map showing ${site.legalName} at ${fullAddress}`}
            src={mapEmbedSrc}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="h-[380px] w-full border border-line sm:h-[460px]"
          />
        </Reveal>
      </section>
    </PageTransition>
  );
}
