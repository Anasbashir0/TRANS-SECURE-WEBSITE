import {
  Building2,
  Wrench,
  ShoppingCart,
  Briefcase,
  Home,
  ClipboardList,
} from "lucide-react";

const services = [
  {
    id: 1,
    slug: "construction",

    title: "Construction",

    subtitle:
      "Delivering quality construction projects from concept to completion.",

    description:
      "High-quality construction services for residential, commercial and industrial projects.",

    longDescription:
      "TRANS-SECURE Limited provides comprehensive construction solutions for residential, commercial and industrial developments. From planning and design to execution and delivery, we ensure every project meets the highest standards of quality, safety and durability.",

    icon: Building2,

    heroImage: "/images/services/construction.jpg",

    services: [
      "Residential Construction",
      "Commercial Buildings",
      "Industrial Facilities",
      "Civil Engineering Works",
      "Renovation & Remodeling",
      "Project Supervision",
    ],
  },

  {
    id: 2,
    slug: "engineering",

    title: "Engineering",

    subtitle:
      "Professional engineering services backed by technical excellence.",

    description:
      "Professional engineering solutions delivered by experienced experts.",

    longDescription:
      "Our engineering team provides innovative and practical engineering solutions across structural, civil and infrastructure projects. Every design is carefully developed to maximize efficiency, safety and long-term performance.",

    icon: Wrench,

    heroImage: "/images/services/engineering.jpg",

    services: [
      "Structural Engineering",
      "Civil Engineering",
      "Design Consultancy",
      "Engineering Supervision",
      "Technical Advisory",
      "Feasibility Studies",
    ],
  },

  {
    id: 3,
    slug: "procurement",

    title: "Procurement",

    subtitle:
      "Reliable sourcing and procurement solutions you can trust.",

    description:
      "Reliable sourcing and procurement of materials and equipment.",

    longDescription:
      "We provide efficient procurement services by sourcing quality materials, equipment and technical resources from trusted suppliers while ensuring value for money and timely delivery.",

    icon: ShoppingCart,

    heroImage: "/images/services/procurement.jpg",

    services: [
      "Material Procurement",
      "Equipment Supply",
      "Vendor Management",
      "Logistics Coordination",
      "Contract Procurement",
      "Supply Chain Support",
    ],
  },

  {
    id: 4,
    slug: "facility-management",

    title: "Facility Management",

    subtitle:
      "Maintaining facilities for maximum performance and value.",

    description:
      "Comprehensive maintenance and management services for facilities.",

    longDescription:
      "Our facility management solutions help organizations maintain safe, efficient and productive working environments through preventive maintenance and professional operational support.",

    icon: Briefcase,

    heroImage: "/images/services/facility.jpg",

    services: [
      "Building Maintenance",
      "Property Management",
      "Cleaning Services",
      "Electrical Maintenance",
      "Mechanical Maintenance",
      "Facility Inspection",
    ],
  },

  {
    id: 5,
    slug: "real-estate",

    title: "Real Estate",

    subtitle:
      "Innovative property development and investment solutions.",

    description:
      "Property development, sales, leasing and investment solutions.",

    longDescription:
      "We develop and manage high-quality residential and commercial properties while providing clients with professional investment and real estate advisory services.",

    icon: Home,

    heroImage: "/images/services/real-estate.jpg",

    services: [
      "Property Development",
      "Property Sales",
      "Property Leasing",
      "Investment Advisory",
      "Estate Management",
      "Property Valuation",
    ],
  },

  {
    id: 6,
    slug: "project-management",

    title: "Project Management",

    subtitle:
      "Planning, coordinating and delivering projects successfully.",

    description:
      "Planning, execution and supervision of projects from start to completion.",

    longDescription:
      "We provide complete project management services covering planning, scheduling, budgeting, execution and monitoring to ensure projects are delivered on time, within budget and to the highest quality standards.",

    icon: ClipboardList,

    heroImage: "/images/services/project-management.jpg",

    services: [
      "Project Planning",
      "Scheduling",
      "Budget Management",
      "Risk Assessment",
      "Quality Assurance",
      "Project Monitoring",
    ],
  },
];

export default services;