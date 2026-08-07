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
      className="relative min-h-[360px] sm:min-h-[400px] lg:h-[450px] flex items-center justify-center overflow-hidden bg-cover bg-center"
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      {/* Dark Overlay */}

      <div className="absolute inset-0 bg-slate-900/75" />

      {/* Decorative Gradient */}

      <div className="absolute inset-0 bg-gradient-to-r from-[#0F2E82]/70 via-[#0F2E82]/30 to-transparent" />

      {/* Content */}

      <div className="relative z-10 w-full max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 xl:px-8 text-center">

        {/* Title */}

        <motion.h1
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight"
        >
          {title}
        </motion.h1>

        {/* Subtitle */}

        <motion.p
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.2,
            duration: 0.6,
          }}
          className="mt-4 sm:mt-6 max-w-3xl mx-auto text-sm sm:text-base lg:text-lg text-gray-200 leading-7 sm:leading-8"
        >
          {subtitle}
        </motion.p>

        {/* Breadcrumb */}

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            delay: 0.4,
            duration: 0.5,
          }}
          className="mt-6 sm:mt-8 lg:mt-10 flex justify-center items-center gap-2 sm:gap-3 text-sm sm:text-base text-white"
        >
          <Link
            to="/"
            className="hover:text-red-500 transition-colors duration-300"
          >
            Home
          </Link>

          <ChevronRight
            size={16}
            className="sm:w-[18px] sm:h-[18px]"
          />

          <span className="text-red-500 font-semibold">
            {title}
          </span>
        </motion.div>

      </div>
    </section>
  );
}

export default PageHero;