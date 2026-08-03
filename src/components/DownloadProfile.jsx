import { motion } from "framer-motion";
import { Download } from "lucide-react";

function DownloadProfile() {
  return (
    <section className="py-24 bg-[#0F2E82]">

      <div className="max-w-6xl mx-auto px-8 text-center">

        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl font-bold text-white"
        >
          Download Our Company Profile
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-8 text-blue-100 max-w-3xl mx-auto leading-8"
        >
          Learn more about our company, services, experience,
          completed projects and our commitment to excellence.
        </motion.p>

        <motion.a
          href="/company-profile.pdf"
          download
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-3 mt-10 bg-red-600 hover:bg-red-700 transition px-10 py-5 rounded-full text-white font-semibold shadow-xl"
        >
          <Download size={22} />
          Download Company Profile
        </motion.a>

      </div>

    </section>
  );
}

export default DownloadProfile;