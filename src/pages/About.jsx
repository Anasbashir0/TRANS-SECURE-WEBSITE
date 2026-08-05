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
      <PageHero
        title="About Us"
        subtitle="Building Nigeria's future through innovative engineering, construction and real estate solutions."
        backgroundImage={aboutBanner}
      />

      {/* Company Story */}

      <section className="py-24 bg-gradient-to-b from-white to-slate-50">
        <div className="max-w-7xl mx-auto px-8 grid lg:grid-cols-2 gap-16 items-center">

          {/* Image */}

          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <img
              src={aboutImage}
              alt="About TRANS-SECURE"
              className="rounded-3xl shadow-2xl"
            />
          </motion.div>

          {/* Content */}

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >

            <p className="uppercase tracking-[5px] text-red-600 font-bold">
              WHO WE ARE
            </p>

            <h2 className="text-5xl font-bold mt-5 text-slate-900 leading-tight">
              Delivering Trusted Engineering & Construction Solutions
            </h2>

            <div className="w-20 h-1 bg-red-600 rounded-full mx-auto mt-6"></div>

            <p className="mt-8 text-slate-600 leading-8">
              TRANS-SECURE Limited is a multidisciplinary company
              specializing in Construction, Engineering,
              Procurement, Facility Management and Real Estate
              Development across Nigeria.
            </p>

            <p className="mt-6 text-slate-600 leading-8">
              Our team combines technical expertise, innovation,
              professionalism and integrity to deliver projects
              that exceed client expectations while maintaining
              the highest standards of quality, safety and
              environmental responsibility.
            </p>

            <div className="grid sm:grid-cols-2 gap-5 mt-10">

              {highlights.map((item) => (

                <div
                  key={item}
                  className="flex items-start gap-3"
                >

                  <CheckCircle
                    size={20}
                    className="text-red-600 mt-1"
                  />

                  <span className="text-slate-700">
                    {item}
                  </span>

                </div>

              ))}

            </div>

          </motion.div>

        </div>
      </section>
{/* Core Values */}

<section className="py-24 bg-gradient-to-b from-white to-slate-50">

  <div className="max-w-7xl mx-auto px-8">

    <div className="text-center mb-20">

      <p className="uppercase tracking-[5px] text-red-600 font-bold">
        OUR VALUES
      </p>

      <h2 className="text-5xl font-bold mt-5 text-slate-900">
        The Principles That Drive Everything We Do
      </h2>

      <div className="w-20 h-1 bg-red-600 rounded-full mx-auto mt-6"></div>

      <p className="mt-6 max-w-3xl mx-auto text-slate-600 leading-8">
        At TRANS-SECURE Limited, our values define how we work, how we
        serve our clients and how we build long-lasting relationships.
      </p>

    </div>

    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

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
              y: -10,
              scale: 1.03,
            }}
            className="group rounded-3xl bg-white border border-gray-100 shadow-lg hover:shadow-2xl transition-all duration-300 p-10"
          >

            <div className="w-16 h-16 rounded-2xl bg-[#0F2E82]/10 group-hover:bg-red-600 transition-all duration-300 flex items-center justify-center">

              <Icon
                size={32}
                className="text-[#0F2E82] group-hover:text-white transition-all duration-300"
              />

            </div>

            <h3 className="text-2xl font-bold mt-8 text-slate-900">
              {value.title}
            </h3>

            <p className="mt-5 text-slate-600 leading-7">
              {value.description}
            </p>

          </motion.div>

        );

      })}

    </div>

  </div>

</section>

      {/* Mission & Vision */}

      <section className="py-24 bg-gradient-to-b from-slate-50 to-white">

        <div className="max-w-7xl mx-auto px-8">

          <div className="text-center mb-20">

            <p className="uppercase tracking-[5px] text-red-600 font-bold">
              OUR PURPOSE
            </p>

            <h2 className="text-5xl font-bold mt-5 text-slate-900">
              Mission & Vision
            </h2>

            <div className="w-20 h-1 bg-red-600 rounded-full mx-auto mt-6"></div>

            <p className="mt-6 max-w-3xl mx-auto text-slate-600 leading-8">
              Guided by excellence, integrity and innovation,
              we strive to deliver sustainable engineering,
              construction and real estate solutions that
              positively impact communities and industries.
            </p>

          </div>

          <div className="grid lg:grid-cols-2 gap-10">

            {/* Mission */}

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              whileHover={{ y: -10 }}
              className="bg-white rounded-3xl shadow-xl border border-gray-100 p-10"
            >

              <div className="w-20 h-20 rounded-2xl bg-red-100 flex items-center justify-center">

                <Target
                  size={38}
                  className="text-red-600"
                />

              </div>

              <h3 className="text-3xl font-bold mt-8">
                Our Mission
              </h3>

              <p className="mt-6 text-slate-600 leading-8">
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
              whileHover={{ y: -10 }}
              className="bg-[#0F2E82] rounded-3xl shadow-xl p-10 text-white"
            >

              <div className="w-20 h-20 rounded-2xl bg-white/10 flex items-center justify-center">

                <Eye
                  size={38}
                  className="text-white"
                />

              </div>

              <h3 className="text-3xl font-bold mt-8">
                Our Vision
              </h3>

              <p className="mt-6 text-gray-200 leading-8">
                To become one of Africa's most respected
                engineering and infrastructure companies by
                delivering innovative solutions that transform
                communities, empower industries and contribute
                meaningfully to national development.
              </p>

            </motion.div>

          </div>

        </div>

      </section>

    </>
  );
}

export default About;