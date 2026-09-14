"use client";

import { useEffect } from "react";

// Dispara uma chamada pro /api/track a cada carregamento de página —
// sem UI própria (fica invisível). Ver
// docs/superpowers/specs/2026-09-13-analytics-landing-page-design.md
// no liberty-sistema. `keepalive` garante que o request completa mesmo
// se o usuário já estiver navegando pra outra página.
export function Analytics() {
  useEffect(() => {
    fetch("/api/track", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ path: window.location.pathname }),
      keepalive: true,
    }).catch(() => {
      // Rastreamento nunca deve afetar a navegação — falha em silêncio.
    });
  }, []);

  return null;
}
