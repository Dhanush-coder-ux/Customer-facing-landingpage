import Reveal from "./Reveal";
const S = [
  { t: "Download Shopper", d: "Get the Shopper app from Google Play." },
  { t: "Discover", d: "Browse stores, categories, and products." },
  { t: "Shop", d: "Choose your products and enjoy a simple shopping experience." },
];
export default function HowItWorks() {
  return (
    <section id="how" className="mx-auto max-w-6xl px-5 py-20">
      <Reveal><h2 className="text-3xl font-semibold tracking-tight">Shopping made simple</h2></Reveal>
      <ol className="relative mt-10 space-y-8 border-l border-highlight pl-8 md:flex md:gap-8 md:space-y-0 md:border-l-0 md:pl-0">
        {S.map((s, k) => (
          <li key={s.t} className="relative md:flex-1 md:rounded-2xl md:border md:border-outline md:p-6">
            <span className="absolute -left-[3.2rem] flex h-9 w-9 items-center justify-center rounded-full bg-primary text-sm text-white md:static md:mb-4">{k + 1}</span>
            <h3 className="font-semibold">{s.t}</h3><p className="mt-1 text-sm text-ink/60">{s.d}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}
