// src/lib/data.js
// All portfolio content lives here — edit this file to update the site.

export const profile = {
  name: "Rufai Abdulrahmon",
  title: "Chief Operating Officer · Marketing Strategist · Tech Operations Lead",
  // Profile photo lives at public/profile.jpg (set false to hide it)
  hasPhoto: true,
  email: "rufaiabdulrahmon@gmail.com",
  location: "Allen Avenue, FUNAAB, Abeokuta",
  phone: "",
  tagline:
    "I lead operations, strategy, and growth across tech companies that build digital products — websites, web apps, and mobile solutions — that solve real problems.",
  intro:
    "Results-driven Chief Operating Officer and Marketing Strategist with multi-year experience leading operations across fast-growing technology companies building digital products. I streamline operational workflows, drive cross-functional delivery, shape go-to-market strategy, and scale digital products from concept to launch — combining operational leadership with a deep understanding of product marketing, community growth, and blockchain ecosystems.",
  socials: [
    { label: "Email", href: "mailto:rufaiabdulrahmon@gmail.com", icon: "Mail" },
    { label: "Location", href: "#contact", icon: "MapPin" },
  ],
};

export const stats = [
  { value: "3", label: "Companies as COO / Lead" },
  { value: "5+", label: "Years in Tech Operations" },
  { value: "8", label: "Roles Led" },
  { value: "3", label: "Certifications" },
];

export const companies = [
  "Elyon Labs",
  "Refcrypt Labs",
  "Rhuce",
  "Reflearn",
  "Vershoe",
  "Bitearthswap",
  "Hoopas NFTs",
];

export const experience = [
  {
    role: "Chief Operating Officer",
    company: "Elyon Labs",
    period: "Jan 2026 – Present",
    location: "Remote",
    summary:
      "Oversee operations of a tech company building websites, web applications, and digital products that solve business and user problems.",
    points: [
      "Define and execute operational strategy, standardizing delivery workflows across design, engineering, and product teams to improve turnaround time and product quality.",
      "Coordinate resource allocation, project scheduling, and performance tracking to ensure digital products ship on time and within scope.",
      "Drive cross-functional collaboration between technical and non-technical teams, translating business requirements into product roadmaps.",
      "Establish internal documentation, QA, and reporting systems that improve transparency and operational efficiency.",
    ],
  },
  {
    role: "Chief Operating Officer",
    company: "Refcrypt Labs",
    period: "Jan 2022 – Present",
    location: "Remote",
    summary:
      "Lead operations for a technology company building custom websites, applications, and blockchain-oriented digital products.",
    points: [
      "Architect and maintain scalable operational processes across product development, client delivery, and internal communications.",
      "Manage vendor, partner, and client relationships, overseeing end-to-end delivery of web and mobile solutions from discovery to deployment.",
      "Implement performance metrics and KPIs to monitor team productivity, product health, and customer satisfaction.",
      "Mentor team leads, fostering a culture of ownership, accountability, and continuous improvement.",
    ],
  },
  {
    role: "Marketing Strategist",
    company: "Rhuce",
    period: "March 2026 – Present",
    location: "Remote",
    summary:
      "Develop and execute marketing strategy for a tech company delivering digital products.",
    points: [
      "Conduct market research and competitive analysis to inform product positioning, messaging, and go-to-market campaigns.",
      "Design growth-focused content and campaign plans that drive user acquisition, engagement, and brand awareness.",
      "Collaborate with product and engineering teams to align marketing initiatives with product capabilities and release cycles.",
    ],
  },
  {
    role: "Team Lead",
    company: "Reflearn",
    period: "Jan 2022 – Present",
    location: "Remote",
    summary:
      "Lead operations and delivery for an EdTech platform providing free accessible learning.",
    points: [
      "Coordinate content, community, and product initiatives across a cross-functional team of educators, developers, and volunteers.",
      "Oversee program planning, learner engagement strategies, and partnership development to expand reach and impact.",
      "Track learning outcomes and feedback to continuously improve curriculum delivery and platform experience.",
    ],
  },
  {
    role: "Strategist",
    company: "Vershoe",
    period: "",
    location: "",
    summary:
      "Developed strategic plans and market positioning for a digital products company.",
    points: [
      "Analyzed market trends and user needs to inform product development priorities and marketing execution.",
      "Guided product direction and growth initiatives through data-informed strategy.",
    ],
  },
  {
    role: "Marketing Lead",
    company: "Bitearthswap",
    period: "",
    location: "Cardano Blockchain",
    summary:
      "Led marketing for a multichain hybridization project built on the Cardano blockchain.",
    points: [
      "Drove community growth and token adoption through content, community, and partnership campaigns.",
      "Coordinated with developers and ecosystem partners to communicate technical product value to non-technical audiences.",
    ],
  },
  {
    role: "Lead Growth Ambassador",
    company: "Hoopas NFTs",
    period: "",
    location: "",
    summary:
      "Drove community growth and ambassador outreach for an NFT project.",
    points: [
      "Expanded holder base and engagement through promotional campaigns and community events.",
      "Increased visibility and adoption across social and Web3 communities.",
    ],
  },
  {
    role: "Research Lab Assistant (Intern)",
    company: "NACGRAB",
    period: "April 2021 – October 2021",
    location: "Ibadan, Oyo State",
    summary:
      "Tissue culture, bioscience, and seed testing in compliance with GLP guidelines.",
    points: [
      "Tissue Culture & Bioscience Labs: Conducted media preparation, sterilization, explant handling, and basic microscopy in compliance with GLP guidelines.",
      "Seed Testing & Data Collection: Conducted germination and purity testing utilizing statistical methods to analyze plant breeding data.",
    ],
  },
];

