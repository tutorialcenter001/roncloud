import {
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa";
import { Link } from "react-router-dom";

import logoDark from "../../assets/images/logo-dark.png";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-gray-950 text-gray-300">

      <div className="mx-auto max-w-7xl px-6 py-20">

        <div className="grid gap-12 lg:grid-cols-4">

          {/* Company */}

          <div>

            <img
              src={logoDark}
              alt="Roncloud"
              className="h-14"
            />

            <p className="mt-6 leading-8 text-gray-400">
              Roncloud Technologies is a software development company helping
              businesses, government agencies, and organizations build secure,
              scalable, and innovative digital solutions.
            </p>

          </div>

          {/* Company */}

          <div>

            <h3 className="mb-6 text-lg font-semibold text-white">
              Company
            </h3>

            <ul className="space-y-4">
              <li>
                <Link to="/#about" className="transition hover:text-orange-400">
                  About
                </Link>
              </li>

              <li>
                <Link to="/#services" className="transition hover:text-orange-400">
                  Services
                </Link>
              </li>

              <li>
                <Link to="/#portfolio" className="transition hover:text-orange-400">
                  Projects
                </Link>
              </li>

              <li>
                <Link to="/#contact" className="transition hover:text-orange-400">
                  Contact
                </Link>
              </li>
            </ul>

          </div>

          {/* Services */}

          <div>

            <h3 className="mb-6 text-lg font-semibold text-white">
              Services
            </h3>

            <ul className="space-y-4">

              <li>Software Development</li>

              <li>Web Applications</li>

              <li>Cloud Solutions</li>

              <li>Cybersecurity</li>

              <li>Artificial Intelligence</li>

            </ul>

          </div>

          {/* Connect */}

          <div>

            <h3 className="mb-6 text-lg font-semibold text-white">
              Connect
            </h3>

            <div className="space-y-4">

              <p>info@roncloud.com.ng</p>

              <p>+234 818 904 5396</p>

              <p>Lagos, Nigeria</p>

            </div>

            <div className="mt-8 flex gap-4">

              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noreferrer"
                className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-800 transition hover:bg-orange-500"
              >
                <FaFacebookF />
              </a>

              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-800 transition hover:bg-orange-500"
              >
                <FaLinkedinIn />
              </a>

              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noreferrer"
                className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-800 transition hover:bg-orange-500"
              >
                <FaInstagram />
              </a>

              <a
                href="https://wa.me/2348189045396"
                target="_blank"
                rel="noreferrer"
                className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-800 transition hover:bg-green-500"
              >
                <FaWhatsapp />
              </a>

            </div>

          </div>

        </div>

        <div className="mt-20 flex flex-col items-center justify-between gap-4 border-t border-gray-800 pt-8 text-sm md:flex-row">

          <p>
            © {year} Roncloud Technologies. All Rights Reserved.
          </p>

          <div className="flex gap-6">
            <Link to="/" className="transition hover:text-orange-400">
              Privacy Policy
            </Link>

            <Link to="/" className="transition hover:text-orange-400">
              Terms & Conditions
            </Link>
          </div>

        </div>

      </div>

    </footer>
  );
}