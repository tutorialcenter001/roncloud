import { FiSend } from "react-icons/fi";

export default function ContactForm() {
  return (
    <form className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm dark:border-gray-800 dark:bg-gray-900">

      <div className="grid gap-6 md:grid-cols-2">

        <input
          type="text"
          placeholder="Full Name"
          className="rounded-xl border border-gray-300 bg-transparent p-4 outline-none focus:border-orange-500 dark:border-gray-700"
        />

        <input
          type="email"
          placeholder="Email Address"
          className="rounded-xl border border-gray-300 bg-transparent p-4 outline-none focus:border-orange-500 dark:border-gray-700"
        />

      </div>

      <input
        type="text"
        placeholder="Company"
        className="mt-6 w-full rounded-xl border border-gray-300 bg-transparent p-4 outline-none focus:border-orange-500 dark:border-gray-700"
      />

      <select
        className="mt-6 w-full rounded-xl border border-gray-300 bg-transparent p-4 outline-none focus:border-orange-500 dark:border-gray-700"
      >
        <option>Choose a Service</option>
        <option>Software Development</option>
        <option>Web Development</option>
        <option>Mobile App Development</option>
        <option>Cloud Solutions</option>
        <option>Cybersecurity</option>
        <option>Artificial Intelligence</option>
      </select>

      <textarea
        rows="6"
        placeholder="Tell us about your project..."
        className="mt-6 w-full rounded-xl border border-gray-300 bg-transparent p-4 outline-none focus:border-orange-500 dark:border-gray-700"
      />

      <button
        className="mt-6 inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-orange-500 to-amber-400 px-8 py-4 font-semibold text-white transition hover:scale-105"
      >
        Send Message
        <FiSend />
      </button>

    </form>
  );
}