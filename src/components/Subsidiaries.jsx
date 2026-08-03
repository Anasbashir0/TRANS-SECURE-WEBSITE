import { motion } from "framer-motion";
import { ArrowRight, Building2 } from "lucide-react";
import subsidiaries from "../data/subsidiaries";

function Subsidiaries() {
  return (
    <section id="subsidiaries" className="py-28 bg-slate-100">
      <div className="max-w-7xl mx-auto px-8">

        {/* Section Heading */}
        <div className="text-center mb-20">

          <p className="uppercase tracking-[5px] text-red-600 font-bold">
            Group Structure
          </p>

          <h2 className="text-5xl font-bold mt-5 text-slate-900">
            Our Subsidiaries
          </h2>

          <p className="mt-6 max-w-3xl mx-auto text-slate-600 leading-8">
            TRANS-SECURE Limited operates through specialized subsidiaries,
            enabling us to deliver integrated engineering, procurement,
            construction and facility management solutions across Nigeria.
          </p>

        </div>

        {/* Parent Company */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto bg-[#0F2E82] rounded-3xl p-12 text-center text-white shadow-2xl"
        >
          <div className="w-24 h-24 rounded-full bg-white mx-auto flex items-center justify-center">

            <Building2
              size={45}
              className="text-[#0F2E82]"
            />

          </div>

          <h3 className="text-4xl font-bold mt-8">
            TRANS-SECURE Limited
          </h3>

          <p className="mt-6 leading-8 text-gray-200">
            Parent company providing strategic leadership across Construction,
            Engineering, Procurement, Facility Management and Real Estate.
          </p>

        </motion.div>

        {/* Connection Line */}
        <div className="flex justify-center">
          <div className="w-1 h-20 bg-[#0F2E82]"></div>
        </div>

        {/* Subsidiaries */}
        <div className="grid md:grid-cols-2 gap-10">

          {subsidiaries.map((company, index) => {

            const Icon = company.icon;

            return (

              <motion.div
                key={company.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{
                  y: -8,
                  transition: { duration: 0.3 }
                }}
                className="bg-white rounded-3xl p-10 shadow-lg hover:shadow-2xl border-t-4 border-transparent hover:border-red-600 transition-all"
              >

                <div className="w-20 h-20 rounded-full bg-[#0F2E82] flex items-center justify-center">

                  <Icon
                    size={38}
                    className="text-white"
                  />

                </div>

                <h3 className="text-2xl font-bold mt-8 text-slate-900">
                  {company.name}
                </h3>

                <p className="mt-5 text-slate-600 leading-8">
                  {company.description}
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

export default Subsidiaries;