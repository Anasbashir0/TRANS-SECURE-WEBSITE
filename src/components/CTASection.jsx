import { motion } from "framer-motion";
import { ArrowRight, PhoneCall } from "lucide-react";
import { Link } from "react-router-dom";

function CTASection() {
  return (
    <section className="relative overflow-hidden bg-[#0F2E82] py-16 sm:py-20 lg:py-24">
      
      {/* Background Decoration */}
      <div className="absolute -top-20 -right-20 w-64 sm:w-80 h-64 sm:h-80 rounded-full bg-white/5"></div>

      <div className="absolute -bottom-24 -left-24 w-80 sm:w-96 h-80 sm:h-96 rounded-full bg-red-600/10"></div>

      {/* Content */}
      <div className="relative max-w-5xl mx-auto px-6 sm:px-8 text-center">

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="uppercase tracking-[3px] sm:tracking-[5px] text-red-400 font-bold text-xs sm:text-sm"
        >
          LET'S WORK TOGETHER
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.7 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mt-5 sm:mt-6 leading-tight"
        >
          Ready to Start Your Next Project?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.7 }}
          viewport={{ once: true }}
          className="mt-6 sm:mt-8 text-gray-300 text-base sm:text-lg leading-7 sm:leading-8 max-w-3xl mx-auto"
        >
          Whether you're planning a construction project, engineering
          solution, procurement service or facility management contract,
          our team is ready to help you achieve outstanding results.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.7 }}
          viewport={{ once: true }}
          className="mt-8 sm:mt-12 flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6"
        >

          {/* Request Quote */}
          <Link
            to="/contact"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-red-600 hover:bg-red-700 transition-all duration-300 px-7 sm:px-8 py-3.5 sm:py-4 rounded-full text-white font-semibold shadow-xl hover:scale-105"
          >
            Request a Quote
            <ArrowRight size={20} />
          </Link>

          {/* Call Us */}
          <a
            href="tel:+2348067339660"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 border-2 border-white text-white hover:bg-white hover:text-[#0F2E82] transition-all duration-300 px-7 sm:px-8 py-3.5 sm:py-4 rounded-full font-semibold"
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