import PhoneMockup from "./PhoneMockup";
import { PLAY_STORE_URL, SCREEN_STORE } from "../constants";
import { CheckCircle2 } from "lucide-react";

export default function FinalCTA() {
  return (
    <section className="px-5 pb-16 sm:pb-20 lg:pb-24">
      <div className="mx-auto max-w-6xl rounded-3xl bg-primary px-6 py-12 text-white shadow-xl shadow-orange-500/15 sm:px-10 md:px-14 md:py-16">
        <div className="grid items-center gap-10 md:grid-cols-12">
          {/* Left Column: CTA Messaging */}
          <div className="md:col-span-7">
            <span className="inline-block rounded-full bg-white/20 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-white backdrop-blur">
              Ready to shop smarter?
            </span>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl">
              Experience ShopiQ on your phone today.
            </h2>
            <p className="mt-4 max-w-md text-sm sm:text-base leading-relaxed text-orange-100">
              Download ShopiQ and discover a faster, simpler way to explore digital storefronts and shop your favorite products in one place.
            </p>

            <ul className="mt-6 space-y-2.5 text-sm text-orange-50">
              <li className="flex items-center gap-2">
                <CheckCircle2 size={18} className="text-white shrink-0" />
                <span>Free to download from Google Play</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 size={18} className="text-white shrink-0" />
                <span>Verified digital store catalogs</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 size={18} className="text-white shrink-0" />
                <span>Lightweight install, smooth on any network</span>
              </li>
            </ul>

            <div className="mt-8 flex flex-col gap-3.5 sm:flex-row">
              <a
                href={PLAY_STORE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-white px-7 py-3.5 text-center font-bold text-primary shadow-sm transition hover:bg-orange-50 hover:scale-[1.02] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                Download ShopiQ Now
              </a>
              <a
                href="#features"
                className="rounded-full border border-white/50 px-7 py-3.5 text-center font-semibold text-white transition hover:bg-white/10 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                Explore Features
              </a>
            </div>
          </div>

          {/* Right Column: Complete, unclipped Phone Mockup */}
          <div className="flex justify-center md:col-span-5 md:justify-end">
            <div className="w-full max-w-[240px] sm:max-w-[260px]">
              <PhoneMockup
                image={SCREEN_STORE}
                label="ShopiQ Digital Store Page Preview"
                className="shadow-2xl ring-2 ring-white/10"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
