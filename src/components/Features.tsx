import { Compass, Search, LayoutGrid, Package, ShoppingCart, Smartphone } from "lucide-react";
import Reveal from "./Reveal";
const F = [
  { i: Compass, t: "Discover Products", d: "Explore products from your favorite digital stores in one place." },
  { i: Search, t: "Smart Search", d: "Find products quickly with an intuitive search experience." },
  { i: LayoutGrid, t: "Explore Categories", d: "Browse products through simple and organized categories." },
  { i: Package, t: "Product Details", d: "View product images, pricing, descriptions, variants, and availability." },
  { i: ShoppingCart, t: "Easy Shopping", d: "Add products to your cart and manage your shopping experience effortlessly." },
  { i: Smartphone, t: "Mobile First", d: "A fast and optimized shopping experience built specifically for mobile users." },
];
export default function Features() {
  return (
    <section id="features" className="bg-hero py-20">
      <div className="mx-auto max-w-6xl px-5">
        <Reveal><h2 className="text-3xl font-semibold tracking-tight">Everything you need to shop better</h2>
          <p className="mt-3 text-ink/60">Designed to make discovering and shopping for products simple.</p></Reveal>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {F.map(({ i: Icon, t, d }) => (
            <article key={t} className="rounded-2xl border border-outline bg-white p-6 transition hover:-translate-y-1 hover:shadow-lg">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-highlight text-primary"><Icon size={20} /></span>
              <h3 className="mt-4 font-semibold">{t}</h3><p className="mt-2 text-sm text-ink/60">{d}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
