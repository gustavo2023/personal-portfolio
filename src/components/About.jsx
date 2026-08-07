import { about } from "../data/content.js";
import Reveal from "./Reveal.jsx";
import DevIcon from "./DevIcon.jsx";
import MagicPill from "./MagicPill.jsx";

const CORE_STACK = ["Python", "FastAPI", "PostgreSQL"];

function TechChip({ name, featured = false }) {
  return (
    <MagicPill
      className={`inline-flex items-center gap-2 transition-transform duration-200 group-hover:-translate-y-0.5 ${
        featured
          ? "rounded-full bg-surface px-3 py-1.5 text-sm font-medium text-ink"
          : "text-mute"
      }`}
    >
      <DevIcon name={name} size={featured ? 22 : 18} className="shrink-0" />
      {name}
    </MagicPill>
  );
}

export default function About() {
  const core = about.stack.filter((s) => CORE_STACK.includes(s));
  const rest = about.stack.filter((s) => !CORE_STACK.includes(s));

  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="border-b border-hairline"
    >
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 px-6 py-20 md:px-10 md:py-28 lg:grid-cols-[0.9fr_1.1fr]">
        <Reveal>
          <h2
            id="about-heading"
            className="display text-[clamp(2rem,4vw,3rem)]"
          >
            About
          </h2>
        </Reveal>

        <div>
          <Reveal delay={0.08}>
            <p className="max-w-[68ch] text-base leading-relaxed text-body">
              {about.bio}
            </p>
          </Reveal>

          <Reveal delay={0.16}>
            <div className="mt-8 flex max-w-[68ch] flex-wrap items-center gap-3">
              {core.map((item) => (
                <TechChip key={item} name={item} featured />
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.24}>
            <ul className="data mt-5 flex max-w-[68ch] flex-wrap gap-x-5 gap-y-2 text-mute">
              {rest.map((item) => (
                <li key={item}>
                  <TechChip name={item} />
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
