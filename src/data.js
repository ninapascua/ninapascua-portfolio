// Editable portfolio content. Source assets live in public/assets/.

export const profile = {
  photo: "assets/portrait/603F35F6-C952-4F3F-972C-8D3D7FA698B6 (2).jpeg",
  cv: "assets/Nina-Pascua-CV.pdf",
  linkedin: "https://www.linkedin.com/in/ni%C3%B1a-pascua-3a359b343/",
};

export const projectMedia = {
  AniMedika: [
    {
      src: "assets/projects/animedika/Screenshot 2026-10-29 172931.png",
      alt: "AniMedika homepage with Filipino and English language selection",
      width: 1919,
      height: 911,
    },
    {
      src: "assets/projects/animedika/Screenshot 2026-10-29 172949.png",
      alt: "AniMedika usage instructions and rice leaf image upload interface",
      width: 1919,
      height: 909,
    },
  ],
  Sipori: [
    {
      src: "assets/projects/sipori/sipori1.png",
      alt: "Sipori application screenshot 1 from the project repository",
      width: 1919,
      height: 909,
    },
    {
      src: "assets/projects/sipori/sipori2.png",
      alt: "Sipori application screenshot 2 from the project repository",
      width: 1919,
      height: 911,
    },
    {
      src: "assets/projects/sipori/sipori3.png",
      alt: "Sipori application screenshot 3 from the project repository",
      width: 1919,
      height: 909,
    },
    {
      src: "assets/projects/sipori/sipori4.png",
      alt: "Sipori application screenshot 4 from the project repository",
      width: 1919,
      height: 906,
    },
  ],
  eLingkod: [
    {
      src: "assets/projects/elingkod/4.png",
      alt: "eLingkod project presentation showing the mobile services menu",
      caption: "PROJECT PRESENTATION / MOBILE SERVICES",
      width: 1920,
      height: 1080,
    },
    {
      src: "assets/projects/elingkod/5.png",
      alt: "eLingkod project presentation showing the administrative request dashboard",
      caption: "PROJECT PRESENTATION / ADMIN DASHBOARD",
      width: 1920,
      height: 1080,
    },
  ],
  "Truth in Tales": [
    {
      src: "assets/projects/truth-in-tales/truth.png",
      alt: "Truth in Tales website preview from the project repository",
      width: 1902,
      height: 867,
    },
  ],
  "Bake & Co.": [
    {
      src: "assets/projects/bake-and-co/Screenshot 2026-10-29 220847.png",
      alt: "Bake & Co. mobile interface design board showing sign-in, product browsing, cart, checkout, and profile screens",
      caption: "DESIGN BOARD / MOBILE INTERFACES",
      width: 1187,
      height: 680,
    },
  ],
  Floralia: [
    {
      src: "assets/projects/floralia/Screenshot 2026-10-29 215750.png",
      alt: "Floralia studio homepage with floral imagery and navigation to membership, classes, and About",
      width: 1919,
      height: 910,
    },
  ],
};

