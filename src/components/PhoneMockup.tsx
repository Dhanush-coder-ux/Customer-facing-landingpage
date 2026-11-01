import { Image as ImageIcon, Sparkles } from "lucide-react";

interface PhoneMockupProps {
  className?: string;
  label?: string;
  tag?: string;
  imageSrc?: string;
  aspectRatio?: string;
}

export default function PhoneMockup({
  className = "",
  label = "App Screen",
  tag = "OG App Screenshot",
  imageSrc,
}: PhoneMockupProps) {
  return (
    <div
      className={`relative mx-auto w-[260px] rounded-[2.8rem] border-[8px] border-stone-900 bg-milk shadow-2xl ring-1 ring-black/5 sm:w-[290px] ${className}`}
    >
      {/* Top Speaker / Dynamic Island */}
      <div className="mx-auto mt-2 h-4 w-24 rounded-full bg-stone-900" />

      {/* Screen area */}
      <div className="p-3">
        <div className="relative flex aspect-[9/18] w-full flex-col items-center justify-center overflow-hidden rounded-[2rem] border-2 border-dashed border-orange-300/80 bg-gradient-to-b from-milk via-orange-50/50 to-milk-warm/60 p-4 text-center transition-all">
          {imageSrc ? (
            <img
              src={imageSrc}
              alt={label}
              className="h-full w-full rounded-[1.8rem] object-cover"
            />
          ) : (
            <div className="flex flex-col items-center justify-center space-y-3">
              <div className="relative">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-orange-100 text-primary shadow-inner">
                  <ImageIcon size={30} className="stroke-[1.75]" />
                </div>
                <span className="absolute -bottom-1 -right-1 flex h-6 w-6 items-center justify-center rounded-full bg-primary text-white shadow">
                  <Sparkles size={12} />
                </span>
              </div>

              <div className="space-y-1 px-2">
                <span className="inline-block rounded-full bg-orange-100/90 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-primary-dark">
                  {tag}
                </span>
                <p className="text-xs font-semibold text-ink">{label}</p>
                <p className="text-[11px] leading-tight text-ink/50">
                  Drop your real app screenshot here
                </p>
              </div>

              <div className="w-full max-w-[170px] rounded-xl border border-orange-200/60 bg-white/80 p-2.5 shadow-sm backdrop-blur">
                <div className="flex items-center justify-center gap-1.5 text-[10px] font-medium text-orange-700">
                  <span>PNG / JPG</span>
                  <span>•</span>
                  <span>1080 × 2400</span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Bottom home indicator line */}
      <div className="mx-auto mb-2 h-1 w-24 rounded-full bg-stone-400/50" />
    </div>
  );
}
