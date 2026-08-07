import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

import {
  Phone,
  Mail,
  MapPin,
} from "lucide-react";

import { Link } from "react-router-dom";

import logo from "../assets/logos/logo.png";

function Footer() {
  return (
    <footer className="bg-[#102A68] text-white">

      {/* Main Footer */}

      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 xl:px-8 py-14 sm:py-16 lg:py-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-10 xl:gap-12">

        {/* Company */}

        <div>

          <img
            src={logo}
            alt="TRANS-SECURE Limited Logo"
            className="h-14 sm:h-16 w-auto bg-white rounded-lg p-2 mb-6"
          />

          <p className="text-gray-300 leading-7 sm:leading-8 text-sm sm:text-base">
            TRANS-SECURE Limited is committed to delivering innovative
            construction, engineering, procurement, facility management
            and real estate solutions with professionalism, integrity
            and excellence.
          </p>

          {/* Social Media */}

          <div className="flex gap-3 sm:gap-4 mt-7 sm:mt-8">

            {/* Facebook */}

            <a
              href="#"
              aria-label="TRANS-SECURE on Facebook"
              className="w-10 h-10 rounded-full bg-red-600 hover:bg-red-700 transition flex items-center justify-center"
            >
              <FaFacebookF size={15} />
            </a>

            {/* LinkedIn */}

            <a
              href="#"
              aria-label="TRANS-SECURE on LinkedIn"
              className="w-10 h-10 rounded-full bg-red-600 hover:bg-red-700 transition flex items-center justify-center"
            >
              <FaLinkedinIn size={15} />
            </a>

            {/* Instagram */}

            <a
              href="#"
              aria-label="TRANS-SECURE on Instagram"
              className="w-10 h-10 rounded-full bg-red-600 hover:bg-red-700 transition flex items-center justify-center"
            >
              <FaInstagram size={15} />
            </a>

          </div>

        </div>

        {/* Quick Links */}

        <div>

          <h3 className="text-xl sm:text-2xl font-bold mb-5 sm:mb-6">
            Quick Links
          </h3>

          <ul className="space-y-3 sm:space-y-4 text-gray-300 text-sm sm:text-base">

            <li>
              <Link
                to="/"
                className="hover:text-white transition"
              >
                Home
              </Link>
            </li>

            <li>
              <Link
                to="/about"
                className="hover:text-white transition"
              >
                About
              </Link>
            </li>

            <li>
              <Link
                to="/services"
                className="hover:text-white transition"
              >
                Services
              </Link>
            </li>

            <li>
              <Link
                to="/projects"
                className="hover:text-white transition"
              >
                Projects
              </Link>
            </li>

            <li>
              <Link
                to="/contact"
                className="hover:text-white transition"
              >
                Contact
              </Link>
            </li>

          </ul>

        </div>

        {/* Services */}

        <div>

          <h3 className="text-xl sm:text-2xl font-bold mb-5 sm:mb-6">
            Our Services
          </h3>

          <ul className="space-y-3 sm:space-y-4 text-gray-300 text-sm sm:text-base">

            <li>
              <Link
                to="/services/construction"
                className="hover:text-white transition"
              >
                Construction
              </Link>
            </li>

            <li>
              <Link
                to="/services/engineering"
                className="hover:text-white transition"
              >
                Engineering
              </Link>
            </li>

            <li>
              <Link
                to="/services/procurement"
                className="hover:text-white transition"
              >
                Procurement
              </Link>
            </li>

            <li>
              <Link
                to="/services/facility-management"
                className="hover:text-white transition"
              >
                Facility Management
              </Link>
            </li>

            <li>
              <Link
                to="/services/real-estate"
                className="hover:text-white transition"
              >
                Real Estate
              </Link>
            </li>

            <li>
              <Link
                to="/services/project-management"
                className="hover:text-white transition"
              >
                Project Management
              </Link>
            </li>

          </ul>

        </div>

        {/* Contact */}

        <div>

          <h3 className="text-xl sm:text-2xl font-bold mb-5 sm:mb-6">
            Contact
          </h3>

          <div className="space-y-5 sm:space-y-6">

            {/* Address */}

            <a
              href="https://maps.app.goo.gl/w4JYkax72LzUiAcu8?g_st=awb"
              target="_blank"
              rel="noopener noreferrer"
              className="flex gap-3 sm:gap-4 items-start group"
            >

              <MapPin
                size={21}
                className="text-red-500 mt-1 flex-shrink-0"
              />

              <p className="text-gray-300 group-hover:text-white transition text-sm sm:text-base leading-6 sm:leading-7">
                No. 10, Suite 5, Sapele Street,
                Off Ladoke Akintola Boulevard,
                Garki 2, Abuja, Nigeria.
              </p>

            </a>

            {/* Phone */}

            <a
              href="tel:+2348067339660"
              className="flex gap-3 sm:gap-4 items-center group"
            >

              <Phone
                size={21}
                className="text-red-500 flex-shrink-0"
              />

              <p className="text-gray-300 group-hover:text-white transition text-sm sm:text-base">
                +234 806 733 9660
              </p>

            </a>

            {/* Email */}

            <a
              href="mailto:info@trans-secure.com"
              className="flex gap-3 sm:gap-4 items-center group"
            >

              <Mail
                size={21}
                className="text-red-500 flex-shrink-0"
              />

              <p className="text-gray-300 group-hover:text-white transition text-sm sm:text-base break-all">
                info@trans-secure.com
              </p>

            </a>

          </div>

        </div>

      </div>

      {/* Bottom Bar */}

      <div className="border-t border-white/10">

        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 xl:px-8 py-5 sm:py-6 flex flex-col md:flex-row justify-between items-center gap-3 sm:gap-4">

          <p className="text-gray-400 text-center md:text-left text-xs sm:text-sm">
            © {new Date().getFullYear()} TRANS-SECURE Limited.
            All Rights Reserved.
          </p>

          {/* Legal Links */}

          <div className="flex gap-5 sm:gap-6 text-gray-400 text-xs sm:text-sm">

            <span className="cursor-default">
              Privacy Policy
            </span>

            <span className="cursor-default">
              Terms & Conditions
            </span>

          </div>

        </div>

      </div>

    </footer>
  );
}

export default Footer;