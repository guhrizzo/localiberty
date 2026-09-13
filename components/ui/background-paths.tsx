"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";

// 10 paths por lado (20 no total) em vez de 36 (72 no total) — o número
// original sobrecarregava a thread principal com animações via JS
// simultâneas e causava engasgos visíveis na página inteira, não só
// nas linhas.
function FloatingPaths({ position }: { position: number }) {
  const paths = Array.from({ length: 10 }, (_, i) => ({
    id: i,
    d: `M-${380 - i * 18 * position} -${189 + i * 22}C-${
      380 - i * 18 * position
    } -${189 + i * 22} -${312 - i * 18 * position} ${216 - i * 22} ${
      152 - i * 18 * position
    } ${343 - i * 22}C${616 - i * 18 * position} ${470 - i * 22} ${
      684 - i * 18 * position
    } ${875 - i * 22} ${684 - i * 18 * position} ${875 - i * 22}`,
    width: 0.5 + i * 0.1,
    // Duração variada mas determinística — Math.random() direto no JSX
    // é impuro e faz a animação recomeçar do zero a cada re-render.
    duration: 14 + ((i * 7) % 11),
  }));

  return (
    <div className="pointer-events-none absolute inset-0">
      <svg
        className="h-full w-full text-wine"
        viewBox="0 0 696 316"
        fill="none"
      >
        <title>Background Paths</title>
        {paths.map((path) => (
          <motion.path
            key={path.id}
            d={path.d}
            stroke="currentColor"
            strokeWidth={path.width}
            strokeOpacity={0.12 + path.id * 0.02}
            // pathLength e pathOffset precisam os dois genuinamente
            // variar (com o mesmo número de keyframes) pro Framer
            // Motion animar de fato o traço — deixar um dos dois fixo
            // (mesmo valor em initial/animate, ou via `style`) faz ele
            // simplesmente não animar nada. Aqui os dois ficam
            // sincronizados no mesmo ciclo, sem a dessincronia da
            // versão anterior.
            initial={{ pathLength: 0.2, pathOffset: 0 }}
            animate={{ pathLength: [0.2, 0.5, 0.2], pathOffset: [0, 1, 0] }}
            transition={{
              duration: path.duration,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
          />
        ))}
      </svg>
    </div>
  );
}

export function BackgroundPaths({
  title,
  subtitle,
  ctaLabel,
  ctaHref = "/",
}: {
  title: string;
  subtitle?: string;
  ctaLabel?: string;
  ctaHref?: string;
}) {
  const words = title.split(" ");

  return (
    <div className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-cream">
      <div className="absolute inset-0">
        <FloatingPaths position={1} />
        <FloatingPaths position={-1} />
      </div>

      <div className="container relative z-10 mx-auto px-4 text-center md:px-6">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.4 }}
          className="mx-auto max-w-4xl"
        >
          <h1 className="mb-6 pb-2 text-4xl font-black leading-[1.15] tracking-tighter text-wine sm:text-6xl md:text-8xl">
            {words.map((word, wordIndex) => (
              <span
                key={wordIndex}
                className="mr-4 inline-block whitespace-nowrap last:mr-0"
              >
                {word.split("").map((letter, letterIndex) => (
                  <motion.span
                    key={`${wordIndex}-${letterIndex}`}
                    initial={{ y: 60, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{
                      delay: wordIndex * 0.1 + letterIndex * 0.03,
                      type: "spring",
                      stiffness: 150,
                      damping: 25,
                    }}
                    className="inline-block"
                  >
                    {letter}
                  </motion.span>
                ))}
              </span>
            ))}
          </h1>

          {subtitle && (
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="mx-auto mb-10 max-w-md text-sm text-muted sm:text-base"
            >
              {subtitle}
            </motion.p>
          )}

          {ctaLabel && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              <Button
                asChild
                variant="ghost"
                size="lg"
                className="group bg-orange text-cream transition-all duration-300 hover:-translate-y-0.5 hover:bg-ink"
              >
                <Link href={ctaHref}>
                  <span>{ctaLabel}</span>
                  <span
                    aria-hidden="true"
                    className="transition-transform duration-300 group-hover:translate-x-1.5"
                  >
                    →
                  </span>
                </Link>
              </Button>
            </motion.div>
          )}
        </motion.div>
      </div>
    </div>
  );
}