export const education = [
  {
    degree: "Bachelor of Science in Biological Science",
    school: "Federal University of Agriculture, Abeokuta (FUNAAB)",
    period: "",
  },
];

export const skills = [
  {
    group: "Operations & Leadership",
    icon: "Briefcase",
    items: [
      "Chief Operating Officer Leadership",
      "Cross-Functional Team Management",
      "Operational Strategy & Process Optimization",
      "Project & Product Delivery",
      "Resource Allocation",
      "KPI & Performance Tracking",
      "Workflow Automation",
      "Strategic Planning",
      "Vendor & Stakeholder Management",
      "Internal Communications",
    ],
  },
  {
    group: "Marketing & Growth",
    icon: "TrendingUp",
    items: [
      "Go-to-Market Strategy",
      "Product Marketing",
      "Market & Competitor Research",
      "Community Growth & Ambassador Programs",
      "Content Strategy",
      "Campaign Management",
      "Blockchain & Web3 Marketing",
      "Token Adoption",
      "Ecosystem Partnerships",
    ],
  },
  {
    group: "Technical Foundations",
    icon: "Cpu",
    items: [
      "HTML & CSS",
      "Linux CLI",
      "General Security Concepts (Security+)",
      "Digital Product Development Lifecycle",
      "Web & Mobile Application Delivery",
      "Data Analysis & Statistical Methods",
      "Good Laboratory Practice (GLP)",
    ],
  },
];

export const certifications = [
  {
    name: "Linux CLI Basics",
    issuer: "Cybrary",
    icon: "Terminal",
  },
  {
    name: "Security+: General Security Concepts",
    issuer: "Cybrary",
    icon: "ShieldCheck",
  },
  {
    name: "HTML and CSS",
    issuer: "Udemy",
    icon: "Code2",
  },
];

export const leadership = [
  {
    role: "Speaker",
    org: "Youth Assembly of Nigeria — Youth Tech Webinar",
    desc: "Spoke at the youth tech webinar on technology, innovation, and growth.",
    icon: "Mic",
  },
  {
    role: "Keynote Speaker & Lead Strategist",
    org: "Kaspa Meetup Nigeria",
    desc: "Delivered the keynote and led strategy for the Kaspa community meetup in Nigeria.",
    icon: "Presentation",
  },
  {
    role: "Team Lead",
    org: "Reflearn",
    desc: "Lead an EdTech providing free, accessible education to wider audiences.",
    icon: "Users",
  },
  {
    role: "Lead Growth Ambassador",
    org: "Hoopas NFTs",
    desc: "Drove community growth and ambassador outreach for an NFT project.",
    icon: "Rocket",
  },
];

export const projects = [
  {
    name: "Kaspa Blockchain Project",
    tagline: "Keynote Speaker & Lead Strategist — Kaspa Meetup Nigeria",
    description:
      "Led strategy and delivered the keynote at the Kaspa community meetup in Nigeria — driving ecosystem awareness, community growth, and education around the Kaspa blockDAG network. The full event gallery, photos, and recap are hosted on Google Drive.",
    tags: ["Blockchain", "Speaking", "Strategy", "Community Growth"],
    // 👇 PASTE YOUR GOOGLE DRIVE LINK HERE (right-click a Drive folder → "Share" → "Copy link")
    driveUrl: "https://drive.google.com/drive/folders/1MD0LVIymirX6sINxAocrbqA97amKGsVz?usp=sharing",
    accent: "kaspa",
  },
];

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Certifications", href: "#certifications" },
  { label: "Leadership", href: "#leadership" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];
