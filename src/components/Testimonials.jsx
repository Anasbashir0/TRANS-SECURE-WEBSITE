import { motion } from "framer-motion";
import testimonials from "../data/testimonials";

function Testimonials() {
  return (
    <section className="py-20 sm:py-24 lg:py-28 bg-slate-50">

      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 xl:px-8">

        {/* Section Header */}

        <div className="text-center mb-12 sm:mb-16">

          <p className="uppercase tracking-[3px] sm:tracking-[5px] text-red-600 font-bold text-xs sm:text-sm">
            Testimonials
          </p>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-4 sm:mt-5 text-slate-900 leading-tight">
            What Our Clients Say
          </h2>

          <div className="w-16 sm:w-20 h-1 bg-red-600 rounded-full mx-auto mt-5 sm:mt-6"></div>

          <p className="mt-5 sm:mt-6 text-sm sm:text-base text-slate-600 max-w-3xl mx-auto leading-7 sm:leading-8">
            We take pride in delivering projects that exceed expectations
            and build lasting relationships.
          </p>

        </div>

        {/* Testimonials */}

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-8">

          {testimonials.map((item, index) => (

            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: index * 0.15,
                duration: 0.6,
              }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl sm:rounded-3xl shadow-lg hover:shadow-xl p-6 sm:p-8 transition-shadow duration-300"
            >

              {/* Quote */}

              <div className="text-red-600 text-4xl sm:text-5xl leading-none mb-4">
                "
              </div>

              {/* Message */}

              <p className="text-sm sm:text-base text-slate-600 leading-7 sm:leading-8 italic">
                {item.message}
              </p>

              {/* Client */}

              <div className="mt-6 sm:mt-8 pt-5 sm:pt-6 border-t border-slate-100">

                <h4 className="font-bold text-slate-900 text-base sm:text-lg">
                  {item.name}
                </h4>

                <p className="text-red-600 text-sm sm:text-base mt-1">
                  {item.company}
                </p>

              </div>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Testimonials;