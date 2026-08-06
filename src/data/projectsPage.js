import project1 from "../assets/images/projects/project1.jpg";
import project2 from "../assets/images/projects/project2.jpg";
import project3 from "../assets/images/projects/project3.jpg";

const projectsPage = [
  {
    id: 1,
    title: "NAF Valley Housing Development",
    category: "Residential Development",
    location: "Abuja, Nigeria",
    image: project1,
    description:
      "A modern residential housing development delivered with high-quality engineering and construction standards.",
    featured: true,
  },
  {
    id: 2,
    title: "Commercial Office Complex",
    category: "Commercial Construction",
    location: "Lagos, Nigeria",
    image: project2,
    description:
      "Construction of a premium commercial office facility designed for modern businesses.",
    featured: false,
  },
  {
    id: 3,
    title: "Infrastructure Engineering",
    category: "Civil Engineering",
    location: "Port Harcourt, Nigeria",
    image: project3,
    description:
      "Engineering infrastructure projects executed with precision and long-term durability.",
    featured: false,
  },
];

export default projectsPage;