import { motion } from "framer-motion";
import { ArrowRight, PhoneCall } from "lucide-react";
import { Link } from "react-router-dom";

function CTASection() {
  return (
    <section className="py-28 bg-[#0F2E82] relative overflow-hidden">

      {/* Background Decoration */}

      <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-white/5"></div>
      <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-red-600/10"></div>

      <div className="relative max-w-5xl mx-auto px-8 text-center">

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="uppercase tracking-[5px] text-red-400 font-bold"
        >
          LET'S WORK TOGETHER
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          viewport={{ once: true }}
          className="text-5xl md:text-6xl font-bold text-white mt-6"
        >
          Ready to Start Your Next Project?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-8 text-gray-300 text-lg leading-8 max-w-3xl mx-auto"
        >
          Whether you're planning a construction project, engineering
          solution, procurement service or facility management contract,
          our team is ready to help you achieve outstanding results.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-12 flex flex-wrap justify-center gap-6"
        >

          <Link
            to="/contact"
            className="inline-flex items-center gap-3 bg-red-600 hover:bg-red-700 transition-all duration-300 px-8 py-4 rounded-full text-white font-semibold shadow-xl hover:scale-105"
          >
            Request a Quote
            <ArrowRight size={20} />
          </Link>

          <a
            href="tel:+2340000000000"
            className="inline-flex items-center gap-3 border-2 border-white text-white hover:bg-white hover:text-[#0F2E82] transition-all duration-300 px-8 py-4 rounded-full font-semibold"
          >
            <PhoneCall size={20} />
            Call Us
          </a>

        </motion.div>

      </div>

    </section>
  );
}

export default CTASection;