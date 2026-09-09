export interface Project {
  id: string;
  slug: string;
  number: string;
  title: string;
  category: string;
  role: string;
  year: string;
  featured: boolean;
  layoutVariant: 'image-left' | 'image-right' | 'full-width' | 'floating-meta' | 'split-screen' | 'editorial-asymmetric';
  behanceUrl?: string;
  liveUrl?: string;
  coverImage: string;
  gallery: string[];
  tools: string[];
  tags: string[];
  description: string;
  overview?: string;
  problem?: string;
  research?: string;
  process?: string;
  solution?: string;
  outcome?: string;
  learnings?: string;
  stats?: {
    views?: { all?: number };
    appreciations?: { all?: number };
    comments?: { all?: number };
    [key: string]: any;
  };
}

export const projectsData: Project[] = [
  {
    id: "rewad-loyalty",
    slug: "rewad",
    number: "01",
    title: "Rewad — Loyalty & Rewards Platform",
    category: "FinTech & Loyalty · Mobile App · Merchant Platform · Admin Portal",
    role: "UI/UX Product Designer",
    year: "2024 — 2026",
    featured: true,
    layoutVariant: "full-width",
    liveUrl: "https://www.rewad.co/",
    behanceUrl: "https://www.behance.net/tarun-a",
    coverImage: "/images/projects/rewad/cover.png",
    gallery: [
      "/images/projects/rewad/cover.png"
    ],
    tools: [
      "Figma",
      "Design Systems",
      "Prototyping",
      "UX Research",
      "Information Architecture"
    ],
    tags: [
      "Customer Mobile App",
      "Merchant POS",
      "Business Admin Portal",
      "Marketing Website",
      "Loyalty & Rewards",
      "UI/UX Design",
      "Figma"
    ],
    description: "Designed a multi-platform loyalty ecosystem connecting customers, merchants, and business teams through a customer mobile app, merchant POS scanner, marketing website, and business administration platform.",
    overview: "Rewad is a comprehensive loyalty and rewards ecosystem designed to replace physical stamp cards for local businesses. As product designer, I architected all 4 interconnected pillars of the product: the Customer Mobile App for digital stamp collection & gift redemption, the Merchant Mobile App for sub-second POS barcode scanning, the responsive Marketing Website, and the comprehensive Web Admin Portal for business owners to configure promotions and analyze customer retention.",
    problem: "Physical punch cards lead to high loss rates and provide zero data insights to business owners. Existing digital loyalty solutions were either clunky enterprise software or created unacceptable checkout delays at the cash register.",
    research: "Conducted field interviews with retail staff and everyday café customers. Discovered that POS verification must take less than 3 seconds to avoid checkout lines, and consumers engage significantly more when rewarded with visual milestone progress rings.",
    process: "Mapped user flows across four interconnected interfaces simultaneously. Built clickable prototypes in Figma, conducted in-person cashier testing to optimize tap targets for one-handed operation, and created a unified multi-platform design token system.",
    solution: "A unified, vibrant ecosystem featuring: (1) Customer iOS/Android App with interactive digital stamp cards and nearby partner discovery; (2) Merchant Mobile Scanner with instant optical validation; (3) Business Web Admin Portal with loyalty rules, revenue telemetry, and customer cohort analytics; and (4) Responsive marketing landing page.",
    outcome: "Engineered sub-2.5 second POS reward redemption, achieved a 92% customer onboarding completion rate, and delivered actionable retention metrics for retail merchants.",
    learnings: "Multi-sided product ecosystems require strict brand consistency while drastically tuning UI density for context (high-density data analytics for web admin vs. high-speed touch targets for cashiers)."
  },
  {
    id: "the-trippin",
    slug: "trippin",
    number: "02",
    title: "Trippin — Custom Apparel & Streetwear Brand",
    category: "Brand Design · E-commerce · Visual Design · Merchandise",
    role: "T-Shirt & Apparel Designer",
    year: "2024 — 2026",
    featured: true,
    layoutVariant: "image-right",
    liveUrl: "https://thetrippin.com/",
    behanceUrl: "https://www.behance.net/tarun-a",
    coverImage: "/images/projects/thetrippin/cover.png",
    gallery: [
      "/images/projects/thetrippin/cover.png"
    ],
    tools: [
      "Adobe Illustrator",
      "Adobe Photoshop",
      "Figma"
    ],
    tags: [
      "Brand Exploration",
      "Typography",
      "Graphic Design",
      "Apparel Graphics",
      "Merchandise Design",
      "Digital Assets"
    ],
    description: "Designed visual identities, typography, graphic apparel, and merchandise experiences for brands, startups, events, and corporate clients across India.",
    overview: "Trippin manufactures premium custom apparel and merchandise for teams, startups, events, and modern brands across India. As designer, I conceptualized and developed high-impact visual identities, typography lockups, graphic apparel collections, and ready-to-print digital production assets.",
    problem: "Merging cutting-edge streetwear aesthetics (cyber-minimalism, Japanese typography, brutalist grid layouts) with industrial screen-printing constraints, ink cures, and brand identity guidelines.",
    research: "Analyzed contemporary streetwear design trends, poster typography, and technical garment manufacturing constraints (fabric weights, DTG vs. screen printing color separations, bleed margins).",
    process: "Iterated through dozens of vector sketches, typography lockups, and 3D digital garment renders to test visual balance, contrast on various fabric colors, and print placement scale.",
    solution: "A distinct collection of oversized streetwear t-shirt graphics, corporate apparel lines, and bespoke graphic identities featuring sharp vector geometry, typography hierarchies, and optimized separation files.",
    outcome: "Produced print-ready vector assets for thousands of delivered apparel units with zero print-registration defects, driving high customer engagement and bulk corporate repeat orders.",
    learnings: "Textile and merchandise design requires an exacting understanding of how digital vector precision translates onto physical moving fabrics under varying lighting conditions."
  },
  {
    id: "soughteasy-admin",
    slug: "soughteasy",
    number: "03",
    title: "SoughtEasy — Enterprise SaaS Admin Platform",
    category: "Enterprise SaaS · Admin Portal · CRM · Workforce Management",
    role: "Admin Portal UI/UX Designer",
    year: "2024 — 2026",
    featured: true,
    layoutVariant: "split-screen",
    liveUrl: "https://soughteasy.com/",
    behanceUrl: "https://www.behance.net/tarun-a",
    coverImage: "/images/projects/soughteasy/cover.png",
    gallery: [
      "/images/projects/soughteasy/cover.png"
    ],
    tools: [
      "Figma",
      "Design Systems",
      "Information Architecture",
      "Data Visualization",
      "Prototyping"
    ],
    tags: [
      "Enterprise SaaS",
      "Admin Portal",
      "CRM",
      "Workforce Management",
      "UI/UX Design",
      "Data Visualization"
    ],
    description: "Designed a multi-tenant enterprise administration platform that brings CRM, workforce management, HR operations, finance, permissions, and business workflows into a centralized experience.",
    overview: "SoughtEasy is an integrated enterprise SMB business operating platform. I was responsible for architecting and designing the complete Admin Portal — the central command hub giving operations managers, HR leaders, and business owners comprehensive control over organizational telemetry, team performance, sales pipelines, and access governance.",
    problem: "SMB admins were burdened with fragmented spreadsheets, isolated CRM tools, and disjointed employee management systems, causing severe administrative drag and high error rates.",
    research: "Conducted usability interviews with SMB operations managers and team leads. Found that fast bulk editing, glanceable KPI health widgets, and granular permission matrices were the highest priorities for fatigue-free daily management.",
    process: "Created a scalable design system with modular card components, high-density data tables, multi-parameter filtering, and custom data visualization graphs in Figma.",
    solution: "A modern, responsive admin dashboard featuring real-time business health telemetry, visual CRM deal pipelines, HR employee metrics, granular permission toggles, and seamless financial reporting.",
    outcome: "Accelerated administrative task turnaround by 40%, streamlined workforce onboarding, and provided executives with unified operational governance.",
    learnings: "High-density enterprise portals succeed when information hierarchy prioritizes rapid scanning without visual noise, coupled with instant confirmation feedback for critical administrative operations."
  },
  {
    id: "sudhanya-app",
    slug: "sudhanya",
    number: "04",
    title: "Sudhanya — Organic Grocery Mobile App",
    category: "E-commerce · AgriTech · Mobile App",
    role: "Mobile App UI/UX Designer",
    year: "2024",
    featured: true,
    layoutVariant: "floating-meta",
    liveUrl: "https://sudhanya.com/",
    behanceUrl: "https://www.behance.net/tarun-a",
    coverImage: "/images/projects/sudhanya/cover.png",
    gallery: [
      "/images/projects/sudhanya/cover.png"
    ],
    tools: [
      "Figma",
      "Mobile UI Design",
      "User Journey Mapping",
      "Prototyping",
      "Design Systems"
    ],
    tags: [
      "E-commerce",
      "AgriTech",
      "Mobile App",
      "User Journeys",
      "UI/UX Design",
      "Prototyping"
    ],
    description: "Designed an end-to-end mobile shopping experience for organic groceries, including product discovery, product browsing, shopping journeys, subscriptions, and sustainable food purchasing.",
    overview: "Sudhanya is a retailer of naturally grown, chemical-free organic foods — offering unpolished rice, wooden cold-pressed oils, whole-grain millets, and sustainable agricultural essentials. I designed the dedicated mobile application (iOS & Android) focusing on clear product categorization, organic certification transparency, recurring weekly delivery subscriptions, and effortless checkout.",
    problem: "Online organic grocery shoppers often encounter skepticism regarding product authenticity, complicated delivery windows, and high friction when trying to set up recurring weekly orders for kitchen essentials.",
    research: "Studied mobile grocery consumer behavior and household purchasing cycles. Discovered that highlighting farm origin stories, showing clear nutritional breakdowns, and offering a 1-tap 'Weekly Essentials Subscription' dramatically improved customer retention and basket size.",
    process: "Mapped user flows for first-time onboarding, category discovery (Cold-Pressed Oils, Grains & Cereals, Natural Pulses), item customization, subscription schedule manager, and quick radius-based delivery checkout.",
    solution: "An earthy, modern mobile application interface with warm organic visual tones, transparent farm provenance cards, nutrition fact breakdowns, flexible subscription pause/resume controls, and a frictionless 2-step checkout flow.",
    outcome: "Enhanced mobile shopping satisfaction with an intuitive subscription builder, boosting repeat organic order frequency and establishing customer trust in farm-to-table traceability.",
    learnings: "In organic e-commerce, UX transparency (farm origins, purity badges, harvesting methods) is just as critical as visual aesthetics in converting first-time buyers into loyal subscribers."
  },
  {
    id: "corpfin-hub",
    slug: "corpfinhub",
    number: "05",
    title: "CorpFin Hub — M&A & Private Capital Marketplace",
    category: "FinTech · Investment Banking · Web Platform · Marketplace",
    role: "Senior Product UI/UX Designer",
    year: "2024 — 2026",
    featured: true,
    layoutVariant: "split-screen",
    liveUrl: "https://www.corpfinhub.co.uk/",
    behanceUrl: "https://www.behance.net/tarun-a",
    coverImage: "/images/projects/corpfinhub/cover.png",
    gallery: [
      "/images/projects/corpfinhub/cover.png"
    ],
    tools: [
      "Figma",
      "FinTech UX",
      "Design Systems",
      "Data Visualization",
      "User Research"
    ],
    tags: [
      "FinTech",
      "Investment Banking",
      "Web Platform",
      "Marketplace",
      "UI/UX Design",
      "Data Visualization"
    ],
    description: "Designed a digital marketplace connecting UK business owners, M&A advisors, and institutional investors for mid-market acquisitions and capital raising.",
    overview: "CorpFin Hub is a UK financial technology platform founded to streamline mergers and acquisitions (M&A), capital raising, and strategic investments for the UK mid-market. The product required clear information architecture, financial data presentation, search and discovery flows, and trust-focused user experiences.",
    problem: "Mid-market M&A transactions traditionally suffer from opaque deal sourcing, slow manual NDA exchange over email, fragmented valuation negotiations, and poor visibility for business sellers looking to connect with qualified acquirers.",
    research: "Conducted in-depth interviews with UK corporate finance directors, boutique investment bankers, private equity analysts, and business owners. Identified the need for strict confidentiality tiers, frictionless digital NDA authorization, and clear deal pipeline progression stages.",
    process: "Created an institutional-grade financial interface design system. Designed confidential teaser cards, 2-way investor matching matrices, structured M&A transaction pipelines, and encrypted virtual data room document viewers.",
    solution: "A high-security, responsive fintech web platform featuring automated NDA execution, deal pipeline Kanban visualizations, multi-parameter investor matching filters, valuation comparison matrices, and secure document telemetry.",
    outcome: "Accelerated deal discovery and NDA turnaround times from days to minutes, connecting hundreds of vetted UK mid-market opportunities with institutional acquirers and corporate finance professionals.",
    learnings: "Designing for high-stakes finance demands uncompromising security indicators, rock-solid information hierarchy, and intuitive disclosure controls to preserve seller confidentiality at every stage of the deal."
  },
  {
    "id": "185627081",
    "slug": "ride-dude-ux",
    "number": "06",
    "title": "Ride Dude UX Case Study",
    "category": "Automotive Community · UX Case Study",
    "role": "UI/UX Designer",
    "year": "2024",
    "featured": false,
    "layoutVariant": "image-left",
    "behanceUrl": "https://www.behance.net/gallery/185627081/Ride-Dude-UX-Case-Study",
    "coverImage": "/images/projects/185627081/cover.png",
    "gallery": [
      "/images/projects/185627081/module_0.png"
    ],
    "tools": [
      "Figma",
      "Balsamiq Mockups",
      "Marvel",
      "InVision"
    ],
    "tags": [
      "UX Design",
      "UI/UX",
      "Figma",
      "Automotive Community",
      "User Research"
    ],
    "description": "UX/UI design for an automotive community platform connecting enthusiasts through profiles, content, discussions, and community interactions.",
    "stats": {
      "appreciations": {
        "all": 16
      },
      "views": {
        "all": 1059
      },
      "comments": {
        "all": 2
      }
    },
    "overview": "Ride Dude is an automotive community platform conceived to bridge the gap between automotive and motorcycle enthusiasts, providing a dedicated space for community meetups, route sharing, vehicle profiling, and shared passion.",
    "problem": "Automotive enthusiasts previously relied on fragmented social platforms that lacked dedicated vehicle logs, verified group ride navigation, or community gear recommendations.",
    "research": "Conducted target audience surveys and competitor audits across enthusiast forums to identify core user motivations: finding local riding groups, logging bike maintenance, and discovering scenic motorcycle routes.",
    "process": "Synthesized user research into distinct personas, mapped the end-to-end trip creation flow, and drafted low-fidelity wireframes before refining in Figma.",
    "solution": "An intuitive mobile interface featuring community ride feeds, live ride telemetry, route planning with elevation profiles, and customizable garage profiles.",
    "learnings": "Designing for enthusiasts requires respecting established community terminology and prioritizing glanceable information during high-focus tasks like route navigation."
  },
  {
    "id": "186975683",
    "slug": "aprender-ux",
    "number": "07",
    "title": "Aprender UX Case Study",
    "category": "Education Platform · UX Case Study",
    "role": "UI/UX Designer",
    "year": "2024",
    "featured": false,
    "layoutVariant": "image-right",
    "behanceUrl": "https://www.behance.net/gallery/186975683/Aprender-UX-Case-Study",
    "coverImage": "/images/projects/186975683/cover.png",
    "gallery": [
      "/images/projects/186975683/module_0.png"
    ],
    "tools": [
      "Figma"
    ],
    "tags": [
      "Digital Education",
      "UX/UI",
      "Figma",
      "Learning Journeys",
      "User Experience"
    ],
    "description": "UX design for an education platform focused on improving course discovery, learning journeys, navigation, and digital learning interactions.",
    "stats": {
      "appreciations": {
        "all": 8
      },
      "views": {
        "all": 114
      },
      "comments": {
        "all": 2
      }
    },
    "overview": "Aprender is a dedicated digital learning mobile platform aimed at streamlining course discovery, student study scheduling, interactive coursework, and peer-to-peer discussion.",
    "problem": "Traditional e-learning applications often overwhelm students with cluttered dashboards, disjointed assignment deadlines, and low engagement outside lecture hours.",
    "research": "Investigated student daily study routines and cognitive load during remote coursework. Found that concise daily task micro-checklists and clear progress rings drastically improved course completion rates.",
    "process": "Mapped student onboarding, course enrollment, video playback interactions, and note-taking flows. Iterated from paper sketches to Balsamiq wireframes to high-fidelity Figma components.",
    "solution": "A distraction-free, high-contrast mobile interface with smart module breakdowns, progress tracking, offline lesson caching, and quick instructor feedback loops.",
    "learnings": "Academic interfaces benefit immensely from visual chunking and consistent micro-feedback when completing study milestones."
  },
  {
    "id": "233781535",
    "slug": "fitpeo",
    "number": "08",
    "title": "FitPeo Fitness Application",
    "category": "Health & Fitness · Mobile App Design",
    "role": "UI/UX Designer",
    "year": "2024",
    "featured": false,
    "layoutVariant": "full-width",
    "behanceUrl": "https://www.behance.net/gallery/233781535/FitPeo-Fitness-Application",
    "coverImage": "/images/projects/233781535/cover.png",
    "gallery": [
      "/images/projects/233781535/module_0.png",
      "/images/projects/233781535/module_1.png",
      "/images/projects/233781535/module_2.png",
      "/images/projects/233781535/module_3.png",
      "/images/projects/233781535/module_4.png",
      "/images/projects/233781535/module_5.png",
      "/images/projects/233781535/module_6.png",
      "/images/projects/233781535/module_7.png",
      "/images/projects/233781535/module_8.png",
      "/images/projects/233781535/module_9.png",
      "/images/projects/233781535/module_10.png",
      "/images/projects/233781535/module_12.png"
    ],
    "tools": [
      "Figma"
    ],
    "tags": [
      "Mobile App",
      "UI/UX",
      "Fitness",
      "Health Analytics",
      "Figma"
    ],
    "description": "Mobile fitness experience designed to help users discover workouts, manage fitness activities, track progress, and maintain consistent routines.",
    "stats": {
      "appreciations": {
        "all": 2
      },
      "views": {
        "all": 31
      },
      "comments": {
        "all": 0
      }
    },
    "overview": "FitPeo is a modern health and fitness application designed to simplify daily activity monitoring, workout regimen tracking, and biometric vital trends.",
    "problem": "Users struggle with fragmented fitness apps that separate workout logging, nutritional intake, and wearable health statistics into isolated silos.",
    "research": "Analyzed mobile fitness workflows and discovered that users abandon tracking when logging routines requires more than 3 taps.",
    "process": "Architected a unified daily dashboard with glanceable circular metrics, structured workout cards, and quick-add actions for logging sets and reps.",
    "solution": "A polished mobile interface incorporating dark mode aesthetics, vibrant progress indicators, personalized workout schedules, and detailed health analytics.",
    "learnings": "Balancing dense biometric data with clean visual whitespace is essential for sustained daily fitness engagement."
  },
  {
    "id": "194519395",
    "slug": "irctc-redesign",
    "number": "09",
    "title": "IRCTC Website Redesign",
    "category": "Public Sector · Web Platform Redesign",
    "role": "UI/UX Designer",
    "year": "2024",
    "featured": false,
    "layoutVariant": "floating-meta",
    "behanceUrl": "https://www.behance.net/gallery/194519395/IRCTC-Website-Redesign",
    "coverImage": "/images/projects/194519395/cover.png",
    "gallery": [
      "/images/projects/194519395/module_0.png"
    ],
    "tools": [
      "Figma"
    ],
    "tags": [
      "UI/UX",
      "Redesign",
      "Information Architecture",
      "Railway Booking",
      "Figma"
    ],
    "description": "UX/UI redesign concept exploring clearer information architecture, journey planning, navigation, and railway booking interactions for travelers.",
    "stats": {
      "appreciations": {
        "all": 5
      },
      "views": {
        "all": 234
      },
      "comments": {
        "all": 1
      }
    },
    "overview": "A comprehensive UX/UI redesign of the Indian Railways Catering and Tourism Corporation (IRCTC) web ticketing platform, addressing usability friction and cognitive overload.",
    "problem": "The existing IRCTC interface suffered from heavy visual clutter, confusing quota selections, cluttered seat availability matrices, and a high-friction booking flow during peak Tatkal hours.",
    "research": "Conducted heuristic evaluations of the booking funnel and surveyed frequent rail passengers. Key friction points included train search input confusion, ambiguous confirmation statuses, and cluttered advertisement placement.",
    "process": "Re-architected the main search interface into a clean, contextual booking bar. Redesigned the train listing view with instant class-wise availability cards and an unburdened 3-step checkout.",
    "solution": "A clean, modern web interface with clear fare comparisons, instant filters for departure time and train class, transparent seat availability indicators, and an accessible booking flow.",
    "learnings": "Redesigning mission-critical public infrastructure requires preserving familiar booking terminology while radically simplifying the visual and interaction hierarchy."
  },
  {
    "id": "218257955",
    "slug": "exotic-indian-eats",
    "number": "10",
    "title": "Exotic Indian Eats Responsive Website",
    "category": "Culinary & Dining · Responsive Web Design",
    "role": "UI/UX Designer",
    "year": "2024",
    "featured": false,
    "layoutVariant": "split-screen",
    "behanceUrl": "https://www.behance.net/gallery/218257955/Exotic-Indian-Eats-A-Responsive-Website",
    "coverImage": "/images/projects/218257955/cover.png",
    "gallery": [
      "/images/projects/218257955/module_0.png"
    ],
    "tools": [
      "Figma",
      "Adobe Photoshop"
    ],
    "tags": [
      "UI/UX",
      "Web Design",
      "Responsive Web",
      "Food Exploration",
      "Figma"
    ],
    "description": "Responsive restaurant website designed to improve menu discovery, food exploration, brand presentation, and online customer interaction.",
    "stats": {
      "appreciations": {
        "all": 5
      },
      "views": {
        "all": 92
      },
      "comments": {
        "all": 0
      }
    },
    "overview": "A responsive culinary web platform designed for Exotic Indian Eats, blending rich gastronomic heritage with modern e-commerce menu exploration and table reservations.",
    "problem": "Restaurant websites often struggle with unformatted PDF menus, poor mobile responsiveness, and cumbersome online ordering mechanisms.",
    "research": "Studied customer ordering habits, noting that high-resolution imagery paired with clear dietary tags (vegan, gluten-free, spice levels) drove significantly higher dining interest.",
    "process": "Crafted an editorial layout combining warm cultural palettes with modern typography. Structured responsive layouts across desktop, tablet, and mobile.",
    "solution": "A fully responsive website featuring interactive dish filtering, seamless online ordering, chef specials storytelling, and a 3-step table reservation system.",
    "learnings": "Food interfaces thrive when typography and imagery work symbiotically to evoke taste and atmosphere without cluttering the ordering path."
  },
  {
    "id": "232917963",
    "slug": "enipu",
    "number": "11",
    "title": "Enipu Case Study",
    "category": "Food & Beverage · End-to-End Case Study",
    "role": "UI/UX Designer",
    "year": "2024",
    "featured": false,
    "layoutVariant": "editorial-asymmetric",
    "behanceUrl": "https://www.behance.net/gallery/232917963/Case-Study-%28Enipu%29",
    "coverImage": "/images/projects/232917963/cover.png",
    "gallery": [
      "/images/projects/232917963/module_1.png",
      "/images/projects/232917963/module_2.gif",
      "/images/projects/232917963/module_3.gif",
      "/images/projects/232917963/module_4.png",
      "/images/projects/232917963/module_5.png",
      "/images/projects/232917963/module_6.png",
      "/images/projects/232917963/module_7.gif",
      "/images/projects/232917963/module_8.png",
      "/images/projects/232917963/module_9.png"
    ],
    "tools": [
      "Figma"
    ],
    "tags": [
      "Case Study",
      "Figma",
      "UI/UX",
      "Menu Discovery",
      "Responsive Web"
    ],
    "description": "Digital food and restaurant experience focused on brand presentation, menu discovery, content hierarchy, and responsive web interaction.",
    "stats": {
      "appreciations": {
        "all": 6
      },
      "views": {
        "all": 75
      },
      "comments": {
        "all": 1
      }
    },
    "overview": "An end-to-end UX/UI case study for Enipu — The Taste of India, an authentic food brand platform delivering traditional regional delicacies to digital consumers.",
    "problem": "Conveying the authentic craft and purity of traditional cuisine while maintaining a contemporary, frictionless e-commerce purchasing flow.",
    "research": "Explored culinary branding and user purchasing trust signals, identifying ingredient transparency and regional origin stories as primary conversion factors.",
    "process": "Designed brand identity accents, curated product storytelling modules, mapped checkout funnels, and built animated prototype interactions.",
    "solution": "A cohesive brand and e-commerce experience featuring rich product showcases, customer culinary reviews, recipe pairings, and intuitive checkout.",
    "learnings": "Storytelling and commerce must balance; emotional resonance attracts the customer, while frictionless UX completes the order."
  },
  {
    "id": "185624299",
    "slug": "ride-dude-ui",
    "number": "12",
    "title": "Ride Dude UI Case Study",
    "category": "Automotive · UI & Design System",
    "role": "UI/UX Designer",
    "year": "2024",
    "featured": false,
    "layoutVariant": "image-left",
    "behanceUrl": "https://www.behance.net/gallery/185624299/Ride-Dude-UI-Case-Study",
    "coverImage": "/images/projects/185624299/cover.png",
    "gallery": [
      "/images/projects/185624299/module_0.png",
      "/images/projects/185624299/module_3.png"
    ],
    "tools": [
      "Figma",
      "Balsamiq Mockups",
      "Marvel",
      "InVision"
    ],
    "tags": [
      "UI Design",
      "Design Systems",
      "Figma",
      "Automotive UI"
    ],
    "description": "High-fidelity UI and design system implementation for the Ride Dude automotive community application.",
    "stats": {
      "appreciations": {
        "all": 7
      },
      "views": {
        "all": 250
      },
      "comments": {
        "all": 0
      }
    },
    "overview": "The high-fidelity UI design and design system implementation for the Ride Dude mobile application, focusing on component consistency, dark mode ergonomics, and micro-interactions.",
    "problem": "Translating complex UX flows into a unified, scalable design system suitable for high-contrast outdoor viewing on motorcycle mounts.",
    "solution": "Created an extensive Figma component library featuring dark UI themes, bold typography, tactile buttons, and high-visibility map overlays.",
    "learnings": "Designing for outdoor mobile use requires strict contrast ratios and oversized tap targets to accommodate glove-friendly interactions."
  },
  {
    "id": "186975973",
    "slug": "aprender-ui",
    "number": "13",
    "title": "Aprender UI Case Study",
    "category": "Education · UI & Interaction Design",
    "role": "UI/UX Designer",
    "year": "2024",
    "featured": false,
    "layoutVariant": "image-right",
    "behanceUrl": "https://www.behance.net/gallery/186975973/Aprender-UI-Case-Study",
    "coverImage": "/images/projects/186975973/cover.png",
    "gallery": [
      "/images/projects/186975973/module_0.png"
    ],
    "tools": [
      "Figma"
    ],
    "tags": [
      "UI/UX",
      "Figma",
      "Education UI",
      "Interaction Design"
    ],
    "description": "UI design system and interactive student dashboard interface for the Aprender education platform.",
    "stats": {
      "appreciations": {
        "all": 6
      },
      "views": {
        "all": 125
      },
      "comments": {
        "all": 2
      }
    },
    "overview": "The UI design phase for the Aprender education platform, featuring interactive course dashboards, typography systems, and modular card components.",
    "problem": "Ensuring high visual hierarchy across diverse course materials including video players, quizzes, and discussion threads.",
    "solution": "Developed a cohesive pastel and dark neutral color palette, clear typography tokens, and responsive mobile interfaces.",
    "learnings": "Consistent micro-interactions during quiz completions reinforce student motivation and engagement."
  },
  {
    "id": "187296679",
    "slug": "karate-kids-uxui",
    "number": "14",
    "title": "Karate Kids Movie UXUI Analysis",
    "category": "Cinematic Interface · UX/UI Analysis",
    "role": "UI/UX Designer",
    "year": "2023",
    "featured": false,
    "layoutVariant": "full-width",
    "behanceUrl": "https://www.behance.net/gallery/187296679/Karate-Kids-Movie-UXUI-Analysis",
    "coverImage": "/images/projects/187296679/cover.png",
    "gallery": [
      "/images/projects/187296679/module_0.png",
      "/images/projects/187296679/module_1.png",
      "/images/projects/187296679/module_2.png",
      "/images/projects/187296679/module_3.png",
      "/images/projects/187296679/module_4.png",
      "/images/projects/187296679/module_5.png",
      "/images/projects/187296679/module_6.png",
      "/images/projects/187296679/module_7.png",
      "/images/projects/187296679/module_8.png",
      "/images/projects/187296679/module_9.png",
      "/images/projects/187296679/module_10.png",
      "/images/projects/187296679/module_11.png",
      "/images/projects/187296679/module_12.png",
      "/images/projects/187296679/module_13.png",
      "/images/projects/187296679/module_14.png",
      "/images/projects/187296679/module_15.png",
      "/images/projects/187296679/module_16.png",
      "/images/projects/187296679/module_17.png",
      "/images/projects/187296679/module_18.png",
      "/images/projects/187296679/module_19.png",
      "/images/projects/187296679/module_20.png"
    ],
    "tools": [
      "Figma"
    ],
    "tags": [
      "Cinematic UX",
      "Visual Hierarchy",
      "Analysis",
      "Figma"
    ],
    "description": "UX/UI analysis exploring how cinematic content, visual hierarchy, navigation, and interaction patterns can shape a digital movie experience.",
    "stats": {
      "appreciations": {
        "all": 12
      },
      "views": {
        "all": 329
      },
      "comments": {
        "all": 0
      }
    },
    "overview": "A 21-screen visual and UI/UX analysis examining character arcs, visual storytelling principles, typography, and interface layout within the Karate Kid cinematic universe.",
    "problem": "Dissecting how visual composition, framing, and emotional beats in film translate directly into digital interface storytelling and user engagement.",
    "solution": "A comprehensive 21-slide analytical presentation breaking down color theory, visual hierarchy, tension points, and storyboard pacing.",
    "learnings": "Cinematic pacing and visual rhythm offer deep insights into guiding user focus through complex digital journeys."
  },
  {
    "id": "187468131",
    "slug": "smart-remote",
    "number": "15",
    "title": "Smart Remote All-in-One",
    "category": "IoT & Smart Living · Mobile UI App",
    "role": "UI/UX Designer",
    "year": "2023",
    "featured": false,
    "layoutVariant": "floating-meta",
    "behanceUrl": "https://www.behance.net/gallery/187468131/Smart-Remote-All-in-One",
    "coverImage": "/images/projects/187468131/cover.png",
    "gallery": [
      "/images/projects/187468131/module_0.png",
      "/images/projects/187468131/module_1.gif"
    ],
    "tools": [
      "Figma"
    ],
    "tags": [
      "IoT",
      "Smart Remote",
      "Mobile UI",
      "Tactile Gestures"
    ],
    "description": "IoT mobile interface concept for controlling multiple smart devices through a unified remote-control experience.",
    "stats": {
      "appreciations": {
        "all": 5
      },
      "views": {
        "all": 68
      },
      "comments": {
        "all": 0
      }
    },
    "overview": "An all-in-one universal smart controller mobile app interface designed to unify smart TVs, sound systems, HVAC, and ambient lighting under one clean dashboard.",
    "problem": "Smart home users are burdened with switching between multiple proprietary apps to control basic living room appliances.",
    "solution": "A gesture-friendly, tactile remote interface with haptic feedback cues, quick room toggles, and customizable macro shortcuts.",
    "learnings": "Simplifying device controls into universal gestures reduces visual clutter and provides an intuitive remote experience."
  },
  {
    "id": "163543861",
    "slug": "plants",
    "number": "16",
    "title": "Plants",
    "category": "E-Commerce · Botanical Web Store",
    "role": "UI/UX Designer",
    "year": "2023",
    "featured": false,
    "layoutVariant": "split-screen",
    "behanceUrl": "https://www.behance.net/gallery/163543861/Plants",
    "coverImage": "/images/projects/163543861/cover.png",
    "gallery": [
      "/images/projects/163543861/module_0.png",
      "/images/projects/163543861/module_1.png"
    ],
    "tools": [
      "Figma"
    ],
    "tags": [
      "E-Commerce",
      "Plants",
      "Landing Page",
      "UI/UX"
    ],
    "description": "E-commerce website concept for discovering and purchasing plants through a simple, visually focused online shopping experience.",
    "stats": {
      "appreciations": {
        "all": 4
      },
      "views": {
        "all": 108
      },
      "comments": {
        "all": 0
      }
    },
    "overview": "A minimal e-commerce web platform designed for an indoor botanical shop, showcasing botanical care guides and plant shopping.",
    "problem": "Online plant shoppers often lack confidence in plant care requirements (sunlight, watering frequency, pet safety).",
    "solution": "A calm, earthy web interface featuring care-difficulty filters, botanical cards, and illustrated maintenance checklists.",
    "learnings": "Integrating educational care tips directly alongside product pricing builds customer confidence and reduces returns."
  },
  {
    "id": "232911803",
    "slug": "enipu-web",
    "number": "17",
    "title": "Enipu The Taste of India Web",
    "category": "Brand & Web · Digital Experience",
    "role": "UI/UX Designer",
    "year": "2024",
    "featured": false,
    "layoutVariant": "editorial-asymmetric",
    "behanceUrl": "https://www.behance.net/gallery/232911803/enipu-%28The-taste-of-india-%29",
    "coverImage": "/images/projects/232911803/cover.png",
    "gallery": [],
    "tools": [
      "Figma"
    ],
    "tags": [
      "Web Design",
      "Figma",
      "UI/UX",
      "Digital Illustration"
    ],
    "description": "Responsive culinary web platform showcasing authentic recipes, brand storytelling, and regional Indian delicacies.",
    "stats": {
      "appreciations": {
        "all": 5
      },
      "views": {
        "all": 106
      },
      "comments": {
        "all": 0
      }
    },
    "overview": "Visual web design, digital illustration, and landing page architecture for the Enipu culinary brand.",
    "problem": "Creating a digital storefront that reflects authentic traditional Indian culinary craftsmanship.",
    "solution": "A bespoke web layout featuring custom illustration assets, rich product hero sections, and responsive layouts.",
    "learnings": "Custom illustration enhances brand personality while structured layout maintains e-commerce clarity."
  }
];

