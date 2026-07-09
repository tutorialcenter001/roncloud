import {
  FiMail,
  FiPhone,
  FiMapPin,
  FiClock,
} from "react-icons/fi";

const contacts = [
  {
    icon: FiPhone,
    title: "Phone",
    value: "+234 818 904 5396",
    sub: "+234 802 960 6405",
  },
  {
    icon: FiMail,
    title: "Email",
    value: "info@roncloud.com.ng",
    sub: "roncloudtechnologies@gmail.com",
  },
  {
    icon: FiMapPin,
    title: "Location",
    value: "Lagos, Nigeria",
    sub: "Available Worldwide",
  },
  {
    icon: FiClock,
    title: "Working Hours",
    value: "Mon - Fri",
    sub: "9:00 AM - 6:00 PM",
  },
];

export default function ContactInfo() {
  return (
    <div className="space-y-6">
      {contacts.map((item) => {
        const Icon = item.icon;

        return (
          <div
            key={item.title}
            className="flex gap-5 rounded-3xl border border-gray-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl dark:border-gray-800 dark:bg-gray-900"
          >
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-100 text-orange-500 dark:bg-orange-500/20">
              <Icon size={26} />
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white">
                {item.title}
              </h3>

              <p className="mt-2 text-gray-600 dark:text-gray-400">
                {item.value}
              </p>

              <p className="text-sm text-gray-500">
                {item.sub}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}