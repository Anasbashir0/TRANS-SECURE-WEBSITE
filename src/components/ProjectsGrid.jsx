import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import projectsPage from "../data/projectsPage";

function ProjectsGrid() {
  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-8">

        <div className="text-center mb-16">
          <p className="uppercase tracking-[5px] text-red-600 font-bold">
            OUR PROJECTS
          </p>

          <h2 className="text-5xl font-bold mt-5 text-slate-900">
            Recent Projects
          </h2>

          <div className="w-20 h-1 bg-red-600 rounded-full mx-auto mt-6"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {projectsPage.map((project, index) => (

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
              className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-60 object-cover"
              />

              <div className="p-8">

                <span className="text-sm font-semibold text-red-600 uppercase">
                  {project.category}
                </span>

                <h3 className="text-2xl font-bold mt-3 text-slate-900">
                  {project.title}
                </h3>

                <p className="mt-4 text-slate-600 leading-7">
                  {project.description}
                </p>

                <div className="flex items-center gap-2 mt-6 text-slate-500">
                  <MapPin size={18} />
                  <span>{project.location}</span>
                </div>

              </div>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default ProjectsGrid;