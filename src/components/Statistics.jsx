import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import {
  CalendarDays,
  Building2,
  Users,
  BadgeCheck,
} from "lucide-react";

// Animated Counter Component
function Counter({ end, suffix = "" }) {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.4 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return;

    let start = 0;
    const duration = 2000;
    const increment = Math.max(Math.ceil(end / 100), 1);
    const interval = duration / (end / increment);

    const timer = setInterval(() => {
      start += increment;

      if (start >= end) {
        start = end;
        clearInterval(timer);
      }

      setCount(start);
    }, interval);

    return () => clearInterval(timer);
  }, [started, end]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

function Statistics() {
  const stats = [
    {
      end: 20,
      suffix: "+",
      label: "Years of Experience",
      icon: CalendarDays,
    },
    {
      end: 500,
      suffix: "+",
      label: "Projects Completed",
      icon: Building2,
    },
    {
      end: 150,
      suffix: "+",
      label: "Professional Staff",
      icon: Users,
    },
    {
      end: 100,
      suffix: "%",
      label: "Client Commitment",
      icon: BadgeCheck,
    },
  ];

  return (
    <section className="py-20 sm:py-24 lg:py-28 bg-[#081C4F]">

      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 xl:px-8">

        {/* Section Heading */}

        <div className="text-center mb-12 sm:mb-16 lg:mb-20">

          <p className="uppercase tracking-[3px] sm:tracking-[5px] text-red-400 font-bold text-xs sm:text-sm">
            Our Achievements
          </p>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mt-4 sm:mt-5 leading-tight">
            Trusted Excellence Over The Years
          </h2>

          <p className="text-gray-300 mt-5 sm:mt-6 max-w-3xl mx-auto text-[15px] sm:text-base leading-7 sm:leading-8">
            Our commitment to engineering excellence, innovation and
            client satisfaction has enabled us to deliver successful
            projects across Nigeria.
          </p>

        </div>

        {/* Statistics */}

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">

          {stats.map((stat, index) => {

            const Icon = stat.icon;

            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.15,
                }}
                whileHover={{
                  y: -6,
                  scale: 1.02,
                }}
                className="bg-white/5 backdrop-blur-md rounded-2xl sm:rounded-3xl border border-white/10 text-center px-3 sm:px-6 lg:px-8 py-7 sm:py-9 lg:py-10 hover:bg-white/10 hover:border-red-500 hover:shadow-2xl transition-all duration-500"
              >

                {/* Red Line */}

                <div className="w-10 sm:w-12 h-1 bg-red-600 rounded-full mx-auto mb-5 sm:mb-6"></div>

                {/* Icon */}

                <div className="flex justify-center mb-4 sm:mb-6">

                  <Icon
                    size={30}
                    className="text-red-500 sm:w-9 sm:h-9 lg:w-10 lg:h-10"
                  />

                </div>

                {/* Number */}

                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-none">

                  <Counter
                    end={stat.end}
                    suffix={stat.suffix}
                  />

                </h2>

                {/* Label */}

                <p className="text-gray-300 mt-3 sm:mt-4 text-xs sm:text-sm lg:text-base leading-5 sm:leading-6">
                  {stat.label}
                </p>

              </motion.div>
            );

          })}

        </div>

      </div>

    </section>
  );
}

export default Statistics;