import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

import services from "../data/services";

function Services() {
  return (
    <section className="py-20 sm:py-24 lg:py-28 bg-slate-50">

      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 xl:px-8">

        {/* Section Heading */}

        <div className="text-center mb-12 sm:mb-16 lg:mb-20">

          <p className="uppercase tracking-[3px] sm:tracking-[5px] text-red-600 font-bold text-xs sm:text-sm">
            Our Services
          </p>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-4 sm:mt-5 text-slate-900 leading-tight">
            Comprehensive Engineering Solutions
          </h2>

          <div className="w-16 sm:w-20 h-1 bg-red-600 rounded-full mx-auto mt-5 sm:mt-6"></div>

          <p className="text-slate-600 mt-5 sm:mt-6 max-w-2xl mx-auto text-[15px] sm:text-base leading-7 sm:leading-8">
            We provide world-class construction, engineering, procurement,
            facility management and real estate solutions across Nigeria.
          </p>

        </div>

        {/* Services Grid */}

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-7 lg:gap-8">

          {services.map((service, index) => {

            const Icon = service.icon;

            return (
              <motion.div
                key={service.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  delay: index * 0.1,
                  duration: 0.6,
                }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
                className="bg-white rounded-2xl sm:rounded-3xl shadow-lg p-6 sm:p-8 hover:shadow-2xl transition-all duration-300"
              >

                {/* Icon */}

                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-[#0F2E82] rounded-xl sm:rounded-2xl flex items-center justify-center mb-5 sm:mb-6">

                  <Icon
                    size={27}
                    className="text-white sm:w-[30px] sm:h-[30px]"
                  />

                </div>

                {/* Title */}

                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 leading-tight">
                  {service.title}
                </h3>

                {/* Description */}

                <p className="mt-3 sm:mt-4 text-slate-600 text-[15px] sm:text-base leading-7">
                  {service.description}
                </p>

                {/* Learn More */}

                <Link
                  to={`/services/${service.slug}`}
                  className="inline-flex items-center gap-2 mt-6 sm:mt-8 text-red-600 font-semibold text-sm sm:text-base hover:gap-3 transition-all"
                >
                  Learn More

                  <ArrowRight size={17} />
                </Link>

              </motion.div>
            );
          })}

        </div>

        {/* View All Services */}

        <div className="text-center mt-10 sm:mt-14">

          <Link
            to="/services"
            className="inline-flex items-center justify-center gap-2 sm:gap-3 bg-[#0F2E82] hover:bg-blue-900 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full text-sm sm:text-base font-semibold shadow-lg transition-all hover:scale-[1.02]"
          >
            View All Services

            <ArrowRight size={18} />
          </Link>

        </div>

      </div>

    </section>
  );
}

export default Services;