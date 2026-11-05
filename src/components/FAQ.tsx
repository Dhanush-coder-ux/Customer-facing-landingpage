import { useState } from "react";
import { ChevronDown } from "lucide-react";
import Reveal from "./Reveal";

const FAQS = [
  {
    q: "What is ShopIQ?",
    a: "ShopIQ is a dedicated mobile shopping application for Android that brings together curated digital storefronts and verified merchants into one intuitive mobile app. You can discover specialized collections, compare products, and order directly from stores without jumping between fragmented websites.",
  },
  {
    q: "Where can I download the ShopIQ app?",
    a: "ShopIQ is available for free download on the Google Play Store for Android devices. Click any of the 'Download App' or 'Get it on Google Play' buttons on this page to visit our store listing.",
  },
  {
    q: "Is ShopIQ free to download and use?",
    a: "Yes. Downloading, browsing, and searching products on ShopIQ is 100% free with no subscription fees. You only pay for the products and shipping charges determined by individual digital stores at checkout.",
  },
  {
    q: "How do store orders and checkouts work?",
    a: "When you find an item you like, add it to your shopping cart and proceed to the unified checkout. Your order is processed securely and routed directly to the verified store merchant for fulfillment and delivery updates.",
  },
  {
    q: "How is my payment and personal data secured?",
    a: "ShopIQ utilizes industry-standard encryption protocols (TLS/HTTPS) and trusted payment gateways. We never store raw payment credentials or sell your browsing history to third-party advertisers.",
  },
  {
    q: "Will ShopIQ be available on iOS / iPhone?",
    a: "ShopIQ is initially launched as a dedicated Android experience. An iOS application for iPhone is currently in active development and will be announced as soon as it is released.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpen((prev) => (prev === idx ? null : idx));
  };

  return (
    <section id="faq" className="mx-auto max-w-4xl px-5 py-16 sm:py-20 lg:py-24">
      <Reveal>
        <div className="text-center max-w-2xl mx-auto">
          <span className="rounded-full bg-highlight px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-primary-dark">
            Got Questions?
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-ink sm:text-4xl">
            Frequently asked questions
          </h2>
          <p className="mt-3 text-sm sm:text-base leading-relaxed text-stone-600">
            Everything you need to know about getting started with ShopIQ.
          </p>
        </div>
      </Reveal>

      <div className="mt-12 sm:mt-16 divide-y divide-outline rounded-2xl border border-outline bg-white shadow-sm overflow-hidden">
        {FAQS.map(({ q, a }, idx) => {
          const isOpen = open === idx;
          const buttonId = `faq-trigger-${idx}`;
          const panelId = `faq-panel-${idx}`;

          return (
            <div key={q} className="transition-colors">
              <h3>
                <button
                  id={buttonId}
                  type="button"
                  className="flex w-full items-center justify-between px-6 py-5 text-left font-semibold text-stone-900 transition hover:text-primary focus-visible:outline-none focus-visible:bg-orange-50/60"
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  onClick={() => toggle(idx)}
                >
                  <span className="text-base sm:text-lg pr-4">{q}</span>
                  <ChevronDown
                    size={20}
                    className={`shrink-0 text-stone-500 transition-transform duration-300 ${
                      isOpen ? "rotate-180 text-primary" : ""
                    }`}
                    aria-hidden="true"
                  />
                </button>
              </h3>
              <div
                id={panelId}
                role="region"
                aria-labelledby={buttonId}
                className={`transition-all duration-300 ease-in-out ${
                  isOpen ? "block px-6 pb-6 pt-1" : "hidden"
                }`}
              >
                <p className="text-sm sm:text-base leading-relaxed text-stone-600">
                  {a}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
