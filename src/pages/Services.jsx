import PageHero from "../components/PageHero";

import ServicesGrid from "../components/ServicesGrid";

import servicesBanner from "../assets/images/services-banner.jpg";

import WhyChooseSection from "../components/WhyChooseSection";

import ProcessSection from "../components/ProcessSection";

import CTASection from "../components/CTASection";

function Services() {
  return (
    <>
      {/* Page Hero */}

      <PageHero
        title="Our Services"
        subtitle="Comprehensive engineering, construction and business solutions delivered with excellence."
        backgroundImage={servicesBanner}
      />

      {/* Services */}

      <section className="py-16 sm:py-20 lg:py-24 bg-white">
        <ServicesGrid />
      </section>

      {/* Why Choose Us */}

      <section className="py-16 sm:py-20 lg:py-24 bg-slate-50">
        <WhyChooseSection />
      </section>

      {/* Our Process */}

      <section className="py-16 sm:py-20 lg:py-24 bg-white">
        <ProcessSection />
      </section>

      {/* Call To Action */}

      <CTASection />
    </>
  );
}

export default Services;