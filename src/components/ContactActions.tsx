import { Link } from "@tanstack/react-router";
import { mailtoHref, site, whatsappHref } from "../config/site";

const base =
  "inline-flex items-center justify-center border px-6 py-3.5 text-[0.68rem] tracking-[0.22em] uppercase transition-colors";

export function ContactActions({
  compact = false,
  onDark = false,
}: {
  compact?: boolean;
  onDark?: boolean;
}) {
  const primary = onDark
    ? `${base} border-accent bg-accent text-accent-foreground hover:bg-transparent hover:text-inverse-foreground`
    : `${base} border-inverse bg-inverse text-inverse-foreground hover:border-accent hover:bg-accent hover:text-accent-foreground`;
  const secondary = onDark
    ? `${base} border-inverse-foreground/40 hover:border-accent hover:text-accent`
    : `${base} border-line hover:border-accent hover:text-accent`;

  return (
    <div className="flex flex-wrap gap-3">
      <Link to="/contact" className={primary}>
        Book Appointment
      </Link>
      <a href={whatsappHref} target="_blank" rel="noreferrer" className={secondary}>
        WhatsApp
      </a>
      <a href={site.phoneHref} className={secondary}>
        Call
      </a>
      {!compact && (
        <a href={mailtoHref} className={secondary}>
          Email
        </a>
      )}
    </div>
  );
}
