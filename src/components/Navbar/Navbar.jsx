import { useEffect, useState } from "react";
import { HiOutlineMenuAlt3, HiOutlineX } from "react-icons/hi";
import { FiArrowRight } from "react-icons/fi";
import ThemeToggle from "./ThemeToggle";
import NavLinks from "./NavLinks";

import logoLight from "../../assets/images/logo-light.jpg";
import logoDark from "../../assets/images/logo-dark.png";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setMobileOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header
      className={`fixed left-0 top-0 z-50 w-full transition-all duration-500 ${
        scrolled
          ? "border-b border-white/70 bg-white/80 shadow-[0_10px_40px_rgba(15,23,42,0.08)] backdrop-blur-xl dark:border-gray-800/70 dark:bg-gray-900/80"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a href="#home" className="flex items-center gap-3">
          <img
            src={darkMode ? logoDark : logoLight}
            alt="Roncloud Technologies"
            className="h-12 w-auto object-contain"
          />
          <div className="hidden sm:block">
            <p className="text-sm font-semibold tracking-[0.2em] text-orange-500 uppercase">
              Roncloud
            </p>
            <p className="text-xs text-gray-600 dark:text-gray-300">
              Digital Innovation
            </p>
          </div>
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          <NavLinks />
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <ThemeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-orange-500 to-amber-400 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-orange-500/20 transition hover:-translate-y-0.5 hover:shadow-xl"
          >
            Get Started
            <FiArrowRight size={16} />
          </a>
        </div>

        <button
          className="flex h-11 w-11 items-center justify-center rounded-full border border-gray-300 bg-white/80 text-gray-700 shadow-sm transition hover:bg-orange-500 hover:text-white dark:border-gray-700 dark:bg-gray-800/80 dark:text-gray-200 lg:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle navigation menu"
        >
          {mobileOpen ? <HiOutlineX size={22} /> : <HiOutlineMenuAlt3 size={22} />}
        </button>
      </div>

      {mobileOpen && (
        <div className="border-t border-gray-200 bg-white/95 px-4 py-5 shadow-2xl backdrop-blur-xl dark:border-gray-800 dark:bg-gray-900/95 lg:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-4">
            <NavLinks onLinkClick={() => setMobileOpen(false)} />
            <div className="flex items-center justify-between gap-3 pt-2">
              <ThemeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
              <a
                href="#contact"
                onClick={() => setMobileOpen(false)}
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-orange-500 to-amber-400 px-4 py-2 text-sm font-semibold text-white"
              >
                Let’s Talk
                <FiArrowRight size={15} />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;