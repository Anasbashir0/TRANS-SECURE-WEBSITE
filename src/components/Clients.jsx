import { motion } from "framer-motion";
import clients from "../data/clients";

function Clients() {
  // Duplicate the array for seamless looping
  const scrollingClients = [...clients, ...clients];

  return (
    <section id="clients" className="py-28 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-8">

        {/* Header */}

        <div className="text-center mb-16">

          <p className="uppercase tracking-[5px] text-red-600 font-bold">
            Clients & Partners
          </p>

          <h2 className="text-5xl font-bold mt-5 text-slate-900">
            Trusted By Leading Organizations
          </h2>

          <p className="mt-6 max-w-3xl mx-auto text-slate-600 leading-8">
            We are proud to collaborate with government institutions,
            private organizations and strategic partners across Nigeria.
          </p>

        </div>

        {/* Logo Carousel */}

        <div className="relative overflow-hidden">

          {/* Left Fade */}
          <div className="absolute left-0 top-0 h-full w-28 bg-gradient-to-r from-white to-transparent z-10"></div>

          {/* Right Fade */}
          <div className="absolute right-0 top-0 h-full w-28 bg-gradient-to-l from-white to-transparent z-10"></div>

          <motion.div
            className="flex gap-10"
            animate={{
              x: ["0%", "-50%"],
            }}
            transition={{
              repeat: Infinity,
              ease: "linear",
              duration: 25,
            }}
          >
            {scrollingClients.map((client, index) => (
              <div
                key={index}
                className="min-w-[220px] h-36 bg-slate-50 rounded-3xl shadow-md hover:shadow-xl transition duration-300 flex items-center justify-center"
              >
                <img
                  src={client.logo}
                  alt={client.name}
                  className="max-h-16 object-contain grayscale hover:grayscale-0 transition duration-500"
                />
              </div>
            ))}
          </motion.div>

        </div>

      </div>
    </section>
  );
}

export default Clients;