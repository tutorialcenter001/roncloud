import { motion } from "framer-motion";

import ProjectCard from "./ProjectCard";

import projects from "../../data/projects";

const FeaturedProjects = () => {
  return (
    <section
      id="portfolio"
      className="bg-gray-50 py-28 dark:bg-gray-950"
    >
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="font-semibold uppercase tracking-[0.3em] text-orange-500">
            Featured Projects
          </p>

          <h2 className="mt-5 max-w-3xl text-5xl font-bold text-gray-900 dark:text-white">
            Delivering Technology That Creates Real Impact
          </h2>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-gray-600 dark:text-gray-400">
            Our experience spans education, government, enterprise software,
            and cloud solutions. Every project is built with scalability,
            security, and long-term business value in mind.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;