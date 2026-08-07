import { motion, useReducedMotion } from "motion/react";

const EASE = [0.16, 1, 0.3, 1];

export default function SplitText({ text, className = "", delay = 0, stagger = 0.03 }) {
  const reduce = useReducedMotion();
  
  if (reduce) {
    return <span className={className}>{text}</span>;
  }

  // Split into words first to handle wrapping correctly, then letters
  const words = text.split(" ");
  
  let letterIndex = 0;
  
  return (
    <span className={`inline-flex flex-wrap ${className}`}>
      {words.map((word, wordIdx) => (
        <span key={wordIdx} className="inline-flex whitespace-pre">
          {word.split("").map((char) => {
            const currentDelay = delay + (letterIndex * stagger);
            letterIndex++;
            return (
              <motion.span
                key={letterIndex}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-64px" }}
                transition={{
                  duration: 0.9,
                  ease: EASE,
                  delay: currentDelay,
                }}
                className="inline-block"
              >
                {char}
              </motion.span>
            );
          })}
          {/* Add space after word unless it's the last word */}
          {wordIdx < words.length - 1 && (
            <span className="w-[0.3em]">&nbsp;</span>
          )}
        </span>
      ))}
    </span>
  );
}
