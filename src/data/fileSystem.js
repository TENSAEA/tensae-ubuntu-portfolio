const fileSystem = {
  "/home/user": [
    { name: "Documents", type: "folder", path: "/home/user/Documents" },
    { name: "Projects", type: "folder", path: "/home/user/Projects" },
    {
      name: "README.txt",
      type: "file",
      path: "/home/user/README.txt",
      content:
        "Welcome to my portfolio! Click on Documents to see my resume or Projects to see my work.",
    },
  ],
  "/home/user/Documents": [
    {
      name: "Resume.pdf",
      type: "pdf",
      path: "/home/user/Documents/Resume.pdf",
      url: "https://drive.google.com/file/d/1o5noe_Ni4T5E2Gq10ZGSh3fpW0NiwVnK/view?usp=sharing",
    },
    {
      name: "Cover Letter.pdf",
      type: "pdf",
      path: "/home/user/Documents/Cover Letter.pdf",
      url: "/cover-letter.pdf",
    },
  ],
  "/home/user/Projects": [
    {
      name: "Lira Workspace",
      type: "folder",
      path: "/home/user/Projects/Lira Workspace",
    },
    {
      name: "Nest_Net Building Management",
      type: "folder",
      path: "/home/user/Projects/Nest_Net Building Management",
    },
    {
      name: "Scandiweb Ready",
      type: "folder",
      path: "/home/user/Projects/Scandiweb Ready",
    },
    {
      name: "Digital Ekub",
      type: "folder",
      path: "/home/user/Projects/Digital Ekub",
    },
    {
      name: "Ecommerce Platform",
      type: "folder",
      path: "/home/user/Projects/Ecommerce Platform",
    },
    {
      name: "Developer Portfolio",
      type: "folder",
      path: "/home/user/Projects/Developer Portfolio",
    },
    {
      name: "Technology Club Website",
      type: "folder",
      path: "/home/user/Projects/Technology Club Website",
    },
  ],
  "/home/user/Projects/Lira Workspace": [
    {
      name: "README.md",
      type: "file",
      path: "/home/user/Projects/Lira Workspace/README.md",
      content:
        "# Lira Workspace\n\nLira Workspace is a MERN stack-based application designed to help companies assign tasks to employees and track their completion status. It leverages Redux Toolkit for efficient state management and a REST API for seamless backend communication, ensuring smooth task allocation, monitoring, and progress tracking across teams. This project aims to streamline workflow management and improve productivity within organizations.",
    },
    {
      name: "Demo",
      type: "link",
      path: "/home/user/Projects/Lira Workspace/Demo",
      url: "https://lira-workspace.onrender.com/",
    },
    {
      name: "GitHub",
      type: "link",
      path: "/home/user/Projects/Lira Workspace/GitHub",
      url: "https://github.com/TENSAEA/Lira-Workspace",
    },
    {
      name: "Screenshot.jpg",
      type: "image",
      path: "/home/user/Projects/Lira Workspace/Screenshot.jpg",
      url: "https://drive.google.com/uc?export=view&id=1HSheTSxC2L3IzxJsZ2_I8k5C_cZ5XpPv",
    },
  ],
  "/home/user/Projects/Nest_Net Building Management": [
    {
      name: "README.md",
      type: "file",
      path: "/home/user/Projects/Nest_Net Building Management/README.md",
      content:
        "# Nest_Net Building Management\n\nNest_Net is a Building Management System designed as an internal solution for building owners to efficiently manage and control tenant-related operations. Built with PHP and MySQL, the system enables owners to track payments, monitor building activities, and manage all essential aspects of building administration. This project provides a comprehensive and user-friendly platform to streamline property management and enhance operational efficiency.",
    },
    {
      name: "Demo",
      type: "link",
      path: "/home/user/Projects/Nest_Net Building Management/Demo",
      url: "http://nest-net-building.infinityfreeapp.com/Building/html/dashboard/auth/sign-in.php?i=1",
    },
    {
      name: "GitHub",
      type: "link",
      path: "/home/user/Projects/Nest_Net Building Management/GitHub",
      url: "https://github.com/TENSAEA/Nest_Net",
    },
    {
      name: "Screenshot.jpg",
      type: "image",
      path: "/home/user/Projects/Nest_Net Building Management/Screenshot.jpg",
      url: "https://drive.google.com/uc?export=view&id=1YkJF-qpZGuB30rvs_YB_JiLDQ-hAfC_H",
    },
  ],
  "/home/user/Projects/Scandiweb Ready": [
    {
      name: "README.md",
      type: "file",
      path: "/home/user/Projects/Scandiweb Ready/README.md",
      content:
        "# Scandiweb Ready\n\nScandiweb Ready is a MERN Stack-based web application designed to prepare users for Scandiweb-related challenges, featuring both GraphQL and REST API integration. The platform includes a dynamic ToDo CRUD app powered by GraphQL, allowing users to manage tasks efficiently. Additionally, it offers a unique timezone alignment feature to ensure users' local timezones are synchronized with the system, enhancing usability and global accessibility.",
    },
    {
      name: "Demo",
      type: "link",
      path: "/home/user/Projects/Scandiweb Ready/Demo",
      url: "https://scandiweb-ready.onrender.com/",
    },
    {
      name: "GitHub",
      type: "link",
      path: "/home/user/Projects/Scandiweb Ready/GitHub",
      url: "https://github.com/TENSAEA/scandiweb-ready",
    },
    {
      name: "Screenshot.jpg",
      type: "image",
      path: "/home/user/Projects/Scandiweb Ready/Screenshot.jpg",
      url: "https://drive.google.com/uc?export=view&id=15gHF9MzxdZa4JDU4WGYwIP4hMll1hLYP",
    },
  ],
  "/home/user/Projects/Digital Ekub": [
    {
      name: "README.md",
      type: "file",
      path: "/home/user/Projects/Digital Ekub/README.md",
      content:
        "# Digital Ekub\n\nDigital Ekub is a MERN Stack-based application designed to digitize Ethiopia's traditional saving system, 'Ekub.' The platform modernizes the process by enabling users to manage and participate in savings groups online, streamlining contributions, withdrawals, and tracking. By leveraging technology, this project aims to make the traditional Ekub system more accessible, efficient, and transparent for users while preserving its cultural essence.",
    },
    {
      name: "Demo",
      type: "link",
      path: "/home/user/Projects/Digital Ekub/Demo",
      url: "https://digital-equb-frontend-new.onrender.com/",
    },
    {
      name: "GitHub",
      type: "link",
      path: "/home/user/Projects/Digital Ekub/GitHub",
      url: "https://github.com/TENSAEA/digital-ekub",
    },
    {
      name: "Screenshot.jpg",
      type: "image",
      path: "/home/user/Projects/Digital Ekub/Screenshot.jpg",
      url: "https://drive.google.com/uc?export=view&id=1gupvCHtE_hNev5kluLgrq69zH1JD-pmT",
    },
  ],
  "/home/user/Projects/Ecommerce Platform": [
    {
      name: "README.md",
      type: "file",
      path: "/home/user/Projects/Ecommerce Platform/README.md",
      content:
        "# Ecommerce Platform\n\nThis Ecommerce project is built using PHP for the backend, React for the frontend, and leverages GraphQL for efficient data queries. It features authentication and authorization to ensure secure access, allowing users to add products, manage a shopping cart, and perform searches. With a focus on scalability, the platform is designed to incorporate additional features in the near future, enhancing its functionality and user experience.",
    },
    {
      name: "Demo",
      type: "link",
      path: "/home/user/Projects/Ecommerce Platform/Demo",
      url: "https://ecommercetensae.infinityfreeapp.com/login",
    },
    {
      name: "GitHub",
      type: "link",
      path: "/home/user/Projects/Ecommerce Platform/GitHub",
      url: "https://github.com/TENSAEA/ecommerce-graphql",
    },
    {
      name: "Screenshot.jpg",
      type: "image",
      path: "/home/user/Projects/Ecommerce Platform/Screenshot.jpg",
      url: "https://drive.google.com/uc?export=view&id=1pWciIvK3GSybKy75Dsr4JJ-4e5gcvV07",
    },
  ],
  "/home/user/Projects/Developer Portfolio": [
    {
      name: "README.md",
      type: "file",
      path: "/home/user/Projects/Developer Portfolio/README.md",
      content:
        "# Developer Portfolio\n\nThis project is a personal portfolio built using React, designed to showcase my skills, projects, and experiences in a modern and interactive way. The portfolio highlights my expertise in web development, providing a clean and responsive user interface to engage visitors and effectively communicate my professional journey.",
    },
    {
      name: "Demo",
      type: "link",
      path: "/home/user/Projects/Developer Portfolio/Demo",
      url: "https://tensae-dev-portfolio.onrender.com/home",
    },
    {
      name: "GitHub",
      type: "link",
      path: "/home/user/Projects/Developer Portfolio/GitHub",
      url: "https://github.com/TENSAEA/tensae-portfolio",
    },
    {
      name: "Screenshot.jpg",
      type: "image",
      path: "/home/user/Projects/Developer Portfolio/Screenshot.jpg",
      url: "https://drive.google.com/uc?export=view&id=1irgEBrcVl_FSePBnZRCQW_VFMVhyC5sp",
    },
  ],
  "/home/user/Projects/Technology Club Website": [
    {
      name: "README.md",
      type: "file",
      path: "/home/user/Projects/Technology Club Website/README.md",
      content:
        "# Technology Club Website\n\nThis project is a WordPress-based website developed for a technology club, catering to university students. With nearly 700 active users, the platform offers a variety of features tailored to the needs of the club members, such as event management, resource sharing, and collaboration tools. The site serves as a hub for students to engage with technology-related activities, fostering innovation and community within the university.",
    },
    {
      name: "Demo",
      type: "link",
      path: "/home/user/Projects/Technology Club Website/Demo",
      url: "https://technologyofsocialscienceclubaau.wuaze.com/?i=1",
    },
    {
      name: "GitHub",
      type: "link",
      path: "/home/user/Projects/Technology Club Website/GitHub",
      url: "https://github.com/TENSAEA/tech-club-website",
    },
    {
      name: "Screenshot.jpg",
      type: "image",
      path: "/home/user/Projects/Technology Club Website/Screenshot.jpg",
      url: "https://drive.google.com/uc?export=view&id=1ncU-MCe5CwHjwFIjhff2ux-FBKLe2_ck",
    },
  ],
};

export default fileSystem;
