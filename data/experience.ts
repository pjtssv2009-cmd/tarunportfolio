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
  kpis?: string[];
  isCurrent?: boolean;
}

export interface EducationItem {
  degree: string;
  institution: string;
  period?: string;
  location: string;
  description?: string;
  highlights?: string[];
}

export const experienceData: ExperienceItem[] = [
  {
    id: "exp-1",
    role: "User Experience Designer",
    company: "Digiryte",
    employmentType: "Full-time",
    period: "April 2026 – Present",
    location: "Manchester, UK / Remote",
    description: "Designing user-centered digital products for international clients across web and mobile platforms.",
    responsibilities: [
      "Translate business and product requirements into clear user journeys and digital experiences.",
      "Design responsive interfaces and interaction systems in Figma.",
      "Lead UX workflows from early discovery through high-fidelity design and prototyping.",
      "Collaborate closely with product managers, developers, and stakeholders.",
      "Build reusable components and scalable design patterns.",
      "Explore AI-assisted development to rapidly prototype and validate digital product concepts."
    ],
    skills: ["UX Design", "Product Design", "Figma", "Interaction Design", "Research", "Prototyping", "Design Systems"],
    isCurrent: true
  },
  {
    id: "exp-2",
    role: "Associate Engineer — UI/UX",
    company: "Xenovex Technologies",
    employmentType: "Full-time",
    period: "March 2024 – March 2026",
    location: "Chennai, India",
    description: "Designed user-centered digital products for government and private-sector organizations across web and mobile platforms.",
    responsibilities: [
      "Designed digital experiences adopted by 100,000+ users across web and mobile platforms.",
      "Contributed to product improvements that increased user engagement by up to 35%.",
      "Conducted user interviews and usability testing, contributing to a 30% reduction in reported friction points.",
      "Led design projects from requirements gathering through high-fidelity prototyping and developer handoff.",
      "Improved design-to-development handoff efficiency by 25% through structured design workflows.",
      "Created design documentation and supported onboarding for new team members.",
      "Collaborated with developers, marketers, product leads, and stakeholders to deliver production-ready experiences.",
      "Applied accessibility principles aligned with WCAG 2.1 AA."
    ],
    kpis: [
      "100K+ Users",
      "Up to 35% Engagement Improvement",
      "30% Fewer Reported Friction Points",
      "25% Faster Handoff"
    ],
    skills: ["Figma", "Design Thinking", "Agile", "User Research", "Usability Testing", "Design Systems", "Prototyping", "WCAG 2.1 AA"]
  },
  {
    id: "exp-3",
    role: "UI/UX Design Intern",
    company: "Techienutpam",
    employmentType: "Internship",
    period: "October 2023 – November 2023",
    location: "Chennai, India",
    description: "Supported UI/UX design initiatives across user flows, wireframes, mobile interfaces, prototypes, and design system maintenance.",
    responsibilities: [
      "Created user flows, task flows, and low-to-high fidelity wireframes.",
      "Designed mobile application interfaces in Figma.",
      "Supported design system maintenance and UI asset creation.",
      "Participated in user feedback evaluation and interaction refinement."
    ],
    skills: ["Figma", "UI Design", "Wireframing", "User Flows", "Prototyping"]
  },
  {
    id: "exp-4",
    role: "Graphic Design Intern",
    company: "aNumak & Company",
    employmentType: "Internship",
    period: "March 2023 – June 2023",
    location: "Bengaluru Area, India",
    description: "Created digital graphics, promotional materials, brand assets, and marketing visuals for client campaigns.",
    responsibilities: [
      "Designed digital and promotional assets for marketing campaigns.",
      "Developed visual concepts from initial ideas through final production.",
      "Maintained brand consistency across campaign materials.",
      "Collaborated with marketing, product, and development teams."
    ],
    skills: ["Adobe Creative Suite", "Adobe Illustrator", "Figma", "Graphic Design", "Brand Identity", "Visual Design"]
  }
];

export const educationData: EducationItem[] = [
  {
    degree: "UX/UI Design Specialization",
    institution: "School Of Techies",
    period: "July 2023 – January 2024",
    location: "Chennai, India",
    description: "Specialized training in UX research, information architecture, wireframing, UI design, design systems, prototyping, and usability.",
    highlights: [
      "Specialized training in UX research, information architecture, wireframing, UI design, design systems, prototyping, and usability."
    ]
  },
  {
    degree: "B.E. Automobile Engineering",
    institution: "Easwari Engineering College — SRM Group",
    period: "August 2020 – June 2023",
    location: "Chennai, India",
    description: "Developed a technical and problem-solving foundation through engineering studies, automotive projects, and student leadership.",
    highlights: [
      "Chief Editorial & Technical Head — Student Society of Automotive Engineers",
      "Vice Captain — Team Peregrine Kire",
      "Vice Captain — IKR Indian Karting Race Team"
    ]
  },
  {
    degree: "Diploma in Automobile Engineering",
    institution: "Aalim Muhammed Salegh Polytechnic College",
    period: "June 2017 – July 2020",
    location: "Chennai, India"
  }
];
