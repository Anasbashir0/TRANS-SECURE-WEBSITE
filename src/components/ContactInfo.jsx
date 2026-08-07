import { motion } from "framer-motion";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
} from "lucide-react";

function ContactInfo() {
  const contactItems = [
    {
      icon: MapPin,
      title: "Office Address",
      value:
        "No. 10 Amodu Ojikutu Street, Victoria Island, Lagos, Nigeria",
    },
    {
      icon: Phone,
      title: "Phone Number",
      value: "+234 XXX XXX XXXX",
    },
    {
      icon: Mail,
      title: "Email Address",
      value: "info@transsecureltd.com",
    },
    {
      icon: Clock,
      title: "Working Hours",
      value: "Mon - Fri | 8:00 AM - 5:00 PM",
    },
  ];

  return (
    <section>
      <div className="max-w-7xl mx-auto px-5 sm:px-8">

        {/* Section Heading */}

        <div className="text-center mb-12 sm:mb-16 lg:mb-20">

          <p className="uppercase tracking-[3px] sm:tracking-[5px] text-red-600 font-bold text-xs sm:text-sm">
            GET IN TOUCH
          </p>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-4 sm:mt-5 text-slate-900 leading-tight">
            Contact Information
          </h2>

          <div className="w-16 sm:w-20 h-1 bg-red-600 rounded-full mx-auto mt-5 sm:mt-6"></div>

          <p className="mt-5 sm:mt-6 max-w-3xl mx-auto text-slate-600 leading-7 sm:leading-8">
            We'd love to hear from you. Reach out to discuss your
            engineering, construction, procurement or real estate
            requirements.
          </p>

        </div>

        {/* Contact Cards */}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 lg:gap-8">

          {contactItems.map((item, index) => {

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
                  scale: 1.02,
                }}
                className="bg-slate-50 rounded-2xl sm:rounded-3xl p-6 sm:p-7 lg:p-8 text-center shadow-lg hover:shadow-2xl transition-all duration-300"
              >

                {/* Icon */}

                <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto rounded-full bg-[#0F2E82] flex items-center justify-center">

                  <Icon
                    size={30}
                    className="text-white sm:w-[34px] sm:h-[34px]"
                  />

                </div>

                {/* Title */}

                <h3 className="text-xl sm:text-2xl font-bold mt-6 sm:mt-8 text-slate-900">
                  {item.title}
                </h3>

                {/* Value */}

                <p className="mt-4 sm:mt-5 text-slate-600 leading-7 break-words">
                  {item.value}
                </p>

              </motion.div>

            );

          })}

        </div>

      </div>
    </section>
  );
}

export default ContactInfo;