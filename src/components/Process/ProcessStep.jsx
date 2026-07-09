const ProcessStep = ({ step, isLast }) => {
  const Icon = step.icon;

  return (
    <div className="relative flex gap-6">
      {/* Timeline */}
      <div className="flex flex-col items-center">
        <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-orange-500 to-amber-400 text-white shadow-lg">
          <Icon size={28} />
        </div>

        {!isLast && (
          <div className="mt-2 h-24 w-1 rounded-full bg-gradient-to-b from-orange-500 to-orange-200 dark:to-gray-700" />
        )}
      </div>

      {/* Content */}
      <div className="pb-10">
        <span className="text-sm font-semibold uppercase tracking-widest text-orange-500">
          Step {step.id}
        </span>

        <h3 className="mt-2 text-2xl font-bold text-gray-900 dark:text-white">
          {step.title}
        </h3>

        <p className="mt-3 max-w-2xl leading-7 text-gray-600 dark:text-gray-400">
          {step.description}
        </p>
      </div>
    </div>
  );
};

export default ProcessStep;