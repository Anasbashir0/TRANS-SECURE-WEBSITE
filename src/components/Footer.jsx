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

import logo from "../assets/logos/logo.png";

function Footer() {
  return (
    <footer className="bg-[#071A4A] text-white">

      <div className="max-w-7xl mx-auto px-8 py-20 grid md:grid-cols-2 lg:grid-cols-4 gap-12">

        {/* Company */}

        <div>

          <img
            src={logo}
            alt="TRANS-SECURE Logo"
            className="h-16 bg-white rounded-lg p-2 mb-6"
          />

          <p className="text-gray-300 leading-8">
            TRANS-SECURE Limited is committed to delivering innovative
            construction, engineering, procurement, facility management
            and real estate solutions with professionalism, integrity
            and excellence.
          </p>

          <div className="flex gap-4 mt-8">

            <a
              href="#"
              className="w-10 h-10 rounded-full bg-red-600 hover:bg-red-700 transition flex items-center justify-center"
            >
              <FaFacebookF />
            </a>

            <a
              href="#"
              className="w-10 h-10 rounded-full bg-red-600 hover:bg-red-700 transition flex items-center justify-center"
            >
              <FaLinkedinIn />
            </a>

            <a
              href="#"
              className="w-10 h-10 rounded-full bg-red-600 hover:bg-red-700 transition flex items-center justify-center"
            >
              <FaInstagram />
            </a>

          </div>

        </div>

        {/* Quick Links */}

        <div>

          <h3 className="text-2xl font-bold mb-6">
            Quick Links
          </h3>

          <ul className="space-y-4 text-gray-300">

            <li className="hover:text-white cursor-pointer transition">
              Home
            </li>

            <li className="hover:text-white cursor-pointer transition">
              About
            </li>

            <li className="hover:text-white cursor-pointer transition">
              Services
            </li>

            <li className="hover:text-white cursor-pointer transition">
              Projects
            </li>

            <li className="hover:text-white cursor-pointer transition">
              Contact
            </li>

          </ul>

        </div>

        {/* Services */}

        <div>

          <h3 className="text-2xl font-bold mb-6">
            Our Services
          </h3>

          <ul className="space-y-4 text-gray-300">

            <li>Construction</li>
            <li>Engineering</li>
            <li>Procurement</li>
            <li>Facility Management</li>
            <li>Real Estate</li>

          </ul>

        </div>

        {/* Contact */}

        <div>

          <h3 className="text-2xl font-bold mb-6">
            Contact
          </h3>

          <div className="space-y-6">

            <div className="flex gap-4 items-start">

              <MapPin
                size={22}
                className="text-red-500 mt-1 flex-shrink-0"
              />

              <p className="text-gray-300">
                No. 10, suits 5, Sapele Street, off Ladoke Akintola Boulevard, Garki 2, Abuja, Nigeria.
              </p>

            </div>

            <div className="flex gap-4">

              <Phone className="text-red-500 mt-1" />

              <p className="text-gray-300">
                +234 806 733 9660
              </p>

            </div>

            <div className="flex gap-4">

              <Mail className="text-red-500 mt-1" />

              <p className="text-gray-300">
                info@trans-secure.com
              </p>

            </div>

          </div>

        </div>

      </div>

      <div className="border-t border-white/10">

        <div className="max-w-7xl mx-auto px-8 py-6 flex flex-col md:flex-row justify-between items-center gap-4">

          <p className="text-gray-400 text-center md:text-left">
            © {new Date().getFullYear()} TRANS-SECURE Limited. All Rights Reserved.
          </p>

          <div className="flex gap-6 text-gray-400 text-sm">

            <a href="#" className="hover:text-white transition">
              Privacy Policy
            </a>

            <a href="#" className="hover:text-white transition">
              Terms & Conditions
            </a>

          </div>

        </div>

      </div>

    </footer>
  );
}

export default Footer;