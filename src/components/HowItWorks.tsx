import Reveal from "./Reveal";

const STEPS = [
  {
    step: "01",
    t: "Download ShopiQ",
    d: "Install the ShopiQ app from the Google Play Store on your Android device in seconds.",
  },
  {
    step: "02",
    t: "Discover Stores & Check Stock",
    d: "Uncover hidden stores near you, find what you need nearby, and check real-time stock before visiting.",
  },
  {
    step: "03",
    t: "Shop Online or In-Store",
    d: "Order online from your favourite local stores with seamless checkout, or visit with confidence.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how" className="mx-auto max-w-6xl px-5 py-16 sm:py-20 lg:py-24">
      <Reveal>
        <div className="text-center max-w-2xl mx-auto">
          <span className="rounded-full bg-highlight px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-primary-dark">
            How It Works
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-ink sm:text-4xl">
            Shopping made simple
          </h2>
          <p className="mt-3 text-sm sm:text-base leading-relaxed text-stone-600">
            Get up and running with ShopiQ in three straightforward steps.
          </p>
        </div>
      </Reveal>

      <div className="mt-12 sm:mt-16 grid gap-6 sm:grid-cols-2 md:grid-cols-3">
        {STEPS.map((s, idx) => (
          <Reveal key={s.t}>
            <div className="relative h-full rounded-2xl border border-outline bg-white p-7 shadow-sm transition-all duration-200 hover:border-orange-200 hover:shadow-md">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-sm font-bold text-white shadow-sm">
                {idx + 1}
              </span>
              <h3 className="mt-5 text-lg font-bold text-ink">{s.t}</h3>
              <p className="mt-2 text-sm leading-relaxed text-stone-600">{s.d}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
