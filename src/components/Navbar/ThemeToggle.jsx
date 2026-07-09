import { FiMoon, FiSun } from "react-icons/fi";

const ThemeToggle = ({ darkMode, setDarkMode }) => {
  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      className="flex h-11 w-11 items-center justify-center rounded-full border border-gray-300 bg-white/80 text-gray-700 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-orange-500 hover:text-white dark:border-gray-700 dark:bg-gray-800/80 dark:text-gray-200"
      aria-label="Toggle theme"
    >
      {darkMode ? <FiSun size={18} /> : <FiMoon size={18} />}
    </button>
  );
};

export default ThemeToggle;