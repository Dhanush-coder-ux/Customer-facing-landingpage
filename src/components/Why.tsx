import Reveal from "./Reveal";

const PILLARS = [
  {
    num: "01",
    title: "Curated Storefronts",
    desc: "Discover verified digital stores with unique, authentic items.",
  },
  {
    num: "02",
    title: "Instant Search",
    desc: "Lightning-fast product search with real-time mobile filtering.",
  },
  {
    num: "03",
    title: "Mobile First",
    desc: "Engineered specifically for handheld comfort and one-thumb usability.",
  },
  {
    num: "04",
    title: "Secure Shopping",
    desc: "Industry-standard data encryption and transparent order tracking.",
  },
];

export default function Why() {
  return (
    <section className="bg-primary-dark py-16 sm:py-20 lg:py-24 text-white">
      <div className="mx-auto max-w-6xl px-5">
        <Reveal>
          <div className="max-w-2xl">
            <span className="rounded-full bg-white/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-orange-200">
              The ShopIQ Advantage
            </span>
            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              Why shoppers choose ShopIQ
            </h2>
            <p className="mt-3 text-sm sm:text-base leading-relaxed text-orange-100">
              Engineered to bring transparency, speed, and simplicity back to online shopping.
            </p>
          </div>
        </Reveal>

        <div className="mt-12 sm:mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {PILLARS.map(({ num, title, desc }) => (
            <div
              key={num}
              className="rounded-2xl border border-white/15 bg-white/5 p-6 backdrop-blur-sm transition-all duration-200 hover:border-white/30 hover:bg-white/10"
            >
              <div className="text-3xl sm:text-4xl font-extrabold text-orange-200">{num}</div>
              <h3 className="mt-4 text-base font-bold text-white">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-orange-100/90">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
