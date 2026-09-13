"use client";

import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "motion/react";
import { useEffect, useRef, useState } from "react";

const navItems = [
  { label: "A operação", href: "#operacao" },
  { label: "Para quem", href: "#agentes" },
  { label: "Como funciona", href: "#fluxo" },
];

export function SiteNav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [activeHref, setActiveHref] = useState(navItems[0].href);
  const lastY = useRef(0);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (y) => {
    setScrolled(y > 8);
    if (!open) {
      const diff = y - lastY.current;
      if (y > 140 && diff > 4) setHidden(true);
      else if (diff < -4 || y < 140) setHidden(false);
    }
    lastY.current = y;
  });

  // Fecha o menu automaticamente se a tela crescer para o layout desktop.
  useEffect(() => {
    function handleResize() {
      if (window.innerWidth > 720) setOpen(false);
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Trava o scroll do fundo enquanto o menu mobile está aberto.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Destaca no menu a seção que está em foco na tela (scroll-spy).
  useEffect(() => {
    const sections = navItems
      .map((item) => document.querySelector(item.href))
      .filter((el): el is Element => el !== null);
    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActiveHref(`#${entry.target.id}`);
        }
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <motion.header
      className={`site-nav${scrolled ? " site-nav-scrolled" : ""}`}
      animate={{ y: hidden ? "-100%" : "0%" }}
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
    >
      <nav className="nav shell" aria-label="Navegação principal">
        <a className="brand-logo" href="#operacao" aria-label="LIBERTY, início" onClick={() => setOpen(false)}>
          <img
            src={
              scrolled
                ? "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo-claro-OphbVWmaPU5SJpxRI0Lf73uDAugMND.jpg"
                : "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo-escuro-RwOy62EHREn7cBLPieCC6EJKHARNzA.jpg"
            }
            alt="LOCALIBERTY"
          />
        </a>

        <div className="nav-links">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={activeHref === item.href ? "nav-link-active" : undefined}
              aria-current={activeHref === item.href ? "true" : undefined}
            >
              {item.label}
              {activeHref === item.href && (
                <motion.span
                  className="nav-link-indicator"
                  layoutId="nav-indicator"
                  transition={{ type: "spring", stiffness: 380, damping: 32 }}
                />
              )}
            </a>
          ))}
        </div>

        <div className="nav-right">
          <a className="nav-action" href="https://system.localiberty.com" target="_blank" rel="noopener noreferrer">
            Entrar <span aria-hidden="true">↗</span>
          </a>
          <button
            type="button"
            className="nav-toggle"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            onClick={() => setOpen((value) => !value)}
          >
            <span />
            <span />
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            className="mobile-menu"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.28, ease: "easeInOut" }}
          >
            <div className="mobile-menu-inner shell">
              <nav className="mobile-menu-links" aria-label="Links do menu">
                {navItems.map((item, index) => (
                  <motion.a
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05, duration: 0.25 }}
                  >
                    {item.label}
                  </motion.a>
                ))}
              </nav>
              <a className="mobile-menu-cta" href="https://system.localiberty.com" target="_blank" rel="noopener noreferrer" onClick={() => setOpen(false)}>
                Entrar <span aria-hidden="true">↗</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
