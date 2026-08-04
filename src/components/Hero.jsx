import { motion } from "framer-motion";
import { ArrowRight, PhoneCall, Mouse } from "lucide-react";
import heroImage from "../assets/images/hero.jpg";

function Hero() {
  return (
    <section
      id="home"
      className="relative h-screen overflow-hidden"
    >
      {/* Background Image */}

      <motion.div
        initial={{ scale: 1 }}
        animate={{ scale: 1.08 }}
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${heroImage})`,
        }}
      />

      {/* Premium Overlay */}

      <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-900/70 to-slate-900/50"></div>

      {/* Hero Content */}

      <div className="relative z-10 h-full max-w-7xl mx-auto px-8 flex items-center">

        <div className="max-w-3xl pt-24">

          {/* Small Red Line */}

          <motion.div
            initial={{ width: 0 }}
            animate={{ width: 80 }}
            transition={{ duration: 0.8 }}
            className="h-1 bg-red-600 rounded-full mb-8"
          />

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="uppercase tracking-[6px] text-red-500 font-semibold"
          >
            Welcome to TRANS-SECURE Limited
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.2,
              duration: 0.8,
            }}
            className="mt-6 text-5xl md:text-7xl font-extrabold leading-tight text-white"
          >
            Building Tomorrow's
            <span className="block text-red-500">
              Infrastructure Today
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-8 text-xl text-gray-200 leading-9 max-w-2xl"
          >
            Delivering exceptional Construction,
            Engineering, Procurement, Facility
            Management and Real Estate solutions
            across Nigeria with integrity,
            innovation and excellence.
          </motion.p>

          {/* Buttons */}

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="mt-12 flex flex-wrap gap-5"
          >

            <button className="group bg-red-600 hover:bg-red-700 transition-all duration-300 px-8 py-4 rounded-full text-white font-semibold shadow-2xl flex items-center gap-3">

              View Projects

              <ArrowRight
                size={18}
                className="group-hover:translate-x-1 transition"
              />

            </button>

            <button className="group border-2 border-white hover:bg-white hover:text-[#0F2E82] transition-all duration-300 px-8 py-4 rounded-full text-white font-semibold flex items-center gap-3">

              <PhoneCall size={18} />

              Request Consultation

            </button>

          </motion.div>

        </div>

      </div>

      {/* Scroll Indicator */}

      <motion.div
        animate={{
          y: [0, 12, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 2,
        }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-center text-white"
      >

        <Mouse
          size={30}
          className="mx-auto text-red-500"
        />

        <p className="mt-3 text-xs tracking-[4px] uppercase">
          Scroll
        </p>

      </motion.div>

    </section>
  );
}

export default Hero;