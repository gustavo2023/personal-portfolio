import { useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import { person, links, cv } from "../data/content.js";
import DevIcon, {
  GithubIcon,
  LinkedinIcon,
  EmailIcon,
  DownloadIcon,
  LocationIcon,
} from "./DevIcon.jsx";
import SplitText from "./SplitText.jsx";
import HoverDecode from "./HoverDecode.jsx";

const EASE = [0.16, 1, 0.3, 1];

function HeroTech({ name }) {
  return (
    <span className="inline-flex items-center gap-1.5">
      <DevIcon name={name} size={18} />
      {name}
    </span>
  );
}

export default function Hero() {
  const reduce = useReducedMotion();
  const [copied, setCopied] = useState(false);

  const handleEmailClick = (e) => {
    e.preventDefault();
    navigator.clipboard.writeText(links.email.url.replace("mailto:", ""));
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const rise = (delay) =>
    reduce
      ? {}
      : {
          initial: { opacity: 0, y: 24 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.9, ease: EASE, delay },
        };

  const photoMotion = reduce
    ? {}
    : {
        initial: { clipPath: "inset(6% 6% 6% 6%)", scale: 1.04 },
        animate: { clipPath: "inset(0% 0% 0% 0%)", scale: 1 },
        transition: { duration: 1.1, ease: EASE, delay: 0.15 },
      };

  return (
    <section id="top" className="border-b border-hairline">
      <div className="mx-auto grid max-w-6xl grid-cols-1 lg:grid-cols-[1.05fr_0.95fr]">
        {/* Person-led: name, role, proof, contact, and key metadata inside the first glance. */}
        <div className="flex flex-col justify-center px-6 py-20 md:px-10 md:py-28 lg:min-h-[82vh]">
          <h1 className="display text-[clamp(2.9rem,7.2vw,5.5rem)]">
            <SplitText text="Gustavo" delay={0} className="block" />
            <SplitText text="Gutierrez" delay={0.2} className="block" />
          </h1>

          <motion.p
            {...rise(0.08)}
            className="mt-5 text-lg font-medium text-ink"
          >
            {person.role} — {person.focus}
          </motion.p>

          <motion.p
            {...rise(0.16)}
            className="mt-5 max-w-[52ch] text-base leading-relaxed text-body"
          >
            {person.tagline}
          </motion.p>

          <motion.div
            {...rise(0.24)}
            className="mt-9 flex flex-wrap items-center gap-3"
          >
            <button
              onClick={handleEmailClick}
              className="inline-flex items-center gap-2 rounded-full bg-signal px-5 py-2.5 text-sm font-medium text-ink transition-colors duration-200 hover:bg-signal-deep"
            >
              <EmailIcon size={18} />
              <span className="email-text">
                <HoverDecode text={copied ? "Copied!" : links.email.label} />
              </span>
            </button>
            <a
              href={cv.url}
              download
              className="inline-flex items-center gap-2 rounded-full border border-hairline px-5 py-2.5 text-sm font-medium text-ink transition-colors duration-200 hover:border-ink"
            >
              <DownloadIcon size={18} />
              <HoverDecode text={cv.label} />
            </a>
            <a
              href={links.github.url}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-hairline px-5 py-2.5 text-sm font-medium text-ink transition-colors duration-200 hover:border-ink"
            >
              <GithubIcon size={18} />
              <HoverDecode text="GitHub" />
            </a>
            <a
              href={links.linkedin.url}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-hairline px-5 py-2.5 text-sm font-medium text-ink transition-colors duration-200 hover:border-ink"
            >
              <LinkedinIcon size={18} />
              <HoverDecode text="LinkedIn" />
            </a>
          </motion.div>

          <motion.div
            {...rise(0.32)}
            className="mt-8 flex max-w-[52ch] flex-col flex-wrap gap-4 data text-mute sm:flex-row sm:items-center sm:gap-6"
          >
            <span className="inline-flex items-center gap-1.5">
              <LocationIcon size={16} />
              {person.location}
            </span>
            <span className="flex flex-wrap items-center gap-x-5 gap-y-2">
              <HeroTech name="Python" />
              <HeroTech name="FastAPI" />
              <HeroTech name="PostgreSQL" />
              <HeroTech name="Docker" />
            </span>
            <span className="text-signal-text">{person.availability}</span>
          </motion.div>
        </div>

        {/* The real portrait joins the layout; soft mask removes the rigid shoulder cut. */}
        <div className="relative min-h-[54vh] lg:min-h-0">
          <motion.img
            src={person.photo}
            alt={person.photoAlt}
            {...photoMotion}
            className="hero-mask absolute inset-0 h-full w-full object-cover object-top"
          />
        </div>
      </div>
    </section>
  );
}
