import { motion } from "framer-motion";
import whyChooseUs from "../data/whyChooseUs";

function WhyChooseUs() {
  return (
    <section className="py-20 sm:py-24 lg:py-28 bg-slate-50">

      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 xl:px-8">

        {/* Header */}

        <div className="text-center mb-12 sm:mb-16 lg:mb-20">

          <p className="uppercase tracking-[3px] sm:tracking-[5px] text-red-600 font-bold text-xs sm:text-sm">
            Why Choose Us
          </p>

          <div className="w-16 sm:w-20 h-1 bg-red-600 rounded-full mx-auto mt-5 sm:mt-6"></div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-4 sm:mt-5 text-slate-900 leading-tight">
            Building Trust Through Excellence
          </h2>

          <p className="mt-5 sm:mt-6 max-w-3xl mx-auto text-sm sm:text-base text-slate-600 leading-7 sm:leading-8">
            We combine technical expertise, innovation and integrity to
            deliver projects that exceed expectations while maintaining
            the highest standards of quality and safety.
          </p>

        </div>

        {/* Cards */}

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-8">

          {whyChooseUs.map((item, index) => {

            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  delay: index * 0.1,
                  duration: 0.6,
                }}
                viewport={{ once: true }}
                whileHover={{
                  y: -8,
                  transition: { duration: 0.3 },
                }}
                className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 shadow-lg hover:shadow-2xl border-t-4 border-transparent hover:border-red-600 transition-all"
              >

                {/* Icon */}

                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#0F2E82] flex items-center justify-center mb-6 sm:mb-8">

                  <Icon
                    className="text-white"
                    size={28}
                  />

                </div>

                {/* Title */}

                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 leading-tight">
                  {item.title}
                </h3>

                {/* Description */}

                <p className="mt-4 sm:mt-5 text-sm sm:text-base text-slate-600 leading-7 sm:leading-8">
                  {item.description}
                </p>

              </motion.div>
            );

          })}

        </div>

      </div>

    </section>
  );
}

export default WhyChooseUs;