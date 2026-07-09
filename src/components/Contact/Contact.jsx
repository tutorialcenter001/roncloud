import { motion } from "framer-motion";
import ContactInfo from "./ContactInfo";
import ContactForm from "./ContactForm";

export default function Contact() {
  return (
    <section
      id="contact"
      className="bg-gray-50 py-28 dark:bg-gray-950"
    >
      <div className="mx-auto max-w-7xl px-6">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="font-semibold uppercase tracking-[0.3em] text-orange-500">
            Contact Us
          </p>

          <h2 className="mt-4 text-5xl font-bold text-gray-900 dark:text-white">
            Let's Build Something Great Together
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-gray-600 dark:text-gray-400">
            Have an idea, project, or challenge? We'd love to hear from you.
            Let's discuss how Roncloud Technologies can help turn your vision
            into reality.
          </p>
        </motion.div>

        <div className="mt-20 grid gap-12 lg:grid-cols-5">

          <div className="lg:col-span-2">
            <ContactInfo />
          </div>

          <div className="lg:col-span-3">
            <ContactForm />
          </div>

        </div>

      </div>
    </section>
  );
}