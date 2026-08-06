import { motion } from "framer-motion";
import { ArrowRight, MapPin, Building2 } from "lucide-react";
import { Link } from "react-router-dom";

import projectImage from "../assets/images/projects/project1.jpg";

function FeaturedProject() {
  return (
    <section className="py-28 bg-white">

      <div className="max-w-7xl mx-auto px-8">

        {/* Heading */}

        <div className="text-center mb-20">

          <p className="uppercase tracking-[5px] text-red-600 font-bold">
            FEATURED PROJECT
          </p>

          <h2 className="text-5xl font-bold mt-5 text-slate-900">
            NAF Valley Housing Development
          </h2>

          <div className="w-20 h-1 bg-red-600 rounded-full mx-auto mt-6"></div>

        </div>

        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* Image */}

          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >

            <img
              src={projectImage}
              alt="NAF Valley Project"
              className="rounded-3xl shadow-2xl w-full object-cover"
            />

          </motion.div>

          {/* Content */}

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >

            <p className="uppercase tracking-[4px] text-red-600 font-semibold">
              Residential Development
            </p>

            <h3 className="text-4xl font-bold mt-5 text-slate-900">
              Delivering Quality Homes with Modern Engineering
            </h3>

            <p className="mt-8 text-slate-600 leading-8">
              TRANS-SECURE Limited successfully participated in the
              development of the NAF Valley Housing Estate,
              delivering construction services with a strong focus
              on quality, safety and timely execution.
            </p>

            <div className="mt-10 space-y-5">

              <div className="flex items-center gap-3">

                <Building2
                  size={20}
                  className="text-red-600"
                />

                <span className="text-slate-700">
                  Residential Infrastructure
                </span>

              </div>

              <div className="flex items-center gap-3">

                <MapPin
                  size={20}
                  className="text-red-600"
                />

                <span className="text-slate-700">
                  Abuja, Nigeria
                </span>

              </div>

            </div>

            <Link
              to="#"
              className="inline-flex items-center gap-3 mt-12 bg-[#0F2E82] hover:bg-[#13389c] transition-all duration-300 px-8 py-4 rounded-full text-white font-semibold shadow-xl"
            >
              View Project Details

              <ArrowRight size={20} />

            </Link>

          </motion.div>

        </div>

      </div>

    </section>
  );
}

export default FeaturedProject;