// Roles follow the CV and credited work; features follow public repositories.
// Bake & Co. screen coverage is based on the supplied design board.
export const projects = [
  {
    name: "AniMedika",
    subtitle: "Rice Leaf Disease Detection System",
    category: ["UI/UX", "AI / Machine Learning"],
    type: "Undergraduate thesis · Collaborative",
    repo: "cinemaseven/AniMedika-A-Rice-Leaf-Disease-Detection-System",
    description:
      "An undergraduate thesis web application that uses an EfficientNetB0 CNN to classify rice leaf images into six supported conditions. Results include disease details, key signs, predefined English and Filipino recommendations, and seasonal context.",
    role: [
      "Developed an EfficientNetB0-based CNN for multiclass rice leaf disease classification.",
      "Contributed to thesis documentation.",
      "Collaborated on the browser-based identification system.",
    ],
    features: [
      "Rice leaf image upload and mobile camera capture",
      "Classification across six supported leaf conditions",
      "Disease details, key signs, and English/Filipino recommendations",
      "Wet- or dry-season notes based on the selected image date",
    ],
    tech: [
      "Python",
      "EfficientNetB0",
      "TensorFlow/Keras",
      "Flask",
      "HTML",
      "CSS",
      "JavaScript",
    ],
    note: "From a leaf to a little clarity.",
  },
  {
    name: "Sipori",
    subtitle: "A Little Space for Your Sips",
    category: ["UI/UX", "Web Development"],
    type: "Personal full-stack application",
    repo: "ninapascua/Sipori",
    live: "https://sipori.onrender.com",
    liveLabel: "Visit app · owner sign-in",
    description:
      "A private café journal for collecting matcha and hojicha drinks, with photos, prices, ratings, tasting notes, search, and a monthly photo scrapbook. Live records are protected by owner authentication.",
    role: [
      "Designed and developed the full-stack café journal.",
      "Implemented searchable records, filtering, and CRUD functionality.",
      "Integrated authentication and a monthly photographic scrapbook.",
    ],
    features: [
      "Café and drink entries with photos, prices, ratings, and tasting notes",
      "Search by café or drink name and filter by matcha or hojicha",
      "Add, edit, and delete journal entries",
      "Current-month photo scrapbook with a shuffle control",
      "Owner sign-in for private journal records",
    ],
    tech: [
      "React",
      "Vite",
      "JavaScript",
      "Node.js",
      "Express",
      "PostgreSQL",
      "Supabase",
      "Render",
    ],
    note: "Small sips. Collected memories.",
  },
  {
    name: "eLingkod",
    subtitle: "Barangay Services Mobile Application",
    category: ["UI/UX", "Mobile Development", "AI / Machine Learning"],
    type: "Collaborative mobile application",
    repo: "cinemaseven/eLingkod",
    description:
      "A Flutter mobile application for barangay services, combining resident registration, profile management, document handling, and identity verification. Camera capture, image-quality checks, OCR, and backend validation support the registration process.",
    role: [
      "Developed resident registration and identity verification.",
      "Implemented camera-based ID scanning, OCR, and image-quality checks.",
      "Developed identification-number validation and integrated backend verification services.",
    ],
    features: [
      "Resident registration and profile management",
      "Camera-based ID capture with blur and exposure checks",
      "OCR text extraction and identification-number matching",
      "Backend verification and storage of registration documents",
    ],
    tech: ["Flutter", "Dart", "Python", "FastAPI", "Supabase", "Google ML Kit"],
    note: "Making community services closer.",
  },
  {
    name: "Truth in Tales",
    subtitle: "Creative Writing Website",
    category: ["UI/UX", "Web Development"],
    type: "Collaborative · Six-member team",
    repo: "RandelYumul/Truth_in_Tales",
    live: "https://randelyumul.github.io/Truth_in_Tales/",
    description:
      "A collaborative creative writing website presenting essays, personal reflections, and stories. Built with HTML, CSS, and JavaScript, it emphasizes readable typography, responsive layouts, and straightforward navigation between Home, Blog, and About Us.",
    role: [
      "Contributed UI/frontend design as part of a six-member team.",
      "Designed layouts, typography, and navigation for reading across devices.",
      "Authored “Burnout Is the New Broken Wing: Why We're Still Expected to Fly.”",
    ],
    features: [
      "A collection of essays, personal reflections, and stories",
      "Individual article pages with author credits",
      "Home, Blog, and About Us navigation",
      "Responsive reading layouts",
    ],
    tech: ["HTML", "CSS", "JavaScript"],
    note: "A place for stories to unfold.",
  },
  {
    name: "Bake & Co.",
    subtitle: "Bakery Mobile Application",
    category: ["UI/UX", "Mobile Development"],
    type: "Collaborative mobile application",
    description:
      "A Flutter mobile application for browsing bakery products through an organized, user-friendly interface.",
    role: [
      "Developed mobile UI components and product displays.",
      "Created custom visual elements for the mobile interface.",
      "Applied reusable Flutter widgets to keep the interface consistent.",
    ],
    features: [
      "Product browsing and product-detail interfaces",
      "Favorites and customer-review screens",
      "Cart, delivery checkout, and order-confirmation screen designs",
      "Sign-in, registration, and profile interfaces",
    ],
    tech: ["Flutter", "Dart"],
    note: "Thoughtfully made, down to the crumbs.",
  },
  {
    name: "Floralia",
    subtitle: "Floral Workshop Website",
    category: ["UI/UX", "Web Development"],
    type: "Responsive website",
    repo: "ninapascua/floralia",
    description:
      "A responsive floral workshop website introducing the studio, membership benefits, and beginner-to-advanced classes. Built with HTML, CSS, and JavaScript, with captioned video and membership registration through Google Forms.",
    role: [
      "Designed and developed the responsive floral workshop website.",
      "Created visual layouts, typography, and floral-inspired elements.",
      "Implemented mobile navigation, captioned video, and links to membership registration.",
    ],
    features: [
      "Beginner, intermediate, and advanced workshop comparisons",
      "Membership benefits and external Google Forms registration",
      "Studio introduction with a captioned promotional video",
      "Section navigation with a collapsible mobile menu",
    ],
    tech: ["HTML", "CSS", "JavaScript"],
    note: "Good ideas deserve room to bloom.",
  },
].map((project) => ({ ...project, media: projectMedia[project.name] }));

export const skills = {
  Design: ["Figma", "Canva", "UI/UX Design"],
  Languages: ["Python", "Java", "JavaScript", "Dart"],
  "Web & Mobile": ["HTML", "CSS", "React", "Flutter"],
  "Backend & Data": ["PostgreSQL", "Supabase"],
  Tools: ["Git", "GitHub", "Visual Studio Code"],
  People: [
    "Leadership",
    "Collaboration",
    "Communication",
    "Problem-Solving",
    "Critical Thinking",
    "Adaptability",
    "Attention to Detail",
  ],
};

