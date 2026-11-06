import { Store, Zap, ShieldCheck, Smartphone, SlidersHorizontal, Sparkles } from "lucide-react";
import Reveal from "./Reveal";

const BENEFITS = [
  {
    icon: Store,
    title: "Verified Local Stores",
    description:
      "Explore independent neighborhood shops and curated boutiques in one unified app. Discover unique product collections directly from verified local merchants.",
  },
  {
    icon: Zap,
    title: "Instant Search & Filtering",
    description:
      "Find products effortlessly with quick category switching, intuitive search queries, and instant real-time results designed for mobile speed.",
  },
  {
    icon: ShieldCheck,
    title: "Direct & Transparent Orders",
    description:
      "No hidden fees or misleading markups. Clear product specifications, real-time store inventory, and safe payment processing.",
  },
  {
    icon: Smartphone,
    title: "Lightweight & Fast Performance",
    description:
      "Engineered with a minimal download size that consumes minimal device memory, preserves battery life, and works smoothly on mobile networks.",
  },
  {
    icon: SlidersHorizontal,
    title: "Organized Shopping Categories",
    description:
      "Easily toggle between apparel, electronics, accessories, and specialty items with clean, organized catalog structures.",
  },
  {
    icon: Sparkles,
    title: "Zero Clutter & Ad-Free Flow",
    description:
      "Enjoy a shopping environment free from spam banners or intrusive popups, focusing solely on discovering quality products.",
  },
];

export default function Benefits() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-16 sm:py-20 lg:py-24">
      <Reveal>
        <div className="text-center max-w-2xl mx-auto">
          <span className="rounded-full bg-highlight px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-primary-dark">
            Why Choose ShopiQ
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-ink sm:text-4xl">
            Built for everyday mobile shopping
          </h2>
          <p className="mt-3 text-sm sm:text-base leading-relaxed text-stone-600">
            ShopiQ was created to make discovering hidden stores, checking live availability, and shopping local clean, transparent, and effortlessly fast.
          </p>
        </div>
      </Reveal>

      <div className="mt-12 sm:mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {BENEFITS.map(({ icon: Icon, title, description }) => (
          <Reveal key={title}>
            <div className="h-full rounded-2xl border border-outline bg-white p-7 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-orange-200 hover:shadow-md">
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-100 text-primary-dark shadow-sm">
                <Icon size={22} className="stroke-[2]" />
              </span>
              <h3 className="mt-5 text-lg font-bold text-ink">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-stone-600">
                {description}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

