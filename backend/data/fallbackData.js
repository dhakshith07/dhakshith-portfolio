// Default portfolio dataset for seeding MongoDB and fallback mode
const fallbackProfile = {
  name: "Alex Mercer",
  role: "Full-Stack Software Engineer",
  tagline: "Crafting high-performance web applications, resilient backend architectures, and elegant user interfaces.",
  location: "San Francisco, CA / Remote Available",
  email: "alex.mercer.dev@example.com",
  github: "https://github.com",
  linkedin: "https://linkedin.com",
  twitter: "https://x.com",
  resumeUrl: "#",
  availability: "Open to new opportunities & high-impact projects",
  bioParagraphs: [
    "Hello! I am a passionate Full-Stack Developer with 4+ years of dedicated experience architecting robust web solutions across modern tech stacks. I thrive at the intersection of performant backend engineering and intuitive, responsive frontend interfaces.",
    "My core expertise revolves around the JavaScript/Node.js ecosystem, modern React, Express RESTful APIs, and MongoDB schema design. I have delivered mission-critical applications ranging from real-time analytics platforms to interactive SaaS portals.",
    "When I'm not writing clean code, you can find me contributing to open-source software, experimenting with cloud-native tooling, or writing technical deep dives on distributed architecture."
  ],
  stats: {
    yearsExperience: 4,
    projectsCompleted: 32,
    happyClients: 18,
    githubContributions: 1450
  },
  skills: [
    // Frontend
    { name: "React.js", category: "Frontend", proficiency: 94, icon: "react", badge: "Advanced" },
    { name: "JavaScript (ES6+)", category: "Frontend", proficiency: 96, icon: "javascript", badge: "Expert" },
    { name: "HTML5 & Modern CSS3", category: "Frontend", proficiency: 92, icon: "css3", badge: "Advanced" },
    { name: "Responsive & Flex/Grid UI", category: "Frontend", proficiency: 95, icon: "layout", badge: "Expert" },
    { name: "Redux / Context API", category: "Frontend", proficiency: 88, icon: "layers", badge: "Advanced" },
    { name: "Next.js / SSR", category: "Frontend", proficiency: 85, icon: "next", badge: "Proficient" },

    // Backend
    { name: "Node.js", category: "Backend", proficiency: 92, icon: "nodejs", badge: "Expert" },
    { name: "Express.js", category: "Backend", proficiency: 90, icon: "server", badge: "Expert" },
    { name: "RESTful API Design", category: "Backend", proficiency: 95, icon: "api", badge: "Expert" },
    { name: "Authentication (JWT & OAuth)", category: "Backend", proficiency: 88, icon: "shield", badge: "Advanced" },
    { name: "WebSockets & Real-time", category: "Backend", proficiency: 82, icon: "activity", badge: "Proficient" },
    { name: "Microservices & Clean Arch", category: "Backend", proficiency: 80, icon: "cpu", badge: "Proficient" },

    // Database
    { name: "MongoDB", category: "Database", proficiency: 90, icon: "database", badge: "Expert" },
    { name: "Mongoose ODM", category: "Database", proficiency: 92, icon: "database", badge: "Expert" },
    { name: "Aggregation & Indexing", category: "Database", proficiency: 85, icon: "search", badge: "Advanced" },
    { name: "Redis Caching", category: "Database", proficiency: 78, icon: "zap", badge: "Proficient" },
    { name: "PostgreSQL / SQL", category: "Database", proficiency: 80, icon: "database", badge: "Proficient" },

    // Cloud & DevOps / Tools
    { name: "Git & GitHub Workflow", category: "Cloud & DevOps", proficiency: 95, icon: "git", badge: "Expert" },
    { name: "Docker & Containerization", category: "Cloud & DevOps", proficiency: 82, icon: "box", badge: "Advanced" },
    { name: "AWS (S3, EC2, Lambda)", category: "Cloud & DevOps", proficiency: 78, icon: "cloud", badge: "Proficient" },
    { name: "CI/CD (GitHub Actions)", category: "Cloud & DevOps", proficiency: 84, icon: "refresh-cw", badge: "Advanced" },
    { name: "Postman & API Testing", category: "Cloud & DevOps", proficiency: 90, icon: "check-circle", badge: "Expert" }
  ],
  experiences: [
    {
      role: "Senior Full-Stack Developer",
      company: "Nexus Technologies Inc.",
      period: "2023 - Present",
      location: "San Francisco, CA (Remote)",
      isCurrent: true,
      description: [
        "Architected and deployed scalable MERN stack web applications serving over 50,000 active monthly users.",
        "Refactored backend services and optimized MongoDB indexing strategies, cutting average API response times by 38%.",
        "Led a squad of 4 developers, conducting architecture reviews, code audits, and mentoring junior engineers."
      ],
      technologies: ["React.js", "Node.js", "Express", "MongoDB", "Docker", "AWS", "Redis"]
    },
    {
      role: "Full-Stack Software Engineer",
      company: "CloudVibe Studio",
      period: "2021 - 2023",
      location: "Austin, TX",
      isCurrent: false,
      description: [
        "Built responsive client portals with React and custom modern CSS dark-mode systems.",
        "Engineered robust RESTful micro-endpoints using Express with JWT role-based authentication and rate limiting.",
        "Designed schema migrations and aggregation pipelines in MongoDB for automated customer billing reports."
      ],
      technologies: ["React.js", "JavaScript", "Express.js", "MongoDB", "Tailwind/CSS", "Jest"]
    },
    {
      role: "Junior Web Developer",
      company: "PixelCraft Interactive",
      period: "2020 - 2021",
      location: "Boston, MA",
      isCurrent: false,
      description: [
        "Created mobile-first responsive landing pages and interactive web widgets with vanilla JavaScript and CSS3.",
        "Integrated third-party payment gateways, CRM webhooks, and headless CMS integrations.",
        "Collaborated with UI/UX designers to translate Figma design systems into pixel-perfect frontend code."
      ],
      technologies: ["JavaScript", "HTML5", "CSS3", "Node.js", "REST APIs", "Git"]
    }
  ]
};

