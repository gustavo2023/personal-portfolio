import {
  SiPython,
  SiJavascript,
  SiTypescript,
  SiHtml5,
  SiCss,
  SiFastapi,
  SiReact,
  SiPostgresql,
  SiDocker,
  SiGit,
  SiMarkdown,
} from "react-icons/si";
import {
  FaAws,
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaDownload,
  FaDatabase,
  FaMapMarkerAlt,
} from "react-icons/fa";

const techIcons = {
  Python: SiPython,
  JavaScript: SiJavascript,
  TypeScript: SiTypescript,
  SQL: FaDatabase,
  "HTML/CSS": SiHtml5,
  "HTML / CSS": SiHtml5,
  CSS: SiCss,
  FastAPI: SiFastapi,
  "React.js": SiReact,
  React: SiReact,
  PostgreSQL: SiPostgresql,
  Postgres: SiPostgresql,
  Docker: SiDocker,
  "Docker Compose": SiDocker,
  "AWS (S3)": FaAws,
  AWS: FaAws,
  S3: FaAws,
  Git: SiGit,
  Markdown: SiMarkdown,
  "Markdown/HTML Parsing": SiMarkdown,
};

const linkIcons = {
  github: FaGithub,
  linkedin: FaLinkedin,
  email: FaEnvelope,
  download: FaDownload,
};

export default function DevIcon({
  name,
  kind = "tech",
  size = 18,
  className = "",
}) {
  const map = kind === "link" ? linkIcons : techIcons;
  const Icon = map[name];
  if (!Icon) return null;
  return <Icon size={size} className={className} />;
}

export const GithubIcon = FaGithub;
export const LinkedinIcon = FaLinkedin;
export const EmailIcon = FaEnvelope;
export const DownloadIcon = FaDownload;
export const LocationIcon = FaMapMarkerAlt;
