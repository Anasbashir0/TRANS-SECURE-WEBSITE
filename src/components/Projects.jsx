import { motion } from "framer-motion";
import { ArrowRight, MapPin, Building2, Star } from "lucide-react";
import projects from "../data/projects";

function Project() {
  const featured = projects.find((project) => project.featured);
  const others = projects.filter((project) => !project.featured);

  return (
    <section id="projects" className="py-28 bg-white">
      <div className="max-w-7xl mx-auto px-8">

        {/* Section Header */}
        <div className="text-center mb-20">

          <p className="uppercase tracking-[5px] text-red-600 font-bold">
            Our Projects
          </p>

          <h2 className="text-5xl font-bold mt-5 text-slate-900">
            Engineering Excellence in Every Project
          </h2>

          <p className="mt-6 max-w-3xl mx-auto text-slate-600 leading-8">
            Every project reflects our commitment to quality, innovation,
            safety and client satisfaction across construction,
            engineering and real estate development.
          </p>

        </div>

        {/* Featured Project */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative rounded-3xl overflow-hidden shadow-2xl group"
        >

          {/* Image */}

          <img
            src={featured.image}
            alt={featured.title}
            className="w-full h-[600px] object-cover transition duration-700 group-hover:scale-110"
          />

          {/* Overlay */}

          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>

          {/* Featured Badge */}

          <div className="absolute top-8 left-8 bg-red-600 text-white px-5 py-2 rounded-full flex items-center gap-2 font-semibold">

            <Star size={18} />

            Featured Project

          </div>

          {/* Content */}

          <div className="absolute bottom-10 left-10 max-w-3xl text-white">

            <span className="inline-flex items-center gap-2 text-red-400 font-semibold">

              <Building2 size={18} />

              {featured.category}

            </span>

            <h3 className="text-5xl font-bold mt-4">

              {featured.title}

            </h3>

            <p className="mt-4 flex items-center gap-2 text-gray-300">

              <MapPin size={18} />

              {featured.location}

            </p>

            <button className="mt-8 bg-red-600 hover:bg-red-700 transition px-8 py-4 rounded-full flex items-center gap-3 font-semibold">

              View Project

              <ArrowRight size={18} />

            </button>

          </div>

        </motion.div>
                {/* Secondary Projects */}

        <div className="grid md:grid-cols-2 gap-8 mt-10">

          {others.map((project, index) => (

            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ y: -8 }}
              className="relative rounded-3xl overflow-hidden shadow-xl group"
            >

              {/* Image */}

              <img
                src={project.image}
                alt={project.title}
                className="w-full h-[350px] object-cover transition duration-700 group-hover:scale-110"
              />

              {/* Overlay */}

              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent"></div>

              {/* Content */}

              <div className="absolute bottom-8 left-8 right-8 text-white">

                <span className="inline-flex items-center gap-2 text-red-400 font-medium">

                  <Building2 size={16} />

                  {project.category}

                </span>

                <h3 className="text-3xl font-bold mt-3">
                  {project.title}
                </h3>

                <p className="flex items-center gap-2 mt-3 text-gray-300">

                  <MapPin size={16} />

                  {project.location}

                </p>

                <button className="mt-6 flex items-center gap-2 text-white font-semibold hover:text-red-400 transition-all">

                  View Project

                  <ArrowRight size={18} />

                </button>

              </div>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default Project;