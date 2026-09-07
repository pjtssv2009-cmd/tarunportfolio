export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  employmentType: string;
  period: string;
  location: string;
  description: string;
  responsibilities: string[];
  skills: string[];
  isCurrent?: boolean;
}

export interface EducationItem {
  degree: string;
  institution: string;
  period?: string;
  location: string;
}

export const experienceData: ExperienceItem[] = [
  {
    id: "exp-1",
    role: "UI/UX Designer",
    company: "Freelance / Design Consultant",
    employmentType: "Freelance & Projects",
    period: "2023 — Present",
    location: "Chennai, India",
    description: "Designing end-to-end digital experiences for mobile and web applications, collaborating with stakeholders to deliver user-centric solutions from research through high-fidelity handoff.",
    responsibilities: [
      "Conducting comprehensive UX research, user persona creation, and problem definition for client applications.",
      "Designing responsive web platforms, mobile user interfaces (iOS & Android), and interactive Figma prototypes.",
      "Building scalable UI design systems with reusable component libraries and design tokens.",
      "Collaborating on usability audits and iterative interface redesigns to enhance user satisfaction."
    ],
    skills: ["Figma", "UI/UX Design", "Wireframing", "User Research", "Design Systems", "Prototyping"],
    isCurrent: true
  },
  {
    id: "exp-2",
    role: "Product & UI/UX Design Projects",
    company: "Case Studies & Product Initiatives",
    employmentType: "Self-Initiated & Client Briefs",
    period: "2022 — 2024",
    location: "Chennai, India",
    description: "Executed in-depth UX/UI case studies including automotive community platforms (Ride Dude), educational solutions (Aprender), fitness tracking (FitPeo), and public sector UX redesigns (IRCTC).",
    responsibilities: [
      "Conducted heuristic evaluations and user journey mapping for high-traffic platforms like IRCTC.",
      "Formulated information architecture and wireframes using Balsamiq, Marvel, and Figma.",
      "Delivered comprehensive case studies documented and published on Behance to showcase design rationale."
    ],
    skills: ["Figma", "Balsamiq Mockups", "Information Architecture", "Heuristic Evaluation", "User Flows"]
  }
];

export const educationData: EducationItem[] = [
  {
    degree: "UI/UX Design Specialization & Case Study Research",
    institution: "Chennai, India",
    period: "2022 — 2024",
    location: "Chennai, India"
  }
];
