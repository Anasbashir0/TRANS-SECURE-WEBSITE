import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

function PageHero({
  title,
  subtitle,
  backgroundImage,
}) {
  return (
    <section
      className="relative h-[450px] flex items-center justify-center overflow-hidden bg-cover bg-center"
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      {/* Dark Overlay */}

      <div className="absolute inset-0 bg-slate-900/75"></div>

      {/* Decorative Gradient */}

      <div className="absolute inset-0 bg-gradient-to-r from-[#0F2E82]/70 to-transparent"></div>

      {/* Content */}

      <div className="relative z-10 max-w-7xl w-full px-8 text-center">

        <motion.h1
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-5xl md:text-6xl font-extrabold text-white"
        >
          {title}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mt-6 max-w-3xl mx-auto text-lg text-gray-200 leading-8"
        >
          {subtitle}
        </motion.p>

        {/* Breadcrumb */}

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-10 flex justify-center items-center gap-3 text-white"
        >
          <Link
            to="/"
            className="hover:text-red-500 transition"
          >
            Home
          </Link>

          <ChevronRight size={18} />

          <span className="text-red-500 font-semibold">
            {title}
          </span>

        </motion.div>

      </div>
    </section>
  );
}

export default PageHero;