import { useState } from "react";
import { links, cv } from "../data/content.js";
import Reveal from "./Reveal.jsx";
import SplitText from "./SplitText.jsx";
import { GithubIcon, LinkedinIcon, DownloadIcon } from "./DevIcon.jsx";
import HoverDecode from "./HoverDecode.jsx";

export default function Contact() {
  const [result, setResult] = useState("");
  // Support both standard Vite prefix and the exact variable name requested
  const accessKey =
    import.meta.env.VITE_FORM_ACCESS_KEY ||
    import.meta.env.FORM_ACCESS_KEY ||
    "";

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending...");
    const formData = new FormData(event.target);

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
        setResult("Form Submitted Successfully");
        event.target.reset();
      } else {
        setResult(data.message);
      }
    } catch {
      setResult("Something went wrong!");
    }
  };

  return (
    <section id="contact" aria-labelledby="contact-heading">
      <div className="mx-auto max-w-6xl px-6 py-20 md:px-10 md:py-32">
        <h2
          id="contact-heading"
          className="display max-w-[16ch] text-[clamp(2rem,5.5vw,4.5rem)]"
        >
          <SplitText
            text="Have a backend worth building? Let's talk."
            delay={0}
          />
        </h2>

        <Reveal delay={0.08}>
          <form
            onSubmit={onSubmit}
            className="mt-12 flex max-w-md flex-col gap-4"
          >
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="w-full rounded-none border border-hairline bg-surface px-4 py-3 text-body placeholder:text-mute focus:border-signal focus:outline-none focus:ring-2 focus:ring-signal focus:ring-offset-[3px] focus:ring-offset-paper"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="w-full rounded-none border border-hairline bg-surface px-4 py-3 text-body placeholder:text-mute focus:border-signal focus:outline-none focus:ring-2 focus:ring-signal focus:ring-offset-[3px] focus:ring-offset-paper"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              rows="4"
              required
              className="w-full resize-y rounded-none border border-hairline bg-surface px-4 py-3 text-body placeholder:text-mute focus:border-signal focus:outline-none focus:ring-2 focus:ring-signal focus:ring-offset-[3px] focus:ring-offset-paper"
            ></textarea>

            <div className="mt-2 flex items-center gap-4">
              <button
                type="submit"
                className="inline-flex items-center gap-2 rounded-full bg-signal px-6 py-3 text-sm font-medium text-ink transition-colors duration-200 hover:bg-signal-deep"
              >
                <HoverDecode text="Send Message" />
              </button>
              {result && (
                <span className="text-sm font-medium text-signal-text">
                  {result}
                </span>
              )}
            </div>
          </form>
        </Reveal>

        <Reveal delay={0.16}>
          <ul className="mt-12 flex flex-wrap gap-x-8 gap-y-3">
            <li>
              <a
                href={links.github.url}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 p-3 -m-3 text-sm font-medium text-ink underline decoration-hairline underline-offset-4 transition-colors duration-200 hover:text-signal hover:decoration-signal"
              >
                <GithubIcon size={18} />
                <HoverDecode text="GitHub" />
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
                <HoverDecode text="LinkedIn" />
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
            <HoverDecode text={cv.label} />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
