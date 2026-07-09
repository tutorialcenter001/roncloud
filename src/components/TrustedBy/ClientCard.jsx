const ClientCard = ({ name }) => {
  return (
    <div
      className="
        flex
        h-24
        items-center
        justify-center
        rounded-2xl
        border
        border-gray-200
        bg-white
        px-8
        shadow-sm
        transition-all
        duration-300
        hover:-translate-y-2
        hover:border-orange-400
        hover:shadow-xl
        dark:border-gray-800
        dark:bg-gray-900
      "
    >
      <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-200">
        {name}
      </h3>
    </div>
  );
};

export default ClientCard;