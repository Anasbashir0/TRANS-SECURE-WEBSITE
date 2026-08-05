import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

import reasons from "../data/whyChoosePage";

import whyChooseImage from "../assets/images/why-choose.jpg";

function WhyChooseSection() {
  return (
    <section className="py-28 bg-gradient-to-b from-slate-50 to-white">

      <div className="max-w-7xl mx-auto px-8">

        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* Left Content */}

          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >

            <p className="uppercase tracking-[5px] text-red-600 font-bold">
              WHY CHOOSE US
            </p>

            <h2 className="text-5xl font-bold mt-5 text-slate-900">
              Engineering Excellence You Can Trust
            </h2>

            <div className="w-20 h-1 bg-red-600 rounded-full mt-6"></div>

            <p className="mt-8 text-slate-600 leading-8">
              We combine engineering expertise, innovation and
              professionalism to deliver reliable solutions that
              consistently exceed expectations.
            </p>

            <div className="mt-12 space-y-8">

              {reasons.map((reason, index) => (

                <motion.div
                  key={reason.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: index * 0.1,
                  }}
                  className="flex gap-5"
                >

                  <div>

                    <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center">

                      <CheckCircle2
                        size={24}
                        className="text-red-600"
                      />

                    </div>

                  </div>

                  <div>

                    <h3 className="text-xl font-bold text-slate-900">

                      {reason.title}

                    </h3>

                    <p className="mt-2 text-slate-600 leading-7">

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
              className="rounded-3xl shadow-2xl w-full object-cover"
            />

          </motion.div>

        </div>

      </div>

    </section>
  );
}

export default WhyChooseSection;