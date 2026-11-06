import PlayButton from "./PlayButton";
import PhoneMockup from "./PhoneMockup";
import Reveal from "./Reveal";
import { SCREEN_HOME } from "../constants";

export default function Download() {
  return (
    <section id="download" className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-16 sm:py-20 lg:py-24 md:grid-cols-2">
      <Reveal>
        <span className="rounded-full bg-highlight px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary-dark">
          Get Started
        </span>
        <h2 className="mt-3 text-3xl font-bold tracking-tight text-ink sm:text-4xl">
          Shop smarter with ShopiQ
        </h2>
        <p className="mt-4 max-w-md text-stone-600 leading-relaxed text-sm sm:text-base">
          Take your shopping experience wherever you go. Download ShopiQ on Android to explore verified digital stores, compare products, and enjoy safe, instant checkout directly from your mobile device.
        </p>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
          <PlayButton className="w-full sm:w-auto" />
        </div>

        <div className="mt-6 flex flex-wrap items-center gap-4 text-xs font-medium text-stone-500">
          <span className="flex items-center gap-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" /> Fast Android App
          </span>
          <span className="flex items-center gap-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" /> 100% Free Download
          </span>
          <span className="flex items-center gap-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" /> Secure Payments
          </span>
        </div>
      </Reveal>

      <Reveal className="flex justify-center">
        <PhoneMockup
          image={SCREEN_HOME}
          label="ShopiQ App on Android"
          className="w-[250px] sm:w-[270px]"
        />
      </Reveal>
    </section>
  );
}
