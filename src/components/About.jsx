import { useTranslation } from "react-i18next";
import Reveal from "./Reveal.jsx";
import DevIcon from "./DevIcon.jsx";
import MagicPill from "./MagicPill.jsx";
import SplitText from "./SplitText.jsx";

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
  const { t } = useTranslation();
  const about = t("about", { returnObjects: true });
  const nav = t("nav", { returnObjects: true });

  const core = about.stack.filter((s) => CORE_STACK.includes(s));
  const rest = about.stack.filter((s) => !CORE_STACK.includes(s));

  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="border-b border-hairline"
    >
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 px-6 py-20 md:px-10 md:py-28 lg:grid-cols-[0.9fr_1.1fr] lg:gap-10">
        <Reveal>
          <h2
            id="about-heading"
            className="display text-[clamp(2.5rem,5vw,4rem)]"
          >
            <SplitText text={nav.about} delay={0} />
          </h2>
        </Reveal>

        <div>
          <Reveal delay={0.08}>
            <div className="relative pl-6">
              <span
                aria-hidden="true"
                className="absolute left-0 top-[0.65em] h-1 w-1 bg-signal"
              />
              <p className="max-w-[48ch] text-[clamp(1.125rem,2vw,1.5rem)] font-medium leading-relaxed tracking-tight text-ink">
                {about.bio}
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.16}>
            <div className="mt-12 flex max-w-[68ch] flex-wrap items-center gap-3">
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
