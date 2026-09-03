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
  component: WhyChooseUs;
});

function WhyChooseUs() {
  return null;
}
