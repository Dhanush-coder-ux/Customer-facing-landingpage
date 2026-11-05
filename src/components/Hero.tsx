import { useState } from "react";
import { motion } from "framer-motion";
import { Heart, ShoppingCart, Sparkles, TrendingUp, Smartphone, Store } from "lucide-react";
import PlayButton from "./PlayButton";
import PhoneMockup from "./PhoneMockup";
import { APP_LOGO, SCREEN_HOME, SCREEN_STORE } from "../constants";

const chip =
  "absolute hidden lg:flex items-center gap-2 rounded-2xl border border-outline bg-white/95 px-3 py-2 text-xs font-semibold shadow-lg backdrop-blur animate-float z-20 text-stone-800";

export default function Hero() {
  const [mobileTab, setMobileTab] = useState<"home" | "store">("home");

  return (
    <section id="home" className="relative overflow-hidden bg-gradient-to-b from-hero to-white pt-8 pb-16 sm:py-20 lg:py-24">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 lg:grid-cols-12">
        {/* Left Column: Heading & Value Proposition */}
        <motion.div
          className="lg:col-span-6 text-center lg:text-left"
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2.5 rounded-full border border-orange-200 bg-white/90 px-3.5 py-1.5 text-xs font-semibold shadow-sm backdrop-blur">
            <picture>
              <source srcSet={APP_LOGO.webp} type="image/webp" />
              <img
                src={APP_LOGO.png}
                alt="ShopIQ App"
                width={20}
                height={20}
                className="h-5 w-5 rounded-md object-contain"
              />
            </picture>
            <span className="text-primary-dark tracking-wide uppercase text-[11px]">
              Your Digital Shopping Companion
            </span>
          </div>

          <h1 className="mt-5 text-4xl font-extrabold tracking-tight text-ink sm:text-5xl lg:text-6xl">
            Discover. Shop. <br className="hidden sm:inline" />
            <span className="text-primary">Enjoy.</span>
          </h1>

          <p className="mt-4 text-lg font-medium text-stone-700 sm:text-xl">
            Everything you love to shop, right at your fingertips.
          </p>

          <p className="mt-3 max-w-lg mx-auto lg:mx-0 text-sm sm:text-base leading-relaxed text-stone-600">
            ShopIQ connects you with curated digital stores and trending products in one unified, mobile-first shopping experience built for speed and simplicity.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-3.5 sm:flex-row lg:justify-start">
            <PlayButton />
            <a
              href="#features"
              className="inline-flex items-center justify-center rounded-xl border border-outline bg-white px-6 py-3 text-sm font-semibold text-stone-800 shadow-sm transition hover:border-primary hover:text-primary active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            >
              Explore Features
            </a>
          </div>

          <div className="mt-5 flex items-center justify-center lg:justify-start gap-2 text-xs font-medium text-stone-500">
            <span className="inline-block h-2 w-2 rounded-full bg-emerald-500" />
            <span>Available now on Android • Google Play Verified</span>
          </div>
        </motion.div>

        {/* Right Column: Real Device Showcase */}
        <motion.div
          className="relative lg:col-span-6 flex flex-col items-center justify-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
        >
          {/* Mobile Screen Switcher (shown on < sm screens to guarantee 0 horizontal overflow) */}
          <div className="mb-4 flex sm:hidden items-center gap-2 rounded-full border border-orange-200 bg-white p-1 shadow-sm">
            <button
              type="button"
              onClick={() => setMobileTab("home")}
              className={`flex items-center gap-1.5 rounded-full px-3.5 py-1 text-xs font-semibold transition ${
                mobileTab === "home"
                  ? "bg-primary text-white shadow-sm"
                  : "text-stone-600 hover:text-stone-900"
              }`}
            >
              <Smartphone size={13} />
              <span>Home Feed</span>
            </button>
            <button
              type="button"
              onClick={() => setMobileTab("store")}
              className={`flex items-center gap-1.5 rounded-full px-3.5 py-1 text-xs font-semibold transition ${
                mobileTab === "store"
                  ? "bg-primary text-white shadow-sm"
                  : "text-stone-600 hover:text-stone-900"
              }`}
            >
              <Store size={13} />
              <span>Store Page</span>
            </button>
          </div>

          {/* Mobile Single Phone View (< sm) */}
          <div className="block sm:hidden w-full max-w-[250px]">
            {mobileTab === "home" ? (
              <PhoneMockup
                image={SCREEN_HOME}
                label="ShopIQ Home Screen"
                priority={true}
                className="w-full"
              />
            ) : (
              <PhoneMockup
                image={SCREEN_STORE}
                label="ShopIQ Store Home Screen"
                priority={true}
                className="w-full"
              />
            )}
          </div>

          {/* Tablet & Desktop Duo Phone Layout (>= sm) */}
          <div className="hidden sm:flex relative items-center justify-center gap-4 md:gap-6 py-4">
            <div className="relative -rotate-2 transition-transform duration-300 hover:rotate-0 hover:z-20">
              <span className="absolute -top-3 left-4 z-20 rounded-full bg-white px-2.5 py-0.5 text-[11px] font-semibold text-primary-dark shadow ring-1 ring-orange-200">
                Home Feed
              </span>
              <PhoneMockup
                image={SCREEN_HOME}
                label="ShopIQ Home Screen"
                priority={true}
                className="w-[220px] sm:w-[240px] md:w-[260px]"
              />
            </div>
            <div className="relative translate-y-6 rotate-2 transition-transform duration-300 hover:rotate-0 hover:z-20">
              <span className="absolute -top-3 right-4 z-20 rounded-full bg-primary px-2.5 py-0.5 text-[11px] font-semibold text-white shadow">
                Store Page
              </span>
              <PhoneMockup
                image={SCREEN_STORE}
                label="ShopIQ Store Home Screen"
                priority={true}
                className="w-[220px] sm:w-[240px] md:w-[260px]"
              />
            </div>
          </div>

          {/* Floating Feature Badges (Desktop only to prevent overlap) */}
          <div className={`${chip} -left-4 top-10`}>
            <Sparkles size={14} className="text-primary" />
            <span>Verified Digital Stores</span>
          </div>
          <div className={`${chip} -right-4 top-24`}>
            <TrendingUp size={14} className="text-primary" />
            <span>Trending Products</span>
          </div>
          <div className={`${chip} bottom-20 -left-6`}>
            <ShoppingCart size={14} className="text-primary" />
            <span>Instant Cart Access</span>
          </div>
          <div className={`${chip} bottom-8 -right-4`}>
            <Heart size={14} className="text-primary" />
            <span>Curated Collections</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
