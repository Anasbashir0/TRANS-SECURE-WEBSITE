import { useParams, Navigate } from "react-router-dom";
import { CheckCircle } from "lucide-react";

import PageHero from "../components/PageHero";
import CTASection from "../components/CTASection";

import services from "../data/services";

import placeholderBanner from "../assets/images/services-banner.jpg";

function ServiceDetail() {
  const { slug } = useParams();

  const service = services.find(
    (item) => item.slug === slug
  );

  if (!service) {
    return <Navigate to="/404" replace />;
  }

  return (
    <>
      <PageHero
        title={service.title}
        subtitle={service.subtitle}
        backgroundImage={placeholderBanner}
      />

      {/* Service Overview */}

      <section className="py-24 bg-white">

        <div className="max-w-7xl mx-auto px-8 grid lg:grid-cols-2 gap-16 items-center">

          {/* Left Side */}

          <div>

            <p className="uppercase tracking-[5px] text-red-600 font-bold">
              OUR EXPERTISE
            </p>

            <h2 className="text-5xl font-bold mt-5 text-slate-900">
              {service.title}
            </h2>

            <div className="w-20 h-1 bg-red-600 rounded-full mt-6"></div>

            <p className="mt-8 text-slate-600 leading-8">
              {service.longDescription}
            </p>

          </div>

          {/* Right Side */}

          <div className="bg-slate-50 rounded-3xl shadow-xl p-10">

            <h3 className="text-3xl font-bold mb-8">
              What We Offer
            </h3>

            <div className="space-y-5">

              {service.services.map((item) => (

                <div
                  key={item}
                  className="flex items-start gap-4"
                >

                  <CheckCircle
                    size={22}
                    className="text-red-600 mt-1 flex-shrink-0"
                  />

                  <span className="text-slate-700 leading-7">
                    {item}
                  </span>

                </div>

              ))}

            </div>

          </div>

        </div>

      </section>

      <CTASection />

    </>
  );
}

export default ServiceDetail;