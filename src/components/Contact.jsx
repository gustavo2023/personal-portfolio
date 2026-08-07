import { useState } from "react";
import { links, cv } from "../data/content.js";
import Reveal from "./Reveal.jsx";
import {
  GithubIcon,
  LinkedinIcon,
  EmailIcon,
  DownloadIcon,
} from "./DevIcon.jsx";

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const handleEmailClick = (e) => {
    e.preventDefault();
    const email = links.email.url.replace("mailto:", "");
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" aria-labelledby="contact-heading">
      <div className="mx-auto max-w-6xl px-6 py-20 md:px-10 md:py-32">
        <Reveal>
          <h2 id="contact-heading" className="display max-w-[16ch] text-[clamp(2.4rem,5.5vw,4.5rem)]">
            Have a backend worth building? Let&rsquo;s talk.
          </h2>
        </Reveal>

        <Reveal delay={0.08}>
          <a
            href={links.email.url}
            onClick={handleEmailClick}
            className="mt-10 inline-flex items-center gap-3 text-xl font-medium text-signal-text underline decoration-signal/40 underline-offset-8 transition-colors duration-200 hover:text-ink hover:decoration-signal md:text-2xl"
          >
            <EmailIcon size={28} />
            {copied ? "Copied to clipboard!" : links.email.label}
          </a>
        </Reveal>

        <Reveal delay={0.16}>
          <ul className="mt-10 flex flex-wrap gap-x-8 gap-y-3">
            <li>
              <a
                href={links.github.url}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-ink underline decoration-hairline underline-offset-4 transition-colors duration-200 hover:text-signal hover:decoration-signal"
              >
                <GithubIcon size={18} />
                GitHub
              </a>
            </li>
            <li>
              <a
                href={links.linkedin.url}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-ink underline decoration-hairline underline-offset-4 transition-colors duration-200 hover:text-signal hover:decoration-signal"
              >
                <LinkedinIcon size={18} />
                LinkedIn
              </a>
            </li>
          </ul>
        </Reveal>

        <Reveal delay={0.24}>
          <a
            href={cv.url}
            download
            className="mt-10 inline-flex items-center gap-2 rounded-full border border-hairline px-5 py-2.5 text-sm font-medium text-ink transition-colors duration-200 hover:border-ink"
          >
            <DownloadIcon size={18} />
            {cv.label}
          </a>
        </Reveal>
      </div>
    </section>
  );
}
