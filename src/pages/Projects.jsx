import PageHero from "../components/PageHero";
import FeaturedProject from "../components/FeaturedProject";

import projectsBanner from "../assets/images/projects-banner.jpg";

import ProjectsGrid from "../components/ProjectsGrid";

import ProjectStandards from "../components/ProjectStandards";

import CTASection from "../components/CTASection";


function Projects() {
  return (
    <>
      <PageHero
        title="Our Projects"
        subtitle="Discover some of our engineering, construction, procurement and infrastructure projects delivered with quality, professionalism and innovation."
        backgroundImage={projectsBanner}
      />

      <FeaturedProject />
      <ProjectsGrid />
      <ProjectStandards />
      <CTASection />
    </>
  );
}

export default Projects;