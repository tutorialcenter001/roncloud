import { motion } from "framer-motion";
import { FiArrowRight, FiPlayCircle } from "react-icons/fi";
import HeroStats from "./HeroStats";
import FloatingBadge from "./FloatingBadge";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-white pt-32 dark:bg-gray-950"
    >
      {/* Background */}

      <div className="absolute inset-0 -z-10">
        <div className="absolute left-0 top-0 h-[500px] w-[500px] rounded-full bg-orange-300/20 blur-3xl" />

        <div className="absolute right-0 bottom-0 h-[400px] w-[400px] rounded-full bg-blue-500/20 blur-3xl" />
      </div>

      <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 py-20 lg:grid-cols-2">

        {/* LEFT */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: .8 }}
        >
          <span className="rounded-full bg-orange-100 px-4 py-2 text-sm font-semibold text-orange-600 dark:bg-orange-500/20 dark:text-orange-300">
            🚀 Trusted Technology Partner
          </span>

          <h1 className="mt-6 text-5xl font-extrabold leading-tight text-gray-900 dark:text-white lg:text-7xl">
            Building
            <span className="block bg-gradient-to-r from-orange-500 to-amber-400 bg-clip-text text-transparent">
              Enterprise Software
            </span>
            That Powers Businesses
          </h1>

          <p className="mt-8 max-w-xl text-lg leading-8 text-gray-600 dark:text-gray-300">
            Roncloud Technologies helps businesses, government agencies,
            educational institutions, and startups build scalable web
            applications, enterprise software, cloud platforms, and AI-powered
            solutions.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">

            <button className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-orange-500 to-amber-400 px-7 py-4 font-semibold text-white shadow-lg transition hover:scale-105">
              Start a Project
              <FiArrowRight />
            </button>

            <button className="inline-flex items-center gap-2 rounded-full border border-gray-300 px-7 py-4 font-semibold text-gray-700 transition hover:border-orange-500 hover:text-orange-500 dark:border-gray-700 dark:text-gray-200">
              <FiPlayCircle />
              View Portfolio
            </button>

          </div>

          <HeroStats />

        </motion.div>

        {/* RIGHT */}

        <motion.div
          initial={{ opacity: 0, scale: .9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: .9 }}
          className="relative flex justify-center"
        >
          <div className="relative h-[520px] w-full max-w-lg">

            <div className="absolute inset-0 rounded-[40px] border border-white/30 bg-gradient-to-br from-orange-500 to-orange-300 shadow-2xl dark:border-gray-700">
            </div>

            <FloatingBadge
              title="Laravel"
              top="8%"
              left="-10%"
            />

            <FloatingBadge
              title="React"
              top="18%"
              right="-8%"
            />

            <FloatingBadge
              title="Cloud"
              bottom="22%"
              left="-8%"
            />

            <FloatingBadge
              title="AI"
              bottom="8%"
              right="-5%"
            />

            <FloatingBadge
              title="Cybersecurity"
              top="45%"
              left="-18%"
            />

          </div>

        </motion.div>

      </div>
    </section>
  );
};

export default Hero;