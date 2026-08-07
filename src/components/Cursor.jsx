import { useEffect, useState } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useReducedMotion,
} from "motion/react";

const HOVER_SELECTOR =
  "a, button, [role='button'], input, textarea, select, [data-cursor-hover]";

export default function Cursor() {
  const reduce = useReducedMotion();
  const [hovering, setHovering] = useState(false);
  const [visible, setVisible] = useState(false);

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const x = useSpring(cursorX, { damping: 25, stiffness: 400, mass: 0.5 });
  const y = useSpring(cursorY, { damping: 25, stiffness: 400, mass: 0.5 });

  useEffect(() => {
    if (reduce) return;

    const isFinePointer = window.matchMedia("(pointer: fine)").matches;
    if (!isFinePointer) return;

    document.documentElement.classList.add("has-custom-cursor");

    const move = (e) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      setVisible(true);
    };

    const show = () => setVisible(true);
    const hide = () => setVisible(false);

    const onOver = (e) => {
      if (e.target.closest(HOVER_SELECTOR)) setHovering(true);
    };
    const onOut = (e) => {
      if (e.target.closest(HOVER_SELECTOR)) setHovering(false);
    };

    window.addEventListener("pointermove", move);
    document.addEventListener("mouseleave", hide);
    document.addEventListener("mouseenter", show);
    document.addEventListener("mouseover", onOver);
    document.addEventListener("mouseout", onOut);

    return () => {
      document.documentElement.classList.remove("has-custom-cursor");
      window.removeEventListener("pointermove", move);
      document.removeEventListener("mouseleave", hide);
      document.removeEventListener("mouseenter", show);
      document.removeEventListener("mouseover", onOver);
      document.removeEventListener("mouseout", onOut);
    };
  }, [reduce, cursorX, cursorY]);

  if (reduce) return null;

  return (
    <motion.div
      className="pointer-events-none fixed left-0 top-0 z-[9999] rounded-full mix-blend-difference"
      style={{ x, y, translateX: "-50%", translateY: "-50%" }}
      initial={{ opacity: 0 }}
      animate={{
        opacity: visible ? 1 : 0,
        width: hovering ? 48 : 14,
        height: hovering ? 48 : 14,
        backgroundColor: hovering
          ? "rgba(255, 77, 0, 0.2)"
          : "rgba(247, 246, 244, 0.9)",
        border: hovering
          ? "1.5px solid rgba(255, 77, 0, 0.7)"
          : "1.5px solid rgba(247, 246, 244, 0.9)",
      }}
      transition={{ type: "spring", damping: 20, stiffness: 300 }}
    />
  );
}
