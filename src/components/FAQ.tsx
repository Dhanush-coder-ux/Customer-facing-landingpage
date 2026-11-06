import { useState } from "react";
import { ChevronDown } from "lucide-react";
import Reveal from "./Reveal";

const FAQS = [
  {
    q: "What is ShopiQ?",
    a: "ShopiQ is your dedicated mobile shopping companion on Android. It allows you to discover hidden stores near you, shop online from your favourite local stores, check real-time product availability before you visit, and find whatever you need nearby — all in one unified, easy-to-use app.",
  },
  {
    q: "How can I check product availability before I visit a store?",
    a: "Every verified local store on ShopiQ displays live in-store stock, available variants, and real-time prices. You can verify whether an item is on the shelf before heading out, saving you time and avoiding wasted trips.",
  },
  {
    q: "Can I shop online directly from my favourite local stores?",
    a: "Yes! You can browse the full digital catalog of local neighborhood shops, add items to your cart, and complete orders online with transparent tracking and flexible pickup or delivery options.",
  },
  {
    q: "Where can I download the ShopiQ app?",
    a: "ShopiQ is available for free download on the Google Play Store for Android devices. Click any of the 'Download App' or 'Get it on Google Play' buttons on this page to visit our store listing.",
  },
  {
    q: "Is ShopiQ free to download and use?",
    a: "Yes. Downloading, browsing, checking store availability, and finding stores on ShopiQ is 100% free with no subscription fees. You only pay for the products you purchase directly from the stores.",
  },
  {
    q: "How is my payment and personal data secured?",
    a: "ShopiQ utilizes industry-standard encryption protocols (TLS/HTTPS) and trusted payment gateways. We never store raw payment credentials or sell your browsing history to third-party advertisers.",
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
            Everything you need to know about getting started with ShopiQ.
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
