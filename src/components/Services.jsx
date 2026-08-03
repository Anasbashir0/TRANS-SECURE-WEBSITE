import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import services from "../data/services";

function Services() {
  return (
    <section id="services" className="py-28 bg-slate-50">
      <div className="max-w-7xl mx-auto px-8">

        <div className="text-center mb-16">
          <p className="uppercase tracking-[5px] text-red-600 font-bold">
            Our Services
          </p>

          <h2 className="text-5xl font-bold mt-5 text-slate-900">
            Comprehensive Engineering Solutions
          </h2>

          <p className="text-slate-600 mt-6 max-w-2xl mx-auto">
            We provide world-class construction, engineering, procurement,
            facility management and real estate solutions across Nigeria.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="bg-white rounded-3xl shadow-lg p-8 hover:shadow-2xl transition"
              >
                <div className="w-16 h-16 bg-[#0F2E82] rounded-2xl flex items-center justify-center mb-6">
                  <Icon size={30} className="text-white" />
                </div>

                <h3 className="text-2xl font-bold text-slate-900">
                  {service.title}
                </h3>

                <p className="mt-4 text-slate-600 leading-7">
                  {service.description}
                </p>

                <button className="mt-8 flex items-center gap-2 text-red-600 font-semibold hover:gap-4 transition-all">
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

export default Services;