import { motion } from "framer-motion";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
} from "lucide-react";

function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.currentTarget;

    const name = form.name.value;
    const email = form.email.value;
    const phone = form.phone.value;
    const subject = form.subject.value;
    const message = form.message.value;

    const emailSubject = encodeURIComponent(
      subject || `Website Enquiry from ${name}`
    );

    const emailBody = encodeURIComponent(
      `Name: ${name}\n` +
      `Email: ${email}\n` +
      `Phone: ${phone}\n\n` +
      `Message:\n${message}`
    );

    window.location.href = `mailto:info@trans-secure.com?subject=${emailSubject}&body=${emailBody}`;
  };

  return (
    <section className="py-20 sm:py-24 lg:py-28 bg-white">

      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 xl:px-8">

        {/* Section Heading */}

        <div className="text-center mb-12 sm:mb-16">

          <p className="uppercase tracking-[3px] sm:tracking-[5px] text-red-600 font-bold text-xs sm:text-sm">
            Contact Us
          </p>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-4 sm:mt-5 text-slate-900 leading-tight">
            Let's Discuss Your Next Project
          </h2>

          <div className="w-16 sm:w-20 h-1 bg-red-600 rounded-full mx-auto mt-5 sm:mt-6"></div>

          <p className="mt-5 sm:mt-6 text-sm sm:text-base text-slate-600 max-w-3xl mx-auto leading-7 sm:leading-8">
            We'd love to hear about your project. Reach out today and our
            team will get back to you as soon as possible.
          </p>

        </div>

        {/* Contact Content */}

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16">

          {/* Left - Contact Information */}

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >

            <div className="space-y-7 sm:space-y-8">

              {/* Address */}

              <div className="flex gap-4 sm:gap-5">

                <MapPin
                  className="text-red-600 flex-shrink-0 mt-1"
                  size={24}
                />

                <div>

                  <h4 className="font-bold text-lg sm:text-xl text-slate-900">
                    Office Address
                  </h4>

                  <p className="text-sm sm:text-base text-slate-600 mt-2 leading-7">
                    No. 10, Suite 5, Sapele Street,
                    Off Ladoke Akintola Boulevard,
                    Garki 2, Abuja, Nigeria.
                  </p>

                </div>

              </div>

              {/* Phone */}

              <div className="flex gap-4 sm:gap-5">

                <Phone
                  className="text-red-600 flex-shrink-0 mt-1"
                  size={24}
                />

                <div>

                  <h4 className="font-bold text-lg sm:text-xl text-slate-900">
                    Phone
                  </h4>

                  <a
                    href="tel:+2348067339660"
                    className="text-sm sm:text-base text-slate-600 mt-2 inline-block hover:text-red-600 transition"
                  >
                    +234 806 733 9660
                  </a>

                </div>

              </div>

              {/* Email */}

              <div className="flex gap-4 sm:gap-5">

                <Mail
                  className="text-red-600 flex-shrink-0 mt-1"
                  size={24}
                />

                <div>

                  <h4 className="font-bold text-lg sm:text-xl text-slate-900">
                    Email
                  </h4>

                  <a
                    href="mailto:info@trans-secure.com"
                    className="text-sm sm:text-base text-slate-600 mt-2 inline-block hover:text-red-600 transition break-all"
                  >
                    info@trans-secure.com
                  </a>

                </div>

              </div>

              {/* Working Hours */}

              <div className="flex gap-4 sm:gap-5">

                <Clock
                  className="text-red-600 flex-shrink-0 mt-1"
                  size={24}
                />

                <div>

                  <h4 className="font-bold text-lg sm:text-xl text-slate-900">
                    Working Hours
                  </h4>

                  <p className="text-sm sm:text-base text-slate-600 mt-2 leading-7">
                    Monday - Friday
                    <br />
                    8:00 AM - 5:00 PM
                  </p>

                </div>

              </div>

            </div>

          </motion.div>

          {/* Right - Contact Form */}

          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="bg-slate-50 rounded-2xl sm:rounded-3xl p-5 sm:p-8 lg:p-10 shadow-lg"
          >

            {/* Name + Email */}

            <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">

              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                className="w-full border border-slate-200 rounded-xl p-3.5 sm:p-4 text-sm sm:text-base outline-none focus:border-red-600 focus:ring-1 focus:ring-red-600 transition"
              />

              <input
                type="email"
                name="email"
                placeholder="Email Address"
                required
                className="w-full border border-slate-200 rounded-xl p-3.5 sm:p-4 text-sm sm:text-base outline-none focus:border-red-600 focus:ring-1 focus:ring-red-600 transition"
              />

            </div>

            {/* Phone */}

            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              className="w-full mt-4 sm:mt-6 border border-slate-200 rounded-xl p-3.5 sm:p-4 text-sm sm:text-base outline-none focus:border-red-600 focus:ring-1 focus:ring-red-600 transition"
            />

            {/* Subject */}

            <input
              type="text"
              name="subject"
              placeholder="Subject"
              required
              className="w-full mt-4 sm:mt-6 border border-slate-200 rounded-xl p-3.5 sm:p-4 text-sm sm:text-base outline-none focus:border-red-600 focus:ring-1 focus:ring-red-600 transition"
            />

            {/* Message */}

            <textarea
              name="message"
              rows="5"
              placeholder="Your Message"
              required
              className="w-full mt-4 sm:mt-6 border border-slate-200 rounded-xl p-3.5 sm:p-4 text-sm sm:text-base outline-none focus:border-red-600 focus:ring-1 focus:ring-red-600 transition resize-none"
            ></textarea>

            {/* Submit */}

            <button
              type="submit"
              className="mt-5 sm:mt-6 inline-flex items-center justify-center gap-3 bg-red-600 hover:bg-red-700 text-white px-6 sm:px-8 py-3.5 sm:py-4 rounded-full transition-all duration-300 font-semibold shadow-lg hover:shadow-xl text-sm sm:text-base"
            >
              <Send size={18} />
              Send Message
            </button>

          </motion.form>

        </div>

      </div>

    </section>
  );
}

export default Contact;