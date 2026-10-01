import Reveal from "./Reveal";
const W = ["Simple experience", "Fast discovery", "Mobile focused", "Secure shopping"];
export default function Why() {
  return (
    <section className="bg-primary-dark py-20 text-white">
      <div className="mx-auto max-w-6xl px-5">
        <Reveal><h2 className="text-3xl font-semibold tracking-tight">Why shoppers choose Shopper</h2></Reveal>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {W.map((w, k) => <div key={w} className="rounded-2xl border border-white/15 p-6"><div className="text-4xl font-medium text-blue-200">0{k + 1}</div><p className="mt-3 text-sm text-blue-100">{w}</p></div>)}
        </div>
      </div>
    </section>
  );
}
