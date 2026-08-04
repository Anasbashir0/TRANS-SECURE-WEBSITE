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
    <section className="bg-[#0F2E82] py-24">
      <div className="max-w-7xl mx-auto px-8">

        {/* Section Heading */}

        <div className="text-center mb-16">

          <p className="uppercase tracking-[5px] text-red-400 font-bold">
            Our Achievements
          </p>

          <h2 className="text-5xl font-bold text-white mt-5">
            Trusted Excellence Over The Years
          </h2>

          <p className="text-gray-300 mt-6 max-w-3xl mx-auto leading-8">
            Our commitment to engineering excellence, innovation and
            client satisfaction has enabled us to deliver successful
            projects across Nigeria.
          </p>

        </div>

        {/* Statistics */}

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">

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
                  y: -8,
                  scale: 1.03,
                }}
                className="bg-white/5 backdrop-blur-md rounded-3xl border border-white/10 text-center px-8 py-10 hover:bg-white/10 hover:border-red-500 hover:shadow-2xl transition-all duration-500"
              >

                <div className="w-12 h-1 bg-red-600 rounded-full mx-auto mb-6"></div>

                <div className="flex justify-center mb-6">
                  <Icon
                    size={40}
                    className="text-red-500"
                  />
                </div>

                <h2 className="text-5xl md:text-6xl font-bold text-white">
                  <Counter
                    end={stat.end}
                    suffix={stat.suffix}
                  />
                </h2>

                <p className="text-gray-300 mt-4 text-lg">
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