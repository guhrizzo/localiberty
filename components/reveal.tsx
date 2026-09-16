"use client";

import { motion, type HTMLMotionProps } from "motion/react";
import type { ReactNode } from "react";

const tags = {
  section: motion.section,
  footer: motion.footer,
  div: motion.div,
  article: motion.article,
} as const;

type RevealTag = keyof typeof tags;

interface RevealProps extends Omit<HTMLMotionProps<"div">, "children"> {
  as?: RevealTag;
  delay?: number;
  children?: ReactNode;
}

// Fade + blur suave ao entrar na viewport. O respeito a prefers-reduced-motion
// é feito via CSS (seletor [data-reveal] em globals.css): decidir a árvore de
// JSX aqui com useReducedMotion() divergiria entre SSR e cliente, e o React
// não corrige esse tipo de mismatch na hidratação — a seção ficaria travada
// com o estilo inicial (opacidade 0) pra sempre em quem usa essa preferência.
export function Reveal({ as = "div", delay = 0, transition, children, ...props }: RevealProps) {
  const MotionTag = tags[as];

  return (
    <MotionTag
      data-reveal=""
      initial={{ opacity: 0, filter: "blur(16px)", y: 32 }}
      whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.9, delay, ease: [0.16, 1, 0.3, 1], ...transition }}
      {...props}
    >
      {children}
    </MotionTag>
  );
}
