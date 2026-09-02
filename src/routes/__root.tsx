import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { BackToTop } from "../components/BackToTop";
import { ThemeProvider } from "../components/theme";
import { localBusinessSchema, site } from "../config/site";

function NotFoundComponent() {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center px-5 text-center">
      <p className="display text-[18vw] leading-none sm:text-[8rem]">404</p>
      <h1 className="mt-4 text-lg font-medium">This page was never inked</h1>
      <p className="mt-2 max-w-sm text-sm text-muted-foreground">
        The page you're looking for doesn't exist or has been moved.
      </p>
      <Link
        to="/"
        className="mt-7 border border-inverse bg-inverse px-5 py-3 text-[0.68rem] tracking-[0.22em] uppercase text-inverse-foreground"
      >
        Back home
      </Link>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center px-5 text-center">
      <h1 className="display text-5xl">This page didn't load</h1>
      <p className="mt-3 max-w-sm text-sm text-muted-foreground">
        Something went wrong on our end. Try again or head back home.
      </p>
      <div className="mt-7 flex flex-wrap justify-center gap-3">
        <button
          onClick={() => {
            router.invalidate();
            reset();
          }}
          className="border border-inverse bg-inverse px-5 py-3 text-[0.68rem] tracking-[0.22em] uppercase text-inverse-foreground"
        >
          Try again
        </button>
        <Link to="/" className="border border-line px-5 py-3 text-[0.68rem] tracking-[0.22em] uppercase">
          Go home
        </Link>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: `${site.legalName} — Tattoo & Piercing Studio in ${site.city}` },
      { name: "description", content: site.description },
      { property: "og:site_name", content: site.legalName },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "theme-color", content: "#111111" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Anton&family=Instrument+Serif:ital@0;1&family=Work+Sans:wght@300;400;500&display=swap",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(localBusinessSchema),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[60] focus:border focus:border-line focus:bg-background focus:px-4 focus:py-2 focus:text-sm"
        >
          Skip to content
        </a>
        <Header />
        {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
        <Outlet />
        <Footer />
        <BackToTop />
      </ThemeProvider>
    </QueryClientProvider>
  );
}
