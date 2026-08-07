import { motion } from "framer-motion";

function ContactForm() {
  return (
    <section className="py-24 bg-slate-50">

      <div className="max-w-7xl mx-auto px-8">

        <div className="grid lg:grid-cols-2 gap-16">

          {/* Left Side */}

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >

            <p className="uppercase tracking-[5px] text-red-600 font-bold">
              SEND US A MESSAGE
            </p>

            <h2 className="text-5xl font-bold mt-5 text-slate-900">
              Let's Discuss Your Project
            </h2>

            <div className="w-20 h-1 bg-red-600 rounded-full mt-6"></div>

            <p className="mt-8 text-slate-600 leading-8">
              Whether you're planning a construction project,
              engineering consultancy, procurement service,
              facility management solution or real estate
              investment, our team is ready to assist you.
            </p>

            <p className="mt-6 text-slate-600 leading-8">
              Complete the form and one of our representatives
              will get back to you as soon as possible.
            </p>

          </motion.div>

          {/* Right Side */}

          <motion.form
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="bg-white rounded-3xl shadow-2xl p-10"
          >

            <div className="grid md:grid-cols-2 gap-6">

              <input
                type="text"
                placeholder="Full Name"
                className="border border-gray-300 rounded-xl px-5 py-4 outline-none focus:ring-2 focus:ring-red-500"
              />

              <input
                type="email"
                placeholder="Email Address"
                className="border border-gray-300 rounded-xl px-5 py-4 outline-none focus:ring-2 focus:ring-red-500"
              />

            </div>

            <div className="grid md:grid-cols-2 gap-6 mt-6">

              <input
                type="text"
                placeholder="Phone Number"
                className="border border-gray-300 rounded-xl px-5 py-4 outline-none focus:ring-2 focus:ring-red-500"
              />

              <input
                type="text"
                placeholder="Subject"
                className="border border-gray-300 rounded-xl px-5 py-4 outline-none focus:ring-2 focus:ring-red-500"
              />

            </div>

            <textarea
              rows="6"
              placeholder="Tell us about your project..."
              className="w-full border border-gray-300 rounded-xl px-5 py-4 mt-6 outline-none focus:ring-2 focus:ring-red-500 resize-none"
            ></textarea>

            <button
              type="submit"
              className="mt-8 bg-red-600 hover:bg-red-700 transition-all duration-300 text-white font-semibold px-8 py-4 rounded-full"
            >
              Send Message
            </button>

          </motion.form>

        </div>

      </div>

    </section>
  );
}

export default ContactForm;