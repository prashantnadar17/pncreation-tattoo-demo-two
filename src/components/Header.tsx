import { Link } from "@tanstack/react-router";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { site } from "../config/site";
import { ThemeToggle } from "./theme";
import { useMotionSafe } from "./motion";

const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/why-choose-us", label: "Why Choose Us" },
  { to: "/gallery", label: "Gallery" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  const safe = useMotionSafe();
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        buttonRef.current?.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  const linkClass =
    "text-[0.72rem] tracking-[0.22em] uppercase text-charcoal transition-colors hover:text-accent";

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-background/90 backdrop-blur-sm">
      <div className="mx-auto flex max-w-[1600px] items-center justify-between gap-4 px-5 py-4 sm:px-8">
        <Link
          to="/"
          className="display text-xl leading-none tracking-[0.06em] sm:text-2xl"
          onClick={() => setOpen(false)}
        >
          {site.name.split(" ")[0]}
          <span className="text-accent"> {site.name.split(" ")[1]}</span>
        </Link>

        <nav aria-label="Primary" className="hidden lg:block">
          <ul className="flex items-center gap-8">
            {nav.slice(0, 5).map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  className={linkClass}
                  activeProps={{ className: `${linkClass} text-accent` }}
                  activeOptions={{ exact: item.to === "/" }}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <ThemeToggle />
          <Link
            to="/contact"
            className="border border-inverse bg-inverse px-4 py-2 text-[0.68rem] tracking-[0.22em] uppercase text-inverse-foreground transition-colors hover:bg-accent hover:border-accent hover:text-accent-foreground"
          >
            Contact
          </Link>
        </div>

        <div className="flex items-center gap-3 lg:hidden">
          <ThemeToggle />
          <button
            ref={buttonRef}
            type="button"
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((v) => !v)}
            className="border border-line px-3 py-1.5 text-[0.6875rem] tracking-[0.2em] uppercase"
          >
            {open ? "Close" : "Menu"}
          </button>
        </div>
      </div>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            id="mobile-nav"
            initial={safe ? { height: 0, opacity: 0 } : false}
            animate={safe ? { height: "auto", opacity: 1 } : undefined}
            exit={safe ? { height: 0, opacity: 0 } : undefined}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden border-t border-line lg:hidden"
          >
            <nav aria-label="Mobile" className="px-5 py-4 sm:px-8">
              <ul className="flex flex-col">
                {nav.map((item, i) => (
                  <li key={item.to} className="border-b border-line last:border-0">
                    <Link
                      to={item.to}
                      onClick={() => setOpen(false)}
                      className="flex items-baseline gap-4 py-3.5"
                      activeProps={{ className: "text-accent" }}
                      activeOptions={{ exact: item.to === "/" }}
                    >
                      <span className="eyebrow">{String(i + 1).padStart(2, "0")}</span>
                      <span className="display text-3xl">{item.label}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
