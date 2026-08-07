import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

import reasons from "../data/whyChoosePage";
import whyChooseImage from "../assets/images/why-choose.jpg";

function WhyChooseSection() {
  return (
    <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 xl:px-8">

      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 xl:gap-20 items-center">

        {/* Left Content */}

        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >

          <p className="uppercase tracking-[3px] sm:tracking-[5px] text-red-600 font-bold text-xs sm:text-sm">
            Why Choose Us
          </p>

          <h2 className="text-3xl sm:text-4xl font-bold mt-4 sm:mt-5 text-slate-900 leading-tight">
            Engineering Excellence You Can Trust
          </h2>

          <div className="w-16 sm:w-20 h-1 bg-red-600 rounded-full mt-5 sm:mt-6"></div>

          <p className="mt-6 sm:mt-8 text-sm sm:text-base text-slate-600 leading-7 sm:leading-8">
            We combine engineering expertise, innovation and
            professionalism to deliver reliable solutions that
            consistently exceed expectations.
          </p>

          {/* Reasons */}

          <div className="mt-8 sm:mt-10 space-y-6 sm:space-y-7">

            {reasons.map((reason, index) => (

              <motion.div
                key={reason.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.1,
                }}
                className="flex gap-4 sm:gap-5"
              >

                {/* Icon */}

                <div className="flex-shrink-0">

                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-red-100 flex items-center justify-center">

                    <CheckCircle2
                      size={21}
                      className="text-red-600"
                    />

                  </div>

                </div>

                {/* Text */}

                <div>

                  <h3 className="text-lg sm:text-xl font-bold text-slate-900">
                    {reason.title}
                  </h3>

                  <p className="mt-1.5 sm:mt-2 text-sm sm:text-base text-slate-600 leading-6 sm:leading-7">
                    {reason.description}
                  </p>

                </div>

              </motion.div>

            ))}

          </div>

        </motion.div>

        {/* Right Image */}

        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >

          <img
            src={whyChooseImage}
            alt="Why Choose TRANS-SECURE"
            className="rounded-2xl sm:rounded-3xl shadow-2xl w-full object-cover"
          />

        </motion.div>

      </div>

    </div>
  );
}

export default WhyChooseSection;