export const certificates = [
  ["Design", "Work with Components in Figma", "Coursera", "September 2024"],
  [
    "Development",
    "Legacy Responsive Web Design V8",
    "freeCodeCamp",
    "September 2024",
  ],
  ["Development", "JavaScript Essentials 1", "Cisco", "October 2024"],
  ["Development", "Relational Database V8", "freeCodeCamp", "February 2025"],
  [
    "AI & Data",
    "Artificial Intelligence Fundamentals",
    "IBM SkillsBuild",
    "March 2026",
  ],
  ["AI & Data", "AI Fundamentals with IBM SkillsBuild", "Cisco", "March 2026"],
  ["AI & Data", "Data Analytics Essentials", "Cisco", "March 2026"],
  [
    "Cloud & Security",
    "AWS Academy Graduate — Cloud Foundations Training Badge",
    "AWS Academy",
    "March 2026",
  ],
  ["Cloud & Security", "Endpoint Security", "Cisco", "August 2025"],
  ["Cloud & Security", "Cyber Threat Management", "Cisco", "November 20, 2025"],
  [
    "IT Fundamentals",
    "CompTIA IT Fundamentals+ (ITF+) Certification",
    "CompTIA",
    "November 2023",
  ],
];

export const certificateEvidence = {
  "Work with Components in Figma": {
    url: "https://www.coursera.org/account/accomplishments/verify/25W7WW8QQI3B",
    provider: "Coursera",
    image: "assets/certifications/coursera-logo.ee9edd35.png",
    imageAlt: "Coursera logo",
  },
  "Relational Database V8": {
    url: "https://www.freecodecamp.org/certification/fcc6e66bdab-1c12-4b36-8525-1bcfcd71c947/relational-database-v8",
    provider: "freeCodeCamp",
    image: "assets/certifications/freecodecamp-logo.bfa5ec0b.png",
    imageAlt: "freeCodeCamp logo",
  },
  "Legacy Responsive Web Design V8": {
    url: "https://www.freecodecamp.org/certification/fcc6e66bdab-1c12-4b36-8525-1bcfcd71c947/responsive-web-design",
    provider: "freeCodeCamp",
    image: "assets/certifications/freecodecamp-logo.bfa5ec0b.png",
    imageAlt: "freeCodeCamp logo",
  },
  "AWS Academy Graduate — Cloud Foundations Training Badge": {
    url: "https://www.credly.com/badges/15bdbc5b-107d-436f-b3a6-dae5b23b1c2b/public_url",
    image: "assets/certifications/aws-cloud-foundations.dffc71d9.png",
    artworkScale: 1.3,
  },
  "AI Fundamentals with IBM SkillsBuild": {
    url: "https://www.credly.com/badges/1f7b30a3-dffa-4e56-ace2-96776c407d72/public_url",
    image: "assets/certifications/ai-fundamentals-cisco.6de116f6.png",
  },
  "Artificial Intelligence Fundamentals": {
    url: "https://www.credly.com/badges/37ca537e-569f-4f81-838e-6ada6ba7b524/public_url",
    image: "assets/certifications/ai-fundamentals-ibm.7db6a05a.png",
  },
  "CompTIA IT Fundamentals+ (ITF+) Certification": {
    url: "https://www.credly.com/badges/6afa26a7-421e-495e-9590-28441ad9e4a8/public_url",
    image: "assets/certifications/comptia-itf.41050828.png",
    artworkScale: 1.34,
  },
  "Cyber Threat Management": {
    url: "https://www.credly.com/badges/fd5c6e8b-7afc-4a31-8114-72966ee442f1/public_url",
    image: "assets/certifications/cyber-threat-management.ee6af987.png",
  },
  "Data Analytics Essentials": {
    url: "https://www.credly.com/badges/8b6908f6-e4ba-4841-8a2c-2bd1fa22973c/public_url",
    image: "assets/certifications/data-analytics.7f2e607d.png",
  },
  "Endpoint Security": {
    url: "https://www.credly.com/badges/db153fb0-3761-4e94-9eb2-a98d63b56ac2/public_url",
    image: "assets/certifications/endpoint-security.6be8e0c1.png",
  },
  "JavaScript Essentials 1": {
    url: "https://www.credly.com/badges/5ed4f4af-b2e6-4322-83a3-4cb0c7e98931/public_url",
    image: "assets/certifications/javascript-essentials.ece5a2c7.png",
  },
};

export const leadership = [
  ["2025–2026", "Google Developer Groups", "Internal Relations Staff"],
  ["2025–2026", "Code Geeks", "Events Staff"],
  [
    "2024–2025",
    "HAU Student Council",
    "Associate Solicitor General · School of Computing",
  ],
  [
    "2024–2025",
    "League of Outstanding Programmers",
    "Director for Community Development",
  ],
  ["2023–2024", "HAU Student Council", "I.V.Y League Member"],
  ["2023–2024", "League of Outstanding Programmers", "Member"],
  ["2023–2024", "Cybersecurity Intelligence and Alliance", "Member"],
];
