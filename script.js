/**
 * ==========================================================
 * SISTEMA C3X4.0 — NÚCLEO FUNCIONAL
 * JS PURO · MOBILE FIRST · COMPATÍVEL
 * SEM BLOQUEIOS · SEM INTEGRIDADE VIOLADA
 * ==========================================================
 */

(function () {
  "use strict";

  /* ==========================================================
     CAMADA 1 — UTILIDADES
  ========================================================== */
  const $ = (el) => document.querySelector(el);
  const $$ = (el) => document.querySelectorAll(el);

  /* ==========================================================
     CAMADA 2 — ESTADO DO SISTEMA
  ========================================================== */
  const Sistema = {
    scrollY: 0,
    ticking: false,
    isMobile: false,
  };

  /* ==========================================================
     CAMADA 3 — DETECÇÃO MOBILE REAL
  ========================================================== */
  function detectarMobile() {
    Sistema.isMobile =
      /Android|iPhone|iPad|iPod|Opera Mini|IEMobile/i.test(
        navigator.userAgent
      ) || window.innerWidth < 900;
  }

  /* ==========================================================
     CAMADA 4 — PARALLAX SUAVE (LEITURA PRESERVADA)
     Apenas deslocamento leve, sem quebrar texto
  ========================================================== */
  function aplicarParallax() {
    const blocos = $$(".unidade-habitacional");

    blocos.forEach((bloco, index) => {
      const fator = Sistema.isMobile ? 0.01 : 0.02;
      const deslocamento = Sistema.scrollY * fator * (index + 1);

      bloco.style.transform = `translateY(${deslocamento}px)`;
    });
  }

  /* ==========================================================
     CAMADA 5 — GLOW DINÂMICO SUAVE (TÍTULOS)
  ========================================================== */
  function glowTitulos() {
    const titulos = $$("h1, h2");

    titulos.forEach((titulo) => {
      titulo.style.textShadow =
        "0 0 6px rgba(255,223,0,0.35), 0 0 14px rgba(255,223,0,0.15)";
    });
  }

  /* ==========================================================
     CAMADA 6 — DESTAQUE DE BLOCO AO TOQUE / HOVER
     Compatível com toque (mobile) e mouse
  ========================================================== */
  function interacaoBlocos() {
    const blocos = $$(".unidade-habitacional");

    blocos.forEach((bloco) => {
      bloco.addEventListener("mouseenter", () => {
        bloco.style.boxShadow =
          "0 0 30px rgba(255,255,255,0.08)";
      });

      bloco.addEventListener("mouseleave", () => {
        bloco.style.boxShadow = "none";
      });

      bloco.addEventListener("touchstart", () => {
        bloco.style.boxShadow =
          "0 0 30px rgba(255,255,255,0.12)";
      });

      bloco.addEventListener("touchend", () => {
        setTimeout(() => {
          bloco.style.boxShadow = "none";
        }, 300);
      });
    });
  }

  /* ==========================================================
     CAMADA 7 — LOOP DE SCROLL OTIMIZADO
  ========================================================== */
  function onScroll() {
    Sistema.scrollY = window.scrollY;

    if (!Sistema.ticking) {
      window.requestAnimationFrame(() => {
        aplicarParallax();
        Sistema.ticking = false;
      });
      Sistema.ticking = true;
    }
  }

  /* ==========================================================
     CAMADA 8 — INICIALIZAÇÃO
  ========================================================== */
  function init() {
    detectarMobile();
    glowTitulos();
    interacaoBlocos();

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", detectarMobile);

    console.log(
      "%c[SISTEMA C3X4.0] Núcleo carregado · Mobile compatível",
      "color:#FFDF00;font-weight:bold;"
    );
  }

  document.addEventListener("DOMContentLoaded", init);
})();
