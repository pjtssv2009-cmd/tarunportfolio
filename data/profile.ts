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
  valueProposition: {
    heading: string;
    content: string;
    steps: string;
  };
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
    subheading: string;
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
  availability: "Based in Chennai, India · Open to Full-time, Freelance & Remote Opportunities",
  headline: "I design intuitive digital products and use AI-assisted development to turn ideas into working experiences.",
  subheadline: "I specialize in UX research, product design, interaction design, visual design, Figma design systems, and rapid prototyping for web and mobile products.",
  heroSubtext: "I work across the product journey—from understanding user and business needs to designing, prototyping, validating, and AI-assisted building functional digital experiences.",
  heroCapabilities: [
    "UX Research & Usability",
    "Web & Mobile Product Design",
    "Figma Design Systems & Prototyping"
  ],
  valueProposition: {
    heading: "Design. Prototype. Build. Refine.",
    content: "I combine product thinking, UX/UI design, Figma systems, and AI-assisted development to move from an idea to a usable digital product faster.",
    steps: "Research → Design → Prototype → Build → Validate"
  },
  philosophyHeadline: "Designing with clarity, purpose, and user needs in mind.",
  philosophySubtext: "I combine research, information architecture, interaction design, visual design, prototyping, and design systems to transform complex requirements into simple and scalable experiences.",
  aboutText: [
    "I’m Tarun A, a UI/UX and Product Designer based in Chennai, India, focused on solving complex product problems through simple, purposeful experiences.",
    "I design mobile apps, responsive websites, SaaS platforms, enterprise dashboards, FinTech products, marketplaces, and digital experiences.",
    "My work combines user research, information architecture, interaction design, visual design, prototyping, and scalable Figma design systems.",
    "I’ve also expanded my workflow into AI-assisted development, using Google Antigravity and similar AI development tools to turn concepts and prototypes into functional websites, application interfaces, dashboards, and MVPs.",
    "I believe the best digital products sit at the intersection of user needs, business goals, technology, and thoughtful design."
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
    "User Research & Usability Testing",
    "Information Architecture & User Flows",
    "Wireframing & Interactive Prototyping",
    "UI Design & Interaction Design",
    "Mobile App Design (iOS & Android)",
    "Responsive Web & SaaS Dashboard Design",
    "Figma Design Systems, Components & Tokens",
    "AI-Assisted Product Development",
    "Accessibility (WCAG 2.1 AA) Standards",
    "Cross-Functional Collaboration & Handoff"
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
      description: "Interaction and motion should guide users, provide feedback, and improve usability."
    }
  ],
  process: [
    {
      number: "01",
      title: "Discover",
      description: "Understand users, business goals, constraints, requirements, and the existing product experience."
    },
    {
      number: "02",
      title: "Research",
      description: "Study user behavior, pain points, workflows, competitors, and opportunities."
    },
    {
      number: "03",
      title: "Define",
      description: "Turn research into clear problems, user journeys, information architecture, and priorities."
    },
    {
      number: "04",
      title: "Design",
      description: "Create wireframes, interaction models, high-fidelity UI, design systems, and prototypes."
    },
    {
      number: "05",
      title: "Validate",
      description: "Test assumptions, identify friction, gather feedback, and refine the experience."
    },
    {
      number: "06",
      title: "Build & Deliver",
      description: "Use AI-assisted prototyping and development where useful, then prepare production-ready specifications and developer handoff."
    },
    {
      number: "07",
      title: "Improve",
      description: "Use feedback, product data, and real-world usage to continuously refine the experience."
    }
  ],
  services: [
    {
      number: "01",
      title: "UI/UX & Product Design",
      description: "Designing end-to-end digital products from problem definition and user flows to high-fidelity UI, prototyping, validation, and developer handoff.",
      deliverables: ["User flows", "Wireframes", "High-fidelity mockups", "Interactive prototypes", "Developer handoff"]
    },
    {
      number: "02",
      title: "Web Design & Redesign",
      description: "Designing responsive websites and web platforms with clear information architecture, intuitive navigation, accessibility, and conversion-focused journeys.",
      deliverables: ["Responsive layouts", "Information architecture", "Visual assets", "Design specs"]
    },
    {
      number: "03",
      title: "Mobile App Design",
      description: "Creating iOS and Android experiences with clear navigation, purposeful interactions, scalable components, and task-focused user flows.",
      deliverables: ["Mobile UI screens", "Gesture interactions", "Component kits", "App prototypes"]
    },
    {
      number: "04",
      title: "UX Research & Usability",
      description: "Using interviews, competitive analysis, journey mapping, heuristic evaluation, usability testing, and UX audits to identify problems and opportunities.",
      deliverables: ["User interviews", "Competitive audit", "Journey maps", "UX audit report"]
    },
    {
      number: "05",
      title: "Design Systems & Prototyping",
      description: "Building scalable Figma libraries, components, variables, design tokens, interaction patterns, and high-fidelity prototypes.",
      deliverables: ["Figma design system", "Design tokens", "Reusable components", "Interactive prototypes"]
    },
    {
      number: "06",
      title: "AI-Assisted Product Development",
      description: "Using Google Antigravity and similar AI-assisted development tools to rapidly prototype, build, test, and iterate functional websites, application interfaces, dashboards, and MVPs.",
      deliverables: ["Interactive prototypes", "AI-assisted web apps", "Functional MVP builds", "Living design systems"]
    }
  ],
  aiAssisted: {
    heading: "AI-Assisted Product Development",
    subheading: "From design concepts to working digital products.",
    content: [
      "I combine UI/UX design, Figma, prototyping, and AI-assisted development to rapidly turn ideas into functional digital experiences.",
      "Using Google Antigravity and similar AI development tools, I can move beyond static design files to build and validate: Responsive websites · Application prototypes · Interactive dashboards · Product MVPs · Landing pages · Design experiments"
    ],
    tools: [
      "Google Antigravity AI Development",
      "Responsive Websites & Web Apps",
      "Application Prototypes & Live Demos",
      "Interactive Dashboards & MVPs",
      "Landing Pages & Design Experiments",
      "Figma-to-Code Architecture"
    ],
    workflow: [
      "Research",
      "Figma",
      "Prototype",
      "AI-Assisted Build",
      "Test",
      "Iterate",
      "Refine"
    ],
    description: "AI accelerates execution, but the design decisions remain grounded in user needs, usability, accessibility, visual quality, product goals, and scalable design systems."
  },
  availabilitySection: {
    heading: "Open to Product Design Opportunities",
    content: "I’m open to full-time UI/UX and Product Design roles, freelance projects, remote opportunities, and selected collaborations.\n\nI can contribute across UX research, product design, UI design, design systems, prototyping, and AI-assisted product development.",
    cta: "Let's Work Together"
  },
  faqs: [
    {
      question: "Who is Tarun A?",
      answer: "Tarun A is a UI/UX and Product Designer based in Chennai, India, specializing in digital product experiences for web and mobile platforms."
    },
    {
      question: "What does Tarun specialize in?",
      answer: "Tarun specializes in product design, UX research, UI/UX design, interaction design, mobile app design, responsive web design, information architecture, design systems, prototyping, and usability."
    },
    {
      question: "What industries has Tarun worked in?",
      answer: "Tarun has worked on digital products and experiences across FinTech, SaaS, e-commerce, AgriTech, enterprise platforms, investment banking, automotive, education, IoT, and consumer products."
    },
    {
      question: "What design tools does Tarun use?",
      answer: "Tarun primarily uses Figma, Adobe Photoshop, Adobe Illustrator, Balsamiq, Marvel, and InVision, along with modern AI-assisted development and prototyping tools."
    },
    {
      question: "Does Tarun use AI for product development?",
      answer: "Yes. Tarun uses Google Antigravity and similar AI-assisted development tools to rapidly prototype, build, test, and iterate websites, application interfaces, dashboards, and MVPs alongside his UI/UX workflow."
    },
    {
      question: "Does Tarun build websites and applications?",
      answer: "Yes. In addition to UI/UX design, Tarun uses AI-assisted development tools to turn design concepts into responsive websites, application prototypes, dashboards, landing pages, and functional MVP experiences."
    },
    {
      question: "What is Tarun's design process?",
      answer: "Tarun's process combines discovery, research, problem definition, information architecture, UX/UI design, prototyping, validation, AI-assisted development where appropriate, iteration, and developer handoff."
    },
    {
      question: "Is Tarun available for UI/UX opportunities?",
      answer: "Yes. Tarun is open to full-time UI/UX and Product Design roles, freelance projects, remote opportunities, and selected collaborations."
    },
    {
      question: "Where is Tarun based?",
      answer: "Tarun is based in Chennai, Tamil Nadu, India, and is open to opportunities with teams in India and internationally."
    },
    {
      question: "What type of digital products does Tarun design?",
      answer: "Tarun designs mobile applications, responsive websites, SaaS platforms, enterprise dashboards, FinTech products, marketplaces, e-commerce experiences, and digital transformation products."
    }
  ]
};
