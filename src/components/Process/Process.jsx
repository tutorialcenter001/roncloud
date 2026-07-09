import { motion } from "framer-motion";
import process from "../../data/process";
import ProcessStep from "./ProcessStep";

const Process = () => {
  return (
    <section
      id="process"
      className="bg-white py-28 dark:bg-gray-900"
    >
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="font-semibold uppercase tracking-[0.3em] text-orange-500">
            Our Process
          </p>

          <h2 className="mt-4 text-5xl font-bold text-gray-900 dark:text-white">
            From Concept to Launch
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-600 dark:text-gray-400">
            Every successful project begins with a clear strategy. Our proven
            process ensures transparency, collaboration, and exceptional
            results.
          </p>
        </motion.div>

        <div className="mt-20 space-y-2">
          {process.map((step, index) => (
            <ProcessStep
              key={step.id}
              step={step}
              isLast={index === process.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;