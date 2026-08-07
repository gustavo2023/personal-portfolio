import { useTranslation } from "react-i18next";
import { EmailIcon } from "./DevIcon.jsx";
import HoverDecode from "./HoverDecode.jsx";

export default function Nav() {
  const { t, i18n } = useTranslation();
  const nav = t("nav", { returnObjects: true });

  const anchors = [
    { label: nav.about, href: "#about" },
    { label: nav.experience, href: "#experience" },
    { label: nav.projects, href: "#projects" },
    { label: nav.contact, href: "#contact" },
  ];

  return (
    <header className="border-b border-hairline">
      <nav className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-6 py-4 md:px-10">
        <a href="#top" className="text-sm font-semibold tracking-tight">
          Gustavo Gutierrez
        </a>

        <div className="flex items-center gap-6">
          <ul className="hidden items-center gap-6 sm:flex">
            {anchors.map((a) => (
              <li key={a.href}>
                <a
                  href={a.href}
                  className="text-sm text-body transition-colors duration-200 hover:text-ink"
                >
                  <HoverDecode text={a.label} />
                </a>
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-4">
            <button
              onClick={() =>
                i18n.changeLanguage(
                  i18n.language.startsWith("en") ? "es" : "en",
                )
              }
              className="data text-sm font-medium text-mute transition-colors duration-200 hover:text-ink"
              aria-label="Toggle language"
            >
              {i18n.language.startsWith("en") ? "ES" : "EN"}
            </button>
            <a
              href="#contact"
              className="inline-flex items-center gap-1.5 rounded-full bg-signal px-4 py-2 text-sm font-medium text-ink transition-colors duration-200 hover:bg-signal-deep"
            >
              <EmailIcon size={16} />
              <span className="email-text">
                <HoverDecode text={nav.emailMe} />
              </span>
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}
