import { useState, useEffect } from "react";
import { useReducedMotion } from "motion/react";

const CHARS =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+-=[]{}|;':\",./<>?";

function HoverChar({ realChar, isHovered }) {
  const [scrambledChar, setScrambledChar] = useState(realChar);

  useEffect(() => {
    if (!isHovered || realChar === " ") {
      return;
    }

    let iterations = 0;
    // Each character gets a random decode length for a staggered organic feel
    const maxIterations = 3 + Math.floor(Math.random() * 8);

    const intervalId = setInterval(() => {
      if (iterations >= maxIterations) {
        setScrambledChar(realChar);
        clearInterval(intervalId);
      } else {
        setScrambledChar(CHARS[Math.floor(Math.random() * CHARS.length)]);
        iterations++;
      }
    }, 30); // Very fast flicker

    return () => clearInterval(intervalId);
  }, [isHovered, realChar]);

  if (realChar === " ") return <span>&nbsp;</span>;

  // Derive the active character synchronously during render
  const displayChar = isHovered ? scrambledChar : realChar;

  return (
    <span className="relative inline-flex items-center justify-center">
      <span className="invisible">{realChar}</span>
      <span
        className={`absolute inset-0 flex items-center justify-center transition-colors duration-100 ${
          displayChar !== realChar ? "text-signal" : ""
        }`}
      >
        {displayChar}
      </span>
    </span>
  );
}

export default function HoverDecode({ text }) {
  const reduce = useReducedMotion();
  const [isHovered, setIsHovered] = useState(false);

  if (reduce) {
    return <>{text}</>;
  }

  return (
    <span
      className="inline-flex cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <span className="sr-only">{text}</span>
      <span aria-hidden="true" className="inline-flex">
        {text.split("").map((char, i) => (
          <HoverChar key={i} realChar={char} isHovered={isHovered} />
        ))}
      </span>
    </span>
  );
}
