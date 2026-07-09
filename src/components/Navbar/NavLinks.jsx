const links = [
  "Home",
  "About",
  "Services",
  "Portfolio",
  "Contact",
];

const NavLinks = ({ onLinkClick }) => {
  return (
    <>
      {links.map((link) => (
        <a
          key={link}
          href={`#${link.toLowerCase()}`}
          onClick={onLinkClick}
          className="relative text-sm font-semibold text-gray-700 transition-all duration-300 hover:text-orange-500 dark:text-gray-200 after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-orange-500 after:transition-all after:duration-300 hover:after:w-full"
        >
          {link}
        </a>
      ))}
    </>
  );
};

export default NavLinks;