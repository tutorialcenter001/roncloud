import { motion } from "framer-motion";
import ClientCard from "./ClientCard";

const clients = [
  "Nigerian Army",
  "Tutorial Center Africa",
  "Caljez Group",
  "Boomyaga",
  "Cyberpedia",
  "Internopay",
  "OGDSL"
];

const TrustedBy = () => {
  return (
    <section
      className="
        bg-gray-50
        py-24
        dark:bg-gray-950
      "
    >
      <div className="mx-auto max-w-7xl px-6">

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <p className="text-center text-orange-500 font-semibold uppercase tracking-[0.25em]">
            Trusted By
          </p>

          <h2 className="mt-4 text-center text-4xl font-bold text-gray-900 dark:text-white">
            Organizations Driving Digital Transformation
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-center text-lg text-gray-600 dark:text-gray-400">
            We build secure, scalable, and high-performing digital solutions for
            businesses, educational institutions, and government organizations.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {clients.map((client) => (
            <ClientCard
              key={client}
              name={client}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default TrustedBy;