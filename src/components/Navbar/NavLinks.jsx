const links = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Contact", href: "#contact" },
];

const NavLinks = ({ mobile = false, onNavigate }) => {
  return (
    <>
      {links.map((link) => (
        <a
          key={link.label}
          href={link.href}
          onClick={onNavigate}
          className={`group relative font-medium transition ${
            mobile
              ? "rounded-2xl px-3 py-2 text-gray-700 hover:bg-orange-50 hover:text-orange-500 dark:text-gray-200 dark:hover:bg-gray-800"
              : "text-gray-700 hover:text-orange-500 dark:text-gray-200"
          }`}
        >
          <span className="relative inline-block">
            {link.label}
            <span
              className={`absolute left-0 -bottom-1 h-[2px] rounded-full bg-orange-500 transition-all duration-300 ${
                mobile ? "w-full" : "w-0 group-hover:w-full"
              }`}
            />
          </span>
        </a>
      ))}
    </>
  );
};

export default NavLinks;