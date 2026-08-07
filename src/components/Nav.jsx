import { EmailIcon } from "./DevIcon.jsx";

const anchors = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Nav() {
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
                  {a.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#contact"
            className="inline-flex items-center gap-1.5 rounded-full bg-signal px-4 py-2 text-sm font-medium text-ink transition-colors duration-200 hover:bg-signal-deep"
          >
            <EmailIcon size={16} />
            <span className="email-text">Email me</span>
          </a>
        </div>
      </nav>
    </header>
  );
}
