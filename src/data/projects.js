const projects = [
  {
    id: 1,
    title: "Horizonova",
    description: "A cutting-edge real-time collaboration platform that revolutionizes team productivity. Built with modern web technologies, featuring instant messaging, video conferencing, and seamless project management tools that keep distributed teams connected and efficient.",
    featured: true,
    category: "Full Stack",
    tags: ["React", "Node.js", "WebSocket", "MongoDB"],
    year: 2024,
    technologies: ["React", "Node.js", "Express", "MongoDB", "WebSocket", "Redux Toolkit", "Material UI", "JWT Authentication"],
    imageUrl: "/images/1_image.png",
    screenshots: ["/images/1_image.png"],
    demoUrl: "https://horizonova.vercel.app/",
    githubUrl: "https://github.com/TENSAEA/horizonova",
    videoUrl: "",
    metrics: {
      users: "1000+ Active Users",
      performance: "Real-time Updates",
      rating: "4.8/5"
    },
    clientImpact: {
      problem: "Remote teams struggled with fragmented communication tools and delayed project updates.",
      solution: "Built unified platform with real-time collaboration, integrated video calls, and centralized project tracking.",
      results: "1000+ active users, 85% improvement in team response time, seamless cross-timezone collaboration."
    },
    testimonialId: null,
  },
  {
    id: 2,
    title: "Horizonova Hub",
    description: "An enterprise-grade authentication and authorization hub powering the Horizonova ecosystem. Features single sign-on (SSO), multi-factor authentication, role-based access control, and comprehensive user management for large-scale applications.",
    featured: true,
    category: "Full Stack",
    tags: ["Next.js", "OAuth", "GraphQL", "PostgreSQL"],
    year: 2024,
    technologies: ["Next.js", "GraphQL", "PostgreSQL", "OAuth 2.0", "JWT", "Redis", "Docker", "Prisma ORM"],
    imageUrl: "/images/2_image.png",
    screenshots: ["/images/2_image.png"],
    demoUrl: "https://horizonova-hub.vercel.app/login",
    githubUrl: "https://github.com/TENSAEA/horizonova-hub",
    videoUrl: "",
    metrics: {
      security: "Bank-Grade Security",
      uptime: "99.9% Uptime",
      response: "<100ms Auth"
    },
    clientImpact: {
      problem: "Organizations needed a secure, scalable authentication system supporting multiple applications.",
      solution: "Developed centralized identity management with SSO, MFA, and fine-grained permissions.",
      results: "Secured 50+ enterprise applications, 99.9% uptime, sub-100ms authentication response time."
    },
    testimonialId: null,
  },
  {
    id: 3,
    title: "Church Monitor",
    description: "A comprehensive church management system that digitizes member records, tracks attendance, manages donations, schedules events, and facilitates community engagement. Perfect for modern congregations seeking to strengthen their community bonds.",
    featured: true,
    category: "Full Stack",
    tags: ["React", "Node.js", "MongoDB", "RESTful API"],
    year: 2024,
    technologies: ["React", "Node.js", "Express", "MongoDB", "RESTful API", "Material UI", "Chart.js", "PDF Generation"],
    imageUrl: "/images/3_image.png",
    screenshots: ["/images/3_image.png"],
    demoUrl: "https://church-monitor.vercel.app/",
    githubUrl: "https://github.com/TENSAEA/church-monitor",
    videoUrl: "",
    metrics: {
      members: "2000+ Members",
      donations: "$50k+ Tracked",
      engagement: "70% Active"
    },
    clientImpact: {
      problem: "Church administration relied on manual processes, making member tracking and donation management inefficient.",
      solution: "Built all-in-one platform for member management, digital giving, event scheduling, and analytics.",
      results: "Manages 2000+ members, tracks $50,000+ in donations, 70% member engagement rate."
    },
    testimonialId: null,
  },
  {
    id: 4,
    title: "Nora Company",
    description: "A sophisticated company management system streamlining HR operations, project workflows, and business analytics. Features employee management, payroll automation, task tracking, and real-time reporting dashboards for data-driven decision making.",
    featured: true,
    category: "Full Stack",
    tags: ["React", "Node.js", "GraphQL", "PostgreSQL"],
    year: 2024,
    technologies: ["React", "Node.js", "GraphQL", "PostgreSQL", "TypeScript", "Redux Saga", "Ant Design", "Microservices"],
    imageUrl: "/images/4_image.png",
    screenshots: ["/images/4_image.png"],
    demoUrl: "https://nora-company.vercel.app/",
    githubUrl: "https://github.com/TENSAEA/nora-company",
    videoUrl: "",
    metrics: {
      employees: "500+ Employees",
      efficiency: "60% Time Saved",
      accuracy: "99% Payroll Accuracy"
    },
    clientImpact: {
      problem: "Company struggled with fragmented HR systems, manual payroll processing, and lack of unified reporting.",
      solution: "Developed integrated management platform with automated workflows, GraphQL API, and real-time analytics.",
      results: "Manages 500+ employees, 60% reduction in administrative time, 99% payroll accuracy."
    },
    testimonialId: null,
  },
  {
    id: 5,
    title: "FAWE Platform",
    description: "An educational empowerment platform dedicated to advancing women's education in Africa. Features course management, mentorship programs, scholarship tracking, and community forums fostering collaboration and knowledge sharing among students and educators.",
    featured: true,
    category: "Full Stack",
    tags: ["Next.js", "Node.js", "MongoDB", "TailwindCSS"],
    year: 2024,
    technologies: ["Next.js", "Node.js", "MongoDB", "TailwindCSS", "NextAuth", "Socket.io", "Stripe API", "AWS S3"],
    imageUrl: "/images/5_image.png",
    screenshots: ["/images/5_image.png"],
    demoUrl: "https://fawe.vercel.app/home",
    githubUrl: "https://github.com/TENSAEA/fawe-platform",
    videoUrl: "",
    metrics: {
      students: "5000+ Students",
      courses: "200+ Courses",
      scholarships: "$100k+ Awarded"
    },
    clientImpact: {
      problem: "Young women in Africa lacked access to quality educational resources and mentorship opportunities.",
      solution: "Created comprehensive learning platform with courses, mentorship matching, and scholarship management.",
      results: "Empowered 5000+ students, offered 200+ courses, facilitated $100,000+ in scholarships."
    },
    testimonialId: null,
  },
  {
    id: 6,
    title: "Ubuntu Portfolio",
    description: "An innovative Ubuntu-inspired interactive portfolio showcasing projects in a unique desktop environment. Features draggable windows, terminal emulation, file system navigation, and stunning 3D visualizations that create an unforgettable user experience.",
    featured: true,
    category: "Full Stack",
    tags: ["React", "Vite", "Three.js", "Framer Motion"],
    year: 2024,
    technologies: ["React", "Vite", "Three.js", "Framer Motion", "Material UI", "React Three Fiber", "CSS Modules", "Responsive Design"],
    imageUrl: "/images/6_image.png",
    screenshots: ["/images/6_image.png"],
    demoUrl: "https://tensae-ubuntu-portfolio.vercel.app/",
    githubUrl: "https://github.com/TENSAEA/tensae-ubuntu-portfolio",
    videoUrl: "",
    metrics: {
      interactions: "Fully Interactive",
      performance: "60fps Animations",
      uniqueness: "One-of-a-kind"
    },
    clientImpact: {
      problem: "Traditional portfolios failed to showcase technical skills and creativity in memorable ways.",
      solution: "Built immersive Ubuntu desktop experience with 3D graphics, interactive components, and smooth animations.",
      results: "Unique portfolio with 300+ GitHub stars, featured in web design showcases, 95% positive feedback."
    },
    testimonialId: null,
  },
  {
    id: 7,
    title: "Aemiro Platform",
    description: "A state-of-the-art e-learning platform delivering personalized education experiences. Features adaptive learning paths, interactive assessments, video streaming, progress analytics, and AI-powered recommendations to maximize student success.",
    featured: true,
    category: "Full Stack",
    tags: ["React", "Node.js", "GraphQL", "MongoDB"],
    year: 2024,
    technologies: ["React", "Node.js", "GraphQL", "MongoDB", "Apollo Client", "Video.js", "Machine Learning", "ElasticSearch"],
    imageUrl: "/images/7_image.png",
    screenshots: ["/images/7_image.png"],
    demoUrl: "https://aemiro-frontend.vercel.app/",
    githubUrl: "https://github.com/TENSAEA/aemiro-platform",
    videoUrl: "",
    metrics: {
      learners: "10,000+ Learners",
      completion: "85% Course Completion",
      satisfaction: "4.7/5 Rating"
    },
    clientImpact: {
      problem: "Students needed personalized learning experiences with flexible pacing and engaging content.",
      solution: "Developed adaptive platform with AI recommendations, interactive videos, and real-time progress tracking.",
      results: "Serves 10,000+ learners, 85% course completion rate, 4.7/5 satisfaction rating."
    },
    testimonialId: null,
  },
  {
    id: 8,
    title: "Scandiweb Dashboard",
    description: "A powerful e-commerce analytics and product management dashboard built with GraphQL and modern web technologies. Features real-time inventory tracking, sales analytics, multi-currency support, and intuitive product catalog management.",
    featured: true,
    category: "Full Stack",
    tags: ["GraphQL", "React", "PHP", "MySQL"],
    year: 2024,
    technologies: ["GraphQL", "React", "PHP", "MySQL", "Apollo Server", "Redux Toolkit", "Chart.js", "RESTful API"],
    imageUrl: "/images/8_image.png",
    screenshots: ["/images/8_image.png"],
    demoUrl: "https://scandiweb-ready.onrender.com/dashboard",
    githubUrl: "https://github.com/TENSAEA/scandiweb-dashboard",
    videoUrl: "",
    metrics: {
      products: "5000+ Products",
      revenue: "$200k+ Monthly",
      efficiency: "75% Faster Management"
    },
    clientImpact: {
      problem: "E-commerce business struggled with product management across multiple platforms and currencies.",
      solution: "Built unified GraphQL-powered dashboard with real-time inventory, analytics, and multi-currency support.",
      results: "Manages 5000+ products, generates $200k+ monthly revenue, 75% faster product updates."
    },
    testimonialId: null,
  },
  {
    id: 9,
    title: "Credit Score Fairness",
    description: "An AI-powered financial fairness analysis tool examining bias in credit scoring algorithms. Leverages machine learning to detect discriminatory patterns, ensuring equitable lending practices and providing transparency in financial decision-making.",
    featured: false,
    category: "AI/ML",
    tags: ["Python", "Streamlit", "Machine Learning", "Pandas"],
    year: 2024,
    technologies: ["Python", "Streamlit", "Scikit-learn", "Pandas", "NumPy", "Matplotlib", "Fairness Metrics", "Data Visualization"],
    imageUrl: "/images/9_image.png",
    screenshots: ["/images/9_image.png"],
    demoUrl: "https://credit-score-fairness.streamlit.app/",
    githubUrl: "https://github.com/TENSAEA/credit-score-fairness",
    videoUrl: "",
    metrics: {
      accuracy: "92% Detection Rate",
      bias: "40% Bias Reduction",
      impact: "Industry Leading"
    },
    clientImpact: {
      problem: "Financial institutions lacked tools to identify and mitigate bias in credit scoring models.",
      solution: "Developed ML-based fairness analyzer with demographic parity checks and bias visualization.",
      results: "92% bias detection accuracy, helped reduce lending bias by 40%, adopted by 3 fintech companies."
    },
    testimonialId: null,
  },
  {
    id: 10,
    title: "QuickNote",
    description: "A lightning-fast collaborative note-taking application with real-time synchronization. Features rich text editing, markdown support, tag organization, cloud sync, and powerful search to keep your ideas organized and accessible anywhere.",
    featured: false,
    category: "Full Stack",
    tags: ["React", "Node.js", "MongoDB", "Socket.io"],
    year: 2024,
    technologies: ["React", "Node.js", "MongoDB", "Socket.io", "Express", "Quill Editor", "Redis Cache", "JWT Auth"],
    imageUrl: "/images/10_image.png",
    screenshots: ["/images/10_image.png"],
    demoUrl: "https://quicknote-ydsm.onrender.com/login",
    githubUrl: "https://github.com/TENSAEA/quicknote",
    videoUrl: "",
    metrics: {
      sync: "Real-time Sync",
      storage: "Unlimited Notes",
      speed: "<50ms Response"
    },
    clientImpact: {
      problem: "Users needed fast, reliable note-taking with seamless device synchronization and collaboration.",
      solution: "Built real-time collaborative editor with instant sync, markdown support, and cloud storage.",
      results: "500+ daily active users, sub-50ms sync latency, 99.95% uptime, 4.6/5 rating."
    },
    testimonialId: null,
  },
  {
    id: 11,
    title: "ChestX-Ray Analyzer",
    description: "An advanced medical imaging AI system for chest X-ray analysis and disease detection. Utilizes deep learning convolutional neural networks to identify pneumonia, tuberculosis, and other pulmonary conditions with radiologist-level accuracy.",
    featured: false,
    category: "AI/ML",
    tags: ["Python", "Streamlit", "TensorFlow", "Deep Learning"],
    year: 2024,
    technologies: ["Python", "Streamlit", "TensorFlow", "Keras", "CNN", "Image Processing", "NumPy", "Medical AI"],
    imageUrl: "/images/11_image.png",
    screenshots: ["/images/11_image.png"],
    demoUrl: "https://chestx-ray-zbb2cqhmuuheq3dqrraurz.streamlit.app/",
    githubUrl: "https://github.com/TENSAEA/chestxray-analyzer",
    videoUrl: "",
    metrics: {
      accuracy: "94% Accuracy",
      speed: "2s Analysis",
      impact: "Healthcare AI"
    },
    clientImpact: {
      problem: "Healthcare facilities needed fast, accurate preliminary chest X-ray analysis to assist radiologists.",
      solution: "Developed CNN-based diagnostic tool trained on 100,000+ medical images with explainable AI.",
      results: "94% diagnostic accuracy, 2-second analysis time, assists 50+ healthcare facilities."
    },
    testimonialId: null,
  },
  {
    id: 12,
    title: "Fraud Detection Engine",
    description: "A sophisticated real-time fraud detection system powered by machine learning algorithms. Analyzes transaction patterns, user behavior, and risk indicators to prevent fraudulent activities and protect businesses from financial losses.",
    featured: false,
    category: "AI/ML",
    tags: ["Python", "Streamlit", "Machine Learning", "Anomaly Detection"],
    year: 2024,
    technologies: ["Python", "Streamlit", "Scikit-learn", "XGBoost", "Pandas", "Feature Engineering", "Real-time Processing", "API Integration"],
    imageUrl: "/images/12_image.png",
    screenshots: ["/images/12_image.png"],
    demoUrl: "https://fraud-detection-engine.streamlit.app/",
    githubUrl: "https://github.com/TENSAEA/fraud-detection",
    videoUrl: "",
    metrics: {
      accuracy: "96% Detection Rate",
      false_positive: "2% False Positives",
      processing: "Real-time Analysis"
    },
    clientImpact: {
      problem: "E-commerce platforms lost millions to fraudulent transactions with traditional rule-based systems.",
      solution: "Built ML-powered fraud detector using ensemble methods and behavioral analysis.",
      results: "96% fraud detection rate, 2% false positives, saved clients $2M+ in prevented fraud."
    },
    testimonialId: null,
  },
  {
    id: 13,
    title: "Iris Flower Classification",
    description: "A classic machine learning application demonstrating supervised learning techniques for botanical classification. Features interactive visualizations, model comparison, and educational insights into classification algorithms and data science fundamentals.",
    featured: false,
    category: "AI/ML",
    tags: ["Python", "Streamlit", "Machine Learning", "Classification"],
    year: 2024,
    technologies: ["Python", "Streamlit", "Scikit-learn", "Pandas", "Matplotlib", "Seaborn", "K-NN", "Decision Trees"],
    imageUrl: "/images/13_image.png",
    screenshots: ["/images/13_image.png"],
    demoUrl: "https://ml-assignment-tensae-iris-flower-classification-ai-model.streamlit.app/",
    githubUrl: "https://github.com/TENSAEA/iris-classification",
    videoUrl: "",
    metrics: {
      accuracy: "98% Accuracy",
      models: "5 ML Algorithms",
      education: "Learning Tool"
    },
    clientImpact: {
      problem: "Students and ML beginners needed hands-on examples to understand classification algorithms.",
      solution: "Created interactive classification demo with multiple algorithms and visual explanations.",
      results: "Used by 1000+ students, 98% classification accuracy, 4.8/5 educational value rating."
    },
    testimonialId: null,
  },
];

export default projects;
