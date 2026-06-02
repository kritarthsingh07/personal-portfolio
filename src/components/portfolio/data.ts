import {
  Code2, Brain, Database, Globe, Cloud, Wrench, BarChart3,
  type LucideIcon,
} from "lucide-react";

export const profile = {
  name: "Kritarth Singh",
  role: "AI & Machine Learning Engineering Student",
  location: "Kanpur, India",
  email: "kritarthsingh87@gmail.com",
  phone: "+91 87072 47499",
  github: "https://github.com/kritarthsingh07",  // TODO: replace with your real GitHub username
  linkedin: "https://www.linkedin.com/in/kritarth-singh-/",  // TODO: replace with your real LinkedIn URL
  resume: "/Kritarth-Singh-Resume.pdf",
  roles: [
    "AI Enthusiast",
    "Machine Learning Developer",
    "Open Source Contributor",
    "Future AI Engineer",
  ],
};

export const about = `I'm a second-year B.E. Computer Science (AI & ML) student at Chandigarh University, fascinated by how intelligent systems can quietly reshape everyday life. My focus sits at the intersection of machine learning research and software craft — building real, dependable products powered by models I deeply understand.

I learn by shipping. From full-stack systems to data-driven experiments, I love translating messy problems into clean, useful software. Outside coursework, I contribute to open-source, sharpen my fundamentals through hackathons, and chase opportunities like Social Summer of Code and industry training programs to grow alongside engineers I admire.`;

export type SkillGroup = { title: string; icon: LucideIcon; items: { name: string; level: number }[] };

export const skills: SkillGroup[] = [
  { title: "Programming Languages", icon: Code2, items: [
    { name: "Python", level: 88 }, { name: "Java", level: 82 },
    { name: "C++", level: 75 }, { name: "TypeScript", level: 70 },
  ]},
  { title: "AI & Machine Learning", icon: Brain, items: [
    { name: "Scikit-learn", level: 78 }, { name: "TensorFlow", level: 70 },
    { name: "PyTorch", level: 65 }, { name: "NLP Foundations", level: 72 },
  ]},
  { title: "Data Science", icon: BarChart3, items: [
    { name: "NumPy / Pandas", level: 85 }, { name: "Matplotlib", level: 78 },
    { name: "Data Cleaning", level: 80 }, { name: "Jupyter", level: 88 },
  ]},
  { title: "Web Development", icon: Globe, items: [
    { name: "React.js", level: 82 }, { name: "Node.js", level: 72 },
    { name: "HTML / CSS", level: 90 }, { name: "Tailwind", level: 80 },
  ]},
  { title: "Databases", icon: Database, items: [
    { name: "MySQL", level: 80 }, { name: "PostgreSQL", level: 68 },
    { name: "MongoDB", level: 65 },
  ]},
  { title: "Cloud Technologies", icon: Cloud, items: [
    { name: "Google Cloud", level: 60 }, { name: "AWS Basics", level: 55 },
    { name: "Vercel / Netlify", level: 80 },
  ]},
  { title: "Developer Tools", icon: Wrench, items: [
    { name: "Git & GitHub", level: 88 }, { name: "VS Code", level: 92 },
    { name: "Linux", level: 70 }, { name: "Postman", level: 75 },
  ]},
];

