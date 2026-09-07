export interface Profile {
  name: string;
  role: string;
  location: string;
  email: string;
  phone: string;
  linkedin: string;
  behance: string;
  avatar: string;
  availability: string;
  headline: string;
  subheadline: string;
  philosophyHeadline: string;
  philosophySubtext: string;
  aboutText: string[];
  designPhilosophy: string[];
  process: {
    number: string;
    title: string;
    description: string;
  }[];
  services: {
    title: string;
    description: string;
    deliverables: string[];
  }[];
}

export const profileData: Profile = {
  name: "Tarun A",
  role: "UI/UX Designer",
  location: "Chennai, India",
  email: "tarunoffic@gmail.com",
  phone: "+91 82489 36098",
  linkedin: "https://www.linkedin.com/in/tarun-a-in/",
  behance: "https://www.behance.net/tarun_a",
  avatar: "/images/tarun/portrait.png",
  availability: "Available for Freelance & Full-time",
  headline: "Designing digital experiences that make complexity feel simple.",
  subheadline: "I create user-centric digital experiences that solve real business problems through thoughtful UX, clear interfaces and purposeful interaction.",
  philosophyHeadline: "Most portfolios try to impress. This one tries to communicate.",
  philosophySubtext: "Design isn't merely how a product looks—it is how effortlessly someone can accomplish their goal. Every screen, layout decision, and micro-interaction in my work is rooted in empathy, functional clarity, and business intent.",
  aboutText: [
    "I am a UI/UX Designer based in Chennai, India, dedicated to designing intuitive, elegant, and high-impact digital products. With a strong foundation in user research, wireframing, interactive prototyping, and design systems, I bridge the gap between user needs and business objectives.",
    "My work spans mobile applications, responsive web platforms, and complex workflow redesigns. I focus on creating interfaces where information hierarchy is immediate, aesthetics serve function, and every touchpoint feels purposeful."
  ],
  designPhilosophy: [
    "Clarity over decoration — interfaces exist to solve problems, not distract.",
    "Empathy-led research — understanding user behavior before drafting solutions.",
    "Systemic thinking — scalable component systems and consistent patterns.",
    "Purposeful motion — animations that orient the user and reinforce feedback."
  ],
  process: [
    {
      number: "01",
      title: "Understand",
      description: "Analyze the problem space, dissect user pain points, audit existing interfaces, and identify the core constraints and objectives."
    },
    {
      number: "02",
      title: "Explore",
      description: "Map user journeys, outline task flows, and brainstorm divergent interaction models to uncover the most seamless pathway."
    },
    {
      number: "03",
      title: "Structure",
      description: "Establish information architecture, create low-to-mid fidelity wireframes, and test foundational navigation layouts."
    },
    {
      number: "04",
      title: "Design",
      description: "Craft high-fidelity UI screens, define typographic hierarchy, design system tokens, and interactive components."
    },
    {
      number: "05",
      title: "Refine",
      description: "Validate with interactive prototypes, test micro-interactions, polish visual balance, and prepare detailed handoff specifications."
    }
  ],
  services: [
    {
      title: "UI/UX Design",
      description: "End-to-end product design from initial discovery and user journey mapping to pixel-perfect interface execution.",
      deliverables: ["User flows", "Wireframes", "High-fidelity mockups", "Interactive prototypes"]
    },
    {
      title: "Web Design & Redesign",
      description: "Modern, responsive, and performance-optimized digital experiences tailored for web applications and marketing sites.",
      deliverables: ["Responsive layouts", "Information architecture", "Visual assets", "Design specs"]
    },
    {
      title: "Mobile App Design",
      description: "Native iOS and Android app experiences focused on thumb-friendly ergonomics, platform conventions, and clean UI.",
      deliverables: ["Mobile screens", "Gesture interactions", "Component kits", "App prototypes"]
    },
    {
      title: "UX Research & Analysis",
      description: "User interviews, persona definition, heuristic evaluations, and comparative analyses to ground design decisions in evidence.",
      deliverables: ["User personas", "Competitive audit", "Journey maps", "UX insights report"]
    },
    {
      title: "Design Systems & Prototyping",
      description: "Modular component libraries, color and typography tokens, and high-fidelity interactive Figma prototypes.",
      deliverables: ["Figma design system", "Token documentation", "Clickable prototypes", "Design handoff"]
    }
  ]
};
