export interface SkillCategory {
  category: string;
  description: string;
  skills: string[];
}

export const skillsData: SkillCategory[] = [
  {
    category: "Product Design",
    description: "End-to-end product design, UX strategy, information architecture, and structured user journeys.",
    skills: [
      "Product Design",
      "UI/UX Design",
      "UX Strategy",
      "Information Architecture",
      "User Flows",
      "User Journey Mapping",
      "Wireframing",
      "Prototyping"
    ]
  },
  {
    category: "Research & Usability",
    description: "Evidence-grounded user research, persona definition, usability testing, and UX audits.",
    skills: [
      "User Research",
      "User Interviews",
      "Competitive Analysis",
      "Personas",
      "Empathy Mapping",
      "Heuristic Evaluation",
      "Usability Testing",
      "UX Audits"
    ]
  },
  {
    category: "UI & Interaction",
    description: "Visual design, layout systems, accessible interfaces, and purposeful micro-interactions.",
    skills: [
      "UI Design",
      "Mobile App Design",
      "Responsive Web Design",
      "Interaction Design",
      "Visual Design",
      "Accessibility",
      "Micro-interactions",
      "Design Patterns"
    ]
  },
  {
    category: "Design Systems",
    description: "Scalable component architectures, design tokens, variables, and developer handoff.",
    skills: [
      "Figma",
      "Design Systems",
      "Components",
      "Variables",
      "Design Tokens",
      "Component Libraries",
      "UI Architecture",
      "Developer Handoff"
    ]
  },
  {
    category: "AI-Assisted Development",
    description: "AI-assisted workflows with Google Antigravity to rapidly prototype, build, test, and iterate products.",
    skills: [
      "Google Antigravity",
      "AI-Assisted Development",
      "AI-Assisted Coding",
      "AI Prototyping",
      "Design-to-Code",
      "Rapid MVP Development",
      "AI-Assisted Web & App Development"
    ]
  },
  {
    category: "Visual Design",
    description: "Digital graphics, vector illustration, branding assets, and typography.",
    skills: [
      "Adobe Photoshop",
      "Adobe Illustrator",
      "Brand Identity",
      "Digital Illustration",
      "Iconography",
      "Graphic Design"
    ]
  }
];
