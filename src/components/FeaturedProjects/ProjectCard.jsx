import { FiArrowRight } from "react-icons/fi";

const ProjectCard = ({ project }) => {
  return (
    <div
      className="
        group
        overflow-hidden
        rounded-3xl
        border
        border-gray-200
        bg-white
        p-8
        shadow-sm
        transition-all
        duration-500
        hover:-translate-y-3
        hover:shadow-2xl
        dark:border-gray-800
        dark:bg-gray-900
      "
    >
      <div
        className={`
          inline-flex
          h-16
          w-16
          items-center
          justify-center
          rounded-2xl
          bg-gradient-to-r
          ${project.color}
          text-3xl
        `}
      >
        {project.icon}
      </div>

      <p className="mt-6 text-sm font-semibold uppercase tracking-widest text-orange-500">
        {project.category}
      </p>

      <h3 className="mt-2 text-2xl font-bold text-gray-900 dark:text-white">
        {project.title}
      </h3>

      <p className="mt-4 leading-7 text-gray-600 dark:text-gray-400">
        {project.description}
      </p>

      <div className="mt-6 flex flex-wrap gap-2">
        {project.technologies.map((tech) => (
          <span
            key={tech}
            className="
              rounded-full
              bg-orange-100
              px-3
              py-1
              text-sm
              text-orange-700
              dark:bg-orange-500/20
              dark:text-orange-300
            "
          >
            {tech}
          </span>
        ))}
      </div>

      <button
        className="
          mt-8
          inline-flex
          items-center
          gap-2
          font-semibold
          text-orange-500
          transition-all
          group-hover:gap-3
        "
      >
        View Case Study

        <FiArrowRight />
      </button>
    </div>
  );
};

export default ProjectCard;