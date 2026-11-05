import { Compass, Search, LayoutGrid, Package, ShoppingCart, Smartphone } from "lucide-react";
import Reveal from "./Reveal";

const F = [
  {
    i: Compass,
    t: "Discover Verified Stores",
    d: "Explore products from vetted independent digital stores and specialty boutiques all in one place.",
  },
  {
    i: Search,
    t: "Instant Search",
    d: "Find items quickly with real-time keyword suggestions and intuitive filtering across all digital storefronts.",
  },
  {
    i: LayoutGrid,
    t: "Organized Categories",
    d: "Browse products seamlessly through well-structured collections designed for mobile convenience.",
  },
  {
    i: Package,
    t: "Rich Product Details",
    d: "Inspect full product photography, clear specifications, variant selections, and live stock availability.",
  },
  {
    i: ShoppingCart,
    t: "Frictionless Cart & Checkout",
    d: "Manage your shopping bag with ease and transition to secure, encrypted checkout in seconds.",
  },
  {
    i: Smartphone,
    t: "Mobile-First Architecture",
    d: "Tailored specifically for one-handed smartphone operation with rapid load times and fluid transitions.",
  },
];

export default function Features() {
  return (
    <section id="features" className="bg-hero py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-6xl px-5">
        <Reveal>
          <div className="text-center max-w-2xl mx-auto">
            <span className="rounded-full bg-highlight px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-primary-dark">
              Core Capabilities
            </span>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-ink sm:text-4xl">
              Everything you need to shop better
            </h2>
            <p className="mt-3 text-sm sm:text-base leading-relaxed text-stone-600">
              Thoughtfully engineered to make mobile product discovery simple, reliable, and completely transparent.
            </p>
          </div>
        </Reveal>

        <div className="mt-12 sm:mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {F.map(({ i: Icon, t, d }) => (
            <Reveal key={t}>
              <article className="h-full rounded-2xl border border-outline bg-white p-7 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-orange-200 hover:shadow-md">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-100 text-primary-dark shadow-sm">
                  <Icon size={22} className="stroke-[2]" />
                </span>
                <h3 className="mt-5 text-lg font-bold text-ink">{t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-stone-600">{d}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
