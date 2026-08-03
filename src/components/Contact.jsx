import { motion } from "framer-motion";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
} from "lucide-react";

function Contact() {
  return (
    <section id="contact" className="py-28 bg-white">
      <div className="max-w-7xl mx-auto px-8">

        <div className="text-center mb-16">
          <p className="uppercase tracking-[5px] text-red-600 font-bold">
            Contact Us
          </p>

          <h2 className="text-5xl font-bold mt-5 text-slate-900">
            Let's Discuss Your Next Project
          </h2>

          <p className="mt-6 text-slate-600 max-w-3xl mx-auto">
            We'd love to hear about your project. Reach out today and our
            team will get back to you as soon as possible.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">

          {/* Left */}

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >

            <div className="space-y-8">

              <div className="flex gap-5">
                <MapPin className="text-red-600" size={28} />
                <div>
                  <h4 className="font-bold text-xl">Office Address</h4>
                  <p className="text-slate-600">
                    No. 10, suits 5, Sapele Street, off Ladoke Akintola Boulevard, Garki 2, Abuja, Nigeria.
                  </p>
                </div>
              </div>

              <div className="flex gap-5">
                <Phone className="text-red-600" size={28} />
                <div>
                  <h4 className="font-bold text-xl">Phone</h4>
                  <p className="text-slate-600">
                    +234 806 733 9660
                  </p>
                </div>
              </div>

              <div className="flex gap-5">
                <Mail className="text-red-600" size={28} />
                <div>
                  <h4 className="font-bold text-xl">Email</h4>
                  <p className="text-slate-600">
                    info@trans-secure.com
                  </p>
                </div>
              </div>

              <div className="flex gap-5">
                <Clock className="text-red-600" size={28} />
                <div>
                  <h4 className="font-bold text-xl">Working Hours</h4>
                  <p className="text-slate-600">
                    Monday - Friday<br />
                    8:00 AM - 5:00 PM
                  </p>
                </div>
              </div>

            </div>

          </motion.div>

          {/* Right */}

          <motion.form
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-slate-50 rounded-3xl p-10 shadow-lg"
          >

            <div className="grid md:grid-cols-2 gap-6">

              <input
                type="text"
                placeholder="Your Name"
                className="border rounded-xl p-4 outline-none focus:border-red-600"
              />

              <input
                type="email"
                placeholder="Email Address"
                className="border rounded-xl p-4 outline-none focus:border-red-600"
              />

            </div>

            <input
              type="text"
              placeholder="Phone Number"
              className="w-full mt-6 border rounded-xl p-4 outline-none focus:border-red-600"
            />

            <input
              type="text"
              placeholder="Subject"
              className="w-full mt-6 border rounded-xl p-4 outline-none focus:border-red-600"
            />

            <textarea
              rows="6"
              placeholder="Your Message"
              className="w-full mt-6 border rounded-xl p-4 outline-none focus:border-red-600"
            ></textarea>

            <button
              className="mt-6 bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-full transition"
            >
              Send Message
            </button>

          </motion.form>

        </div>

      </div>
    </section>
  );
}

export default Contact;