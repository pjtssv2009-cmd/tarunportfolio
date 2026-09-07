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
  behanceUrl: string;
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
    "id": "185627081",
    "slug": "ride-dude-ux",
    "number": "01",
    "title": "Ride Dude UX Case Study",
    "category": "Automotive Community \u00b7 UX Case Study",
    "role": "UI/UX Designer",
    "year": "2024",
    "featured": true,
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
      "UX design",
      "UI/UX",
      "Figma",
      "user interface",
      "ui design",
      "user experience",
      "User research"
    ],
    "description": "Bridging the gap between automotive enthusiasts by providing a seamless platform for connection and shared passion.",
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
    "overview": "Ride Dude is a specialized mobile platform conceived to bridge the gap between automotive and motorcycle enthusiasts, providing a dedicated space for community meetups, route sharing, vehicle profiling, and shared passion.",
    "problem": "Automotive enthusiasts previously relied on fragmented social platforms that lacked dedicated vehicle logs, verified group ride navigation, or community gear recommendations.",
    "research": "Conducted target audience surveys and competitor audits across enthusiast forums to identify core user motivations: finding local riding groups, logging bike maintenance, and discovering scenic motorcycle routes.",
    "process": "Synthesized user research into distinct personas (The Weekend Cruiser vs. The Track Day Enthusiast), mapped the end-to-end trip creation flow, and drafted low-fidelity wireframes in Balsamiq before refining in Marvel and Figma.",
    "solution": "An intuitive mobile interface featuring community ride feeds, live ride telemetry, route planning with elevation profiles, and customizable garage profiles.",
    "learnings": "Designing for enthusiasts requires respecting established community terminology and prioritizing glanceable information during high-focus tasks like route navigation."
  },
  {
    "id": "186975683",
    "slug": "aprender-ux",
    "number": "02",
    "title": "Aprender UX Case Study",
    "category": "Education Platform \u00b7 UX Case Study",
    "role": "UI/UX Designer",
    "year": "2024",
    "featured": true,
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
      "digital education",
      "ux/ui",
      "Figma",
      "ui design",
      "user experience",
      "Interface",
      "Education",
      "student",
      "portfolio"
    ],
    "description": "A comprehensive digital experience and interface design project created for Aprender UX Case Study.",
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
    "number": "03",
    "title": "FitPeo Fitness Application",
    "category": "Health & Fitness \u00b7 Mobile App Design",
    "role": "UI/UX Designer",
    "year": "2024",
    "featured": true,
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
      "ux",
      "Figma",
      "user experience",
      "Mobile app",
      "UI/UX",
      "fitness",
      "branding ",
      "visual identity",
      "customer experience",
      "User research"
    ],
    "description": "A comprehensive digital experience and interface design project created for FitPeo Fitness Application.",
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
    "overview": "FitPeo is a comprehensive modern health and fitness application designed to simplify daily activity monitoring, workout regimen tracking, and biometric vital trends.",
    "problem": "Users struggle with fragmented fitness apps that separate workout logging, nutritional intake, and wearable health statistics into isolated silos.",
    "research": "Analyzed mobile fitness workflows and discovered that users abandon tracking when logging routines requires more than 3 taps.",
    "process": "Architected a unified daily dashboard with glanceable circular metrics, structured workout cards, and quick-add actions for logging sets and reps.",
    "solution": "A polished mobile interface incorporating dark mode aesthetics, vibrant progress indicators, personalized workout schedules, and detailed health analytics.",
    "learnings": "Balancing dense biometric data with clean visual whitespace is essential for sustained daily fitness engagement."
  },
  {
    "id": "194519395",
    "slug": "irctc-redesign",
    "number": "04",
    "title": "IRCTC Website Redesign",
    "category": "Public Sector \u00b7 Web Platform Redesign",
    "role": "UI/UX Designer",
    "year": "2024",
    "featured": true,
    "layoutVariant": "floating-meta",
    "behanceUrl": "https://www.behance.net/gallery/194519395/IRCTC-Website-Redesign",
    "coverImage": "/images/projects/194519395/cover.png",
    "gallery": [
      "/images/projects/194519395/module_0.png"
    ],
    "tools": [
      "Figma "
    ],
    "tags": [
      "UI/UX",
      "redesign website",
      "Figma",
      "ui design",
      "user interface",
      "landing page",
      "UX design",
      "user experience",
      "irctc",
      "irctc website redesign"
    ],
    "description": "A comprehensive digital experience and interface design project created for IRCTC Website Redesign.",
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
    "research": "Conducted heuristic evaluations of the current booking funnel and surveyed frequent rail passengers. Key friction points included train search input confusion, ambiguous confirmation statuses, and cluttered advertisement placement.",
    "process": "Re-architected the main search interface into a clean, contextual booking bar. Redesigned the train listing view with instant class-wise availability cards and an unburdened 3-step checkout.",
    "solution": "A clean, modern web interface with clear fare comparisons, instant filters for departure time and train class, transparent seat availability indicators, and an accessible booking flow.",
    "learnings": "Redesigning mission-critical public infrastructure requires preserving familiar booking terminology while radically simplifying the visual and interaction hierarchy."
  },
  {
    "id": "218257955",
    "slug": "exotic-indian-eats",
    "number": "05",
    "title": "Exotic Indian Eats A Responsive Website",
    "category": "Culinary & Dining \u00b7 Responsive Web Design",
    "role": "UI/UX Designer",
    "year": "2024",
    "featured": true,
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
      "Figma",
      "landing page",
      "Web Design ",
      "ui design",
      "user experience",
      "Food ",
      "Food Website",
      "Website",
      "foodwebsitedesign"
    ],
    "description": "A comprehensive digital experience and interface design project created for Exotic Indian Eats A Responsive Website.",
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
    "number": "06",
    "title": "Case Study (Enipu)",
    "category": "Food & Beverage \u00b7 End-to-End Case Study",
    "role": "UI/UX Designer",
    "year": "2024",
    "featured": true,
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
      "case study design",
      "Figma",
      "UI/UX",
      "ui design",
      "Web",
      "landing page",
      "user interface",
      "UX design",
      "user experience",
      "Interface"
    ],
    "description": "A comprehensive digital experience and interface design project created for Case Study (Enipu).",
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
    "overview": "An end-to-end UX/UI case study for Enipu \u2014 The Taste of India, an authentic food brand platform delivering traditional regional delicacies to digital consumers.",
    "problem": "Conveying the authentic craft and purity of traditional cuisine while maintaining a contemporary, frictionless e-commerce purchasing flow.",
    "research": "Explored culinary branding and user purchasing trust signals, identifying ingredient transparency and regional origin stories as primary conversion factors.",
    "process": "Designed brand identity accents, curated product storytelling modules, mapped checkout funnels, and built animated prototype interactions.",
    "solution": "A cohesive brand and e-commerce experience featuring rich product showcases, customer culinary reviews, recipe pairings, and intuitive checkout.",
    "learnings": "Storytelling and commerce must balance; emotional resonance attracts the customer, while frictionless UX completes the order."
  },
  {
    "id": "185624299",
    "slug": "ride-dude-ui",
    "number": "07",
    "title": "Ride Dude UI Case Study",
    "category": "Automotive \u00b7 UI & Design System",
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
      "UX design",
      "UI/UX",
      "Figma",
      "ui design",
      "user experience",
      "uxresearch",
      "UI designer",
      "uxdesignerportfolio"
    ],
    "description": "Bridging the gap between automotive enthusiasts by providing a seamless platform for connection and shared passion.",
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
    "number": "08",
    "title": "Aprender UI Case Study",
    "category": "Education \u00b7 UI & Interaction Design",
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
      "user interface",
      "ui design",
      "Education",
      "student",
      "school",
      "learning",
      "research",
      "UX design"
    ],
    "description": "A comprehensive digital experience and interface design project created for Aprender UI Case Study.",
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
    "number": "09",
    "title": "Karate Kids Movie UXUI Analysis",
    "category": "Cinematic Interface \u00b7 UX/UI Analysis",
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
      "movie",
      "Poster Design",
      "Social media post",
      "Graphic Designer",
      "Socialmedia",
      "Analysis",
      "presentation",
      "karate kid",
      "Netflix",
      "movieanalysis"
    ],
    "description": "A comprehensive digital experience and interface design project created for Karate Kids Movie UXUI Analysis.",
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
    "number": "10",
    "title": "Smart Remote All in One",
    "category": "IoT & Smart Living \u00b7 Mobile UI App",
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
      "smart remote",
      "user experience",
      "Figma",
      "UI/UX",
      "ui design",
      "user interface",
      "remote"
    ],
    "description": "A comprehensive digital experience and interface design project created for Smart Remote All in One.",
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
    "number": "11",
    "title": "Plants",
    "category": "E-Commerce \u00b7 Botanical Web Store",
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
      "Figma",
      "landing page",
      "UI",
      "ui design",
      "UI/UX",
      "user interface",
      "ux",
      "Website",
      "Website Design"
    ],
    "description": "Made my simple portfolio about plants online store",
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
    "number": "12",
    "title": "enipu (The taste of india )",
    "category": "Brand & Web \u00b7 Digital Experience",
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
      "Web Design ",
      "Figma",
      "UI/UX",
      "user interface",
      "landing page",
      "Website",
      "design",
      "ILLUSTRATION "
    ],
    "description": "A comprehensive digital experience and interface design project created for enipu (The taste of india ).",
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
