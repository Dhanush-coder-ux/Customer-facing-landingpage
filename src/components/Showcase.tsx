import PhoneMockup from "./PhoneMockup";
import Reveal from "./Reveal";
import { SCREEN_HOME, SCREEN_STORE } from "../constants";

export default function Showcase() {
  return (
    <section id="showcase" className="overflow-hidden bg-hero py-16 sm:py-20 lg:py-24">
      <Reveal>
        <div className="text-center px-5 max-w-2xl mx-auto">
          <span className="rounded-full bg-highlight px-3.5 py-1 text-xs font-semibold text-primary-dark uppercase tracking-wider">
            Real App Experience
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-ink sm:text-4xl">
            Everything you need. Right in your pocket.
          </h2>
          <p className="mt-3 text-sm text-stone-600 sm:text-base leading-relaxed">
            Experience the authentic ShopiQ interface: discover hidden stores from the home feed, check live stock before you visit, or shop your favourite local stores with zero friction.
          </p>
        </div>
      </Reveal>

      <div className="mt-12 sm:mt-16 flex flex-col md:flex-row items-center justify-center gap-10 md:gap-8 lg:gap-16 px-5 max-w-5xl mx-auto">
        {/* Screen 1: Home Page */}
        <Reveal className="w-full max-w-[320px]">
          <div className="flex flex-col items-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-orange-200 bg-white px-3.5 py-1 text-xs font-semibold text-stone-800 shadow-sm">
              <span className="h-2 w-2 rounded-full bg-primary" />
              <span>ShopiQ Home Screen</span>
            </div>
            <PhoneMockup
              image={SCREEN_HOME}
              label="ShopiQ Home Screen - Browse Products and Collections"
              className="w-[250px] sm:w-[270px] shadow-2xl transition-transform duration-300 hover:-translate-y-2"
            />
            <p className="mt-4 text-center text-xs font-medium text-stone-500">
              Personalized product recommendations and categories
            </p>
          </div>
        </Reveal>

        {/* Screen 2: Store Home Page */}
        <Reveal className="w-full max-w-[320px]">
          <div className="flex flex-col items-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-orange-200 bg-white px-3.5 py-1 text-xs font-semibold text-stone-800 shadow-sm">
              <span className="h-2 w-2 rounded-full bg-orange-600" />
              <span>Local Store Home Screen</span>
            </div>
            <PhoneMockup
              image={SCREEN_STORE}
              label="ShopiQ Store Screen - Explore Local Store Catalogs & Inventory"
              className="w-[250px] sm:w-[270px] shadow-2xl transition-transform duration-300 hover:-translate-y-2"
            />
            <p className="mt-4 text-center text-xs font-medium text-stone-500">
              Full store catalogs, local merchant identity, and live inventory
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
