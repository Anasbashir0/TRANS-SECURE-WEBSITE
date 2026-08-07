import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

import services from "../data/services";

function ServicesGrid() {
  return (
    <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 xl:px-8">

      {/* Section Heading */}

      <div className="text-center mb-12 sm:mb-16 lg:mb-20">

        <p className="uppercase tracking-[3px] sm:tracking-[5px] text-red-600 font-bold text-xs sm:text-sm">
          What We Do
        </p>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-4 sm:mt-5 text-slate-900 leading-tight">
          Comprehensive Engineering Solutions
        </h2>

        <div className="w-16 sm:w-20 h-1 bg-red-600 rounded-full mx-auto mt-5 sm:mt-6"></div>

        <p className="mt-5 sm:mt-6 max-w-3xl mx-auto text-sm sm:text-base text-slate-600 leading-7 sm:leading-8">
          We provide integrated engineering, construction,
          procurement and infrastructure solutions tailored to
          the needs of governments, organizations and private
          clients throughout Nigeria.
        </p>

      </div>

      {/* Service Cards */}

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-7 lg:gap-8">

        {services.map((service, index) => {

          const Icon = service.icon;

          return (

            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
              }}
              whileHover={{ y: -8 }}
              className="group bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 shadow-lg hover:shadow-2xl transition-all duration-500 border border-slate-100 flex flex-col"
            >

              {/* Icon */}

              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-blue-50 flex items-center justify-center group-hover:bg-red-600 transition duration-500">

                <Icon
                  size={30}
                  className="sm:hidden text-[#0F2E82] group-hover:text-white transition duration-500"
                />

                <Icon
                  size={38}
                  className="hidden sm:block text-[#0F2E82] group-hover:text-white transition duration-500"
                />

              </div>

              {/* Title */}

              <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-slate-900 mt-6 sm:mt-8 leading-tight">
                {service.title}
              </h3>

              {/* Description */}

              <p className="mt-4 sm:mt-5 text-sm sm:text-base text-slate-600 leading-7 sm:leading-8 flex-grow">
                {service.description}
              </p>

              {/* Learn More */}

              <Link
                to={`/services/${service.slug}`}
                className="inline-flex items-center gap-2 mt-6 sm:mt-8 font-semibold text-red-600 hover:text-red-700 transition group/link"
              >
                Learn More

                <ArrowRight
                  size={17}
                  className="transition-transform duration-300 group-hover/link:translate-x-1"
                />

              </Link>

            </motion.div>

          );

        })}

      </div>

    </div>
  );
}

export default ServicesGrid;