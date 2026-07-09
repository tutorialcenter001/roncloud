import { useEffect, useState } from "react";
import { HiOutlineMenuAlt3, HiOutlineX } from "react-icons/hi";
import ThemeToggle from "./ThemeToggle";
import NavLinks from "./NavLinks";

import logoLight from "../../assets/images/logo-light.jpg";
import logoDark from "../../assets/images/logo-dark.png";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 24);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div
        className={`mx-auto mt-4 flex max-w-7xl items-center justify-between rounded-full border px-4 py-3 shadow-lg backdrop-blur-xl transition-all duration-300 sm:px-6 ${
          scrolled
            ? "border-orange-200/70 bg-white/80 dark:border-gray-700/70 dark:bg-gray-900/80"
            : "border-transparent bg-white/70 dark:bg-gray-950/60"
        }`}
      >
        <a href="#home" className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-orange-500 to-amber-400 p-1 shadow-md">
            <img
              src={darkMode ? logoDark : logoLight}
              alt="Roncloud Technologies"
              className="h-full w-full rounded-full object-cover"
            />
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-semibold uppercase tracking-[0.25em] text-orange-500">
              Roncloud
            </span>
            <span className="text-xs text-gray-500 dark:text-gray-400">
              Digital Studio
            </span>
          </div>
        </a>

        <nav className="hidden items-center gap-7 lg:flex">
          <NavLinks />
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <ThemeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
          <a
            href="#contact"
            className="rounded-full bg-gradient-to-r from-orange-500 to-amber-400 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-orange-500/20 transition hover:scale-105 hover:shadow-orange-500/30"
          >
            Let&apos;s Talk
          </a>
        </div>

        <button
          type="button"
          className="flex h-11 w-11 items-center justify-center rounded-full border border-gray-300 bg-white/80 text-gray-700 shadow-sm transition hover:border-orange-400 hover:text-orange-500 dark:border-gray-700 dark:bg-gray-800/80 dark:text-gray-200 lg:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle navigation"
        >
          {mobileOpen ? <HiOutlineX size={22} /> : <HiOutlineMenuAlt3 size={22} />}
        </button>
      </div>

      <div
        className={`overflow-hidden transition-all duration-300 lg:hidden ${
          mobileOpen ? "mt-3 max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="mx-4 rounded-3xl border border-orange-100 bg-white/95 p-5 shadow-2xl dark:border-gray-700 dark:bg-gray-900/95">
          <div className="flex flex-col gap-4">
            <NavLinks mobile onNavigate={() => setMobileOpen(false)} />
            <div className="flex items-center justify-between border-t border-gray-200 pt-4 dark:border-gray-700">
              <ThemeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
              <a
                href="#contact"
                className="rounded-full bg-gradient-to-r from-orange-500 to-amber-400 px-4 py-2 text-sm font-semibold text-white"
                onClick={() => setMobileOpen(false)}
              >
                Let&apos;s Talk
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;