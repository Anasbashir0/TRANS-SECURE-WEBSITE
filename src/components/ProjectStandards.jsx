import { motion } from "framer-motion";
import {
  ShieldCheck,
  HardHat,
  Clock3,
  BadgeCheck,
} from "lucide-react";

function ProjectStandards() {
  const standards = [
    {
      icon: ShieldCheck,
      title: "Quality Assurance",
      description:
        "Every project is delivered according to strict quality control procedures and industry best practices.",
    },
    {
      icon: HardHat,
      title: "Health & Safety",
      description:
        "Safety is integrated into every phase of our projects to protect our workforce, clients and communities.",
    },
    {
      icon: Clock3,
      title: "Timely Delivery",
      description:
        "We prioritize efficient planning and execution to complete projects within agreed timelines.",
    },
    {
      icon: BadgeCheck,
      title: "Professional Excellence",
      description:
        "Our multidisciplinary team delivers reliable engineering and construction solutions with integrity.",
    },
  ];

  return (
    <section>
      <div className="max-w-7xl mx-auto px-5 sm:px-8">

        {/* Section Heading */}

        <div className="text-center mb-12 sm:mb-16 lg:mb-20">

          <p className="uppercase tracking-[3px] sm:tracking-[5px] text-red-600 font-bold text-xs sm:text-sm">
            OUR COMMITMENT
          </p>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-4 sm:mt-5 text-slate-900 leading-tight">
            Project Standards
          </h2>

          <div className="w-16 sm:w-20 h-1 bg-red-600 rounded-full mx-auto mt-5 sm:mt-6"></div>

        </div>

        {/* Standards */}

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">

          {standards.map((item, index) => {

            const Icon = item.icon;

            return (

              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.15,
                }}
                whileHover={{
                  y: -8,
                }}
                className="bg-slate-50 rounded-2xl sm:rounded-3xl p-7 sm:p-8 text-center shadow-lg hover:shadow-2xl transition-all duration-300"
              >

                {/* Icon */}

                <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto rounded-full bg-[#0F2E82] flex items-center justify-center">

                  <Icon
                    size={30}
                    className="text-white sm:w-9 sm:h-9"
                  />

                </div>

                {/* Title */}

                <h3 className="text-xl sm:text-2xl font-bold mt-6 sm:mt-8 text-slate-900 leading-tight">
                  {item.title}
                </h3>

                {/* Description */}

                <p className="mt-4 sm:mt-5 text-slate-600 leading-7 sm:leading-8 text-sm sm:text-base">
                  {item.description}
                </p>

              </motion.div>

            );

          })}

        </div>

      </div>
    </section>
  );
}

export default ProjectStandards;