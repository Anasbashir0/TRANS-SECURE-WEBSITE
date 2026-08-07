import { motion } from "framer-motion";
import {
  ArrowRight,
  MapPin,
  Building2,
} from "lucide-react";
import { Link } from "react-router-dom";

import projectImage from "../assets/images/projects/project1.jpg";

function FeaturedProject() {
  return (
    <div className="max-w-7xl mx-auto px-5 sm:px-8">

      {/* Heading */}

      <div className="text-center mb-12 sm:mb-16 lg:mb-20">

        <p className="uppercase tracking-[3px] sm:tracking-[5px] text-red-600 font-bold text-xs sm:text-sm">
          FEATURED PROJECT
        </p>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-4 sm:mt-5 text-slate-900 leading-tight">
          NAF Valley Housing Development
        </h2>

        <div className="w-16 sm:w-20 h-1 bg-red-600 rounded-full mx-auto mt-5 sm:mt-6"></div>

      </div>

      {/* Project Content */}

      <div className="grid lg:grid-cols-2 gap-10 xl:gap-20 items-center">

        {/* Image */}

        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="w-full"
        >
          <img
            src={projectImage}
            alt="NAF Valley Housing Development"
            className="w-full aspect-[4/3] object-cover rounded-2xl sm:rounded-3xl shadow-2xl"
          />
        </motion.div>

        {/* Content */}

        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl"
        >

          <p className="uppercase tracking-[2px] sm:tracking-[4px] text-red-600 font-semibold text-sm sm:text-base">
            Residential Development
          </p>

          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mt-4 sm:mt-5 text-slate-900 leading-tight">
            Delivering Quality Homes with Modern Engineering
          </h3>

          <p className="mt-6 sm:mt-8 text-slate-600 leading-7 sm:leading-8 text-sm sm:text-base">
            TRANS-SECURE Limited successfully participated in the
            development of the NAF Valley Housing Estate,
            delivering construction services with a strong focus
            on quality, safety and timely execution.
          </p>

          {/* Project Details */}

          <div className="mt-8 sm:mt-10 space-y-5">

            <div className="flex items-center gap-3">

              <Building2
                size={20}
                className="text-red-600 flex-shrink-0"
              />

              <span className="text-slate-700">
                Residential Infrastructure
              </span>

            </div>

            <div className="flex items-center gap-3">

              <MapPin
                size={20}
                className="text-red-600 flex-shrink-0"
              />

              <span className="text-slate-700">
                Abuja, Nigeria
              </span>

            </div>

          </div>

          {/* View Project Button */}

          <Link
            to="/projects/naf-valley-housing-development"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 mt-8 sm:mt-10 bg-red-600 hover:bg-red-700 text-white px-7 py-3 rounded-full font-semibold transition-all duration-300"
          >
            View Project Details

            <ArrowRight size={20} />
          </Link>

        </motion.div>

      </div>

    </div>
  );
}

export default FeaturedProject;