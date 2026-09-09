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
    category: "FinTech · Loyalty · Mobile · Merchant POS · Admin",
    role: "UX strategy · User flows · UI/UX design · Prototyping · Design systems · Information architecture",
    year: "2024 — 2026",
    featured: true,
    layoutVariant: "full-width",
    liveUrl: "https://www.rewad.co/",
    behanceUrl: "https://www.behance.net/tarun_a",
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
    description: "Designed a connected loyalty ecosystem for customers, merchants, and business teams across a customer mobile app, merchant POS experience, business administration platform, and marketing website.\n\nFocused on simplifying reward discovery, redemption, merchant operations, campaign management, and business visibility through a consistent product experience.",
    overview: "Rewad is a comprehensive loyalty and rewards ecosystem designed to replace physical stamp cards for local businesses. As product designer, I architected all 4 interconnected pillars of the product: the Customer Mobile App for digital stamp collection & gift redemption, the Merchant Mobile App for sub-second POS barcode scanning, the responsive Marketing Website, and the comprehensive Web Admin Portal for business owners to configure promotions and analyze customer retention.",
    problem: "Physical punch cards lead to high loss rates and provide zero data insights to business owners. Existing digital loyalty solutions were either clunky enterprise software or created unacceptable checkout delays at the cash register.",
    research: "Conducted field interviews with retail staff and everyday café customers. Discovered that POS verification must take less than 3 seconds to avoid checkout lines, and consumers engage significantly more when rewarded with visual milestone progress rings.",
    process: "Mapped user flows across four interconnected interfaces simultaneously. Built clickable prototypes in Figma, conducted in-person cashier testing to optimize tap targets for one-handed operation, and created a unified multi-platform design token system.",
    solution: "A unified, vibrant ecosystem featuring: (1) Customer iOS/Android App with interactive digital stamp cards and nearby partner discovery; (2) Merchant Mobile Scanner with instant optical validation; (3) Business Web Admin Portal with loyalty rules, revenue telemetry, and customer cohort analytics; and (4) Responsive marketing landing page.",
    outcome: "Engineered sub-2.5 second POS reward redemption, achieved a 92% customer onboarding completion rate, and delivered actionable retention metrics for retail merchants.",
    learnings: "Multi-sided product ecosystems require strict brand consistency while drastically tuning UI density for context (high-density data analytics for web admin vs. high-speed touch targets for cashiers)."
  },
  {
    id: "soughteasy-enterprise",
    slug: "soughteasy",
    number: "02",
    title: "SoughtEasy — Enterprise SaaS Platform",
    category: "SaaS · CRM · Workforce · Admin · Data",
    role: "UX architecture · Dashboard UX · UI design · Design systems · Data visualization · Prototyping",
    year: "2024 — 2026",
    featured: true,
    layoutVariant: "split-screen",
    liveUrl: "https://www.soughteasy.com/",
    behanceUrl: "https://www.behance.net/tarun_a",
    coverImage: "/images/projects/soughteasy/cover.png",
    gallery: [
      "/images/projects/soughteasy/cover.png"
    ],
    tools: [
      "Figma",
      "Design Systems",
      "Data Visualization",
      "Information Architecture",
      "Prototyping"
    ],
    tags: [
      "Enterprise SaaS",
      "CRM & Sales",
      "Workforce Management",
      "Data Dashboards",
      "Design Systems",
      "Multi-Tenant Admin"
    ],
    description: "Designed a multi-tenant enterprise platform bringing CRM, workforce management, HR operations, finance, permissions, and operational workflows into one structured experience.\n\nFocused on reducing interface complexity through clear information architecture, scalable dashboard patterns, data visualization, and reusable components.",
    overview: "SoughtEasy is an all-in-one multi-tenant enterprise workforce and resource management platform unifying client CRM, field team dispatch, internal payroll, financial billing, and role-based permissions under a cohesive enterprise design system.",
    problem: "Enterprise teams were juggling up to 5 disparate legacy software tools to manage field operations, resulting in duplicate data entry, missed invoices, and fragmented communication between field staff and headquarters.",
    research: "Conducted contextual inquiries with dispatch operators and enterprise administrators. Identified extreme cognitive fatigue caused by overcrowded tables, modal-over-modal navigation traps, and slow data filtering mechanisms.",
    process: "Streamlined the platform's information architecture into modular workspaces. Built a high-density Figma design system utilizing auto-layout tokens, standardized keyboard shortcuts, responsive data tables, and contextual drawer panels.",
    solution: "A scalable enterprise platform with customizable analytics dashboards, split-pane customer management views, real-time field personnel tracking, and an automated invoice generator.",
    outcome: "Reduced daily administrative task completion times by 40%, streamlined new employee onboarding from 2 weeks to 3 days, and scaled seamlessly across multi-branch enterprise deployments.",
    learnings: "Complex enterprise software succeeds through ruthless typographic hierarchy, predictive data inputs, and giving users control over visual density."
  },
  {
    id: "corpfin-hub",
    slug: "corpfinhub",
    number: "03",
    title: "CorpFin Hub — M&A & Private Capital Marketplace",
    category: "FinTech · Investment Banking · Marketplace · Web",
    role: "UX research · Information architecture · UI/UX design · Data visualization · Prototyping · Design systems",
    year: "2024 — 2026",
    featured: true,
    layoutVariant: "full-width",
    liveUrl: "https://www.corpfinhub.com/",
    behanceUrl: "https://www.behance.net/tarun_a",
    coverImage: "/images/projects/corpfinhub/cover.png",
    gallery: [
      "/images/projects/corpfinhub/cover.png"
    ],
    tools: [
      "Figma",
      "Financial UX",
      "Design Systems",
      "Prototyping",
      "Information Architecture"
    ],
    tags: [
      "FinTech",
      "M&A Platform",
      "Private Capital",
      "Institutional Investors",
      "Data Rooms",
      "Deal Flow UX"
    ],
    description: "Designed a digital marketplace connecting business owners, M&A advisors, and institutional investors across the UK mid-market.\n\nFocused on making complex financial information easier to discover, compare, understand, and act on through structured information architecture and trust-oriented UX.",
    overview: "CorpFin Hub is an institutional-grade digital investment banking platform matching mid-market business sellers, corporate finance advisors, private equity funds, and institutional debt providers across the United Kingdom.",
    problem: "Traditional M&A deal sourcing is notoriously opaque, slow, and reliant on fragmented email teasers with static PDF pitches that obscure vital EBITDA and valuation benchmarks.",
    research: "Interviewed investment directors, corporate finance partners, and institutional intermediaries to uncover critical workflows: fast preliminary NDA execution, strict seller anonymity controls, and instant cross-sector valuation comparisons.",
    process: "Mapped multi-stakeholder permission structures and buyer-seller deal progression stages. Designed high-security virtual deal rooms, dynamic financial comparison tools, and verified buyer accreditation funnels in Figma.",
    solution: "A sophisticated marketplace interface pairing dark-mode financial telemetry with high-trust credentialing badges, structured teaser summaries, secure digital NDA handshakes, and deal-flow pipeline tracking.",
    outcome: "Accelerated deal discovery and NDA turnaround times from days to minutes, connecting hundreds of vetted UK mid-market opportunities with institutional acquirers and corporate finance professionals.",
    learnings: "Designing for high-stakes finance demands uncompromising security indicators, rock-solid information hierarchy, and intuitive disclosure controls to preserve seller confidentiality at every stage of the deal."
  },
  {
    id: "sudhanya-organic",
    slug: "sudhanya",
    number: "04",
    title: "Sudhanya — Organic Grocery Mobile App",
    category: "E-commerce · AgriTech · Mobile",
    role: "Mobile UX · User journeys · Wireframing · UI design · Prototyping · Design systems",
    year: "2024 — 2025",
    featured: true,
    layoutVariant: "image-left",
    liveUrl: "https://sudhanya.com/",
    behanceUrl: "https://www.behance.net/tarun_a",
    coverImage: "/images/projects/sudhanya/cover.png",
    gallery: [
      "/images/projects/sudhanya/cover.png"
    ],
    tools: [
      "Figma",
      "Mobile UX",
      "Design Systems",
      "Prototyping",
      "User Research"
    ],
    tags: [
      "Mobile App",
      "E-Commerce",
      "AgriTech",
      "Organic Food",
      "Subscription UX",
      "Cart & Checkout"
    ],
    description: "Designed a mobile shopping experience for discovering and purchasing organic products, with a focus on product discovery, browsing, subscriptions, and a simple shopping journey.",
    overview: "Sudhanya is a direct-to-consumer organic agricultural and grocery mobile app empowering households to source verified, pesticide-free regional produce and staple grains directly from certified farmer collectives.",
    problem: "Consumers distrust generic grocery apps claiming organic authenticity, while existing organic specialty stores suffer from complex product categorization, slow search filters, and rigid delivery scheduling.",
    research: "Conducted grocery buyer interviews and card-sorting exercises with 25 household shoppers. Discovered that proof of farm origin, harvest date transparency, and recurring weekly subscription baskets are the key purchase drivers.",
    process: "Drafted low-fidelity wireframes exploring farm-to-table traceability cards and seamless recurring delivery setups. Developed high-fidelity Figma prototypes and tested one-thumb checkout micro-flows.",
    solution: "A warm, organic mobile application featuring visual category navigation, seasonal harvest alerts, one-tap recurring subscription baskets, and transparent farmer provenance profiles.",
    outcome: "Achieved a 28% increase in repeat subscription orders, lowered checkout abandonment to under 14%, and established a trusted digital presence for regional farmers.",
    learnings: "In e-commerce, building consumer trust requires upfront transparency—surfacing origin, certification, and harvest dates directly inside the product browse card."
  },
  {
    id: "the-trippin",
    slug: "trippin",
    number: "05",
    title: "Trippin — Apparel & Streetwear Brand",
    category: "Brand Identity · E-commerce · Visual Design",
    role: "Brand exploration · Typography · Graphic design · Apparel graphics · Digital assets",
    year: "2024 — 2026",
    featured: true,
    layoutVariant: "image-right",
    liveUrl: "https://thetrippin.com/",
    behanceUrl: "https://www.behance.net/tarun_a",
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
      "Streetwear",
      "Digital Brand Assets"
    ],
    description: "Designed visual identity, typography, apparel graphics, and digital brand assets for a streetwear-focused brand experience.\n\nThis project demonstrates my broader visual design capability alongside my core product design practice.",
    overview: "Trippin is a contemporary youth streetwear and lifestyle apparel label combining bold typographic experimentation, surrealist vector illustrations, and digital product packaging.",
    problem: "Emerging apparel labels often struggle to stand out in saturated digital marketplaces without a distinctive visual voice and cohesive typographic identity across garment graphics and digital touchpoints.",
    research: "Analyzed global streetwear visual trends, brutalist poster design, and contemporary youth culture motifs to identify an aesthetic intersection between bold minimalism and artistic rebellion.",
    process: "Created over 40 vector explorations in Adobe Illustrator, developed custom typography lockups, designed screen-print technical mockups in Photoshop, and built e-commerce digital merchandising banners.",
    solution: "A comprehensive brand identity kit featuring custom expressive type treatments, signature apparel graphics, limited-drop promotional assets, and high-impact digital packaging.",
    outcome: "Established a standout visual identity that powered commercial merchandise drops, expanded brand recognition across social channels, and deepened digital engagement.",
    learnings: "Visual design craft and aesthetic restraint directly enhance product desirability; every typographic choice communicates personality and cultural connection."
  },
  {
    id: "185627081",
    slug: "ride-dude",
    number: "06",
    title: "Ride Dude — Automotive Community Platform",
    category: "Automotive Community · Platform UX",
    role: "UX/UI Designer",
    year: "2024",
    featured: false,
    layoutVariant: "image-left",
    behanceUrl: "https://www.behance.net/gallery/185627081/Ride-Dude-UX-Case-Study",
    coverImage: "/images/projects/185627081/cover.png",
    gallery: [
      "/images/projects/185627081/module_0.png"
    ],
    tools: [
      "Figma",
      "Balsamiq Mockups",
      "Marvel",
      "InVision"
    ],
    tags: [
      "UX Design",
      "UI/UX",
      "Figma",
      "Automotive Community",
      "User Research"
    ],
    description: "UX/UI design for an automotive community platform connecting enthusiasts through profiles, content, discussions, and community interactions.",
    overview: "Ride Dude is an automotive community platform conceived to bridge the gap between automotive and motorcycle enthusiasts, providing a dedicated space for community meetups, route sharing, vehicle profiling, and shared passion.",
    problem: "Automotive enthusiasts previously relied on fragmented social platforms that lacked dedicated vehicle logs, verified group ride navigation, or community gear recommendations.",
    research: "Conducted target audience surveys and competitor audits across enthusiast forums to identify core user motivations: finding local riding groups, logging bike maintenance, and discovering scenic motorcycle routes.",
    process: "Synthesized user research into distinct personas, mapped the end-to-end trip creation flow, and drafted low-fidelity wireframes before refining in Figma.",
    solution: "An intuitive mobile interface featuring community ride feeds, live ride telemetry, route planning with elevation profiles, and customizable garage profiles.",
    learnings: "Designing for enthusiasts requires respecting established community terminology and prioritizing glanceable information during high-focus tasks like route navigation."
  },
  {
    id: "186975683",
    slug: "aprender",
    number: "07",
    title: "Aprender — Education Platform",
    category: "Education Platform · Digital Learning",
    role: "UX/UI Designer",
    year: "2024",
    featured: false,
    layoutVariant: "image-right",
    behanceUrl: "https://www.behance.net/gallery/186975683/Aprender-UX-Case-Study",
    coverImage: "/images/projects/186975683/cover.png",
    gallery: [
      "/images/projects/186975683/module_0.png"
    ],
    tools: [
      "Figma",
      "Balsamiq",
      "Design Systems"
    ],
    tags: [
      "Digital Education",
      "UX/UI",
      "Figma",
      "Learning Journeys",
      "User Experience"
    ],
    description: "UX/UI design for an education platform focused on course discovery, learning journeys, student dashboards, and interactive learning experiences.",
    overview: "Aprender is a dedicated digital learning mobile platform aimed at streamlining course discovery, student study scheduling, interactive coursework, and peer-to-peer discussion.",
    problem: "Traditional e-learning applications often overwhelm students with cluttered dashboards, disjointed assignment deadlines, and low engagement outside lecture hours.",
    research: "Investigated student daily study routines and cognitive load during remote coursework. Found that concise daily task micro-checklists and clear progress rings drastically improved course completion rates.",
    process: "Mapped student onboarding, course enrollment, video playback interactions, and note-taking flows. Iterated from paper sketches to Balsamiq wireframes to high-fidelity Figma components.",
    solution: "A distraction-free, high-contrast mobile interface with smart module breakdowns, progress tracking, offline lesson caching, and quick instructor feedback loops.",
    learnings: "Academic interfaces benefit immensely from visual chunking and consistent micro-feedback when completing study milestones."
  },
  {
    id: "233781535",
    slug: "fitpeo",
    number: "08",
    title: "FitPeo — Fitness Application",
    category: "Health & Fitness · Mobile App Design",
    role: "UX/UI Designer",
    year: "2024",
    featured: false,
    layoutVariant: "full-width",
    behanceUrl: "https://www.behance.net/gallery/233781535/FitPeo-Fitness-Application",
    coverImage: "/images/projects/233781535/cover.png",
    gallery: [
      "/images/projects/233781535/module_0.png",
      "/images/projects/233781535/module_1.png",
      "/images/projects/233781535/module_2.png"
    ],
    tools: [
      "Figma",
      "Mobile UI",
      "Interaction Design"
    ],
    tags: [
      "Mobile App",
      "UI/UX",
      "Fitness",
      "Health Analytics",
      "Figma"
    ],
    description: "Mobile fitness experience designed to help users discover workouts, manage fitness activities, track progress, and maintain consistent routines.",
    overview: "FitPeo is a modern health and fitness application designed to simplify daily activity monitoring, workout regimen tracking, and biometric vital trends.",
    problem: "Users struggle with fragmented fitness apps that separate workout logging, nutritional intake, and wearable health statistics into isolated silos.",
    research: "Analyzed mobile fitness workflows and discovered that users abandon tracking when logging routines requires more than 3 taps.",
    process: "Architected a unified daily dashboard with glanceable circular metrics, structured workout cards, and quick-add actions for logging sets and reps.",
    solution: "A polished mobile interface incorporating dark mode aesthetics, vibrant progress indicators, personalized workout schedules, and detailed health analytics.",
    learnings: "Balancing dense biometric data with clean visual whitespace is essential for sustained daily fitness engagement."
  },
  {
    id: "194519395",
    slug: "irctc-redesign",
    number: "09",
    title: "IRCTC — Website Redesign Concept",
    category: "Public Infrastructure · Web Redesign",
    role: "UX/UI Designer",
    year: "2024",
    featured: false,
    layoutVariant: "floating-meta",
    behanceUrl: "https://www.behance.net/gallery/194519395/IRCTC-Website-Redesign",
    coverImage: "/images/projects/194519395/cover.png",
    gallery: [
      "/images/projects/194519395/module_0.png"
    ],
    tools: [
      "Figma",
      "Information Architecture"
    ],
    tags: [
      "UI/UX",
      "Redesign",
      "Information Architecture",
      "Railway Booking",
      "Figma"
    ],
    description: "UX/UI redesign concept exploring clearer information architecture, journey planning, navigation, and railway booking interactions for travelers.",
    overview: "A comprehensive UX/UI redesign concept of the IRCTC web ticketing platform, addressing usability friction and cognitive overload.",
    problem: "The existing interface suffered from heavy visual clutter, confusing quota selections, cluttered seat availability matrices, and a high-friction booking flow.",
    research: "Conducted heuristic evaluations of the booking funnel and surveyed frequent rail passengers to identify key search and checkout pain points.",
    process: "Re-architected the main search interface into a clean, contextual booking bar. Redesigned the train listing view with instant class-wise availability cards.",
    solution: "A clean, modern web interface with clear fare comparisons, instant filters for departure time and train class, transparent seat availability indicators, and an accessible booking flow.",
    learnings: "Redesigning mission-critical public infrastructure requires preserving familiar booking terminology while radically simplifying the visual and interaction hierarchy."
  },
  {
    id: "218257955",
    slug: "exotic-indian-eats",
    number: "10",
    title: "Exotic Indian Eats — Restaurant Website",
    category: "Culinary & Dining · Responsive Web Design",
    role: "UX/UI Designer",
    year: "2024",
    featured: false,
    layoutVariant: "split-screen",
    behanceUrl: "https://www.behance.net/gallery/218257955/Exotic-Indian-Eats-A-Responsive-Website",
    coverImage: "/images/projects/218257955/cover.png",
    gallery: [
      "/images/projects/218257955/module_0.png"
    ],
    tools: [
      "Figma",
      "Adobe Photoshop"
    ],
    tags: [
      "UI/UX",
      "Web Design",
      "Responsive Web",
      "Food Exploration",
      "Figma"
    ],
    description: "Responsive restaurant website designed to improve menu discovery, food exploration, brand presentation, and online customer interaction.",
    overview: "A responsive culinary web platform designed for Exotic Indian Eats, blending rich gastronomic heritage with modern e-commerce menu exploration and table reservations.",
    problem: "Restaurant websites often struggle with unformatted PDF menus, poor mobile responsiveness, and cumbersome online ordering mechanisms.",
    research: "Studied customer ordering habits, noting that high-resolution imagery paired with clear dietary tags drove significantly higher dining interest.",
    process: "Crafted an editorial layout combining warm cultural palettes with modern typography. Structured responsive layouts across desktop, tablet, and mobile.",
    solution: "A fully responsive website featuring interactive dish filtering, seamless online ordering, chef specials storytelling, and a 3-step table reservation system.",
    learnings: "Food interfaces thrive when typography and imagery work symbiotically to evoke taste and atmosphere without cluttering the ordering path."
  },
  {
    id: "232917963",
    slug: "enipu",
    number: "11",
    title: "Enipu — Food & Restaurant Experience",
    category: "Food & Beverage · Web & Mobile UX",
    role: "UX/UI Designer",
    year: "2024",
    featured: false,
    layoutVariant: "editorial-asymmetric",
    behanceUrl: "https://www.behance.net/gallery/232917963/Case-Study-%28Enipu%29",
    coverImage: "/images/projects/232917963/cover.png",
    gallery: [
      "/images/projects/232917963/module_1.png",
      "/images/projects/232917963/module_4.png",
      "/images/projects/232917963/module_5.png"
    ],
    tools: [
      "Figma",
      "Digital Illustration"
    ],
    tags: [
      "Case Study",
      "Figma",
      "UI/UX",
      "Menu Discovery",
      "Responsive Web"
    ],
    description: "Digital UX/UI design focused on restaurant discovery, menu presentation, culinary storytelling, and responsive web interaction.",
    overview: "An end-to-end UX/UI case study for Enipu — The Taste of India, an authentic food brand platform delivering traditional regional delicacies to digital consumers.",
    problem: "Conveying the authentic craft and purity of traditional cuisine while maintaining a contemporary, frictionless purchasing flow.",
    research: "Explored culinary branding and user purchasing trust signals, identifying ingredient transparency and regional origin stories as primary conversion factors.",
    process: "Designed brand identity accents, curated product storytelling modules, mapped checkout funnels, and built animated prototype interactions.",
    solution: "A cohesive brand and e-commerce experience featuring rich product showcases, customer culinary reviews, recipe pairings, and intuitive checkout.",
    learnings: "Storytelling and commerce must balance; emotional resonance attracts the customer, while frictionless UX completes the order."
  },
  {
    id: "187296679",
    slug: "karate-kids",
    number: "12",
    title: "Karate Kids — UX/UI Analysis",
    category: "Cinematic Interface · UX/UI Analysis",
    role: "UX/UI Designer",
    year: "2023",
    featured: false,
    layoutVariant: "full-width",
    behanceUrl: "https://www.behance.net/gallery/187296679/Karate-Kids-Movie-UXUI-Analysis",
    coverImage: "/images/projects/187296679/cover.png",
    gallery: [
      "/images/projects/187296679/module_0.png"
    ],
    tools: [
      "Figma"
    ],
    tags: [
      "Cinematic UX",
      "Visual Hierarchy",
      "Analysis",
      "Figma"
    ],
    description: "UX/UI analysis exploring how visual hierarchy, content structure, navigation, and interaction patterns can shape a digital movie experience.",
    overview: "A visual and UI/UX analysis examining character arcs, visual storytelling principles, typography, and interface layout within the Karate Kid cinematic universe.",
    problem: "Dissecting how visual composition, framing, and emotional beats in film translate directly into digital interface storytelling and user engagement.",
    solution: "A comprehensive analytical breakdown exploring color theory, visual hierarchy, tension points, and storyboard pacing in digital experiences.",
    learnings: "Cinematic pacing and visual rhythm offer deep insights into guiding user focus through complex digital journeys."
  },
  {
    id: "187468131",
    slug: "smart-remote",
    number: "13",
    title: "Smart Remote All-in-One — IoT Interface",
    category: "IoT & Smart Living · Mobile UI App",
    role: "UX/UI Designer",
    year: "2023",
    featured: false,
    layoutVariant: "floating-meta",
    behanceUrl: "https://www.behance.net/gallery/187468131/Smart-Remote-All-in-One",
    coverImage: "/images/projects/187468131/cover.png",
    gallery: [
      "/images/projects/187468131/module_0.png"
    ],
    tools: [
      "Figma"
    ],
    tags: [
      "IoT",
      "Smart Remote",
      "Mobile UI",
      "Tactile Gestures"
    ],
    description: "IoT mobile interface concept for controlling multiple smart devices through a unified remote-control experience.",
    overview: "An all-in-one universal smart controller mobile app interface designed to unify smart TVs, sound systems, HVAC, and ambient lighting under one clean dashboard.",
    problem: "Smart home users are burdened with switching between multiple proprietary apps to control basic living room appliances.",
    solution: "A gesture-friendly, tactile remote interface with haptic feedback cues, quick room toggles, and customizable macro shortcuts.",
    learnings: "Simplifying device controls into universal gestures reduces visual clutter and provides an intuitive remote experience."
  },
  {
    id: "163543861",
    slug: "plants",
    number: "14",
    title: "Plants — E-commerce Experience",
    category: "E-Commerce · Botanical Web Store",
    role: "UX/UI Designer",
    year: "2023",
    featured: false,
    layoutVariant: "split-screen",
    behanceUrl: "https://www.behance.net/gallery/163543861/Plants",
    coverImage: "/images/projects/163543861/cover.png",
    gallery: [
      "/images/projects/163543861/module_0.png"
    ],
    tools: [
      "Figma"
    ],
    tags: [
      "E-Commerce",
      "Plants",
      "Landing Page",
      "UI/UX"
    ],
    description: "E-commerce website concept for discovering and purchasing plants through a simple, visually focused online shopping experience.",
    overview: "A minimal e-commerce web platform designed for an indoor botanical shop, showcasing botanical care guides and plant shopping.",
    problem: "Online plant shoppers often lack confidence in plant care requirements (sunlight, watering frequency, pet safety).",
    solution: "A calm, earthy web interface featuring care-difficulty filters, botanical cards, and illustrated maintenance checklists.",
    learnings: "Integrating educational care tips directly alongside product pricing builds customer confidence and reduces returns."
  }
];
