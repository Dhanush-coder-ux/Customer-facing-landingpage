import PhoneMockup from "./PhoneMockup";
import { PLAY_STORE_URL } from "../constants";
export default function FinalCTA() {
  return (
    <section className="px-5 pb-20">
      <div className="mx-auto grid max-w-6xl items-center gap-8 overflow-hidden rounded-3xl bg-primary px-8 pt-12 text-white md:grid-cols-2 md:px-14">
        <div className="pb-12">
          <h2 className="text-3xl font-semibold tracking-tight">Ready to shop smarter?</h2>
          <p className="mt-4 max-w-sm text-blue-100">Download Shopper and discover a simpler way to explore your favorite products.</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href={PLAY_STORE_URL} className="rounded-full bg-white px-6 py-3 text-center font-medium text-primary transition hover:scale-105">Download Shopper</a>
            <a href="#features" className="rounded-full border border-white/40 px-6 py-3 text-center transition hover:bg-white/10">Explore Features</a>
          </div>
        </div>
        <div className="hidden h-72 overflow-hidden md:block"><PhoneMockup /></div>
      </div>
    </section>
  );
}
