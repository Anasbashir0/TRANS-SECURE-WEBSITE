import project1 from "../assets/images/projects/project1.jpg";
import project2 from "../assets/images/projects/project2.jpg";
import project3 from "../assets/images/projects/project3.jpg";

const projects = [
  {
    id: 1,
    slug: "naf-valley-housing-development",

    title: "NAF Valley Housing Development",

    category: "Residential Development",

    location: "Abuja, Nigeria",

    image: project1,

    featured: true,

    description:
      "A modern residential housing development delivered with high-quality engineering and construction standards.",

    longDescription:
      "TRANS-SECURE Limited successfully delivered the NAF Valley Housing Development using modern engineering techniques, quality construction materials and strict project management practices. The project demonstrates our commitment to delivering durable residential infrastructure that meets international standards.",

    client: "Nigerian Air Force",

    year: "2025",

    services: [
      "Construction",
      "Engineering",
      "Project Management",
      "Procurement",
    ],
  },

  {
    id: 2,
    slug: "commercial-office-complex",

    title: "Commercial Office Complex",

    category: "Commercial Construction",

    location: "Lagos, Nigeria",

    image: project2,

    featured: false,

    description:
      "Construction of a premium commercial office facility designed for modern businesses.",

    longDescription:
      "This commercial office complex was designed and executed to provide a modern working environment with high-quality finishing, efficient space utilization and sustainable construction practices.",

    client: "Private Client",

    year: "2024",

    services: [
      "Construction",
      "Engineering",
      "Facility Management",
    ],
  },

  {
    id: 3,
    slug: "infrastructure-engineering",

    title: "Infrastructure Engineering",

    category: "Civil Engineering",

    location: "Port Harcourt, Nigeria",

    image: project3,

    featured: false,

    description:
      "Engineering infrastructure projects executed with precision and long-term durability.",

    longDescription:
      "Our infrastructure engineering project involved planning, supervision and execution of critical engineering works that improve transportation and community development while maintaining the highest quality standards.",

    client: "Government Agency",

    year: "2023",

    services: [
      "Engineering",
      "Construction",
      "Project Management",
    ],
  },
];

export default projects;