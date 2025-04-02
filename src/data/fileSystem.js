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
      url: "https://drive.google.com/file/d/1mcz4XxqXwf1X71wnr5Y6zGc-kASGh_bN/view?usp=sharing",
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
      name: "Project 1",
      type: "folder",
      path: "/home/user/Projects/Project 1",
    },
    {
      name: "Project 2",
      type: "folder",
      path: "/home/user/Projects/Project 2",
    },
    {
      name: "Project 3",
      type: "folder",
      path: "/home/user/Projects/Project 3",
    },
  ],
  "/home/user/Projects/Project 1": [
    {
      name: "README.md",
      type: "file",
      path: "/home/user/Projects/Project 1/README.md",
      content:
        "# Project 1\n\nLira Workspace is a MERN stack-based application designed to help companies assign tasks to employees and track their completion status. It leverages Redux Toolkit for efficient state management and a REST API for seamless backend communication, ensuring smooth task allocation, monitoring, and progress tracking across teams. This project aims to streamline workflow management and improve productivity within organizations.",
    },
    {
      name: "Demo",
      type: "link",
      path: "/home/user/Projects/Project 1/Demo",
      url: "https://lira-workspace.onrender.com/",
    },
  ],
  "/home/user/Projects/Project 2": [
    {
      name: "README.md",
      type: "file",
      path: "/home/user/Projects/Project 2/README.md",
      content:
        "# Project 2\n\nNest_Net is a Building Management System designed as an internal solution for building owners to efficiently manage and control tenant-related operations. Built with PHP and MySQL, the system enables owners to track payments, monitor building activities, and manage all essential aspects of building administration. This project provides a comprehensive and user-friendly platform to streamline property management and enhance operational efficiency.",
    },
    {
      name: "Demo",
      type: "link",
      path: "/home/user/Projects/Project 2/Demo",
      url: "http://nest-net-building.infinityfreeapp.com/Building/html/dashboard/auth/sign-in.php?i=1",
    },
  ],
  "/home/user/Projects/Project 3": [
    {
      name: "README.md",
      type: "file",
      path: "/home/user/Projects/Project 3/README.md",
      content:
        "# Project 3\n\nScandiweb Ready is a MERN Stack-based web application designed to prepare users for Scandiweb-related challenges, featuring both GraphQL and REST API integration. The platform includes a dynamic ToDo CRUD app powered by GraphQL, allowing users to manage tasks efficiently. Additionally, it offers a unique timezone alignment feature to ensure users' local timezones are synchronized with the system, enhancing usability and global accessibility.",
    },
    {
      name: "Demo",
      type: "link",
      path: "/home/user/Projects/Project 3/Demo",
      url: "https://scandiweb-ready.onrender.com/",
    },
  ],
  "/home/user/Projects/Project 4": [
    {
      name: "README.md",
      type: "file",
      path: "/home/user/Projects/Project 4/README.md",
      content:
        "# Project 4\n\nDigital Ekub is a MERN Stack-based application designed to digitize Ethiopia's traditional saving system, 'Ekub.' The platform modernizes the process by enabling users to manage and participate in savings groups online, streamlining contributions, withdrawals, and tracking. By leveraging technology, this project aims to make the traditional Ekub system more accessible, efficient, and transparent for users while preserving its cultural essence.",
    },
    {
      name: "Demo",
      type: "link",
      path: "/home/user/Projects/Project 4/Demo",
      url: "https://digital-equb-frontend-new.onrender.com/",
    },
  ],
  "/home/user/Projects/Project 5": [
    {
      name: "README.md",
      type: "file",
      path: "/home/user/Projects/Project 5/README.md",
      content:
        "# Project 5\n\nThis Ecommerce project is built using PHP for the backend, React for the frontend, and leverages GraphQL for efficient data queries. It features authentication and authorization to ensure secure access, allowing users to add products, manage a shopping cart, and perform searches. With a focus on scalability, the platform is designed to incorporate additional features in the near future, enhancing its functionality and user experience.",
    },
    {
      name: "Demo",
      type: "link",
      path: "/home/user/Projects/Project 5/Demo",
      url: "https://ecommercetensae.infinityfreeapp.com/login",
    },
  ],
  "/home/user/Projects/Project 6": [
    {
      name: "README.md",
      type: "file",
      path: "/home/user/Projects/Project 6/README.md",
      content:
        "# Project 6\n\nThis project is a personal portfolio built using React, designed to showcase my skills, projects, and experiences in a modern and interactive way. The portfolio highlights my expertise in web development, providing a clean and responsive user interface to engage visitors and effectively communicate my professional journey.",
    },
    {
      name: "Demo",
      type: "link",
      path: "/home/user/Projects/Project 6/Demo",
      url: "https://tensae-dev-portfolio.onrender.com/home",
    },
  ],
  "/home/user/Projects/Project 7": [
    {
      name: "README.md",
      type: "file",
      path: "/home/user/Projects/Project 7/README.md",
      content:
        "# Project 7\n\nThis project is a WordPress-based website developed for a technology club, catering to university students. With nearly 700 active users, the platform offers a variety of features tailored to the needs of the club members, such as event management, resource sharing, and collaboration tools. The site serves as a hub for students to engage with technology-related activities, fostering innovation and community within the university.",
    },
    {
      name: "Demo",
      type: "link",
      path: "/home/user/Projects/Project 7/Demo",
      url: "https://technologyofsocialscienceclubaau.wuaze.com/?i=1",
    },
  ],
};

export default fileSystem;
