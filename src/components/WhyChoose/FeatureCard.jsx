const FeatureCard = ({ feature }) => {
  const Icon = feature.icon;

  return (
    <div
      className="
      group
      rounded-3xl
      border
      border-gray-200
      bg-white
      p-8
      transition-all
      duration-300
      hover:-translate-y-2
      hover:border-orange-400
      hover:shadow-xl
      dark:border-gray-800
      dark:bg-gray-900
    "
    >
      <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-orange-100 text-orange-500 transition-all group-hover:bg-orange-500 group-hover:text-white dark:bg-orange-500/20">
        <Icon size={28} />
      </div>

      <h3 className="text-xl font-bold text-gray-900 dark:text-white">
        {feature.title}
      </h3>

      <p className="mt-4 leading-7 text-gray-600 dark:text-gray-400">
        {feature.description}
      </p>
    </div>
  );
};

export default FeatureCard;