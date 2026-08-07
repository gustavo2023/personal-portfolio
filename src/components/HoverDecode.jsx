import { useState, useEffect, useRef } from "react";
import { useReducedMotion } from "motion/react";

const CHARS =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+-=[]{}|;':\",./<>?";

function HoverChar({ realChar, isHovered, decodeOnMount }) {
  const spanRef = useRef(null);
  const [isDecoded, setIsDecoded] = useState(!decodeOnMount && !isHovered);
  const hasMounted = useRef(false);

  useEffect(() => {
    // Trigger on hover, or exactly once on mount if requested
    if ((!isHovered && hasMounted.current) || realChar === " ") {
      return;
    }

    if (decodeOnMount && !hasMounted.current) {
      hasMounted.current = true;
    }

    setIsDecoded(false);

    let iterations = 0;
    // Each character gets a random decode length for a staggered organic feel
    const maxIterations = 3 + Math.floor(Math.random() * 8);

    const intervalId = setInterval(() => {
      if (iterations >= maxIterations) {
        if (spanRef.current) spanRef.current.textContent = realChar;
        setIsDecoded(true);
        clearInterval(intervalId);
      } else {
        if (spanRef.current) {
          spanRef.current.textContent =
            CHARS[Math.floor(Math.random() * CHARS.length)];
        }
        iterations++;
      }
    }, 30); // Very fast flicker

    return () => clearInterval(intervalId);
  }, [isHovered, realChar, decodeOnMount]);

  if (realChar === " ") return <span>&nbsp;</span>;

  // Show scrambled char if we are hovering or actively scrambling
  const isAnimating = isHovered || !isDecoded;

  return (
    <span className="relative inline-flex items-center justify-center">
      <span className="invisible">{realChar}</span>
      <span
        ref={spanRef}
        className={`absolute inset-0 flex items-center justify-center transition-colors duration-100 ${
          isAnimating ? "text-signal" : ""
        }`}
      >
        {!isAnimating ? realChar : ""}
      </span>
    </span>
  );
}

export default function HoverDecode({ text, decodeOnMount = false }) {
  const reduce = useReducedMotion();
  const [isHovered, setIsHovered] = useState(false);

  if (reduce) {
    return <>{text}</>;
  }

  return (
    <span
      className="inline-flex"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <span className="sr-only">{text}</span>
      <span aria-hidden="true" className="inline-flex">
        {text.split("").map((char, i) => (
          <HoverChar
            key={i}
            realChar={char}
            isHovered={isHovered}
            decodeOnMount={decodeOnMount}
          />
        ))}
      </span>
    </span>
  );
}
