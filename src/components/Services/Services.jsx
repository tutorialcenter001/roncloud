import { motion } from "framer-motion";
import ServiceCard from "./ServiceCard";
import services from "../../data/services";

const Services = () => {
  return (
    <section
      id="services"
      className="bg-white py-28 dark:bg-gray-900"
    >
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="font-semibold uppercase tracking-[0.3em] text-orange-500">
            Our Services
          </p>

          <h2 className="mt-4 text-5xl font-bold text-gray-900 dark:text-white">
            Technology Solutions That Drive Growth
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-600 dark:text-gray-400">
            We combine innovation, strategy, and engineering to deliver software
            solutions that solve real business challenges and prepare
            organizations for the future.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => (
            <ServiceCard
              key={service.id}
              service={service}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;