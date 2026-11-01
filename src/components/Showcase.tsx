import PhoneMockup from "./PhoneMockup";
import Reveal from "./Reveal";

const screens = [
  { label: "Category & Catalog", tag: "Browse Screen", tilt: "md:translate-y-8 md:-rotate-3" },
  { label: "Product Details & Cart", tag: "Checkout Screen", tilt: "" },
  { label: "Order Tracking", tag: "Delivery Screen", tilt: "md:translate-y-8 md:rotate-3" },
];

export default function Showcase() {
  return (
    <section className="overflow-hidden bg-hero py-20">
      <Reveal><h2 className="px-5 text-center text-3xl font-semibold tracking-tight">Everything you need. Right in your pocket.</h2></Reveal>
      <div className="mt-12 flex justify-center gap-6 px-5">
        {screens.map((screen, k) => (
          <div key={k} className={`${screen.tilt} ${k !== 1 ? "hidden md:block" : ""}`}>
            <PhoneMockup label={screen.label} tag={screen.tag} />
          </div>
        ))}
      </div>
    </section>
  );
}
