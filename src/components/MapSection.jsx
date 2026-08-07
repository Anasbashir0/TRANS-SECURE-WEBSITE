import { motion } from "framer-motion";
import { MapPin, Navigation } from "lucide-react";

function MapSection() {
  return (
    <section>
      <div className="max-w-7xl mx-auto px-5 sm:px-8">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-10 sm:mb-14"
        >
          <p className="uppercase tracking-[3px] sm:tracking-[5px] text-red-600 font-bold text-xs sm:text-sm">
            Find Us
          </p>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-4 sm:mt-5 text-slate-900">
            Visit Our Office
          </h2>

          <p className="mt-5 sm:mt-6 text-slate-600 max-w-3xl mx-auto leading-7 sm:leading-8 text-sm sm:text-base">
            We'd be delighted to welcome you to our office for project
            discussions, consultations and partnership opportunities.
          </p>

          <div className="w-16 sm:w-20 h-1 bg-red-600 rounded-full mx-auto mt-6 sm:mt-8"></div>
        </motion.div>

        {/* Google Map */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="overflow-hidden rounded-2xl sm:rounded-3xl shadow-2xl border border-slate-200"
        >
          <iframe
            title="TRANS-SECURE Office Location"
            src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3940.489787337831!2d7.490397273752489!3d9.019005289147923!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1i1024!2i768!4f13.1!3m2!1sen!2sng!4v1785765331741!5m2!1sen!2sng"
            width="100%"
            height="500"
            className="h-[320px] sm:h-[400px] lg:h-[500px]"
            style={{ border: 0 }}
            loading="lazy"
            allowFullScreen
            referrerPolicy="strict-origin-when-cross-origin"
          ></iframe>
        </motion.div>

        {/* Address & Button */}
        <div className="mt-6 sm:mt-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 bg-white rounded-2xl shadow-lg p-6 sm:p-8">

          <div className="flex items-start gap-4">
            <MapPin
              size={26}
              className="text-red-600 flex-shrink-0 mt-1"
            />

            <div>
              <h3 className="font-bold text-lg sm:text-xl text-slate-900">
                TRANS-SECURE Limited
              </h3>

              <p className="text-slate-600 mt-2 leading-7 text-sm sm:text-base">
                No. 10, Suite 5, Sapele Street,
                Off Ladoke Akintola Boulevard,
                Garki, Abuja, Nigeria.
              </p>
            </div>
          </div>

          <a
            href="https://maps.app.goo.gl/w4JYkax72LzUiAcu8?g_st=awb"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full md:w-auto inline-flex justify-center items-center gap-3 bg-red-600 hover:bg-red-700 transition text-white px-6 sm:px-8 py-3.5 sm:py-4 rounded-full font-semibold shadow-lg"
          >
            <Navigation size={19} />
            Get Directions
          </a>

        </div>

      </div>
    </section>
  );
}

export default MapSection;