import { useState } from "react";
import { useTranslation } from "react-i18next";
import { GithubIcon, LinkedinIcon, DownloadIcon } from "./DevIcon.jsx";
import SplitText from "./SplitText.jsx";
import HoverDecode from "./HoverDecode.jsx";
import Reveal from "./Reveal.jsx";

export default function Contact() {
  const { t } = useTranslation();
  const links = t("links", { returnObjects: true });
  const cv = t("cv", { returnObjects: true });
  const contact = t("contact", { returnObjects: true });
  const ui = t("ui", { returnObjects: true });

  const [result, setResult] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({});
  // Support both standard Vite prefix and the exact variable name requested
  const accessKey =
    import.meta.env.VITE_FORM_ACCESS_KEY ||
    import.meta.env.FORM_ACCESS_KEY ||
    "";

  const onSubmit = async (event) => {
    event.preventDefault();

    // Custom Validation
    const form = event.target;
    const formData = new FormData(form);
    const newErrors = {};

    const name = formData.get("name");
    const email = formData.get("email");
    const message = formData.get("message");

    if (!name.trim()) newErrors.name = contact.nameRequired;
    if (!email.trim()) newErrors.email = contact.emailRequired;
    else if (!/^\S+@\S+\.\S+$/.test(email))
      newErrors.email = contact.emailInvalid;
    if (!message.trim()) newErrors.message = contact.messageRequired;

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    setIsSubmitting(true);
    setResult(contact.sending);

    formData.append("access_key", accessKey);
    formData.append("subject", "New Contact Message from your Website");
    formData.append("from_name", "Work With Me Form");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      const data = await response.json();

      if (data.success) {
        setResult(contact.success);
        form.reset();
      } else {
        setResult(data.message || contact.fail);
      }
    } catch {
      setResult(contact.networkError);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInput = (e) => {
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: "" });
    }
  };

  return (
    <section id="contact" aria-labelledby="contact-heading">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-16 px-6 py-20 md:px-10 md:py-32 lg:grid-cols-[1fr_1fr] lg:gap-20">
        {/* Left Column: Pitch and Alternatives */}
        <div className="flex flex-col items-start">
          <h2
            id="contact-heading"
            className="display max-w-[14ch] text-[clamp(2rem,5.5vw,4.5rem)]"
          >
            <SplitText text={contact.title} delay={0} />
          </h2>

          <Reveal delay={0.16}>
            <div className="mt-12 flex flex-col gap-8">
              <ul className="flex flex-wrap gap-x-8 gap-y-3">
                <li>
                  <a
                    href={links.github.url}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 p-3 -m-3 text-sm font-medium text-ink underline decoration-hairline underline-offset-4 transition-colors duration-200 hover:text-signal hover:decoration-signal"
                  >
                    <GithubIcon size={18} />
                    <HoverDecode text={ui.github} />
                  </a>
                </li>
                <li>
                  <a
                    href={links.linkedin.url}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 p-3 -m-3 text-sm font-medium text-ink underline decoration-hairline underline-offset-4 transition-colors duration-200 hover:text-signal hover:decoration-signal"
                  >
                    <LinkedinIcon size={18} />
                    <HoverDecode text={ui.linkedin} />
                  </a>
                </li>
              </ul>

              <div>
                <a
                  href={cv.url}
                  download
                  className="inline-flex items-center gap-2 rounded-full border border-hairline px-5 py-2.5 text-sm font-medium text-ink transition-colors duration-200 hover:border-ink"
                >
                  <DownloadIcon size={18} />
                  <HoverDecode text={cv.label} />
                </a>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Right Column: Direct Form */}
        <div className="lg:pt-4">
          <Reveal delay={0.08}>
            <form
              onSubmit={onSubmit}
              noValidate
              className="flex w-full max-w-md flex-col gap-5"
            >
              <fieldset
                disabled={isSubmitting}
                className="flex flex-col gap-5 disabled:opacity-50"
              >
                <div className="flex flex-col gap-1.5">
                  <input
                    type="text"
                    name="name"
                    placeholder={contact.namePlaceholder}
                    aria-label={contact.nameLabel}
                    required
                    onInput={handleInput}
                    className={`w-full rounded-none border bg-surface px-4 py-3 text-body placeholder:text-mute focus:outline-none focus:ring-2 focus:ring-signal focus:ring-offset-[3px] focus:ring-offset-paper ${errors.name ? "border-signal" : "border-hairline focus:border-signal"}`}
                  />
                  {errors.name && (
                    <span className="data text-signal-text">{errors.name}</span>
                  )}
                </div>
                <div className="flex flex-col gap-1.5">
                  <input
                    type="email"
                    name="email"
                    placeholder={contact.emailPlaceholder}
                    aria-label={contact.emailLabel}
                    required
                    onInput={handleInput}
                    className={`w-full rounded-none border bg-surface px-4 py-3 text-body placeholder:text-mute focus:outline-none focus:ring-2 focus:ring-signal focus:ring-offset-[3px] focus:ring-offset-paper ${errors.email ? "border-signal" : "border-hairline focus:border-signal"}`}
                  />
                  {errors.email && (
                    <span className="data text-signal-text">
                      {errors.email}
                    </span>
                  )}
                </div>
                <div className="flex flex-col gap-1.5">
                  <textarea
                    name="message"
                    placeholder={contact.messagePlaceholder}
                    aria-label={contact.messageLabel}
                    rows="4"
                    required
                    onInput={handleInput}
                    className={`w-full resize-none rounded-none border bg-surface px-4 py-3 text-body placeholder:text-mute focus:outline-none focus:ring-2 focus:ring-signal focus:ring-offset-[3px] focus:ring-offset-paper ${errors.message ? "border-signal" : "border-hairline focus:border-signal"}`}
                  ></textarea>
                  {errors.message && (
                    <span className="data text-signal-text">
                      {errors.message}
                    </span>
                  )}
                </div>

                <div className="mt-1 flex items-center gap-4">
                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 rounded-full bg-signal px-6 py-3 text-sm font-medium text-ink transition-colors duration-200 hover:bg-signal-deep disabled:cursor-not-allowed"
                  >
                    <HoverDecode
                      text={
                        isSubmitting ? contact.sending : contact.sendMessage
                      }
                    />
                  </button>
                  {result && !isSubmitting && (
                    <span className="data text-signal-text">{result}</span>
                  )}
                </div>
              </fieldset>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
