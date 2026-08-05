import PageHero from "../components/PageHero";

import ServicesGrid from "../components/ServicesGrid";

import servicesBanner from "../assets/images/services-banner.jpg";

import WhyChooseSection from "../components/WhyChooseSection";

import ProcessSection from "../components/ProcessSection";

import CTASection from "../components/CTASection";

function Services() {
  return (
    <>
      <PageHero
        title="Our Services"
        subtitle="Providing integrated engineering, construction, procurement, facility management and real estate solutions across Nigeria."
        backgroundImage={servicesBanner}
      />

      <ServicesGrid />
      <WhyChooseSection />
      <ProcessSection />
      <CTASection />
    </>
  );
}

export default Services;