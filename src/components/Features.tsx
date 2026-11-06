import { Compass, ShoppingBag, CheckCircle2, Search } from "lucide-react";
import Reveal from "./Reveal";

const CORE_CAPABILITIES = [
  {
    key: "a",
    i: Compass,
    t: "Discover hidden stores near you",
    d: "Uncover unique neighborhood boutiques, local specialty outlets, and hidden retail gems right in your area that you won't find on generic retail apps.",
  },
  {
    key: "b",
    i: ShoppingBag,
    t: "Shop online from your favourite local stores",
    d: "Support your favorite neighborhood merchants with a smooth online ordering experience, instant cart checkout, and flexible local delivery or pickup.",
  },
  {
    key: "c",
    i: CheckCircle2,
    t: "Check availability before you visit",
    d: "Never make a wasted trip. Check real-time in-store stock, live prices, and product variants before stepping out of your house.",
  },
  {
    key: "d",
    i: Search,
    t: "Find what you need nearby",
    d: "Quickly search for specific products, brands, or daily essentials and instantly pinpoint which nearby stores have them ready on their shelves.",
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
              Thoughtfully engineered to make local store discovery, inventory checks, and neighborhood shopping simple, reliable, and transparent.
            </p>
          </div>
        </Reveal>

        <div className="mt-12 sm:mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {CORE_CAPABILITIES.map(({ key, i: Icon, t, d }) => (
            <Reveal key={key}>
              <article className="group h-full rounded-2xl border border-outline bg-white p-6 sm:p-7 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-orange-200 hover:shadow-md flex flex-col">
                <div className="flex items-center justify-between">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-100 text-primary-dark shadow-sm transition-colors duration-200 group-hover:bg-primary group-hover:text-white">
                    <Icon size={22} className="stroke-[2]" />
                  </span>
                  <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-orange-50 text-xs font-bold uppercase text-primary ring-1 ring-orange-200/80 font-mono">
                    {key}
                  </span>
                </div>
                <h3 className="mt-5 text-lg font-bold text-ink leading-snug">{t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-stone-600 flex-1">{d}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
