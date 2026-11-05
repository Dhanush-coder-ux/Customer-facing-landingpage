import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { NAV, PLAY_STORE_URL, APP_LOGO } from "../constants";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 8);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && open) {
        setOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [open]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      {/* Skip to Content for Accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[100] focus:rounded-lg focus:bg-primary focus:px-4 focus:py-2 focus:text-white focus:shadow-lg focus:outline-none"
      >
        Skip to main content
      </a>

      <header
        className={`sticky top-0 z-50 transition-colors duration-200 ${
          scrolled
            ? "border-b border-outline bg-white/90 backdrop-blur-md shadow-sm"
            : "border-b border-transparent bg-white/95 backdrop-blur-sm"
        }`}
      >
        <nav
          className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5"
          aria-label="Main Navigation"
        >
          <a
            href="#home"
            className="flex items-center gap-2.5 font-bold text-lg text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-lg px-1 py-0.5"
            aria-label="ShopIQ Home"
          >
            <picture>
              <source srcSet={APP_LOGO.webp} type="image/webp" />
              <img
                src={APP_LOGO.png}
                alt="ShopIQ Logo"
                width={36}
                height={36}
                className="h-9 w-9 rounded-xl object-contain shadow-sm"
              />
            </picture>
            <span className="tracking-tight text-xl font-bold">ShopIQ</span>
          </a>

          {/* Desktop Navigation Links */}
          <ul className="hidden items-center gap-8 text-sm font-medium text-stone-700 md:flex">
            {NAV.map((n) => (
              <li key={n.href}>
                <a
                  className="transition hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded px-2 py-1"
                  href={n.href}
                >
                  {n.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Desktop CTA */}
          <div className="hidden items-center gap-4 md:flex">
            <a
              href={PLAY_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-primary-dark hover:scale-[1.02] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
            >
              Download App
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center rounded-lg text-ink transition hover:bg-orange-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary md:hidden"
            aria-label={open ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={open}
            aria-controls="mobile-nav-menu"
            onClick={() => setOpen(!open)}
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {/* Mobile Navigation Dropdown & Overlay */}
        {open && (
          <div
            id="mobile-nav-menu"
            className="fixed inset-x-0 top-16 bottom-0 z-50 flex flex-col justify-between bg-white px-6 py-6 md:hidden shadow-xl overflow-y-auto"
          >
            <div className="space-y-1">
              {NAV.map((n) => (
                <a
                  key={n.href}
                  href={n.href}
                  onClick={() => setOpen(false)}
                  className="flex items-center rounded-xl px-4 py-3 text-base font-semibold text-stone-800 transition hover:bg-orange-50 hover:text-primary active:bg-orange-100"
                >
                  {n.label}
                </a>
              ))}
            </div>

            <div className="pt-6 border-t border-outline">
              <a
                href={PLAY_STORE_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
                className="flex w-full items-center justify-center rounded-full bg-primary py-3.5 text-center text-sm font-semibold text-white shadow-md transition hover:bg-primary-dark"
              >
                Download App on Google Play
              </a>
              <p className="mt-3 text-center text-xs text-stone-500">
                ShopIQ Mobile • Free Download
              </p>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
