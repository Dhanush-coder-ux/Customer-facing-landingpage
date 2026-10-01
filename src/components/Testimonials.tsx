import Reveal from "./Reveal";
// Edit these entries freely
const T = [
  { n: "Alex", q: "Shopper makes it really easy to discover products without jumping between different websites." },
  { n: "Priya", q: "I love how simple the app feels. Everything is easy to find." },
  { n: "Rahul", q: "A clean shopping experience that I can use anywhere." },
];
export default function Testimonials() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-20">
      <Reveal><h2 className="text-3xl font-semibold tracking-tight">Loved by shoppers</h2></Reveal>
      <div className="mt-10 grid gap-5 md:grid-cols-3">
        {T.map((t) => (
          <figure key={t.n} className="rounded-2xl border border-outline p-6">
            <blockquote className="text-ink/80">“{t.q}”</blockquote>
            <figcaption className="mt-5 flex items-center gap-3 text-sm">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-highlight text-primary">{t.n[0]}</span>{t.n}
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
