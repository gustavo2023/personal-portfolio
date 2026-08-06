import { useRef } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useMotionTemplate,
} from "motion/react";

export default function MagicPill({ children, className = "" }) {
  const ref = useRef(null);
  const x = useMotionValue(-200);
  const y = useMotionValue(-200);

  const mouseX = useSpring(x, { damping: 30, stiffness: 350 });
  const mouseY = useSpring(y, { damping: 30, stiffness: 350 });

  const handleMove = (e) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    x.set(e.clientX - rect.left);
    y.set(e.clientY - rect.top);
  };

  const reset = () => {
    x.set(-200);
    y.set(-200);
  };

  return (
    <motion.span
      ref={ref}
      onPointerMove={handleMove}
      onPointerEnter={handleMove}
      onPointerLeave={reset}
      className={`group relative isolate inline-flex overflow-hidden ${className}`}
    >
      <motion.span
        className="pointer-events-none absolute inset-0 z-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              120px circle at ${mouseX}px ${mouseY}px,
              rgba(255, 77, 0, 0.22),
              rgba(255, 77, 0, 0.06) 50%,
              transparent 100%
            )
          `,
        }}
      />
      <span className="relative z-10 inline-flex items-center gap-2">
        {children}
      </span>
    </motion.span>
  );
}
