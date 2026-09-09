export interface Profile {
  name: string;
  role: string;
  location: string;
  email: string;
  phone: string;
  linkedin: string;
  behance: string;
  avatar: string;
  logo: string;
  logoWhite: string;
  availability: string;
  headline: string;
  subheadline: string;
  heroSubtext: string;
  heroCapabilities: string[];
  philosophyHeadline: string;
  philosophySubtext: string;
  aboutText: string[];
  approachSteps: string[];
  coreExpertise: string[];
  designPhilosophy: {
    title: string;
    description: string;
  }[];
  process: {
    number: string;
    title: string;
    description: string;
  }[];
  services: {
    number: string;
    title: string;
    description: string;
    deliverables: string[];
  }[];
  aiAssisted: {
    heading: string;
    content: string[];
    tools: string[];
    workflow: string[];
    description: string;
  };
  availabilitySection: {
    heading: string;
    content: string;
    cta: string;
  };
  faqs: {
    question: string;
    answer: string;
  }[];
}

export const profileData: Profile = {
  name: "Tarun A",
  role: "UI/UX & Product Designer",
  location: "Chennai, Tamil Nadu, India",
  email: "tarunoffic@gmail.com",
  phone: "+91 82489 36098",
  linkedin: "https://www.linkedin.com/in/tarun-a-in/",
  behance: "https://www.behance.net/tarun_a",
  avatar: "/images/tarun/portrait.png",
  logo: "/images/logo.png",
  logoWhite: "/images/logo-white.png",
  availability: "Based in Chennai, India",
  headline: "Designing intuitive digital products that solve real user and business problems.",
  subheadline: "I design user-centered digital experiences for web and mobile products, combining UX research, interaction design, visual design, prototyping, and scalable Figma design systems.",
  heroSubtext: "From complex enterprise workflows to consumer mobile applications, I turn requirements and user needs into clear, accessible, and engaging product experiences.",
  heroCapabilities: [
    "UX Research & Usability",
    "Web & Mobile Product Design",
    "Figma Design Systems & Prototyping"
  ],
  philosophyHeadline: "Designing with clarity, purpose, and user needs in mind.",
  philosophySubtext: "I combine research, information architecture, interaction design, visual design, prototyping, and design systems to transform complex requirements into simple and scalable experiences.",
  aboutText: [
    "I’m a UI/UX and Product Designer based in Chennai, India, focused on creating digital products that are intuitive, accessible, and aligned with real business goals.",
    "My experience spans mobile applications, responsive websites, SaaS platforms, enterprise dashboards, FinTech products, e-commerce, and digital transformation projects.",
    "I combine research, information architecture, interaction design, visual design, prototyping, and design systems to transform complex requirements into simple and scalable experiences."
  ],
  approachSteps: [
    "Understand the problem",
    "Research the users",
    "Structure the experience",
    "Design the interface",
    "Validate",
    "Deliver"
  ],
  coreExpertise: [
    "UX Research & Usability",
    "Product & UI/UX Design",
    "Mobile App Design",
    "Responsive Web Design",
    "Information Architecture",
    "Interaction Design",
    "Design Systems",
    "Figma Prototyping",
    "Usability Testing",
    "Heuristic Evaluation"
  ],
  designPhilosophy: [
    {
      title: "Clarity over decoration",
      description: "Every interface should make information easy to understand and actions easy to complete."
    },
    {
      title: "Empathy before assumptions",
      description: "I use research, user feedback, and usability analysis to understand problems before designing solutions."
    },
    {
      title: "Systems over one-off screens",
      description: "I create reusable components, patterns, and design systems that scale across products and teams."
    },
    {
      title: "Purposeful interaction",
      description: "Motion and interaction should guide users, communicate feedback, and improve usability—not simply add visual effects."
    }
  ],
  process: [
    {
      number: "01",
      title: "Understand",
      description: "Understand the business goals, users, requirements, constraints, and existing experience."
    },
    {
      number: "02",
      title: "Research",
      description: "Study user needs, behaviors, pain points, competitors, and existing workflows."
    },
    {
      number: "03",
      title: "Define",
      description: "Translate insights into problem statements, user journeys, information architecture, and task flows."
    },
    {
      number: "04",
      title: "Design",
      description: "Create wireframes, high-fidelity interfaces, design systems, and interactive prototypes."
    },
    {
      number: "05",
      title: "Validate",
      description: "Test the experience, identify usability issues, gather feedback, and refine the solution."
    },
    {
      number: "06",
      title: "Deliver",
      description: "Prepare design specifications, components, documentation, and developer-ready handoff."
    }
  ],
  services: [
    {
      number: "01",
      title: "UI/UX & Product Design",
      description: "End-to-end product design from discovery and user flows to wireframes, high-fidelity interfaces, prototypes, usability testing, and developer handoff.",
      deliverables: ["User flows", "Wireframes", "High-fidelity mockups", "Interactive prototypes", "Developer handoff"]
    },
    {
      number: "02",
      title: "Web Design & Redesign",
      description: "Responsive websites and web platforms designed around clear information architecture, conversion-focused journeys, accessibility, and consistent visual systems.",
      deliverables: ["Responsive layouts", "Information architecture", "Visual assets", "Design specs"]
    },
    {
      number: "03",
      title: "Mobile App Design",
      description: "User-centered iOS and Android experiences covering onboarding, navigation, task flows, interaction patterns, and scalable mobile UI systems.",
      deliverables: ["Mobile UI screens", "Gesture interactions", "Component kits", "App prototypes"]
    },
    {
      number: "04",
      title: "UX Research & Usability",
      description: "User interviews, competitive analysis, journey mapping, heuristic evaluation, usability testing, and UX audits to identify product opportunities and usability problems.",
      deliverables: ["User interviews", "Competitive audit", "Journey maps", "UX audit report"]
    },
    {
      number: "05",
      title: "Design Systems & Prototyping",
      description: "Scalable Figma design systems, reusable components, variables, typography, interaction patterns, and interactive prototypes that support consistent product development.",
      deliverables: ["Figma design system", "Design tokens", "Reusable components", "Interactive prototypes"]
    }
  ],
  aiAssisted: {
    heading: "AI-Assisted Prototyping & Vibe Coding",
    content: [
      "In addition to UI/UX and product design, I embrace vibe coding using Google Antigravity and similar AI-assisted development tools to rapidly build, test, and iterate on functional prototypes and modern digital interfaces.",
      "By combining Figma design systems and user-centered thinking with AI-powered development workflows, I turn product concepts into fully working digital experiences with speed and precision."
    ],
    tools: [
      "Vibe Coding with Google Antigravity",
      "AI-Assisted Web & App Development",
      "Interactive Prototyping & Live Demos",
      "Figma Design-to-Code Architecture",
      "Rapid MVP Validation & User Testing"
    ],
    workflow: [
      "Research & Strategy",
      "UX/UI Design in Figma",
      "Interactive Prototyping",
      "Vibe Coding with Antigravity",
      "Validation & Testing",
      "Iterative Refinement",
      "Developer Handoff"
    ],
    description: "I use vibe coding and modern AI development tools to build and validate responsive websites, mobile application prototypes, interactive product experiences, dashboards, and MVPs while maintaining a strong focus on usability, visual quality, accessibility, and scalable design."
  },
  availabilitySection: {
    heading: "Let's Build Impactful Products Together",
    content: "Looking for a UI/UX or Product Designer who can combine user-centered thinking, strong visual design, and practical product strategy?\n\nLet's connect to discuss your product roadmap and design needs.",
    cta: "Let's Work Together"
  },
  faqs: [
    {
      question: "Who is Tarun A?",
      answer: "Tarun A is a UI/UX and Product Designer based in Chennai, India, specializing in digital product design for web and mobile platforms."
    },
    {
      question: "What does Tarun specialize in?",
      answer: "Tarun specializes in UX research, UI design, interaction design, mobile app design, responsive web design, Figma design systems, prototyping, usability analysis, and product design."
    },
    {
      question: "What industries has Tarun worked in?",
      answer: "His portfolio includes projects across FinTech, SaaS, e-commerce, AgriTech, enterprise platforms, automotive, education, investment banking, and consumer digital products."
    },
    {
      question: "What design and development tools does Tarun use?",
      answer: "Tarun primarily uses Figma for UI/UX design, prototyping, and scalable design systems, along with Adobe Creative Suite (Photoshop, Illustrator), Balsamiq, and modern AI development environments like Google Antigravity for vibe coding and rapid interactive development."
    },
    {
      question: "Does Tarun build prototypes using AI and vibe coding?",
      answer: "Yes. Tarun practices vibe coding using Google Antigravity and similar AI-assisted development tools to rapidly build, test, and validate responsive websites, application prototypes, interactive dashboards, and living MVPs alongside his UI/UX design workflow."
    },
    {
      question: "Is Tarun available for UI/UX opportunities?",
      answer: "Yes. Tarun is open to discussing UI/UX and Product Design opportunities, project collaborations, and design consultations."
    },
    {
      question: "Where is Tarun based?",
      answer: "Tarun is based in Chennai, Tamil Nadu, India, and works with companies and product teams in India and globally."
    },
    {
      question: "What type of products does Tarun design?",
      answer: "Tarun designs mobile applications, responsive websites, SaaS platforms, enterprise dashboards, FinTech products, e-commerce experiences, marketplaces, and digital transformation products."
    }
  ]
};
