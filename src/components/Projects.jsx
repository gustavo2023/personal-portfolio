import { projects } from "../data/content.js";
import Reveal from "./Reveal.jsx";
import DevIcon from "./DevIcon.jsx";
import { GithubIcon } from "./DevIcon.jsx";

export default function Projects() {
  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className="border-b border-hairline"
    >
      <div className="mx-auto max-w-6xl px-6 py-20 md:px-10 md:py-28">
        <Reveal>
          <h2
            id="projects-heading"
            className="display text-[clamp(2rem,4vw,3rem)]"
          >
            Projects
          </h2>
        </Reveal>

        <div className="mt-12">
          {projects.map((project, i) => (
            <Reveal key={project.slug} delay={i * 0.06} y={24}>
              <article className="grid grid-cols-1 gap-6 border-t border-hairline py-10 lg:grid-cols-[1fr_auto] lg:gap-12">
                <div>
                  <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
                    <h3 className="text-xl font-semibold tracking-tight text-ink">
                      {project.name}
                    </h3>
                    <p className="data text-mute">{project.kind}</p>
                  </div>

                  <p className="mt-4 max-w-[70ch] text-base leading-relaxed text-body">
                    {project.overview}
                  </p>
                  <p className="mt-3 max-w-[70ch] text-base leading-relaxed text-body">
                    {project.engineering}
                  </p>

                  <ul className="data mt-5 flex flex-wrap gap-x-5 gap-y-2 text-mute">
                    {project.stack.map((item) => (
                      <li
                        key={item}
                        className="inline-flex items-center gap-1.5"
                      >
                        <DevIcon name={item} size={18} className="shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-row items-center justify-between gap-6 lg:flex-col lg:items-end lg:justify-start lg:gap-4">
                  <p className="data text-mute">{project.date}</p>
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 p-3 -m-3 text-sm font-medium text-ink underline decoration-hairline underline-offset-4 transition-colors duration-200 hover:text-signal hover:decoration-signal"
                  >
                    <GithubIcon size={18} />
                    View on GitHub
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
