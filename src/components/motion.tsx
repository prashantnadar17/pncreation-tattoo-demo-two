import { motion, useReducedMotion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

export function useMotionSafe() {
  return !useReducedMotion();
}

export function Reveal({
  children,
  delay = 0,
  y = 24,
  className = "",
  as = "div",
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
  as?: "div" | "section" | "li" | "article" | "span";
}) {
  const safe = useMotionSafe();
  const Tag = motion[as];
  return (
    <Tag
      className={className}
      initial={safe ? { opacity: 0, y } : false}
      whileInView={safe ? { opacity: 1, y: 0 } : {}}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </Tag>
  );
}

const lineVariants: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09 } },
};

const wordVariants: Variants = {
  hidden: { opacity: 0, y: "0.35em" },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

export function TextReveal({
  lines,
  className = "",
}: {
  lines: string[];
  className?: string;
}) {
  const safe = useMotionSafe();
  return (
    <motion.span
      className={className}
      variants={lineVariants}
      initial={safe ? "hidden" : false}
      whileInView={safe ? "show" : "hidden"}
      viewport={{ once: true }}
    >
      {lines.map((line) => (
        <motion.span key={line} variants={wordVariants} className="block overflow-hidden">
          {line}
        </motion.span>
      ))}
    </motion.span>
  );
}

export function PageTransition({ children }: { children: ReactNode }) {
  const safe = useMotionSafe();
  return (
    <motion.main
      id="main"
      initial={safe ? { opacity: 0 } : false}
      animate={safe ? { opacity: 1 } : {}}
      transition={{ duration: 0.4 }}
    >
      {children}
    </motion.main>
  );
}
