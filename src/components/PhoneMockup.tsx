import { Search, Home, Heart, ShoppingCart, User, Shirt, Headphones, Watch, Footprints } from "lucide-react";
const items = [
  { n: "Wireless Headphones", p: "$89", i: Headphones, c: "bg-blue-100" },
  { n: "Classic Watch", p: "$129", i: Watch, c: "bg-outline" },
  { n: "Everyday Sneakers", p: "$64", i: Footprints, c: "bg-sky-100" },
  { n: "Linen Shirt", p: "$38", i: Shirt, c: "bg-indigo-100" },
];
export default function PhoneMockup({ className = "" }: { className?: string }) {
  return (
    <div className={`relative mx-auto w-[260px] rounded-[2.5rem] border-[8px] border-ink bg-white shadow-2xl sm:w-[290px] ${className}`}>
      <div className="mx-auto mt-2 h-4 w-20 rounded-full bg-ink" />
      <div className="space-y-3 px-4 pb-3 pt-3">
        <div className="text-xs text-ink/60">Good morning</div>
        <div className="flex items-center gap-2 rounded-xl border border-outline bg-hero px-3 py-2 text-xs text-ink/40"><Search size={14} /> Search products</div>
        <div className="flex gap-2 overflow-hidden text-[11px]">
          {["All", "Fashion", "Audio", "Home"].map((c, k) => <span key={c} className={`rounded-full px-3 py-1 ${k === 0 ? "bg-primary text-white" : "bg-highlight text-primary-dark"}`}>{c}</span>)}
        </div>
        <div className="grid grid-cols-2 gap-2">
          {items.map(({ n, p, i: Icon, c }) => (
            <div key={n} className="rounded-xl border border-outline/50 p-2">
              <div className={`flex h-20 items-center justify-center rounded-lg ${c}`}><Icon className="text-primary-dark" size={28} /></div>
              <div className="mt-2 truncate text-[11px] font-medium">{n}</div><div className="text-[11px] text-primary">{p}</div>
            </div>
          ))}
        </div>
        <div className="flex justify-between border-t border-outline/50 pt-3 text-ink/40">
          <Home size={18} className="text-primary" /><Search size={18} /><Heart size={18} /><ShoppingCart size={18} /><User size={18} />
        </div>
      </div>
    </div>
  );
}
