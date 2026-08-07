import { motion } from "framer-motion";
import { ArrowRight, MapPin, Building2, Star } from "lucide-react";
import { Link } from "react-router-dom";

import projects from "../data/projects";

function Projects() {
  const featured = projects.find((project) => project.featured);
  const others = projects.filter((project) => !project.featured);

  return (
    <section className="py-20 sm:py-24 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 xl:px-8">

        {/* Section Header */}

        <div className="text-center mb-12 sm:mb-16 lg:mb-20">

          <p className="uppercase tracking-[3px] sm:tracking-[5px] text-red-600 font-bold text-xs sm:text-sm">
            Our Projects
          </p>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-4 sm:mt-5 text-slate-900 leading-tight">
            Engineering Excellence in Every Project
          </h2>

          <div className="w-16 sm:w-20 h-1 bg-red-600 rounded-full mx-auto mt-5 sm:mt-6"></div>

          <p className="mt-5 sm:mt-6 max-w-3xl mx-auto text-sm sm:text-base text-slate-600 leading-7 sm:leading-8">
            Every project reflects our commitment to quality, innovation,
            safety and client satisfaction across construction,
            engineering and real estate development.
          </p>

        </div>

        {/* Featured Project */}

        {featured && (
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl group"
          >

            {/* Image */}

            <img
              src={featured.image}
              alt={featured.title}
              className="w-full h-[500px] sm:h-[550px] lg:h-[600px] object-cover transition duration-700 group-hover:scale-110"
            />

            {/* Overlay */}

            <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 to-transparent"></div>

            {/* Featured Badge */}

            <div className="absolute top-4 left-4 sm:top-8 sm:left-8 bg-red-600 text-white px-3 sm:px-5 py-2 rounded-full flex items-center gap-2 text-xs sm:text-sm font-semibold">

              <Star size={15} className="sm:w-[18px] sm:h-[18px]" />

              Featured Project

            </div>

            {/* Content */}

            <div className="absolute bottom-6 left-5 right-5 sm:bottom-10 sm:left-8 sm:right-8 lg:left-10 max-w-3xl text-white">

              <span className="inline-flex items-center gap-2 text-red-400 font-semibold text-xs sm:text-sm">

                <Building2 size={16} />

                {featured.category}

              </span>

              <h3 className="text-2xl sm:text-4xl lg:text-5xl font-bold mt-2 sm:mt-4 leading-tight">
                {featured.title}
              </h3>

              <p className="mt-3 sm:mt-4 flex items-center gap-2 text-gray-300 text-sm sm:text-base">

                <MapPin size={17} />

                {featured.location}

              </p>

              {/* View Project */}

              <Link
                to={`/projects/${featured.slug}`}
                className="inline-flex items-center gap-2 sm:gap-3 mt-5 sm:mt-8 bg-red-600 hover:bg-red-700 transition px-5 sm:px-7 py-3 sm:py-4 rounded-full text-sm sm:text-base font-semibold"
              >
                View Project

                <ArrowRight size={17} />

              </Link>

            </div>

          </motion.div>
        )}

        {/* Secondary Projects */}

        <div className="grid md:grid-cols-2 gap-6 sm:gap-8 mt-8 sm:mt-10">

          {others.map((project, index) => (

            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.2,
                duration: 0.6,
              }}
              whileHover={{ y: -8 }}
              className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl group"
            >

              {/* Image */}

              <img
                src={project.image}
                alt={project.title}
                className="w-full h-[320px] sm:h-[350px] object-cover transition duration-700 group-hover:scale-110"
              />

              {/* Overlay */}

              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/30 to-transparent"></div>

              {/* Content */}

              <div className="absolute bottom-6 left-5 right-5 sm:bottom-8 sm:left-8 sm:right-8 text-white">

                <span className="inline-flex items-center gap-2 text-red-400 font-medium text-xs sm:text-sm">

                  <Building2 size={15} />

                  {project.category}

                </span>

                <h3 className="text-2xl sm:text-3xl font-bold mt-2 sm:mt-3 leading-tight">
                  {project.title}
                </h3>

                <p className="flex items-center gap-2 mt-2 sm:mt-3 text-gray-300 text-sm">

                  <MapPin size={16} />

                  {project.location}

                </p>

                {/* View Project */}

                <Link
                  to={`/projects/${project.slug}`}
                  className="inline-flex items-center gap-2 mt-4 sm:mt-6 text-white font-semibold text-sm sm:text-base hover:text-red-400 transition-all"
                >
                  View Project

                  <ArrowRight size={18} />

                </Link>

              </div>

            </motion.div>

          ))}

        </div>

        {/* View All Projects */}

        <div className="text-center mt-10 sm:mt-14">

          <Link
            to="/projects"
            className="inline-flex items-center gap-2 sm:gap-3 bg-[#0F2E82] hover:bg-blue-900 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full text-sm sm:text-base font-semibold shadow-lg transition-all"
          >
            View All Projects

            <ArrowRight size={18} />

          </Link>

        </div>

      </div>
    </section>
  );
}

export default Projects;