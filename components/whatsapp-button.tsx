"use client";

import { useEffect, useRef } from "react";

const whatsappMessage = "Olá! Vim pelo site da LIBERTY e gostaria de saber mais.";
const whatsappHref = `https://wa.me/5514998659046?text=${encodeURIComponent(whatsappMessage)}`;

// O anel de pulso é um elemento real (não um ::before) e animado via
// Web Animations API de propósito: diferente de uma @keyframes em
// CSS, isso não é afetado por prefers-reduced-motion — decisão da
// LIBERTY manter esse pulso sempre visível, já que é uma animação
// pequena e de baixo risco (um anel atrás de um botão de contato),
// não um efeito full-screen.
export function WhatsAppButton() {
  const pulseRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = pulseRef.current;
    if (!el) return;
    const animation = el.animate(
      [
        { transform: "scale(1)", opacity: 0.7 },
        { transform: "scale(1.6)", opacity: 0 },
      ],
      { duration: 3600, iterations: Infinity, easing: "ease" }
    );
    return () => animation.cancel();
  }, []);

  return (
    <a href={whatsappHref} target="_blank" rel="noopener noreferrer" className="whatsapp-float" aria-label="Falar pelo WhatsApp">
      <span className="whatsapp-pulse" ref={pulseRef} aria-hidden="true" />
      <span className="whatsapp-badge" aria-hidden="true">1</span>
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.48 1.32 5L2 22l5.25-1.38a9.9 9.9 0 0 0 4.79 1.22h.01c5.46 0 9.9-4.45 9.9-9.9 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2m0 1.67a8.2 8.2 0 0 1 5.83 2.42 8.19 8.19 0 0 1 2.41 5.82c0 4.54-3.7 8.23-8.24 8.23a8.2 8.2 0 0 1-4.19-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.16 8.16 0 0 1-1.26-4.37c0-4.54 3.7-8.24 8.24-8.24M8.53 6.76c-.16 0-.42.06-.64.31-.22.24-.85.83-.85 2.03 0 1.2.87 2.36.99 2.52.12.16 1.7 2.72 4.22 3.71 2.09.82 2.51.65 2.97.61.46-.04 1.48-.6 1.68-1.19.21-.58.21-1.08.15-1.19-.06-.1-.22-.16-.46-.28-.24-.12-1.48-.73-1.71-.81-.23-.09-.4-.13-.56.13-.16.26-.64.81-.79.98-.14.16-.29.18-.53.06-.24-.12-1.03-.38-1.96-1.21-.72-.64-1.21-1.44-1.35-1.68-.14-.24-.01-.37.11-.49.11-.11.24-.29.36-.43.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.56-1.36-.78-1.86-.2-.49-.41-.42-.56-.43z" />
      </svg>
      <span className="whatsapp-tooltip">Fale com a gente</span>
    </a>
  );
}
