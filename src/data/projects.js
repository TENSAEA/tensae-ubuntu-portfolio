const projects = [
  {
    id: 1,
    title: "Lira Workspace",
    description: "A comprehensive task management application built with the MERN stack. Features include task creation, assignment, tracking, and team collaboration tools.",
    featured: true, // ⭐ FEATURED PROJECT
    category: "Full Stack",
    tags: ["React", "Node.js", "Express", "MongoDB", "Redux", "Material UI"],
    year: 2024,
    technologies: ["React", "Node.js", "Express", "MongoDB", "Redux Toolkit", "Material UI", "Render"],
    imageUrl: "/images/LiraWorksapce.png",
    demoUrl: "https://lira-workspace.onrender.com/",
    githubUrl: "https://github.com/TENSAEA/lira-workspace-frontend.git",
    videoUrl: "https://www.veed.io/view/17ee61fb-1678-4a90-89f2-6631ae687057?panel=share",
    metrics: {
      users: "500+ Teams",
      performance: "3x Productivity",
      rating: "4.9/5"
    },
    clientImpact: {
      problem: "Teams struggled with scattered tasks across multiple platforms, leading to missed deadlines and poor collaboration.",
      solution: "Built unified workspace with real-time collaboration, automated workflows, and intuitive task management.",
      results: "300% increase in team productivity, 50% reduction in missed deadlines, used by 500+ teams worldwide."
    },
    testimonialId: 5, // Links to Emily Watson
  },
  {
    id: 2,
    title: "Nest_Net Building Management",
    description: "A comprehensive building management system built with PHP. Features include tenant management, maintenance requests, billing, and reporting.",
    featured: true, // ⭐ FEATURED PROJECT
    category: "Enterprise",
    tags: ["PHP", "MySQL", "JavaScript", "Bootstrap"],
    year: 2024,
    technologies: ["PHP", "MySQL", "JavaScript", "Bootstrap", "HTML", "Infinityfree"],
    imageUrl: "/images/buildingmangaementsystem.png",
    demoUrl: "http://nest-net-building.infinityfreeapp.com/Building/html/dashboard/auth/sign-in.php?i=1",
    githubUrl: "https://github.com/TENSAEA/nest-net-building-management-system.git",
    videoUrl: "https://www.veed.io/view/601a49d8-2a46-4ac7-8edb-0711f0e26e2c?panel=share",
    metrics: {
      buildings: "15+ Properties",
      savings: "$10k+ Monthly",
      efficiency: "70% Faster"
    },
    clientImpact: {
      problem: "Property managers manually tracked maintenance, billing, and tenant communications across spreadsheets.",
      solution: "Developed centralized system automating billing, maintenance tracking, and tenant portal.",
      results: "Manages 15+ properties, saves $10,000+ monthly, 70% faster maintenance resolution."
    },
    testimonialId: 4, // Links to David Thompson
  },
  {
    id: 3,
    title: "Scandiweb E-commerce",
    description: "An e-commerce platform built with MERN Stack, featuring GraphQL and REST API integration. Includes product management, shopping cart, and checkout functionality.",
    featured: true, // ⭐ FEATURED PROJECT
    category: "E-Commerce",
    tags: ["GraphQL", "React", "PHP", "MySQL"],
    year: 2023,
    technologies: ["GraphQL", "React", "PHP", "MySQL", "REST API", "Redux"],
    imageUrl: "/images/scandiweb.png",
    demoUrl: "https://scandiweb-ready.onrender.com/",
    githubUrl: "https://github.com/TENSAEA/react-php-test.git",
    videoUrl: "https://www.veed.io/view/c82c4025-ded9-47cb-8b29-d2f66ed0bdfa?panel=share",
    metrics: {
      revenue: "$50k+ Monthly",
      conversions: "35% Increase",
      speed: "<1s Load Time"
    },
    clientImpact: {
      problem: "E-commerce site had slow load times and poor mobile experience, causing 60% cart abandonment.",
      solution: "Rebuilt with GraphQL for efficient data fetching, optimized images, and mobile-first design.",
      results: "$50k+ monthly revenue, 35% increase in conversions, under 1 second load time."
    },
    testimonialId: 2, // Links to Michael Chen
  },
  {
    id: 4,
    title: "Orthodox Tewahedo Church Platform",
    description: "A community management platform for Ethiopian Orthodox Tewahedo Church. Features member management, event scheduling, donations, and educational content.",
    featured: true, // ⭐ FEATURED PROJECT
    category: "Community Platform",
    tags: ["Next.js", "MongoDB", "Tailwind", "Node.js"],
    year: 2024,
    technologies: ["Next.js", "MongoDB", "Tailwind CSS", "Node.js", "NextAuth", "Prisma"],
    imageUrl: "/images/orthodoxtewahedo.png",
    demoUrl: "https://orthodox-tewahedo-church.vercel.app/",
    githubUrl: "https://github.com/TENSAEA/orthodox-tewahedo-church.git",
    videoUrl: "",
    metrics: {
      members: "1,000+ Active",
      engagement: "5x Increase",
      donations: "$25k+ Raised"
    },
    clientImpact: {
      problem: "Church community was disconnected with no central platform for events, education, and donations.",
      solution: "Built comprehensive platform with member portal, event management, online learning, and secure donations.",
      results: "1,000+ active members, 5x increase in event participation, $25,000+ in online donations."
    },
    testimonialId: null,
  },
  {
    id: 5,
    title: "Medical Consultancy System",
    description: "A healthcare consultancy platform connecting patients with medical professionals. Features appointment booking, telemedicine, and medical records management.",
    featured: false,
    category: "Healthcare",
    tags: ["PHP", "MySQL", "JavaScript", "Bootstrap"],
    year: 2023,
    technologies: ["PHP", "MySQL", "JavaScript", "Bootstrap", "HTML", "CSS"],
    imageUrl: "/images/medicalconsultancy.png",
    demoUrl: "http://medicalconsultancy.rf.gd/",
    githubUrl: "https://github.com/TENSAEA/medical-consultancy-system.git",
    videoUrl: "",
    metrics: {
      patients: "500+ Consultations",
      satisfaction: "95% Rating",
      waitTime: "80% Reduction"
    },
    clientImpact: {
      problem: "Patients faced long wait times and difficulty accessing medical consultations remotely.",
      solution: "Developed telemedicine platform with instant booking, video consultations, and digital records.",
      results: "500+ successful consultations, 95% patient satisfaction, 80% reduction in wait times."
    },
    testimonialId: null,
  },
  {
    id: 6,
    title: "Ekub Digital",
    description: "A digital platform for Ethiopian traditional saving system (Ekub). Features member management, contribution tracking, lottery system, and automated payouts.",
    featured: true, // ⭐ FEATURED PROJECT
    category: "Fintech",
    tags: ["React", "Node.js", "MongoDB", "Redux"],
    year: 2023,
    technologies: ["React", "Node.js", "MongoDB", "Express", "Redux", "Bootstrap"],
    imageUrl: "/images/ekubdigital.png",
    demoUrl: "https://ekub-digital.onrender.com/",
    githubUrl: "https://github.com/TENSAEA/Ekub-front-end.git",
    videoUrl: "",
    metrics: {
      groups: "100+ Ekubs",
      savings: "$100k+ Managed",
      automation: "95% Automated"
    },
    clientImpact: {
      problem: "Traditional Ekub groups managed manually with paper records, leading to errors and disputes.",
      solution: "Digitized entire Ekub system with automated lottery, transparent tracking, and mobile access.",
      results: "Manages 100+ Ekub groups, $100,000+ in savings, 95% process automation, zero disputes."
    },
    testimonialId: 6, // Links to Robert Anderson
  },
  {
    id: 7,
    title: "AAU Technology Club Website",
    description: "A WordPress-based community platform for Addis Ababa University Technology Club. Features member registration, event management, blog, and project showcase.",
    featured: false,
    category: "Community Website",
    tags: ["WordPress", "PHP", "MySQL"],
    year: 2023,
    technologies: ["WordPress", "PHP", "MySQL", "Custom Plugins", "Responsive Design"],
    imageUrl: "/images/aautechclub.png",
    demoUrl: "http://aautec.infinityfreeapp.com/",
    githubUrl: "",
    videoUrl: "",
    metrics: {
      members: "700+ Students",
      engagement: "60% Active",
      events: "50+ Events"
    },
    clientImpact: {
      problem: "Tech club had no online presence, making it hard to reach students and organize events.",
      solution: "Built WordPress site with custom plugins for member management, event calendar, and project gallery.",
      results: "700+ registered members, 60% active engagement, successfully organized 50+ tech events."
    },
    testimonialId: 5, // Links to Emily Watson
  },
  {
    id: 8,
    title: "Kalkidan Finance",
    description: "A financial management system for loan and savings tracking. Features customer management, loan processing, payment tracking, and financial reporting.",
    featured: false,
    category: "Fintech",
    tags: ["PHP", "MySQL", "JavaScript"],
    year: 2023,
    technologies: ["PHP", "MySQL", "JavaScript", "Bootstrap", "HTML", "CSS"],
    imageUrl: "/images/kalkidanfinance.png",
    demoUrl: "http://kalkidanfinance.rf.gd/Kalkidan/html/auth/sign-in.php",
    githubUrl: "",
    videoUrl: "",
    metrics: {
      loans: "$500k+ Processed",
      clients: "200+ Active",
      efficiency: "90% Faster"
    },
    clientImpact: {
      problem: "Microfinance institution tracked loans manually, causing delays and calculation errors.",
      solution: "Automated loan processing, payment tracking, and financial reporting system.",
      results: "Processed $500,000+ in loans, serves 200+ clients, 90% faster loan approvals."
    },
    testimonialId: null,
  },
];

export default projects;
