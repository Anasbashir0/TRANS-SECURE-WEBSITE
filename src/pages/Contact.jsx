import PageHero from "../components/PageHero";

import contactBanner from "../assets/images/contact-banner.jpg";

import ContactInfo from "../components/ContactInfo";
import ContactForm from "../components/ContactForm";
import MapSection from "../components/MapSection";
import FAQSection from "../components/FAQSection";
import CTASection from "../components/CTASection";

function Contact() {
  return (
    <>
      {/* Contact Hero */}

      <PageHero
        title="Contact Us"
        subtitle="Let's discuss your next project, partnership or business opportunity."
        backgroundImage={contactBanner}
      />

      <ContactInfo />
      <ContactForm />
      <MapSection />
      <FAQSection />
      <CTASection />
    </>
  );
}

export default Contact;