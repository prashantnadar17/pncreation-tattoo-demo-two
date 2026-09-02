import { Link } from "@tanstack/react-router";
import { mailtoHref, site, whatsappHref } from "../config/site";

const base =
  "inline-flex items-center justify-center border px-6 py-3.5 text-[0.68rem] tracking-[0.22em] uppercase transition-colors";

export function ContactActions({ compact = false }: { compact?: boolean }) {
  return (
    <div className="flex flex-wrap gap-3">
      <Link
        to="/contact"
        className={`${base} border-inverse bg-inverse text-inverse-foreground hover:border-accent hover:bg-accent hover:text-accent-foreground`}
      >
        Book Appointment
      </Link>
      <a
        href={whatsappHref}
        target="_blank"
        rel="noreferrer"
        className={`${base} border-line hover:border-accent hover:text-accent`}
      >
        WhatsApp
      </a>
      <a href={site.phoneHref} className={`${base} border-line hover:border-accent hover:text-accent`}>
        Call
      </a>
      {!compact && (
        <a href={mailtoHref} className={`${base} border-line hover:border-accent hover:text-accent`}>
          Email
        </a>
      )}
    </div>
  );
}
