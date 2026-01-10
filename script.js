/* =========================================================
   SISTEMA C3X4.0 — NÚCLEO JS SOBERANO
   FUNÇÃO: INTERAÇÃO, ESTABILIDADE, SCROLL CONTROLADO
   COMPATÍVEL: MOBILE / GITHUB PAGES / SEM DEPENDÊNCIAS
========================================================= */

(function () {
    "use strict";

    /* =========================
       1. CONTROLE GLOBAL
    ========================= */
    const estadoSistema = {
        integridade: true,
        scrollAtivo: true,
        modoMobile: window.innerWidth <= 768
    };

    /* =========================
       2. DETECÇÃO DE DISPOSITIVO
    ========================= */
    function detectarMobile() {
        estadoSistema.modoMobile = window.innerWidth <= 768;
    }

    window.addEventListener("resize", detectarMobile);

    /* =========================
       3. SCROLL SUAVE CONTROLADO
       (reduzido para leitura)
    ========================= */
    let ultimoScroll = 0;

    window.addEventListener("scroll", () => {
        if (!estadoSistema.scrollAtivo) return;

        const atual = window.scrollY;
        const diferenca = Math.abs(atual - ultimoScroll);

        if (diferenca > 120) {
            window.scrollTo({
                top: ultimoScroll + (atual > ultimoScroll ? 40 : -40),
                behavior: "smooth"
            });
        }

        ultimoScroll = atual;
    }, { passive: true });

    /* =========================
       4. REVELAÇÃO SUAVE DE BLOCOS
    ========================= */
    const blocos = document.querySelectorAll("section, header, footer");

    const observer = new IntersectionObserver((entradas) => {
        entradas.forEach(entrada => {
            if (entrada.isIntersecting) {
                entrada.target.classList.add("ativo");
            }
        });
    }, {
        threshold: estadoSistema.modoMobile ? 0.05 : 0.15
    });

    blocos.forEach(bloco => observer.observe(bloco));

    /* =========================
       5. PROTEÇÃO DE INTEGRIDADE
       (remove falso alerta)
    ========================= */
    function validarIntegridade() {
        const htmlValido = document.documentElement.lang === "pt-BR";
        const cssCarregado = document.styleSheets.length > 0;

        if (!htmlValido || !cssCarregado) {
            estadoSistema.integridade = false;
        } else {
            estadoSistema.integridade = true;
        }
    }

    validarIntegridade();

    /* =========================
       6. DESATIVAR SELEÇÃO
       (ESTÉTICA, NÃO BLOQUEIO)
    ========================= */
    document.addEventListener("selectstart", (e) => {
        if (e.target.tagName !== "INPUT" && e.target.tagName !== "TEXTAREA") {
            e.preventDefault();
        }
    });

    /* =========================
       7. BOTÕES / LINKS FUTUROS
       (RESERVA DE NÚCLEO)
    ========================= */
    document.addEventListener("click", (e) => {
        const alvo = e.target.closest("[data-acao]");
        if (!alvo) return;

        const acao = alvo.getAttribute("data-acao");

        if (acao === "scroll-topo") {
            window.scrollTo({ top: 0, behavior: "smooth" });
        }
    });

    /* =========================
       8. DIAGNÓSTICO SILENCIOSO
    ========================= */
    console.clear();
    console.log("C3X4.0 :: NÚCLEO ATIVO");
    console.log("INTEGRIDADE:", estadoSistema.integridade ? "OK" : "FALHA");
    console.log("MODO:", estadoSistema.modoMobile ? "MOBILE" : "DESKTOP");

})();
