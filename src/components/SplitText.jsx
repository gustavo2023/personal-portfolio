import { useState, useEffect, useRef } from "react";
import { useInView, useReducedMotion } from "motion/react";

const CHARS =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+-=[]{}|;':\",./<>?";

function DecodeChar({ realChar, delay, isInView }) {
  const spanRef = useRef(null);
  const [isDecoded, setIsDecoded] = useState(false);

  useEffect(() => {
    if (!isInView || realChar === " ") return;

    let timeoutId;
    let intervalId;

    // Start decoding after delay
    timeoutId = setTimeout(() => {
      let iterations = 0;
      const maxIterations = 8; // fast, sharp flicker

      intervalId = setInterval(() => {
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
      }, 40); // 40ms per frame = very fast decode
    }, delay * 1000);

    return () => {
      clearTimeout(timeoutId);
      clearInterval(intervalId);
    };
  }, [isInView, realChar, delay]);

  if (realChar === " ") {
    return <span className="w-[0.3em]">&nbsp;</span>;
  }

  return (
    <span className="relative inline-flex items-center justify-center">
      {/* Invisible real character to hold exact width and prevent jitter */}
      <span className="invisible">{realChar}</span>
      {/* Absolute positioned active character */}
      <span
        ref={spanRef}
        className={`absolute inset-0 flex items-center justify-center transition-colors duration-200 ${
          isDecoded ? "" : "text-signal"
        }`}
      ></span>
    </span>
  );
}

export default function SplitText({
  text,
  className = "",
  delay = 0,
  stagger = 0.03,
}) {
  const reduce = useReducedMotion();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-64px" });

  if (reduce) {
    return <span className={className}>{text}</span>;
  }

  const words = text.split(" ");
  let letterIndex = 0;

  return (
    <span ref={ref} className={`inline-flex flex-wrap ${className}`}>
      {words.map((word, wordIdx) => (
        <span key={wordIdx} className="inline-flex whitespace-pre">
          {word.split("").map((char) => {
            const currentDelay = delay + letterIndex * stagger;
            letterIndex++;
            return (
              <DecodeChar
                key={letterIndex}
                realChar={char}
                delay={currentDelay}
                isInView={isInView}
              />
            );
          })}
          {wordIdx < words.length - 1 && (
            <span className="w-[0.3em]">&nbsp;</span>
          )}
        </span>
      ))}
    </span>
  );
}
