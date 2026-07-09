import { motion } from "framer-motion";
import { FiCheckCircle, FiArrowRight } from "react-icons/fi";
import officeImage from "../../assets/images/about.png";

const features = [
  "Enterprise Software Development",
  "Artificial Intelligence Solutions",
  "Cloud Computing & DevOps",
  "Cybersecurity Services",
  "Business Process Automation",
  "Long-term Technical Support",
];

const About = () => {
  return (
    <section
      id="about"
      className="bg-gray-50 py-28 dark:bg-gray-950"
    >
      <div className="mx-auto max-w-7xl px-6">

        <div className="grid items-center gap-20 lg:grid-cols-2">

          {/* Left */}

          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="overflow-hidden rounded-3xl shadow-2xl">
              <img
                src={officeImage}
                alt="Roncloud Technologies"
                className="h-full w-full object-cover"
              />
            </div>
          </motion.div>

          {/* Right */}

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <p className="font-semibold uppercase tracking-[0.3em] text-orange-500">
              About Roncloud
            </p>

            <h2 className="mt-5 text-5xl font-bold text-gray-900 dark:text-white">
              Engineering Digital Transformation Across Industries
            </h2>

            <p className="mt-6 leading-8 text-gray-600 dark:text-gray-400">
              Roncloud Technologies is a forward-thinking technology company
              delivering innovative software solutions that empower businesses,
              government agencies, educational institutions, and startups to
              achieve sustainable growth through digital transformation.
            </p>

            <p className="mt-6 leading-8 text-gray-600 dark:text-gray-400">
              From enterprise software and AI-powered applications to cloud
              infrastructure and cybersecurity, we help organizations build
              scalable, secure, and future-ready digital solutions.
            </p>

            <div className="mt-10 grid gap-4 sm:grid-cols-2">

              {features.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3"
                >
                  <FiCheckCircle className="text-orange-500" size={22} />

                  <span className="text-gray-700 dark:text-gray-300">
                    {item}
                  </span>
                </div>
              ))}

            </div>

            <button className="mt-10 inline-flex items-center gap-2 rounded-full bg-orange-500 px-7 py-3 font-semibold text-white transition hover:bg-orange-600">
              Learn More

              <FiArrowRight />
            </button>

          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default About;