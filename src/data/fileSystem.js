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
      url: "https://drive.google.com/file/d/1E5MhaXGio7YeNkhcBhZdxIZg-HCpRzyt/view?usp=sharing",
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
      content: "# Project 1\n\nDescription of Project 1 goes here.",
    },
    {
      name: "Demo",
      type: "link",
      path: "/home/user/Projects/Project 1/Demo",
      url: "https://example.com/project1",
    },
  ],
  "/home/user/Projects/Project 2": [
    {
      name: "README.md",
      type: "file",
      path: "/home/user/Projects/Project 2/README.md",
      content: "# Project 2\n\nDescription of Project 2 goes here.",
    },
    {
      name: "Demo",
      type: "link",
      path: "/home/user/Projects/Project 2/Demo",
      url: "https://example.com/project2",
    },
  ],
  "/home/user/Projects/Project 3": [
    {
      name: "README.md",
      type: "file",
      path: "/home/user/Projects/Project 3/README.md",
      content: "# Project 3\n\nDescription of Project 3 goes here.",
    },
    {
      name: "Demo",
      type: "link",
      path: "/home/user/Projects/Project 3/Demo",
      url: "https://example.com/project3",
    },
  ],
};

export default fileSystem;
