import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import {
  CheckCircle,
  MapPin,
  Calendar,
  UserRound,
} from "lucide-react";

import PageHero from "../components/PageHero";
import CTASection from "../components/CTASection";
import NotFound from "./NotFound";

import projects from "../data/projects";

function ProjectDetail() {
  const { slug } = useParams();

  const project = projects.find(
    (item) => item.slug === slug
  );

  // Show the existing 404 page if the project doesn't exist
  if (!project) {
    return <NotFound />;
  }

  return (
    <>
      {/* ================================
          PROJECT HERO
      ================================= */}

      <PageHero
        title={project.title}
        subtitle={project.category}
        backgroundImage={project.image}
      />

      {/* ================================
          PROJECT OVERVIEW
      ================================= */}

      <section className="py-14 sm:py-18 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">

          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 xl:gap-20 items-center">

            {/* Project Image */}

            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-[280px] sm:h-[380px] lg:h-[500px] object-cover rounded-2xl sm:rounded-3xl shadow-2xl"
              />
            </motion.div>

            {/* Project Information */}

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >

              <p className="uppercase tracking-[3px] sm:tracking-[5px] text-red-600 font-bold text-xs sm:text-sm">
                PROJECT OVERVIEW
              </p>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-4 sm:mt-5 text-slate-900 leading-tight">
                {project.title}
              </h2>

              <div className="w-16 sm:w-20 h-1 bg-red-600 rounded-full mt-5 sm:mt-6"></div>

              <p className="mt-6 sm:mt-8 text-slate-600 leading-7 sm:leading-8">
                {project.longDescription}
              </p>

              {/* Project Details */}

              <div className="grid sm:grid-cols-2 gap-6 mt-8 sm:mt-10">

                {/* Location */}

                <div className="flex items-start gap-4">

                  <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-red-50 flex items-center justify-center flex-shrink-0">
                    <MapPin
                      size={21}
                      className="text-red-600"
                    />
                  </div>

                  <div>
                    <p className="text-sm text-slate-500">
                      Location
                    </p>

                    <p className="font-semibold text-slate-900 mt-1">
                      {project.location}
                    </p>
                  </div>

                </div>

                {/* Client */}

                <div className="flex items-start gap-4">

                  <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-red-50 flex items-center justify-center flex-shrink-0">
                    <UserRound
                      size={21}
                      className="text-red-600"
                    />
                  </div>

                  <div>
                    <p className="text-sm text-slate-500">
                      Client
                    </p>

                    <p className="font-semibold text-slate-900 mt-1">
                      {project.client}
                    </p>
                  </div>

                </div>

                {/* Completion */}

                <div className="flex items-start gap-4">

                  <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-red-50 flex items-center justify-center flex-shrink-0">
                    <Calendar
                      size={21}
                      className="text-red-600"
                    />
                  </div>

                  <div>
                    <p className="text-sm text-slate-500">
                      Completion
                    </p>

                    <p className="font-semibold text-slate-900 mt-1">
                      {project.year}
                    </p>
                  </div>

                </div>

                {/* Category */}

                <div className="flex items-start gap-4">

                  <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-red-50 flex items-center justify-center flex-shrink-0">
                    <CheckCircle
                      size={21}
                      className="text-red-600"
                    />
                  </div>

                  <div>
                    <p className="text-sm text-slate-500">
                      Category
                    </p>

                    <p className="font-semibold text-slate-900 mt-1">
                      {project.category}
                    </p>
                  </div>

                </div>

              </div>

            </motion.div>

          </div>

        </div>
      </section>

      {/* ================================
          SERVICES DELIVERED
      ================================= */}

      <section className="py-14 sm:py-18 lg:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">

          {/* Section Heading */}

          <div className="text-center mb-12 sm:mb-16">

            <p className="uppercase tracking-[3px] sm:tracking-[5px] text-red-600 font-bold text-xs sm:text-sm">
              OUR CONTRIBUTION
            </p>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-4 sm:mt-5 text-slate-900 leading-tight">
              Services Delivered
            </h2>

            <div className="w-16 sm:w-20 h-1 bg-red-600 rounded-full mx-auto mt-5 sm:mt-6"></div>

            <p className="mt-5 sm:mt-6 max-w-3xl mx-auto text-slate-600 leading-7 sm:leading-8">
              Key services and expertise provided by TRANS-SECURE
              Limited throughout the project.
            </p>

          </div>

          {/* Service Cards */}

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-8">

            {project.services.map((service, index) => (

              <motion.div
                key={service}
                initial={{
                  opacity: 0,
                  y: 30,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                }}
                whileHover={{
                  y: -6,
                }}
                className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-7 lg:p-8 shadow-lg hover:shadow-xl border border-slate-100 transition-all duration-300"
              >

                <div className="w-12 h-12 rounded-xl bg-red-50 flex items-center justify-center">

                  <CheckCircle
                    size={24}
                    className="text-red-600"
                  />

                </div>

                <h3 className="font-bold text-lg sm:text-xl text-slate-900 mt-5">
                  {service}
                </h3>

              </motion.div>

            ))}

          </div>

        </div>
      </section>

      {/* ================================
          CTA
      ================================= */}

      <section className="py-14 sm:py-18 lg:py-24">
        <CTASection />
      </section>

    </>
  );
}

export default ProjectDetail;