import { APP_LOGO } from "../constants";

interface ImageSource {
  webp?: string;
  png: string;
  width?: number;
  height?: number;
}

interface PhoneMockupProps {
  className?: string;
  label?: string;
  image?: ImageSource | string;
  priority?: boolean;
}

export default function PhoneMockup({
  className = "",
  label = "ShopiQ App Screen",
  image,
  priority = false,
}: PhoneMockupProps) {
  const webpSrc = typeof image === "object" ? image.webp : undefined;
  const pngSrc = typeof image === "object" ? image.png : image;
  const width = typeof image === "object" && image.width ? image.width : 887;
  const height = typeof image === "object" && image.height ? image.height : 1774;

  return (
    <div
      className={`relative mx-auto w-full max-w-[250px] sm:max-w-[280px] rounded-[2.6rem] border-[7px] sm:border-[8px] border-stone-900 bg-stone-900 shadow-2xl ring-1 ring-black/10 transition-transform duration-300 ${className}`}
    >
      {/* Top Dynamic Island / Speaker Pill */}
      <div
        className="absolute left-1/2 top-2 z-20 h-3.5 w-20 sm:h-4 sm:w-24 -translate-x-1/2 rounded-full bg-stone-900"
        aria-hidden="true"
      />

      {/* Screen container with exact 1:2 aspect ratio matching the screenshots */}
      <div className="relative overflow-hidden rounded-[2rem] sm:rounded-[2.2rem] bg-stone-900 aspect-[887/1774]">
        {pngSrc ? (
          <picture>
            {webpSrc && <source srcSet={webpSrc} type="image/webp" />}
            <img
              src={pngSrc}
              alt={label}
              width={width}
              height={height}
              className="block h-full w-full object-cover object-top"
              loading={priority ? "eager" : "lazy"}
              decoding={priority ? "sync" : "async"}
              {...({ fetchPriority: priority ? "high" : "auto" } as Record<string, string>)}
            />
          </picture>
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-stone-900 p-4 text-center">
            <picture>
              <source srcSet={APP_LOGO.webp} type="image/webp" />
              <img
                src={APP_LOGO.png}
                alt="ShopiQ App Icon"
                width={56}
                height={56}
                className="h-14 w-14 object-contain"
                loading="lazy"
              />
            </picture>
          </div>
        )}
      </div>

      {/* Bottom home indicator line */}
      <div
        className="mx-auto my-1.5 sm:my-2 h-1 w-20 sm:w-24 rounded-full bg-stone-500/40"
        aria-hidden="true"
      />
    </div>
  );
}
