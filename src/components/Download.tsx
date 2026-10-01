import PlayButton from "./PlayButton";
import PhoneMockup from "./PhoneMockup";
import Reveal from "./Reveal";
export default function Download() {
  return (
    <section id="download" className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-20 md:grid-cols-2">
      <Reveal>
        <h2 className="text-3xl font-semibold tracking-tight">Shop smarter with Shopper</h2>
        <p className="mt-4 max-w-md text-ink/60">Take your shopping experience wherever you go. Download Shopper and discover products from your favorite stores directly from your phone.</p>
        <PlayButton className="mt-8 w-full sm:w-auto" />
        <p className="mt-4 text-sm text-ink/60">Fast • Simple • Secure</p>
      </Reveal>
      <Reveal><PhoneMockup className="scale-95" /></Reveal>
    </section>
  );
}
