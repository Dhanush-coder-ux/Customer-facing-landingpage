import { Check, Headphones, Watch, Shirt, Footprints, Camera, Backpack } from "lucide-react";
import Reveal from "./Reveal";

const CATEGORIES = [
  { icon: Headphones, label: "Audio & Tech", bg: "bg-orange-100" },
  { icon: Watch, label: "Watches", bg: "bg-orange-50" },
  { icon: Shirt, label: "Apparel", bg: "bg-amber-100" },
  { icon: Footprints, label: "Footwear", bg: "bg-orange-100/70" },
  { icon: Camera, label: "Cameras", bg: "bg-milk-warm" },
  { icon: Backpack, label: "Bags & Gear", bg: "bg-orange-50" },
];

export default function Discover() {
  return (
    <section className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-16 sm:py-20 lg:py-24 md:grid-cols-2">
      <div className="grid grid-cols-3 gap-3.5 sm:gap-4">
        {CATEGORIES.map(({ icon: Icon, label, bg }) => (
          <div
            key={label}
            className={`flex flex-col aspect-square items-center justify-center rounded-2xl ${bg} p-3 text-center transition-all duration-200 hover:scale-[1.03] shadow-sm`}
          >
            <Icon className="text-primary-dark" size={30} />
            <span className="mt-2 text-[11px] font-semibold text-stone-700 tracking-tight">
              {label}
            </span>
          </div>
        ))}
      </div>

      <Reveal>
        <span className="rounded-full bg-highlight px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary-dark">
          Curated Catalog
        </span>
        <h2 className="mt-3 text-3xl font-bold tracking-tight text-ink sm:text-4xl">
          Find something you'll love.
        </h2>
        <p className="mt-4 text-stone-600 leading-relaxed text-sm sm:text-base">
          Explore products through specialized collections, verified digital boutiques, and an effortless browsing experience built around your tastes.
        </p>

        <ul className="mt-6 space-y-3 text-sm text-stone-700 font-medium">
          {[
            "Curated digital store collections",
            "Organized lifestyle and tech categories",
            "High-resolution product previews",
            "Instant and responsive searching",
          ].map((b) => (
            <li key={b} className="flex items-center gap-2.5">
              <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-orange-100 text-primary-dark">
                <Check size={14} className="stroke-[2.5]" />
              </span>
              <span>{b}</span>
            </li>
          ))}
        </ul>

        <a
          href="#features"
          className="mt-8 inline-block rounded-full bg-primary px-7 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-primary-dark hover:scale-[1.02] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
        >
          Explore Features
        </a>
      </Reveal>
    </section>
  );
}
