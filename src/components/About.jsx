import { motion } from "framer-motion";
import {
  Building2,
  Hammer,
  Wrench,
  House,
  ArrowRight,
} from "lucide-react";
import { Link } from "react-router-dom";

import aboutImage from "../assets/images/about.jpg";

function About() {
  return (
    <section className="py-20 sm:py-24 lg:py-28 bg-white">

      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 xl:px-8">

        <div className="grid lg:grid-cols-2 gap-12 sm:gap-16 lg:gap-20 items-center">

          {/* Image */}

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="w-full"
          >
            <img
              src={aboutImage}
              alt="About TRANS-SECURE Limited"
              className="w-full h-[300px] sm:h-[400px] lg:h-[520px] object-cover rounded-2xl sm:rounded-3xl shadow-2xl"
            />
          </motion.div>

          {/* Content */}

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="w-full"
          >

            {/* Section Label */}

            <p className="uppercase text-red-600 font-bold tracking-[3px] sm:tracking-[5px] text-xs sm:text-sm">
              Who We Are
            </p>

            {/* Heading */}

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-4 sm:mt-5 text-slate-900 leading-tight">
              Building Confidence Through
              <span className="block">
                Engineering Excellence
              </span>
            </h2>

            {/* Red Line */}

            <div className="w-16 sm:w-20 h-1 bg-red-600 rounded-full mt-5 sm:mt-6"></div>

            {/* Description */}

            <p className="mt-6 sm:mt-8 text-slate-600 text-[15px] sm:text-base leading-7 sm:leading-8">
              Placeholder company description. This will later be
              replaced with the official TRANS-SECURE company profile.
            </p>

            {/* Areas of Expertise */}

            <div className="grid grid-cols-2 gap-y-5 gap-x-4 sm:gap-x-6 mt-8 sm:mt-10">

              <div className="flex items-center gap-2.5 sm:gap-3">
                <Building2
                  size={21}
                  className="text-red-600 flex-shrink-0"
                />
                <span className="text-sm sm:text-base text-slate-700">
                  Construction
                </span>
              </div>

              <div className="flex items-center gap-2.5 sm:gap-3">
                <Hammer
                  size={21}
                  className="text-red-600 flex-shrink-0"
                />
                <span className="text-sm sm:text-base text-slate-700">
                  Engineering
                </span>
              </div>

              <div className="flex items-center gap-2.5 sm:gap-3">
                <Wrench
                  size={21}
                  className="text-red-600 flex-shrink-0"
                />
                <span className="text-sm sm:text-base text-slate-700">
                  Facility Management
                </span>
              </div>

              <div className="flex items-center gap-2.5 sm:gap-3">
                <House
                  size={21}
                  className="text-red-600 flex-shrink-0"
                />
                <span className="text-sm sm:text-base text-slate-700">
                  Real Estate
                </span>
              </div>

            </div>

            {/* Learn More */}

            <Link
              to="/about"
              className="group inline-flex items-center gap-2 mt-8 sm:mt-10 bg-[#0F2E82] hover:bg-blue-900 hover:scale-[1.02] transition-all duration-300 px-6 sm:px-7 py-3 sm:py-3.5 rounded-full text-sm sm:text-base text-white font-semibold shadow-lg"
            >
              Learn More

              <ArrowRight
                size={17}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>

          </motion.div>

        </div>

      </div>

    </section>
  );
}

export default About;