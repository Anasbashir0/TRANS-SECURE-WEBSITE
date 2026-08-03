import { motion } from "framer-motion";
import clients from "../data/clients";

function Client() {
  return (
    <section id="clients" className="py-28 bg-white">
      <div className="max-w-7xl mx-auto px-8">

        {/* Section Header */}
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

        {/* Client Logos */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">

          {clients.map((client, index) => (

            <motion.div
              key={client.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.08 }}
              viewport={{ once: true }}
              whileHover={{
                scale: 1.05,
                y: -5,
              }}
              className="bg-slate-50 rounded-3xl shadow-md hover:shadow-xl p-8 flex items-center justify-center transition-all duration-300"
            >

              <img
                src={client.logo}
                alt={client.name}
                className="max-h-16 object-contain grayscale hover:grayscale-0 transition duration-500"
              />

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default Client;