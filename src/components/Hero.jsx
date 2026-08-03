import { motion } from "framer-motion";
import heroImage from "../assets/images/hero.jpg";

function Hero() {
  return (
    <section
      id="home"
      className="relative h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-slate-900/70"></div>

      {/* Hero Content */}
      <div className="relative z-10 h-full max-w-7xl mx-auto px-8 flex items-center">
        <div className="max-w-3xl pt-24">
          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="uppercase tracking-[6px] text-red-500 font-semibold"
          >
            Welcome to TRANS-SECURE Limited
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="mt-6 text-5xl md:text-7xl font-extrabold leading-tight text-white"
          >
            Building Tomorrow's Infrastructure Today
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-8 text-lg text-gray-200 leading-8"
          >
            Delivering exceptional Construction, Engineering,
            Procurement, Facility Management and Real Estate
            solutions across Nigeria with integrity, innovation
            and excellence.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="mt-10 flex flex-wrap gap-5"
          >
            <button className="bg-red-600 hover:bg-red-700 hover:scale-105 transition-all duration-300 px-8 py-4 rounded-full text-white font-semibold shadow-xl">
              View Projects
            </button>

            <button className="border-2 border-white hover:bg-white hover:text-[#0F2E82] hover:scale-105 transition-all duration-300 px-8 py-4 rounded-full text-white font-semibold">
              Request Consultation
            </button>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            delay: 1.5,
            duration: 1,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white text-center"
        >
          <p className="text-sm tracking-widest uppercase">
            Scroll Down
          </p>

          <div className="text-3xl mt-2">↓</div>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;