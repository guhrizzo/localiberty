"use client";

import { motion } from "motion/react";

interface HeroLine {
  text: string;
  emphasis?: boolean;
}

interface HeroHeadingProps {
  lines: HeroLine[];
}

// Revela o título palavra por palavra (efeito "pull up") ao montar —
// é o título principal da hero, visível assim que a página carrega,
// então anima direto em vez de depender de scroll-into-view. Cada
// palavra fica num invólucro com overflow:hidden pra que o slide-up
// pareça sair de dentro da própria linha de texto.
export function HeroHeading({ lines }: HeroHeadingProps) {
  return (
    <h1>
      {lines.map((line, lineIndex) => {
        const words = line.text.split(" ");
        // Índice global da palavra (pra escalonar o delay entre linhas)
        // calculado a partir das linhas anteriores, sem mutar variável
        // nenhuma durante o render.
        const startIndex = lines.slice(0, lineIndex).reduce((sum, l) => sum + l.text.split(" ").length, 0);
        return (
          <span className="hero-line" key={line.text}>
            {words.map((word, i) => {
              const delay = (startIndex + i) * 0.07;
              return (
                <span className="hero-word-mask" key={word}>
                  <motion.span
                    className={line.emphasis ? "hero-word hero-word-em" : "hero-word"}
                    initial={{ y: "110%" }}
                    animate={{ y: "0%" }}
                    transition={{ duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] }}
                  >
                    {word}
                    {i < words.length - 1 ? " " : ""}
                  </motion.span>
                </span>
              );
            })}
            {lineIndex < lines.length - 1 && <br />}
          </span>
        );
      })}
    </h1>
  );
}