const fallbackProjects = [
  {
    _id: "661201010101010101010001",
    title: "CloudVault - Enterprise Asset Manager",
    summary: "Cloud-native digital asset management platform with multi-tenant access, secure storage, and real-time collaboration.",
    description: "CloudVault is a comprehensive full-stack platform built to manage distributed team assets securely. It features role-based access control (RBAC), multi-file batch uploads with S3-compatible cloud storage, automatic image thumbnail generation, and audit logging. The frontend provides instant folder navigation, drag-and-drop uploads, and rich metadata searching.",
    category: "Full Stack",
    tags: ["React.js", "Node.js", "Express", "MongoDB", "AWS S3", "JWT"],
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&auto=format&fit=crop&q=80",
    liveUrl: "https://example.com/demo/cloudvault",
    githubUrl: "https://github.com/example/cloudvault",
    featured: true,
    metrics: "50k+ Uploads • 99.9% Availability",
    order: 1
  },
  {
    _id: "661201010101010101010002",
    title: "PulseFlow - Real-Time Analytics Dashboard",
    summary: "High-throughput operational monitoring and metrics visualization dashboard with customizable telemetry charts.",
    description: "PulseFlow delivers real-time telemetry metrics for modern microservices and web apps. Powered by an Express backend, WebSocket feeds, and MongoDB time-series queries, it delivers real-time throughput rates, latency histograms, and uptime tracking with zero perceptible lag.",
    category: "Full Stack",
    tags: ["React.js", "Node.js", "WebSockets", "MongoDB", "Chart.js", "CSS Grid"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=80",
    liveUrl: "https://example.com/demo/pulseflow",
    githubUrl: "https://github.com/example/pulseflow",
    featured: true,
    metrics: "Sub-50ms Chart Render • Live Feeds",
    order: 2
  },
  {
    _id: "661201010101010101010003",
    title: "DevSprint - Agile Kanban Workspace",
    summary: "Collaborative project management tool featuring drag-and-drop boards, sprint planning, and GitHub activity sync.",
    description: "A developer-oriented productivity tool designed to manage technical roadmaps effortlessly. Users can organize tasks into swimlanes, assign team members, attach markdown specifications, and set deadline reminders. Includes dark/light mode toggle and offline localStorage synchronization.",
    category: "Frontend",
    tags: ["React.js", "Modern CSS", "Context API", "Local Storage", "Drag & Drop"],
    image: "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?w=800&auto=format&fit=crop&q=80",
    liveUrl: "https://example.com/demo/devsprint",
    githubUrl: "https://github.com/example/devsprint",
    featured: true,
    metrics: "Smooth 60fps DnD • Zero Dependencies",
    order: 3
  },
  {
    _id: "661201010101010101010004",
    title: "NeuralBridge - AI Prompt Orchestrator API",
    summary: "High-performance Express microservice for prompt engineering, token consumption metering, and multi-model routing.",
    description: "A resilient backend middleware that acts as a secure proxy between client interfaces and LLM providers. Built with Node.js, Express, and MongoDB, it handles rate-limiting, semantic caching with Redis, token counting, and API key rotation for enterprise teams.",
    category: "Backend",
    tags: ["Node.js", "Express.js", "MongoDB", "REST API", "Redis", "Docker"],
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800&auto=format&fit=crop&q=80",
    liveUrl: "https://example.com/demo/neuralbridge",
    githubUrl: "https://github.com/example/neuralbridge",
    featured: false,
    metrics: "1M+ Daily Tokens • Rate Limited",
    order: 4
  },
  {
    _id: "661201010101010101010005",
    title: "CyberCommerce - Headless E-Store Engine",
    summary: "Ultra-fast headless shopping cart and checkout architecture with instant search, stripe payments, and inventory sync.",
    description: "An end-to-end e-commerce solution featuring product variant configuration, faceted category filters, optimistic UI shopping cart updates, and robust order processing backend connected to MongoDB.",
    category: "Full Stack",
    tags: ["React.js", "Express.js", "MongoDB", "Stripe API", "CSS Modules"],
    image: "https://images.unsplash.com/photo-1556742049-0a67c5574f73?w=800&auto=format&fit=crop&q=80",
    liveUrl: "https://example.com/demo/cybercommerce",
    githubUrl: "https://github.com/example/cybercommerce",
    featured: false,
    metrics: "98/100 Lighthouse • PCI Compliant",
    order: 5
  },
  {
    _id: "661201010101010101010006",
    title: "TerminalZen - Cloud Shell & Log Streamer",
    summary: "Browser-based developer console and container log inspector with syntax highlighting and command history.",
    description: "A developer tool providing browser-based access to container logs and remote server diagnostics. Uses custom dark theme UI components, virtual scrolling for logs over 100k lines, and customizable regex search filters.",
    category: "Frontend",
    tags: ["React.js", "Virtual DOM", "CSS Themes", "WebSockets"],
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&auto=format&fit=crop&q=80",
    liveUrl: "https://example.com/demo/terminalzen",
    githubUrl: "https://github.com/example/terminalzen",
    featured: false,
    metrics: "100k+ Line Virtualization",
    order: 6
  }
];

module.exports = {
  fallbackProfile,
  fallbackProjects
};

