import { useEffect, useState } from "react";
import { Menu, X, ShoppingBag } from "lucide-react";
import { NAV, PLAY_STORE_URL } from "../constants";
export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const f = () => setScrolled(window.scrollY > 8);
    f(); window.addEventListener("scroll", f, { passive: true });
    return () => window.removeEventListener("scroll", f);
  }, []);
  return (
    <header className={`sticky top-0 z-50 border-b transition ${scrolled ? "border-outline bg-white/80 backdrop-blur" : "border-transparent bg-white"}`}>
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5" aria-label="Main">
        <a href="#home" className="flex items-center gap-2 font-semibold">
          <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-primary text-white"><ShoppingBag size={17} /></span>Shopper
        </a>
        <ul className="hidden gap-8 text-sm text-ink/70 md:flex">
          {NAV.map((n) => <li key={n.href}><a className="transition hover:text-primary" href={n.href}>{n.label}</a></li>)}
        </ul>
        <a href={PLAY_STORE_URL} className="hidden rounded-full bg-primary px-5 py-2 text-sm font-medium text-white transition hover:scale-105 md:block">Download App</a>
        <button className="md:hidden" aria-label="Toggle menu" aria-expanded={open} onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button>
      </nav>
      {open && (
        <div className="border-t border-outline/50 bg-white px-5 pb-5 md:hidden">
          {NAV.map((n) => <a key={n.href} href={n.href} onClick={() => setOpen(false)} className="block py-3 text-ink/80">{n.label}</a>)}
          <a href={PLAY_STORE_URL} className="mt-2 block rounded-full bg-primary py-3 text-center font-medium text-white">Download App</a>
        </div>
      )}
    </header>
  );
}
