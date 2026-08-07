import { useTranslation } from "react-i18next";

export default function Footer() {
  const { t } = useTranslation();
  const person = t("person", { returnObjects: true });
  return (
    <footer className="border-t border-hairline">
      <div className="mx-auto flex max-w-6xl flex-col gap-2 px-6 py-8 data text-mute sm:flex-row sm:items-center sm:justify-between md:px-10">
        <span>© 2026 {person.name}</span>
        <span>{person.location}</span>
      </div>
    </footer>
  );
}
