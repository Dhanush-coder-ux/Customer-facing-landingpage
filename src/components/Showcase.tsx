import PhoneMockup from "./PhoneMockup";
import Reveal from "./Reveal";
export default function Showcase() {
  const tilt = ["md:translate-y-8 md:-rotate-3", "", "md:translate-y-8 md:rotate-3"];
  return (
    <section className="overflow-hidden bg-hero py-20">
      <Reveal><h2 className="px-5 text-center text-3xl font-semibold tracking-tight">Everything you need. Right in your pocket.</h2></Reveal>
      <div className="mt-12 flex justify-center gap-6 px-5">
        {tilt.map((c, k) => <div key={k} className={`${c} ${k !== 1 ? "hidden md:block" : ""}`}><PhoneMockup /></div>)}
      </div>
    </section>
  );
}
