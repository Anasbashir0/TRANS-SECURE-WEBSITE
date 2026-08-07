import { motion } from "framer-motion";
import { ArrowRight, PhoneCall, Mouse } from "lucide-react";
import { Link } from "react-router-dom";

import heroImage from "../assets/images/hero.jpg";

function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden flex items-center">

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

      <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-900/75 to-slate-900/55" />

      {/* Hero Content */}

      <div className="relative z-10 w-full max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 xl:px-8 flex items-center min-h-screen">

        <div className="w-full max-w-3xl pt-24 sm:pt-28 lg:pt-24 pb-24">

          {/* Small Red Line */}

          <motion.div
            initial={{ width: 0 }}
            animate={{ width: 65 }}
            transition={{ duration: 0.8 }}
            className="h-1 bg-red-600 rounded-full mb-6 sm:mb-8"
          />

          {/* Welcome Text */}

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="uppercase tracking-[2.5px] sm:tracking-[4px] lg:tracking-[6px] text-red-500 font-semibold text-[11px] sm:text-sm lg:text-base"
          >
            Welcome to TRANS-SECURE Limited
          </motion.p>

          {/* Main Heading */}

          <motion.h1
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.2,
              duration: 0.8,
            }}
            className="mt-5 sm:mt-6 text-[2.5rem] sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.08] sm:leading-tight text-white"
          >
            Building Tomorrow's

            <span className="block text-red-500">
              Infrastructure Today
            </span>
          </motion.h1>

          {/* Description */}

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-6 sm:mt-8 text-[15px] sm:text-lg lg:text-xl text-gray-200 leading-7 sm:leading-8 lg:leading-9 max-w-2xl"
          >
            Delivering exceptional Construction, Engineering,
            Procurement, Facility Management and Real Estate
            solutions across Nigeria with integrity, innovation
            and excellence.
          </motion.p>

          {/* Buttons */}

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="mt-8 sm:mt-10 lg:mt-12 flex flex-col sm:flex-row gap-3 sm:gap-4"
          >

            {/* View Projects */}

            <Link
              to="/projects"
              className="group w-full sm:w-auto justify-center bg-red-600 hover:bg-red-700 transition-all duration-300 px-6 sm:px-7 py-3 sm:py-3.5 rounded-full text-sm sm:text-base text-white font-semibold shadow-xl flex items-center gap-2.5"
            >
              View Projects

              <ArrowRight
                size={17}
                className="group-hover:translate-x-1 transition"
              />
            </Link>

            {/* Request Consultation */}

            <Link
              to="/contact"
              className="group w-full sm:w-auto justify-center border-2 border-white hover:bg-white hover:text-[#0F2E82] transition-all duration-300 px-6 sm:px-7 py-3 sm:py-3.5 rounded-full text-sm sm:text-base text-white font-semibold flex items-center gap-2.5"
            >
              <PhoneCall size={17} />

              Request Consultation
            </Link>

          </motion.div>

        </div>

      </div>

      {/* Scroll Indicator */}

      <motion.div
        animate={{
          y: [0, 10, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 2,
        }}
        className="hidden sm:block absolute bottom-7 lg:bottom-10 left-1/2 -translate-x-1/2 text-center text-white"
      >
        <Mouse
          size={26}
          className="mx-auto text-red-500"
        />

        <p className="mt-2 text-[10px] lg:text-xs tracking-[3px] uppercase">
          Scroll
        </p>
      </motion.div>

    </section>
  );
}

export default Hero;