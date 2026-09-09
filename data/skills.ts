export interface SkillCategory {
  category: string;
  description: string;
  skills: string[];
}

export const skillsData: SkillCategory[] = [
  {
    category: "UX & Product Design",
    description: "End-to-end product design, information architecture, and structured user journeys.",
    skills: [
      "UX Design",
      "Product Design",
      "User Research",
      "User Flows",
      "Information Architecture",
      "User Journey Mapping",
      "Wireframing",
      "Usability Testing",
      "Heuristic Evaluation",
      "Task Flow Optimization"
    ]
  },
  {
    category: "UI & Interaction Design",
    description: "Clean typography, responsive layout systems, and purposeful micro-interactions.",
    skills: [
      "UI Design",
      "Mobile App Design",
      "Responsive Web Design",
      "Interaction Design",
      "Visual Design",
      "Typography",
      "Layout Systems",
      "Accessibility",
      "Micro-interactions",
      "Component Architecture"
    ]
  },
  {
    category: "Design Systems",
    description: "Reusable component architectures, variables, design tokens, and developer handoff.",
    skills: [
      "Figma Design Systems",
      "Components",
      "Variables",
      "Design Tokens",
      "Component Libraries",
      "UI Patterns",
      "Prototyping",
      "Developer Handoff"
    ]
  },
  {
    category: "Research & Strategy",
    description: "Evidence-grounded user research, persona definition, and competitive analysis.",
    skills: [
      "User Interviews",
      "Personas",
      "Empathy Mapping",
      "Competitive Analysis",
      "Customer Journey Mapping",
      "Problem Definition",
      "UX Audits"
    ]
  },
  {
    category: "Visual & Brand Design",
    description: "Digital illustrations, custom iconography, brand identity, and art direction.",
    skills: [
      "Visual Design",
      "Digital Illustration",
      "Iconography",
      "Graphic Design",
      "Layout Design",
      "Brand Identity",
      "Art Direction"
    ]
  },
  {
    category: "AI-Assisted Development",
    description: "AI-assisted development, rapid prototyping, and web/mobile validation workflows.",
    skills: [
      "Antigravity",
      "AI-Assisted Coding",
      "AI Prototyping",
      "AI-Assisted Web Development",
      "AI-Assisted App Development",
      "Rapid Prototyping"
    ]
  },
  {
    category: "Tools",
    description: "Industry-standard design, vector, and prototyping software.",
    skills: [
      "Figma",
      "Adobe Photoshop",
      "Adobe Illustrator",
      "Balsamiq",
      "Marvel",
      "InVision"
    ]
  }
];
