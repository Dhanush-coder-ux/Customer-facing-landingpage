import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { IOS_AVAILABLE } from "../constants";
const Q = [
  ["What is Shopper?", "Shopper is a customer-facing mobile shopping application that lets you discover products and shop from digital stores."],
  ["Where can I download Shopper?", "Shopper is available through the Google Play Store."],
  ["Is Shopper free to download?", "Yes, the Shopper app can be downloaded for free. Product prices and other charges may vary depending on the store and product."],
  ["Can I browse different categories?", "Yes. Shopper lets you explore products through organized categories and collections."],
  ["Can I search for products?", "Yes. Shopper includes a search experience to help you quickly find products."],
  ["Is Shopper available on iOS?", IOS_AVAILABLE ? "Yes, Shopper is available on iOS." : "iOS availability is coming soon."],
];
export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="mx-auto max-w-3xl px-5 py-20">
      <h2 className="text-3xl font-semibold tracking-tight">Frequently asked questions</h2>
      <div className="mt-8 divide-y divide-outline rounded-2xl border border-outline">
        {Q.map(([q, a], k) => (
          <div key={q}>
            <button className="flex w-full items-center justify-between px-5 py-4 text-left font-medium" aria-expanded={open === k} onClick={() => setOpen(open === k ? null : k)}>
              {q}<ChevronDown size={18} className={`transition ${open === k ? "rotate-180" : ""}`} />
            </button>
            {open === k && <p className="px-5 pb-4 text-sm text-ink/60">{a}</p>}
          </div>
        ))}
      </div>
    </section>
  );
}
