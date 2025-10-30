// src/content.js
export const site = {
  brand: "Paul Liu",                        // navbar label
  name: "Yangji (Paul) Liu",                // big hero title
  tagline: "New York University • B.A. Computer and Data Science",
  summary:
    "Software & hardware developer exploring computer architecture and systems. Open to entry-level internships.",
  email: "paulliu@nyu.edu",
  github: "https://github.com/YangjiLiu",
  linkedin: "https://www.linkedin.com/in/yangji-liu-39a976331/",
  location: "New York, NY",
  gpa: "3.35",

  // Static assets (put files in /public)
  avatar: "/avatar.jpg",    // optional @2x: /avatar@2x.jpg
  resumeUrl: "/resume.pdf", // put your PDF at public/resume.pdf

  education: {
    school: "New York University – College of Arts and Science",
    degree: "B.A. Computer and Data Science",
    years: "2024 – 2028 (expected)",
    coursework:
      "Coursework: Data Structure and Algorithms, OOP in C++, Linear Algebra, Calc I–III, Discrete Math, Computer Architecture and Organization, Circuits.",
  },

  projects: [
    {
      title: "EG1004 Semester-long Design Project",
      description:
        "Affiliated with NYU Tandon's EG-UY 1004 Intro to Engineering course. A building construction with Autodesk Fusion 360, 3D printing, and laser cutting. Proposed designs to reduce energy consumption and comply with LEED Gold while providing spaces for classrooms, dorms, labs, rooftop parks, and study areas.",
    },
    {
      title: "Tsinglan WEService for AP CSA Tutoring",
      description:
        "Constructed a website with articles and video tutorials and a forum for discussion dedicated to Java newbies and AP CSA learners. Enrolled in AP with WE Service, and was awarded with WE Service Recognition.",
      link: "https://tsweservice.wordpress.com",
    },
  ],

  skills: [
    "C++",
    "Python",
    "Data Structures",
    "Object-Oriented Programming",
    "Computer Architecture",
    "Linux & Git",
    "Mac & Windows Environment",
  ],

  about: {
    introTitle: "Hi, I’m Paul 👋",
    intro:
      "I’m an NYU undergraduate sophomore pursuing B.A. Computer and Data Science. My focuses are Object-Oriented Programming, Computer Architecture, and Hardware Systems. I enjoy building clean, testable modules and exploring how hardware and software choices impact performance. With the power of AI, I believe software engineering has been stronger than ever before. I’m currently seeking NYC-area internships where I can contribute to efficient programs and algorithms, as well as real-world systems, and continue learning.",
    languages: "Languages: C++, Python, Java",
    interests: "Interests: research, architecture, algorithms",
    values: "Values: clarity, reliability, and thoughtful documentation",
  },
};
