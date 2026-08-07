import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Home, ArrowLeft } from "lucide-react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function NotFound() {
  return (
    <>
      <Navbar />

      <section className="min-h-screen pt-28 bg-gradient-to-br from-slate-100 via-white to-slate-200 flex items-center justify-center px-8">

        <div className="max-w-3xl text-center">

          {/* 404 Number */}

          <motion.h1
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="text-[140px] md:text-[180px] font-extrabold text-[#0F2E82] leading-none"
          >
            404
          </motion.h1>

          {/* Heading */}

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-5xl font-bold text-slate-900 mt-4"
          >
            Oops! Page Not Found
          </motion.h2>

          {/* Red Divider */}

          <div className="w-20 h-1 bg-red-600 rounded-full mx-auto mt-8"></div>

          {/* Description */}

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mt-8 text-slate-600 text-lg leading-8"
          >
            Sorry, the page you are looking for doesn't exist or may
            have been moved. Please check the URL or return to the
            homepage to continue browsing.
          </motion.p>

          {/* Buttons */}

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="mt-12 flex flex-col sm:flex-row justify-center gap-5"
          >

            <Link
              to="/"
              className="inline-flex items-center justify-center gap-3 bg-red-600 hover:bg-red-700 transition-all duration-300 px-8 py-4 rounded-full text-white font-semibold shadow-lg hover:shadow-xl"
            >
              <Home size={20} />
              Back to Home
            </Link>

            <button
              onClick={() => window.history.back()}
              className="inline-flex items-center justify-center gap-3 border-2 border-[#0F2E82] text-[#0F2E82] hover:bg-[#0F2E82] hover:text-white transition-all duration-300 px-8 py-4 rounded-full font-semibold"
            >
              <ArrowLeft size={20} />
              Go Back
            </button>

          </motion.div>

        </div>

      </section>

      <Footer />
    </>
  );
}

export default NotFound;