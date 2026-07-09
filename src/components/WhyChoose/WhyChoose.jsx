import { motion } from "framer-motion";
import whyChoose from "../../data/whyChoose";
import FeatureCard from "./FeatureCard";

const stats = [
  {
    value: "30+",
    label: "Projects Delivered",
  },
  {
    value: "99%",
    label: "Client Satisfaction",
  },
  {
    value: "24/7",
    label: "Technical Support",
  },
  {
    value: "5+",
    label: "Years Experience",
  },
];

const WhyChoose = () => {
  return (
    <section
      className="bg-gray-50 py-28 dark:bg-gray-950"
      id="why-us"
    >
      <div className="mx-auto max-w-7xl px-6">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <span className="font-semibold uppercase tracking-[0.3em] text-orange-500">
            Why Choose Roncloud
          </span>

          <h2 className="mt-4 text-5xl font-bold text-gray-900 dark:text-white">
            Technology Built for Business Success
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-600 dark:text-gray-400">
            We partner with organizations to design, build, and maintain secure,
            scalable, and high-performing software that delivers measurable
            business value.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {whyChoose.map((item) => (
            <FeatureCard
              key={item.id}
              feature={item}
            />
          ))}
        </div>

        <div className="mt-24 grid grid-cols-2 gap-6 rounded-3xl bg-gradient-to-r from-orange-500 to-amber-400 p-10 text-white md:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <h3 className="text-5xl font-bold">{stat.value}</h3>
              <p className="mt-3 text-white/90">{stat.label}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default WhyChoose;