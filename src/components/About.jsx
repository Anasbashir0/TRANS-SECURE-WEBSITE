import { motion } from "framer-motion";
import {
  CheckCircle2,
  Building2,
  Hammer,
  Wrench,
  House,
} from "lucide-react";

import aboutImage from "../assets/images/about.jpg";

function About() {
  return (
    <section
      id="about"
      className="py-28 bg-white"
    >
      <div className="max-w-7xl mx-auto px-8 grid lg:grid-cols-2 gap-16 items-center">

        {/* Image */}

        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: .8 }}
          viewport={{ once: true }}
        >
          <img
            src={aboutImage}
            alt="About"
            className="rounded-3xl shadow-2xl"
          />
        </motion.div>

        {/* Content */}

        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: .8 }}
          viewport={{ once: true }}
        >
          <p className="uppercase text-red-600 font-bold tracking-[5px]">
            Who We Are
          </p>

          <h2 className="text-5xl font-bold mt-5 text-slate-900 leading-tight">
            Building Confidence Through
            Engineering Excellence
          </h2>

          <p className="mt-8 text-slate-600 leading-8">
            Placeholder company description.
            This will later be replaced with the
            official TRANS-SECURE company profile.
          </p>

          <div className="grid md:grid-cols-2 gap-5 mt-10">

            <div className="flex items-center gap-3">
              <Building2 className="text-red-600" />
              <span>Construction</span>
            </div>

            <div className="flex items-center gap-3">
              <Hammer className="text-red-600" />
              <span>Engineering</span>
            </div>

            <div className="flex items-center gap-3">
              <Wrench className="text-red-600" />
              <span>Facility Management</span>
            </div>

            <div className="flex items-center gap-3">
              <House className="text-red-600" />
              <span>Real Estate</span>
            </div>

          </div>

          <button className="mt-10 bg-[#0F2E82] hover:bg-blue-900 hover:scale-105 transition-all duration-300 px-8 py-4 rounded-full text-white font-semibold shadow-lg">
            Learn More
          </button>

        </motion.div>

      </div>
    </section>
  );
}

export default About;
