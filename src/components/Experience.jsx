import { useTranslation } from "react-i18next";
import Reveal from "./Reveal.jsx";
import SplitText from "./SplitText.jsx";

export default function Experience() {
  const { t } = useTranslation();
  const experience = t("experience", { returnObjects: true });
  const nav = t("nav", { returnObjects: true });

  return (
    <section
      id="experience"
      aria-labelledby="experience-heading"
      className="border-b border-hairline"
    >
      <div className="mx-auto max-w-6xl px-6 py-20 md:px-10 md:py-28">
        <Reveal>
          <h2
            id="experience-heading"
            className="display text-[clamp(2rem,4vw,3rem)]"
          >
            <SplitText text={nav.experience} delay={0} />
          </h2>
        </Reveal>

        <div className="mt-12">
          {experience.map((job, i) => (
            <Reveal key={job.id} delay={i * 0.06}>
              <article className="grid grid-cols-1 gap-6 border-t border-hairline py-10 md:grid-cols-[16rem_1fr] md:gap-12">
                <div className="data text-mute">
                  <p>{job.period}</p>
                  <p className="mt-2">{job.company}</p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold tracking-tight text-ink">
                    {job.role}
                  </h3>
                  <ul className="mt-5 space-y-3">
                    {job.proof.map((line) => (
                      <li
                        key={line}
                        className="relative max-w-[70ch] pl-5 text-base leading-relaxed text-body"
                      >
                        <span
                          aria-hidden="true"
                          className="absolute left-0 top-[0.65em] h-1 w-1 bg-signal"
                        />
                        {line}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
