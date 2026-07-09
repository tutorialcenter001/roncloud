const stats = [
  {
    value: "30+",
    label: "Projects",
  },
  {
    value: "10+",
    label: "Clients",
  },
  {
    value: "24/7",
    label: "Support",
  },
];

const HeroStats = () => {
  return (
    <div className="mt-16 flex flex-wrap gap-10">
      {stats.map((item) => (
        <div key={item.label}>
          <h3 className="text-3xl font-bold text-orange-500">
            {item.value}
          </h3>

          <p className="mt-1 text-gray-600 dark:text-gray-400">
            {item.label}
          </p>
        </div>
      ))}
    </div>
  );
};

export default HeroStats;