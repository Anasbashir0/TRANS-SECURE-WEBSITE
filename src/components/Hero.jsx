import { motion } from "framer-motion";
import heroImage from "../assets/images/hero.jpg";

function Hero() {
  return (
    <section
      className="relative h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/65"></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto h-full flex items-center px-8">
        <div className="max-w-3xl">

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="uppercase tracking-[8px] text-red-500 font-semibold"
          >
            Welcome to TRANS-SECURE Limited
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-6xl md:text-7xl font-black text-white leading-tight mt-4"
          >
            Building Tomorrow's Infrastructure Today
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-gray-200 text-xl mt-8 leading-8"
          >
            Delivering excellence in Construction, Engineering,
            Procurement, Facility Management and Real Estate across Nigeria.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="flex gap-5 mt-10"
          >
            <button className="bg-red-600 hover:bg-red-700 transition px-8 py-4 rounded-full text-white font-semibold">
              View Projects
            </button>

            <button className="border border-white hover:bg-white hover:text-black transition px-8 py-4 rounded-full text-white font-semibold">
              Request Consultation
            </button>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

export default Hero;
