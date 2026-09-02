import { Link } from "@tanstack/react-router";
import {
  directionsHref,
  fullAddress,
  mailtoHref,
  site,
  whatsappHref,
} from "../config/site";

export function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto grid max-w-[1600px] gap-10 px-5 py-14 sm:px-8 md:grid-cols-[1.2fr_1fr_1fr]">
        <div>
          <p className="display text-4xl sm:text-5xl">
            {site.name.split(" ")[0]}
            <span className="text-accent">.</span>
          </p>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
            {site.tagline}
          </p>
        </div>

        <div>
          <h2 className="eyebrow">Studio</h2>
          <address className="mt-4 space-y-1 text-sm not-italic leading-relaxed text-charcoal">
            <span className="block">{site.street}</span>
            <span className="block">
              {site.city} {site.postalCode}
            </span>
          </address>
          <a
            href={directionsHref}
            target="_blank"
            rel="noreferrer"
            className="mt-3 inline-block border-b border-accent text-sm text-accent"
          >
            Get Directions
          </a>
          <ul className="mt-5 space-y-1 text-sm text-muted-foreground">
            {site.hours.map((h) => (
              <li key={h.days}>
                {h.days} — {h.time}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="eyebrow">Reach us</h2>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <a href={site.phoneHref} className="hover:text-accent">
                Call {site.phone}
              </a>
            </li>
            <li>
              <a href={whatsappHref} target="_blank" rel="noreferrer" className="hover:text-accent">
                WhatsApp
              </a>
            </li>
            <li>
              <a href={mailtoHref} className="hover:text-accent">
                {site.email}
              </a>
            </li>
          </ul>
          <ul className="mt-5 flex flex-wrap gap-x-5 gap-y-2 text-[0.68rem] tracking-[0.2em] uppercase text-muted-foreground">
            <li>
              <Link to="/services" className="hover:text-accent">
                Services
              </Link>
            </li>
            <li>
              <Link to="/gallery" className="hover:text-accent">
                Gallery
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-accent">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-line px-5 py-5 text-[0.68rem] tracking-[0.18em] uppercase text-muted-foreground sm:px-8">
        © {new Date().getFullYear()} {site.legalName} — {fullAddress}
      </div>
    </footer>
  );
}