export const projects = [
  {
    title: "Student Management System",
    description: "End-to-end platform for managing student records with secure CRUD, role-based access, and a polished admin dashboard for academic operations.",
    tags: ["React", "Node.js", "MySQL", "REST API"],
    highlights: ["CRUD across registration, updates & deletion", "Validated, secure data flows", "Responsive admin UI"],
    accent: "from-[#2563EB] to-[#7C3AED]",
    github: "https://github.com/KritarthSingh/student-management-system",  // TODO: replace with your real repo URL
    demo: "#",
  },
  {
    title: "Library Management System",
    description: "Java + MySQL application that automates cataloging, issuing, and returns with transaction-safe operations and clean, modular architecture.",
    tags: ["Java", "MySQL", "JDBC", "OOP"],
    highlights: ["Transactional issue/return logic", "Modular OOP design", "Schema-first data model"],
    accent: "from-[#7C3AED] to-[#06B6D4]",
    github: "https://github.com/KritarthSingh/library-management-system",  // TODO: replace with your real repo URL
    demo: "#",
  },
  {
    title: "Smart Home & Intelligent Transport — Case Study",
    description: "Research-driven case study on smart home appliances and the role of AI in intelligent transportation systems, mapping real-world ML use cases.",
    tags: ["AI Research", "IoT", "Systems Thinking"],
    highlights: ["Surveyed modern ML architectures", "Mapped real-world deployments", "Authored technical brief"],
    accent: "from-[#06B6D4] to-[#10B981]",
    github: "https://github.com/KritarthSingh/smart-home-case-study",  // TODO: replace with your real repo URL
    demo: "#",
  },
];

export const certifications = [
  { title: "IBM Industrial Training", issuer: "IBM", year: "2025", color: "#2563EB", pdf: "/certificates/ibm-industrial-training.pdf" },
  { title: "Python for Data Science", issuer: "Coursera", year: "2025", color: "#7C3AED", pdf: "/certificates/python-for-data-science.pdf" },
  { title: "Google Cloud Fundamentals", issuer: "Google", year: "2025", color: "#06B6D4", pdf: "/certificates/google-cloud-fundamentals.pdf" },
  { title: "Machine Learning Foundations", issuer: "Coursera", year: "2025", color: "#10B981", pdf: "/certificates/machine-learning-foundations.pdf" },
  { title: "Git & GitHub Essentials", issuer: "GitHub", year: "2024", color: "#2563EB", pdf: "/certificates/git-github-essentials.pdf" },
  { title: "Java Programming", issuer: "Online Cert.", year: "2024", color: "#7C3AED", pdf: "/certificates/java-programming.pdf" },
];

export const education = [
  {
    degree: "B.E. Computer Science (AI & ML)",
    school: "Chandigarh University, Gharuan",
    period: "2024 — 2028",
    score: "7.9 CGPA",
    courses: ["Data Structures", "Machine Learning", "DBMS", "Operating Systems", "Algorithms"],
  },
  {
    degree: "Senior Secondary (XII)",
    school: "Pt. Deen Dayal Upadhyaya S.D. Vidyalaya, Kanpur",
    period: "2022 — 2023",
    score: "86%",
    courses: ["Physics", "Chemistry", "Mathematics", "Computer Science"],
  },
  {
    degree: "Secondary (X)",
    school: "Pt. Deen Dayal Upadhyaya S.D. Vidyalaya, Kanpur",
    period: "2020 — 2021",
    score: "84%",
    courses: ["Mathematics", "Science", "Computer Applications"],
  },
];

export const experience = [
  {
    title: "Social Summer of Code — Community Track",
    org: "Open Source Program",
    period: "Summer 2025",
    body: "Contributing to open-source projects, improving documentation, and collaborating with maintainers across time zones.",
  },
  {
    title: "Social Internship — Rural Community Development",
    org: "Kanpur, India",
    period: "Jun — Jul 2025",
    body: "Supported social-awareness initiatives and helped organize educational programs for residents across rural Kanpur.",
  },
  {
    title: "IBM Industrial Training",
    org: "IBM",
    period: "2025",
    body: "Completed technical modules and hands-on labs aligned with industry engineering practices.",
  },
  {
    title: "College Coding Hackathon",
    org: "Chandigarh University",
    period: "Oct 2025",
    body: "Solved logic-heavy programming challenges in a fast-paced team setting under tight constraints.",
  },
];

export const achievements = [
  { value: 6, label: "Certifications Earned", suffix: "+" },
  { value: 12, label: "Projects Built", suffix: "+" },
  { value: 20, label: "Technologies Learned", suffix: "+" },
  { value: 30, label: "Open-Source Contributions", suffix: "+" },
];