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
  highlights?: string[];
}

export const experienceData: ExperienceItem[] = [
  {
    id: "exp-1",
    role: "User Experience Designer",
    company: "Digiryte UK",
    employmentType: "Full-time",
    period: "April 2026 — Present (6 months)",
    location: "Manchester Area, United Kingdom",
    description: "Designing intuitive, user-centered digital solutions and interactive web/mobile experiences for international clients, conducting UX analyses, and collaborating across agile product teams.",
    responsibilities: [
      "Leading end-to-end UX design workflows from research and persona mapping to final interface specification.",
      "Collaborating with cross-functional product teams, engineers, and stakeholders to deliver seamless digital experiences.",
      "Designing responsive, accessible web and mobile prototypes in Figma.",
      "Applying user-centric design principles to optimize complex user flows and drive product adoption."
    ],
    skills: ["User Experience (UX)", "Interaction Design", "Figma", "User Research", "Wireframing", "Design Systems"],
    isCurrent: true
  },
  {
    id: "exp-2",
    role: "Associate Engineer - UI/UX",
    company: "Xenovex Technologies Private Limited",
    employmentType: "Full-time",
    period: "March 2024 — March 2026",
    location: "Chennai, India",
    description: "Crafted user-centric digital solutions for government and private organizations, increasing user engagement rates by up to 35% and delivering accessible interfaces adopted by 100,000+ users across web and mobile platforms.",
    responsibilities: [
      "Crafted user-centric digital solutions for government and private organizations, increasing user engagement rates by up to 35%.",
      "Partnered with developers, marketers, and product leads to deliver seamless digital experiences under tight deadlines.",
      "Applied design thinking and agile methodologies to solve organizational challenges, improving team velocity and product-market fit.",
      "Conducted user interviews and usability testing, leading to a 30% decrease in user-reported friction points.",
      "Documented design workflows and onboarded new hires, increasing design team proficiency by 2X within six months.",
      "Led projects from requirements gathering to high-fidelity prototyping, accelerating handoff to developers by 25%.",
      "Specialized in Figma and interactive design, enabling rapid iteration and stakeholder feedback cycles.",
      "Delivered accessible, intuitive interfaces adopted by 100,000+ users across web and mobile platforms."
    ],
    kpis: [
      "Reduced project turnaround time by 35%",
      "Achieved average user satisfaction score of 4.6 / 5",
      "Ensured accessibility compliance at WCAG 2.1 Level AA"
    ],
    skills: ["Figma", "Design Thinking", "Agile Methodologies", "User Interviews", "Usability Testing", "Design Systems", "WCAG 2.1 AA", "Prototyping"]
  },
  {
    id: "exp-3",
    role: "UI/UX Design Intern",
    company: "Techienutpam",
    employmentType: "Internship",
    period: "October 2023 — November 2023",
    location: "Chennai, Tamil Nadu, India",
    description: "Supported UI/UX design initiatives, crafting user flows, low-to-high fidelity wireframes, and interactive component prototypes for emerging product features.",
    responsibilities: [
      "Created structured wireframes, screen task flows, and mobile application interface designs in Figma.",
      "Assisted senior designers in design system maintenance, typographic hierarchy, and UI asset creation.",
      "Participated in user feedback evaluation to iteratively refine interaction flows."
    ],
    skills: ["Figma", "UI Design", "Wireframing", "User Flows", "Prototyping"]
  },
  {
    id: "exp-4",
    role: "Graphic Design Intern",
    company: "aNumak & Company ®",
    employmentType: "Internship",
    period: "March 2023 — June 2023",
    location: "Greater Bengaluru Area, India",
    description: "Produced high-impact graphics and promotional materials that boosted engagement on client channels by 60% and supported marketing campaigns with a 45% improved conversion rate.",
    responsibilities: [
      "Produced high-impact graphics and promotional materials that boosted engagement on client channels by 60%.",
      "Managed the entire design process, from concept through final production, supporting marketing campaigns that saw a 45% better conversion rate.",
      "Utilized Adobe Creative Suite, Figma, and Illustrator to maintain brand consistency and high visual appeal.",
      "Collaborated with cross-functional teams including marketing, product, and development to ensure assets aligned with campaign KPIs."
    ],
    skills: ["Adobe Creative Suite", "Adobe Illustrator", "Figma", "Graphic Design", "Brand Identity", "Visual Design"]
  }
];

export const educationData: EducationItem[] = [
  {
    degree: "UX/UI DESIGN",
    institution: "School Of Techies",
    period: "July 2023 — January 2024",
    location: "Chennai, India",
    highlights: [
      "UX/UI Design specialization covering user research, wireframing, design systems, and rapid prototyping."
    ]
  },
  {
    degree: "B.E Automobile Engineering",
    institution: "Easwari Engineering College (SRM Group)",
    period: "August 2020 — June 2023",
    location: "Chennai, India",
    highlights: [
      "Member of Student Society Of Automotive Engineers.",
      "Elected to Chief Editorial and Technical Head for Student Society Of Automotive Engineers in 2021.",
      "Elected Vice Captain of Team Peregrine Kire.",
      "IKR - Indian Karting Race Team vice captain (December 2021 — August 2022)"
    ]
  },
  {
    degree: "Diploma in Automobile Engineering",
    institution: "Aalim Muhammed Salegh Polytechnic College",
    period: "June 2017 — July 2020",
    location: "Chennai, India"
  }
];
