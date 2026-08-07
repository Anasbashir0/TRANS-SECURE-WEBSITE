import { motion } from "framer-motion";
import clients from "../data/clients";

function Clients() {
  // Duplicate the array for seamless looping
  const scrollingClients = [...clients, ...clients];

  return (
    <section className="py-20 sm:py-24 lg:py-28 bg-white">

      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 xl:px-8">

        {/* Header */}

        <div className="text-center mb-12 sm:mb-16">

          <p className="uppercase tracking-[3px] sm:tracking-[5px] text-red-600 font-bold text-xs sm:text-sm">
            Clients & Partners
          </p>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-4 sm:mt-5 text-slate-900 leading-tight">
            Trusted By Leading Organizations
          </h2>

          <div className="w-16 sm:w-20 h-1 bg-red-600 rounded-full mx-auto mt-5 sm:mt-6"></div>

          <p className="mt-5 sm:mt-6 max-w-3xl mx-auto text-sm sm:text-base text-slate-600 leading-7 sm:leading-8">
            We are proud to collaborate with government institutions,
            private organizations and strategic partners across Nigeria.
          </p>

        </div>

        {/* Logo Carousel */}

        <div className="relative overflow-hidden">

          {/* Left Fade */}

          <div className="absolute left-0 top-0 h-full w-12 sm:w-20 lg:w-28 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>

          {/* Right Fade */}

          <div className="absolute right-0 top-0 h-full w-12 sm:w-20 lg:w-28 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>

          {/* Scrolling Logos */}

          <motion.div
            className="flex gap-4 sm:gap-6 lg:gap-10"
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
                key={`${client.name}-${index}`}
                className="flex-shrink-0 w-[170px] sm:w-[200px] lg:w-[220px] h-28 sm:h-32 lg:h-36 bg-slate-50 rounded-2xl sm:rounded-3xl shadow-md hover:shadow-xl transition duration-300 flex items-center justify-center px-5 sm:px-6"
              >

                <img
                  src={client.logo}
                  alt={client.name}
                  className="max-w-full max-h-12 sm:max-h-14 lg:max-h-16 object-contain grayscale hover:grayscale-0 transition duration-500"
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