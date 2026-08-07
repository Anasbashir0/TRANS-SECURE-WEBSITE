import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { MapPin, ArrowRight } from "lucide-react";

import projects from "../data/projects";

function ProjectsGrid() {
  return (
    <section>
      <div className="max-w-7xl mx-auto px-5 sm:px-8">

        {/* Section Heading */}

        <div className="text-center mb-12 sm:mb-16">

          <p className="uppercase tracking-[3px] sm:tracking-[5px] text-red-600 font-bold text-xs sm:text-sm">
            OUR PROJECTS
          </p>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-4 sm:mt-5 text-slate-900 leading-tight">
            Recent Projects
          </h2>

          <div className="w-16 sm:w-20 h-1 bg-red-600 rounded-full mx-auto mt-5 sm:mt-6"></div>

          <p className="mt-5 sm:mt-6 max-w-3xl mx-auto text-slate-600 leading-7 sm:leading-8 text-sm sm:text-base">
            Explore some of the engineering, construction and infrastructure
            projects successfully delivered by TRANS-SECURE Limited across
            Nigeria.
          </p>

        </div>

        {/* Projects Grid */}

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">

          {projects.map((project, index) => (

            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
              }}
              whileHover={{ y: -8 }}
              className="bg-white rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col"
            >

              {/* Image */}

              <img
                src={project.image}
                alt={project.title}
                className="w-full h-52 sm:h-56 lg:h-60 object-cover"
              />

              {/* Content */}

              <div className="p-6 sm:p-7 lg:p-8 flex flex-col flex-grow">

                <span className="text-xs sm:text-sm font-semibold text-red-600 uppercase tracking-wide">
                  {project.category}
                </span>

                <h3 className="text-xl sm:text-2xl font-bold mt-3 text-slate-900 leading-tight">
                  {project.title}
                </h3>

                <p className="mt-4 text-slate-600 leading-7 text-sm sm:text-base flex-grow">
                  {project.description}
                </p>

                <div className="flex items-start gap-2 mt-6 text-slate-500 text-sm sm:text-base">

                  <MapPin
                    size={18}
                    className="flex-shrink-0 mt-0.5"
                  />

                  <span>
                    {project.location}
                  </span>

                </div>

                <Link
                  to={`/projects/${project.slug}`}
                  className="inline-flex items-center gap-2 mt-7 font-semibold text-red-600 hover:text-red-700 transition group"
                >
                  View Project

                  <ArrowRight
                    size={18}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />

                </Link>

              </div>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default ProjectsGrid;