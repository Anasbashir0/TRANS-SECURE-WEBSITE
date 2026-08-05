import { motion } from "framer-motion";
import processSteps from "../data/processSteps";

function ProcessSection() {
  return (
    <section className="py-28 bg-slate-50">

      <div className="max-w-7xl mx-auto px-8">

        {/* Section Heading */}

        <div className="text-center mb-20">

          <p className="uppercase tracking-[5px] text-red-600 font-bold">
            OUR PROCESS
          </p>

          <h2 className="text-5xl font-bold mt-5 text-slate-900">
            How We Deliver Excellence
          </h2>

          <div className="w-20 h-1 bg-red-600 rounded-full mx-auto mt-6"></div>

          <p className="mt-6 max-w-3xl mx-auto text-slate-600 leading-8">
            Every successful project follows a structured process that
            ensures quality, transparency and client satisfaction from
            concept to completion.
          </p>

        </div>

        {/* Process Steps */}

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 relative">

          {processSteps.map((step, index) => (

            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
              }}
              whileHover={{
                y: -8,
              }}
              className="relative bg-white rounded-3xl p-10 shadow-lg hover:shadow-2xl transition-all duration-500 border border-slate-100 text-center"
            >

              {/* Number */}

              <div className="w-20 h-20 mx-auto rounded-full bg-[#0F2E82] text-white flex items-center justify-center text-2xl font-bold">

                {step.step}

              </div>

              {/* Title */}

              <h3 className="mt-8 text-2xl font-bold text-slate-900">

                {step.title}

              </h3>

              {/* Description */}

              <p className="mt-5 text-slate-600 leading-8">

                {step.description}

              </p>

              {/* Connector Line */}

              {index !== processSteps.length - 1 && (

                <div className="hidden lg:block absolute top-10 -right-10 w-20 h-[2px] bg-red-300"></div>

              )}

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default ProcessSection;