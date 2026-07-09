import { motion } from "framer-motion";
import { FiArrowRight, FiCalendar } from "react-icons/fi";

const CTA = () => {
  return (
    <section className="py-28 bg-white dark:bg-gray-900">
      <div className="mx-auto max-w-7xl px-6">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="
            relative
            overflow-hidden
            rounded-[40px]
            bg-gradient-to-r
            from-orange-500
            via-orange-400
            to-amber-400
            p-12
            lg:p-20
          "
        >

          {/* Background Glow */}

          <div className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-white/10 blur-3xl" />

          <div className="absolute -bottom-24 -right-24 h-80 w-80 rounded-full bg-yellow-200/20 blur-3xl" />

          <div className="relative z-10">

            <div className="max-w-4xl">

              <span className="rounded-full bg-white/20 px-5 py-2 text-sm font-semibold text-white backdrop-blur">
                Let's Build Together
              </span>

              <h2 className="mt-8 text-5xl font-bold leading-tight text-white lg:text-6xl">
                Ready to Transform
                <br />
                Your Business?
              </h2>

              <p className="mt-8 max-w-3xl text-lg leading-8 text-white/90">
                Whether you're launching a startup, scaling your enterprise,
                automating operations, or building the next innovative digital
                platform, Roncloud Technologies is your trusted technology
                partner.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">

                <a
                  href="#contact"
                  className="
                    inline-flex
                    items-center
                    gap-3
                    rounded-full
                    bg-white
                    px-8
                    py-4
                    font-semibold
                    text-orange-600
                    transition
                    hover:-translate-y-1
                  "
                >
                  Start Your Project
                  <FiArrowRight />
                </a>

                <a
                  href="#contact"
                  className="
                    inline-flex
                    items-center
                    gap-3
                    rounded-full
                    border
                    border-white/40
                    px-8
                    py-4
                    font-semibold
                    text-white
                    backdrop-blur
                    transition
                    hover:bg-white/10
                  "
                >
                  <FiCalendar />

                  Schedule a Meeting
                </a>

              </div>

            </div>

          </div>

        </motion.div>

      </div>
    </section>
  );
};

export default CTA;