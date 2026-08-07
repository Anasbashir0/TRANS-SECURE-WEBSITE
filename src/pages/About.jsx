import { motion } from "framer-motion";
import {
  CheckCircle,
  Target,
  Eye,
  ShieldCheck,
  Award,
  Lightbulb,
  Users,
  Leaf,
  HardHat,
} from "lucide-react";

import PageHero from "../components/PageHero";

import aboutBanner from "../assets/images/about-banner.jpg";
import aboutImage from "../assets/images/about.jpg";

function About() {
  const highlights = [
    "Over 20 years of industry experience",
    "Professional multidisciplinary team",
    "Innovative engineering solutions",
    "Commitment to quality and safety",
  ];

  const values = [
    {
      icon: ShieldCheck,
      title: "Integrity",
      description:
        "We conduct every project with honesty, transparency and accountability.",
    },
    {
      icon: Award,
      title: "Excellence",
      description:
        "We consistently strive to exceed expectations through quality workmanship and continuous improvement.",
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description:
        "We embrace modern technology and creative thinking to solve complex engineering challenges.",
    },
    {
      icon: HardHat,
      title: "Safety",
      description:
        "Safety remains our highest priority in every project, protecting our people, clients and communities.",
    },
    {
      icon: Users,
      title: "Teamwork",
      description:
        "Strong collaboration enables us to deliver exceptional results and lasting partnerships.",
    },
    {
      icon: Leaf,
      title: "Sustainability",
      description:
        "We are committed to environmentally responsible practices and sustainable development.",
    },
  ];

  return (
    <>
      {/* Page Hero */}

      <PageHero
        title="About TRANS-SECURE"
        subtitle="Building trust through engineering excellence"
        backgroundImage={aboutBanner}
      />

      {/* Company Story */}

      <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-white to-slate-50">

        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 xl:px-8">

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

            {/* Image */}

            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <img
                src={aboutImage}
                alt="About TRANS-SECURE Limited"
                className="w-full rounded-2xl sm:rounded-3xl shadow-2xl object-cover"
              />
            </motion.div>

            {/* Content */}

            <motion.div
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >

              <p className="uppercase tracking-[3px] sm:tracking-[5px] text-red-600 font-bold text-xs sm:text-sm">
                WHO WE ARE
              </p>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-4 sm:mt-5 text-slate-900 leading-tight">
                Delivering Trusted Engineering & Construction Solutions
              </h2>

              <div className="w-16 sm:w-20 h-1 bg-red-600 rounded-full mt-5 sm:mt-6"></div>

              <p className="mt-6 sm:mt-8 text-slate-600 leading-7 sm:leading-8 text-sm sm:text-base">
                TRANS-SECURE Limited is a multidisciplinary company
                specializing in Construction, Engineering, Procurement,
                Facility Management and Real Estate Development across
                Nigeria.
              </p>

              <p className="mt-5 sm:mt-6 text-slate-600 leading-7 sm:leading-8 text-sm sm:text-base">
                Our team combines technical expertise, innovation,
                professionalism and integrity to deliver projects that
                exceed client expectations while maintaining the highest
                standards of quality, safety and environmental responsibility.
              </p>

              {/* Highlights */}

              <div className="grid sm:grid-cols-2 gap-4 sm:gap-5 mt-8 sm:mt-10">

                {highlights.map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle
                      size={19}
                      className="text-red-600 mt-1 flex-shrink-0"
                    />

                    <span className="text-slate-700 text-sm sm:text-base">
                      {item}
                    </span>
                  </div>
                ))}

              </div>

            </motion.div>

          </div>

        </div>

      </section>

      {/* Core Values */}

      <section className="py-16 sm:py-20 lg:py-24 bg-white">

        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 xl:px-8">

          <div className="text-center mb-12 sm:mb-16 lg:mb-20">

            <p className="uppercase tracking-[3px] sm:tracking-[5px] text-red-600 font-bold text-xs sm:text-sm">
              OUR VALUES
            </p>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-4 sm:mt-5 text-slate-900 leading-tight">
              The Principles That Drive Everything We Do
            </h2>

            <div className="w-16 sm:w-20 h-1 bg-red-600 rounded-full mx-auto mt-5 sm:mt-6"></div>

            <p className="mt-5 sm:mt-6 max-w-3xl mx-auto text-slate-600 leading-7 sm:leading-8 text-sm sm:text-base">
              At TRANS-SECURE Limited, our values define how we work,
              how we serve our clients and how we build long-lasting
              relationships.
            </p>

          </div>

          {/* Values Grid */}

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">

            {values.map((value, index) => {

              const Icon = value.icon;

              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.1,
                  }}
                  whileHover={{
                    y: -8,
                    scale: 1.02,
                  }}
                  className="group rounded-2xl sm:rounded-3xl bg-white border border-gray-100 shadow-lg hover:shadow-2xl transition-all duration-300 p-7 sm:p-8 lg:p-10"
                >

                  <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-[#0F2E82]/10 group-hover:bg-red-600 transition-all duration-300 flex items-center justify-center">

                    <Icon
                      size={28}
                      className="text-[#0F2E82] group-hover:text-white transition-all duration-300"
                    />

                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold mt-6 sm:mt-8 text-slate-900">
                    {value.title}
                  </h3>

                  <p className="mt-4 sm:mt-5 text-slate-600 leading-7 text-sm sm:text-base">
                    {value.description}
                  </p>

                </motion.div>
              );

            })}

          </div>

        </div>

      </section>

      {/* Mission & Vision */}

      <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-slate-50 to-white">

        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 xl:px-8">

          {/* Heading */}

          <div className="text-center mb-12 sm:mb-16 lg:mb-20">

            <p className="uppercase tracking-[3px] sm:tracking-[5px] text-red-600 font-bold text-xs sm:text-sm">
              OUR PURPOSE
            </p>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-4 sm:mt-5 text-slate-900">
              Mission & Vision
            </h2>

            <div className="w-16 sm:w-20 h-1 bg-red-600 rounded-full mx-auto mt-5 sm:mt-6"></div>

            <p className="mt-5 sm:mt-6 max-w-3xl mx-auto text-slate-600 leading-7 sm:leading-8 text-sm sm:text-base">
              Guided by excellence, integrity and innovation, we strive
              to deliver sustainable engineering, construction and real
              estate solutions that positively impact communities and
              industries.
            </p>

          </div>

          {/* Mission & Vision Cards */}

          <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-10">

            {/* Mission */}

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              whileHover={{ y: -8 }}
              className="bg-white rounded-2xl sm:rounded-3xl shadow-xl border border-gray-100 p-7 sm:p-8 lg:p-10"
            >

              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-red-100 flex items-center justify-center">

                <Target
                  size={34}
                  className="text-red-600"
                />

              </div>

              <h3 className="text-2xl sm:text-3xl font-bold mt-6 sm:mt-8 text-slate-900">
                Our Mission
              </h3>

              <p className="mt-5 sm:mt-6 text-slate-600 leading-7 sm:leading-8 text-sm sm:text-base">
                To provide innovative, reliable and sustainable
                engineering, procurement, construction, facility
                management and real estate services that exceed
                client expectations while upholding the highest
                standards of quality, safety and professionalism.
              </p>

            </motion.div>

            {/* Vision */}

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.7,
                delay: 0.2,
              }}
              whileHover={{ y: -8 }}
              className="bg-[#0F2E82] rounded-2xl sm:rounded-3xl shadow-xl p-7 sm:p-8 lg:p-10 text-white"
            >

              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-white/10 flex items-center justify-center">

                <Eye
                  size={34}
                  className="text-white"
                />

              </div>

              <h3 className="text-2xl sm:text-3xl font-bold mt-6 sm:mt-8">
                Our Vision
              </h3>

              <p className="mt-5 sm:mt-6 text-gray-200 leading-7 sm:leading-8 text-sm sm:text-base">
                To become one of Africa's most respected engineering
                and infrastructure companies by delivering innovative
                solutions that transform communities, empower industries
                and contribute meaningfully to national development.
              </p>

            </motion.div>

          </div>

        </div>

      </section>

    </>
  );
}

export default About;