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
  return <Icon size={size} className={className} role="img" aria-label={`${name} icon`} />;
}

export const GithubIcon = (props) => <FaGithub role="img" aria-label="GitHub icon" {...props} />;
export const LinkedinIcon = (props) => <FaLinkedin role="img" aria-label="LinkedIn icon" {...props} />;
export const EmailIcon = (props) => <FaEnvelope role="img" aria-label="Email icon" {...props} />;
export const DownloadIcon = (props) => <FaDownload role="img" aria-label="Download icon" {...props} />;
export const LocationIcon = (props) => <FaMapMarkerAlt role="img" aria-label="Location icon" {...props} />;
