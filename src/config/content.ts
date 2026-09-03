import fineLine from "../assets/work-fineline.jpg";
import blackwork from "../assets/work-blackwork.jpg";
import realism from "../assets/work-realism.jpg";
import minimal from "../assets/work-minimal.jpg";
import piercing from "../assets/work-piercing.jpg";
import geometric from "../assets/work-geometric.jpg";

export const services = [
  {
    n: "01",
    name: "Custom Tattoos",
    desc: "A design drawn from scratch around your idea, body placement and skin. Nothing recycled, nothing repeated.",
    session: "Multi-session project",
  },
  {
    n: "02",
    name: "Fine Line",
    desc: "Delicate single-needle linework for lettering, florals and minimal figurative pieces that age cleanly.",
    session: "Short session",
  },
  {
    n: "03",
    name: "Minimal",
    desc: "Small, restrained marks with precise spacing — the quietest way to start a collection.",
    session: "Short session",
  },
  {
    n: "04",
    name: "Blackwork",
    desc: "Heavy solid black, negative space and ornamental structure built for long-term contrast.",
    session: "Half or full day",
  },
  {
    n: "05",
    name: "Realism",
    desc: "Portrait and object studies rendered in smooth black and grey value transitions.",
    session: "Multi-session project",
  },
  {
    n: "06",
    name: "Geometric",
    desc: "Compass-accurate geometry, sacred pattern and repetition mapped to body contours.",
    session: "Half day",
  },
  {
    n: "07",
    name: "Cover Ups",
    desc: "Strategic redesign of existing work using density, flow and placement rather than brute force.",
    session: "Consultation first",
  },
  {
    n: "08",
    name: "Touch Ups",
    desc: "Refreshing line weight, saturation and edges on healed work — ours or someone else's.",
    session: "Short session",
  },
  {
    n: "09",
    name: "Ear Piercing",
    desc: "Lobe, helix, tragus, conch and curated stacks placed with anatomical mapping.",
    session: "Walk-in friendly",
  },
  {
    n: "10",
    name: "Body Piercing",
    desc: "Navel, septum, nostril and surface work using implant-grade jewellery only.",
    session: "Walk-in friendly",
  },
] as const;

export const homeServices = [
  { n: "01", name: "Custom Tattoo" },
  { n: "02", name: "Fine Line" },
  { n: "03", name: "Blackwork" },
  { n: "04", name: "Realism" },
  { n: "05", name: "Cover Up" },
  { n: "06", name: "Piercing" },
] as const;

export const principles = [
  {
    title: "Experienced Artists",
    body: "Resident artists with a decade of studio practice and specialised styles rather than one generic hand.",
    stat: "10+",
    statLabel: "years practising",
  },
  {
    title: "Sterile Environment",
    body: "Single-use needles, autoclaved tooling, barrier-wrapped stations and a documented cleaning routine between clients.",
    stat: "100%",
    statLabel: "single-use needles",
  },
  {
    title: "Premium Equipment",
    body: "Rotary and coil machines, professional cartridges and vegan pigments selected for healed-result stability.",
    stat: "4",
    statLabel: "dedicated stations",
  },
  {
    title: "Custom Designs",
    body: "Every piece is drawn for one person only. Flash sheets exist, but they are never duplicated onto two clients.",
    stat: "1:1",
    statLabel: "design per client",
  },
  {
    title: "Personal Consultation",
    body: "An unhurried sit-down covering reference, placement, pain, budget and healing before any deposit is taken.",
    stat: "45 min",
    statLabel: "typical consult",
  },
  {
    title: "Aftercare Support",
    body: "Written aftercare, a check-in during healing and a free review session once the piece has settled.",
    stat: "30 days",
    statLabel: "healing support",
  },
] as const;

export const process = [
  {
    step: "Consult",
    body: "We talk through the idea, references, placement and realistic scope. No pressure, no deposit yet.",
  },
  {
    step: "Design",
    body: "A custom drawing is prepared and revised with you until the composition sits right on the body.",
  },
  {
    step: "Session",
    body: "Stencil, placement check, then the work — paced with breaks and a sterile, single-use setup.",
  },
  {
    step: "Aftercare",
    body: "Written instructions, a healing check-in and a touch-up review once the skin has settled.",
  },
] as const;

export type WorkCategory = "Fine Line" | "Blackwork" | "Realism" | "Minimal" | "Piercing" | "Geometric";

export const works: {
  label: string;
  category: WorkCategory;
  src: string;
  alt: string;
  span: string;
}[] = [
  {
    label: "Linden / forearm",
    category: "Fine Line",
    src: fineLine,
    alt: "Fine line floral tattoo on a forearm",
    span: "sm:col-span-4 sm:row-span-2",
  },
  {
    label: "Obsidian / back",
    category: "Blackwork",
    src: blackwork,
    alt: "Ornamental blackwork tattoo covering a back",
    span: "sm:col-span-2 sm:row-span-3",
  },
  {
    label: "Portrait study",
    category: "Realism",
    src: realism,
    alt: "Black and grey realism lion tattoo on an arm",
    span: "sm:col-span-3 sm:row-span-2",
  },
  {
    label: "Hairline script",
    category: "Minimal",
    src: minimal,
    alt: "Minimal dot and line tattoo on a wrist",
    span: "sm:col-span-3",
  },
  {
    label: "Curated lobe",
    category: "Piercing",
    src: piercing,
    alt: "Curated ear piercing stack with titanium jewellery",
    span: "sm:col-span-3",
  },
  {
    label: "Ornamental band",
    category: "Geometric",
    src: geometric,
    alt: "Geometric mandala tattoo on a forearm",
    span: "sm:col-span-4 sm:row-span-2",
  },
  {
    label: "Botanic line",
    category: "Fine Line",
    src: fineLine,
    alt: "Delicate botanical fine line tattoo",
    span: "sm:col-span-2 sm:row-span-2",
  },
  {
    label: "Grey wash animal",
    category: "Realism",
    src: realism,
    alt: "Grey wash animal tattoo study",
    span: "sm:col-span-3 sm:row-span-2",
  },
  {
    label: "Septum / titanium",
    category: "Piercing",
    src: piercing,
    alt: "Titanium septum piercing close up",
    span: "sm:col-span-3",
  },
  {
    label: "Single dot series",
    category: "Minimal",
    src: minimal,
    alt: "Series of small minimal dot tattoos",
    span: "sm:col-span-3",
  },
];


export const testimonials = [
  {
    quote:
      "They redrew my idea three times until it actually fit my arm. That patience is the whole reason I went back for a second piece.",
    name: "Ananya R.",
    meta: "Fine line, forearm",
  },
  {
    quote:
      "The consultation felt more like sitting with an illustrator than booking a service. Nothing was rushed, nothing was upsold.",
    name: "Dev M.",
    meta: "Blackwork sleeve",
  },
  {
    quote:
      "Cleanest studio I have been in. Everything opened in front of me, and the aftercare follow-up was genuinely useful.",
    name: "Farah S.",
    meta: "Helix piercing",
  },
] as const;
