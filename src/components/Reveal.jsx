import { motion, useReducedMotion } from "motion/react";

const EASE = [0.16, 1, 0.3, 1];

export default function Reveal({
  children,
  className,
  delay = 0,
  y = 18,
  duration = 0.7,
}) {
  const reduce = useReducedMotion();

  if (reduce) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-64px" }}
      transition={{ duration, ease: EASE, delay }}
    >
      {children}
    </motion.div>
  );
}
