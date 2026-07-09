const FloatingBadge = ({ title, ...style }) => {
  return (
    <div
      style={style}
      className="absolute rounded-full border border-white/40 bg-white/80 px-5 py-3 text-sm font-semibold shadow-xl backdrop-blur-md dark:border-gray-700 dark:bg-gray-900/80 dark:text-white"
    >
      {title}
    </div>
  );
};

export default FloatingBadge;