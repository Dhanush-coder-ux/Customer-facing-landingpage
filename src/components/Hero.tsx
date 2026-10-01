import { motion } from "framer-motion";
import { Heart, ShoppingCart, Sparkles, TrendingUp } from "lucide-react";
import PlayButton from "./PlayButton";
import PhoneMockup from "./PhoneMockup";
const chip = "absolute hidden items-center gap-2 rounded-2xl border border-outline bg-white px-3 py-2 text-xs shadow-lg md:flex animate-float";
export default function Hero() {
  return (
    <section id="home" className="bg-gradient-to-b from-hero to-white">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-16 md:grid-cols-2 md:py-24">
        <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <span className="rounded-full border border-highlight bg-white px-3 py-1 text-sm text-primary">Your Digital Shopping Companion</span>
          <h1 className="mt-5 text-4xl font-semibold tracking-tight sm:text-5xl">Discover. Shop. Enjoy.</h1>
          <p className="mt-4 text-xl text-ink/80">Everything you love to shop, right at your fingertips.</p>
          <p className="mt-3 max-w-md text-ink/60">Shopper brings your favorite digital stores, products, and shopping experiences together in one simple mobile app.</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <PlayButton />
            <a href="#features" className="inline-flex items-center justify-center rounded-xl border border-outline px-6 py-3 font-medium transition hover:border-primary hover:text-primary">Explore Shopper</a>
          </div>
          <p className="mt-3 text-sm text-ink/60">Available on Android</p>
        </motion.div>
        <motion.div className="relative" initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.15 }}>
          <PhoneMockup />
          <div className={`${chip} -left-2 top-12`}><Sparkles size={14} className="text-primary" />New arrivals</div>
          <div className={`${chip} -right-2 top-32`}><TrendingUp size={14} className="text-primary" />Popular products</div>
          <div className={`${chip} bottom-24 -left-4`}><ShoppingCart size={14} className="text-primary" />3 in cart</div>
          <div className={`${chip} bottom-10 -right-2`}><Heart size={14} className="text-primary" />Wishlist</div>
        </motion.div>
      </div>
    </section>
  );
}
