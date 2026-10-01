import { Check, Headphones, Watch, Shirt, Footprints, Camera, Backpack } from "lucide-react";
import Reveal from "./Reveal";
const tiles = [Headphones, Watch, Shirt, Footprints, Camera, Backpack];
const bg = ["bg-blue-100", "bg-outline", "bg-sky-100", "bg-indigo-100", "bg-blue-50", "bg-page/50"];
export default function Discover() {
  return (
    <section className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-20 md:grid-cols-2">
      <div className="grid grid-cols-3 gap-3">
        {tiles.map((I, k) => <div key={k} className={`flex aspect-square items-center justify-center rounded-2xl ${bg[k]} transition hover:scale-[1.03]`}><I className="text-primary-dark" size={30} /></div>)}
      </div>
      <Reveal>
        <p className="text-sm text-primary">Discover more</p>
        <h2 className="mt-2 text-3xl font-semibold tracking-tight">Find something you'll love.</h2>
        <p className="mt-4 text-ink/60">Explore products through curated collections, categories, and an effortless browsing experience designed around you.</p>
        <ul className="mt-6 space-y-3 text-sm">
          {["Easy product discovery", "Organized categories", "Beautiful product previews", "Fast browsing experience"].map((b) => <li key={b} className="flex gap-2"><Check size={18} className="text-primary" />{b}</li>)}
        </ul>
        <a href="#features" className="mt-8 inline-block rounded-full bg-primary px-6 py-3 text-sm font-medium text-white transition hover:scale-105">Explore Shopper</a>
      </Reveal>
    </section>
  );
}
