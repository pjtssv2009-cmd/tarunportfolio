export interface SkillCategory {
  category: string;
  description: string;
  skills: string[];
}

export const skillsData: SkillCategory[] = [
  {
    category: "UX DESIGN",
    description: "Designing seamless pathways, user flows, and interaction architectures.",
    skills: [
      "User Experience Design",
      "Information Architecture",
      "Wireframing & Flowcharts",
      "Interactive Prototyping",
      "Task Flow Optimization",
      "Heuristic Evaluation",
      "Usability Testing"
    ]
  },
  {
    category: "UI DESIGN",
    description: "Crafting modern, accessible, high-contrast, and aesthetic interfaces.",
    skills: [
      "User Interface Design",
      "Design Systems & Tokens",
      "Mobile App UI (iOS & Android)",
      "Responsive Web Design",
      "Typography & Layout Hierarchy",
      "Micro-Interactions",
      "Component Architecture"
    ]
  },
  {
    category: "RESEARCH & STRATEGY",
    description: "Deriving actionable insights to guide product decisions.",
    skills: [
      "User Research & Interviews",
      "User Persona Development",
      "Competitive Benchmarking",
      "Empathy Mapping",
      "Customer Journey Mapping",
      "Problem Definition"
    ]
  },
  {
    category: "VISUAL & BRAND",
    description: "Visual storytelling and brand alignment across digital touchpoints.",
    skills: [
      "Visual Design",
      "Digital Illustration",
      "Iconography",
      "Graphic Layout",
      "Poster & Asset Design",
      "Moodboards & Art Direction"
    ]
  },
  {
    category: "TOOLS & SOFTWARE",
    description: "Industry-standard design and prototyping toolset.",
    skills: [
      "Figma",
      "Balsamiq Mockups",
      "Marvel",
      "InVision",
      "Adobe Photoshop",
      "Adobe Illustrator"
    ]
  }
];
