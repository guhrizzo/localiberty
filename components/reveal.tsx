"use client";

import { motion, type HTMLMotionProps } from "motion/react";
import { useEffect, useState, type ReactNode } from "react";

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

const visible = { opacity: 1, filter: "blur(0px)", y: 0 };

// Fade + blur suave ao entrar na viewport. O estado inicial assume "sem redução
// de movimento" (igual no servidor e no primeiro render do cliente, pra não dar
// mismatch de hidratação) e só depois de montado é que checamos de fato a
// preferência do usuário — inclusive reagindo se ele alternar em tempo real,
// já que no Windows essa opção também é descrita como melhoria de desempenho.
// O CSS em globals.css ([data-reveal]) cobre o instante entre o primeiro
// paint e esse efeito rodar, pra nunca deixar a seção travada em opacity:0.
export function Reveal({ as = "div", delay = 0, transition, children, ...props }: RevealProps) {
  const [reduceMotion, setReduceMotion] = useState(false);
  const MotionTag = tags[as];

  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduceMotion(query.matches);
    update();
    query.addEventListener("change", update);
    return () => query.removeEventListener("change", update);
  }, []);

  return (
    <MotionTag
      data-reveal=""
      initial={{ opacity: 0, filter: "blur(16px)", y: 32 }}
      animate={reduceMotion ? visible : undefined}
      whileInView={reduceMotion ? undefined : visible}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: reduceMotion ? 0 : 0.9, delay: reduceMotion ? 0 : delay, ease: [0.16, 1, 0.3, 1], ...transition }}
      {...props}
    >
      {children}
    </MotionTag>
  );
}
