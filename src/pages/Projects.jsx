import PageHero from "../components/PageHero";

import FeaturedProject from "../components/FeaturedProject";
import ProjectsGrid from "../components/ProjectsGrid";
import ProjectStandards from "../components/ProjectStandards";
import CTASection from "../components/CTASection";

import projectsBanner from "../assets/images/projects-banner.jpg";

function Projects() {
  return (
    <>
      {/* ================================
          PROJECT HERO
      ================================= */}

      <PageHero
        title="Our Projects"
        subtitle="Explore our construction, engineering and infrastructure projects delivered across Nigeria."
        backgroundImage={projectsBanner}
      />

      {/* ================================
          FEATURED PROJECT
      ================================= */}

      <section className="py-12 sm:py-16 lg:py-20">
        <FeaturedProject />
      </section>

      {/* ================================
          PROJECTS GRID
      ================================= */}

      <section className="py-12 sm:py-16 lg:py-20">
        <ProjectsGrid />
      </section>

      {/* ================================
          PROJECT STANDARDS
      ================================= */}

      <section className="py-12 sm:py-16 lg:py-20">
        <ProjectStandards />
      </section>

      {/* ================================
          CALL TO ACTION
      ================================= */}

      <CTASection />
    </>
  );
}

export default Projects;