import { FaBullseye, FaEye } from "react-icons/fa";

const cards = [
  {
    title: "Our Mission",
    icon: FaBullseye,
    description:
      "To empower businesses and institutions with innovative technology solutions that drive growth, efficiency, and long-term success.",
  },

  {
    title: "Our Vision",
    icon: FaEye,
    description:
      "To become Africa's leading technology company delivering world-class software solutions that transform industries.",
  },
];

const MissionVision = () => {
  return (
    <section className="bg-white py-20 dark:bg-gray-900">
      <div className="mx-auto grid max-w-7xl gap-8 px-6 md:grid-cols-2">

        {cards.map((card) => {
          const Icon = card.icon;

          return (
            <div
              key={card.title}
              className="rounded-3xl border border-gray-200 bg-white p-10 shadow-sm transition hover:shadow-xl dark:border-gray-800 dark:bg-gray-950"
            >
              <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-orange-100 text-orange-500 dark:bg-orange-500/20">
                <Icon size={28} />
              </div>

              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                {card.title}
              </h3>

              <p className="mt-5 leading-8 text-gray-600 dark:text-gray-400">
                {card.description}
              </p>
            </div>
          );
        })}

      </div>
    </section>
  );
};

export default MissionVision;