import { FiArrowRight } from "react-icons/fi";

const ServiceCard = ({ service }) => {
  const Icon = service.icon;

  return (
    <div className="group rounded-3xl border border-gray-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-orange-400 hover:shadow-2xl dark:border-gray-800 dark:bg-gray-900">
      <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-orange-100 text-orange-500 transition group-hover:bg-orange-500 group-hover:text-white dark:bg-orange-500/20">
        <Icon size={28} />
      </div>

      <h3 className="text-xl font-bold text-gray-900 dark:text-white">
        {service.title}
      </h3>

      <p className="mt-4 leading-7 text-gray-600 dark:text-gray-400">
        {service.description}
      </p>

      <button className="mt-6 inline-flex items-center gap-2 font-semibold text-orange-500 transition-all group-hover:gap-3">
        Learn More
        <FiArrowRight />
      </button>
    </div>
  );
};

export default ServiceCard;