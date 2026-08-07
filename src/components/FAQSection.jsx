import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

function FAQSection() {
  const faqs = [
    {
      question: "What services does TRANS-SECURE Limited provide?",
      answer:
        "We provide Construction, Engineering, Procurement, Facility Management, Real Estate Development and Project Consultancy services for public and private sector clients.",
    },
    {
      question: "Which locations do you operate in?",
      answer:
        "Our operations cover Abuja, Lagos and other parts of Nigeria depending on the scope and requirements of each project.",
    },
    {
      question: "How do I request a quotation?",
      answer:
        "You can complete the contact form on this website, call our office directly or send us an email with your project details.",
    },
    {
      question: "Do you handle government and private sector projects?",
      answer:
        "Yes. We have the experience and technical capacity to execute projects for government agencies, corporate organizations and private clients.",
    },
    {
      question: "How soon will someone respond to my enquiry?",
      answer:
        "Our team aims to respond to all enquiries within one business day.",
    },
  ];

  const [active, setActive] = useState(null);

  const toggle = (index) => {
    setActive(active === index ? null : index);
  };

  return (
    <section className="py-24 bg-slate-50">

      <div className="max-w-5xl mx-auto px-8">

        <div className="text-center mb-16">

          <p className="uppercase tracking-[5px] text-red-600 font-bold">
            Frequently Asked Questions
          </p>

          <h2 className="text-5xl font-bold mt-5 text-slate-900">
            Have Questions?
          </h2>

          <div className="w-20 h-1 bg-red-600 rounded-full mx-auto mt-6"></div>

          <p className="mt-6 text-slate-600 leading-8">
            Here are some of the questions we receive most often.
          </p>

        </div>

        <div className="space-y-5">

          {faqs.map((faq, index) => (

            <motion.div
              key={index}
              layout
              className="bg-white rounded-2xl shadow-lg overflow-hidden"
            >

              <button
                onClick={() => toggle(index)}
                className="w-full flex justify-between items-center px-8 py-6 text-left"
              >

                <span className="font-semibold text-lg text-slate-900">
                  {faq.question}
                </span>

                <motion.div
                  animate={{
                    rotate: active === index ? 180 : 0,
                  }}
                >
                  <ChevronDown className="text-red-600" />
                </motion.div>

              </button>

              <AnimatePresence>

                {active === index && (

                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >

                    <p className="px-8 pb-8 text-slate-600 leading-8">
                      {faq.answer}
                    </p>

                  </motion.div>

                )}

              </AnimatePresence>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default FAQSection;