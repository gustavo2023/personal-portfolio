// Single source of truth for the page, mirroring SECTIONS.md.
// Structured so project detail pages and a blog can mount on these slugs later.

export const person = {
  name: "Gustavo Gutierrez",
  firstName: "Gustavo",
  lastName: "Gutierrez",
  role: "Software Developer",
  focus: "Backend Engineering",
  location: "Margarita, Venezuela",
  photo: "/assets/hero-image.png",
  photoAlt: "Portrait of Gustavo Gutierrez",
  tagline:
    "I build the backend systems institutions actually run on secure APIs, data pipelines, and the deployments behind them.",
  availability: "Open to remote backend / full-stack roles",
};

export const about = {
  bio: "I am a Software Developer who specializes in building robust, secure backend architectures, end-to-end data pipelines, and scalable REST APIs using Python, FastAPI, and PostgreSQL. Experienced in containerization and cloud deployments, I focus on automating workflows and delivering production-ready applications that solve real-world operational bottlenecks.",
  stack: [
    "Python",
    "JavaScript",
    "TypeScript",
    "SQL",
    "HTML/CSS",
    "FastAPI",
    "React.js",
    "PostgreSQL",
    "Docker",
    "Docker Compose",
    "AWS (S3)",
    "Git",
  ],
};

export const links = {
  github: { label: "github.com/gustavo2023", url: "https://github.com/gustavo2023" },
  linkedin: {
    label: "linkedin.com/in/gustavo-gutierrez-dev",
    url: "https://www.linkedin.com/in/gustavo-gutierrez-dev/",
  },
  email: {
    label: "gustavoegutierrezg23@gmail.com",
    url: "mailto:gustavoegutierrezg23@gmail.com",
  },
};

export const experience = [
  {
    id: "guayamuri-contract",
    role: "Backend Software Engineer (Contract)",
    company: "Colegio Guayamuri",
    period: "May 2026 – Aug 2026",
    proof: [
      "Designed and developed the backend and DevOps infrastructure for a centralized faculty evaluation platform using Python, FastAPI, PostgreSQL, and TypeScript/React.",
      "Streamlined performance reviews for 200+ teachers across 9 core institutional users.",
      "Built custom analytical endpoints generating downloadable PDF and Excel reports for institutional directors and department evaluators.",
      "Secured high-sensitivity evaluation routes with JWT authentication and strict rate-limiting to ensure tamper-proof scoring and data integrity.",
      "Containerized services using Docker Compose and managed production cloud deployments on Railway.",
    ],
  },
  {
    id: "guayamuri-intern",
    role: "Software Engineering Intern",
    company: "Colegio Guayamuri",
    period: "Jan 2026 – Apr 2026",
    proof: [
      "Architected and deployed a full-stack REST API admissions platform using Python, FastAPI, React.js, and PostgreSQL.",
      "Replaced a manual spreadsheet workflow, increasing application processing capacity from 150 to 200 applicants annually within 4 months.",
      "Implemented role-based access control (RBAC) and JWT authentication for 8 administrative staff members while integrating automated interview email notifications.",
      "Configured production cloud hosting on Railway and AWS S3 buckets for document uploads and automated SQL database backups.",
      "Engineered endpoint rate-limiting on public application forms and authentication routes to prevent abuse.",
    ],
  },
];

export const projects = [
  {
    slug: "ecommerce-etl-pipeline",
    name: "E-Commerce ETL Pipeline",
    kind: "Modular Data Ingestion & Transformation Pipeline",
    date: "July 2026",
    overview:
      "Architected a modular end-to-end ETL pipeline in Python to automatically extract, clean, and structure raw e-commerce product data into standardized schemas for downstream analysis.",
    engineering:
      "Engineered automated data transformation scripts featuring robust error handling and data validation to reliably parse complex product attributes and pricing metadata.",
    stack: ["Python", "ETL", "Data Transformation", "Data Pipelines"],
    url: "https://github.com/gustavo2023/ecommerce-etl-pipeline",
  },
  {
    slug: "static-site-generator",
    name: "Static Site Generator",
    kind: "Object-Oriented Markdown-to-HTML Compilation Tool",
    date: "June 2026",
    overview:
      "Built a custom Markdown-to-HTML static site generator from scratch in Python, leveraging object-oriented programming (OOP) principles to parse syntax into an HTML tree structure.",
    engineering:
      "Implemented recursive directory-tree traversal algorithms to dynamically process hierarchical source folders and Markdown documents into production-ready HTML pages.",
    stack: ["Python", "OOP", "Algorithms", "Markdown/HTML Parsing"],
    url: "https://github.com/gustavo2023/static-site-generator",
  },
];

export const cv = {
  label: "Download CV",
  // Place the résumé PDF at this public path and the Download CV buttons will work.
  url: "/assets/cv.pdf",
};
