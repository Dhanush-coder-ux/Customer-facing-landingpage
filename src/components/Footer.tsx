import { Instagram, Facebook, Twitter, Linkedin } from "lucide-react";
import { NAV } from "../constants";
export default function Footer() {
  const social = [[Instagram, "Instagram"], [Facebook, "Facebook"], [Twitter, "X"], [Linkedin, "LinkedIn"]] as const;
  return (
    <footer className="border-t border-outline bg-hero">
      <div className="mx-auto grid max-w-6xl gap-8 px-5 py-12 md:grid-cols-3">
        <div><p className="font-semibold">Shopper</p><p className="mt-2 text-sm text-ink/60">Simple shopping. Better discovery.</p></div>
        <ul className="space-y-2 text-sm text-ink/70">{NAV.map((n) => <li key={n.href}><a href={n.href} className="hover:text-primary">{n.label}</a></li>)}</ul>
        <div className="space-y-4 text-sm text-ink/70">
          <ul className="space-y-2">{["Privacy Policy", "Terms & Conditions", "Contact"].map((l) => <li key={l}><a href="#" className="hover:text-primary">{l}</a></li>)}</ul>
          <div className="flex gap-3">{social.map(([I, n]) => <a key={n} href="#" aria-label={n} className="text-ink/60 hover:text-primary"><I size={18} /></a>)}</div>
        </div>
      </div>
      <p className="border-t border-outline py-4 text-center text-xs text-ink/60">© 2026 Shopper. All rights reserved.</p>
    </footer>
  );
}
