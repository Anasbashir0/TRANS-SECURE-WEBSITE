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
    <section className="py-24 bg-white">

      <div className="max-w-7xl mx-auto px-8">

        <div className="text-center mb-20">

          <p className="uppercase tracking-[5px] text-red-600 font-bold">
            OUR COMMITMENT
          </p>

          <h2 className="text-5xl font-bold mt-5 text-slate-900">
            Project Standards
          </h2>

          <div className="w-20 h-1 bg-red-600 rounded-full mx-auto mt-6"></div>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

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
                className="bg-slate-50 rounded-3xl p-8 text-center shadow-lg hover:shadow-2xl transition-all duration-300"
              >

                <div className="w-20 h-20 mx-auto rounded-full bg-[#0F2E82] flex items-center justify-center">

                  <Icon
                    size={36}
                    className="text-white"
                  />

                </div>

                <h3 className="text-2xl font-bold mt-8">
                  {item.title}
                </h3>

                <p className="mt-5 text-slate-600 leading-8">
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