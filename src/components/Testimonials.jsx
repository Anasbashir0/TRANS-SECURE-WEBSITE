import { motion } from "framer-motion";
import testimonials from "../data/testimonials";

function Testimonials() {
  return (
    <section id="testimonials" className="py-28 bg-slate-50">
      <div className="max-w-7xl mx-auto px-8">

        <div className="text-center mb-16">
          <p className="uppercase tracking-[5px] text-red-600 font-bold">
            Testimonials
          </p>

          <h2 className="text-5xl font-bold mt-5 text-slate-900">
            What Our Clients Say
          </h2>

          <p className="mt-6 text-slate-600 max-w-3xl mx-auto">
            We take pride in delivering projects that exceed expectations and
            build lasting relationships.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {testimonials.map((item, index) => (

            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl shadow-lg p-8"
            >

              <div className="text-red-600 text-5xl mb-4">"</div>

              <p className="text-slate-600 leading-8 italic">
                {item.message}
              </p>

              <div className="mt-8">
                <h4 className="font-bold text-slate-900">
                  {item.name}
                </h4>

                <p className="text-red-600">
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