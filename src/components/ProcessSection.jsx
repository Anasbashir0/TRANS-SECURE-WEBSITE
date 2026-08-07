import { motion } from "framer-motion";
import processSteps from "../data/processSteps";

function ProcessSection() {
  return (
    <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 xl:px-8">

      {/* Section Heading */}

      <div className="text-center mb-12 sm:mb-16 lg:mb-20">

        <p className="uppercase tracking-[3px] sm:tracking-[5px] text-red-600 font-bold text-xs sm:text-sm">
          Our Process
        </p>

        <h2 className="text-3xl sm:text-4xl font-bold mt-4 sm:mt-5 text-slate-900 leading-tight">
          How We Deliver Excellence
        </h2>

        <div className="w-16 sm:w-20 h-1 bg-red-600 rounded-full mx-auto mt-5 sm:mt-6"></div>

        <p className="mt-5 sm:mt-6 max-w-3xl mx-auto text-sm sm:text-base text-slate-600 leading-7 sm:leading-8">
          Every successful project follows a structured process that
          ensures quality, transparency and client satisfaction from
          concept to completion.
        </p>

      </div>

      {/* Process Steps */}

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-7 lg:gap-8 relative">

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
            className="relative bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-9 shadow-lg hover:shadow-2xl transition-all duration-500 border border-slate-100 text-center"
          >

            {/* Number */}

            <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto rounded-full bg-[#0F2E82] text-white flex items-center justify-center text-xl sm:text-2xl font-bold">
              {step.step}
            </div>

            {/* Title */}

            <h3 className="mt-6 sm:mt-8 text-xl sm:text-2xl font-bold text-slate-900 leading-tight">
              {step.title}
            </h3>

            {/* Description */}

            <p className="mt-4 sm:mt-5 text-sm sm:text-base text-slate-600 leading-7 sm:leading-8">
              {step.description}
            </p>

            {/* Connector Line */}

            {index !== processSteps.length - 1 && (
              <div className="hidden lg:block absolute top-10 -right-4 xl:-right-5 w-8 xl:w-10 h-[2px] bg-red-300"></div>
            )}

          </motion.div>

        ))}

      </div>

    </div>
  );
}

export default ProcessSection;