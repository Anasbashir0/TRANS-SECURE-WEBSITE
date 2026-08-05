import { motion } from "framer-motion";
import whyChooseUs from "../data/whyChooseUs";

function WhyChooseUs() {
  return (
    <section id="why" className="py-28 bg-slate-50">
      <div className="max-w-7xl mx-auto px-8">

        {/* Header */}
        <div className="text-center mb-20">

          <p className="uppercase tracking-[5px] text-red-600 font-bold">
            Why Choose Us
          </p>

          <div className="w-20 h-1 bg-red-600 rounded-full mx-auto mt-6"></div>

          <h2 className="text-5xl font-bold mt-5 text-slate-900">
            Building Trust Through Excellence
          </h2>

          <p className="mt-6 max-w-3xl mx-auto text-slate-600 leading-8">
            We combine technical expertise, innovation and integrity to
            deliver projects that exceed expectations while maintaining
            the highest standards of quality and safety.
          </p>

        </div>

        {/* Cards */}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {whyChooseUs.map((item, index) => {

            const Icon = item.icon;

            return (

              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{
                  y: -8,
                  transition: { duration: 0.3 },
                }}
                className="bg-white rounded-3xl p-10 shadow-lg hover:shadow-2xl border-t-4 border-transparent hover:border-red-600 transition-all"
              >

                <div className="w-18 h-18 rounded-full bg-[#0F2E82] flex items-center justify-center mb-8">

                  <Icon className="text-white" size={34} />

                </div>

                <h3 className="text-2xl font-bold text-slate-900">
                  {item.title}
                </h3>

                <p className="mt-5 text-slate-600 leading-8">
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