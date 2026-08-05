import { motion } from "framer-motion";

import {
  Building2,
  Cog,
  PackageCheck,
  Building,
  Landmark,
  BriefcaseBusiness,
  ArrowRight,
} from "lucide-react";

import services from "../data/servicesPage";

const icons = {
  Building2,
  Cog,
  PackageCheck,
  Building,
  Landmark,
  BriefcaseBusiness,
};

function ServicesGrid() {
  return (
    <section className="py-28 bg-gradient-to-b from-white to-slate-50">

      <div className="max-w-7xl mx-auto px-8">

        {/* Section Heading */}

        <div className="text-center mb-20">

          <p className="uppercase tracking-[5px] text-red-600 font-bold">
            What We Do
          </p>

          <h2 className="text-5xl font-bold mt-5 text-slate-900">
            Comprehensive Engineering Solutions
          </h2>

          <div className="w-20 h-1 bg-red-600 rounded-full mx-auto mt-6"></div>

          <p className="mt-6 max-w-3xl mx-auto text-slate-600 leading-8">
            We provide integrated engineering, construction,
            procurement and infrastructure solutions tailored to
            the needs of governments, organizations and private
            clients throughout Nigeria.
          </p>

        </div>

        {/* Cards */}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {services.map((service, index) => {

            const Icon = icons[service.icon];

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
                whileHover={{
                  y: -10,
                }}
                className="group bg-white rounded-3xl p-10 shadow-lg hover:shadow-2xl transition-all duration-500 border border-slate-100"
              >

                {/* Icon */}

                <div className="w-20 h-20 rounded-2xl bg-blue-50 flex items-center justify-center group-hover:bg-red-600 transition duration-500">

                  <Icon
                    size={38}
                    className="text-[#0F2E82] group-hover:text-white transition duration-500"
                  />

                </div>

                {/* Title */}

                <h3 className="text-3xl font-bold text-slate-900 mt-8">

                  {service.title}

                </h3>

                {/* Description */}

                <p className="mt-5 text-slate-600 leading-8">

                  {service.description}

                </p>

                {/* Learn More */}

                <button className="mt-8 flex items-center gap-2 text-red-600 font-semibold group-hover:gap-4 transition-all">

                  Learn More

                  <ArrowRight size={18} />

                </button>

              </motion.div>

            );

          })}

        </div>

      </div>

    </section>
  );
}

export default ServicesGrid;