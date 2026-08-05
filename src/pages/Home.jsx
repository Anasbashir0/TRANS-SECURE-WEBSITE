import Hero from "../components/Hero";
import About from "../components/About";
import Services from "../components/Services";
import Statistics from "../components/Statistics";
import Subsidiaries from "../components/Subsidiaries";
import Projects from "../components/Projects";
import WhyChooseUs from "../components/WhyChooseUs";
import Clients from "../components/Clients";
import Testimonials from "../components/Testimonials";
import Contact from "../components/Contact";
import BackToTop from "../components/BackToTop";
import MapSection from "../components/MapSection";
import DownloadProfile from "../components/DownloadProfile";
import ScrollProgress from "../components/ScrollProgress";

function Home() {
  return (
    <>
  <ScrollProgress />

   <Hero />
  <About />
  <Services />
  <Statistics />
  <Subsidiaries />
  <Projects />
  <WhyChooseUs />
  <Clients />
  <Testimonials />
  <Contact />
  <MapSection />
 </>
  );
}

export default Home;